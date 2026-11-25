import test, { afterEach, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { Readable } from 'node:stream';

process.env.NODE_ENV = 'test';
const { default: handler, setTransportFactoryForTests } = await import('../../api/contact.ts');

const originalFetch = globalThis.fetch;
const sent: Array<Record<string, unknown>> = [];
const validPayload = {
  name: 'Alice Example', email: 'alice@example.com', company: 'Example Co',
  projectType: 'Portal', details: 'Build a secure customer portal.', consent: true
};
const successfulTransport = (() => ({
  sendMail: async (message: Record<string, unknown>) => {
    sent.push(message);
    return { messageId: 'mock' };
  }
})) as never;

beforeEach(() => {
  sent.length = 0;
  process.env.NODE_ENV = 'test';
  process.env.SMTP_USER = 'mailer@example.com';
  process.env.SMTP_PASS = 'test-only';
  process.env.MAIL_FROM_EMAIL = 'mailer@example.com';
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
  globalThis.fetch = originalFetch;
  setTransportFactoryForTests(successfulTransport);
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  process.env.NODE_ENV = 'test';
});

const invoke = async ({
  body = validPayload, raw, origin = 'https://www.tekmorasolution.com',
  method = 'POST', ip = '203.0.113.10'
}: {
  body?: unknown; raw?: string; origin?: string; method?: string; ip?: string;
} = {}) => {
  const req = Readable.from([raw ?? JSON.stringify(body)]) as any;
  req.method = method;
  req.headers = { origin, 'x-forwarded-for': ip };
  req.socket = { remoteAddress: ip };
  const headers: Record<string, string> = {};
  let responseBody = '';
  const res = {
    statusCode: 200,
    setHeader: (name: string, value: string) => { headers[name.toLowerCase()] = String(value); },
    end: (value = '') => { responseBody = String(value); }
  } as any;
  await handler(req, res);
  return { status: res.statusCode, headers, body: responseBody ? JSON.parse(responseBody) : {} };
};

test('rejects untrusted origins without sending mail', async () => {
  const result = await invoke({ origin: 'https://evil.example' });
  assert.equal(result.status, 403);
  assert.equal(sent.length, 0);
});

test('enforces the distributed rate limit', async () => {
  process.env.UPSTASH_REDIS_REST_URL = 'https://mock-upstash.example';
  process.env.UPSTASH_REDIS_REST_TOKEN = 'mock-token';
  globalThis.fetch = (async () => new Response(JSON.stringify([{ result: 6 }, { result: 1 }]), { status: 200 })) as typeof fetch;
  const result = await invoke();
  assert.equal(result.status, 429);
  assert.equal(result.headers['retry-after'], '600');
  assert.equal(sent.length, 0);
});

test('fails safely when production rate-limit configuration is missing', async () => {
  process.env.NODE_ENV = 'production';
  const result = await invoke();
  assert.equal(result.status, 503);
  assert.deepEqual(result.body, { error: 'Contact service is temporarily unavailable.' });
  assert.equal(sent.length, 0);
});

test('fails safely when SMTP configuration is missing', async () => {
  delete process.env.SMTP_USER;
  delete process.env.SMTP_PASS;
  delete process.env.MAIL_FROM_EMAIL;
  const result = await invoke();
  assert.equal(result.status, 503);
  assert.deepEqual(result.body, { error: 'Email service is not configured.' });
  assert.equal(sent.length, 0);
});

test('rejects oversized streaming request bodies', async () => {
  const result = await invoke({ raw: JSON.stringify({ ...validPayload, details: 'x'.repeat(17_000) }) });
  assert.equal(result.status, 413);
  assert.deepEqual(result.body, { error: 'Request body is too large.' });
  assert.equal(sent.length, 0);
});

test('rejects invalid methods', async () => {
  const result = await invoke({ method: 'GET' });
  assert.equal(result.status, 405);
  assert.deepEqual(result.body, { error: 'Method not allowed' });
  assert.equal(sent.length, 0);
});

test('rejects invalid email and explicitly declined consent', async () => {
  const badEmail = await invoke({ body: { ...validPayload, email: 'invalid' } });
  assert.equal(badEmail.status, 400);
  const badConsent = await invoke({ body: { ...validPayload, consent: false } });
  assert.equal(badConsent.status, 400);
  assert.match(badConsent.body.error, /Consent must be accepted/);
  assert.equal(sent.length, 0);
});

test('prevents mail header injection', async () => {
  const result = await invoke({
    body: { ...validPayload, name: 'Alice\r\nBcc: attacker@example.com', company: 'Example\nCc: attacker@example.com' }
  });
  assert.equal(result.status, 200);
  assert.equal(sent.length, 2);
  assert.doesNotMatch(String(sent[0].subject), /[\r\n]/);
});

test('escapes HTML injection in every generated message', async () => {
  const result = await invoke({
    body: { ...validPayload, name: '<b>Alice</b>', company: 'A & B', details: '<script>alert(1)</script>' }
  });
  assert.equal(result.status, 200);
  assert.equal(sent.length, 2);
  for (const message of sent) assert.doesNotMatch(String(message.html), /<script>alert/);
  assert.match(String(sent[0].html), /&lt;b&gt;Alice&lt;\/b&gt;/);
  assert.match(String(sent[0].html), /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
});

test('returns a safe error when SMTP delivery fails', async () => {
  setTransportFactoryForTests((() => ({
    sendMail: async () => { throw new Error('SMTP credentials rejected: secret detail'); }
  })) as never);
  const result = await invoke();
  assert.equal(result.status, 500);
  assert.deepEqual(result.body, { error: 'Failed to process inquiry.' });
});

test('accepts a valid mocked submission and sends both messages', async () => {
  const result = await invoke();
  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.equal(sent.length, 2);
  assert.equal(sent[0].to, 'mailer@example.com');
  assert.equal(sent[1].to, 'alice@example.com');
});
