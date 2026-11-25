import { writeFile } from 'node:fs/promises';
import { getRouteInventory } from './route-inventory.mjs';

const outputUrl = new URL('../public/sitemap.xml', import.meta.url);
const allRoutes = await getRouteInventory();

const entries = allRoutes.map(route => `  <url>
    <loc>${route.url}</loc>
${route.lastmod ? `    <lastmod>${route.lastmod}</lastmod>\n` : ''}    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

await writeFile(outputUrl, sitemap, 'utf8');
console.log(`Generated sitemap with ${allRoutes.length} public routes.`);
