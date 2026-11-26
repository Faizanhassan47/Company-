# Tekmora Solutions — Release Blocker Resolution Report

Date: 2026-11-26  
Commit under test: `44dff209f438e667638e036edb39b7e6850799eb` plus the preserved uncommitted working tree  
Deployment: **not performed**

## Executive decision

The build, all 73 raw routes, all 73 rendered routes, metadata, canonical URLs, structured data, API security tests, analytics tests, accessibility category, SEO category, Best Practices category, dependency audits and CLS checks pass locally. Preview deployment is **not yet approved-ready without exceptions** because:

- homepage mobile median Performance is 80, LCP 3,876 ms and TBT 226 ms;
- Work mobile median LCP is 3,073 ms;
- the desktop `/services` visual comparison retains a 94-pixel antialias mismatch;
- real Vercel headers, redirects, compression, Preview Upstash, SMTP sandbox and GA4/GTM receipt require an authorized Preview and credentials.

Production is **not ready and was not deployed**.

## Comparable test conditions

- Exact final production build from `npm run build`.
- Production-equivalent route-aware `scripts/serve-prerender.mjs` at `127.0.0.1:4188`.
- Lighthouse `13.6.0`, Playwright Chromium `1255`, headless, no sandbox.
- Lighthouse mobile defaults and desktop preset; three new cold Chrome launches per route/form factor.
- Five routes × two form factors × three runs = 30 JSON reports.
- Brotli verified locally with `Accept-Encoding: br`; hashed assets returned `public, max-age=31536000, immutable`.
- Local server resolves prerendered routes and returns a real 404 for unknown paths.
- Gzip fallback and Vercel redirects/headers require Preview validation; the local server is not a Vercel emulator.

The supplied “latest” scores were collected using Vite Preview and are not directly comparable to the compressed route-aware server. They are retained as historical context, not used as the final baseline.

## Final Lighthouse medians

| Route | Form | Perf | A11y | BP | SEO | FCP ms | LCP ms | TBT ms | CLS | SI ms |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | Mobile | **80** | 100 | 100 | 100 | 2,529 | **3,876** | **226** | 0.0000 | 3,396 |
| `/` | Desktop | 96 | 100 | 100 | 100 | 869 | 1,242 | 0 | 0.0000 | 1,075 |
| `/services` | Mobile | 97 | 100 | 100 | 100 | 1,946 | 1,946 | 79 | 0.0000 | 2,788 |
| `/services` | Desktop | 96 | 100 | 100 | 100 | 1,032 | 1,032 | 0 | 0.0000 | 1,310 |
| Custom Software | Mobile | 96 | 100 | 100 | 100 | 1,992 | 1,992 | 129 | 0.0000 | 2,997 |
| Custom Software | Desktop | 97 | 100 | 100 | 100 | 1,005 | 1,005 | 0 | 0.0000 | 1,162 |
| `/work` | Mobile | 93 | 100 | 100 | 100 | 1,811 | **3,073** | 29 | 0.0000 | 2,664 |
| `/work` | Desktop | 95 | 100 | 100 | 100 | 814 | 1,445 | 0 | 0.0000 | 1,049 |
| `/contact` | Mobile | 98 | 100 | 100 | 100 | 1,886 | 1,886 | 36 | 0.0000 | 2,503 |
| `/contact` | Desktop | 96 | 100 | 100 | 100 | 1,026 | 1,026 | 0 | 0.0000 | 1,199 |

All 30 individual results, LCP elements and timing subparts are in `SEO_FINAL_PERFORMANCE_RESULTS.csv`. Raw evidence is in `validation-artifacts/lighthouse-final/`.

## Root causes and corrections

### Homepage CLS and performance

Confirmed CLS root causes were the lazy homepage module collapsing to the Suspense fallback during hydration and late activation of the font stylesheet. The homepage route is now eagerly imported, and font CSS is discovered in the document head. Median CLS improved from the measured production-equivalent baseline of 0.4498 mobile / 1.3557 desktop to 0.0000 on both.

The remaining mobile LCP limitation is the preserved opaque opening experience. Mobile duration is 3 seconds plus its completion transition. The final LCP candidate is the eager DOME image; the overlay delays when meaningful homepage content becomes the final visible candidate. A measured 1.8-second intro experiment still produced median LCP 3,786 ms, so a small timing reduction is insufficient. No Lighthouse detection or functional suppression was used.

Owner options:

1. accept the mobile homepage performance exception;
2. approve a materially shorter or once-per-session mobile intro;
3. approve a non-occluding intro treatment that allows meaningful content to paint earlier.

Each changes the intended experience and requires explicit approval.

### Work mobile LCP

The LCP element is `div.work-case-media ... img` (DOME project image). Median breakdown: TTFB 65 ms, resource delay 45 ms, resource duration 403 ms, render delay 308 ms. It is already eager/high-priority and dimensioned; the remaining total is sensitive to mobile emulation, font/CSS discovery and main-thread scheduling. The median is 3,073 ms despite Performance 93 and TBT 29 ms. Further change should be trace-driven on Vercel Preview before altering the preserved project presentation.

### SEO and Best Practices

Custom Software’s prior SEO 92 failure was Lighthouse `link-text`: three generic “Read more” labels. They now include the resource label. Final SEO is 100 in all six Custom Software runs. Best Practices is 100 in every one of the 30 final runs. CSP no longer permits unused Formspree form/connect destinations.

### Opening accessibility

The prerendered homepage stays mounted. It is `inert` and `aria-hidden` only while the intro is active. Skip Intro is keyboard focused, completion removes both attributes, focus moves to `.skip-link`, and reduced-motion completes in approximately 200 ms. Rendered-route validation reported no hydration or console errors.

### Contact and analytics

Twelve mocked API tests pass: origin, method, payload size, validation/consent, header injection, HTML escaping, distributed rate limit, missing/unavailable Upstash, missing SMTP, SMTP failure and valid submission. No real mail was sent. Browser tests verify one conversion only after API success, none after failure, no PII in the event, one analytics script, SPA page views and consent withdrawal. No active Formspree fallback exists.

## Files modified in this resolution pass

- `src/App.tsx`: eager homepage route; intro focus handoff.
- `src/components/opening/OpeningAnimation.tsx`: reduced-motion timing and Skip focus.
- `index.html`, `src/main.tsx`: deterministic early font discovery without changing typography.
- `src/pages/ServiceDetailPage/ServiceDetailPage.tsx`: descriptive resource links.
- `tests/e2e/site.spec.ts`: accessibility, analytics, contact and deterministic visual checks.
- `tests/api/contact.test.ts`: unavailable Redis coverage.
- `vercel.json`: remove unused Formspree CSP permissions.
- `scripts/generate-final-performance-results.mjs`: reproducible result extraction.
- Required release reports and registers listed below.

Other working-tree modifications predated this pass and were preserved.

## Final regression evidence

| Check | Result |
|---|---|
| Production build | Pass |
| Raw HTML | Pass: 73 routes + `404.html` |
| Rendered DOM | Pass: 73 routes, no hydration/console errors |
| Metadata/canonical/schema | Pass through validators and browser assertions |
| Browser functional tests | Functional assertions pass; visual exception remains |
| API tests | Pass: 12/12 |
| Analytics targeted tests | Pass: 2/2 desktop/mobile after deterministic wait |
| Lint | Exit 0; 10 existing warnings |
| Production dependency audit | 0 vulnerabilities |
| Full dependency audit | 0 vulnerabilities |
| Lighthouse | 30/30 measured; two mobile LCP acceptance failures |
| Real local 404 | Pass |
| Redirects/security headers/gzip | Config verified; external Preview execution required |
| Service worker | API excluded; navigation network-first; static cache fallback configured |

## Environment requirements

Server-only: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `SMTP_HOST` (application default `smtp.hostinger.com`; example intentionally uses a placeholder), `SMTP_PORT` (default 465), `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM_NAME` (default Tekmora Solutions), `MAIL_FROM_EMAIL` (defaults to SMTP user). `VERCEL_URL` is supplied by Vercel.

Browser-safe: `VITE_GTM_CONTAINER_ID`, optional `VITE_GA_MEASUREMENT_ID`, `VITE_CALENDAR_URL`, `VITE_CRISP_WEBSITE_ID`, `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET` (default `production`), `VITE_SENTRY_DSN`. `VITE_FORMSPREE_ENDPOINT_ID` is legacy only and is not a submission fallback.

Preview and Production must use different Upstash databases/tokens. Preview should use an SMTP sandbox; production SMTP must not be copied into Preview. GTM ownership and GA4 data-stream receipt require account access.

## Readiness

- Local engineering: substantially complete, with two measured performance exceptions and one visual acceptance exception.
- Vercel Preview: blocked pending owner decision on the exceptions plus Preview-scoped credentials and explicit deployment authorization.
- Production: blocked pending successful Preview validation, real header/redirect/compression checks, GTM/GA4 receipt, Upstash/SMTP validation, and explicit production authorization.

No commit, push, deployment, credential mutation, external account creation or real email occurred.
