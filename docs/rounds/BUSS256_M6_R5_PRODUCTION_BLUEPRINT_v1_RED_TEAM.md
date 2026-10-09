# BUSS256 M6-R5 — Production Blueprint v1 Red-Team

*Recorded 2026-10-09. A read-only production red-team of `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1.md` (SHA-256 `9d5ce6013df38a91c50063585fb9051fb8b749293a275b6d6b99538e6d8d24a5`), checked against the frozen content authority `BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` (SHA-256 `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042`), the freeze record, and the project-lead acceptance.*

- The blueprint is not modified, and no v1.1 is created.
- Repository: `buss256/2027-refresh` @ `52c2e32535f993df6a4b5abdeaab3d8c9077972a`.
- All arithmetic was recomputed independently from the blueprint's own §4 table (parsed from the file, not copied from its stated results).

## A. Overall verdict

**PASS-WITH-PATCHES.**

- The blueprint is structurally sound. It has 29 complete entries, zero content drift, sound PC-2 and originality plans, and correct arithmetic for every displayed statistic.
- **Two blocking production defects** must be fixed before a build spec is written:
  - **BP-R1:** the min-max mini example is tied to canonical rows, which misrepresents normalization of the full `price` variable.
  - **BP-R5:** slide 21 pairs P10 with the ±3 SD heuristic, but with n = 10 no value can ever exceed ±3 sample SD.
- One required consistency patch: **BP-R2**, the `featured` mean of 0.5 shown next to a 0.6 callout.
- Several minor determinism, notes, and register patches.
- No restructure is needed.

**Blueprint ready for build spec: NO.** It becomes ready after a v1.1 applies the patches in §G.

## B. Reconstructed canonical dataset (from the blueprint file)

| product_id | category | price | units_sold | rating | featured |
|---|---|---:|---:|---:|---:|
| P01 | Books | 8 | 900 | 4 | 0 |
| P02 | Books | 10 | 940 | 5 | 1 |
| P03 | Books | 12 | 700 | 3 | 1 |
| P04 | Home | 12 | 820 | — | 0 |
| P05 | Books | 15 | 610 | 4 | 1 |
| P06 | Home | 18 | 450 | 4 | 0 |
| P07 | Home | 20 | 520 | 5 | 0 |
| P08 | Home | 25 | 380 | — | 1 |
| P09 | Electronics | 40 | 260 | 3 | 0 |
| P10 | Electronics | 120 | 40 | 4 | 1 |

**Separate illustrations, each explicitly labeled in the blueprint as separate or derived:**

| Illustration | Content | Gap |
|---|---|---|
| Shipping fee (slide 12) | $5 × 9, $6 × 1 | — |
| Orders view (slide 5) | O-101 {P01, P05}; O-102 {P02}; O-103 {P04, P06, P07} | — |
| Merged listing (slide 18) | P03 twice: catalog 2026-03-02 and partner feed 2026-01-15 | Field values of the two rows and the identity of the "third row" are unspecified (M-05) |
| P11 (slide 22) | Hypothetical incoming entry, rating = 7 | Explicitly excluded from the canonical table |

## C. Independent arithmetic audit

| Quantity | Recomputed | Blueprint | Match |
|---|---|---|---|
| price n / mean / median | 10 / 28.0 / 16.5 | 10 / 28.0 / 16.5 | ✓ |
| price min / max / range | 8 / 120 / 112 | 8 / 120 / 112 | ✓ |
| price SD, sample (n − 1) | 33.642 → **33.6** | 33.6 | ✓ (sample convention) |
| price SD, population (n) | 31.916 → 31.9 | not used | Would differ if the builder used population SD (→ BP-R4) |
| units_sold n / mean / median | 10 / 562.0 / 565 | 10 / 562.0 / 565 | ✓ |
| units_sold min / max / range | 40 / 940 / 900 | 40 / 940 / 900 | ✓ |
| units_sold SD (sample) | 289.858 → 289.9 | 289.9 | ✓ (population would be 275.0) |
| rating observed n / missing | 8 / 2 (P04, P08) | 8 / 2 (P04, P08) | ✓ |
| rating mean / min / max / allowed | 4.0 / 3 / 5 / 1–5; no stored violations | same | ✓ |
| rating SD (sample) | 0.756 → 0.8 | 0.8 | ✓ |
| featured n / 1s / mean | 10 / 5 / 0.5 | 10 / 5 / 0.5 | ✓ (see BP-R2) |
| featured SD (sample) | 0.527 → 0.5 | 0.5 | ✓ |
| featured P01–P05 | 0, 1, 1, 0, 1 → 0.6 | 0.6 | ✓ |
| r(price, units_sold) | **−0.7995 → −0.80** | −0.80 | ✓ |
| Histogram [a, b), width 20 | [0,20) 6 · [20,40) 2 · [40,60) 1 · [60,80) 0 · [80,100) 0 · [100,120) 0 · [120,140) 1 = **10** | 6, 2, 1, 0, 0, 0, 1 | ✓ only under left-closed (BP-R3) |
| Histogram (a, b] (counterfactual) | 7, 2, 0, 0, 0, 1, 0 | — | Different, so the convention matters |
| Shipping fee mean / range / SD | 5.1 / 1 / 0.316 → 0.32 (sample) | 5.1 / 1 / 0.32 | ✓ |
| Price tiers (< 15 / 15 to < 30 / ≥ 30) | 4 / 4 / 2 | 4 / 4 / 2 | ✓ |
| Min-max 10, 20, 40 (own min and max) | 0 / 0.333 / 1 | 0 / 0.33 / 1 | ✓ as a standalone set |
| The same values scaled with the full price min and max (8, 120) | 0.018 / 0.107 / 0.286 | — | **Contradicts the blueprint's row-tied framing (BP-R1)** |
| z(120) | 2.735 (sample SD) · 2.883 (population SD) | "about 2.7" | ✓ |
| Max possible \|z\| for n = 10 (sample SD) | (n − 1)/√n = **2.846** | — | **No value in any 10-row dataset can exceed ±3 SD (BP-R5)** |
| Toy sets A / B / C | mean = median = 7; ranges 0 / 4 / 12 | same | ✓ |

**Arithmetic audit: PASS for all displayed numbers.** The defects are in framing (BP-R1, BP-R5) and convention specification (BP-R3, BP-R4), not in computation.

## D. Project-lead issues

| ID | Finding | Classification | Required resolution |
|---|---|---|---|
| **BP-R1** min-max | §4 line 71 and slide 24 both state "prices of P02, P07, P09 = 10, 20, 40 → 0, 0.33, 1". This frames the three values as rows of the canonical `price` column. Scaled with the full column (min 8, max 120), they would become 0.018 / 0.107 / 0.286, so the slide would teach a wrong mapping. | **BLOCKING** | Label the calculation **MINI EXAMPLE** (standalone worked example): "three values: 10, 20, 40". Remove the P02/P07/P09 association from slide 24 and §4. Optional build note: "min and max are those of the three values shown". |
| **BP-R2** binary mean | The slide-14 table shows the `featured` mean as 0.5 while callout 1 teaches 0, 1, 1, 0, 1 → 0.6. That is an avoidable inconsistency on one slide. | **PATCH** (required) | Set P06–P10 `featured` = **1, 0, 1, 0, 1** (P01–P05 unchanged). Full column = 6/10 = **0.6**; SD (sample) 0.516 → 0.5; still clearly mixed. Knock-on edits: slide 14 table (mean 0.6) and callout text ("0.6 → 60% featured"; the separate first-five sentence becomes redundant and can be dropped or kept, since both now read 0.6); slide 20 caveat "a 0/1 mean such as 0.5" → **0.6**. No other calculation uses `featured` (verified: slides 6, 14, 20 only; no correlation or histogram uses it). |
| **BP-R3** histogram bins | §4 says "width 20, left-closed" and lists 7 bins up to 120–140, but the slide-13 entry says only "bins of 20". Edge values 20 and 40 count correctly only under [a, b). 120 lands in [120, 140). | **PATCH** (minor) | State explicitly: bins **[0,20), [20,40), [40,60), [60,80), [80,100), [100,120), [120,140)**; final bin [120,140); x-axis ticks 0, 20, …, 140; total = 10. Add a QA gate. |
| **BP-R4** SD convention | §4 says "the common spreadsheet sample-SD function". That implies n − 1 but is vague, and there is no QA gate. Population SD would change the displayed price SD (33.6 → 31.9) and units SD (289.9 → 275.0). | **PATCH** (minor) | Build metadata: "**SAMPLE standard deviation, denominator n − 1** (e.g., STDEV.S); one decimal (shipping fee: two decimals)". Not student-facing. Add a QA gate. All displayed SDs verified under n − 1. |
| **BP-R5** slide 21 | The visible slide places the P10 dot strip ("far from the rest") next to a RULE OF THUMB "±3 SD" line, which implies detection. The note then says the rule would not flag $120 and attributes this to skew. In fact **no value in a 10-row dataset can exceed ±3 sample SD** (max \|z\| = 2.846), so the note's explanation is also incomplete. | **BLOCKING** | Slide 21 uses a **separate course-owned schematic** of roughly symmetric values with one distant point. Verified candidate: 19 values {44, 45, 46, 47, 48, 48, 49, 49, 50, 50, 50, 50, 51, 51, 52, 52, 53, 54, 55} plus one at **80** → mean 51.2, SD 7.35, z(80) = **3.92**; all other \|z\| ≤ 0.98. Label it ILLUSTRATIVE EXAMPLE. P10 stays on slide 22 as "unusual but potentially valid". Remove the P10/±3 SD note from slide 21. |

## E. Slide-level checks

| Check | Finding | Result |
|---|---|---|
| **Slide 6 density** | 6 rows × 4 columns plus a footer at ≥ 16 pt fits 16:9 (about 3.6 in of table height). HIGH is justified. The reveal helps live delivery, and the printed static version reads fine. **Defects:** the "What values are possible" cell is empty for `category`, `price` and `featured`; the `price` example "8, 12.50" uses 12.50, which is not in the dataset. | PATCH (M-01) |
| **Slide 13 density** | One histogram (about 7.0 × 4.0 in) plus a text column fits. HIGH is justified, the reveal helps, and the printed PDF works with everything visible. The mean/median markers are marked "optional", so the builder must guess. | PATCH (M-04, plus BP-R3) |
| **Slide 14 density** | A 6 × 4 table (header plus 5 rows) with 2 callouts. This is really **MEDIUM**, not HIGH; the reveal is optional. Feasible. | PASS (reclassify MEDIUM; BP-R2 values) |
| **Slide 15 density** | Five rule lines (about 20 pt, left column about 5.0 in) plus a 2 × 2 panel grid (about 6.8 × 4.8 in → each panel about 3.2 × 2.2 in with 16 pt captions). It fits statically without a reveal; grayscale and print are fine. **MEDIUM.** The point coordinates are unspecified, so the builder would guess. | PATCH (M-03) |
| **Slide 24 density** | Two cards of about 6.0 × 4.6 in, each with one formula at ≥ 24 pt, plus a 3-row mini table. HIGH is justified and feasible. The reveal helps; print works. | PATCH (BP-R1 only) |
| **Slide 8 rule of thumb** | Rendered as a "RULE OF THUMB" tag with a dashed border, not a hard condition. | **PASS** |
| **Slide 16 correlation** | r = −0.7995 → **−0.80** at two decimals; diagonal 1.00; off-diagonals equal; the scatter has a clear negative trend; `rating` absent; no missing-value handling. | **PASS** (add an explicit "two decimals" build note; register gate M-11) |
| **Slide 20 imputation** | Observed mean 4.0 is correct; the canonical table is not modified, but the blueprint does not *say* so; there is no imputed table, only text; the categorical/binary warning is conceptual; no visible % threshold. The note "The source's 90% example…" refers to the old deck, which is builder context. | PATCH (M-06, plus BP-R2 value) |
| **Slide 22 rating constraint** | "`rating` allows only 1, 2, 3, 4 or 5" is visible on the slide together with P11 = 7. The 1–5 scale is also shown earlier on slide 6. P11 is explicitly hypothetical and outside the table. | **PASS** |
| **Slide 10** (additional) | The dot strip has two identical values (P03 and P04 = 12) with no stacking rule. | Minor (M-10) |
| **Slide 28** (additional) | "e.g., 4: price, units_sold, rating, featured" omits `category`, which is also a variable, so it could read as miscounting. If values are shown, the ILLUSTRATIVE EXAMPLE label is missing. | Minor (M-09) |
| **Slide 2** (additional) | The flow places "Choose a technique (M6-R4A)" after today, which is workflow order, not course order. The note covers this, but the visible flow could be misread. | Minor (M-12) |

## F. Cross-cutting audits

**Derived-view consistency: PASS with gaps.**
- No accidental 11th canonical row: P11 is explicitly hypothetical.
- No product changes identity across views; orders reference only P01–P07.
- The merged listing leaves the P03 field values and the third row unspecified (M-05).
- No view acquires real or historical status.

**Illustrative labels: PASS with one gap.**
- ILLUSTRATIVE EXAMPLE is specified on slides 5, 6, 7, 10, 11, 12, 13, 14, 16, 18, 19, 20, 21, 22, 23, 24, 25 and 26.
- The schematic slides (15, 27) are unmistakably schematic.
- Gap: slide 28 shows the table outline "values optional" with no label. If values are shown, the label is required (M-09).

**NOTES_SAFE = PATCH.**
- No assessment-derived material, no M6-R4B content, no held filenames, no answer-like cues, and no sensitive information. Nothing contradicts visible content, except slide 21 (BP-R5).
- Builder-only statements should move to build metadata, not PowerPoint notes:
  - slide 4 ("July 2013 lineage stays in governance records…"; slide 4 then needs no notes or a student-safe line);
  - slide 12 ("The shipping fee is deliberately non-binary");
  - slide 20 ("The source's 90% example…");
  - slide 3 ("no claims about any company", acceptable but builder-flavored).
- Patch: M-07.

**PC-2 / print / grayscale: PASS.** No violations found. Every distinction carries a non-color cue:
- solid vs. dashed markers on 10 and 13;
- solid vs. dashed borders plus icons on 22;
- text tags with dashed borders for caveats;
- a filled and labeled progress segment;
- numbers in every matrix cell on 16;
- captions on every panel of 15.

There are no red/green semantics, and the blueprint requires static print legibility independent of the reveal.

**Visual originality: PASS.** Copied visuals = 0.
- Slide 7 uses one-dimensional dot strips, not the old two-dimensional shape-sampling figure.
- Slide 15 uses a 2 × 2 captioned grid, not the seven-panel horizontal strip.
- Slide 5 uses product and order tables, not the old tax-record and basket tables.
- The new slide-21 schematic (BP-R5) is course-owned.
- There are no web-search or commercial images and no App Store material.

**Blueprint field completeness: PASS.** All 29 entries carry TEACHING_JOB, VISIBLE_CONTENT, VISUAL_STRUCTURE, DATA_USED, LABELS, PC2, NOTES_REQUIRED (+ notes content), SOURCE, DENSITY, BUILD_RISK and QA_CHECK. SLIDE_NUMBER and TITLE are carried in the headings.

**Build-risk register: PATCH (M-11).** The 14 items cover table overflow, formula readability, histogram axis, summary crowding, matrix readability, notes, copied similarity, toy values, App Store leakage, PC-2, fonts, 16:9 overflow, formula-count drift, and slide-14 callout creep. **Missing gates:**
- (a) **bin-edge convention**;
- (b) **SD convention**;
- (c) min-max mini-example independence (BP-R1);
- (d) ±3 SD schematic validity (|z| > 3 achievable only with n ≥ 11; verify z = 3.92);
- (e) derived-view identity (P03 duplicate fields; P11 not in the table);
- (f) `featured` mean consistency between table and callout (BP-R2);
- (g) correlation recomputed from the table to 2 decimals (the existing item 5 checks only display, not arithmetic).

## G. Patch list for blueprint v1.1

**Blocking (must apply before build spec):**

| ID | Patch |
|---|---|
| BP-R1 | Slide 24 and §4: present 10, 20, 40 → 0, 0.33, 1 as a labeled **MINI EXAMPLE** of three standalone values; remove the P02/P07/P09 association. |
| BP-R5 | Slide 21: use a separate ILLUSTRATIVE EXAMPLE schematic (19 symmetric values + one at 80; z = 3.92) for the ±3 SD heuristic; remove P10 from slide 21 and its note; keep P10 on slide 22. |

**Required:**

| ID | Patch |
|---|---|
| BP-R2 | P06–P10 `featured` = 1, 0, 1, 0, 1 → column mean 0.6 (SD 0.5). Update the slide 14 table and callout, and the slide 20 caveat (0.5 → 0.6). |

**Minor:**

| ID | Patch |
|---|---|
| BP-R3 | Explicit [a, b) bins, final [120,140), ticks 0–140, total 10. |
| BP-R4 | Build metadata: sample SD (n − 1); display decimals. |
| M-01 | Slide 6: complete every "What values are possible" cell; replace "8, 12.50" with a dataset-consistent example (e.g., "8, 120"). |
| M-02 | Slide 7: specify deterministic dot positions for the population and the three samples (100 / 30 / 8). |
| M-03 | Slide 15: specify point coordinates for the four schematic panels; fixed static layout; no reveal required. |
| M-04 | Slide 13: decide the mean/median markers (recommend **include**: solid "mean 28.0", dashed "median 16.5") and remove "optional". |
| M-05 | Slide 18: specify both P03 rows (Books, 12, 700, 3, 1, with only source and date differing) and the third row (e.g., P02). |
| M-06 | Slide 20: state that the canonical table is not altered; any imputed view must be separate and labeled "illustrative imputed view"; reword the "source's 90%" note in student-safe terms. |
| M-07 | Move builder-only statements on slides 3, 4, 12 and 20 into build metadata; slide 4 notes → NO, or one student-safe line. |
| M-08 | Slide 21 notes: replace them with student-safe heuristic nuance consistent with the new schematic. |
| M-09 | Slide 28: phrase as "if an analysis uses price, units_sold, rating and featured, dimensionality = 4"; add the ILLUSTRATIVE EXAMPLE label if values are shown. |
| M-10 | Slide 10: stacking rule for equal values (P03 and P04 = 12). |
| M-11 | Risk register: add gates (a)–(g) from §F. |
| M-12 | Slide 2: caption the flow "workflow order", or otherwise distinguish it from course order. |
| — | Slide 14: reclassify density HIGH → MEDIUM (housekeeping). |

## H. Frozen-content conformance (all 29 slides)

| Slide | Class | Note |
|---:|---|---|
| 1 | EXACT | — |
| 2 | SAFE-PRODUCTION-INTERPRETATION | Workflow-order flow (M-12) |
| 3 | SAFE-PRODUCTION-INTERPRETATION | Example question per source |
| 4 | SAFE-PRODUCTION-INTERPRETATION | "Check their fit" restates the secondary-data definition |
| 5 | SAFE-PRODUCTION-INTERPRETATION | Toy tables |
| 6 | SAFE-PRODUCTION-INTERPRETATION | M-01 completeness |
| 7 | SAFE-PRODUCTION-INTERPRETATION | Redesigned diagram |
| 8 | EXACT | — |
| 9 | EXACT | — |
| 10 | SAFE-PRODUCTION-INTERPRETATION | Dot strip |
| 11 | EXACT | — |
| 12 | EXACT | — |
| 13 | EXACT | — |
| 14 | EXACT | BP-R2 value only |
| 15 | EXACT | — |
| 16 | EXACT | — |
| 17 | EXACT | — |
| 18 | SAFE-PRODUCTION-INTERPRETATION | — |
| 19 | EXACT | — |
| 20 | SAFE-PRODUCTION-INTERPRETATION | "`category` has no mean" restates v1.3's "not a default for categorical" |
| 21 | SAFE-PRODUCTION-INTERPRETATION | **Production defect BP-R5**, not a new claim |
| 22 | EXACT | — |
| 23 | EXACT | — |
| 24 | EXACT | **Production defect BP-R1**, not a new claim |
| 25 | SAFE-PRODUCTION-INTERPRETATION | Generic cut-off example |
| 26 | EXACT | — |
| 27 | SAFE-PRODUCTION-INTERPRETATION | Schematic labels |
| 28 | SAFE-PRODUCTION-INTERPRETATION | M-09 wording |
| 29 | EXACT | — |

**CONTENT-DRIFT = 0.** EXACT 15 · SAFE-PRODUCTION-INTERPRETATION 14. BP-R1 and BP-R5 are production-framing defects. They add no teaching claim, but they would misrepresent frozen claims if built as written.

## Integrity

- Existing files modified: 0 (blueprint SHA-256 `9d5ce601…` unchanged; content spec SHA-256 `5a74b3f1…` unchanged).
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0. Source mutations: 0.
- Git staged: 0. Commit: 0. Push: 0.
