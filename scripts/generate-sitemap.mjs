import { readFile, writeFile } from 'node:fs/promises';

const siteUrl = 'https://tekmorasolution.com';
const routesUrl = new URL('../src/config/publicRoutes.json', import.meta.url);
const outputUrl = new URL('../public/sitemap.xml', import.meta.url);
const routes = JSON.parse(await readFile(routesUrl, 'utf8'));
const lastModified = new Date().toISOString().slice(0, 10);

const entries = routes.map(route => `  <url>
    <loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

await writeFile(outputUrl, sitemap, 'utf8');
console.log(`Generated sitemap with ${routes.length} public routes.`);
