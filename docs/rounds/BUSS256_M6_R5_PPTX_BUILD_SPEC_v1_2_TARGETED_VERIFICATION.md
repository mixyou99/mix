# BUSS256 M6-R5 — PPTX Build Spec v1.2 Targeted Verification

*Recorded 2026-10-09. This is a read-only targeted verification, not a second full red-team. No specification, content, or blueprint file was modified.*

## Verdict

**PASS-WITH-MINOR-PATCHES**

**What holds:** every BS-R1 to BS-R13, BS-I5 and BS-I6 item is implemented in the written v1.2 file. All of the following are 0:
- content drift and blueprint drift;
- likely overflow and predicted collisions;
- dot overlaps;
- off-slide and safe-zone violations;
- type-role violations.

**What remains:** four minor, non-blocking items (TV-m1 to TV-m4, §12).
- Two of them prevent a literal 0 on the "ambiguous gates" and "builder decisions" counts:
  - TV-m2: gate 7 does not assign a role to chart tick-label and axis-label shapes that are not listed in §11.
  - TV-m3: whether slide 14 has the optional animation is left to the builder.
- Neither affects visible or static content.

## 1. Inputs and integrity

| File | SHA-256 | Status |
|---|---|---|
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` | Matches |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` | Matches |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1.md` | `aa9401e3b62d8f7f0c1948889ed75b48b8fb5b37fb649048703b50c4605b229e` | Matches |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_2.md` (candidate) | `55221b0683d3114542b4093a043381c27ae65257753555065b889a46641e4ec0` | Matches |
| `docs/rounds/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1_RED_TEAM.md` | `217892212e1fe7cfd93f8709c2da7a81140c9ef6dfa71fcb5deccab50fd65861` | Matches |

- Repository: `buss256/2027-refresh` @ `64b2cd8154241d0d626f2cd935db1167a1d8103c`.

## 2. Method and independence

- A new scratch verifier parsed **only the written v1.2 file**: the §11 object tables, Appendix C, Appendix T, §3, §9 and §16. It imported nothing from the v1.2 generator.
- Text fit used actual Arial advance widths from the system `Arial*.ttf` files, with:
  - line pitch 1.2 em × the role line spacing from §4;
  - the §4/§9 insets (chart labels 0.02 in left/right);
  - 6 pt paragraph spacing.
- Chart marks were rebuilt from the Appendix C coordinates (slide 7 from its stated rule). Tick-label boxes were rebuilt from the §9.2 rule.
- **Limitation:** the same agent drafted v1.2. The verifier code is new, but the line-height *model* is the same family used at drafting. Render-level confirmation remains with gates 11, 14, 35 and 37.

## 3. Object inventory and format-rewrite equivalence

| Check | Result |
|---|---|
| Slides with an object table | 29 / 29 |
| TOTAL_DECLARED_OBJECTS | **285** (matches the report) |
| Duplicate IDs | 0. Every ID is prefixed `S{nn}_` with its own slide number. Global names (H1–H3, F1, F2, F3_SEG_A–G, LBL_*) are unique by §6.2. |
| Deterministic geometry | All 285 rows carry numeric x, y, w, h |
| Title object | `TITLE_TEXT` on every slide (H2; slide 1 via S01_TITLE) |
| v1.1 visible strings missing from v1.2 | **0** of the v1.1 quoted visible strings. The scan returned 2 hits, but both are prose fragments between quotes in v1.1 ("+ line break +", "at (7.470, 2.735), level with the"), not visible text. |
| Speaker notes v1.1 vs. v1.2 | Identical on all 29 slides |
| Layouts, labels, data bindings, reveal and static meaning | Unchanged, except for authorized patches |

**Authorized changes confirmed:**
- Removal of the slide-26 inline RECALL tag (BS-I6).
- Addition of RECALL · M6-R3 on slide 28 (BS-R8).
- Size changes under BS-I5.
- Geometry changes under BS-R2 to BS-R4, BS-R7 and BS-R11.

**UNAUTHORIZED_VISIBLE_TEXT_CHANGES = 0.**

**The two cosmetic changes:**
- **SLIDE1_META = SAFE FORMAT NORMALIZATION.** "Seminar 5 · Week 4" is the blueprint's VISIBLE_CONTENT string verbatim. The v1.1 upper-case rendering was the deviation.
- **ROADMAP_FORMAT = SAFE.** The seven boxes "A · …" to "G · …" match the blueprint §2 architecture names. The format is roadmap text only: it adds no position-bar segment, and "0 · Open" remains the F2 tag on slide 2 with 0 selected.

## 4. Patch-by-patch verification (implementation read, not the change log)

| Item | Verdict | Evidence in the written v1.2 |
|---|---|---|
| BS-R1 | **PASS** | §3.1 declares 12,192,000 × 6,858,000 EMU authoritative and gives `p:sldSz cx="12192000" cy="6858000"`. Inches are descriptive; "13.333" is never a conversion source. The conversion rule applies to coordinates only. Gate 2 requires exact integer equality. |
| BS-R2 | **PASS** | C.10: Ø 0.085, stack pitch 0.100; recomputed lefts match 6.200 + p × 6.2/130 − 0.0425 for all 10 dots. P01–P02 0.0954, P02–P03 0.0954, P06–P07 0.0954 (all > 0.085). P03/P04 is an intentional stack (0.100). Overlaps 0. |
| BS-R3 | **PASS** | Slides 2, 5, 6, 7, 9, 13, 14, 15, 16 and 28: all text boxes fit (§5). No primary text below 20 pt. |
| BS-R4 | **PASS** | All six prior collisions are cleared (§6). |
| BS-R5 | **PASS** | §9.3 and gate 16 are structural: exactly `S24_FORMULA_Z` and `S24_FORMULA_MINMAX` on slide 24, plus 0 `m:oMath`. The regex is a secondary screen only, and plain "=" text such as "A = {7, 7, 7, 7, 7}" cannot fail it. |
| BS-R6 | **PASS** | §6.2 names every shape; §11 IDs are the shape names; mark, axis and leader patterns are defined. |
| BS-R7 | **PASS** | S14_M2 (4.374–4.654, 2.735–3.015) lies inside the rating × "Products with a value" cell (4.304–5.804 × 2.600–3.150), whose value is 8. S14_L2 runs (8.000, 5.525) → (4.514, 5.525) → (4.514, 3.015) and crosses no text. Gate 18 checks this. |
| BS-R8 | **PASS** | S28_RC_R3 "RECALL · M6-R3" at (4.300, 1.960, 2.200, 0.340). The column label is narrowed to w 3.600. No collision, and no body text reduced. |
| BS-R9 | **PASS** | Chart labels 16–18; the slide-12 key statement is 24 pt bold; primary text ≥ 20; 18 pt only on SECONDARY objects. See TV-m1 for the matrix cells. |
| BS-R10 | **PASS** | `TITLE_TEXT` per slide; 0 titles contain "(HIGH)" / "(MEDIUM)" / "[X]"; all 29 equal content v1.3. Gate 5 enforces this. |
| BS-R11 | **PASS** | §9.2 defines anchor, offset, alignment, minimum gap, the origin rule and a single deterministic data-label fallback. §9.2's "Collision fallback" line forbids builder repositioning. |
| BS-R12 | **PASS** (TV-m2 minor) | MIN_FONT_BY_ROLE is role-based; AUTOFIT is split (gates 10 and 11); the notes scan uses whole words. |
| BS-R13 | **PASS** | §9.1 locks: line spacing 100%, space before/after 0/0, middle anchor, 0.080 / 0.040 in margins, fixed row heights. Unplanned wraps: 0 (§7). |
| BS-I5 | **PASS** (TV-m1 minor) | Every text object has a role (unclassified 0). PRIMARY < 20: 0. KEY < 24: 0. CHART outside 16–18: 0. Role violations: 0. 14 SECONDARY objects (below). |
| BS-I6 | **PASS** | Exactly one CUE on slide 26, "RECALL · M6-R4A → EXTEND", at (7.009, 1.420, 2.900, 0.360). Text 2.578 in fits the 2.740 usable width. It does not touch LBL_ILLUSTRATIVE (gap 0.120). Bold italic, solid border, bracket: grayscale-safe. Slide 26 has 0 other RECALL/EXTEND tags. |

**The 14 SECONDARY (18 pt) objects, each genuinely subordinate:**

| Slide | Objects | Kind |
|---|---|---|
| 3 | S03_RCT | Recall line |
| 5 | S05_CAPL, S05_CAPR | Table captions |
| 5 | S05_RC1T, S05_RC2T | Recall lines |
| 8 | S08_PTR | Pointer |
| 13 | S13_NART | Caveat |
| 13 | S13_G3 | Preview |
| 15 | S15_RCT | Recall line |
| 16 | S16_CAUT | Caveat |
| 18 | S18_CAP | Caption |
| 20 | S20_CAUT | Caveat |
| 28 | S28_MISS | Annotation |
| 29 | S29_CAP | Caption |

## 5. Geometry and text fit (independent recomputation)

| Check | Result |
|---|---|
| OBJECTS_CHECKED | 285 declared, plus every rebuilt chart mark (dots, bars, marker and edge lines) and every §9.2 tick-label box |
| OFF_SLIDE_OBJECTS | 0 (exact width 13.3333…, height 7.5) |
| SAFE_ZONE_VIOLATIONS | 0; body bottoms ≤ 6.850: 0 violations |
| LIKELY_OVERFLOW | **0**, including tag widths and all table cells |
| TIGHT (need > 95% of the box; still fits) | 46 objects |

**The 46 TIGHT objects**, including the patch-focus slides:
- 2: S02_Q
- 5: S05_CAPL
- 6: S06_FOOT
- 7: S07_DEF, S07_SIZE1, S07_SIZE2
- 9: S09_HDR2, S09_LIST2
- 13: S13_G1A, S13_G1B, S13_G2A, S13_G2B, S13_NART
- 14: S14_C2_T
- 15: S15_RULES, S15_CAP4
- 16: S16_READ, S16_CAUT
- 28: S28_DIM, S28_MISS, S28_COST, S28_RC12T
- plus single-line KEY boxes sized exactly to need (11, 18, 19, 22, 24, 26, 29) and others

Many were sized to exactly the modeled need. This is a render-margin risk, not a defect (TV-m4).

## 6. Collisions and charts

**PREDICTED_COLLISIONS = 0.** This covers text–text, text–table, text–mark, tick-label–text, tick-label–tick-label, and upper-right label–object pairs on all 29 slides. Declared intentional containments are excluded: S14_M2 inside its cell, and the slide-25 segment labels.

**The six prior failures:**

| Slide | Before | Now |
|---|---|---|
| 10 | Median label vs. text column | Text column right edge 5.404; label 5.477–6.927 ✓ |
| 12 | Title vs. $5 stack | Title bottom 3.310; stack top 3.350 ✓ |
| 13 | "6" data label vs. "Median 16.5" | Median label bottom 2.310; data label top 2.410; no overlap ✓ |
| 21 | Intro text vs. ±3 SD labels | Intro bottom 2.380; edge labels top 2.400 ✓ (0.020 gap, tight) |
| 23 | "$8" vs. row label | "$8" (1.684, 3.220–3.580) vs. row label (y 3.600–4.050) ✓ |
| 28 | Annotation vs. RECALL row | S28_COST bottom 6.240; RECALL row top 6.420 ✓ |

**Dot overlaps:** 0 on slides 7, 10, 11, 12, 15, 16, 21 and 25.

**Per-slide checks:**
- **Slide 13:**
  - One histogram. Bars rebuilt from C.13 give heights / 0.450 = 6, 2, 1, 0, 0, 0, 1.
  - Plot x 7.850–12.450, baseline 5.500.
  - Median = 7.850 + 16.5 × 4.6/140 = **8.3921** → 8.392, solid. Mean = **8.7700**, `dash`.
  - Labels and count labels fit; no interval notation; text column fits; primary text 20 pt.
- **Slide 14:**
  - 3 data columns (2.400/1.300/1.500/1.600); headers on one line (16 pt bold).
  - VISIBLE_CALLOUTS = 2 (S14_C1, S14_C2). The markers M1, M2, C1_M and C2_M are targets or labels, not callouts.
  - The "2" marker refers unambiguously to the rating count (8 of 10, i.e., 2 missing).
- **Slide 15:**
  - r recomputed from the printed C.15 coordinates: +0.944 / +0.072 / −0.944 / 0.000. The raw data give +0.943. The 0.001 difference is coordinate rounding, and §19's "+0.943" quotes the data value (TV-m5, cosmetic).
  - Points are inside the axes, the Curved caption fits (2 lines, 0.593 / 0.620), and no r is shown.
- **Slide 16:**
  - Matrix 1.00 / −0.80 / −0.80 / 1.00; r from C.16 = −0.7995.
  - S16_READ (20 pt) fits and ends at 6.100; the caveat starts at 6.130.
  - No `rating`; no missing-value rule.
- **Slide 21:**
  - Mean 51.2, SD 7.353, thresholds 29.14 / 73.26, z(80) = 3.92.
  - The upper threshold maps to x 10.028; the left edge of the 80 dot is 11.195 (beyond).
  - The leader ends at the dot's top edge, y 4.240.
  - No P10 or 3.92 on the slide; notes free of QA arithmetic.
- **Slide 23:** bars 1.984–3.160 and 2.320–11.770 (canonical values unchanged). Endpoint labels fit and do not collide. PC-2 holds through length and text.
- **Slide 24:**
  - The only formula objects deck-wide are `S24_FORMULA_Z` and `S24_FORMULA_MINMAX`, both 28 pt and both fitting (3.37 and 4.62 in, within 5.40).
  - Mini table 10 / 20 / 40 → 0 / 0.33 / 1, with rows that fit.
  - No "price", "$" or Pxx on the slide.

**FORMULA_QA = PASS.** EXPECTED_FORMULA_OBJECTS = {S24_FORMULA_Z, S24_FORMULA_MINMAX}; FORMULA_OBJECT_COUNT = 2.

## 7. Tables, chart labels, lineage, titles, notes, position cue, PC-2

- **Table geometry:** §9.1 rules are present verbatim. Every header and body cell in Appendix T, checked at its column width, fits on one line, except the governed slide-4 2-line cells (0.613 ≤ 0.900). The slide-16 matrix values at 20 pt bold fit their 0.700 rows. **UNPLANNED_TABLE_WRAPS = 0.**
- **Chart-label geometry:** §9.2 rows exist for x/y tick labels, the origin rule, x/y axis titles, data labels and their fallback, marker labels, threshold labels, endpoint labels, segment labels, boundary tick labels and minimum gap. There is no "move as needed" wording. All chart labels are 16–18 pt.
- **Token lineage:** §3.2 has a provenance column.
  - H1–H3 are MEASURED-R4A.
  - F1 is R5-NEW (y 6.985 vs. measured 7.083; x and w measured).
  - The upper-right label is R5-NEW (measured R4A 9.479, 1.479, 3.250, 0.354).
  - BS-I3 cites both the older written R4A spec and blueprint §3's "0.35 in top, 0.40 in footer reserve".
- **Titles:** TITLE_DRIFT = 0; visible-title "(HIGH)" / "(MEDIUM)" = 0.
- **Notes isolation:**
  - Notes are identical to v1.1.
  - The forbidden-term scan (EMU, SHA, n − 1, left-closed, right-open, QA, builder, maximum z, assessment, admission, M6-R4B, App Store, Optional, metadata, hash) found **0 hits**.
  - Slides 1, 4, 11, 26 and 29 have no notes.
  - Slide 22 has both sentences without "Optional:" (BS-I4 ✓).
- **Position cue:** §3.3 gives 7 segments A–G, each 0.360 wide with 0.060 gaps (x 4.300–7.180).
  - Slide 1: none. Slide 2: "0 · Open" with 0 selected. Slides 3–29: exactly 1 selected.
  - Map: 3–5 A, 6–8 B, 9–16 C, 17–22 D, 23–27 E, 28 F, 29 G.
  - Selected = navy fill + 2 pt outline + bold letter; neutral = white fill + 0.75 pt outline + regular letter. Grayscale-safe. **PASS.**
- **PC-2 on patched slides:** color is never the sole distinction.

| Slide | Non-color cues |
|---|---|
| 10, 13 | Solid vs. dashed markers + text labels |
| 12 | Titles with values + a visibly flat stack |
| 14 | Numbered markers + leaders |
| 15 | Captions |
| 16 | Numbers in every cell |
| 21 | Dashed labeled edges + text annotation |
| 23 | Lengths + labels |
| 24 | Card headers |
| 26 | Cue text and form |
| 28 | Braces, text, dashed "(missing)" cells |

## 8. Validation gates (parsed from §16)

**TOTAL_GATES = 38:** MECHANICAL 31 · HYBRID 3 · MANUAL_VISUAL 4 · AMBIGUOUS 0 by class label (but see TV-m2).

**All 38 gates, in order:**
1. SLIDE_COUNT
2. SLIDE_SIZE_EMU
3. MASTERS_LAYOUTS
4. LAYOUT_ASSIGNMENT
5. TITLE_TEXT
6. FONT_RUNS
7. MIN_FONT_BY_ROLE
8. GEOMETRY_MATCH
9. OFF_SLIDE_SAFE_ZONE
10. AUTOFIT_FLAG
11. TEXT_OVERFLOW_RENDER (MV)
12. TABLE_HEIGHT (HYBRID)
13. PICTURE_OBJECTS
14. COPIED_VISUALS (MV)
15. APP_STORE_REFERENCES
16. FORMULAS
17. SLIDE_14_CALLOUTS
18. SLIDE_14_M2_TARGET
19. SLIDE_16_MATRIX
20. HISTOGRAM
21. SLIDE_13_MARKERS
22. TOY_DATA
23. FEATURED
24. MISSING
25. P11
26. SLIDE_21
27. SLIDE_17
28. SLIDE_10
29. SLIDE_24_MINI_ISOLATION
30. CUES
31. POSITION_CUE (HYBRID)
32. M6_R4B_LEAKAGE
33. NOTES_FORBIDDEN_TERMS
34. NOTES_PRESENCE
35. PC2_GRAYSCALE (MV)
36. STATIC_PRINT (HYBRID)
37. RENDER_COLLISIONS (MV)
38. LINE_ENDPOINTS

**Other checks:**
- History is stated correctly: v1 = 25; v1.1 = 26.
- FORMULAS is structural. M6_R4B_LEAKAGE is "governed term scan only".
- No gate labeled M requires subjective judgment.
- **Future-build-only gates:** 11 TEXT_OVERFLOW_RENDER, 14 COPIED_VISUALS, 35 PC2_GRAYSCALE and 37 RENDER_COLLISIONS (MV), plus the MV halves of 12, 31 and 36.
  - v1.2 does not mark any of them as executed. §19 labels its own results "spec-level".
  - All 38 gates can execute only once a PPTX exists.

## 9. Builder-judgment scan

| Phrase searched | Hits | Assessment |
|---|---|---|
| as appropriate, as needed, move if needed, reasonable spacing, fit as necessary, adjust if needed, approximately, approx | 0 | — |
| "near" | 5 | All in frozen teaching text or captions ("r near 0", "Near zero", "near-zero r"). Not build ambiguity. |
| "small" | 2 | Frozen text ("one possible small sample", "Small samples …") |
| "optional" | 6 | The editorial "Optional:" (BS-I4 prohibition text, 4 hits) plus **slide 14's reveal "(optional)" / "Optional:" (2 hits)**. This leaves a non-visual builder choice: whether slide 14 is animated (TV-m3). |

**SUBSTANTIVE_BUILDER_DECISIONS = 0** affecting visible or static output. 1 non-visual residual (TV-m3).

## 10. Content / blueprint conformance

**CONTENT_DRIFT = 0; BLUEPRINT_DRIFT = 0.**
- The slide-26 compound cue and the slide-28 RECALL · M6-R3 tag restore blueprint/content cues, so they are not drift.
- Teaching jobs are unchanged: every visible string is carried from v1.1 or the blueprint.

## 11. Patch accounting

| Item | Status |
|---|---|
| BS-R1 to BS-R13 | 13 / 13 PASS |
| BS-I5 | PASS |
| BS-I6 | PASS |
| Unresolved BS-R / BS-I items | 0 |

## 12. Minor patches (non-blocking; recommended before freeze)

| ID | Finding | Recommended minimal patch |
|---|---|---|
| TV-m1 | The slide-16 matrix value cells use role TABLE_FOCAL at 20 pt bold. BS-I5 says "TABLE BODY: 16 pt" and has no focal-cell category. Readability is not at issue (they are larger), but the role is not in the ruling. | Either a project-lead ratification of TABLE_FOCAL (slide 16 only), or set the values to 16 pt bold (they fit either way). |
| TV-m2 | Gate 7 assigns sizes "per §11 role column". Chart tick labels, axis-tick shapes and other generated label shapes (`S{nn}_XT_*`, `S{nn}_YT_*`) are not §11 rows, so their role exists only implicitly in §9.2. | Add to gate 7: "Shapes named `S{nn}_XT_*` / `S{nn}_YT_*` are role CHART at 16 pt." |
| TV-m3 | Slide 14's reveal is "optional", so animation presence is a builder choice. Static output is identical either way. | Lock it: either "C1 group → C2 group on click" or "no animation". |
| TV-m4 | 46 TIGHT boxes, many sized exactly to the modeled need, and a 0.020 gap on slide 21 (intro text vs. edge labels). | No spec change required. Gate 11 and gate 37 must confirm at render. Optionally add +0.03 in height where the space below allows. |
| TV-m5 (cosmetic) | §19 quotes r = +0.943 for the strong-positive panel; the rounded coordinates give +0.944. | Optional wording: "≈ +0.943 (data); +0.944 from rounded coordinates". |

## 13. Summary

| Item | Value |
|---|---|
| Overall verdict | **PASS-WITH-MINOR-PATCHES** |
| Build-spec freeze recommendation | Freeze after a v1.3 micro-patch of TV-m1 to TV-m3, or after a project-lead ruling on TV-m1 plus explicit acceptance of TV-m2 and TV-m3 as recorded minor items. No re-verification beyond a targeted diff check is needed. |

## 14. Integrity

- v1, v1.1 and v1.2 were not modified. No v1.3 was created.
- No PPTX, PDF, PNG, script or OOXML was created in the repository (scratch verification code only).
- Content and blueprint changes: 0.
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- Git staged: 0. Commit: none. Push: none.
