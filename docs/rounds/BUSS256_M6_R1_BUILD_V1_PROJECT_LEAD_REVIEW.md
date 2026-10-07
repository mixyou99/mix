# BUSS256 M6-R1 — Build v1 Project-Lead Review

**Decision: BUILD v1 = PASS WITH TARGETED v1.1 PATCH.**

Build v1 (`work/m6_r1_build_v1/BUSS256_M6_R1_2027_BUILD_v1.pptx`, with its PDF and QA report) was reviewed by the project lead and found technically sound. Twenty-four of thirty slides are accepted as-is. Only six slides are authorized for change in Build v1.1: **#10, #16, #21, #22, #23, #29**. All other slides are locked.

Authority is unchanged: frozen content commit `1c6fe4870b6fab5f220cfb81b88a364222e08316`; `BUSS256_M6_R1_CONTENT_SPEC_v2_1.md` and `BUSS256_M6_R1_PPTX_BUILD_SPEC_v1.md` are not modified by this review.

## 1. Post-freeze content corrections (2)

Discovered while reviewing the actual slides. These are two targeted corrections, **not a reopening of the curriculum or of M6-R1 content decisions**.

| Slide | Problem found | Correction |
|---|---|---|
| #21 Descriptive analytics | The final bold line ("Learn from past behaviours, and understand how they might influence future outcomes") blurs descriptive and predictive analytics and conflicts with #20, where Descriptive Analytics = "What has happened?" | Replace only that bottom line with: "Descriptive analytics summarizes past and current performance — it tells us what happened." Title, main heading and the four bullets above are preserved; no new analytics category. |
| #23 Predictive analytics | Two bullets implied that prediction determines the best action or improves results, which conflicts with #26 ("Prediction or association alone ≠ causal proof"). | Keep title and lead statement; replace the three bullets with: (1) "This can support planning by estimating possible future outcomes." (2) "Discover patterns and correlations in data that might be missed by the human eye." (3) "Build models that generate estimates under specified inputs or assumptions." The native Input → Method / model → Estimate flow is preserved. |

## 2. Mechanical / design corrections (4)

| Slide | Correction |
|---|---|
| #10 | Title wrap only: forced balanced two lines — "Business analytics: from a business problem / to a better-informed decision" (no break after "better-"). No other change. |
| #16 | Title wrap only: forced balanced two lines — "Why can we collect so much data? / Two separate technology trends". Rest of slide unchanged. |
| #22 | Remove only the separate top-right dashed duplicate tag "ILLUSTRATIVE EXAMPLE — Online Store". Kept: title with "(illustrative)", the dashboard's internal header with the same label, the toy-values disclaimer, KPIs, weekly-revenue chart, both questions. |
| #29 | Title wrap only: balanced two lines — "What business analytics can support / — and what it cannot guarantee". Body and two-column design unchanged. |

## 3. Build v1 deviations ACCEPTED — not to be reopened

- `►` used instead of `▶`
- unequal section-strip item widths
- #4 vocabulary terms at 22 pt
- #5 "Product A / Product B" rows
- #22 "$1.2k" etc. data labels with "Week N" axis ticks
- value axis starting at zero without numeric ticks
- source-footer area = 0.75 in
- Aptos/Calibri fallback documented as policy only
- #30 chevrons at 20 pt
- existing KU branding size/treatment

## 4. Locked slides

Slides 1–9, 11–15, 17–20, 24–28 and 30 are ACCEPTED AS-IS and are not to be polished, redesigned or rewritten. Accepted tightness/whitespace includes: #15 tightness, #16 body density, #27 whitespace, #29 column whitespace, the section-strip glyph/width behavior, and the branding treatment.

## 5. Outputs and limits

- Build v1.1 is written to `work/m6_r1_build_v1_1/` (temporary, untracked); Build v1 outputs are not overwritten.
- The deck is not promoted, committed or pushed by this review.
