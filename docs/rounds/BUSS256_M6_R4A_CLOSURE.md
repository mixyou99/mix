# BUSS256 M6-R4A — Closure

## Decision

**M6-R4A — Seminar 4 Overview of Data Analytics = CLOSED**

Project-lead visual review: **ACCEPT** (Content = CLOSED, Visual = CLOSED, QA = CLOSED).

Promotion date: 2026-10-09.

## Governance status

- Content spec (`BUSS256_M6_R4A_CONTENT_SPEC_v1.md`): APPROVED / FROZEN
- Production blueprint v1.1 (`BUSS256_M6_R4A_PRODUCTION_BLUEPRINT_v1_1.md`): APPROVED / FROZEN
- PPTX build spec v1 (`BUSS256_M6_R4A_PPTX_BUILD_SPEC_v1.md`): APPROVED / FROZEN
- External verification: CLOSED (`BUSS256_M6_R4A_EXTERNAL_VERIFICATION_CLOSURE.md`)
- Six-technique spine: preserved
- M6-R4B: HOLD
- Assessment reads: 0

## Final production artifacts

| Artifact | Path | SHA-256 |
|---|---|---|
| PPTX | `teaching/BUSS256/03_final/production/BUSS256_M6_R4A_2027.pptx` | `986414c230a30ea7a2e2a32f26c7576433dfde28aa2c103693e62711e85649ff` |
| PDF | `teaching/BUSS256/03_final/production/BUSS256_M6_R4A_2027.pdf` | `5396e00d6dc4acedf108a9cfcb79a0250eb8f542cc1d0f43aec93b2f3cf2855c` |

Both are exact byte copies of the accepted Build v1.1 candidate (`BUSS256_M6_R4A_2027_BUILD_v1_1.pptx/.pdf`). They were not regenerated or resaved.

## Closure evidence

- Final slide count: 36
- Microsoft PowerPoint open: PASS (36 slides; no repair/corruption prompt)
- PDF pages: 36 (16:9, 960 × 540 pt)
- Grayscale QA (all 36 slides): PASS
- PC-2: PASS
- Target historical example (slide 21): PASS
- CRISP-DM with Chapman et al. (2000) (slide 31): PASS
- Final-candidate validation: PASS
  - Package integrity: 0 findings
  - Layout geometry: 0 findings
  - Arial throughout
  - First-party import: 36 slides
  - Speaker notes: 36/36
- Unresolved BUILD-R4A issues: none

## QA note

The final accepted candidate received bounded geometry-only QA fixes to slides 13 and 32 before final validation. No text or content changed.
- Slide 13: cluster outlines were separated so that no point sits on two group boundaries.
- Slide 32: the "each informs the other" label was moved clear of the connector.

The detailed QA report and the validation receipt remain as provenance under `work/`. They are not committed.
