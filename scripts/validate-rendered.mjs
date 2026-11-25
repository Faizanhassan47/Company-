import { chromium } from '@playwright/test';
import { getRouteInventory } from './route-inventory.mjs';

const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:4188';
const routes = await getRouteInventory();
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const failures = [];
let consoleErrors = [];
const routePaths = new Set(routes.map(route => route.path));
const linkedPaths = new Set(['/']);

page.on('console', message => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});
for (const route of routes) {
  consoleErrors = [];
  const response = await page.goto(`${baseUrl}${route.path}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(50);
  const result = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelectorAll('h1').length,
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    robots: document.querySelector('meta[name="robots"]')?.getAttribute('content'),
    schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map(node => node.textContent || '')
    ,links: [...document.querySelectorAll('a[href]')].map(node => node.getAttribute('href'))
    ,ids: [...document.querySelectorAll('[id]')].map(node => node.id)
  }));
  if (response?.status() !== 200) failures.push(`${route.path}: HTTP ${response?.status()}`);
  if (!result.title) failures.push(`${route.path}: missing title`);
  if (result.h1 !== 1) failures.push(`${route.path}: ${result.h1} H1 elements`);
  if (result.canonical !== `https://www.tekmorasolution.com${route.path === '/' ? '/' : route.path}`) {
    failures.push(`${route.path}: incorrect canonical ${result.canonical}`);
  }
  if (result.robots?.includes('noindex')) failures.push(`${route.path}: indexable route is noindex`);
  for (const schema of result.schemas) {
    try { JSON.parse(schema); } catch { failures.push(`${route.path}: invalid JSON-LD`); }
  }
  for (const href of result.links) {
    if (!href || /^(mailto:|tel:|https?:\/\/|#)/.test(href)) {
      if (href?.startsWith('#') && href.length > 1 && !result.ids.includes(href.slice(1))) {
        failures.push(`${route.path}: missing hash target ${href}`);
      }
      continue;
    }
    const pathname = new URL(href, 'https://www.tekmorasolution.com').pathname.replace(/\/$/, '') || '/';
    if (pathname === '/case-study' || pathname === '/case-studies') continue;
    if (!routePaths.has(pathname)) failures.push(`${route.path}: broken internal link ${href}`);
    linkedPaths.add(pathname);
  }
  if (consoleErrors.length) failures.push(`${route.path}: ${consoleErrors.length} console errors`);
}

for (const route of routes) {
  if (route.path !== '/' && !linkedPaths.has(route.path)) failures.push(`${route.path}: orphan route`);
}

await browser.close();
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Validated rendered DOM for ${routes.length} routes with no hydration or console errors.`);
