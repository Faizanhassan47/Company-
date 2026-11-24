export type CodeTokenType =
  | 'plain'
  | 'keyword'
  | 'string'
  | 'comment'
  | 'fn'
  | 'tag'
  | 'attr'
  | 'number'
  | 'type'
  | 'punct';

export type CodeToken = {
  t: CodeTokenType;
  v: string;
};

export type CodeLayer = {
  id: string;
  label: string;
  filename: string;
  /** Desktop Z depth (px). Closer to 0 = nearer camera. */
  z: number;
  rotateY: number;
  rotateX: number;
  x: number;
  y: number;
  lines: CodeToken[][];
};

const L = (
  ...parts: Array<string | CodeToken>
): CodeToken[] =>
  parts.map(part =>
    typeof part === 'string' ? { t: 'plain', v: part } : part
  );

const k = (v: string): CodeToken => ({ t: 'keyword', v });
const s = (v: string): CodeToken => ({ t: 'string', v });
const c = (v: string): CodeToken => ({ t: 'comment', v });
const f = (v: string): CodeToken => ({ t: 'fn', v });
const tag = (v: string): CodeToken => ({ t: 'tag', v });
const a = (v: string): CodeToken => ({ t: 'attr', v });
const n = (v: string): CodeToken => ({ t: 'number', v });
const ty = (v: string): CodeToken => ({ t: 'type', v });
const p = (v: string): CodeToken => ({ t: 'punct', v });

export const OPENING_LAYERS: CodeLayer[] = [
  {
    id: 'html',
    label: 'Markup',
    filename: 'index.html',
    z: -80,
    rotateY: -8,
    rotateX: 4,
    x: -120,
    y: -40,
    lines: [
      L(p('<!'), tag('DOCTYPE'), ' ', tag('html'), p('>')),
      L(p('<'), tag('html'), ' ', a('lang'), p('='), s('"en"'), p('>')),
      L(p('<'), tag('head'), p('>')),
      L('  ', p('<'), tag('title'), p('>'), 'Tekmora Solutions', p('</'), tag('title'), p('>')),
      L('  ', p('<'), tag('meta'), ' ', a('name'), p('='), s('"description"'), p(' />')),
      L(p('</'), tag('head'), p('>')),
      L(p('<'), tag('body'), p('>')),
      L('  ', p('<'), tag('div'), ' ', a('id'), p('='), s('"root"'), p('></'), tag('div'), p('>')),
      L(p('</'), tag('body'), p('>'))
    ]
  },
  {
    id: 'css',
    label: 'Styles',
    filename: 'theme.css',
    z: -420,
    rotateY: 10,
    rotateX: -3,
    x: 140,
    y: 20,
    lines: [
      L(p(':root'), ' ', p('{')),
      L('  ', a('--bg-main'), p(':'), ' ', f('var'), p('(--surface)'), p(';')),
      L('  ', a('--accent'), p(':'), ' ', f('var'), p('(--brand)'), p(';')),
      L('  ', a('--font-mono'), p(':'), ' ', s('"JetBrains Mono"'), p(';')),
      L(p('}')),
      L(p('.layout'), ' ', p('{')),
      L('  ', a('display'), p(':'), ' ', k('grid'), p(';')),
      L('  ', a('gap'), p(':'), ' ', n('1.5'), a('rem'), p(';')),
      L(p('}'))
    ]
  },
  {
    id: 'react',
    label: 'Interface',
    filename: 'App.tsx',
    z: -760,
    rotateY: -6,
    rotateX: 5,
    x: -90,
    y: 60,
    lines: [
      L(k('import'), ' ', p('{'), ' ', ty('Routes'), p(' }'), ' ', k('from'), ' ', s('"react-router"'), p(';')),
      L(k('export'), ' ', k('function'), ' ', f('App'), p('()'), ' ', p('{')),
      L('  ', k('return'), ' ', p('(')),
      L('    ', p('<'), tag('main'), p('>')),
      L('      ', p('<'), tag('Navbar'), ' ', p('/>')),
      L('      ', p('<'), tag('Routes'), ' ', p('/>')),
      L('    ', p('</'), tag('main'), p('>')),
      L('  ', p(');')),
      L(p('}'))
    ]
  },
  {
    id: 'node',
    label: 'API',
    filename: 'server.ts',
    z: -1100,
    rotateY: 7,
    rotateX: -4,
    x: 110,
    y: -30,
    lines: [
      L(k('import'), ' ', f('express'), ' ', k('from'), ' ', s('"express"'), p(';')),
      L(k('const'), ' ', f('app'), ' ', p('='), ' ', f('express'), p('();')),
      L(f('app'), p('.'), f('get'), p('('), s('"/api/health"'), p(','), ' ', k('async'), ' ', p('('), f('req'), p(','), ' ', f('res'), p(')'), ' ', p('=>'), ' ', p('{')),
      L('  ', f('res'), p('.'), f('json'), p('({'), ' ', a('ok'), p(':'), ' ', k('true'), p(' });')),
      L(p('});')),
      L(f('app'), p('.'), f('listen'), p('('), n('3000'), p(');'))
    ]
  },
  {
    id: 'sql',
    label: 'Data',
    filename: 'orders.sql',
    z: -1440,
    rotateY: -9,
    rotateX: 3,
    x: -70,
    y: 40,
    lines: [
      L(k('SELECT'), ' ', f('o.id'), p(','), ' ', f('o.status'), p(','), ' ', f('c.name')),
      L(k('FROM'), ' ', ty('orders'), ' ', f('o')),
      L(k('JOIN'), ' ', ty('customers'), ' ', f('c'), ' ', k('ON'), ' ', f('c.id'), ' ', p('='), ' ', f('o.customer_id')),
      L(k('WHERE'), ' ', f('o.updated_at'), ' ', p('>'), ' ', f('DATEADD'), p('('), k('hour'), p(','), ' ', n('-24'), p(','), ' ', f('SYSUTCDATETIME'), p('())')),
      L(k('ORDER BY'), ' ', f('o.updated_at'), ' ', k('DESC'), p(';')),
      L(c('-- simulated response')),
      L(p('{'), ' ', s('"rows"'), p(':'), ' ', n('128'), p(','), ' ', s('"latencyMs"'), p(':'), ' ', n('14'), ' ', p('}'))
    ]
  },
  {
    id: 'deploy',
    label: 'Release',
    filename: 'deploy.sh',
    z: -1780,
    rotateY: 5,
    rotateX: -2,
    x: 40,
    y: -50,
    lines: [
      L(c('# production build — simulated')),
      L(f('npm'), ' ', k('run'), ' ', s('build')),
      L(f('vite'), ' ', s('build'), ' ', p('→'), ' ', s('dist/')),
      L(f('upload'), ' ', s('artifacts'), ' ', p('→'), ' ', s('cdn')),
      L(f('invalidate'), ' ', s('cache')),
      L(k('status'), p(':'), ' ', s('ready'))
    ]
  }
];

/** Mobile keeps depth readable with only two simultaneous layers. */
export const MOBILE_LAYER_IDS = ['html', 'react'] as const;
