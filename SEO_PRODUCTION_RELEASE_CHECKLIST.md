# Production Release Checklist

Status: **blocked; production deployment is not authorized**

## Required gates

- [ ] Authorized Vercel Preview deployed and accepted.
- [ ] No critical/high functional, security, SEO or accessibility defects remain.
- [ ] Owner disposition recorded for homepage mobile performance.
- [ ] Owner disposition recorded for Work mobile LCP.
- [ ] Owner disposition recorded for Services visual comparison.
- [ ] Production Upstash database/token configured separately from Preview.
- [ ] Production SMTP credentials configured and sender identity verified.
- [ ] GTM container ownership and GA4 production data-stream receipt verified.
- [ ] Search Console/Bing account tasks completed or explicitly deferred.
- [ ] Production environment contains no Preview `X-Robots-Tag` rule.
- [ ] Production `robots.txt` permits intended crawlers and references the production sitemap.
- [ ] Production canonicals and sitemap URLs remain on `www.tekmorasolution.com`.
- [ ] Real 404, permanent redirects, CSP, security headers, Brotli/gzip and caching pass at the edge.
- [ ] Contact rate limit, error handling and authorized real-email test pass.
- [ ] Final build/raw/rendered/API/browser/dependency tests rerun against the release candidate.
- [ ] Explicit written production deployment approval received.

## Rollback readiness

- [ ] Record the last known-good Vercel deployment and commit.
- [ ] Confirm environment variables can be restored without exposing values.
- [ ] Confirm rollback does not restore Formspree fallback or remove Preview/Production credential separation.
- [ ] Monitor 404s, contact API errors, rate-limit service health, SMTP failures and analytics after release.

No item in this checklist grants deployment permission by itself.
