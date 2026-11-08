import { request } from 'node:https';
import { URL } from 'node:url';

function fetch(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        path: parsed.pathname + parsed.search,
        method,
        headers: { 'user-agent': 'TekmoraVerify/1.0' }
      },
      res => {
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: Buffer.concat(chunks).toString('utf8'),
            url
          });
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

const apex = await fetch('https://tekmorasolution.com/');
const www = await fetch('https://www.tekmorasolution.com/');
const title = www.body.match(/<title>(.*?)<\/title>/i)?.[1];
const canonical = www.body.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1]
  || www.body.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)?.[1];
const ogTitle = www.body.match(/property=["']og:title["'] content=["']([^"']+)["']/i)?.[1];
const ogDesc = www.body.match(/property=["']og:description["'] content=["']([^"']+)["']/i)?.[1];
const ogSite = www.body.match(/property=["']og:site_name["'] content=["']([^"']+)["']/i)?.[1];

console.log(JSON.stringify({
  redirect: {
    apexStatus: apex.status,
    apexLocation: apex.headers.location || null,
    wwwStatus: www.status
  },
  metadata: {
    title,
    canonical,
    ogTitle,
    ogDesc,
    ogSite,
    hasNewTitle: Boolean(title?.includes('Custom Software')),
    canonicalIsWww: Boolean(canonical?.startsWith('https://www.tekmorasolution.com'))
  }
}, null, 2));

const sitemap = await fetch('https://www.tekmorasolution.com/sitemap.xml');
const articles = [
  'custom-software-vs-off-the-shelf',
  'what-it-takes-to-build-a-saas-mvp',
  'how-to-plan-a-business-dashboard'
];
console.log(JSON.stringify({
  sitemapStatus: sitemap.status,
  articles: Object.fromEntries(articles.map(slug => [slug, sitemap.body.includes(`/insights/${slug}`)]))
}, null, 2));
