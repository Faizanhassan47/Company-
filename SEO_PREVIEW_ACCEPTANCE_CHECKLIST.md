# Vercel Preview Acceptance Checklist

Status: **not deployed; authorization and isolated credentials required**

## Before deployment

- [ ] Owner accepts or requests a change for homepage mobile performance.
- [ ] Owner accepts or requests a change for Work mobile LCP.
- [ ] Owner approves the `/services` desktop visual baseline update or documented exception.
- [ ] Confirm intended commit plus reviewed working-tree diff.
- [ ] Configure Preview-only Upstash database and REST token.
- [ ] Configure Preview-only SMTP sandbox; do not copy production SMTP secrets.
- [ ] Scope browser-safe GTM/GA identifiers to Preview as intended.
- [ ] Confirm Preview deployments inject `X-Robots-Tag: noindex, nofollow` without modifying production artifacts.
- [ ] Do not set or expose unsupported variables such as `SMTP_SECURE`, `SMTP_FROM`, `CONTACT_TO_EMAIL`, or `CONTACT_ALLOWED_ORIGINS`.

## Preview validation

- [ ] Verify all 73 raw route responses contain route-specific HTML and production canonicals.
- [ ] Verify all 73 rendered routes without hydration/console errors.
- [ ] Verify unknown URLs return HTTP 404, not a soft 404.
- [ ] Verify `/case-study` and `/case-studies` return permanent redirects to `/work`.
- [ ] Verify CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy and COOP.
- [ ] Verify Brotli and gzip negotiation at the edge.
- [ ] Verify immutable hashed assets and one-hour discovery-file caching.
- [ ] Verify `sitemap.xml`, `robots.txt`, `llms.txt`, manifest, favicons and social preview assets.
- [ ] Confirm production canonical URLs remain `https://www.tekmorasolution.com/...`.
- [ ] Confirm Preview noindex does not alter sitemap, canonicals or production deployment settings.
- [ ] Verify service worker install/update, API exclusion, navigation network-first and static cache behavior.
- [ ] Run three Lighthouse audits per route/form factor under production-equivalent conditions.
- [ ] Verify GTM consent denied/granted/withdrawn, SPA page views, script deduplication and GA4 DebugView receipt.
- [ ] Verify no PII in analytics payloads.
- [ ] Verify Upstash rate limiting with the isolated Preview database.
- [ ] Verify SMTP connectivity to the sandbox.
- [ ] Request explicit approval before sending any real test email.
- [ ] Verify the three contact surfaces, error states, duplicate submission protection and exactly one success conversion.
- [ ] Repeat visual checks on fixed Chromium/OS without updating baselines automatically.

## Acceptance rule

Preview passes only when every critical HTTP/security/contact gate passes and remaining performance/visual exceptions are explicitly owner-approved. Preview approval does not authorize Production.
