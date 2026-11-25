import { readFile, mkdir, writeFile, readdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { getRouteInventory } from './route-inventory.mjs';

const templateUrl = new URL('../dist/index.html', import.meta.url);
const template = await readFile(templateUrl, 'utf8');
const serverEntry = pathToFileURL(fileURLToPath(new URL('../dist-ssr/entry-server.js', import.meta.url))).href;
const { render } = await import(`${serverEntry}?t=${Date.now()}`);
const assetFiles = await readdir(new URL('../dist/assets/', import.meta.url));

const routeCssPrefix = (path, notFound) => {
  if (notFound) return 'NotFoundPage';
  if (path === '/') return 'HomePage';
  if (path === '/work') return 'WorkPage';
  if (path.startsWith('/work/')) return 'CaseStudyPage';
  if (path === '/services') return 'ServicesPage';
  if (path.startsWith('/services/')) return 'ServiceDetailPage';
  if (path === '/industries') return 'IndustriesPage';
  if (path.startsWith('/industries/')) return 'IndustryDetailPage';
  if (path === '/insights') return 'InsightsPage';
  if (path.startsWith('/insights/')) return 'InsightDetailPage';
  const page = {
    '/about': 'AboutPage', '/contact': 'ContactPage', '/workflow': 'WorkflowPage',
    '/agency-partners': 'AgencyPartnersPage', '/privacy': 'LegalPages', '/terms': 'LegalPages'
  }[path];
  return page;
};

const writeRoute = async (path, markup, notFound = false) => {
  const outputUrl = notFound
    ? new URL('../dist/404.html', import.meta.url)
    : path === '/' ? templateUrl : new URL(`../dist${path}/index.html`, import.meta.url);
  await mkdir(dirname(fileURLToPath(outputUrl)), { recursive: true });
  const headTags = [...markup.matchAll(/<(?:title|meta|link)\b[^>]*?(?:>[^<]*<\/title>|\/?>)/gi)].map(match => match[0]);
  const routeTitle = headTags.find(tag => /^<title/i.test(tag));
  const findHead = (attribute, value) => headTags.find(tag => new RegExp(`${attribute}="${value}"`, 'i').test(tag));
  const routeHead = [
    routeTitle,
    findHead('name', 'description'), findHead('name', 'robots'), findHead('rel', 'canonical'),
    findHead('property', 'og:type'), findHead('property', 'og:url'), findHead('property', 'og:title'),
    findHead('property', 'og:description'), findHead('property', 'og:image'), findHead('property', 'og:site_name'),
    findHead('name', 'twitter:card'), findHead('name', 'twitter:title'),
    findHead('name', 'twitter:description'), findHead('name', 'twitter:image')
  ].filter(Boolean).join('\n  ');
  const cssPrefix = routeCssPrefix(path, notFound);
  const routeCss = cssPrefix && assetFiles.find(file => file.startsWith(`${cssPrefix}-`) && file.endsWith('.css'));
  const routeScript = cssPrefix && assetFiles.find(file => file.startsWith(`${cssPrefix}-`) && file.endsWith('.js'));
  const routeStyle = routeCss ? `<link rel="stylesheet" href="/assets/${routeCss}">` : '';
  const needsProjectPosters = cssPrefix === 'HomePage' || cssPrefix === 'WorkPage' || cssPrefix === 'CaseStudyPage';
  const posterCss = needsProjectPosters && assetFiles.find(file => file.startsWith('ProjectPosters-') && file.endsWith('.css'));
  const posterStyle = posterCss ? `<link rel="stylesheet" href="/assets/${posterCss}">` : '';
  const routeModule = routeScript ? `<link rel="modulepreload" href="/assets/${routeScript}">` : '';
  const rootMarkup = markup.replace(/<(?:title|meta|link)\b[^>]*?(?:>[^<]*<\/title>|\/?>)/gi, '');
  const cleanedTemplate = template
    .replace(/\s*<meta name="description"[^>]*>/i, '')
    .replace(/\s*<link rel="canonical"[^>]*>/i, '')
    .replace(/\s*<meta name="robots"[^>]*>/i, '')
    .replace(/\s*<meta property="og:(?:type|url|title|description|image|site_name|locale)"[^>]*>/gi, '')
    .replace(/\s*<meta name="twitter:(?:card|url|title|description|image)"[^>]*>/gi, '')
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace('</head>', `  ${routeHead}\n  ${routeStyle}\n  ${posterStyle}\n  ${routeModule}\n</head>`);
  const html = cleanedTemplate
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="true">${rootMarkup}</div>`)
    .replace(/\s*<noscript>[\s\S]*?<\/noscript>/i, '');
  await writeFile(outputUrl, html, 'utf8');
};

const routes = await getRouteInventory();
for (const route of routes) await writeRoute(route.path, await render(route.path));
await writeRoute('/404', await render('/__not_found__'), true);
console.log(`Server-rendered ${routes.length} indexable routes and 404.html.`);
