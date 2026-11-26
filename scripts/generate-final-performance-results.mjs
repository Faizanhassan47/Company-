import fs from 'node:fs';
import path from 'node:path';

const artifactDir = path.resolve('validation-artifacts/lighthouse-final');
const routes = {
  home: '/',
  services: '/services',
  custom: '/services/custom-software-development',
  work: '/work',
  contact: '/contact'
};
const quote = value => `"${String(value ?? '').replaceAll('"', '""')}"`;
const headers = [
  'record_type', 'route_key', 'url_path', 'form_factor', 'run',
  'performance', 'accessibility', 'best_practices', 'seo',
  'fcp_ms', 'lcp_ms', 'tbt_ms', 'cls', 'speed_index_ms', 'ttfb_ms',
  'lcp_ttfb_ms', 'lcp_resource_delay_ms', 'lcp_resource_duration_ms',
  'lcp_render_delay_ms', 'lcp_element', 'artifact'
];
const rows = [headers];

for (const [routeKey, urlPath] of Object.entries(routes)) {
  for (const formFactor of ['mobile', 'desktop']) {
    const runs = [];
    for (let run = 1; run <= 3; run += 1) {
      const artifact = `${routeKey}-${formFactor}-${run}.json`;
      const report = JSON.parse(fs.readFileSync(path.join(artifactDir, artifact), 'utf8'));
      const audits = report.audits;
      const categories = report.categories;
      const breakdownItems = audits['lcp-breakdown-insight']?.details?.items ?? [];
      const breakdown = Object.fromEntries(
        (breakdownItems.find(item => item.type === 'table')?.items ?? [])
          .map(item => [item.subpart, item.duration])
      );
      const lcpNode = breakdownItems.find(item => item.type === 'node');
      const values = {
        performance: Math.round(categories.performance.score * 100),
        accessibility: Math.round(categories.accessibility.score * 100),
        bestPractices: Math.round(categories['best-practices'].score * 100),
        seo: Math.round(categories.seo.score * 100),
        fcp: Math.round(audits['first-contentful-paint'].numericValue),
        lcp: Math.round(audits['largest-contentful-paint'].numericValue),
        tbt: Math.round(audits['total-blocking-time'].numericValue),
        cls: Number(audits['cumulative-layout-shift'].numericValue.toFixed(4)),
        speedIndex: Math.round(audits['speed-index'].numericValue),
        ttfb: Math.round(audits['server-response-time'].numericValue),
        lcpTtfb: Math.round(breakdown.timeToFirstByte ?? 0),
        resourceDelay: Math.round(breakdown.resourceLoadDelay ?? 0),
        resourceDuration: Math.round(breakdown.resourceLoadDuration ?? 0),
        renderDelay: Math.round(breakdown.elementRenderDelay ?? 0),
        lcpElement: lcpNode?.selector ?? lcpNode?.nodeLabel ?? ''
      };
      runs.push(values);
      rows.push([
        'run', routeKey, urlPath, formFactor, run, values.performance,
        values.accessibility, values.bestPractices, values.seo, values.fcp,
        values.lcp, values.tbt, values.cls.toFixed(4), values.speedIndex,
        values.ttfb, values.lcpTtfb, values.resourceDelay,
        values.resourceDuration, values.renderDelay, values.lcpElement, artifact
      ]);
    }

    const median = key => runs.map(values => values[key]).sort((a, b) => a - b)[1];
    const lcpElement = runs
      .map(values => values.lcpElement)
      .sort((a, b) => runs.filter(values => values.lcpElement === b).length
        - runs.filter(values => values.lcpElement === a).length)[0];
    rows.push([
      'median', routeKey, urlPath, formFactor, 'median', median('performance'),
      median('accessibility'), median('bestPractices'), median('seo'),
      median('fcp'), median('lcp'), median('tbt'), median('cls').toFixed(4),
      median('speedIndex'), median('ttfb'), median('lcpTtfb'),
      median('resourceDelay'), median('resourceDuration'), median('renderDelay'),
      lcpElement, '3 cold-profile runs'
    ]);
  }
}

process.stdout.write(`${rows.map(row => row.map(quote).join(',')).join('\n')}\n`);
