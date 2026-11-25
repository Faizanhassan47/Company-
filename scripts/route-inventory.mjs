import { readFile } from 'node:fs/promises';

const ROOT = new URL('../', import.meta.url);
const SITE_URL = 'https://www.tekmorasolution.com';

const read = (path) => readFile(new URL(path, ROOT), 'utf8');
const unique = (values) => [...new Set(values)];

export async function getRouteInventory() {
  const base = JSON.parse(await read('src/config/publicRoutes.json'));
  const sources = [
    ['src/data/services.ts', '/services/', 'monthly'],
    ['src/data/projects.ts', '/work/', 'monthly'],
    ['src/data/industries.ts', '/industries/', 'monthly'],
    ['src/data/insights.ts', '/insights/', 'monthly']
  ];
  const details = [];

  for (const [file, prefix, changefreq] of sources) {
    const text = await read(file);
    for (const slug of unique([...text.matchAll(/slug:\s*'([^']+)'/g)].map(match => match[1]))) {
      const blockStart = text.indexOf(`slug: '${slug}'`);
      const nextBlock = text.indexOf("\n  {\n    slug:", blockStart + 1);
      const block = text.slice(blockStart, nextBlock < 0 ? undefined : nextBlock);
      const updated = block.match(/updatedDate:\s*'([^']+)'/)?.[1]
        || block.match(/publishDate:\s*'([^']+)'/)?.[1];
      const parsedDate = updated ? new Date(updated) : null;
      details.push({
        id: `${prefix}${slug}`,
        path: `${prefix}${slug}`,
        changefreq,
        priority: 0.7,
        ...(parsedDate && !Number.isNaN(parsedDate.valueOf())
          ? { lastmod: parsedDate.toISOString().slice(0, 10) }
          : {})
      });
    }
  }

  return [...base, ...details.filter(detail => !base.some(route => route.path === detail.path))]
    .map(route => ({ ...route, url: `${SITE_URL}${route.path === '/' ? '/' : route.path}` }));
}

export { SITE_URL };
