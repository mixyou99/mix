# BUSS256 M6-R5 — Content Spec v1.2 Targeted Freeze Verification

*Recorded 2026-10-09. Read-only verification of `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_2.md` (SHA-256 `cf8915ff…`, re-read from disk for this check).*

**Inputs:** the v1.1 red-team, the assessment-alignment record, and the external-verification record. Assessment files were not re-read, M6-R4B content was not read, and no web research was run. The spec is not modified and not frozen.

## Overall verdict

**PASS-WITH-MINOR-PATCHES**

The 29-slide architecture is coherent. All RT items are dispositioned, there is no blocking overload, statistics drift is LOW, the assessment additions are natural, M6-R4B leakage = 0, copied visuals = 0, and App Store exact numbers = 0.

Three **minor wording/trim patches** remain (MP-01 to MP-03). None changes the architecture, the slide count, or any required concept.

## 1. Targeted slide verification

| SLIDE | TEACHING_JOB | RED_TEAM_REQUIREMENT | IMPLEMENTED_CORRECTLY | OVERLOAD_RISK | DUPLICATION_RISK | VERDICT |
|---:|---|---|---|---|---|---|
| 3 | Which data could answer a business question | RT-12: brief; M6-R1 recall only; no images | Yes | Low | Low (RECALL) | PASS |
| 4 | Primary vs. secondary data | RT-13: generic example; no visible July 2013 label | Yes | Low | None | PASS |
| 5 | Records vs. transactions; one analysis table | RT-09 dataset; M6-R3 and M6-R4A recall | Yes | Low | Low (RECALL) | PASS |
| 6 | Map dataset columns to variable types | RT-14: compact table; "type limits values" as one clause | Yes | Medium (five types), acceptable because each is anchored to a column | Low (EXTEND R4A codes) | PASS |
| 9 | Two questions: quality vs. preparation | RT-10: boundary map | Yes | Low | Recalled on 17 and 29 (intended) | PASS |
| 10 | Mean and median as measures of center | RT-01, RT-04 (skew removed), RT-15 | Yes. Plain language, no equations, no skew teaching; the side-note is in notes. "Extreme values pull the mean more than the median" is the mechanism, not skew teaching. | Low | None | **PASS** |
| 12 | Range and SD; near-zero variation (TEACH) | RT-02, RT-16 | Yes. No variance formula; exact hedged wording; non-binary example (nearly constant shipping fee); `featured` not used | Low | 28 recalls only (one line) | **PASS** |
| 13 | Distributions, histograms, and shape | RT-04, RT-07, RT-08 | Yes. Histogram for numeric data; bar-type for categorical; skew; "often" rule; no universal rule; one-line conceptual log preview; no log formula | **Medium-High.** Five ideas (distribution/histogram, bin note, categorical contrast, skew rule, log preview) and **two visuals** (histogram + category bar display). | None | **MINOR-PATCH (MP-01)** |
| 14 | Summary table as synthesis; binary mean | RT-04, RT-09 | Mostly. Binary mean is natural and course-owned (0, 1, 1, 0, 1 → 0.6); brief missing cue; ≤ 4 columns. **Residual:** the four named columns together hold every cue type (right-skewed, fewer observations, 0/1, different scales), plus three callouts including the optional skew application. RT-09's "distribute cues" is only partly met. | Medium | Skew application re-surfaces from 13 | **MINOR-PATCH (MP-02)** |
| 15 | Interpret r: direction and strength | RT-03, RT-05 | Yes. Sign = direction; \|r\| = strength of linear association; r ≈ 0 = little linear association; nonlinear may exist; ≠ causation; perfect = ±1; no covariance formula; no low-variation example | Low | RECALL R4A causation | **PASS** |
| 16 | Read a correlation matrix; screening aid | RT-09 | Yes | Low | None | PASS (build note B-01) |
| 17 | Organize the data-quality block | RT-10 | Mostly. It lists duplicates, missing, impossible, unusual, but the title "**four problems**" labels unusual values as problems, which conflicts with slide 22's "outlier ≠ error". | Low | Recall of 9 (intended) | **MINOR-PATCH (MP-03)** |
| 19 | What counts as missing | RT-15 | Yes. "Missingness is not a value"; 0 vs. missing vs. not applicable; side-note in notes | Low | None | PASS |
| 20 | Choose a missing-value treatment | RT-17, [E] | Yes. Type, context, and purpose; mean imputation as a numeric-only example and not a default for categorical/binary; RULE OF THUMB label; no universal threshold; trade-off and the 90% example in notes | Low | None | **PASS** |
| 22 | Outlier ≠ error | [F] | Yes. Invalid (`rating` = 7 when 1–5 is allowed) vs. unusual but valid (one very expensive product); no automatic removal | Low | Seeded on 6, listed on 17, detected on 21 (progression, not duplication) | **PASS** |
| 23 | Why scale matters | RT-11 | Yes. "Recall: representation changes comparisons" plus one concrete case (`price` vs. `units_sold`); distance is not re-taught | Low | RECALL → EXTEND (R4A slide 12) | **PASS** |
| 24 | Two scaling choices | RT-06, RT-08, RT-18, [T] | Yes. Standardization uses the exact preferred wording plus the conceptual z formula and "does not make the distribution normal". Min-max uses its formula, "commonly maps the observed range to 0–1", and the worked example 10, 20, 40 → 0, 0.33, 1. No log; no sample-vs-population discussion; only a qualified binary note in notes. Terminology is explicit and consistent with AA-R5-07's intent. | Low-Medium (two definitions plus one example; one job) | None | **PASS** |
| 25 | Binning and binary conversion | — | Yes | Low | None | PASS |
| 26 | Indicator coding vs. category codes | Overlap rule | Yes (RECALL → EXTEND R4A slide 11) | Low | Low | PASS |
| 27 | Reducing categories | RT-19 | Yes. The m − 1 detail is in notes as a forward pointer | Low | None | PASS |
| 28 | Rows, columns, missingness, dimensionality | RT-16, RT-20 | Yes. Rows = observations; columns = variables/features; dimensionality = number of variables/features; missingness separate; near-zero variation recall only; no "sparsity" term; not a miscellaneous slide | Low-Medium | RECALL M6-R3; recall of 12 | **PASS** |
| 29 | Close: understand → clean → represent → prepare | RT-10 | Yes. Recalls the two questions; verification prompt; no new content | Low | Recall of 9 (intended) | **PASS** |

**Summary:**
- Checked: 22 slides.
- PASS: 19.
- MINOR-PATCH: 3 (13, 14, 17).
- BLOCKING-PATCH: 0.

## 2. Minor patches (wording/trim only; for the project lead to apply at freeze)

| ID | Slide | Patch | Why |
|---|---|---|---|
| **MP-01** | 13 | Keep **one** visual: the `price` histogram with a right tail. State the categorical bar-type rule as a one-line text contrast, with no second chart. Move "bin choice changes the look" to speaker notes. | This is the smallest trim that keeps every required element (histogram for numeric data, categorical bar rule, skew, "often" rule, no universal rule, one-line log preview) while removing the second visual and one sub-point. No new slide. |
| **MP-02** | 14 | Keep exactly **two on-slide callouts**: the binary mean (proportion coded 1) and the one-line missing cue. Move the optional skew application to speaker notes. Show **three columns** (e.g., `price`, `rating`, `featured`), or four only if `units_sold` is needed for the synthesis. | This completes RT-09: the table reads as a natural synthesis, not a stacked set of cues. |
| **MP-03** | 17 | Retitle "Data quality: four problems" to "**Data quality: four things to check**", and frame unusual values as something to check, not a problem by default. | Removes the conflict with slide 22's "outlier ≠ error" and with slide 9's question "Is the value right?". |

**Build note (not a spec patch):**
- **B-01** (slide 16): if `rating` contains missing values, the build must say how the illustrative correlations treat them (e.g., complete cases), or show a matrix without the missing column.

## 3. Cross-cutting checks

| Check | Result |
|---|---|
| **SYNTHETIC_DATASET_COHERENCE** | **PASS.** One fictional, course-owned online store; no real company; no student/applicant data; no assessment-derived values. The six fields keep stable meanings. `featured` stays a balanced 0/1 example and never stands in for near-zero variation (which uses the separate shipping-fee attribute). Missing `rating` values are consistent across 14, 19 and 20. The invalid `rating` = 7 on 22 is a separate, explained case. `price` carries the right tail. Each slide shows only the columns it needs, and no giant table repeats (MP-02 tightens slide 14). |
| **STATISTICS_DRIFT** | **LOW.** Block C (slides 9–16) has 8 slides, each with a data-management framing or business reading. On-slide formulas appear only on 24 (z, min-max); the other "formula" mentions on 12, 13 and 15 are explicit exclusions. There is no inference, no distribution theory, no skewness coefficient, and no n vs. n − 1 discussion. |
| **Data quality / preparation boundary** | **Clear for undergraduates.** Slide 9 poses the two questions. Slide 17 organizes quality (duplicates, missing, impossible, unusual; MP-03 sharpens the wording). Slides 18–22 cover quality, and 23–27 cover preparation and representation (scaling, min-max, binning, indicators, category reduction). The log preview on 13 is explicitly labeled a preparation step. Slide 29 recalls the distinction. |
| **Prior-module overlap** | **No full duplicate.** M6-R1 sources on 3: RECALL. M6-R3 rows/columns on 2, 5, 28: RECALL. M6-R4A technique choice on 2: RECALL. Association on 5: RECALL. Category codes on 6 and 26: RECALL → EXTEND. Visualization on 13: EXTEND. Causation on 15: RECALL. Representation and scale on 23: RECALL → EXTEND. Distance on 28: EXTEND. |

## 4. Assessment-alignment closure check (alignment record only)

| Required addition | Present in v1.2 | Natural (not test-shaped)? |
|---|---|---|
| 1. Skew | Slide 13 (TEACH, hedged) | Yes. It grows from mean vs. median (10) and motivates the log preview. |
| 2. Binary mean | Slide 14 (course-owned example) | Yes, after MP-02 |
| 3. Near-zero variation | Slide 12 (TEACH), 28 (recall) | Yes |
| 4. Correlation strength / nonlinear caveat | Slide 15 | Yes |
| 5. Imputation by variable type | Slide 20 | Yes |
| 6. Impossible vs. unusual | Slide 22 | Yes |
| Scaling terminology (standardization vs. min-max) | Slide 24, explicit | Yes |

**6/6 present and pedagogically integrated.** Mode is not added, per the project-lead decision.

**HANDOFF-ASSESS-01 — M6-R5 CONTENT-FREEZE ALIGNMENT = CLOSE-READY.** It is not closed course-wide. MP-02 is a presentation trim and does not affect the presence of any concept.

**AF-R5-01 = OPEN — ASSESSMENT-FREEZE TRANCHE.** No assessment modification is authorized or made.

## 5. RT and reconciliation checks

- **RT_APPLIED = 20; RT_NOT_APPLICABLE = 0; RT_UNRESOLVED = 0.** RT-09 is dispositioned APPLIED; its residual presentation gap on slide 14 is captured as MP-02.
- **SOURCE_SAFE_SLIDES = 36; SOURCE_MAPPED = 36; UNMAPPED = 0.**
- Content tallies: KEEP 3, KEEP-BUT-CLARIFY 10, REVISE 14, MERGE 7, DELETE 2, DEFER 0 = 36. These are internally consistent and unchanged from v1.1.
- Swap destinations are correct: source 19 → 14; sources 22 and 23 → 13; source 33 → 24, with log moved to 13.

## 6. Integrity scans (architecture section)

| Item | Result |
|---|---|
| M6-R4B leakage (`admission`, import/export, user-defined functions, `library()` / `install.packages`, `.r` / `.csv` filenames) | **0** |
| Copied visuals (screenshots, photos, copied figures) | **0**. All visuals are native or course-owned. |
| App Store exact numbers / references on slides | **0** |
| Protected assessment content | **0** |
| HANDOFF-M5-01 | OPEN |
| HANDOFF-S3-01 | OPEN |

## 7. Freeze recommendation

**PASS-WITH-MINOR-PATCHES.**

- Apply MP-01 to MP-03. These are three wording/trim edits, with no architecture, count, or concept change.
- The project lead may then freeze. No further red-team or full re-verification is needed; a spot-check of slides 13, 14 and 17 after the edits suffices.
- On freeze, record HANDOFF-ASSESS-01 (M6-R5 scope) as closed.

## 8. Integrity

- Existing files modified: 0 (v1.2 SHA-256 `cf8915ff…` unchanged).
- Assessment files re-read: 0. M6-R4B reads: 0. Web research: 0.
- Git staged: 0. Commit: 0. Push: 0.
