# BUSS256 M6-R5 — Content Freeze

*Recorded 2026-10-09. The project lead accepted the targeted-verification verdict PASS-WITH-MINOR-PATCHES and authorized exactly MP-01, MP-02, MP-03 and the B-01 resolution. All four spot-checks passed, so the content is frozen.*

## Canonical content authority

| Item | Value |
|---|---|
| Canonical authority | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` |
| v1.3 SHA-256 | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Status | **M6-R5 CONTENT SPEC v1.3 = APPROVED / FROZEN** |
| Module | M6-R5 · Wk 4 · Seminar 5 · Data Management I |
| Final slide count | **29** |

## Lineage (all preserved unchanged)

| Record | SHA-256 |
|---|---|
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1.md` | `4e49cfb0aaeeee9b2eddceaab2c7006216894d9b97cfab354b8fead947646a06` |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_1.md` | `cb189e5369d6b937fe9a3cf550fe868895b5e2212682c649f2888bd4678cdb78` |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_2.md` (**not frozen**) | `cf8915ff316c5799f21b38a01f752fdeab5c8fc2fa162ac3a14d5a85bea8dafe` |
| `docs/rounds/BUSS256_M6_R5_CONTENT_SPEC_v1_1_RED_TEAM.md` | `a68cea76e4838b92ecc9a7fa07a6296a5a30f685d03bf73d23d2f6cb8bdb434e` |
| `docs/rounds/BUSS256_M6_R5_CONTENT_SPEC_v1_2_TARGETED_VERIFICATION.md` | `7e280dc6d0d807adfac5d423f527607f84b17df3e84496d48c1498e0c6bf472f` |

Supporting evidence:
- `BUSS256_M6_R5_SOURCE_AUTHORITY_RESOLUTION.md`
- `BUSS256_M6_R5_ASSESSMENT_ALIGNMENT.md`
- `BUSS256_M6_R5_EXTERNAL_VERIFICATION.md`

## Final patches

| ID | Slide | Change | Status |
|---|---|---|---|
| MP-01 | 13 | One chart only (the `price` histogram from the fictional dataset); the categorical bar-type rule is stated as text; the bin-choice note moves to notes / build note | **APPLIED** |
| MP-02 | 14 | Exactly two visible callouts (binary mean = proportion coded 1; missing-`rating` cue); three columns (`price`, `rating`, `featured`); the skew remark moves to notes | **APPLIED** |
| MP-03 | 17 | "Four problems" → "four things to check"; unusual values are something to check, not an error (consistent with slide 22) | **APPLIED** |
| B-01 | 16 | The correlation demonstration uses complete variables only (`price`, `units_sold`); `rating` is excluded, so no missing-data rule, deletion convention, or imputation discussion is needed | **RESOLVED** |

- Only proposed slides 13, 14, 16 and 17 changed from v1.2. The other 25 architecture rows and the source-reconciliation section are byte-identical to v1.2.
- Not applied (not authorized): MP-05, MP-06 (moot after B-01) and MP-07, which the executor had suggested in the review bundle.
- **Observation for the build tranche (not a content change):** slide 16's demonstration now involves two variables. The matrix therefore shows its structure (diagonal = 1; symmetric) as a 2 × 2 example.

## Spot-check (v1.3, read from disk)

| Slide | Checks | Result |
|---|---|---|
| 13 | One chart only; categorical bar rule as text only; bin-choice note not visible; skew with the "often" rule; no universal rule; one-line log preview; no overload | **PASS** |
| 14 | Exactly two visible callouts; binary mean natural; missing cue natural; three columns; no stacked skew, correlation, scaling, outlier, or near-zero-variation callouts | **PASS** |
| 16 | Complete variables only (`price`, `units_sold`); `rating` absent; no missing-data handling rule | **PASS** |
| 17 | Neutral "things to check" framing; unusual/outlier not called an error or problem; four checks listed | **PASS** |

## Freeze integrity check

| Check | Value |
|---|---|
| SLIDES | 29 |
| SOURCE_SAFE_SLIDES | 36 |
| SOURCE_MAPPED | 36 |
| UNMAPPED | 0 |
| Content tallies | KEEP 3 · KEEP-BUT-CLARIFY 10 · REVISE 14 · MERGE 7 · DELETE 2 · DEFER 0 |
| RT_UNRESOLVED | 0 (RT-01..RT-20 resolved; RT-09's slide-14 residual completed by MP-02) |
| ASSESSMENT_ADDITIONS | 6/6 (skew, binary mean, near-zero variation, correlation strength / nonlinear caveat, imputation by type, impossible vs. unusual), plus explicit scaling terminology |
| COPIED_VISUALS | 0 |
| APP_STORE_EXACT_NUMBERS | 0 |
| Visible historical App Store dependency | 0. The July 2013 lineage appears only as a governance note on slide 4; there is no visible label. |
| M6_R4B_LEAKAGE | 0 (term scan of the architecture: `admission`, import/export, user-defined functions, `library()`, filenames) |
| Protected assessment content copied into spec | 0 |
| MP_01 / MP_02 / MP_03 | APPLIED / APPLIED / APPLIED |
| B_01 | RESOLVED |
| SPOT_CHECK_13 / 14 / 16 / 17 | PASS / PASS / PASS / PASS |

## Handoffs

| Handoff | Status |
|---|---|
| **HANDOFF-ASSESS-01 — M6-R5 content-freeze alignment** | **CLOSED. Scope: M6-R5 content freeze only.** Not closed course-wide; the later assessment-freeze work remains separate. |
| AF-R5-01 (assessment-side histogram terminology) | **OPEN — ASSESSMENT-FREEZE TRANCHE.** No assessment file was modified. |
| HANDOFF-M5-01 | **OPEN** |
| HANDOFF-S3-01 | **OPEN** |
| M6-R4B | **HOLD** |

## Integrity

- Existing files modified: 0. New files: v1.3 and this record.
- Assessment files re-read: 0. M6-R4B contents read: 0. Web research: 0. Source mutations: 0.
- Git staged: 0. Commit: 0. Push: 0.
- Next tranche (not started): M6-R5 production blueprint / build spec.
