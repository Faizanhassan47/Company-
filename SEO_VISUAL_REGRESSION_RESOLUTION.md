# Tekmora Solutions Visual Regression Resolution

Date: 2026-11-26  
Scope: five representative routes, desktop and mobile, approved baselines unchanged.

## Outcome

The earlier homepage mismatch was a deterministic test-state defect, not a website regression. Finishing the opening sequence correctly moves keyboard focus to `.skip-link`; the screenshot test captured that focus outline. The test now blurs focus, forces scroll position `(0, 0)`, waits two animation frames, explicitly loads Poppins weights, removes capture-time transitions, and moves the pointer away before comparison. Homepage, Work and Contact comparisons pass on both projects. Custom Software passes in isolated deterministic runs and mobile full-suite runs.

One unresolved comparison remains: desktop `/services` differs by 94 thresholded pixels (reported ratio `0.01`) in lower-viewport text antialiasing. Expected and actual layout, content, dimensions, colors and typography are visually identical. The delta is stable at the glyph edges of the partially clipped next heading. No tolerance was increased and no baseline was regenerated.

## Evidence

| Route | Desktop | Mobile | Evidence |
|---|---:|---:|---|
| `/` | Pass | Pass | Playwright screenshot assertions |
| `/services` | **Fail: 94 pixels** | Pass | `test-results/.../services-diff.png` |
| `/services/custom-software-development` | Pass when isolated; can vary under concurrent external-font loading | Pass | targeted 2-test run and full-suite artifacts |
| `/work` | Pass | Pass | Playwright screenshot assertions |
| `/contact` | Pass | Pass | Playwright screenshot assertions |

The earlier Custom Software full-suite delta (12,593 desktop pixels) was traced to font readiness under parallel capture. Waiting for the exact Poppins weights made the isolated comparison pass without modifying the application or baseline.

## Changes to test determinism

- `tests/e2e/site.spec.ts`: wait for `document.fonts.ready` and Poppins weights 400/600/700.
- Normalize capture scroll and focus state only inside the visual test.
- Disable animations/transitions only inside screenshot capture.
- Use forced Skip Intro activation in tests so a moving button cannot detach during the click.
- Preserve exact pixel comparison; no `maxDiffPixels`, ratio tolerance, or baseline update was added.

## Decision required

The visual acceptance target is not fully met. The owner may either:

1. authorize regeneration of the desktop `/services` baseline after reviewing expected/actual/diff images; or
2. retain the existing baseline and accept the documented 94-pixel rendering exception for the pinned Windows Chromium environment.

Until one is approved, visual regression remains a release acceptance blocker.
