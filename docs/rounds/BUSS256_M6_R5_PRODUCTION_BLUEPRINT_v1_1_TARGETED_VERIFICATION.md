# BUSS256 M6-R5 — Production Blueprint v1.1 Targeted Verification

*Recorded 2026-10-09. A read-only targeted verification of `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md`. It covers only the red-team patches (BP-R1 to BP-R5, M-01 to M-12), arithmetic, toy-data consistency, notes/metadata separation, PC-2, frozen-content conformance, and risk-register completeness. It is not a new full red-team.*

| Input | SHA-256 |
|---|---|
| Blueprint v1.1 (verified) | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` |
| Blueprint v1 (unchanged) | `9d5ce6013df38a91c50063585fb9051fb8b749293a275b6d6b99538e6d8d24a5` |
| Content spec v1.3, frozen (unchanged) | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Red-team | `01e7001f3a52f6a99d6371751ffcc4c3372af3199fb462c9573a07d3e3930bdb` |

Repository: `buss256/2027-refresh` @ `52c2e32535f993df6a4b5abdeaab3d8c9077972a`.

## Verdict

**PASS — READY FOR PROJECT-LEAD BLUEPRINT FREEZE**

- All 17 patch items are resolved.
- Arithmetic is independently recomputed from the v1.1 table and matches everywhere.
- Content drift = 0.
- No builder guess is required on any audited item.
- Notes are safe, PC-2 is satisfied, and the risk gates are complete.
- One non-blocking documentation observation follows (§9). It requires no patch.

## 1. Canonical data (reconstructed from v1.1)

| product_id | category | price | units_sold | rating | featured |
|---|---|---:|---:|---:|---:|
| P01 | Books | 8 | 900 | 4 | 0 |
| P02 | Books | 10 | 940 | 5 | 1 |
| P03 | Books | 12 | 700 | 3 | 1 |
| P04 | Home | 12 | 820 | — | 0 |
| P05 | Books | 15 | 610 | 4 | 1 |
| P06 | Home | 18 | 450 | 4 | **1** |
| P07 | Home | 20 | 520 | 5 | 0 |
| P08 | Home | 25 | 380 | — | 1 |
| P09 | Electronics | 40 | 260 | 3 | 0 |
| P10 | Electronics | 120 | 40 | 4 | 1 |

- **Rows = 10.** A cell-by-cell diff against v1 finds exactly **one** changed cell: P06 `featured` 0 → 1. No other field changed.
- **`rating`:** missing rows remain P04 and P08 (the governed rows); 8 observed. `price` and `units_sold` are complete.

## 2. Independent arithmetic (recomputed from the v1.1 table)

| Quantity | Recomputed | v1.1 displays | Match |
|---|---|---|---|
| price n / mean / median / min / max / range | 10 / 28.0 / 16.5 / 8 / 120 / 112 | same | ✓ |
| price sample SD | 33.642 → 33.6 | 33.6 | ✓ |
| units_sold n / min / max / range | 10 / 40 / 940 / 900 | same | ✓ |
| units_sold sample SD | 289.858 → 289.9 | 289.9 | ✓ |
| rating observed / missing / mean / sample SD | 8 / 2 / 4.0 / 0.756 → 0.8 | same | ✓ |
| featured n / ones / zeros / mean / sample SD | 10 / 6 / 4 / 0.6 / 0.516 → 0.5 | same | ✓ |
| featured P01–P05 | 0, 1, 1, 0, 1 → 0.6 | same | ✓ |
| r(price, units_sold) | −0.7995 → **−0.80** | −0.80 | ✓ |
| Histogram, left-closed [a, a + 20), final [120, 140) | 6, 2, 1, 0, 0, 0, 1 = **10** | same | ✓ |
| Shipping fee n / mean / range / sample SD | 10 / 5.1 / 1 / 0.316 → 0.32 | same | ✓ |
| Slide-21 schematic (parsed from v1.1) | n 20; mean 51.2; SD 7.35; **z(80) = 3.92**; other \|z\| ≤ 0.98; core 44–55 | same | ✓ |
| Slide-24 mini example | 10 → 0; 20 → 0.33; 40 → 1 | same | ✓ |
| Slide-15 panels (r, QA only) | 0.943 / 0.072 / −0.944 / 0.000 | 0.94 / 0.07 / −0.94 / 0.00 | ✓ |
| Slide-7 counts | 200 / 100 / 30 / 8 (row sums equal the stated totals) | same | ✓ |

## 3. Patch accounting

| Item | Verdict | Evidence |
|---|---|---|
| **BP-R1** | **PASS** | Slide 24 is tagged MINI EXAMPLE (standalone; min 10, max 40). VISIBLE_CONTENT has no product ID, no "price", and no "$" (scan: 0 hits); "price" occurs only in the negating DATA_USED and metadata lines. Canonical price still contains 120 (§4, §6.9 note). |
| **BP-R2** | **PASS** | 6 ones / 4 zeros / mean 0.6. Slide 14 table 0.6 = callout 0.6 (0, 1, 1, 0, 1 → 0.6). Slide 20 caveat uses 0.6. `featured` is clearly mixed and is not used for near-zero variation (slide 12 metadata). **All "0.5" hits, classified (§4).** None is a stale featured mean. |
| **BP-R3** | **PASS** | §6.1/§6.3: left-closed / right-open; final [120, 140); members listed; total 10. The slide-13 visible content has no interval notation (scan: 0). P10's value correctly contributes to the histogram, which does not conflict with BP-R5. |
| **BP-R4** | **PASS** | §6.1 locks sample SD, n − 1. Not student-facing (no notes hit). Gate 16 requires independent recomputation. The only "population" mention is the prohibition "no sample-vs-population SD discussion". No contradictory instruction. |
| **BP-R5** | **PASS** | Slide 21 uses the §6.4 schematic only ("P10 is not used here"). Symmetric core 44–55, one distant point at 80, z = 3.92 > 3. The slide says heuristic, and the note says "not every unusual value crosses this line". The n = 10 maximum-z fact appears only in BUILD_METADATA, not in notes or visible content. P10 is reserved for slide 22. |
| **M-01** | **PASS** | Slide 6: all 24 cells filled. Examples are actual table values (P01/P10; Books/Home/Electronics; 8/120; 40/940; 3/5; 0/1). "12.50" occurs only in the M-01 disposition line ("no 12.50"). The 1–5 scale is coherent. |
| **M-02** | **PASS** | §6.6 deterministic per-bin counts. The two groups are identifiable by stacked position (no color). The sample of 8 is captioned "one possible small sample", so it makes no claim that every small sample is flat. The static PDF is complete. |
| **M-03** | **PASS** | §6.8 coordinates for all four panels; correlations re-verified; static 2 × 2 layout; text captions; the curved panel is symmetric (r = 0) and visibly U-shaped; no formula; r values QA-only. |
| **M-04** | **PASS** | Slide 13: median 16.5 solid and mean 28.0 dashed, both labeled and required. One histogram; the categorical bar rule as text; one-line log preview; no visible intervals. |
| **M-05** | **PASS** | §6.5: P03 catalog (Books, 12, 2026-03-02), P03 partner feed (Books, 12, 2026-01-15), and P02 catalog (Books, 10). The shown fields match §4; only `source` and `last_updated` differ. No new product. |
| **M-06** | **PASS** | Canonical table stated as unaltered; text-only slide; any imputed view must carry "ILLUSTRATIVE — DERIVED (imputed) VIEW"; observed mean and fill value both 4.0; no visible %; "source's 90%" removed from notes (historical note in metadata only). `featured` is mentioned only as "a 0/1 mean such as 0.6 is not a valid value", which serves the frozen "not a default for binary" job. |
| **M-07** | **PASS** | All 29 entries have separate SPEAKER_NOTES and BUILD_METADATA. A notes scan for builder, build, n − 1, bin edge, left-closed, maximum z, 9/√10, assessment, admission, M6-R4B, App Store, QA and "source deck" returned **0 hits**. |
| **M-08** | **PASS** | Slide 21 notes: heuristic, context, symmetry, and "not every unusual value crosses this line". No derivation, proof, QA arithmetic, or builder instruction. |
| **M-09** | **PASS** | Slide 28: near-zero variation recall only; dimensionality = number of variables/features (stated conditionally); missingness labeled separately; no visible "sparsity"; ILLUSTRATIVE EXAMPLE label present (it shows canonical IDs and missing positions). |
| **M-10** | **PASS** | Slides 10 and 11: equal values stacked vertically, no jitter. A production-only rule in BUILD_METADATA; no teaching claim added. |
| **M-11** | **PASS** | **24 risk rows** (counted). Gates 15–24 cover the ten required items: bin edges (15), SD (16), mini-example independence (17), schematic arithmetic (18), featured consistency (19), slide-16 recomputation (20), P03 identity (21), P11 outside the table (22), slide-14 two callouts (23), notes vs. metadata (24). Original risks 1–14 retained: table overflow, formula readability, histogram axis, summary crowding, matrix readability, notes, copied similarity, toy values, App Store, PC-2, font, 16:9, formula count, slide-10 creep. |
| **M-12** | **PASS** | The "Workflow order" caption plus a student-safe note ("not the order of our seminars"). It clarifies layout only and does not assert a universal rigid process; frozen slide 2 is unchanged. |

**Unresolved patches: 0.**

## 4. "0.5" / "0.50" hits (whole v1.1 file)

| Line | Context | Classification |
|---:|---|---|
| 351 | Slide 14 table, featured **SD** 0.5 (0.516) | Valid SD, not a mean |
| 489 | Slide 20 BUILD_RISK "0.5 instead of 0.6" | Risk wording (guards against staleness) |
| 580 | Slide 25 cut-off example "likelihood to buy ≥ 0.5" | Unrelated cut-off value |
| 685 | §6.2 featured SD "0.5 (0.516)" | Valid SD |
| 803 | Gate 16 SD list | Valid SD |

**Stale featured-mean references: 0.**

## 5. Specific slide checks

| Slide | Check | Result |
|---|---|---|
| 14 | DENSITY = MEDIUM; 3 columns; exactly 2 numbered callouts (counted); static print complete | ✓ |
| 16 | Visible 1.00 / −0.80 matrix (symmetric, unit diagonal); negative scatter; `rating` absent ("is not used"); no missing-data rule | ✓ |
| 22 | The 1–5 scale is visible **before** P11; P11 = 7 captioned "incoming entry (not in the table)"; §6.5 "Never in §4"; P10 = $120 unusual but valid; "do not remove unusual values automatically" | ✓ |

## 6. Illustrative-label audit

- Every slide showing canonical toy values carries ILLUSTRATIVE EXAMPLE in LABELS: **5, 6, 10, 12, 13, 14, 16, 18, 19, 20, 22, 23, 25, 26, 28** (missing: 0).
- The separate illustrations on 7, 11 and 21 are labeled ILLUSTRATIVE EXAMPLE, and 24 is labeled MINI EXAMPLE.
- The purely schematic slides 15 and 27 are unlabeled, which is acceptable.

## 7. PC-2 targeted check

| Slide | Result |
|---|---|
| 7 | Stacked positions, sample-size text, one shade: ✓ |
| 13 | Solid vs. dashed labeled markers; axis titles; "long tail" text: ✓ |
| 15 | Text caption per panel: ✓ |
| 21 | Dashed band edges labeled ±3 SD; text annotation: ✓ |
| 24 | Card headers in text: ✓ |
| 28 | Text annotations; dashed "(missing)" cells: ✓ |

- No color-only distinction found.
- Every reveal slide is complete in static print (6, 13, 24; optional on 14).
- **Violations: 0.**

## 8. Frozen-content conformance

- All 29 TEACHING_JOB fields are consistent with v1.3: 16 EXACT, 13 SAFE-PRODUCTION-INTERPRETATION.
- The patches changed only toy values (one cell), labels, layout, deterministic coordinates, and build rules.
- **CONTENT_DRIFT = 0.** Slide count 29; order and titles unchanged.

## 9. Non-blocking observation (no patch required)

- The §8 PC-2 summary matrix in v1.1 does not list every slide individually. Slides 3, 4, 8, 9, 20 and 24 are not enumerated in the matrix.
- Each of those slides carries its own PC2_NONCOLOR_CUE field (text headers, tags, or card headers), so PC-2 is fully specified at slide level.
- A build-spec writer may consolidate the matrix; no blueprint change is needed for freeze.

## 10. Recommendation

**Blueprint freeze recommendation: READY.** The project lead may freeze `BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` (SHA-256 `75e686d2…`) as the production authority for the M6-R5 build spec.

## Integrity

- Existing files modified: 0 (v1 and v1.1 hashes unchanged; content spec unchanged).
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- Git staged: 0. Commit: 0. Push: 0.
