import { readFile } from 'node:fs/promises';
import { getRouteInventory } from './route-inventory.mjs';

const routes = await getRouteInventory();
const seenTitles = new Set();
for (const route of routes) {
  const file = route.path === '/' ? '../dist/index.html' : `../dist${route.path}/index.html`;
  const html = await readFile(new URL(file, import.meta.url), 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  if (!title || seenTitles.has(title)) throw new Error(`Missing or duplicate title: ${route.path} (${title})`);
  if (canonical !== route.url) throw new Error(`Bad canonical: ${route.path} (${canonical})`);
  if (!/<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html)) throw new Error(`Missing description: ${route.path}`);
  if (!/<meta[^>]+name="robots"[^>]+content="index, follow, max-image-preview:large"/i.test(html)) throw new Error(`Bad robots: ${route.path}`);
  if ((html.match(/<h1(?:\s|>)/gi) || []).length !== 1) throw new Error(`Expected one H1: ${route.path}`);
  if (!/<script[^>]+application\/ld\+json/i.test(html)) throw new Error(`Missing JSON-LD: ${route.path}`);
  seenTitles.add(title);
}
const notFound = await readFile(new URL('../dist/404.html', import.meta.url), 'utf8');
if (!/noindex/i.test(notFound)) throw new Error('404 page must be noindex.');
console.log(`Validated raw HTML for ${routes.length} routes and 404.html.`);
