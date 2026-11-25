# SEO Preview Deployment Report

Date: 2026-11-25 (Asia/Karachi)

## Deployment

- Project: `faizanhassan47s-projects/techmora` (`prj_Hxn058YEvN0oonePxILFyZACBfe5`)
- Commit deployed: `6ba36e50c6635e6ed8cf93d5e05a26089819325e` (`origin/main` at validation time)
- Environment: Vercel Preview only
- Preview URL: https://techmora-fjv2znycw-faizanhassan47s-projects.vercel.app
- Production aliases changed: no
- Production deployment: not performed
- Preview access: Vercel Authentication enabled. This keeps the preview unavailable to public crawlers.
- Preview indexing: `X-Robots-Tag: noindex` verified on preview responses. This is Vercel preview behavior, not a production source-code setting; it does not carry to Production.

## Required environment variables

Verified by variable name only; secret values were not read or exposed.

| Variable | Preview | Production | Result |
| --- | --- | --- | --- |
| `VITE_GTM_CONTAINER_ID` | present | present | Pass |
| `VITE_FORMSPREE_ENDPOINT_ID` | present | present | Pass |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` | present | present | Present |
| `MAIL_FROM_NAME`, `MAIL_FROM_EMAIL` | present | present | Present |
| `UPSTASH_REDIS_REST_URL` | missing | missing | Blocker for production-safe rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | missing | missing | Blocker for production-safe rate limiting |
| `VITE_GA_MEASUREMENT_ID` | not required when GTM is configured | not required when GTM is configured | Not blocking |

Use a separate Upstash database/token for Preview, then add both variables in Vercel with scope **Preview**. Add the production database/token only to **Production**.

## Regression results

| Check | Result | Evidence |
| --- | --- | --- |
| Production build | Pass | TypeScript, client build, SSR build and prerender completed locally. |
| Raw prerender routes | Pass | 73 routes plus `404.html` validated locally. |
| Rendered routes / hydration / console | Pass | 73 routes validated locally with no hydration or console errors. |
| Browser and visual regression | Pass | 40 Playwright desktop/mobile checks passed. |
| Contact API regression suite | Pass | 11 mocked tests passed; no real email sent. |
| Preview HTTP routes | Pass | All 73 indexable routes returned HTTP 200 through Vercel's protected validation path. |
| Unknown URL | Pass | Real HTTP 404 verified. |
| `/case-study`, `/case-studies` | Pass | Permanent HTTP 308 redirects to `/work`. |
| Canonical and social metadata | Pass (sample) | Preview HTML for custom software page kept the production canonical and contained Open Graph/Twitter metadata. |
| Sitemap / robots / llms | Pass | `/sitemap.xml`, `/robots.txt`, `/llms.txt` each returned HTTP 200. |
| Security headers | Pass | CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, COOP, Referrer-Policy and Permissions-Policy observed. |
| Compression and caching | Pass | JavaScript asset returned gzip with `Cache-Control: public, max-age=31536000, immutable`. |

## Analytics and contact validation

- GTM container configuration is present in Preview and Production by name.
- The application only injects GTM after analytics consent; this was validated locally in both grant and denial paths during the prior implementation check.
- Live browser validation of GA4 events was not run because Vercel Authentication correctly blocks unauthenticated browser access to the preview. No analytics event was fabricated.
- SMTP credentials are present, but SMTP `verify()` was not invoked because this would make an external authenticated connection. No test email was sent.
- Upstash rate-limit connectivity cannot be validated because both required variables are absent. The contact handler fails safely with HTTP 503 in this configuration; mocked enforcement tests passed.

## Performance

No preview Lighthouse measurements were recorded. The protected preview cannot be audited by ordinary Lighthouse without weakening preview protection or supplying an authenticated browser session. Therefore the requested three mobile and three desktop measurements per representative route remain incomplete; no scores are reported.

## Remaining blockers

1. Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` using preview-safe credentials, then validate live rate limiting.
2. Authorize an authenticated Lighthouse method, or temporarily use a separately protected performance-preview deployment, before recording preview Lighthouse measurements.
3. Authorize an SMTP connectivity check before it is attempted; approval to send a real test email is separately required.
4. `favicon.ico` returned HTTP 404. Confirm the deployed `favicon.svg`/declared favicon asset is the intended public favicon before production approval.
5. `SEO_AUDIT_REPORT.md`, `SEO_IMPLEMENTATION_REPORT.md`, and `SEO_FINAL_VALIDATION_REPORT.md` were absent from this checkout, so their final checklists and prior measurements could not be re-read.

## Production readiness assessment

The preview deployment, route rendering, redirects, security headers, preview indexing isolation, and local regressions passed. Production is **not ready for approval** until the Upstash variables and the listed validation blockers are resolved. No production deployment was made.
