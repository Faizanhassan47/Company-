import { request } from 'node:https';
import { URL } from 'node:url';

function get(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'GET',
        headers: { 'user-agent': 'TekmoraSEO/1.0' }
      },
      res => {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => {
          resolve({
            url,
            status: res.statusCode,
            location: res.headers.location || null,
            ctype: res.headers['content-type'] || '',
            body: Buffer.concat(chunks).toString('utf8')
          });
        });
      }
    )
      .on('error', reject)
      .end();
  });
}

const apex = await get('https://tekmorasolution.com/');
const www = await get('https://www.tekmorasolution.com/');
const robots = await get('https://www.tekmorasolution.com/robots.txt');
const sm = await get('https://www.tekmorasolution.com/sitemap.xml');

const paths = [
  '/',
  '/services',
  '/services/custom-software-development',
  '/services/web-application-development',
  '/services/mobile-app-development',
  '/services/saas-engineering-modernization',
  '/services/ui-ux-product-design',
  '/services/performance-scaling-cloud-devops',
  '/work',
  '/agency-partners',
  '/contact',
  '/about'
];

const pages = [];
for (const path of paths) {
  const res = await get(`https://www.tekmorasolution.com${path}`);
  pages.push({ path, status: res.status });
}

const locs = [...sm.body.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const title = www.body.match(/<title>(.*?)<\/title>/i)?.[1] || null;
const canonical =
  www.body.match(/rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1] ||
  www.body.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)?.[1] ||
  null;

console.log(
  JSON.stringify(
    {
      checklist: {
        sitemap_200_xml: sm.status === 200 && (sm.ctype.includes('xml') || sm.body.trim().startsWith('<?xml')),
        robots_allows_crawl: robots.status === 200 && !/Disallow:\s*\/$/m.test(robots.body),
        canonical_www: canonical?.startsWith('https://www.tekmorasolution.com'),
        apex_redirects_to_www: apex.status === 308 && String(apex.location || '').includes('www.tekmorasolution.com'),
        important_pages_200: pages.every(p => p.status === 200),
        unique_home_title: Boolean(title && title.includes('Custom Software')),
        noindex_not_set: !/noindex/i.test(www.body),
        sitemap_includes_custom_software: locs.some(u => u.includes('/services/custom-software-development'))
      },
      details: {
        title,
        canonical,
        apex: { status: apex.status, location: apex.location },
        sitemapUrlCount: locs.length,
        robotsSnippet: robots.body.trim(),
        pages
      }
    },
    null,
    2
  )
);
