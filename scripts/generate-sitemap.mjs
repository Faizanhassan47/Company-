import { readFile, writeFile } from 'node:fs/promises';

const siteUrl = 'https://tekmorasolution.com';
const routesUrl = new URL('../src/config/publicRoutes.json', import.meta.url);
const outputUrl = new URL('../public/sitemap.xml', import.meta.url);
const routes = JSON.parse(await readFile(routesUrl, 'utf8'));
const dataSources = [
  { file: '../src/data/services.ts', prefix: '/services/' },
  { file: '../src/data/projects.ts', prefix: '/work/' },
  { file: '../src/data/industries.ts', prefix: '/industries/' },
  { file: '../src/data/insights.ts', prefix: '/insights/' }
];

const detailRoutes = [];
for (const source of dataSources) {
  const sourceUrl = new URL(source.file, import.meta.url);
  const sourceText = await readFile(sourceUrl, 'utf8');
  const slugs = [...sourceText.matchAll(/slug:\s*'([^']+)'/g)].map(match => match[1]);
  for (const slug of new Set(slugs)) {
    detailRoutes.push({
      id: `${source.prefix}${slug}`,
      path: `${source.prefix}${slug}`,
      changefreq: 'monthly',
      priority: 0.7
    });
  }
}

const allRoutes = [...routes, ...detailRoutes.filter(detail => !routes.some(route => route.path === detail.path))];
const lastModified = new Date().toISOString().slice(0, 10);

const entries = allRoutes.map(route => `  <url>
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
console.log(`Generated sitemap with ${allRoutes.length} public routes.`);
