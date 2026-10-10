# BUSS256 M6-R5 — Build Spec v1.3.1 Self-Check

**Status: DRAFT — INDEPENDENT TARGETED VERIFICATION REQUIRED.** This is an author self-check, not acceptance. Freeze is not recommended until independent targeted verification is complete.

*Recorded 2026-10-10.*

## 0. Inputs

| Item | Path | SHA-256 |
|---|---|---|
| Canonical input (v1.3) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3.md` | `c063b691024b79c1229fb2f94a987e48e9bd62312fc1f573aeeadc48294c37cb` (matched the expected value before patching) |
| v1.3 exception | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` | `9e2e7c3f9156a6ab7dbec586451a86c97926922bb1db4f0d510c9a85a2073d32` (matched) |
| Output | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_1.md` | `ac44fb1bc9ba565a9ca25c8022072ab3324a917aefc53c493a5455d29c4bb48d` |
| Supplemental authority | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md` | See the final report; a record cannot contain its own hash |

**Baseline:** HEAD `64b2cd8154241d0d626f2cd935db1167a1d8103c` on `buss256/2027-refresh`, 0 files staged.

**Method:** v1.3.1 was produced by exact-string replacements on v1.3. Every replacement asserted its match count. Checks then parsed the **written** v1.3.1 file, not a generator object list.

## 1. v1.3 → v1.3.1 changed sections

The diff has 21 hunks and 78 changed lines.

| Section | Change |
|---|---|
| Title, status, preface | Version v1.3.1; status DRAFT — independent targeted verification required; base hash |
| §0.2 (new) | v1.3 → v1.3.1 change log (items A, B, C; counts preserved) |
| §0.1 | F5 row marked "[v1.3 only; superseded in v1.3.1]" (history retained) |
| §1 | Supplemental authority record added to the authority table |
| §11 Slide 2 | SPEAKER_NOTES → NX-2 string, labelled not blueprint-verbatim |
| §11 Slide 6 | SPEAKER_NOTES → NX-6 string, labelled not blueprint-verbatim |
| §11 Slide 14 | Rows S14_M1, S14_C1, S14_C1_M, S14_C1_T, S14_C2, S14_C2_M, S14_C2_T; geometry and leader bullets rewritten; QA_GATES line adds the C1-above-C2 order |
| §12 | Slide-14 z-order note: L1 radial; M1 outside the table |
| §14 | Notes policy: NX-2 / NX-6 are inserted as quoted and are not blueprint-verbatim |
| §16 | Gates 17, 18, 34, 38 redefined; tally sentence notes the v1.3.1 updates |
| §16.1 | Gate-37 row: explicit check of both slide-14 L2 runs |
| §19 | v1.3.1 conformance statement added above the v1.3 statement |
| §20 | v1.3.1 integrity block |

**Unchanged byte-for-byte:**
- §2–§10 (apart from the §1 row noted above);
- every §11 slide other than 2, 6 and 14;
- Appendix T and Appendix C.

## 2. Slide-14 geometric verification (independent recomputation)

Conventions:
- Table columns are 0.604 / 3.004 / 4.304 / 5.804 / 7.404; rows are 2.050 / 2.600 / 3.150 / 3.700 / 4.250 / 4.800 / 5.350.
- Drawn rules are horizontal only: a 1.5 pt header rule at 2.600 and 0.75 pt inner rules at 3.150–4.800. There is no outer or vertical border (§9.1).
- Leader width is 1.25 pt; marker stroke is 1.5 pt; marker Ø is 0.280.

| Check | Result |
|---|---|
| Drawn-rule crossings, L1 / L2 | **0 / 0**. L2's horizontal runs are parallel to the rules; the nearest rule is 0.100 away (centreline). The vertical run x 7.502 lies outside the rules' x span (0.604–7.404). |
| L1 ∩ L2 | **None**. Minimum distance 0.378. |
| L1 vs callouts | Starts on C1's left edge at y 3.425, on the straight side (C1 corner radius = 6% × 2.500 = 0.150). Does not enter C1 or C2; 1.275 from C2. |
| L2 vs callouts | Starts on C2's left edge at y 5.000, on the straight side (radius 0.099). Does not enter C2 or C1; 0.450 below C1's bottom. |
| Callout order | C1 y 2.050–4.550 above C2 y 4.700–6.350 (gap 0.150). C1_M, C1_T, C2_M, C2_T lie inside their callouts. All six rows equal v1.2 exactly. |
| M1 position | bbox (7.600, 3.285)–(7.880, 3.565); centre (7.740, 3.425) = Mean-row midline; 0.196 right of the table; 0.120 left of C1 |
| M1 attachment | L1 ends at (7.880, 3.425); distance to the centre is 0.14000 = r. The approach is horizontal through the centre, so it is radial. |
| M2 attachment | L2 ends at (4.621, 2.784); distance to the centre (4.514, 2.875) is 0.14046. That is 0.00046 outside the circle geometry, within the gate-38 tolerance of 0.001, and lies under the 1.5 pt marker stroke. The last segment deviates 0.066° from radial. |
| Marker interiors | Minimum leader distances to marker centres: L1 → M1 0.140 (endpoint only); L2 → M1 0.238; L2 → M2 0.1405 (endpoint only); L2 → C2_M 0.234; L2 → C1_M 0.837. **No leader enters a marker interior.** |
| M2 target | M2 bbox lies inside the rating × "Products with a value" cell (4.304–5.804 × 2.600–3.150) |
| **Vertical-run clearance (the 0.089 figure)** | Recomputed: centreline 0.098 from the table right edge (7.404) and from M1's left edge (7.600). **Stroke edge to each bounding edge: 0.0893** (= 0.098 − 0.625 pt). Stroke edge to M1's outer stroke: 0.0789. All are above the §9.2 0.020 minimum. |
| Row-1 text clearance | 16 pt Arial, middle-anchored. Digit tops 2.7923 (glyph yMax from `Arial.ttf`). The L2 stroke bottom is 2.7087, so the gap to "8" (rating) and "10" (featured) is 0.0836. Header-rule stroke to L2 stroke: 0.0809. Price "10" (x 3.977–4.224) and the row label (to x 2.796) lie outside the run. |
| Other objects in the leader region | Only S14_TABLE, S14_M1 and S14_M2. LBL, title rule and footer are outside y 2.700–5.000. |
| **Rating value 8 reading** | **Unambiguous.** L2 terminates on M2, inside the rating cell beside "8". It passes *above* the featured "10" cell interior (no rule crossed) and does not end there. Callout 2 text names rating ("8 of 10"). |

**Residual manual-visual risk (gate 37, not blocking at spec level):** the vertical run at x 7.502 runs parallel to the table's right edge, 0.098 away. The render reviewer must confirm that it does not read as a table border. This check is written into the §16.1 gate-37 row.

**Verdict:** every required geometric safety condition is met. No blocker. No alternative route was created.

## 3. Slide-2/6 notes

| Slide | Before (blueprint-verbatim) | After |
|---|---|---|
| 2 | "…not the order of our seminars. You chose techniques in Seminar 4; today asks what must be true of the data first." | "This is the order of the analysis workflow, not the order of our class sessions. The earlier analytics-technique lecture focused on choosing methods; today asks what must be true of the data first." (NX-2) |
| 6 | "Recall from Seminar 4 that category codes need interpretation; today we name the types." | "Recall from the earlier analytics-technique lecture that category codes need interpretation; today we name the types." (NX-6) |

Both new notes match the project-lead text exactly, apart from the line wraps in the directive.

**Other notes:**
- Notes changed on slides: [2, 6] only. The other 27 notes bodies, including the 5 empty ones, are unchanged.
- `seminar` matches across all notes: 0.

**Gate 33 terms:** neither new string contains a forbidden term.

## 4. TV-m1 to TV-m5 and carried rulings: preservation

Each marker string below has the same occurrence count in v1.3 and v1.3.1, and the count is non-zero:

| Item | Marker string(s) | Preserved |
|---|---|---|
| TV-m1 | "TABLE_FOCAL \| 20 exactly, bold" | Yes |
| TV-m2 | "CHART_LABEL \| 16 exactly"; "Fail-closed shape inventory (TV-m2)" | Yes |
| TV-m3 | "0 `p:timing` and 0 animation elements deck-wide" | Yes |
| TV-m4 | "all 46 TIGHT objects"; "STOP rule: on any actual render failure the build STOPS" | Yes. §16.1 differs only in the gate-37 row. |
| TV-m5 | Slide-15 r values 0.9433887 / 0.0718190 / −0.9442856 / 0.0000000; "\|r(coordinates) − r(data)\| ≤ 0.002" | Yes |
| Slide-1 exception | S01_META and S01_COURSE rows (full row match) | Yes |
| Slide-21 QA | "mean 51.2; SD 7.352765323; lower 29.141704; upper 73.258296; z(80) 3.916894"; "ddof = 1" | Yes |

**Gate definitions unchanged:** 5, 7, 22, 26 and 36 are byte-identical to v1.3.

## 5. Counts and deck-wide regression

The v1.3 verifier was rerun on v1.3 and on v1.3.1. **Its output is byte-identical for the two files.**

| Check | v1.3.1 |
|---|---|
| Slides | **29** |
| Declared objects (§11 rows) | **285** (7 rows changed, all on slide 14; 0 added; 0 removed; 0 duplicate IDs) |
| Numbered gates | **38**. Numbers 1–38; names identical to v1.3; classes M 31 / HYBRID 3 / MV 4. Definitions changed: 17, 18, 34, 38. |
| Off-slide / safe-zone / body > 6.850 | 0 / 0 / 0 |
| LIKELY_OVERFLOW | 0 |
| PREDICTED_COLLISIONS | 0 |
| UNINTENTIONAL_DOT_OVERLAPS | 0 |
| Role / size violations | 0 (SECONDARY 14) |
| TIGHT inventory | **46**, the same list as v1.3. S14_C2_T is still TIGHT (1.527 / 1.590); only its position changed. |
| Title drift vs content spec v1.3 | 0 |
| Slide-15 r (coordinates) | 0.944 / 0.072 / −0.944 / 0.000 |
| Slide-21 recomputation | mean 51.2, SD 7.353, bounds 29.14 / 73.26, z 3.92 |
| Appendix T and Appendix C | Byte-identical to v1.3 |

**Policy checks:**
- Unknown shape IDs fail closed (gate 7 unchanged).
- Zero animation, timing and transitions (gate 36 and §6.1 unchanged).
- Render-failure STOP rule preserved.

**Sensitive-content scan of the 53 added lines:**
- No assessment, M6-R4B or admission terms.
- The only date-like strings are the build-metadata patch date (2026-10-10) and a conformance sentence that quotes the removed "Seminar 5 · Week 4". Neither is slide or notes content.

**M6-R4B:** no held-content dependency (gate 32 unchanged).

## 6. Drift

| Category | Count |
|---|---|
| Authorized blueprint text deviations | 4 (S01_META, S01_COURSE, NX-2, NX-6) |
| Authorized implementation corrections (geometry) | 1 (slide 14, alternative B) |
| Unauthorized blueprint drift | **0** |
| Unauthorized content drift | **0** |

## 7. Not claimed

- No PPTX or PDF exists. No render gate (11, 12-MV, 14, 31-MV, 35, 36-MV, 37) is claimed as PASS.
- This self-check is not independent verification.

## 8. Integrity

- Only three new files were created: v1.3.1, the supplemental authority record and this self-check.
- No existing file was modified. Content spec, blueprint, manifest, v1–v1.3, the v1.3 exception and v1.3 self-check hashes were re-verified as unchanged after writing.
- The nine `work/` directories were not touched.
- Nothing staged, committed or pushed.
- Scratch computations live outside the repository.
