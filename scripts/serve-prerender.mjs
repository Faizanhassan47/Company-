import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { brotliCompress } from 'node:zlib';
import { promisify } from 'node:util';

const root = join(process.cwd(), 'dist');
const port = Number(process.env.PORT || 4188);
const compress = promisify(brotliCompress);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.woff2': 'font/woff2', '.ico': 'image/x-icon'
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const candidate = extname(relative) ? relative : join(relative, 'index.html');
    const file = normalize(join(root, candidate));
    if (!file.startsWith(normalize(root))) throw new Error('Invalid path');
    await stat(file);
    const contentType = types[extname(file)] || 'application/octet-stream';
    let body = await readFile(file);
    response.setHeader('Content-Type', contentType);
    response.setHeader('Vary', 'Accept-Encoding');
    if (pathname.startsWith('/assets/')) response.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    if (/^(text\/|application\/(javascript|json|xml))/.test(contentType) && request.headers['accept-encoding']?.includes('br')) {
      body = await compress(body);
      response.setHeader('Content-Encoding', 'br');
    }
    response.end(body);
  } catch {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(await readFile(join(root, '404.html')));
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Prerender server: http://127.0.0.1:${port}`);
});
