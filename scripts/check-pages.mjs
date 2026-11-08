import { request } from 'node:https';

const paths = [
  '/services/custom-software-development',
  '/services/web-application-development',
  '/services/mobile-app-development',
  '/services/saas-engineering-modernization',
  '/services/ui-ux-product-design',
  '/services/performance-scaling-cloud-devops',
  '/insights/custom-software-vs-off-the-shelf',
  '/insights/what-it-takes-to-build-a-saas-mvp',
  '/insights/how-to-plan-a-business-dashboard'
];

function get(path) {
  return new Promise((resolve, reject) => {
    request(
      {
        hostname: 'www.tekmorasolution.com',
        path,
        method: 'GET',
        headers: { 'user-agent': 'TekmoraCheck/1.0' }
      },
      res => {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => {
          const body = Buffer.concat(chunks).toString('utf8');
          resolve({
            path,
            status: res.statusCode,
            title: body.match(/<title>(.*?)<\/title>/i)?.[1] || null
          });
        });
      }
    )
      .on('error', reject)
      .end();
  });
}

for (const path of paths) {
  console.log(JSON.stringify(await get(path)));
}
