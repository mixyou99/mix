# BUSS256 M6-R5 — Data Management I: PPTX Build Spec v1.3.2

**Status: M6-R5 PPTX BUILD SPEC v1.3.2 = DRAFT — INDEPENDENT VERIFICATION REQUIRED**

*v1.3.2 QA-coverage micro-patch (2026-10-10). Base: v1.3.1, SHA-256 `ac44fb1bc9ba565a9ca25c8022072ab3324a917aefc53c493a5455d29c4bb48d` (preserved, unmodified). v1.3.2 changes QA wording and documentation only (§0.3). No slide, object, coordinate, text, note, data or font is changed. Record: `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_2.md`.*

*v1.3.1 final bounded patch (2026-10-10). Base: v1.3, SHA-256 `c063b691024b79c1229fb2f94a987e48e9bd62312fc1f573aeeadc48294c37cb` (preserved, unmodified). v1.3.1 applies only the project-lead decisions listed in §0.2, recorded in `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md`. Everything else is carried from v1.3 unchanged.*

*v1.3 governed micro-patch (2026-10-09). Base: v1.2, SHA-256 `55221b0683d3114542b4093a043381c27ae65257753555065b889a46641e4ec0` (preserved, unmodified). v1.3 applies:*
- *the project-lead rulings on TV-m1 to TV-m5 from `docs/rounds/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_2_TARGETED_VERIFICATION.md`;*
- *the Slide-1 authority exception (`docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md`);*
- *the F5 slide-14 leader correction.*

*Everything below §0.1 is carried from v1.2 except where §0.1 lists a change. The v1.2 text that follows is retained as the base record.*

*Created 2026-10-09. This is an implementation specification only: no PPTX, PDF, PNG, OOXML or build script has been produced. v1.2 applies red-team patches BS-R1 to BS-R13 from `docs/rounds/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1_RED_TEAM.md` (SHA-256 `217892212e1fe7cfd93f8709c2da7a81140c9ef6dfa71fcb5deccab50fd65861`), subject to project-lead rulings BS-I5 and BS-I6.*

**Base files (preserved, unmodified):**
- v1.1: `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1.md`, SHA-256 `aa9401e3b62d8f7f0c1948889ed75b48b8fb5b37fb649048703b50c4605b229e`.
- v1: `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1.md`, SHA-256 `868721f7257ba9a571130f17ef20a0239fe16b3b8bb1aa1c415b9dabfb183227`.

**How v1.2 is written:** every per-slide object in §11 and every coordinate in Appendix C come from one deterministic object list. That same list was checked mechanically for:
- bounds;
- Arial-metric text fit;
- type-scale roles;
- pairwise collisions;
- dot overlaps.

The results are in §19.

## 0.3 Change log v1.3.1 → v1.3.2 (QA-coverage micro-patch)

| Item | Change | Sections |
|---|---|---|
| Gate-37 coverage | The §16.1 gate-37 row now requires four explicit slide-14 leader checks (R1–R4), each with operational criteria, recorded evidence and STOP on failure. Detailed in §16.1.1. No numbered gate added; no existing criterion removed. | §16.1, §16.1.1 |
| §0.1 historical note | "canonical toy data and notes unchanged" clarified as a v1.3-only statement | §0.1 |
| Authority references | v1.3.2 supplemental record added; it reconciles the affected-gate list of the v1.3.1 record (17, 18, 34, 38, gate-37 row). Documentation only; no new authorization. | §1, §20 |

**Not changed:** slide 14 geometry and callout order (alternative B); all slide text; all speaker notes (including NX-2 and NX-6); data; objects; fonts; TV-m1 to TV-m5; Slide-1 exceptions; the static-deck rule; the existing STOP rule.

**Counts preserved:** 29 slides; 285 declared objects; 38 numbered gates (no gate added or removed); 46 TIGHT objects.

## 0.2 Change log v1.3 → v1.3.1 (final bounded patch)

| Item | Change | Sections |
|---|---|---|
| A. Slide-14 geometry correction (alternative B) | The v1.3 callout swap is **rejected** and reverted: callout 1 (S14_C1 group) is again on top (y 2.050), callout 2 (S14_C2 group) below (y 4.700), as in v1.2. S14_M1 moves from x 7.474 to x 7.600 (y unchanged). S14_L1 = (8.000, 3.425) → (7.880, 3.425). S14_L2 = (8.000, 5.000) → (7.502, 5.000) → (7.502, 2.700) → (4.720, 2.700) → (4.621, 2.784). Callout wording, table data, S14_M2 and its target cell are unchanged. Bounded implementation correction authorized by the project lead. | §11 Slide 14, §12, gates 17, 18, 37 (§16.1), 38 |
| B. Slide-2 note exception (NX-2) | Frozen blueprint note replaced by the project-lead wording; no seminar number | §11 Slide 2, §14, gate 34 |
| C. Slide-6 note exception (NX-6) | Frozen blueprint note replaced by the project-lead wording; no seminar number | §11 Slide 6, §14, gate 34 |

**Not changed:** TV-m1 to TV-m5 rulings; the Slide-1 exception (BS-I7); slide-21 and slide-15 QA; the fail-closed inventory; the static-deck rule; §16.1 ownership and STOP rule; the 46-object TIGHT inventory; every other slide and note.

**Counts preserved:** 29 slides; 285 declared objects (none added or removed); 38 numbered gates (definitions of 17, 18, 34, 38 and the §16.1 gate-37 row updated; none added).

## 0.1 Change log v1.2 → v1.3 (governed micro-patch)

| Item | Change | Sections |
|---|---|---|
| F1 / Slide-1 authority exception | S01_META "Seminar 5 · Week 4" → "UNDERSTAND · SUMMARIZE · PREPARE"; S01_COURSE "BUSS256 · Spring 2027" → "BUSS256 · Introduction to Big Data Analytics and Interpretation". Enforces locked Manifest v0.2.3 §1 rule 3 (and rules 2, 9). IDs, positions, sizes and roles unchanged. Authorized divergence from blueprint §5 Slide 1; see the exception record. | §1, §2 (BS-I7), §11 Slide 1, gate 5 |
| F5 / Slide-14 leader | [v1.3 only; **superseded in v1.3.1** by §0.2 item A] S14_L2 rerouted so it crosses no drawn table border, using a callout swap (callout 2 top, callout 1 below). | §11 Slide 14, §12, gates 18 and 38 |
| Slide 21 (false alarm closed) | Build-only QA metadata added (n = 20, Blueprint §6.4, sample SD ddof = 1, includes 80). Data, points, text and labels unchanged. The prior n = 10 objection is RESOLVED — INCORRECT DATASET ASSUMPTION. | §10, §11 Slide 21, gate 26 |
| TV-m1 | TABLE_FOCAL ratified: exactly 20 pt bold, slide-16 matrix value cells only; matrix header cells TABLE exactly 16 pt bold; per-cell role check | §2 (BS-I8), §4, gate 7 |
| TV-m2 | Generated tick labels `S{nn}_XT_*` / `S{nn}_YT_*` = role CHART_LABEL, exactly 16 pt Arial. Fail-closed shape inventory: unknown shape names FAIL; no implicit default role or font | §4, §6.2, §9.2, gate 7 |
| TV-m3 | Static deck: zero animations, zero timing, zero transitions deck-wide (including slides 6, 13, 14, 24). REVEAL_ORDER is pedagogical pacing metadata only | §2 (BS-I9), §6.1, §11, §13, gate 36 |
| TV-m4 | The §9.2 minimum label-to-mark gap (0.020 in) remains authoritative. 46 TIGHT boxes are retained as nonblocking render risks (full list in the self-check record). MV gate ownership and the STOP rule are defined. | §16.1, §19 |
| TV-m5 | Slide-15 QA correlation is computed from Blueprint §6.8 original data (strong positive r ≈ 0.9433887); plotting-rounding tolerance \|Δr\| ≤ 0.002 | §11 Slide 15, Appendix C.15, gate 22 |

**Counts preserved:**
- 29 slides;
- 285 declared objects (no object added or removed);
- 38 numbered gates (definitions updated, none added);
- canonical toy data and notes unchanged in v1.3 (v1.3.1 changes the slide-2 and slide-6 notes; see §0.2).

## 0. Change log v1.1 → v1.2

| Patch | Applied in |
|---|---|
| BS-R1 exact slide size | §3: EMU authority, conversion rule; gate SLIDE_SIZE_EMU |
| BS-R2 slide-10 dots | Ø 0.085, stack pitch 0.100; C.10 regenerated; 0 overlaps |
| BS-R3 text-overflow geometry | Slides 2, 5, 6, 7, 9, 13, 14, 15, 16, 28 (and all other boxes re-fitted) |
| BS-R4 collisions | Slides 10, 12, 13, 21, 23, 28 |
| BS-R5 formula QA | §9.3 and gate FORMULAS: structural, two named objects |
| BS-R6 shape naming | §6.2; every object ID in §11 is its PowerPoint shape name |
| BS-R7 slide-14 marker 2 | M2 inside the rating "Products with a value" cell; elbow leader |
| BS-R8 slide-28 RECALL · M6-R3 | S28_RC_R3 at (4.300, 1.960) |
| BS-R9 type scale | §4 (BS-I5): chart labels ≥ 16, primary ≥ 20, key ≥ 24, 18 pt only for SECONDARY |
| BS-R10 title metadata | `TITLE_TEXT` per slide; density markers moved to ROLE; gate TITLE_TEXT |
| BS-R11 chart-label geometry | §9.2 (anchors, offsets, alignment, gaps, deterministic fallback) |
| BS-R12 gate determinism | §16: MIN_FONT_BY_ROLE, split AUTOFIT, word-boundary notes scan, classes M/MV/HYBRID |
| BS-R13 table line spacing | §9.1: cell paragraph rules locked; rendered-height gate |
| Minor m1–m13 | m1 §3 provenance; m2 roadmap; m3 → BS-I6; m4 slide 27 centres; m5 slide-25 ticks; m6/m7 explicit card and panel coordinates; m8 slide-11 strings; m9 leader endpoints; m10 gate count; m11 chevron preset; m12 single-line heights; m13 per-slide ROLE |

## 1. Authority

| Item | Value |
|---|---|
| Frozen content authority | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md`, SHA-256 `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Frozen production blueprint | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md`, SHA-256 `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` (APPROVED / FROZEN per `docs/rounds/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_FREEZE.md`) |
| Red-team | `docs/rounds/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1_RED_TEAM.md` (PASS-WITH-PATCHES) |
| Locked manifest | `BUSS256_Session_Authority_Build_Manifest_LOCKED_v0.2.3.md` (located at `~/Downloads/`, outside the repository), SHA-256 `d5734738e06afde34545c6c07b44c0b22e19ed3965f860869414131f77d37557`. §1 rule 3: "Deck bodies do not hard-code week/date/deadline/assessment percentage." |
| Authority exception | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` (Slide 1 only) |
| Supplemental authority record (v1.3.1) | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md` (slide-14 correction; note exceptions NX-2, NX-6) |
| Supplemental authority record (v1.3.2) | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_2.md` (gate-37 coverage; affected-gate reconciliation; documentation only) |
| Repository at drafting | `buss256/2027-refresh` @ `64b2cd8154241d0d626f2cd935db1167a1d8103c` |
| Consistency reference (read-only) | Measured M6-R4A implementation geometry. M6-R4A is not reopened. Where it conflicts with M6-R5, **M6-R5 wins**. |

**Precedence:**
1. Frozen blueprint per-slide entries.
2. Blueprint summary tables, as interpreted by §2.
3. This spec.

Where this spec states a value, the builder must not change it.

## 2. Interpretation register (BS-I1–BS-I9 resolved; Slide-1 exception recorded separately)

| ID | Issue | Resolution | Status |
|---|---|---|---|
| BS-I1 | Blueprint §3 lists slide 19 under L-CONCEPT; its per-slide entry says L-DATA. | **L-DATA.** The per-slide entry overrides the summary-layout list. | RESOLVED |
| BS-I2 | Blueprint §3 says "7-segment position bar"; the architecture has block 0 plus A–G. | **7-segment A–G content-position bar.** Block 0 / Open is a pre-content state, not a segment. Slide 1: no cue. Slide 2: tag "0 · Open", 0 selected. Slides 3–29: exactly one selected. No completed vs. future distinction. | RESOLVED |
| BS-I3 | The older written M6-R4A spec (0.35 in top margin) and blueprint §3 ("0.35 in top, 0.40 in footer reserve") conflict with the measured M6-R4A deck, whose institution line is at y 0.229 in. | Header geometry uses the **measured, governed M6-R4A implementation tokens** (§3), not the 0.35 in prose in either document. The 0.40 in footer reserve is respected: no body object extends below y 6.850. | RESOLVED |
| BS-I4 | Slide-22 note has an editorial "Optional:" prefix. | Insert both frozen sentences; never insert "Optional:". | RESOLVED |
| BS-I5 | Type scale vs. blueprint §3. | Project-lead ruling, implemented in §4: PRIMARY ≥ 20 (20–22); KEY ≥ 24; SECONDARY 18 (only for subordinate supporting sentences, captions, caveats, short annotations); CHART labels 16–18; TABLE body 16; tags, footer and slide number keep their governed sizes. No overflow is solved by shrinking PRIMARY text. | RESOLVED |
| BS-I7 | Blueprint Slide 1 VISIBLE_CONTENT "Seminar 5 · Week 4" (literal blueprint string) and the v1.2 rendering of the blueprint's "course line" as "BUSS256 · Spring 2027" (spec string) conflict with locked Manifest v0.2.3 §1 rule 3 (no hard-coded week/date in deck bodies; also rules 2 and 9). | Project-lead ruling: S01_META "UNDERSTAND · SUMMARIZE · PREPARE"; S01_COURSE "BUSS256 · Introduction to Big Data Analytics and Interpretation". **Authorized divergence from the frozen blueprint** (2 strings, Slide 1 only); recorded in the authority-exception record. | RESOLVED (authorized exception) |
| BS-I8 | TABLE_FOCAL was not a role in the BS-I5 ruling (TV-m1). | Project-lead ruling: ratified. Exactly 20 pt bold, slide-16 matrix value cells only; matrix header cells TABLE, exactly 16 pt bold. | RESOLVED |
| BS-I9 | The slide-14 reveal was "optional" (TV-m3). | Project-lead ruling: static deck. 0 animations, 0 timing, 0 transitions deck-wide; REVEAL_ORDER is pacing metadata only. | RESOLVED |
| BS-I6 | Slide 26: blueprint VISIBLE_CONTENT says "EXTEND:", but LABELS lists only RECALL. | Project-lead ruling: **one compound upper-right cue, "RECALL · M6-R4A → EXTEND"** (S26_CUE, §8). No separate stacked RECALL and EXTEND tags. No inline RECALL tag on slide 26. | RESOLVED |

## 3. Global geometry

### 3.1 Slide size: EXACT PPTX GEOMETRY AUTHORITY (BS-R1)

| Item | Value |
|---|---|
| **Authoritative size** | **12,192,000 × 6,858,000 EMU** (`<p:sldSz cx="12192000" cy="6858000"/>`) |
| Descriptive size | 13.333… × 7.5 in (16:9). The rounded "13.333" is never a conversion source. |
| Conversion | **EMU values are authoritative; inch values are descriptive.** Every inch coordinate in this spec converts as EMU = round(inches × 914,400), rounded half up. |
| Safe zones | LEFT_SAFE 0.450 · TOP_SAFE 0.200 · BOTTOM_SAFE 0.200 (y ≤ 7.300) · RIGHT_SAFE 0.450 (right edge ≤ 12,192,000 − 411,480 = 11,780,520 EMU ≈ 12.883 in) |
| Content edges | Left x 0.604 (matches the measured M6-R4A title x); right x 12.729 (width 12.125) |
| Body zone | x 0.604–12.729, y 1.950–6.850. Exception: S26_CUE sits in the upper-right label zone. |
| Upper-right label zone | y 1.420–1.780, right-aligned to 12.729 |
| Footer band | y 6.950–7.300 |

### 3.2 Header and footer tokens (with provenance; m1)

| ID | Object | x | y | w | h | Style | Provenance |
|---|---|---:|---:|---:|---:|---|---|
| H1 | Institution line | 0.604 | 0.229 | 4.792 | 0.250 | "KOREA UNIVERSITY BUSINESS SCHOOL" · 13 pt bold ACCENT_1 | MEASURED-R4A (58, 22, 460, 24 px / 96) |
| H2 | Title | 0.604 | 0.604 | 12.125 | 0.604 | `TITLE_TEXT` · 32 pt bold PRIMARY_NAVY · single line · middle | MEASURED-R4A (58, 58, 1164, 58 px) |
| H3 | Title rule | 0.604 | 1.313 | 12.125 | 0.031 | LIGHT_GRAY filled rect, no line | MEASURED-R4A (y 126, h 3 px; 1.3125 → 1.313) |
| F1 | Slide number | 12.208 | 6.985 | 0.521 | 0.280 | "01"–"29" · 12 pt MID_GRAY · right | **R5-NEW.** x and w are measured (12.208, 0.521); y and h are M6-R5 values aligned with F2. The measured R4A values were y 7.083, h 0.208. |
| F2 | Section tag | 0.604 | 6.985 | 3.600 | 0.280 | e.g., "C · Summarize" · 12 pt MID_GRAY · left | R5-NEW |
| F3 | Content-position bar | 4.300 | 7.005 | 2.880 | 0.240 | See §3.3 | R5-NEW |
| LBL | ILLUSTRATIVE EXAMPLE / MINI EXAMPLE | §8 | 1.420 | §8 | 0.360 | §8 | **R5-NEW.** The measured R4A label was (9.479, 1.479, 3.250, 0.354). |

### 3.3 Content-position bar (BS-I2)

| Item | Value |
|---|---|
| Segments | Exactly 7, labeled A B C D E F G; no segment for block 0 |
| Geometry | Each 0.360 × 0.240; gap 0.060; pitch 0.420; segment k (k = 0…6) at x = 4.300 + k × 0.420; total width 2.880 (x 4.300–7.180) |
| Names | `F3_SEG_A` … `F3_SEG_G` |
| SELECTED | PRIMARY_NAVY fill; **2 pt** PRIMARY_NAVY outline; **bold** white 12 pt letter |
| NEUTRAL (identical for all non-selected) | BACKGROUND fill; **0.75 pt** LIGHT_GRAY outline; regular MID_GRAY 12 pt letter |
| Clearances | F2 right edge 4.204 (gap 0.096); F1 left edge 12.208 |

**Block map:**

| Slides | Block | F2 tag | Selected segment |
|---|---|---|---|
| 1 | 0 · Open | none (F2 omitted) | none (F3 omitted) |
| 2 | 0 · Open | "0 · Open" | none (all 7 NEUTRAL) |
| 3–5 | A | "A · Data for a business question" | A |
| 6–8 | B | "B · Variables and samples" | B |
| 9–16 | C | "C · Summarize" | C |
| 17–22 | D | "D · Data quality" | D |
| 23–27 | E | "E · Preparation" | E |
| 28 | F | "F · Dimensionality" | F |
| 29 | G | "G · Close" | G |

## 4. Fonts and type scale (BS-I5, BS-R9)

- **Arial only.** Every run sets `latin`, `ea` and `cs` typeface = "Arial".
- Theme major and minor fonts = Arial. 0 embedded fonts.
- Symbols: − (U+2212), ′ (U+2032), ≠, ≥, ±, →, •, ·, ≈, ¶ is never rendered (it marks paragraph breaks in §11).

**Roles.** Each text object in §11 carries exactly one role. Sizes outside the role range fail gate MIN_FONT_BY_ROLE.

| Role | Allowed pt | Use |
|---|---|---|
| TITLE | 32 | H2 |
| TITLE_MAIN | 44 | Slide 1 title |
| TITLE_META | 20 | Slide 1 meta lines |
| KEY | 24–32 | Key statement / take-away, guiding question, chevron keywords on slide 29, slide-22 headline (32) |
| PRIMARY | 20–22 | Primary teaching body; headers inside cards (22) |
| SECONDARY | 18 only | Subordinate supporting sentence, caption, caveat, short annotation |
| CHART | 16–18 | Chart and diagram labels: tick, data, axis-title, marker, threshold, segment, panel titles, diagram node text |
| TABLE | 16 | Table body and header cells |
| TABLE_FOCAL | 20 exactly, bold | Slide-16 matrix value cells only (BS-I8). Header cells of S16_MATRIX are TABLE, exactly 16 pt bold. Checked per cell. |
| CHART_LABEL | 16 exactly | Generated tick-label shapes `S{nn}_XT_*` / `S{nn}_YT_*` (TV-m2). No other size; no default. |
| FORMULA | 28 | `S24_FORMULA_Z`, `S24_FORMULA_MINMAX` |
| TAG | 13 | Upper-right labels, compound cue, inline tags (governed size) |
| FOOTER | 12 | F1, F2, F3 letters; H1 is 13 pt (governed) |

**All SECONDARY (18 pt) objects in v1.2 (14), each explicitly classified:**

| Object | Why it is SECONDARY |
|---|---|
| S03_RCT | Recall supporting line |
| S05_CAPL, S05_CAPR | Table captions |
| S05_RC1T, S05_RC2T | Recall supporting lines |
| S08_PTR | Forward-pointer annotation |
| S13_NART | Caveat attached to the NOT A RULE tag |
| S13_G3 | Preview supporting sentence |
| S15_RCT | Recall supporting line |
| S16_CAUT | Caveat |
| S18_CAP | Table caption |
| S20_CAUT | Caveat |
| S28_MISS | Short annotation |
| S29_CAP | Caption under the flow |

**18-pt CHART objects (diagram labels, within 16–18):**
- S02_CHEV1_T to S02_CHEV4_T;
- S11_A_LBL, S11_B_LBL, S11_C_LBL;
- S23_ROW_P, S23_ROW_U;
- S28_ROWLBL.

All other CHART objects are 16 pt.

**Spacing and boxes:**

| Item | Rule |
|---|---|
| Line spacing | 1.10 for TITLE_META, KEY, PRIMARY and SECONDARY; 1.00 for TITLE, TITLE_MAIN, CHART, FORMULA, TAG and table cells |
| Paragraph spacing | Space after 6 pt; before 0 (table cells: 0 / 0) |
| Bullets | "•" (U+2022) with a 0.25 in hanging indent |
| Text-box insets | 0.05 in left/right, 0.03 in top/bottom. Chart labels: 0.02 in left/right, 0.03 in top/bottom. Tags: 0.08 left/right, 0.03 top/bottom. |
| Vertical anchor | Top, unless §11 says "middle" |
| Autofit | Off on every text box: `<a:bodyPr>` with no `normAutofit` / `spAutoFit`; wrap on |

## 5. Palette and strokes

| Token | Hex | Use |
|---|---|---|
| PRIMARY_NAVY | `#1F3B68` | Titles, label borders, selected-segment fill, primary outlines |
| CHARCOAL | `#202124` | Body text, marks, markers, leaders |
| MID_GRAY | `#5F6772` | Secondary text, axes, tick labels, footer, RECALL text |
| LIGHT_GRAY | `#B8BCC2` | Title rule, neutral-segment outlines, light borders (non-text only) |
| BACKGROUND | `#FFFFFF` | Slide background |
| PANEL | `#F2F4F7` | Table banding, card fill, slide-21 band, slide-25 Low/High segments |
| PALE | `#E8EEF7` | Histogram and range bars |
| ACCENT_1 | `#8B1737` | Institution line only |
| ACCENT_2 | `#A47A21` | Reserved; not used |

| Stroke | Spec |
|---|---|
| Card outline | 1.5 pt PRIMARY_NAVY solid; radius 6% |
| Emphasis outline (S02_CHEV2) | 3 pt PRIMARY_NAVY |
| Dashed caveat border | 1.25 pt CHARCOAL `prstDash="dash"` |
| Axis | 1 pt MID_GRAY; tick marks 0.060 in outward, 1 pt MID_GRAY |
| Median / solid marker | 2.25 pt CHARCOAL solid |
| Mean / dashed marker | 2.25 pt CHARCOAL `dash` |
| Threshold edges (slide 21) | 1.5 pt PRIMARY_NAVY `dash` |
| Leader | 1.25 pt CHARCOAL, no arrowhead |
| Bracket / brace | 1.5 pt CHARCOAL |

**PC-2:**
- Color is never the sole carrier of meaning.
- No red/green semantics.
- Measured contrast: CHARCOAL 16.1:1, PRIMARY_NAVY 11.2:1 and MID_GRAY 5.7:1 on white; MID_GRAY 5.2:1 on PANEL; white on navy 11.2:1.

## 6. Package architecture and naming

### 6.1 Package

| Item | Value |
|---|---|
| Masters / layouts | 1 master "BUSS256-2027" / 6 layouts: L-TITLE, L-BRIDGE, L-CONCEPT, L-COMPARE, L-DATA, L-CLOSE |
| Theme fonts | Arial / Arial |
| Theme colors | dk1 `#202124` · lt1 `#FFFFFF` · dk2 `#1F3B68` · lt2 `#F2F4F7` · accent1 `#1F3B68` · accent2 `#8B1737` · accent3 `#5F6772` · accent4 `#B8BCC2` · accent5 `#E8EEF7` · accent6 `#A47A21` · hlink `#1F3B68` · folHlink `#8B1737` |
| Header / footer | Static shapes H1–H3 and F1–F3 on each slide (not placeholders) |
| Notes | Default notes master; Arial 12 pt; frozen SPEAKER_NOTES only (§14) |
| Transitions | **None** (0 `p:transition` elements) |
| Animations | **None.** 0 `p:timing` and 0 animation elements deck-wide, including slides 6, 13, 14, 24 (BS-I9). Every shape appears in its final static state. |
| Object types | Native text boxes, auto-shapes, freeforms (icons), lines/connectors, tables. **No pictures, SmartArt, OLE, native chart objects, OMML equations, or embedded fonts.** |

### 6.2 Shape-naming convention (BS-R6)

Every shape's `cNvPr name` equals its ID. Gates read shapes by these names.

| Shapes | Name pattern |
|---|---|
| Per-slide objects | ID exactly as in §11 (e.g., `S14_C1`, `S24_FORMULA_Z`, `S28_RC_R3`) |
| Header / footer | `H1`, `H2`, `H3`, `F1`, `F2`, `F3_SEG_A` … `F3_SEG_G` |
| Upper-right labels | `LBL_ILLUSTRATIVE`, `LBL_MINI` |
| Chart marks | `S{nn}_DOT_{key}` (key = product ID, value, or panel_index); `S13_BAR_1` … `S13_BAR_7` (zero-height bars are omitted, but names 4–6 are reserved); `S23_BAR_PRICE`, `S23_BAR_UNITS`; `S25_SEG_LOW/MID/HIGH` |
| Marker lines | `S10_MED`, `S10_MEAN`, `S13_MED`, `S13_MEAN` |
| Axes | `S{nn}_XAX`, `S{nn}_YAX`; tick labels `S{nn}_XT_{value}`, `S{nn}_YT_{value}`; tick marks `S{nn}_XTM_{value}` |
| Leaders and brackets | Names as given in §11 (e.g., `S14_L1`, `S14_L2`, `S21_LDR`, `S28_L1`, `S28_L2`, `S13_TAIL`, `S18_BRK`, `S28_CBR`, `S28_RBR`) |

**Fail-closed shape inventory (TV-m2).** Every builder-created shape must either:
- (a) carry an explicitly declared ID (§3.2, §8, §11, or a name listed in this table); or
- (b) match one approved generated-name pattern: `F3_SEG_[A-G]`, `S\d\d_DOT_\w+`, `S13_BAR_[1-7]`, `S23_BAR_(PRICE|UNITS)`, `S25_SEG_(LOW|MID|HIGH)`, `S\d\d_(XAX|YAX)`, `S\d\d_(XT|YT|XTM)_[\w.$-]+`, `S\d\d_(MED|MEAN|LO|HI|BAND|TAIL|LDR|BRK|CBR|RBR|TK15|TK30)`, `S\d\d_L\d`, `S\d\d_C\d+` (connectors on slide 27 only), `S\d\d_ICON\d+`.

Any other name, or an unnamed shape, **FAILS** gate 7. No implicit default role and no fallback font are permitted.

## 7. Layout families

| Layout | Slides | Count |
|---|---|---:|
| L-TITLE | 1 | 1 |
| L-BRIDGE | 2 | 1 |
| L-CONCEPT | 3, 6, 8, 9, 17, 27, 28 | 7 |
| L-COMPARE | 4, 11, 22, 24, 26 | 5 |
| L-DATA | 5, 7, 10, 12, 13, 14, 15, 16, 18, 19, 20, 21, 23, 25 | 14 |
| L-CLOSE | 29 | 1 |
| **Total** | | **29** |

- Layouts carry only H1–H3 (absent on L-TITLE).
- All body geometry is per-slide in §11.
- Cards: rounded rectangle (`roundRect`, adj 6000); padding is given by explicit child-object coordinates.

## 8. Labels, cues and tags

**Fit and style rules for all tags:**
- No tag is resized ad hoc.
- Every listed text fits its box at 13 pt.
- Measured maximum: the compound cue at 2.578 in, in a 2.740 usable width.

| Item | Geometry | Style |
|---|---|---|
| `LBL_ILLUSTRATIVE` | (10.029, 1.420, 2.700, 0.360) on slides 5, 6, 7, 10, 11, 12, 13, 14, 16, 18, 19, 20, 21, 22, 23, 25, 26, 28 | White fill; 1.5 pt PRIMARY_NAVY solid; 13 pt bold PRIMARY_NAVY caps; centered |
| `LBL_MINI` | (10.829, 1.420, 1.900, 0.360), slide 24 only | Same as above |
| **S26_CUE** (BS-I6) | (7.009, 1.420, 2.900, 0.360), i.e., immediately left of `LBL_ILLUSTRATIVE` with a 0.120 gap | One shape. White fill; 1 pt MID_GRAY **solid** border; 13 pt **bold italic** MID_GRAY text "RECALL · M6-R4A → EXTEND"; plus a 2.25 pt MID_GRAY vertical bracket line at x 6.959 spanning y 1.420–1.780. PC-2: the cue is text; its solid, italic, bracketed form matches the RECALL family and differs from the solid-caps upper-right labels and the dashed heuristic tags. |
| RECALL / EXTEND inline tags | w 2.200 (EXTEND 2.300), h 0.340 | White fill; 1 pt MID_GRAY solid; 13 pt bold italic MID_GRAY; plus a 2.25 pt MID_GRAY bracket line 0.050 left of the tag, spanning its height |
| RULE OF THUMB / NOT A RULE / CAUTION / Preview | w 2.100 / 1.600 / 1.400 / 4.000; h 0.360 (Preview 0.340) | White fill; 1.25 pt CHARCOAL **dashed**; 13 pt bold CHARCOAL (caps; Preview in sentence case) |
| Numbered markers | Circle Ø 0.280 | White fill; 1.5 pt PRIMARY_NAVY; 16 pt bold PRIMARY_NAVY digit |

**The complete inline cue inventory (no others may be added):**
- S02_RC1, S02_RC2
- S03_RC
- S05_RC1, S05_RC2
- S06_EXT
- S08_ROT
- S13_NAR, S13_PRV
- S15_RC
- S16_CAU
- S20_CAU, S20_ROT
- S21_ROT
- S23_RC
- S26_CUE (compound)
- S28_RC_R3, S28_RC12

## 9. Tables, charts, equations, callouts

### 9.1 Tables (BS-R13)

**Construction:**
- Native PowerPoint tables. Column widths and row heights are exactly as stated in §11.
- Body cells are 16 pt.
- Header cells are 16 pt bold, with a 1.5 pt PRIMARY_NAVY bottom border and no fill.

**Cell paragraph rules (locked):**
- Line spacing 1.00 (`<a:lnSpc><a:spcPct val="100000"/>`).
- Space before 0; space after 0.
- Vertical anchor middle.
- Cell margins: left/right 0.080 in (73,152 EMU), top/bottom 0.040 in (36,576 EMU).
- Wrap on; no autofit.
- Text left-aligned; numbers right-aligned.

**Borders and banding:**
- Row banding alternates BACKGROUND / PANEL, starting with BACKGROUND.
- Inner horizontal borders: 0.75 pt LIGHT_GRAY.
- No vertical borders or outer border, unless §11 says otherwise.

**Row-height determinism:**
- Every cell's content fits on one line at its column width (verified, §19).
- The only exceptions are slide-4 body cells: their 0.900 rows hold 2 lines (16 × 1.2 × 2 / 72 + 0.08 = 0.613 ≤ 0.900).
- PowerPoint row growth is therefore impossible. Gate TABLE_HEIGHT checks this.

**Missing values:**
- Display "(missing)" in 16 pt italic MID_GRAY, with a 1 pt CHARCOAL `dash` cell border.
- Never use blank, NA, N/A, "—" or 0.

### 9.2 Chart and diagram label geometry (BS-R11)

| Label | Anchor and box | Alignment | Gaps |
|---|---|---|---|
| x tick label | Box (tick_x − 0.300, axis_y + 0.040, 0.600, 0.360) | Center, role CHART_LABEL exactly 16 pt Arial MID_GRAY | Tick spacing must be ≥ 0.640 on every chart (minimum used: 0.657 on slide 13) |
| y tick label | Box (axis_x − 0.640, tick_y − 0.180, 0.560, 0.360); right edge = axis_x − 0.080 | Right, role CHART_LABEL exactly 16 pt Arial MID_GRAY | — |
| **Origin rule** | When an x "0" label and a y "0" label would intersect (slides 13 and 16), the y-axis "0" label is omitted | — | — |
| x axis title | Centered under the plot, top = axis_y + 0.440, h 0.360 | Center | — |
| y axis title | Rotated `vert270`; box w 0.360; x = axis_x − 1.080; centered vertically on the plot | Center | — |
| Histogram data label | Box (bar_centre − 0.150, bar_top − 0.390, 0.300, 0.360) | Center | ≥ 0.030 above its bar |
| **Data-label fallback** | If a marker line x lies within [box_left − 0.050, box_right + 0.050]: when marker x < bar centre, box left = marker x + 0.060 (left-aligned); otherwise box right = marker x − 0.060 (right-aligned). Applied once; result is fixed in §11 (slide 13 bin 2). | — | — |
| Marker label | Box bottom = marker-line top − 0.040, h 0.360. Median-type labels right-aligned with right edge = line x − 0.060; mean-type labels left-aligned with left edge = line x + 0.060. Widths fixed in §11. | — | — |
| Threshold label (slide 21) | Box centered on the edge-line x, w 0.800, bottom 0.020 above the edge-line top | Center | — |
| Endpoint label (slide 23) | Box (end_x − 0.300, bar_y − 0.380, 0.600, 0.360) | Center | — |
| Segment label (slide 25) | Inside its segment, vertically centered | Center | — |
| Boundary tick label (slide 25) | Box (tick_x − 0.300, 3.540, 0.600, 0.360) | Center | — |

**Minimum gap:** any label box to any plotted mark (dot, bar, line) is ≥ 0.020, except:
- a data label to its own bar (0.030);
- labels intentionally inside a segment (slide 25).

**Collision fallback:** none beyond the data-label rule. Every other position is fixed and verified collision-free (§19), so no builder-chosen repositioning is permitted.

**Chart defaults:**
- No gridlines, legends, 3-D, shadows or gradients.
- Bars: PALE fill, 1 pt PRIMARY_NAVY outline, zero gap.
- Points: CHARCOAL fill, 0.5 pt white outline.

### 9.3 Equations and formula QA (BS-R5)

- Exactly two formula objects: **`S24_FORMULA_Z`** ("z = (x − mean) / SD") and **`S24_FORMULA_MINMAX`** ("x′ = (x − min) / (max − min)").
- Both are plain editable text boxes, Arial 28 pt, centered, with U+2212 minus and U+2032 prime.
- No other shape name contains `FORMULA`.
- No OMML or equation objects deck-wide.
- Other equality text (e.g., "A = {7, 7, 7, 7, 7}", "Sign = direction", "P11 · rating = 7", "Low = 1, …") is ordinary text and never fails formula QA. See gate FORMULAS.

### 9.4 Callouts

- Rounded rectangle, white fill, 1.5 pt PRIMARY_NAVY.
- Numbered marker inside at top-left.
- Leader from the callout edge to the target marker's edge, never through a mark's centre.
- Slide 14 has exactly two callout shapes (`S14_C1`, `S14_C2`). Its markers `S14_M1` and `S14_M2` are targets, not callouts.

## 10. Canonical data and locked arithmetic (build-only)

| product_id | category | price | units_sold | rating | featured |
|---|---|---:|---:|---:|---:|
| P01 | Books | 8 | 900 | 4 | 0 |
| P02 | Books | 10 | 940 | 5 | 1 |
| P03 | Books | 12 | 700 | 3 | 1 |
| P04 | Home | 12 | 820 | (missing) | 0 |
| P05 | Books | 15 | 610 | 4 | 1 |
| P06 | Home | 18 | 450 | 4 | 1 |
| P07 | Home | 20 | 520 | 5 | 0 |
| P08 | Home | 25 | 380 | (missing) | 1 |
| P09 | Electronics | 40 | 260 | 3 | 0 |
| P10 | Electronics | 120 | 40 | 4 | 1 |

**Locked values:**

| Variable | Values |
|---|---|
| price | mean 28.0 · median 16.5 · sample SD 33.6 · min 8 · max 120 · range 112 |
| units_sold | range 900 · SD 289.9 |
| rating | observed 8 · missing P04, P08 · mean 4.0 · SD 0.8 |
| featured | ones 6 · zeros 4 · mean 0.6 · SD 0.5 |
| r(price, units_sold) | −0.7995 → −0.80 |
| Histogram | 6, 2, 1, 0, 0, 0, 1 |
| Tiers | 4 / 4 / 2 |
| Shipping fee | range 1 · SD 0.32 |
| Slide-21 schematic | mean 51.2 · SD 7.35 · band 29.14–73.26 · z(80) 3.92 |
| Mini example | 10 → 0, 20 → 0.33, 40 → 1 |

Sample SD (n − 1) and left-closed bins are build conventions. They are never shown or noted.

**Slide-21 schematic QA metadata (BUILD-ONLY; never on a slide or in notes):**
- n = 20; source = Blueprint §6.4; values 44, 45, 46, 47, 48, 48, 49, 49, 50, 50, 50, 50, 51, 51, 52, 52, 53, 54, 55, 80 (includes 80).
- Sample SD with ddof = 1.
- QA must recompute independently: mean 51.2; SD 7.352765323; lower 29.141704; upper 73.258296; z(80) 3.916894.
- The schematic is separate from the 10-row canonical table. The n = 10 maximum-|z| fact concerns the canonical table only, so the earlier n = 10 objection to slide 21 is **RESOLVED — INCORRECT DATASET ASSUMPTION**.

## 11. Slide-by-slide specification

**Conventions:**
- Every slide carries H1–H3 and F1–F3 per §3 (slide 1: H1 and F1 only), plus the upper-right label named in its entry.
- Coordinates are inches (x, y, w, h). EMU is authoritative per §3.1.
- "¶" separates paragraphs.
- **Type:** TEXT, TAG and CUE carry text. CARD, CHEVRON, RECT, CALLOUT, ICON and MARKER are shapes. TABLE cells are listed in Appendix T.
- **Role** governs size (§4).
- Object IDs are shape names (§6.2).

### Slide 1

- **TITLE_TEXT:** "Data Management I" (L-TITLE: rendered by S01_TITLE; no H2)
- **LAYOUT_ID / ROLE:** L-TITLE · open
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** 0 (no F2/F3)

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S01_META | TEXT | 0.604 | 2.300 | 12.125 | 0.450 | TITLE_META | 20 | bold MID_GRAY left | UNDERSTAND · SUMMARIZE · PREPARE |
| S01_TITLE | TEXT | 0.604 | 2.850 | 12.125 | 1.100 | TITLE_MAIN | 44 | bold PRIMARY_NAVY left | Data Management I |
| S01_RULE | RECT | 0.604 | 4.150 | 5.500 | 0.060 | - | — | PALE fill, no line | — |
| S01_COURSE | TEXT | 0.604 | 4.450 | 12.125 | 0.500 | TITLE_META | 20 | regular MID_GRAY left | BUSS256 · Introduction to Big Data Analytics and Interpretation |

- No H2/H3 on L-TITLE; H1 and F1 present.
- **PC2_NONCOLOR_CUES:** Text only.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES:** none (empty notes body).
- **BUILD_METADATA_EXCLUSIONS:** No copied logo or photo; text institution line only.
- **SOURCE_LINEAGE:** source slide 3
- **QA_GATES:** 0 picture objects; F2/F3 absent. Slide 1 contains no "Week", "Seminar", "Spring" or year string (BS-I7; authority exception).

### Slide 2

- **TITLE_TEXT:** "Before the technique: understand and prepare the data" (H2, exact)
- **LAYOUT_ID / ROLE:** L-BRIDGE · bridge
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** 0 · Open (all 7 segments NEUTRAL)

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S02_Q | TEXT | 0.604 | 1.950 | 12.125 | 0.950 | KEY | 24 | bold PRIMARY_NAVY left | What does it mean to prepare and understand data before applying an analytical technique? |
| S02_CAP | TEXT | 0.604 | 2.950 | 3.000 | 0.360 | CHART | 16 | regular MID_GRAY left | Workflow order |
| S02_CHEV1 | CHEVRON | 0.604 | 3.350 | 2.850 | 1.350 | - | — | PANEL fill, 1 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S02_CHEV1_T | TEXT | 0.904 | 3.350 | 2.250 | 1.350 | CHART | 18 | regular CHARCOAL center, middle | Store data in rows and columns (M6-R3) |
| S02_CHEV2 | CHEVRON | 3.694 | 3.200 | 2.850 | 1.650 | - | — | BACKGROUND fill, 3 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S02_CHEV2_T | TEXT | 3.994 | 3.200 | 2.250 | 1.650 | CHART | 18 | regular CHARCOAL center, middle; second paragraph 'today' bold | Understand and prepare the data ¶ today |
| S02_CHEV3 | CHEVRON | 6.784 | 3.350 | 2.850 | 1.350 | - | — | PANEL fill, 1 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S02_CHEV3_T | TEXT | 7.084 | 3.350 | 2.250 | 1.350 | CHART | 18 | regular CHARCOAL center, middle | Choose a technique for the question (M6-R4A) |
| S02_CHEV4 | CHEVRON | 9.874 | 3.350 | 2.850 | 1.350 | - | — | PANEL fill, 1 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S02_CHEV4_T | TEXT | 10.174 | 3.350 | 2.250 | 1.350 | CHART | 18 | regular CHARCOAL center, middle | Apply analytics (later modules) |
| S02_RC1 | TAG | 0.604 | 4.950 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R3 |
| S02_RC2 | TAG | 6.784 | 4.950 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R4A |
| S02_RM1 | TEXT | 0.604 | 5.450 | 1.660 | 1.000 | CHART | 16 | regular CHARCOAL left, top; letter + ' ·' bold; 1 pt LIGHT_GRAY outline, no fill | A · Data for a business question |
| S02_RM2 | TEXT | 2.348 | 5.450 | 1.660 | 1.000 | CHART | 16 | regular CHARCOAL left, top; letter + ' ·' bold; 1 pt LIGHT_GRAY outline, no fill | B · Variables and samples |
| S02_RM3 | TEXT | 4.092 | 5.450 | 1.660 | 1.000 | CHART | 16 | regular CHARCOAL left, top; letter + ' ·' bold; 1 pt LIGHT_GRAY outline, no fill | C · Summarize and understand |
| S02_RM4 | TEXT | 5.836 | 5.450 | 1.660 | 1.000 | CHART | 16 | regular CHARCOAL left, top; letter + ' ·' bold; 1 pt LIGHT_GRAY outline, no fill | D · Data quality |
| S02_RM5 | TEXT | 7.580 | 5.450 | 1.660 | 1.000 | CHART | 16 | regular CHARCOAL left, top; letter + ' ·' bold; 1 pt LIGHT_GRAY outline, no fill | E · Preparation / representation |
| S02_RM6 | TEXT | 9.324 | 5.450 | 1.660 | 1.000 | CHART | 16 | regular CHARCOAL left, top; letter + ' ·' bold; 1 pt LIGHT_GRAY outline, no fill | F · Dimensionality |
| S02_RM7 | TEXT | 11.068 | 5.450 | 1.660 | 1.000 | CHART | 16 | regular CHARCOAL left, top; letter + ' ·' bold; 1 pt LIGHT_GRAY outline, no fill | G · Close |

- Chevron preset `chevron`; point depth 0.300 in (adj = 0.300 / h × 100000, rounded to integer). Text boxes S02_CHEVn_T are separate shapes placed over the chevrons (z above).
- Roadmap boxes: x_k = 0.604 + k × 1.744 (k = 0…6); text 'X · name' with 'X ·' bold.
- **PC2_NONCOLOR_CUES:** 'today' text + 3 pt outline + larger chevron.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (authorized note exception NX-2, v1.3.1; NOT blueprint-verbatim):** "This is the order of the analysis workflow, not the order of our class sessions. The earlier analytics-technique lecture focused on choosing methods; today asks what must be true of the data first."
- **BUILD_METADATA_EXCLUSIONS:** 'Workflow order' caption is production clarification M-12 (never noted).
- **SOURCE_LINEAGE:** source slide 4
- **QA_GATES:** Guiding question verbatim; 'Workflow order' present; roadmap = 7 boxes in one row.

### Slide 3

- **TITLE_TEXT:** "Data for a business question" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CONCEPT · concept
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** A

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S03_TILE1 | CARD | 0.604 | 1.950 | 3.905 | 1.800 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY, radius 6% | — |
| S03_ICON1 | ICON | 0.754 | 2.100 | 0.450 | 0.450 | - | — | 1.5 pt CHARCOAL line art, no fill | Receipt: rectangle + 3 horizontal lines |
| S03_SRC1 | TEXT | 1.304 | 2.070 | 3.050 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | Transactions |
| S03_Q1 | TEXT | 0.804 | 2.700 | 3.500 | 0.900 | PRIMARY | 20 | regular CHARCOAL left | What sells together? |
| S03_TILE2 | CARD | 4.714 | 1.950 | 3.905 | 1.800 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY, radius 6% | — |
| S03_ICON2 | ICON | 4.864 | 2.100 | 0.450 | 0.450 | - | — | 1.5 pt CHARCOAL line art, no fill | Rounded rectangle + stripe |
| S03_SRC2 | TEXT | 5.414 | 2.070 | 3.050 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | Card records |
| S03_Q2 | TEXT | 4.914 | 2.700 | 3.500 | 0.900 | PRIMARY | 20 | regular CHARCOAL left | Which charges look unusual? |
| S03_TILE3 | CARD | 8.824 | 1.950 | 3.905 | 1.800 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY, radius 6% | — |
| S03_ICON3 | ICON | 8.974 | 2.100 | 0.450 | 0.450 | - | — | 1.5 pt CHARCOAL line art, no fill | Window: rectangle + top bar |
| S03_SRC3 | TEXT | 9.524 | 2.070 | 3.050 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | Web logs |
| S03_Q3 | TEXT | 9.024 | 2.700 | 3.500 | 0.900 | PRIMARY | 20 | regular CHARCOAL left | Where do visitors leave? |
| S03_TILE4 | CARD | 0.604 | 3.900 | 3.905 | 1.800 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY, radius 6% | — |
| S03_ICON4 | ICON | 0.754 | 4.050 | 0.450 | 0.450 | - | — | 1.5 pt CHARCOAL line art, no fill | Square + check line |
| S03_SRC4 | TEXT | 1.304 | 4.020 | 3.050 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | Surveys |
| S03_Q4 | TEXT | 0.804 | 4.650 | 3.500 | 0.900 | PRIMARY | 20 | regular CHARCOAL left | How satisfied are customers? |
| S03_TILE5 | CARD | 4.714 | 3.900 | 3.905 | 1.800 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY, radius 6% | — |
| S03_ICON5 | ICON | 4.864 | 4.050 | 0.450 | 0.450 | - | — | 1.5 pt CHARCOAL line art, no fill | Speech bubble (wedgeRoundRectCallout) |
| S03_SRC5 | TEXT | 5.414 | 4.020 | 3.050 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | Service calls |
| S03_Q5 | TEXT | 4.914 | 4.650 | 3.500 | 0.900 | PRIMARY | 20 | regular CHARCOAL left | What do customers complain about? |
| S03_TILE6 | CARD | 8.824 | 3.900 | 3.905 | 1.800 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY, radius 6% | — |
| S03_ICON6 | ICON | 8.974 | 4.050 | 0.450 | 0.450 | - | — | 1.5 pt CHARCOAL line art, no fill | Page with folded corner (foldedCorner) |
| S03_SRC6 | TEXT | 9.524 | 4.020 | 3.050 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | Documents |
| S03_Q6 | TEXT | 9.024 | 4.650 | 3.500 | 0.900 | PRIMARY | 20 | regular CHARCOAL left | What do reviews mention? |
| S03_RC | TAG | 0.604 | 6.000 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R1 |
| S03_RCT | TEXT | 2.950 | 5.950 | 9.779 | 0.450 | SECONDARY | 18 | regular CHARCOAL left | Data come in many forms, structured and unstructured. |

- **PC2_NONCOLOR_CUES:** Text + icon shape per tile.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Start from the business question, then ask which data could answer it."
- **BUILD_METADATA_EXCLUSIONS:** No company names or claims; zero images.
- **SOURCE_LINEAGE:** source slides 6 + 40
- **QA_GATES:** 0 picture objects; each tile question ≤ 2 lines.

### Slide 4

- **TITLE_TEXT:** "Primary vs. secondary data" (H2, exact)
- **LAYOUT_ID / ROLE:** L-COMPARE · compare
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** A

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S04_TABLE | TABLE | 0.604 | 1.950 | 12.125 | 3.200 | TABLE | 16 | cols 2.400/4.862/4.863; header 0.500; rows 3 × 0.900 | Primary vs. secondary table (§11 cells) |
| S04_KEY | TEXT | 0.604 | 5.500 | 12.125 | 0.700 | KEY | 24 | bold CHARCOAL left | Secondary data were collected for someone else's purpose. Check their fit. |

- **PC2_NONCOLOR_CUES:** Headers in text.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES:** none (empty notes body).
- **BUILD_METADATA_EXCLUSIONS:** No 'App Store' or '2013'.
- **SOURCE_LINEAGE:** source slide 7
- **QA_GATES:** Text scan clean.

### Slide 5

- **TITLE_TEXT:** "Records, transactions, and one analysis table" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** A

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S05_CAPL | TEXT | 0.604 | 1.950 | 6.200 | 0.720 | SECONDARY | 18 | bold CHARCOAL left | Record data: one row per product, one column per attribute |
| S05_CAPR | TEXT | 7.250 | 1.950 | 5.479 | 0.720 | SECONDARY | 18 | bold CHARCOAL left | Transaction data: each order is a set of items |
| S05_TBL_L | TABLE | 0.604 | 2.750 | 6.200 | 2.250 | TABLE | 16 | cols product_id 1.400 / category 1.800 / price ($) 1.400 / units_sold 1.600; header 0.450; rows P01–P04 × 0.450 | P01–P04 from §10 |
| S05_TBL_R | TABLE | 7.250 | 2.750 | 5.479 | 1.800 | TABLE | 16 | cols order_id 1.600 / items 3.879; header 0.450; rows 3 × 0.450 | O-101 \| P01, P05 · O-102 \| P02 · O-103 \| P04, P06, P07 |
| S05_RC1 | TAG | 0.604 | 5.350 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R3 |
| S05_RC1T | TEXT | 2.950 | 5.300 | 9.779 | 0.450 | SECONDARY | 18 | regular CHARCOAL left | Rows = observations, columns = variables. |
| S05_RC2 | TAG | 0.604 | 5.900 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R4A |
| S05_RC2T | TEXT | 2.950 | 5.850 | 9.779 | 0.450 | SECONDARY | 18 | regular CHARCOAL left | Transaction data feed association. |

- **PC2_NONCOLOR_CUES:** Captions; grid vs. list.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "The orders view is another view of the same store."
- **BUILD_METADATA_EXCLUSIONS:** Orders reference P01–P07 only.
- **SOURCE_LINEAGE:** source slides 8 + 9
- **QA_GATES:** Values equal §10.

### Slide 6

- **TITLE_TEXT:** "Types of variables" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CONCEPT · concept · density HIGH
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** B

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S06_TABLE | TABLE | 0.604 | 1.950 | 12.125 | 3.800 | TABLE | 16 | cols 1.950/2.550/3.600/4.025; header 0.500; rows 6 × 0.550 | Variable-type table (§11 cells) |
| S06_FOOT | TEXT | 0.604 | 5.900 | 9.600 | 0.800 | PRIMARY | 20 | regular CHARCOAL left | Numeric-looking codes can be categorical (e.g., a product code or zip code). A variable's type limits which values are possible. |
| S06_EXT | TAG | 10.429 | 6.250 | 2.300 | 0.340 | TAG | 13 | RECALL style (EXTEND text) | EXTEND · M6-R4A |

- **PC2_NONCOLOR_CUES:** Type names in text.
- **REVEAL_ORDER (pedagogical pacing metadata only; no PowerPoint animation):** Rows 1→6, then S06_FOOT + S06_EXT.
- **STATIC_FINAL_STATE:** Full table + footer line.
- **SPEAKER_NOTES (authorized note exception NX-6, v1.3.1; NOT blueprint-verbatim):** "Recall from the earlier analytics-technique lecture that category codes need interpretation; today we name the types."
- **BUILD_METADATA_EXCLUSIONS:** M-01 note.
- **SOURCE_LINEAGE:** source slide 10
- **QA_GATES:** 24 body cells non-empty; no wrap in any cell.

### Slide 7

- **TITLE_TEXT:** "Samples and representativeness" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** B

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S07_DEF | TEXT | 0.604 | 1.950 | 12.125 | 0.880 | PRIMARY | 20 | regular CHARCOAL left | A sample should reflect the population on the attributes that matter. ¶ Random sampling helps avoid systematic bias. |
| S07_SIZE1 | TEXT | 0.604 | 2.830 | 6.000 | 0.430 | PRIMARY | 20 | regular CHARCOAL left | Larger sample → shape captured better |
| S07_SIZE2 | TEXT | 6.769 | 2.830 | 5.960 | 0.430 | PRIMARY | 20 | regular CHARCOAL left | …but more cost and effort |
| S07_P1_TITLE | TEXT | 0.604 | 3.300 | 5.960 | 0.360 | CHART | 16 | bold CHARCOAL left | Population (200 customers) |
| S07_P1_AGE | TEXT | 6.074 | 4.260 | 0.480 | 0.360 | CHART | 16 | regular MID_GRAY left | age |
| S07_P2_TITLE | TEXT | 6.769 | 3.300 | 5.960 | 0.360 | CHART | 16 | bold CHARCOAL left | Sample of 100 |
| S07_P2_AGE | TEXT | 12.239 | 4.260 | 0.480 | 0.360 | CHART | 16 | regular MID_GRAY left | age |
| S07_P3_TITLE | TEXT | 0.604 | 5.080 | 5.960 | 0.360 | CHART | 16 | bold CHARCOAL left | Sample of 30 |
| S07_P3_AGE | TEXT | 6.074 | 6.040 | 0.480 | 0.360 | CHART | 16 | regular MID_GRAY left | age |
| S07_P4_TITLE | TEXT | 6.769 | 5.080 | 5.960 | 0.360 | CHART | 16 | bold CHARCOAL left | Sample of 8 · one possible small sample |
| S07_P4_AGE | TEXT | 12.239 | 6.040 | 0.480 | 0.360 | CHART | 16 | regular MID_GRAY left | age |

- Dot-histogram rule (C.7): baseline = py + 1.360; bin k left = px + 0.450 + k × 0.500; dot Ø 0.080, pitch 0.095, 4 per row, bottom row first, left→right; dot left = bin left + 0.030 + (j mod 4) × 0.095; dot top = baseline − 0.080 − floor(j/4) × 0.095.
- Axis line from (px + 0.450, baseline + 0.010) to (px + 5.450, same); ticks for ages 20, 30, 40, 50, 60 at bin centres; tick labels per §9 rule.
- **PC2_NONCOLOR_CUES:** Stacked position + panel titles; one dot shade.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Representativeness is about the attributes that matter for the question. Small samples can hide the shape."
- **BUILD_METADATA_EXCLUSIONS:** Counts are build data.
- **SOURCE_LINEAGE:** source slides 11 (part) + 12
- **QA_GATES:** Dot totals 200 / 100 / 30 / 8; no 2-D sampled-shape figure.

### Slide 8

- **TITLE_TEXT:** "How much data?" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CONCEPT · concept
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** B

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S08_KEY | TEXT | 0.604 | 1.950 | 12.125 | 1.000 | KEY | 24 | bold CHARCOAL left | More relevant, representative, high-quality data can help, but more observations are not automatically better. |
| S08_CARD1 | CARD | 0.604 | 3.150 | 3.905 | 1.500 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S08_CARD1_T | TEXT | 0.754 | 3.300 | 3.605 | 1.200 | PRIMARY | 20 | regular CHARCOAL left, middle | A biased sample stays biased. |
| S08_CARD2 | CARD | 4.714 | 3.150 | 3.905 | 1.500 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S08_CARD2_T | TEXT | 4.864 | 3.300 | 3.605 | 1.200 | PRIMARY | 20 | regular CHARCOAL left, middle | Poor measurement stays poor. |
| S08_CARD3 | CARD | 8.824 | 3.150 | 3.905 | 1.500 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S08_CARD3_T | TEXT | 8.974 | 3.300 | 3.605 | 1.200 | PRIMARY | 20 | regular CHARCOAL left, middle | Collecting and managing data costs time and money. |
| S08_ROT | TAG | 0.604 | 5.000 | 2.100 | 0.360 | TAG | 13 | heuristic style | RULE OF THUMB |
| S08_ROTT | TEXT | 2.850 | 4.950 | 9.879 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | Keep more observations than variables. |
| S08_PTR | TEXT | 0.604 | 5.600 | 3.000 | 0.400 | SECONDARY | 18 | regular MID_GRAY left | → slide 28 |

- **PC2_NONCOLOR_CUES:** Dashed tag + text.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "A tall table (many rows, few columns) is usually easier to learn from than a wide one; we revisit this on slide 28."
- **BUILD_METADATA_EXCLUSIONS:** —
- **SOURCE_LINEAGE:** source slide 11 (part)
- **QA_GATES:** RULE OF THUMB tag present; no 'always'.

### Slide 9

- **TITLE_TEXT:** "Two questions about data" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CONCEPT · concept
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S09_BANNER | TEXT | 0.604 | 1.950 | 12.125 | 0.500 | PRIMARY | 20 | regular CHARCOAL left | First we summarize the data so we can see both. |
| S09_CARD1 | CARD | 0.604 | 2.550 | 5.900 | 4.300 | - | — | BACKGROUND fill, 1.5 pt PRIMARY_NAVY | — |
| S09_ICON1 | ICON | 0.754 | 2.700 | 0.500 | 0.500 | - | — | native shapes | check mark (freeform polyline, 2.25 pt CHARCOAL) |
| S09_HDR1 | TEXT | 1.354 | 2.670 | 5.000 | 1.800 | PRIMARY | 22 | bold CHARCOAL left; line 1 caps | DATA QUALITY ¶ Is the value right? |
| S09_LIST1 | TEXT | 0.804 | 4.550 | 5.500 | 2.250 | PRIMARY | 20 | regular CHARCOAL left; one item per paragraph | • Duplicates ¶ • Missing values ¶ • Impossible values ¶ • Unusual values |
| S09_CARD2 | CARD | 6.829 | 2.550 | 5.900 | 4.300 | - | — | BACKGROUND fill, 1.5 pt PRIMARY_NAVY | — |
| S09_ICON2 | ICON | 6.979 | 2.700 | 0.500 | 0.500 | - | — | native shapes | reshape: 0.20 × 0.30 rectangle at (+0.000, +0.100), arrow (rightArrow 0.150 × 0.120) at (+0.215, +0.190), 0.20 × 0.30 rounded rectangle at (+0.300, +0.100); 1.5 pt CHARCOAL |
| S09_HDR2 | TEXT | 7.579 | 2.670 | 5.000 | 1.800 | PRIMARY | 22 | bold CHARCOAL left; line 1 caps | DATA PREPARATION / REPRESENTATION ¶ Is the representation suitable for the analytical task? |
| S09_LIST2 | TEXT | 7.029 | 4.550 | 5.500 | 2.250 | PRIMARY | 20 | regular CHARCOAL left; one item per paragraph | • Scaling ¶ • Log transformation ¶ • Binning ¶ • Indicator coding ¶ • Fewer categories |

- **PC2_NONCOLOR_CUES:** Question text + icon shape.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "We return to these two questions on slides 17 and 29."
- **BUILD_METADATA_EXCLUSIONS:** —
- **SOURCE_LINEAGE:** source slide 14
- **QA_GATES:** Questions verbatim; ≤ 5 items per column.

### Slide 10

- **TITLE_TEXT:** "Center: mean and median" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S10_TEXT | TEXT | 0.604 | 1.950 | 4.800 | 4.400 | PRIMARY | 20 | regular CHARCOAL left; paragraph 3 bold | Mean: the average (balance point). ¶ Median: the middle value when sorted. ¶ Extreme values pull the mean more than the median, so the two can differ. ¶ Business reading: typical price ≈ median; average price is pulled up by one expensive product. |
| S10_MED_LBL | TEXT | 5.477 | 2.830 | 1.450 | 0.360 | CHART | 16 | regular CHARCOAL right | median $16.5 |
| S10_MEAN_LBL | TEXT | 7.595 | 3.200 | 1.300 | 0.360 | CHART | 16 | regular CHARCOAL left | mean $28.0 |
| S10_XTITLE | TEXT | 8.300 | 5.050 | 2.000 | 0.360 | CHART | 16 | regular CHARCOAL center | Price ($) |

- Dot strip per C.10. Median line S10_MED (x 6.987, y 3.250→4.600, solid); mean line S10_MEAN (x 7.535, y 3.600→4.600, dashed). Axis (6.200, 4.610)→(12.400, 4.610); ticks $0–$120 step 20.
- **PC2_NONCOLOR_CUES:** Solid vs. dashed + labels.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "A mean describes the group as a whole, not any particular product."
- **BUILD_METADATA_EXCLUSIONS:** Stacking rule; no equation; the word 'skew' must not appear.
- **SOURCE_LINEAGE:** source slides 15 + 16
- **QA_GATES:** 10 dots, P03/P04 stacked; UNINTENTIONAL_DOT_OVERLAPS = 0; markers at x 6.987 / 7.535; no 'skew'.

### Slide 11

- **TITLE_TEXT:** "Why center is not enough" (H2, exact)
- **LAYOUT_ID / ROLE:** L-COMPARE · compare
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S11_A_LBL | TEXT | 0.604 | 2.800 | 2.300 | 0.450 | CHART | 18 | bold CHARCOAL left | A = {7, 7, 7, 7, 7} |
| S11_A_SUB | TEXT | 0.604 | 3.250 | 2.150 | 0.360 | CHART | 16 | regular CHARCOAL left | mean 7 · median 7 |
| S11_B_LBL | TEXT | 0.604 | 4.100 | 2.300 | 0.450 | CHART | 18 | bold CHARCOAL left | B = {5, 6, 7, 8, 9} |
| S11_B_SUB | TEXT | 0.604 | 4.550 | 2.150 | 0.360 | CHART | 16 | regular CHARCOAL left | mean 7 · median 7 |
| S11_C_LBL | TEXT | 0.604 | 5.400 | 2.300 | 0.450 | CHART | 18 | bold CHARCOAL left | C = {1, 4, 7, 10, 13} |
| S11_C_SUB | TEXT | 0.604 | 5.850 | 2.150 | 0.360 | CHART | 16 | regular CHARCOAL left | mean 7 · median 7 |
| S11_KEY | TEXT | 3.100 | 6.300 | 9.000 | 0.500 | KEY | 24 | bold CHARCOAL left | Same center, very different spread. |

- Dots per C.11. Shared axis (3.100, 5.810)→(12.100, 5.810); ticks 0–14 step 2.
- **PC2_NONCOLOR_CUES:** Set names + position.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES:** none (empty notes body).
- **BUILD_METADATA_EXCLUSIONS:** —
- **SOURCE_LINEAGE:** source slide 17
- **QA_GATES:** Shared axis; values per blueprint §6.7.

### Slide 12

- **TITLE_TEXT:** "Spread: range and standard deviation" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S12_DEF | TEXT | 0.604 | 1.950 | 12.125 | 0.950 | PRIMARY | 20 | regular CHARCOAL left | Range: the distance from the smallest to the largest value. Sensitive to extremes. ¶ Standard deviation (SD): how far values typically sit from the mean, in the variable's own units. |
| S12_TL | TEXT | 0.604 | 2.950 | 5.900 | 0.360 | CHART | 16 | bold CHARCOAL left | units_sold · range 900 · SD 289.9 units |
| S12_TR | TEXT | 6.829 | 2.950 | 5.900 | 0.360 | CHART | 16 | bold CHARCOAL left | Shipping fee · range $1 · SD $0.32 |
| S12_KEY | TEXT | 0.604 | 5.150 | 12.125 | 1.550 | KEY | 24 | bold CHARCOAL left (both paragraphs bold); box 1.25 pt dashed CHARCOAL border, BACKGROUND fill | A variable with almost no variation often provides little information for distinguishing observations. ¶ That does not make it automatically useless in every context. |

- Dots per C.12. Axes: units (1.054, 4.660)→(6.054, 4.660), ticks 0, 250, 500, 750, 1000; shipping (7.279, 4.660)→(12.279, 4.660), ticks $4, $5, $6, $7.
- **PC2_NONCOLOR_CUES:** Titles with values; visibly flat stack.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Variance is the squared-unit quantity behind the SD; we do not compute it here."
- **BUILD_METADATA_EXCLUSIONS:** Shipping fee deliberately non-binary; never `featured`; sample SD; no formula.
- **SOURCE_LINEAGE:** source slide 18
- **QA_GATES:** 289.9 and 0.32 shown; no formula-shaped text.

### Slide 13

- **TITLE_TEXT:** "Distributions, histograms, and shape" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data · density HIGH
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S13_G1A | TEXT | 0.604 | 1.950 | 6.100 | 0.800 | PRIMARY | 20 | regular CHARCOAL left | A histogram shows the distribution of a numeric variable by grouping values into bins. |
| S13_G1B | TEXT | 0.604 | 2.850 | 6.100 | 0.800 | PRIMARY | 20 | regular CHARCOAL left | For categorical variables, show category counts with a bar-type display. |
| S13_G2A | TEXT | 0.604 | 3.750 | 6.100 | 0.430 | PRIMARY | 20 | regular CHARCOAL left | Skew: asymmetry, a longer tail on one side. |
| S13_G2B | TEXT | 0.604 | 4.280 | 6.100 | 1.160 | PRIMARY | 20 | bold CHARCOAL left | In a strongly skewed distribution, the mean is often pulled toward the long tail more than the median. |
| S13_NAR | TAG | 0.604 | 5.540 | 1.600 | 0.360 | TAG | 13 | heuristic style | NOT A RULE |
| S13_NART | TEXT | 2.354 | 5.510 | 4.350 | 0.720 | SECONDARY | 18 | regular CHARCOAL left | mean > median does not always mean skew. |
| S13_PRV | TAG | 0.604 | 6.410 | 4.000 | 0.340 | TAG | 13 | heuristic style, sentence case | Preview · preparation step (see slide 9) |
| S13_G3 | TEXT | 4.754 | 6.370 | 7.975 | 0.430 | SECONDARY | 18 | regular CHARCOAL left | A transformation such as log can sometimes reduce strong right-skew. |
| S13_MED_LBL | TEXT | 6.932 | 1.950 | 1.400 | 0.360 | CHART | 16 | regular CHARCOAL right | Median 16.5 |
| S13_MEAN_LBL | TEXT | 8.830 | 1.950 | 1.300 | 0.360 | CHART | 16 | regular CHARCOAL left | Mean 28.0 |
| S13_DL1 | TEXT | 8.029 | 2.410 | 0.300 | 0.360 | CHART | 16 | regular CHARCOAL center | 6 |
| S13_DL2 | TEXT | 8.830 | 4.210 | 0.300 | 0.360 | CHART | 16 | regular CHARCOAL left (marker-conflict fallback) | 2 |
| S13_DL3 | TEXT | 9.343 | 4.660 | 0.300 | 0.360 | CHART | 16 | regular CHARCOAL center | 1 |
| S13_DL7 | TEXT | 11.971 | 4.660 | 0.300 | 0.360 | CHART | 16 | regular CHARCOAL center | 1 |
| S13_TAIL_LBL | TEXT | 10.000 | 3.600 | 1.000 | 0.360 | CHART | 16 | regular CHARCOAL center | long tail |
| S13_XTITLE | TEXT | 9.650 | 5.940 | 1.000 | 0.360 | CHART | 16 | regular CHARCOAL center | Price ($) |
| S13_YTITLE | TEXT | 6.770 | 3.150 | 0.360 | 2.000 | CHART | 16 | regular CHARCOAL center; vert270 | Number of products |

- Histogram per C.13. Long-tail bracket S13_TAIL: horizontal 1.5 pt CHARCOAL at y 4.000 from x 8.507 to 12.450, end ticks 0.120 downward.
- Markers: S13_MED solid 2.25 pt at x 8.392, S13_MEAN dashed 2.25 pt at x 8.770; both y 2.350→5.500.
- **PC2_NONCOLOR_CUES:** Solid vs. dashed + labels; bracket text.
- **REVEAL_ORDER (pedagogical pacing metadata only; no PowerPoint animation):** (1) bars, axes, tick labels, axis titles, data labels + S13_G1A, S13_G1B → (2) markers, marker labels, bracket, 'long tail' + S13_G2A, S13_G2B, S13_NAR, S13_NART → (3) S13_PRV + S13_G3.
- **STATIC_FINAL_STATE:** All groups visible.
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Bin choice changes the look of a histogram." ¶ "Log works only for positive values; details later."
- **BUILD_METADATA_EXCLUSIONS:** Bin convention; no log formula; no second chart; no interval notation.
- **SOURCE_LINEAGE:** source slides 22 + 23
- **QA_GATES:** Counts 6, 2, 1, 0, 0, 0, 1; marker x 8.392 / 8.770; 'often' present; exactly one chart.

### Slide 14

- **TITLE_TEXT:** "Reading a summary table" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data · density MEDIUM
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S14_TABLE | TABLE | 0.604 | 2.050 | 6.800 | 3.300 | TABLE | 16 | cols 2.400/1.300/1.500/1.600; header 0.550; rows 5 × 0.550 | Summary table (§11 cells) |
| S14_M1 | MARKER | 7.600 | 3.285 | 0.280 | 0.280 | - | 16 | circle; white fill; 1.5 pt PRIMARY_NAVY; bold PRIMARY_NAVY digit | 1 |
| S14_M2 | MARKER | 4.374 | 2.735 | 0.280 | 0.280 | - | 16 | circle inside the rating 'Products with a value' cell, left zone | 2 |
| S14_C1 | CALLOUT | 8.000 | 2.050 | 4.729 | 2.500 | - | — | rounded rect, white fill, 1.5 pt PRIMARY_NAVY | — |
| S14_C1_M | MARKER | 8.080 | 2.130 | 0.280 | 0.280 | - | 16 | as S14_M1 | 1 |
| S14_C1_T | TEXT | 8.420 | 2.080 | 4.259 | 2.440 | PRIMARY | 20 | regular CHARCOAL left; lead phrase bold | Binary mean: For a 0/1 variable, the mean is the proportion coded 1: here 0.6 → 60% of products are featured. (First five products: 0, 1, 1, 0, 1 → 0.6.) |
| S14_C2 | CALLOUT | 8.000 | 4.700 | 4.729 | 1.650 | - | — | rounded rect, white fill, 1.5 pt PRIMARY_NAVY | — |
| S14_C2_M | MARKER | 8.080 | 4.780 | 0.280 | 0.280 | - | 16 | as S14_M1 | 2 |
| S14_C2_T | TEXT | 8.420 | 4.730 | 4.259 | 1.590 | PRIMARY | 20 | regular CHARCOAL left; lead phrase bold | Missing-value cue: rating has some missing observations (8 of 10). We return to this on slide 19. |

- Rows: header 2.050–2.600; Products with a value 2.600–3.150; Mean 3.150–3.700; SD 3.700–4.250; Min 4.250–4.800; Max 4.800–5.350. Columns: label 0.604–3.004; price 3.004–4.304; rating 4.304–5.804; featured 5.804–7.404.
- **v1.3.1 geometry (alternative B; project-lead decision):** callout 1 (S14_C1 group) on top, y 2.050–4.550; callout 2 (S14_C2 group) below, y 4.700–6.350. Reading order 1 → 2 top to bottom. S14_M1 sits in the gap between the table and C1, level with the Mean row (centre (7.740, 3.425)).
- Leader S14_L1: straight 1.25 pt CHARCOAL (8.000, 3.425) [C1 left edge, on the straight side; corner radius 0.150] → (7.880, 3.425) [M1 right edge, radial]. Length 0.120.
- Leader S14_L2: polyline 1.25 pt CHARCOAL (8.000, 5.000) [C2 left edge, on the straight side; corner radius 0.099] → (7.502, 5.000) → (7.502, 2.700) → (4.720, 2.700) → (4.621, 2.784) [M2 edge, radial approach toward its centre (4.514, 2.875)].
  - The vertical run at x 7.502 lies outside the table, between the table's right edge (7.404) and M1's left edge (7.600): centreline 0.098 from each; stroke edge 0.089 from each bounding edge; 0.079 from M1's outer stroke.
  - The horizontal run at y 2.700 lies inside the "Products with a value" row band (2.600–3.150), parallel to the rules: 0.081 below the 1.5 pt header rule (stroke to stroke) and above the 16 pt digit tops of "10" (featured) and "8" (rating).
  - **Drawn table borders crossed: 0.** Drawn rules are horizontal only (header rule 2.600; inner rules 3.150, 3.700, 4.250, 4.800); none has a vertical extent and no outer border is drawn (§9.1). No L2 segment crosses any rule's y within the rule's x span 0.604–7.404.
  - L1 and L2 do not intersect; neither passes through S14_C1, S14_C2, their markers, or S14_M1's interior. The run passes through the interior of one non-target cell, featured × "Products with a value" (above its "10"), and ends at M2 inside the rating cell, so the target stays unambiguous.
- **Superseded paths:** v1.2 L2 (8.000, 5.525) → (4.514, 5.525) → (4.514, 3.015) crossed rules at 3.150, 3.700, 4.250, 4.800. v1.3 swap (C2 top, L2 (8.000, 2.700) → (4.720, 2.700) → (4.621, 2.784)) is rejected in v1.3.1 because it reversed the reading order.
- **PC2_NONCOLOR_CUES:** Numbered markers + leader lines.
- **REVEAL_ORDER (pedagogical pacing metadata only; no PowerPoint animation):** discuss callout 1 (binary mean), then callout 2 (missing-value cue).
- **STATIC_FINAL_STATE:** Table + both callouts + both markers + both leaders.
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Price's maximum sits far above its median, a reminder of the long tail on slide 13."
- **BUILD_METADATA_EXCLUSIONS:** No other callouts; sample SD; one decimal.
- **SOURCE_LINEAGE:** source slide 19
- **QA_GATES:** 3 data columns; CALLOUT objects = 2 (S14_C1, S14_C2); featured 0.6 in table and C1; C1 above C2 (y 2.050 < 4.700); M2 lies inside the rating count cell; S14_L2 crosses 0 drawn table borders; leaders do not cross each other.

### Slide 15

- **TITLE_TEXT:** "Correlation: direction and strength" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** none (schematic)
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S15_RULES | TEXT | 0.604 | 1.950 | 5.000 | 3.000 | PRIMARY | 20 | regular CHARCOAL left; 'linear' in paragraph 3 bold | Pearson r ranges from −1 to +1. ¶ Sign = direction. ¶ \|r\| = strength of linear association. ¶ r near 0 = little linear association, but a nonlinear relationship may still exist. ¶ Perfect correlation: r = +1 or r = −1. |
| S15_RC | TAG | 0.604 | 5.050 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R4A |
| S15_RCT | TEXT | 0.604 | 5.450 | 5.000 | 0.450 | SECONDARY | 18 | regular CHARCOAL left | Correlation does not establish causation. |
| S15_CAP1 | TEXT | 5.950 | 3.580 | 3.250 | 0.620 | CHART | 16 | regular CHARCOAL center, top; line spacing 1.0 | Strong positive |
| S15_CAP2 | TEXT | 9.479 | 3.580 | 3.250 | 0.620 | CHART | 16 | regular CHARCOAL center, top; line spacing 1.0 | Near zero |
| S15_CAP3 | TEXT | 5.950 | 6.180 | 3.250 | 0.620 | CHART | 16 | regular CHARCOAL center, top; line spacing 1.0 | Strong negative |
| S15_CAP4 | TEXT | 9.479 | 6.180 | 3.250 | 0.620 | CHART | 16 | regular CHARCOAL center, top; line spacing 1.0 | Curved: r near 0, but clearly related |

- Panels (no border) at (5.950, 1.950), (9.479, 1.950), (5.950, 4.550), (9.479, 4.550), each 3.250 × 2.250. L-axes 1 pt MID_GRAY: y from (px + 0.150, py + 0.100) to (px + 0.150, py + 1.600); x from (px + 0.150, py + 1.600) to (px + 3.100, py + 1.600). Points per C.15.
- **PC2_NONCOLOR_CUES:** Captions; patterns.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "The curved panel is the key caution: a near-zero r does not mean 'no relationship'."
- **BUILD_METADATA_EXCLUSIONS:** QA r values; no formula.
- **SOURCE_LINEAGE:** source slide 20
- **QA_GATES:** 4 panels; coordinates per C.15; no r value printed. QA r is computed from the Blueprint §6.8 original data (strong positive 0.9433887; near zero 0.0718190; strong negative −0.9442856; curved 0.0000000). |r(coordinates) − r(data)| ≤ 0.002 per panel.

### Slide 16

- **TITLE_TEXT:** "Correlation matrix and matrix plot" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** C

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S16_MATRIX | TABLE | 0.604 | 2.050 | 4.600 | 1.900 | TABLE_FOCAL | 20 | cols 1.600/1.500/1.500; header 0.500 (16 bold); rows 2 × 0.700; values 20 bold; all borders 1 pt CHARCOAL | price/units_sold matrix |
| S16_READ | TEXT | 0.604 | 4.100 | 5.650 | 2.000 | PRIMARY | 20 | regular CHARCOAL left | Diagonal = 1 (a variable with itself). The matrix is symmetric. ¶ −0.80: strong negative linear association. Pricier products sold fewer units in this example. |
| S16_CAU | TAG | 0.604 | 6.200 | 1.400 | 0.360 | TAG | 13 | heuristic style | CAUTION |
| S16_CAUT | TEXT | 2.150 | 6.130 | 4.100 | 0.720 | SECONDARY | 18 | regular CHARCOAL left | A screening aid for redundant variables, not proof. |
| S16_XTITLE | TEXT | 9.300 | 6.390 | 1.600 | 0.360 | CHART | 16 | regular CHARCOAL center | Price ($) |
| S16_YTITLE | TEXT | 6.320 | 3.400 | 0.360 | 1.500 | CHART | 16 | regular CHARCOAL center; vert270 | Units sold |

- Scatter per C.16. Axes (7.400, 5.950)→(12.400, 5.950) and (7.400, 2.350)→(7.400, 5.950); x ticks 0–120 step 20; y ticks 200–1000 step 200 (origin rule §9).
- **PC2_NONCOLOR_CUES:** Numbers in every cell; axis titles.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Larger datasets give bigger matrices; the reading rules are the same."
- **BUILD_METADATA_EXCLUSIONS:** r = −0.7995 recomputation; no `rating`; no missing-data rule.
- **SOURCE_LINEAGE:** source slides 21 + 24
- **QA_GATES:** Cells 1.00 / −0.80 / −0.80 / 1.00.

### Slide 17

- **TITLE_TEXT:** "Data quality: four things to check" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CONCEPT · concept
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** D

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S17_Q | TEXT | 0.604 | 1.950 | 12.125 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | Is the value right? Four things to check: |
| S17_TILE1 | CARD | 0.604 | 2.550 | 2.850 | 2.600 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S17_ICON1 | ICON | 1.629 | 2.800 | 0.800 | 0.800 | - | — | 1.5 pt CHARCOAL line art | two overlapping rectangles (0.50 × 0.40 at (+0.00,+0.00) and (+0.30,+0.40) within the icon box) |
| S17_LBL1 | TEXT | 0.754 | 3.800 | 2.550 | 1.000 | PRIMARY | 20 | bold CHARCOAL center | Duplicates |
| S17_TILE2 | CARD | 3.696 | 2.550 | 2.850 | 2.600 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S17_ICON2 | ICON | 4.721 | 2.800 | 0.800 | 0.800 | - | — | 1.5 pt CHARCOAL line art | empty rectangle, 1 pt dashed CHARCOAL |
| S17_LBL2 | TEXT | 3.846 | 3.800 | 2.550 | 1.000 | PRIMARY | 20 | bold CHARCOAL center | Missing values |
| S17_TILE3 | CARD | 6.788 | 2.550 | 2.850 | 2.600 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S17_ICON3 | ICON | 7.813 | 2.800 | 0.800 | 0.800 | - | — | 1.5 pt CHARCOAL line art | square with an X (two diagonal lines) |
| S17_LBL3 | TEXT | 6.938 | 3.800 | 2.550 | 1.000 | PRIMARY | 20 | bold CHARCOAL center | Impossible / invalid values |
| S17_TILE4 | CARD | 9.879 | 2.550 | 2.850 | 2.600 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S17_ICON4 | ICON | 10.904 | 2.800 | 0.800 | 0.800 | - | — | 1.5 pt CHARCOAL line art | 4 dots Ø 0.10 clustered at lower left + 1 dot Ø 0.10 at upper right |
| S17_LBL4 | TEXT | 10.029 | 3.800 | 2.550 | 1.000 | PRIMARY | 20 | bold CHARCOAL center | Unusual / outlier values |
| S17_NOTE | TEXT | 0.604 | 5.300 | 12.125 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | An unusual value is something to check, not automatically a problem or an error (slide 22). |
| S17_PROMPT | TEXT | 0.604 | 5.900 | 12.125 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | What would you check, and why? |

- **PC2_NONCOLOR_CUES:** Icon + text.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Each of these four checks gets its own slide next."
- **BUILD_METADATA_EXCLUSIONS:** Never 'four problems'.
- **SOURCE_LINEAGE:** source slide 25
- **QA_GATES:** Contains 'four things to check'; 'four problems' absent.

### Slide 18

- **TITLE_TEXT:** "Duplicates" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** D

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S18_CAP | TEXT | 0.604 | 1.950 | 9.600 | 0.400 | SECONDARY | 18 | bold CHARCOAL left | Merged listing from two sources (derived view) |
| S18_TABLE | TABLE | 0.604 | 2.450 | 9.600 | 1.800 | TABLE | 16 | cols source 2.200 / product_id 1.600 / category 1.800 / price ($) 1.400 / last_updated 2.600; header 0.450; rows 3 × 0.450 | §10 derived rows |
| S18_BRK | BRACKET | 10.230 | 2.900 | 0.120 | 0.900 | - | — | vertical 1.5 pt CHARCOAL at x 10.350 from y 2.900 to 3.800; end ticks 0.120 toward the table | — |
| S18_BRK_LBL | TEXT | 10.550 | 3.170 | 2.100 | 0.360 | CHART | 16 | regular CHARCOAL left | same product |
| S18_OPTS | TEXT | 0.604 | 4.500 | 12.125 | 1.350 | PRIMARY | 20 | regular CHARCOAL left; bulleted | • Keep the most reliable record (needs a trustworthy timestamp) ¶ • Merge ¶ • Delete |
| S18_KEY | TEXT | 0.604 | 6.050 | 12.125 | 0.500 | KEY | 24 | bold CHARCOAL left | Write down which rule you used. |

- Table rows: header 2.450–2.900; row 1 2.900–3.350; row 2 3.350–3.800; row 3 3.800–4.250.
- **PC2_NONCOLOR_CUES:** Bracket + text.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Duplicates are common after merging data from different sources."
- **BUILD_METADATA_EXCLUSIONS:** P03 values = §10; only source/date differ.
- **SOURCE_LINEAGE:** source slide 26
- **QA_GATES:** Rows exact.

### Slide 19

- **TITLE_TEXT:** "Missing values: what is missing?" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** D

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S19_KEY | TEXT | 0.604 | 1.950 | 12.125 | 0.500 | KEY | 24 | bold CHARCOAL left | Missingness is not a value. |
| S19_TABLE | TABLE | 0.604 | 2.600 | 3.200 | 4.100 | TABLE | 16 | cols product_id 1.500 / rating 1.700; header 0.400; rows 10 × 0.370 | rating P01–P10 |
| S19_CARD1 | CARD | 4.200 | 2.600 | 8.529 | 1.100 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S19_CARD1_T | TEXT | 4.350 | 2.700 | 8.229 | 0.900 | PRIMARY | 20 | regular CHARCOAL left, middle | Why values go missing: not collected · not applicable · not yet recorded |
| S19_CARD2 | CARD | 4.200 | 3.850 | 8.529 | 1.100 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S19_CARD2_T | TEXT | 4.350 | 3.950 | 8.229 | 0.900 | PRIMARY | 20 | regular CHARCOAL left, middle | 0 vs. missing vs. not applicable: a balance of 0 vs. no account at all |
| S19_CARD3 | CARD | 4.200 | 5.100 | 8.529 | 1.100 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S19_CARD3_T | TEXT | 4.350 | 5.200 | 8.229 | 0.900 | PRIMARY | 20 | regular CHARCOAL left, middle | Many methods drop or cannot use incomplete records unless you handle them. |

- **PC2_NONCOLOR_CUES:** '(missing)' text + dashed cell.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "A rare value that is present is not the same as a missing value."
- **BUILD_METADATA_EXCLUSIONS:** Blanks never 0.
- **SOURCE_LINEAGE:** source slide 27
- **QA_GATES:** P04 and P08 show '(missing)'.

### Slide 20

- **TITLE_TEXT:** "Handling missing values" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** D

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S20_KEY | TEXT | 0.604 | 1.950 | 12.125 | 0.550 | KEY | 24 | bold CHARCOAL left | Treatment depends on variable type, context, and purpose. |
| S20_CARD1 | CARD | 0.604 | 2.650 | 3.905 | 1.100 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S20_CARD1_T | TEXT | 0.754 | 2.800 | 3.605 | 0.800 | PRIMARY | 20 | bold CHARCOAL center, middle | Substitute a value |
| S20_CARD2 | CARD | 4.714 | 2.650 | 3.905 | 1.100 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S20_CARD2_T | TEXT | 4.864 | 2.800 | 3.605 | 0.800 | PRIMARY | 20 | bold CHARCOAL center, middle | Omit the records |
| S20_CARD3 | CARD | 8.824 | 2.650 | 3.905 | 1.100 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S20_CARD3_T | TEXT | 8.974 | 2.800 | 3.605 | 0.800 | PRIMARY | 20 | bold CHARCOAL center, middle | Drop the variable |
| S20_NUM | TEXT | 0.604 | 3.900 | 12.125 | 0.850 | PRIMARY | 20 | regular CHARCOAL left | For a numeric column, a simple option is to fill blanks with the mean of the observed values. For rating, that would be 4.0. |
| S20_BOX | RECT | 0.604 | 4.900 | 12.125 | 1.100 | - | — | BACKGROUND fill; 1.25 pt dashed CHARCOAL border | — |
| S20_CAU | TAG | 0.754 | 5.050 | 1.400 | 0.360 | TAG | 13 | heuristic style | CAUTION |
| S20_CAUT | TEXT | 2.304 | 4.960 | 10.300 | 0.980 | SECONDARY | 18 | regular CHARCOAL left | Mean imputation is only a simple numeric example. It is not a default for categorical or binary variables: category has no mean, and a 0/1 mean such as 0.6 is not a valid value. |
| S20_ROT | TAG | 0.604 | 6.250 | 2.100 | 0.360 | TAG | 13 | heuristic style | RULE OF THUMB |
| S20_ROTT | TEXT | 2.850 | 6.200 | 9.879 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | If a variable is mostly missing, dropping it may be reasonable. |

- **PC2_NONCOLOR_CUES:** Dashed tags and border.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Filling with the mean keeps rows but makes values look less varied." ¶ "`rating` is an ordered scale; the mean fill is shown only as the simplest numeric illustration."
- **BUILD_METADATA_EXCLUSIONS:** Canonical table unchanged; any future imputed view labeled 'ILLUSTRATIVE — DERIVED (imputed) VIEW'; source % example not carried.
- **SOURCE_LINEAGE:** source slide 28
- **QA_GATES:** No '%' on the slide; caveat contains '0.6'; no imputed table.

### Slide 21

- **TITLE_TEXT:** "Detecting unusual values" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** D

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S21_DEF | TEXT | 0.604 | 1.950 | 12.125 | 0.430 | PRIMARY | 20 | regular CHARCOAL left | An outlier is an observation far from the rest. 'Far' is deliberately vague. |
| S21_LO_LBL | TEXT | 1.466 | 2.400 | 0.800 | 0.360 | CHART | 16 | regular CHARCOAL center | −3 SD |
| S21_HI_LBL | TEXT | 9.628 | 2.400 | 0.800 | 0.360 | CHART | 16 | regular CHARCOAL center | +3 SD |
| S21_ANN | TEXT | 10.400 | 3.300 | 2.300 | 0.680 | CHART | 16 | regular CHARCOAL left | beyond the ±3 SD heuristic |
| S21_AXCAP | TEXT | 5.600 | 4.850 | 2.100 | 0.360 | CHART | 16 | regular CHARCOAL center | Illustrative values |
| S21_ROT | TAG | 0.604 | 5.350 | 2.100 | 0.360 | TAG | 13 | heuristic style | RULE OF THUMB |
| S21_ROTT | TEXT | 2.850 | 5.300 | 9.879 | 0.800 | PRIMARY | 20 | regular CHARCOAL left | ±3 SD from the mean is a common heuristic, most useful for roughly symmetric data. |
| S21_INFL | TEXT | 0.604 | 6.200 | 12.125 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | Unusual values can strongly influence results. |

- Band S21_BAND: rect x 1.866→10.028, y 2.800→4.450, PANEL fill, no outline. Edge lines S21_LO / S21_HI: 1.5 pt PRIMARY_NAVY dashed at x 1.866 and 10.028, y 2.780→4.450.
- Dots per C.21. Axis (1.100, 4.410)→(12.200, 4.410); ticks 25–85 step 10.
- Leader S21_LDR: 1.25 pt CHARCOAL vertical from (11.275, 3.980) [annotation bottom] to (11.275, 4.240) [top edge of the 80 dot]; it never enters the dot.
- **PC2_NONCOLOR_CUES:** Dashed labeled edges; text annotation.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "±3 SD is a heuristic, not a definition. Context matters, and the rule is easiest to interpret when data are roughly symmetric. Not every unusual value crosses this line."
- **BUILD_METADATA_EXCLUSIONS:** Schematic not in §10 canonical table. BUILD-ONLY QA metadata per §10: n = 20, Blueprint §6.4, sample SD ddof = 1, includes 80, recomputed thresholds and z. None of this appears on the slide or in notes. The n = 10 maximum-|z| fact applies to the canonical table only.
- **SOURCE_LINEAGE:** source slide 29
- **QA_GATES:** Band edges 1.866 / 10.028; 80 dot left edge 11.195 (> 10.028); no 'P10', no '3.92'.

### Slide 22

- **TITLE_TEXT:** "Outlier ≠ error" (H2, exact)
- **LAYOUT_ID / ROLE:** L-COMPARE · compare
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** D

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S22_HEAD | TEXT | 0.604 | 1.950 | 12.125 | 0.650 | KEY | 32 | bold PRIMARY_NAVY center | OUTLIER ≠ ERROR |
| S22_SCALE | TEXT | 0.604 | 2.650 | 12.125 | 0.450 | PRIMARY | 20 | bold CHARCOAL center | rating allows only 1, 2, 3, 4 or 5. |
| S22_L_PANEL | CARD | 0.604 | 3.250 | 5.900 | 2.900 | - | — | BACKGROUND fill; solid 2 pt PRIMARY_NAVY border | — |
| S22_L_ICON | ICON | 0.754 | 3.400 | 0.500 | 0.500 | - | — | 1.5 pt CHARCOAL line art | crossed box: square + two diagonals |
| S22_L_HDR | TEXT | 1.354 | 3.400 | 5.000 | 0.500 | PRIMARY | 22 | bold CHARCOAL left | IMPOSSIBLE / INVALID |
| S22_L_DEF | TEXT | 0.804 | 4.000 | 5.500 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | Breaks a coding or domain rule. |
| S22_L_ENTRY | RECT | 0.804 | 4.550 | 5.500 | 1.450 | - | — | 1 pt dashed CHARCOAL border, white fill | — |
| S22_L_CAP | TEXT | 0.904 | 4.600 | 5.300 | 0.360 | CHART | 16 | regular CHARCOAL left | Incoming entry (not in the table) |
| S22_L_MAIN | TEXT | 0.904 | 4.970 | 5.300 | 0.430 | PRIMARY | 20 | bold CHARCOAL left | P11 · rating = 7 |
| S22_R_PANEL | CARD | 6.829 | 3.250 | 5.900 | 2.900 | - | — | BACKGROUND fill; dashed 2 pt PRIMARY_NAVY border | — |
| S22_R_ICON | ICON | 6.979 | 3.400 | 0.500 | 0.500 | - | — | 1.5 pt CHARCOAL line art | distant dot: 4 dots Ø 0.08 lower left + 1 dot Ø 0.08 upper right |
| S22_R_HDR | TEXT | 7.579 | 3.400 | 5.000 | 0.500 | PRIMARY | 22 | bold CHARCOAL left | UNUSUAL / OUTLIER |
| S22_R_DEF | TEXT | 7.029 | 4.000 | 5.500 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | Rare but possibly valid. |
| S22_R_ENTRY | RECT | 7.029 | 4.550 | 5.500 | 1.450 | - | — | 1 pt solid CHARCOAL border, white fill | — |
| S22_R_CAP | TEXT | 7.129 | 4.600 | 5.300 | 0.360 | CHART | 16 | regular CHARCOAL left | From the table |
| S22_R_MAIN | TEXT | 7.129 | 4.970 | 5.300 | 0.430 | PRIMARY | 20 | bold CHARCOAL left | P10 · Electronics · $120 |
| S22_R_SUB | TEXT | 7.129 | 5.420 | 5.300 | 0.360 | CHART | 16 | regular CHARCOAL left | a real expensive product |
| S22_KEY | TEXT | 0.604 | 6.250 | 12.125 | 0.500 | KEY | 24 | bold CHARCOAL left | Domain knowledge decides. Do not remove unusual values automatically. |

- **PC2_NONCOLOR_CUES:** Header text; solid vs. dashed panels; icons; no red/green.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "After checking, a few invalid entries may be treated as missing." ¶ "50 °C is implausible in some climates and possible in others."
- **BUILD_METADATA_EXCLUSIONS:** P11 never in §10.
- **SOURCE_LINEAGE:** source slide 30
- **QA_GATES:** S22_SCALE above both panels; 'not in the table' present.

### Slide 23

- **TITLE_TEXT:** "Why scale matters" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** E

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S23_RC | TAG | 0.604 | 1.980 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R4A |
| S23_RCT | TEXT | 2.950 | 1.950 | 9.779 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | Representation changes comparisons. |
| S23_RANGES | TEXT | 0.604 | 2.500 | 12.125 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | price spans $8–$120 (range 112). units_sold spans 40–940 (range 900). |
| S23_ROW_P | TEXT | 0.604 | 3.600 | 1.250 | 0.450 | CHART | 18 | regular CHARCOAL left | price ($) |
| S23_ROW_U | TEXT | 0.604 | 4.700 | 1.250 | 0.450 | CHART | 18 | regular CHARCOAL left | units_sold |
| S23_EP_P0 | TEXT | 1.684 | 3.220 | 0.600 | 0.360 | CHART | 16 | regular CHARCOAL center | $8 |
| S23_EP_P1 | TEXT | 2.860 | 3.220 | 0.600 | 0.360 | CHART | 16 | regular CHARCOAL center | $120 |
| S23_EP_U0 | TEXT | 2.020 | 4.320 | 0.600 | 0.360 | CHART | 16 | regular CHARCOAL center | 40 |
| S23_EP_U1 | TEXT | 11.470 | 4.320 | 0.600 | 0.360 | CHART | 16 | regular CHARCOAL center | 940 |
| S23_KEY | TEXT | 0.604 | 5.800 | 12.125 | 0.950 | KEY | 24 | bold CHARCOAL left | Combine them unscaled, and the larger-range variable dominates the comparison. |

- Bars per C.23 (PALE fill, 1 pt PRIMARY_NAVY). Axis (1.900, 5.300)→(12.400, 5.300); ticks 0–1000 step 200. Endpoint labels: box (end − 0.300, bar_y − 0.380, 0.600, 0.360), centered above each bar end.
- **PC2_NONCOLOR_CUES:** Lengths + labels.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "This is why the next slide rescales variables."
- **BUILD_METADATA_EXCLUSIONS:** No distance formula.
- **SOURCE_LINEAGE:** source slides 32 + 34
- **QA_GATES:** Bars per C.23; endpoint labels above bar ends.

### Slide 24

- **TITLE_TEXT:** "Two scaling choices" (H2, exact)
- **LAYOUT_ID / ROLE:** L-COMPARE · compare · density HIGH
- **UPPER_RIGHT_LABELS:** MINI EXAMPLE
- **POSITION CUE (F2/F3):** E

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S24_CARD_L | CARD | 0.604 | 1.950 | 5.900 | 4.300 | - | — | BACKGROUND fill, 1.5 pt PRIMARY_NAVY | — |
| S24_HDR_L | TEXT | 0.804 | 2.100 | 5.500 | 0.470 | PRIMARY | 22 | bold CHARCOAL left | STANDARDIZATION |
| S24_DEF_L | TEXT | 0.804 | 2.650 | 5.500 | 0.800 | PRIMARY | 20 | regular CHARCOAL left | Z-standardization centers a variable at 0 and scales it to unit standard deviation. |
| S24_FORMULA_Z | TEXT | 0.804 | 3.550 | 5.500 | 0.800 | FORMULA | 28 | regular CHARCOAL center, middle; line spacing 1.0 | z = (x − mean) / SD |
| S24_NOTE_L | TEXT | 0.804 | 4.500 | 5.500 | 0.450 | PRIMARY | 20 | bold CHARCOAL left | It does not make the distribution normal. |
| S24_CARD_R | CARD | 6.829 | 1.950 | 5.900 | 4.300 | - | — | BACKGROUND fill, 1.5 pt PRIMARY_NAVY | — |
| S24_HDR_R | TEXT | 7.029 | 2.100 | 5.500 | 0.470 | PRIMARY | 22 | bold CHARCOAL left | MIN-MAX NORMALIZATION |
| S24_FORMULA_MINMAX | TEXT | 7.029 | 2.650 | 5.500 | 0.800 | FORMULA | 28 | regular CHARCOAL center, middle; line spacing 1.0 | x′ = (x − min) / (max − min) |
| S24_MAPS | TEXT | 7.029 | 3.500 | 5.500 | 0.800 | PRIMARY | 20 | regular CHARCOAL left | Commonly maps the observed range to 0–1. |
| S24_MINI | TABLE | 7.229 | 4.400 | 3.000 | 1.600 | TABLE | 16 | cols x 1.500 / x′ 1.500; header 0.400; rows 3 × 0.400 | 10 \| 0 · 20 \| 0.33 · 40 \| 1 |
| S24_MINI_CAP | TEXT | 10.379 | 4.450 | 2.200 | 0.620 | CHART | 16 | regular CHARCOAL left; line spacing 1.0 | three values only; min = 10, max = 40 |
| S24_KEY | TEXT | 0.604 | 6.330 | 12.125 | 0.500 | KEY | 24 | bold CHARCOAL left | Two different choices. Do not call both simply 'normalization'. |

- **PC2_NONCOLOR_CUES:** Card headers in text.
- **REVEAL_ORDER (pedagogical pacing metadata only; no PowerPoint animation):** (1) S24_CARD_L group → (2) S24_CARD_R, S24_HDR_R, S24_FORMULA_MINMAX, S24_MAPS → (3) S24_MINI + S24_MINI_CAP.
- **STATIC_FINAL_STATE:** Both cards complete.
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Binary indicators may already be on a comparable 0–1 scale; handle them according to the modeling purpose."
- **BUILD_METADATA_EXCLUSIONS:** No product IDs, 'price', '$' or log content on the slide; no SD-convention text.
- **SOURCE_LINEAGE:** source slide 33
- **QA_GATES:** FORMULA objects = 2 (S24_FORMULA_Z, S24_FORMULA_MINMAX); mini values exact.

### Slide 25

- **TITLE_TEXT:** "Binning and binary conversion" (H2, exact)
- **LAYOUT_ID / ROLE:** L-DATA · data
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** E

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S25_TIERS | TEXT | 0.604 | 1.950 | 12.125 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | Price tiers: Low (under $15): 4 products · Mid ($15 to under $30): 4 · High ($30 and over): 2 |
| S25_LOW | TEXT | 1.100 | 2.970 | 1.281 | 0.360 | CHART | 16 | bold CHARCOAL center | Low |
| S25_MID | TEXT | 2.381 | 2.970 | 1.281 | 0.360 | CHART | 16 | bold CHARCOAL center | Mid |
| S25_HIGH | TEXT | 3.662 | 2.970 | 8.538 | 0.360 | CHART | 16 | bold CHARCOAL center | High |
| S25_T15 | TEXT | 2.081 | 3.540 | 0.600 | 0.360 | CHART | 16 | regular CHARCOAL center | $15 |
| S25_T30 | TEXT | 3.362 | 3.540 | 0.600 | 0.360 | CHART | 16 | regular CHARCOAL center | $30 |
| S25_KEY | TEXT | 0.604 | 4.200 | 12.125 | 0.550 | KEY | 24 | bold CHARCOAL left | Binning loses detail: $40 and $120 both become 'High'. |
| S25_CUT | TEXT | 0.604 | 5.050 | 12.125 | 0.850 | PRIMARY | 20 | regular CHARCOAL left | A score or probability → yes/no using a chosen cut-off, e.g., likelihood to buy ≥ 0.5 → 'likely buyer'. |

- Tier band per C.25: Low PANEL, Mid BACKGROUND, High PANEL, each 1 pt PRIMARY_NAVY outline. Boundary ticks S25_TK15 / S25_TK30: 1 pt CHARCOAL, below the band only (y 3.400→3.520), at x 2.381 and 3.662.
- **PC2_NONCOLOR_CUES:** Segment text + ticks.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Cut-offs are choices; different cut-offs give different categories."
- **BUILD_METADATA_EXCLUSIONS:** Boundaries 15 → Mid, 30 → High.
- **SOURCE_LINEAGE:** source slide 35 (part)
- **QA_GATES:** Counts 4 / 4 / 2.

### Slide 26

- **TITLE_TEXT:** "Indicator coding vs. category codes" (H2, exact)
- **LAYOUT_ID / ROLE:** L-COMPARE · compare
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE + compound cue S26_CUE (BS-I6)
- **POSITION CUE (F2/F3):** E

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S26_CUE | CUE | 7.009 | 1.420 | 2.900 | 0.360 | TAG | 13 | compound RECALL→EXTEND cue (§8) | RECALL · M6-R4A → EXTEND |
| S26_RECALL | TEXT | 0.604 | 1.950 | 12.125 | 0.450 | PRIMARY | 20 | regular CHARCOAL left | Codes like Low = 1, Mid = 2, High = 3 are labels, not distances. |
| S26_CAP_CAT | TEXT | 2.104 | 2.550 | 2.100 | 0.360 | CHART | 16 | regular MID_GRAY center | category (a label) |
| S26_CAP_IND | TEXT | 4.204 | 2.550 | 5.400 | 0.360 | CHART | 16 | regular MID_GRAY center | indicators (0/1) |
| S26_TABLE | TABLE | 0.604 | 2.950 | 9.000 | 1.950 | TABLE | 16 | cols product_id 1.500 / category 2.100 / is_Books 1.800 / is_Home 1.800 / is_Electronics 1.800; header 0.450; rows 3 × 0.500; 2.25 pt CHARCOAL vertical rule between category and is_Books | P01 Books 1 0 0 · P04 Home 0 1 0 · P09 Electronics 0 0 1 |
| S26_KEY | TEXT | 0.604 | 5.200 | 12.125 | 0.500 | KEY | 24 | bold CHARCOAL left | One 0/1 indicator per category. |

- **PC2_NONCOLOR_CUES:** Cue text; captions + headers + vertical rule.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES:** none (empty notes body).
- **BUILD_METADATA_EXCLUSIONS:** —
- **SOURCE_LINEAGE:** source slide 35 (part)
- **QA_GATES:** Exactly one '1' per indicator row; S26_CUE text exact; no other RECALL/EXTEND tag on the slide.

### Slide 27

- **TITLE_TEXT:** "Reducing categories" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CONCEPT · concept
- **UPPER_RIGHT_LABELS:** none (schematic)
- **POSITION CUE (F2/F3):** E

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S27_TEXT | TEXT | 0.604 | 1.950 | 12.125 | 0.900 | PRIMARY | 20 | regular CHARCOAL left | Too many categories create too many indicators. ¶ Combine sparse or similar categories into groups that make business sense. |
| S27_F_Fiction | TEXT | 2.000 | 3.050 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Fiction |
| S27_F_Nonfiction | TEXT | 2.000 | 3.470 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Non-fiction |
| S27_F_Comics | TEXT | 2.000 | 3.890 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Comics |
| S27_F_Kitchen | TEXT | 2.000 | 4.430 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Kitchen |
| S27_F_Bedding | TEXT | 2.000 | 4.850 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Bedding |
| S27_F_Lighting | TEXT | 2.000 | 5.270 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Lighting |
| S27_F_Phones | TEXT | 2.000 | 5.810 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Phones |
| S27_F_Audio | TEXT | 2.000 | 6.230 | 3.000 | 0.360 | CHART | 16 | regular CHARCOAL left; 1 pt LIGHT_GRAY outline | Audio |
| S27_G_Books | TEXT | 8.000 | 3.350 | 3.200 | 0.600 | PRIMARY | 20 | bold CHARCOAL center, middle; PANEL fill, 1.5 pt PRIMARY_NAVY | Books |
| S27_G_Home | TEXT | 8.000 | 4.730 | 3.200 | 0.600 | PRIMARY | 20 | bold CHARCOAL center, middle; PANEL fill, 1.5 pt PRIMARY_NAVY | Home |
| S27_G_Electronics | TEXT | 8.000 | 5.900 | 3.200 | 0.600 | PRIMARY | 20 | bold CHARCOAL center, middle; PANEL fill, 1.5 pt PRIMARY_NAVY | Electronics |

- Connectors S27_Cn: 1.25 pt CHARCOAL straight lines from each fine box's right-mid point (5.000, y + 0.180) to its group box's left-mid point (8.000, group y + 0.300).
- **PC2_NONCOLOR_CUES:** Connector lines + labels.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "Some models, such as regression, use one fewer indicator than the number of categories, with a reference category; details come later."
- **BUILD_METADATA_EXCLUSIONS:** No m − 1 on the slide.
- **SOURCE_LINEAGE:** source slide 36
- **QA_GATES:** 8 fine boxes → 3 groups.

### Slide 28

- **TITLE_TEXT:** "Rows, columns, missingness, dimensionality" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CONCEPT · concept
- **UPPER_RIGHT_LABELS:** ILLUSTRATIVE EXAMPLE
- **POSITION CUE (F2/F3):** F

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S28_COLLBL | TEXT | 0.604 | 1.950 | 3.600 | 0.360 | CHART | 16 | bold CHARCOAL left | Columns = variables/features |
| S28_RC_R3 | TAG | 4.300 | 1.960 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · M6-R3 |
| S28_GRID | TABLE | 0.604 | 2.400 | 6.580 | 3.940 | TABLE | 16 | cols product_id 1.330 / category 1.110 / price 0.720 / units_sold 1.290 / rating 1.080 / featured 1.050; header 0.360; rows 10 × 0.358 | grid |
| S28_ROWLBL | TEXT | 7.450 | 2.400 | 5.279 | 0.450 | CHART | 18 | bold CHARCOAL left | Rows = observations (10 products) |
| S28_DIM | TEXT | 7.450 | 2.950 | 5.279 | 1.530 | PRIMARY | 20 | regular CHARCOAL left; first sentence bold | Dimensionality = the number of variables/features used. If an analysis uses price, units_sold, rating and featured, its dimensionality is 4. |
| S28_MISS | TEXT | 7.450 | 4.580 | 5.279 | 0.400 | SECONDARY | 18 | regular CHARCOAL left | (missing) cells: missingness, a separate issue |
| S28_COST | TEXT | 7.450 | 5.080 | 5.279 | 1.160 | PRIMARY | 20 | regular CHARCOAL left | More variables need more data, make distances less informative, and each variable should earn its place. |
| S28_RC12 | TAG | 0.604 | 6.450 | 2.200 | 0.340 | TAG | 13 | RECALL style | RECALL · slide 12 |
| S28_RC12T | TEXT | 2.950 | 6.420 | 9.779 | 0.430 | PRIMARY | 20 | regular CHARCOAL left | A variable with little variation may add little separation. |

- Column brace S28_CBR: horizontal 1.5 pt CHARCOAL at y 2.340 from x 0.604 to 7.184, end ticks 0.050 downward.
- Row brace S28_RBR: vertical 1.5 pt CHARCOAL at x 7.260 from y 2.760 to 6.340, end ticks 0.050 leftward.
- Grid cells: column 1 shows P01–P10 (16 pt); all other cells blank PANEL placeholders except rating P04 (row 4, y 3.834–4.192) and P08 (row 8, y 5.266–5.624): '(missing)' per §9.
- Leaders S28_L1/L2: 1.25 pt CHARCOAL from (7.450, 4.780) [S28_MISS left-mid] to (6.134, 4.013) and (6.134, 5.445) [right edges of the two '(missing)' cells]; they cross only blank featured cells and the row brace.
- **PC2_NONCOLOR_CUES:** Braces, text, dashed '(missing)' cells.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES (verbatim; one paragraph each):** "The intuition is enough here: more columns ask more of the data."
- **BUILD_METADATA_EXCLUSIONS:** No 'sparsity'; no numeric cell values.
- **SOURCE_LINEAGE:** source slide 37
- **QA_GATES:** RECALL · M6-R3 and RECALL · slide 12 both present; four terms labeled once each.

### Slide 29

- **TITLE_TEXT:** "Close: understand → clean → represent → prepare" (H2, exact)
- **LAYOUT_ID / ROLE:** L-CLOSE · close
- **UPPER_RIGHT_LABELS:** none
- **POSITION CUE (F2/F3):** G

| ID | Type | x | y | w | h | Role | pt | Style | Content |
|---|---|---:|---:|---:|---:|---|---:|---|---|
| S29_CHEV1 | CHEVRON | 0.604 | 2.200 | 2.850 | 1.300 | - | — | PANEL fill, 1 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S29_CHEV1_T | TEXT | 0.904 | 2.200 | 2.250 | 1.300 | KEY | 24 | bold CHARCOAL center, middle | understand |
| S29_CHEV2 | CHEVRON | 3.694 | 2.200 | 2.850 | 1.300 | - | — | PANEL fill, 1 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S29_CHEV2_T | TEXT | 3.994 | 2.200 | 2.250 | 1.300 | KEY | 24 | bold CHARCOAL center, middle | clean |
| S29_CHEV3 | CHEVRON | 6.784 | 2.200 | 2.850 | 1.300 | - | — | PANEL fill, 1 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S29_CHEV3_T | TEXT | 7.084 | 2.200 | 2.250 | 1.300 | KEY | 24 | bold CHARCOAL center, middle | represent |
| S29_CHEV4 | CHEVRON | 9.874 | 2.200 | 2.850 | 1.300 | - | — | PANEL fill, 1 pt PRIMARY_NAVY; preset chevron, point depth 0.300 | — |
| S29_CHEV4_T | TEXT | 10.174 | 2.200 | 2.250 | 1.300 | KEY | 24 | bold CHARCOAL center, middle | prepare |
| S29_CAP | TEXT | 0.604 | 3.650 | 12.125 | 0.400 | SECONDARY | 18 | regular MID_GRAY center | before modeling |
| S29_CARD1 | CARD | 0.604 | 4.250 | 5.900 | 1.750 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S29_CARD1_T | TEXT | 0.754 | 4.330 | 5.600 | 1.620 | PRIMARY | 20 | regular CHARCOAL left; line 1 bold | DATA QUALITY ¶ Is the value right? |
| S29_CARD2 | CARD | 6.829 | 4.250 | 5.900 | 1.750 | - | — | PANEL fill, 1.5 pt PRIMARY_NAVY | — |
| S29_CARD2_T | TEXT | 6.979 | 4.330 | 5.600 | 1.620 | PRIMARY | 20 | regular CHARCOAL left; line 1 bold | DATA PREPARATION / REPRESENTATION ¶ Is the representation suitable for the analytical task? |
| S29_PROMPT | TEXT | 0.604 | 6.150 | 12.125 | 0.500 | KEY | 24 | bold CHARCOAL left | Does this summary, correlation, or cleaning choice make sense? |

- **PC2_NONCOLOR_CUES:** Order by position/chevrons + text.
- **REVEAL_ORDER:** none
- **STATIC_FINAL_STATE:** As built (all objects visible).
- **SPEAKER_NOTES:** none (empty notes body).
- **BUILD_METADATA_EXCLUSIONS:** Nothing new.
- **SOURCE_LINEAGE:** source slides 31 + 14
- **QA_GATES:** Every item appears earlier.
## 12. Object layering (z-order, back to front)

**Global order:**
1. Background
2. Bands, segments, card / panel / callout fills
3. Tables, bars
4. Axes and tick marks
5. Data marks (dots, points)
6. Marker lines and threshold edges
7. Brackets, braces, connectors and leaders
8. Numbered markers
9. Text labels and text boxes
10. Inline tags, the compound cue and upper-right labels
11. H1–H3, F1, F2, F3 segments (each segment's letter above its fill)

**Slide-specific orders where objects overlap or touch:**

| Slide | Back → front |
|---|---|
| 13 | S13_BAR_* → S13_XAX / S13_YAX → S13_MED / S13_MEAN → S13_TAIL → S13_DL* / marker labels / S13_TAIL_LBL |
| 14 | S14_TABLE → S14_L1 / S14_L2 → S14_M1 / S14_M2 → S14_C1 / S14_C2 → C*_M → C*_T. S14_L2 ends on M2's edge (radial); S14_L1 ends on M1's edge (radial); M1 lies outside the table; M2 covers no cell text. |
| 21 | S21_BAND → S21_XAX → S21_DOT_* → S21_LO / S21_HI → S21_LDR (ends at the dot edge) → labels |
| 25 | S25_SEG_* → S25_TK15 / S25_TK30 → S25_DOT_* → segment and tick labels |
| 26 | S26_CUE and LBL_ILLUSTRATIVE (layer 10; no overlap) |
| 28 | S28_GRID → S28_CBR / S28_RBR → S28_L1 / S28_L2 → text |

**Overlap rule:** no text bounding box overlaps another text or table box. The intentional exceptions are:
- S14_M2 inside its target cell;
- slide-25 segment labels inside their segments;
- text boxes inside their own card, panel or callout container.

## 13. Reveal and static-print policy

**v1.3 (BS-I9):** the deck is fully static, with 0 animations, 0 timing and 0 transitions. The REVEAL_ORDER column below is pedagogical pacing metadata for the instructor only, not PowerPoint animation.

| Slide | REVEAL_ORDER | STATIC_FINAL_STATE |
|---|---|---|
| 6 | Rows 1→6, then S06_FOOT + S06_EXT | Full table + footer line |
| 13 | Three groups (slide-13 entry) | All groups visible |
| 14 | Pacing: callout 1 → callout 2 | Table, both callouts, both markers, both leaders |
| 24 | Three groups (slide-24 entry) | Both cards complete |
| Others | None | As built |

- No meaning depends on animation.
- The PDF uses the static final state.
- The F3 position cue is static and prints on every slide except slide 1.

## 14. Speaker-notes insertion

- Insert **only** the frozen SPEAKER_NOTES quoted in §11. Each quoted sentence is one paragraph, Arial 12 pt.
- Slides 1, 4, 11, 26 and 29 have an empty notes body.
- **Never insert:** BUILD_METADATA, QA values, hashes, EMU values, bin or SD conventions, the n = 10 maximum-|z| fact, coordinates, held-material names, assessment information, source-deck instructions, or "Optional:".
- Notes are assumed student-visible.
- v1.3.1: the slide-2 and slide-6 notes are authorized note exceptions NX-2 and NX-6 (supplemental authority record). They are inserted exactly as quoted in §11 and are not blueprint-verbatim.

## 15. Visual originality

- Copied visuals = 0. Picture objects = 0.
- All figures are native reconstructions:
  - slide 7: one-dimensional dot histograms;
  - slide 15: a 2 × 2 schematic grid;
  - slides 5, 18, 26: new tables;
  - slide 21: the course schematic.
- None of the following may appear: Math Is Fun graphics, historical sample-size figures, source screenshots, App Store material, or web-search imagery.

## 16. Validation gates

**Gate count history (m10, correction):**
- v1 contained **25** gates (the v1 completion report's "27" was wrong).
- v1.1 added POSITION_CUE, for **26**.
- v1.2's list below was counted after writing: **38 gates**.

**Classes:**
- **M:** mechanical (XML/text/geometry check with a fixed pass/fail rule).
- **MV:** manual visual (render review).
- **HYBRID:** a mechanical part and a manual-visual part, each with its own pass/fail rule.

There are no ambiguous gates.

| # | Gate | Class | Pass/fail rule |
|---:|---|---|---|
| 1 | SLIDE_COUNT | M | 29 slides |
| 2 | SLIDE_SIZE_EMU | M | `p:sldSz` cx = 12192000 **and** cy = 6858000, exact integer equality |
| 3 | MASTERS_LAYOUTS | M | 1 master; 6 layouts with the §7 names |
| 4 | LAYOUT_ASSIGNMENT | M | Each slide uses its §7 layout (29/29) |
| 5 | TITLE_TEXT | M | H2 text = `TITLE_TEXT` exactly (slide 1: S01_TITLE). No "(HIGH)", "(MEDIUM)" or "[A]"-style markers. Slide 1: S01_META = "UNDERSTAND · SUMMARIZE · PREPARE" and S01_COURSE = "BUSS256 · Introduction to Big Data Analytics and Interpretation" exactly; 0 case-insensitive matches on slide 1 for `\bweek\b`, `\bseminar\b`, `\bspring\b`, `\b20\d\d\b`. |
| 6 | FONT_RUNS | M | 100% of runs latin/ea/cs = Arial; theme fonts Arial; 0 embedded fonts |
| 7 | MIN_FONT_BY_ROLE | M | **(1) Fail-closed inventory:** every shape name is a declared ID or matches a §6.2 approved pattern; unknown or unnamed shapes FAIL; there is no default role. **(2) Role sizes:** every run of every named text shape lies within its §4 role range (§11 role column); `S{nn}_XT_*` / `S{nn}_YT_*` = CHART_LABEL, exactly 16 pt Arial. **(3) Table cells, per cell:** S16_MATRIX value cells = TABLE_FOCAL, exactly 20 pt bold; S16_MATRIX header cells = TABLE, exactly 16 pt bold; all other table cells = TABLE, exactly 16 pt. H1 = 13; F1/F2/F3 letters = 12; notes = 12. No size < 12 anywhere. |
| 8 | GEOMETRY_MATCH | M | Each named shape's `a:off`/`a:ext` equals round(spec inches × 914,400) ± 1 EMU |
| 9 | OFF_SLIDE_SAFE_ZONE | M | All shapes within the slide and the §3.1 safe zones; body shapes (except S26_CUE) bottom ≤ 6.850 in |
| 10 | AUTOFIT_FLAG | M | 0 `normAutofit` / `spAutoFit` elements |
| 11 | TEXT_OVERFLOW_RENDER | MV | At 100% and in the PDF, no text renders outside its box |
| 12 | TABLE_HEIGHT | HYBRID | M: every `a:tr` height = spec; cell line spacing 100%, spacing 0/0, margins per §9.1. MV: no row taller than spec in the render. |
| 13 | PICTURE_OBJECTS | M | 0 `p:pic`, 0 OLE, 0 SmartArt, 0 chart parts |
| 14 | COPIED_VISUALS | MV | No composition matches a source-deck figure |
| 15 | APP_STORE_REFERENCES | M | 0 case-insensitive matches in slide text and notes: "App Store", "2013", "Rating_Volume", "mobile app" |
| 16 | FORMULAS | M | **Primary:** exactly 2 shapes whose names contain `FORMULA`: `S24_FORMULA_Z` and `S24_FORMULA_MINMAX`, both on slide 24, with exact text. 0 `m:oMath` elements deck-wide. **Secondary screen:** regex `\([^()]*[−-][^()]*\)\s*/` must match only inside those two shapes. Plain "=" text elsewhere is not counted. |
| 17 | SLIDE_14_CALLOUTS | M | Exactly 2 shapes of the callout type on slide 14 (`S14_C1`, `S14_C2`), and no other rounded-rectangle text container on slide 14. Reading order (v1.3.1): S14_C1 at (8.000, 2.050, 4.729, 2.500) above S14_C2 at (8.000, 4.700, 4.729, 1.650), ± 1 EMU; C1 bottom 4.550 < C2 top 4.700. |
| 18 | SLIDE_14_M2_TARGET | M | The S14_M2 bounding box lies inside the rating × "Products with a value" cell (x 4.304–5.804, y 2.600–3.150). S14_L2 vertices = (8.000, 5.000), (7.502, 5.000), (7.502, 2.700), (4.720, 2.700), (4.621, 2.784) ± 1 EMU. S14_L2 intersects 0 drawn table borders, does not intersect S14_L1, and passes through neither callout box nor any marker interior. The vertical run x 7.502 lies strictly between the table right edge 7.404 and the S14_M1 left edge 7.600. S14_C1 y = 2.050; S14_C2 y = 4.700. |
| 19 | SLIDE_16_MATRIX | M | Cells 1.00 / −0.80 / −0.80 / 1.00; no "rating" on slide 16 |
| 20 | HISTOGRAM | M | S13_BAR heights = count × 0.450 for counts 6, 2, 1, 0, 0, 0, 1; 0 matches on slide 13 for interval regex `[\[(]\s*\d+\s*,\s*\d+\s*[\])]` |
| 21 | SLIDE_13_MARKERS | M | S13_MED x = 8.392 (solid); S13_MEAN x = 8.770 (`dash`) |
| 22 | TOY_DATA | M | Every displayed number equals Appendix T / §10 (independent recomputation, sample SD). Slide 15: r per panel computed from Blueprint §6.8 original data (0.9433887 / 0.0718190 / −0.9442856 / 0.0000000) and from the placed point centres; \|difference\| ≤ 0.002 per panel. |
| 23 | FEATURED | M | "0.6" present on slides 14 (table + S14_C1_T) and 20 (S20_CAUT) |
| 24 | MISSING | M | "(missing)" exactly at P04 and P08 on slides 19 and 28 |
| 25 | P11 | M | "P11" appears only on slide 22, in S22_L_MAIN, with S22_L_CAP containing "not in the table" |
| 26 | SLIDE_21 | M | No "P10" or "3.92" on slide 21; S21_LO x 1.866, S21_HI x 10.028; the 80 dot's left edge 11.195 > 10.028. Build-only recomputation from Blueprint §6.4 (n = 20, ddof = 1, including 80): mean 51.2, SD 7.352765323, bounds 29.141704 / 73.258296, z(80) 3.916894 (tolerance 1e-6). None of these values appear on the slide or in notes. |
| 27 | SLIDE_17 | M | Contains "four things to check"; does not contain "four problems" |
| 28 | SLIDE_10 | M | No "skew"; pairwise dot-centre distance ≥ 0.085 except the P03/P04 stack |
| 29 | SLIDE_24_MINI_ISOLATION | M | Slide 24 contains no "price", "$" or "P" + 2 digits |
| 30 | CUES | M | S26_CUE text = "RECALL · M6-R4A → EXTEND"; S28_RC_R3 text = "RECALL · M6-R3"; the inline cue set equals the §8 inventory exactly |
| 31 | POSITION_CUE | HYBRID | M: F3_SEG_A–G on slides 2–29, none on slide 1; F2 = "0 · Open" on slide 2 with 0 selected; slides 3–29 have exactly 1 selected segment, matching §3.3 (selected = navy fill + 2 pt outline + bold letter). MV: selected vs. neutral distinguishable in grayscale. |
| 32 | M6_R4B_LEAKAGE | M | **Governed term scan only** (not a held-content comparison): 0 case-insensitive matches (whole words for `admission`, `import`, `export`, `user-defined`; literal for `function(`, `library(`, `install.packages`, `.csv`, and regex `\b\w+\.[rR]\b` filenames) in slide text and notes |
| 33 | NOTES_FORBIDDEN_TERMS | M | 0 whole-word, case-insensitive matches in notes: builder, metadata, QA, SHA, EMU, hash, "n − 1", left-closed, right-open, "maximum z", "9/√10", assessment, admission, M6-R4B, "App Store", "source deck", "Optional:" |
| 34 | NOTES_PRESENCE | M | Notes on 2, 3, 5–10, 12–25, 27, 28; empty on 1, 4, 11, 26, 29; text equals §11 verbatim (slides 2 and 6: the NX-2 / NX-6 strings); 0 case-insensitive whole-word matches for `seminar` in any notes body |
| 35 | PC2_GRAYSCALE | MV | All 29 slides readable in a grayscale render |
| 36 | STATIC_PRINT | HYBRID | M: the PPTX contains 0 `p:timing`, 0 `p:anim*` / `p:par` animation nodes and 0 `p:transition` elements on all 29 slides; the PDF has exactly 29 pages; every §11 shape is present on its slide with no hidden attribute. MV: every slide, including 6, 13, 14 and 24, reads completely in the PDF in its final static state. |
| 37 | RENDER_COLLISIONS | MV | No visible overlap in the render; spec-level predicted collisions = 0 (§19) |
| 38 | LINE_ENDPOINTS | M | S21_LDR ends at y 4.240; S28_L1/L2 end at x 6.134; S14_L1 runs (8.000, 3.425) → (7.880, 3.425) and ends on S14_M1's edge (centre (7.740, 3.425), r 0.140); S14_L2 starts at (8.000, 5.000) on S14_C2's left edge and ends at (4.621, 2.784) on S14_M2's edge (\|distance to centre − 0.140\| ≤ 0.001); no leader endpoint inside a mark; no leader passes through a mark interior |

**Tally:** M 31; HYBRID 3 (12, 31, 36); MV 4 (11, 14, 35, 37). Total 38 (31 + 3 + 4). v1.3 updates the definitions of gates 5, 7, 18, 22, 26, 36 and 38; v1.3.1 updates gates 17, 18, 34 and 38 and the §16.1 row for gate 37; v1.3.2 updates only the §16.1 gate-37 row (and adds §16.1.1); no gate is added or removed.

### 16.1 Manual-visual gate ownership and STOP rule (TV-m4)

**Ownership:** gates 11, 14, 35, 37 and the MV halves of 12, 31 and 36 are executed by an **independent render reviewer**, not the agent that authored this build spec. The professor retains final acceptance authority.

| Gate | Artifact reviewed | Pass criteria | Evidence to retain |
|---|---|---|---|
| 11 TEXT_OVERFLOW_RENDER | Build PPTX opened in PowerPoint at 100%, plus the exported PDF | No glyph outside its declared box; all 46 TIGHT objects (self-check record) individually confirmed | Per-slide PNG at 100% and annotated crops of every TIGHT object |
| 12 TABLE_HEIGHT (MV half) | PDF | Every table's rendered height equals the spec height ± 0.02 in | Measured crop per table |
| 14 COPIED_VISUALS | PDF, plus the source-deck figures referenced in §15 | No composition matches a source-deck figure | Side-by-side sheet |
| 31 POSITION_CUE (MV half) | Grayscale PDF | The selected segment is distinguishable on slides 3–29 | Grayscale contact sheet |
| 35 PC2_GRAYSCALE | Grayscale PDF | Every distinction in §5/§11 PC2_NONCOLOR_CUES is legible without color | Grayscale contact sheet with per-slide note |
| 36 STATIC_PRINT (MV half) | PDF | All 29 slides read completely in the final static state | Contact sheet |
| 37 RENDER_COLLISIONS | PNG at 100%; for slide 14 also the PowerPoint render at 100% and 200%, the student-distribution PDF and the grayscale PDF (§16.1.1) | No visible overlap; the narrow gaps on slides 12 (0.040), 16 (0.030), 21 (0.020), the slide-10 dot clearances and the slide-14 L2 runs are checked explicitly (horizontal run above the row-1 digits; vertical run x 7.502 between the table edge and S14_M1, 0.089 each side; it must not read as a table border). **Slide 14: checks R1–R4 in §16.1.1 are mandatory; each needs its own PASS. Gate 37 passes only if all of R1–R4 pass.** | Annotated crops; for slide 14, the §16.1.1 evidence set for each of R1–R4 |

#### 16.1.1 Gate 37 — slide-14 leader checks R1–R4 (part of gate 37; not a new numbered gate)

Slide 14 uses the approved alternative-B geometry (§11). A geometric result of "no glyph collision" is **not** sufficient for visual acceptance; each check below is judged on the rendered output.

| Check | Objects | PASS only if all of the following hold (FAIL otherwise) |
|---|---|---|
| **R1 Horizontal leader readability** | S14_L2 run at y 2.700; row-1 values; header rule | (a) The run does not visibly touch any row-1 digit. (b) The values "8" (rating) and "10" (featured) are fully legible. (c) The run does not resemble a strikethrough. (d) It does not resemble a second header underline. (e) It does not obscure the header rule. |
| **R2 Vertical leader vs table border** | S14_L2 run at x 7.502; table right edge 7.404 | (a) The run does not appear to be a table border. (b) It does not appear to be an additional column rule. (c) It remains visually identifiable as a leader (continuous with the rest of S14_L2). |
| **R3 False marker connection** | S14_L2 near S14_M1; S14_L1 | (a) S14_L2 does not appear connected to S14_M1. (b) Only S14_L1 appears attached to S14_M1. (c) S14_L2's route from callout 2 to S14_M2 is visually traceable end to end. (d) A student could not reasonably confuse which callout points to which marker. |
| **R4 Padded text-box crossing** | S14_L2 through the row-1 rating and featured cells | (a) The digits are unobscured. (b) The cell values remain easy to read. (c) The leader does not crowd or visually merge with the numbers. (d) S14_L2 visibly terminates at S14_M2 only. |

**Evidence required for each of R1–R4 separately:**
1. A separate PASS/FAIL result.
2. An annotated crop of the PowerPoint render.
3. Inspection at 100% and at 200% zoom.
4. Inspection of the student-distribution PDF (`BUSS256_M6_R5_2027_BUILD_v1.pdf`, §17).
5. A grayscale readability check (grayscale PDF). It applies to all four checks: each depends on line, rule, digit and marker contrast.
6. A brief reviewer observation.
7. The reviewer's identity.
8. A reference to each evidence artifact (file name).

**Full-slide context:** the reviewer also inspects the whole of slide 14 at 100%, in the PowerPoint render and in the PDF, and records that observation. Isolated crops alone are insufficient.

**Failure handling:**
- Any FAIL in R1–R4 is a gate-37 FAIL and triggers the STOP rule below.
- The builder must not move, resize, rewrite or recolor any object to resolve it.
- A failed check returns to a governed, versioned spec correction before rebuilding.

**Ownership:** unchanged. R1–R4 are executed by the independent render reviewer; the professor retains final acceptance authority.

**Status:** these checks cannot be reported as passed until an actual PPTX and PDF exist.

**Failure reporting format:** gate ID · slide · object ID(s) · observed problem · crop filename · reviewer · date.

**STOP rule:** on any actual render failure the build STOPS. The builder must not reposition, resize or rewrite content on its own. Work returns to an authorized, versioned spec micro-patch before rebuilding.

## 17. Future build outputs (defined, not created)

| Output | Location |
|---|---|
| Build directory | `work/m6_r5_build_v1/` |
| Deck and PDF | `BUSS256_M6_R5_2027_BUILD_v1.pptx`, `BUSS256_M6_R5_2027_BUILD_v1.pdf` |
| Renders | `slides_png/`, `slides_gray/`, `sheets/` |
| QA | `qa_struct.json`, the build script and helpers, a QA report |
| Production destination (after QA and explicit project-lead approval only) | `teaching/BUSS256/03_final/production/BUSS256_M6_R5_2027.pptx` / `.pdf` |

None of these is created in this tranche.

## 18. Boundaries and handoffs

- **M6-R4B = HOLD.** None of these appear: `admission.csv`, import/export instruction, user-defined functions, packages, exercise filenames, R code, solution, InClass, or exam/review material.
- **HANDOFF-ASSESS-01:** CLOSED for M6-R5 content-freeze scope only.
- **AF-R5-01:** OPEN — ASSESSMENT-FREEZE TRANCHE.
- **HANDOFF-M5-01:** OPEN.
- **HANDOFF-S3-01:** OPEN.

## 19. Self-verification at drafting (spec-level; the build still needs gates 1–38)

The checks were computed from the single object list that generated §11 and Appendix C:
- Arial advance widths from the system `Arial*.ttf` files.
- Line pitch 1.2 em × the role line spacing.
- The §4/§9 insets.

| Check | Result |
|---|---|
| Slides / layout assignments | 29 / 29 |
| Declared objects checked | 285 objects in §11, plus all generated marks and tick labels |
| OFF_SLIDE_OBJECTS / safe-zone violations | 0 / 0 |
| Body objects below y 6.850 | 0 |
| LIKELY_OVERFLOW (text need > box height) | **0**. This includes the tag widths and the table cells in Appendix T. |
| PREDICTED_COLLISIONS | **0** across text–text, text–table, text–mark, tick-label–text and tick-label–tick-label pairs, apart from the declared intentional containments in §12 |
| Previously flagged collisions | All resolved: slide 10 median label vs. text column; slide 12 title vs. $5 stack; slide 13 "6" vs. "Median 16.5"; slide 21 intro vs. ±3 SD labels; slide 23 "$8" vs. row label; slide 28 annotation vs. RECALL row |
| UNINTENTIONAL_DOT_OVERLAPS | **0** on slides 7, 10, 11, 12, 15, 16, 21 and 25. Slide 10: P01–P02, P02–P03 and P06–P07 are now 0.0954 apart, above Ø 0.085. |
| Role / size violations | 0. PRIMARY text is 20–22 everywhere; SECONDARY 18 is used only for the 14 classified objects. |
| Correlations, slide 15 | QA authority = Blueprint §6.8 data: 0.9433887 / 0.0718190 / −0.9442856 / 0.0000000. From the C.15 coordinates: 0.9435445 / 0.0718538 / −0.9444107 / 0.0000000. Max \|Δ\| 0.0001558 ≤ 0.002 (v1.3, TV-m5). |
| Correlation, slide 16 | −0.7995 (C.16) |
| Histogram markers | Median 8.392, mean 8.770 (from 7.850 + v × 4.6/140) |
| POSITION_CUE | PASS (§3.3) |
| Builder decisions from the red-team (10) | All resolved, as shown below. SUBSTANTIVE_BUILDER_DECISIONS = 0. |

**How the 10 builder decisions were resolved:**
1. Slide-13 column → explicit boxes S13_G1A–S13_G3.
2. Chart-label geometry → §9.2.
3. Slide-23 endpoints → explicit boxes.
4. Slide-25 labels → explicit boxes.
5. Slide-15 RECALL → S15_RC / S15_RCT.
6. Slide-14 marker 2 → S14_M2 + S14_L2.
7. Titles → `TITLE_TEXT`.
8. Slide-26 cue → BS-I6 / S26_CUE.
9. Roadmap format → "X · name".
10. Table rows → §9.1.

**Conformance (v1.3.1 statement; supersedes the v1.3 statement for the items below):** UNAUTHORIZED_BLUEPRINT_DRIFT = 0; UNAUTHORIZED_CONTENT_DRIFT = 0. Authorized blueprint deviations = 4: the 2 Slide-1 text exceptions (BS-I7, unchanged) and the 2 note exceptions NX-2 (slide 2) and NX-6 (slide 6). Literal blueprint strings no longer reproduced: 3 ("Seminar 5 · Week 4" and the two frozen notes). The slide-14 change is an authorized implementation correction (geometry only; no text, data or content change). See the supplemental authority record.

**Conformance (v1.3 statement; supersedes the v1.2 wording below):** UNAUTHORIZED_BLUEPRINT_DRIFT = 0 and UNAUTHORIZED_CONTENT_DRIFT = 0. AUTHORIZED_SLIDE1_TEXT_EXCEPTIONS = 2 (BS-I7; see the authority-exception record). Literal divergence from the frozen blueprint: 1 string ("Seminar 5 · Week 4" is no longer displayed). The second replacement changes the spec's rendering of the blueprint's unspecified "course line". v1.2 wording, retained for history: the slide-26 compound cue and the slide-28 RECALL · M6-R3 tag restore blueprint/content cues, so they are not drift. Every visible string is unchanged from v1.1, apart from:
- [v1.2 only; superseded in v1.3 by BS-I7] the slide-1 meta line in source case ("Seminar 5 · Week 4", as in the blueprint);
- the roadmap's uniform "X · name" format;
- the removal of the slide-26 inline RECALL tag, now carried by S26_CUE.

No frozen wording was edited to make text fit.

## 20. Integrity

**v1.3.2:**
- v1, v1.1, v1.2, v1.3 and v1.3.1 are preserved unmodified, as are the v1.3 and v1.3.1 exception and self-check records.
- v1.3.2 changes QA wording and documentation only; no slide content, geometry, note, data, object or font is changed.
- Record: `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_2.md`. Self-check: `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_v1_3_2_SELF_CHECK.md`.

**v1.3.1:**
- v1, v1.1, v1.2 and v1.3 are preserved unmodified, as are the v1.3 exception and self-check records.
- Content v1.3 and blueprint v1.1 are not modified in place. Authorized divergences are recorded in `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` (Slide 1) and `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md` (slide 14, NX-2, NX-6).
- Self-check: `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_v1_3_1_SELF_CHECK.md`.

**v1.3:**
- v1, v1.1 and v1.2 are preserved unmodified.
- Content v1.3 and blueprint v1.1 are not modified in place. Their single authorized divergence (Slide 1, 2 strings) is recorded in `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md`.
- Self-check: `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_v1_3_SELF_CHECK.md`.

**v1.2 (carried):**

- v1 and v1.1 not modified. The red-team report was not modified.
- Content and blueprint changes: 0.
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- No PPTX, PDF, PNG, OOXML or script was created in the repository (scratch QA computations only).
- Git staged: 0. Commit: none. Push: none.

## Appendix T — Table cells (exact)

**Slide 4 (S04_TABLE):** header row: "" | Primary | Secondary.

| | Primary | Secondary |
|---|---|---|
| Definition | Data you collect firsthand for a specific purpose. | Data collected by others for a different purpose, reused by you. |
| Typical methods | Surveys, interviews, experiments, A/B tests | Government statistics, industry reports, academic datasets, partner data |
| Example | A store surveys its own customers. | A store reuses published industry statistics or a partner's sales data. |

**Slide 5:**
- S05_TBL_L header: product_id | category | price ($) | units_sold. Rows: P01 Books 8 900 · P02 Books 10 940 · P03 Books 12 700 · P04 Home 12 820.
- S05_TBL_R header: order_id | items. Rows: O-101 | P01, P05 · O-102 | P02 · O-103 | P04, P06, P07.

**Slide 6 (S06_TABLE):**

| Column | Type | Example values (from the table) | What values are possible |
|---|---|---|---|
| `product_id` | identifier | P01, P10 | Labels only; not a quantity |
| `category` | categorical, unordered | Books, Home, Electronics | One of the listed categories |
| `price` | numeric, continuous | 8, 120 | Any non-negative amount of money |
| `units_sold` | numeric, discrete count | 40, 940 | Whole numbers 0, 1, 2, … |
| `rating` | ordered | 3, 5 | Only 1, 2, 3, 4 or 5 |
| `featured` | binary | 0, 1 | Only 0 or 1 |

**Slide 14 (S14_TABLE):**

| | price ($) | rating (1–5) | featured (0/1) |
|---|---:|---:|---:|
| Products with a value | 10 | 8 | 10 |
| Mean | 28.0 | 4.0 | 0.6 |
| SD | 33.6 | 0.8 | 0.5 |
| Min | 8 | 3 | 0 |
| Max | 120 | 5 | 1 |

**Slide 16 (S16_MATRIX):** header "" | price | units_sold.
- Row "price": 1.00 | −0.80.
- Row "units_sold": −0.80 | 1.00.

**Slide 18 (S18_TABLE):**

| source | product_id | category | price ($) | last_updated |
|---|---|---|---:|---|
| store catalog | P03 | Books | 12 | 2026-03-02 |
| partner feed | P03 | Books | 12 | 2026-01-15 |
| store catalog | P02 | Books | 10 | 2026-03-02 |

**Slide 19 (S19_TABLE):** header product_id | rating. Rows P01 4 · P02 5 · P03 3 · P04 (missing) · P05 4 · P06 4 · P07 5 · P08 (missing) · P09 3 · P10 4.

**Slide 24 (S24_MINI):** header x | x′. Rows 10 | 0 · 20 | 0.33 · 40 | 1.

**Slide 26 (S26_TABLE):** header product_id | category | is_Books | is_Home | is_Electronics. Rows:
- P01 | Books | 1 | 0 | 0
- P04 | Home | 0 | 1 | 0
- P09 | Electronics | 0 | 0 | 1

**Slide 28 (S28_GRID):**
- Header: product_id | category | price | units_sold | rating | featured.
- Column 1: P01–P10.
- Rating cells P04 and P08: "(missing)".
- All other body cells are blank PANEL placeholders.

## Appendix C — Deterministic chart coordinates (inches; dot/point entries are top-left x, top-left y, diameter)

### C.7 Slide 7 dot histograms
Rule in the slide-7 entry (Ø 0.080, pitch 0.095, baseline py + 1.360). Panel origins (px, py): P1 (0.604, 3.300), P2 (6.769, 3.300), P3 (0.604, 5.080), P4 (6.769, 5.080). Counts (ages 20, 25, …, 65): P1 20, 40, 26, 10, 4, 10, 26, 40, 20, 4 (200); P2 10, 20, 13, 5, 2, 5, 13, 20, 10, 2 (100); P3 3, 6, 4, 1, 1, 1, 4, 6, 3, 1 (30); P4 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 (8). Extremes: tallest stack (40 dots, 10 rows) top = py + 0.425; rightmost dot right edge = px + 5.350.

### C.10 Slide 10 price dot strip
Mapping: centre x(p) = 6.200 + p × 6.2/130; dot Ø 0.085 (0.5 pt white outline); dot bottom 4.600; stack pitch 0.100 (equal values only). Minimum centre distance between distinct prices = 0.0954 > 0.085.

| Product | price | left x | top y |
|---|---:|---:|---:|
| P01 | 8 | 6.539 | 4.515 |
| P02 | 10 | 6.634 | 4.515 |
| P03 | 12 | 6.730 | 4.515 |
| P04 | 12 | 6.730 | 4.415 |
| P05 | 15 | 6.873 | 4.515 |
| P06 | 18 | 7.016 | 4.515 |
| P07 | 20 | 7.111 | 4.515 |
| P08 | 25 | 7.350 | 4.515 |
| P09 | 40 | 8.065 | 4.515 |
| P10 | 120 | 11.881 | 4.515 |

Median line x 6.987 (solid, y 3.250→4.600); mean line x 7.535 (dashed, y 3.600→4.600).

### C.11 Slide 11 dot strips
Axis 0–14 over x 3.100–12.100 (9/14 in per unit); Ø 0.200; stack pitch 0.220; baselines A 3.200, B 4.500, C 5.800.
- A (7.500, 3.000); A (7.500, 2.780); A (7.500, 2.560); A (7.500, 2.340); A (7.500, 2.120); B (6.214, 4.300); B (6.857, 4.300); B (7.500, 4.300); B (8.143, 4.300); B (8.786, 4.300); C (3.643, 5.600); C (5.571, 5.600); C (7.500, 5.600); C (9.429, 5.600); C (11.357, 5.600)

### C.12 Slide 12 dot strips
units_sold: x(u) = 1.054 + u × 0.005; Ø 0.140; dot tops 4.510 (bottom 4.650). Shipping: x(f) = 7.279 + (f − 4) × 1.6667; Ø 0.140; nine dots stacked at $5 with pitch 0.145 (top dot top 3.350), one dot at $6.
- U0 (5.484, 4.510); U1 (5.684, 4.510); U2 (4.484, 4.510); U3 (5.084, 4.510); U4 (4.034, 4.510); U5 (3.234, 4.510); U6 (3.584, 4.510); U7 (2.884, 4.510); U8 (2.284, 4.510); U9 (1.184, 4.510); F5_0 (8.876, 4.510); F5_1 (8.876, 4.365); F5_2 (8.876, 4.220); F5_3 (8.876, 4.075); F5_4 (8.876, 3.930); F5_5 (8.876, 3.785); F5_6 (8.876, 3.640); F5_7 (8.876, 3.495); F5_8 (8.876, 3.350); F6 (10.542, 4.510)

### C.13 Slide 13 histogram
Plot x 7.850–12.450 ($0–$140; 0.0328571 in/$; bin width 0.6571); baseline y 5.500; 0.450 in per product (top of scale y 2.800).

| Bin (build-only) | Count | bar x | bar y | bar w | bar h |
|---|---:|---:|---:|---:|---:|
| [0,20) | 6 | 7.850 | 2.800 | 0.657 | 2.700 |
| [20,40) | 2 | 8.507 | 4.600 | 0.657 | 0.900 |
| [40,60) | 1 | 9.164 | 5.050 | 0.657 | 0.450 |
| [60,80) | 0 | 9.821 | 5.500 | 0.657 | 0.000 |
| [80,100) | 0 | 10.479 | 5.500 | 0.657 | 0.000 |
| [100,120) | 0 | 11.136 | 5.500 | 0.657 | 0.000 |
| [120,140) | 1 | 11.793 | 5.050 | 0.657 | 0.450 |

Median line x = 7.850 + 16.5 × 0.0328571 = **8.392** (solid); mean line x = 7.850 + 28 × 0.0328571 = **8.770** (dashed); both y 2.350→5.500. Data-label boxes per S13_DL*: bin 1 centered (no marker within 0.050); bin 2 uses the marker-conflict fallback (mean x 8.770 lies inside the centered box 8.686–8.986 → box left = 8.770 + 0.060 = 8.830, left-aligned).

### C.15 Slide 15 schematic panels (x = 1…10)
Point centre: cx = px + 0.300 + (x − 1)/9 × 2.650; cy = py + 1.500 − y/11 × 1.300; Ø 0.120.

**QA authority (v1.3, TV-m5):** Blueprint §6.8 original data, r = 0.9433887 / 0.0718190 / −0.9442856 / 0.0000000. The rounded coordinates below give 0.9435445 / 0.0718538 / −0.9444107 / 0.0000000. Permitted plotting-rounding difference ≤ 0.002. QA only; never shown.

- **Strong positive (5.950, 1.950):** (6.190, 3.154); (6.484, 3.272); (6.779, 2.976); (7.073, 2.976); (7.368, 2.622); (7.662, 2.858); (7.957, 2.504); (8.251, 2.563); (8.546, 2.208); (8.840, 2.267)
- **Near zero (9.479, 1.950):** (9.719, 2.799); (10.013, 3.154); (10.308, 2.563); (10.602, 2.917); (10.897, 2.681); (11.191, 3.035); (11.486, 2.445); (11.780, 2.799); (12.075, 3.154); (12.369, 2.681)
- **Strong negative (5.950, 4.550):** (6.190, 4.867); (6.484, 4.808); (6.779, 5.163); (7.073, 5.104); (7.368, 5.458); (7.662, 5.222); (7.957, 5.576); (8.251, 5.517); (8.546, 5.872); (8.840, 5.813)
- **Curved (9.479, 4.550):** (9.719, 4.793); (10.013, 5.266); (10.308, 5.621); (10.602, 5.857); (10.897, 5.975); (11.191, 5.975); (11.486, 5.857); (11.780, 5.621); (12.075, 5.266); (12.369, 4.793)

### C.16 Slide 16 scatter
x(p) = 7.400 + p × 5/130; y(u) = 5.950 − u × 0.0036; Ø 0.140.
- P01 (7.638, 2.640); P02 (7.715, 2.496); P03 (7.792, 3.360); P04 (7.792, 2.928); P05 (7.907, 3.684); P06 (8.022, 4.260); P07 (8.099, 4.008); P08 (8.292, 4.512); P09 (8.868, 4.944); P10 (11.945, 5.736)

### C.21 Slide 21 schematic dot strip
x(v) = 1.100 + (v − 25) × 0.185; Ø 0.160; dot tops 4.240 (bottom 4.400); stack pitch 0.180. Band edges x(29.14) = 1.866, x(73.26) = 10.028.
- 44 (4.535, 4.240); 45 (4.720, 4.240); 46 (4.905, 4.240); 47 (5.090, 4.240); 48 (5.275, 4.240); 48 (5.275, 4.060); 49 (5.460, 4.240); 49 (5.460, 4.060); 50 (5.645, 4.240); 50 (5.645, 4.060); 50 (5.645, 3.880); 50 (5.645, 3.700); 51 (5.830, 4.240); 51 (5.830, 4.060); 52 (6.015, 4.240); 52 (6.015, 4.060); 53 (6.200, 4.240); 54 (6.385, 4.240); 55 (6.570, 4.240); 80 (11.195, 4.240)

### C.23 Slide 23 range bars (0–1,000 over x 1.900–12.400; 0.0105 in/unit)
- price: x 1.984, y 3.600, w 1.176, h 0.450; units: x 2.320, y 4.700, w 9.450, h 0.450

### C.25 Slide 25 tier line (axis $0–$130 over x 1.100–12.200)
Segments (y 2.900, h 0.500): Low 1.100–2.381; Mid 2.381–3.662; High 3.662–12.200. Dots Ø 0.140, stack pitch 0.160:
- P01 (1.713, 2.710); P02 (1.884, 2.710); P03 (2.055, 2.710); P04 (2.055, 2.550); P05 (2.311, 2.710); P06 (2.567, 2.710); P07 (2.738, 2.710); P08 (3.165, 2.710); P09 (4.445, 2.710); P10 (11.276, 2.710)
- P05 ($15) is centred on the $15 boundary (x 2.381). The boundary tick is drawn below the band only, so no line crosses the dot; the tier assignment is stated in S25_TIERS.
