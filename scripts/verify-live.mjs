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

async function follow(url, max = 5) {
  let current = url;
  for (let i = 0; i < max; i += 1) {
    const res = await fetch(current);
    if (res.status >= 300 && res.status < 400 && res.headers.location) {
      current = new URL(res.headers.location, current).href;
      continue;
    }
    return { ...res, finalUrl: current };
  }
  throw new Error(`Too many redirects for ${url}`);
}

const apex = await fetch('https://tekmorasolution.com/');
const www = await follow('https://www.tekmorasolution.com/');
const home = await follow('https://tekmorasolution.com/');

const title = home.body.match(/<title>(.*?)<\/title>/i)?.[1];
const canonical = home.body.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1]
  || home.body.match(/href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)?.[1];
const ogTitle = home.body.match(/property=["']og:title["'] content=["']([^"']+)["']/i)?.[1];
const ogDesc = home.body.match(/property=["']og:description["'] content=["']([^"']+)["']/i)?.[1];
const ogSite = home.body.match(/property=["']og:site_name["'] content=["']([^"']+)["']/i)?.[1];

console.log(JSON.stringify({
  apexStatus: apex.status,
  apexLocation: apex.headers.location || null,
  wwwStatus: www.status,
  wwwFinal: www.finalUrl,
  homeFinal: home.finalUrl,
  title,
  canonical,
  ogTitle,
  ogDesc,
  ogSite,
  hasNewTitle: Boolean(title?.includes('Custom Software')),
  hasOrgName: home.body.includes('Tekmora Solutions')
}, null, 2));

const apexSitemap = await fetch('https://tekmorasolution.com/sitemap.xml');
const wwwSitemap = await fetch('https://www.tekmorasolution.com/sitemap.xml');
const articles = [
  'custom-software-vs-off-the-shelf',
  'what-it-takes-to-build-a-saas-mvp',
  'how-to-plan-a-business-dashboard'
];
console.log(JSON.stringify({
  apexSitemap: { status: apexSitemap.status, location: apexSitemap.headers.location || null },
  wwwSitemap: { status: wwwSitemap.status, location: wwwSitemap.headers.location || null, bytes: wwwSitemap.body.length },
  articles: Object.fromEntries(articles.map(slug => [slug, wwwSitemap.body.includes(slug) || apexSitemap.body.includes(slug)]))
}, null, 2));
