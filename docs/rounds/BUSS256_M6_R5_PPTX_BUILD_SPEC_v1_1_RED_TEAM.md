# BUSS256 M6-R5 — PPTX Build Spec v1.1 Red-Team

*Recorded 2026-10-09. Read-only red-team of the implementation specification. The content and the blueprint are frozen and were not challenged. No file other than this record was created or modified.*

## Verdict

**PASS-WITH-PATCHES**

- The architecture, layout families, label system, position cue, arithmetic, chart coordinate mappings and notes isolation are sound. They do not need restructuring.
- The spec is **not yet freeze-ready** for three reasons:
  1. Measured text growth produces predictable overflows and collisions on 13 slides.
  2. Slide 10 still has 3 unintended dot overlaps.
  3. Several builder decisions remain open, and two items conform to the blueprint only in part.
- Every patch below changes geometry, type size, or QA method only. No patch changes content, examples, sequence or pedagogy.

## 1. Inputs and integrity

| File | SHA-256 | Status |
|---|---|---|
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` | Frozen; matches |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` | Frozen; matches |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1.md` | `868721f7257ba9a571130f17ef20a0239fe16b3b8bb1aa1c415b9dabfb183227` | Preserved |
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1.md` (candidate) | `aa9401e3b62d8f7f0c1948889ed75b48b8fb5b37fb649048703b50c4605b229e` | Matches expected |
| `docs/rounds/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_FREEZE.md` | `55c9ba8938339d5fbf48d7e5a883edf08a07ae425d3eb95d0f49b3583cb49148` | Read |

- Repository: `buss256/2027-refresh` @ `64b2cd8154241d0d626f2cd935db1167a1d8103c`.

## 2. Method

**Independent recomputation in scratch scripts** (not trusting the spec's own QA statements):
- Toy-data arithmetic.
- Correlations from both the raw data and the **printed coordinates**.
- Histogram mapping.
- Pairwise dot distances.
- Bounds of 133 explicit coordinate tuples.

**Text-fit estimation** used real Arial advance widths, read from the system `Arial.ttf`, `Arial Bold.ttf` and `Arial Italic.ttf`:
- Greedy word wrap.
- Line pitch = 1.2 em × the spec's 1.10 line spacing.
- The spec's text-box insets (0.05/0.03 in) and table-cell padding (0.08/0.04 in).

Fit classes:
- **PASS:** needed height ≤ 95% of the box.
- **TIGHT:** needed height ≤ 105% of the box.
- **LIKELY-OVERFLOW:** needed height > 105% of the box.

Because autofit is off, overflow appears as text spilling below the box. It is a defect only when the spill reaches another object or the footer band; each overflow finding states the collision.

## 3. Global findings

### BS-R1 Slide size — **PATCH**

- The spec gives both "13.333 × 7.500 in" and "12,192,000 × 6,858,000 EMU", but does not say which governs.
- 13.333 × 914,400 = **12,191,695.2 EMU**. A builder who converts the rounded inch value gets a page 305 EMU narrower than one who uses the EMU literal.
- RIGHT_SAFE (x ≤ 12.883) is also derived from 13.333. The exact value is 13.3333… − 0.45 = 12.8833….
- **Patch:**
  - Declare **EXACT PPTX GEOMETRY AUTHORITY = 12,192,000 × 6,858,000 EMU** (`p:sldSz cx="12192000" cy="6858000"`). The human-readable size is "13.333… × 7.5 in".
  - Forbid recomputing EMU from 13.333.
  - Add the conversion rule **EMU = round(inches × 914,400)**, round half up.

### Safe-zone geometry — PASS on declared coordinates (overflows are under §5)

- **Bounds:** all 133 explicit (x, y, w, h) tuples and table-row geometries were checked against the exact slide width 13.3333… and height 7.5. Off-slide: 0. Safe-zone violations: 0.
- **Why the body starts at x 0.604 rather than 0.45:** 0.604 is the measured M6-R4A content line (58 px / 96). LEFT_SAFE 0.45 is the outer limit, and the body aligns to the title, not to the margin. Consistent.
- **Header/title/footer:** H1 y 0.229, H2 0.604–1.208, rule 1.3125, label zone 1.420–1.780, body 1.950. No vertical collision.
- **Position bar footprint:** x 4.300–7.180, y 7.005–7.245.
  - F2 ends at 4.204, a 0.096 gap.
  - F1 starts at 12.208.
  - No collision.
- **Upper-right label:** x 10.029–12.729 (ILLUSTRATIVE) or 10.829–12.729 (MINI). It sits below the title rule and above the body. Because every title is one line, there is no collision.
- **Minor:** the slide-2 roadmap box k = 6 ends at **12.734**. That is 0.005 past the 12.729 content edge, but inside RIGHT_SAFE (see m2).

### M6-R4A token lineage — **MINOR PATCH (m1)**

| Token | Measured M6-R4A implementation (px / 96) | M6-R5 v1.1 | Provenance |
|---|---|---|---|
| H1 institution line | 58, 22, 460, 24 → 0.604, 0.229, 4.792, 0.250 | Same | MEASURED ✓ |
| H2 title | 58, 58, 1164, 58 → 0.604, 0.604, 12.125, 0.604 | Same | MEASURED ✓ |
| H3 rule | y 126, h 3 → 1.3125, 0.031 | 1.313, 0.031 | MEASURED ✓ (rounded) |
| Slide number | 1172, 680, 50, 20 → 12.208, **7.083**, 0.521, **0.208** | 12.208, **7.000**, 0.521, **0.250** | **Changed, unlabeled** |
| Label | 910, 142, 312, 34 → 9.479, 1.479, 3.250, 0.354 | 10.029, 1.420, 2.700, 0.360 | **M6-R5-new, unlabeled** |
| Margins | Older written M6-R4A spec: 0.45 L/R, 0.35 top | 0.45 L/R; top 0.20 | BS-I3 |

- BS-I3 is internally consistent for the header.
- However, the frozen blueprint §3 also states "0.35 in top, 0.40 in footer reserve". BS-I3 cites only the older M6-R4A spec.
- **Patch:**
  - Add a provenance column (MEASURED-R4A / R5-NEW) to the §3 token tables.
  - Note that F1 and the label are deliberate R5-new values.
  - Extend the BS-I3 wording to cover blueprint §3's 0.35 in top-margin prose, which the project-lead ruling already supersedes.
- The 0.40 footer reserve is respected: no body object extends below 6.85.

### Font readability — **PATCH**

- **Family:** Arial only, with latin/ea/cs explicit, theme major/minor Arial, and no embedded fonts. PASS.
- **Minimum sizes:**
  - 12 pt is used only for the footer, slide number and segment letters. PASS.
  - 13 pt is used for tags and labels. This is acceptable: they are subordinate cue labels, every tag is followed by text at 16 pt or more, and 13 pt matches the governed M6-R4A label token.
- **Blueprint §3 type-scale conformance (frozen), measured against "table and chart labels 16–18 pt", "body 20–22", "key statement 24–28":**
  - **Chart labels at 15 pt:** tick labels and data labels (slides 7, 10, 12, 13, 16, 21, 23); the median/mean marker labels (10, 13); the ±3 SD edge labels (21); the endpoint labels (23). **Raise to 16 pt.**
  - **Slide 12 key statement** (blueprint: "Key statement, verbatim") is at 20 pt bold. The spec's own scale says 24–26. **Raise to 24 pt bold** in a box (0.604, 5.000, 12.125, 1.600), which needs 1.46 in.
  - **Slide 13 verbatim categorical line** ("For categorical variables…") is at 16 pt MID_GRAY. That treats a frozen verbatim teaching line as a caption. **Raise to body size, CHARCOAL.**
  - **Explanatory sentences at 18 pt** fall below the blueprint's 20–22 body range. Affected slides: 3 tile questions, 5 recall lines, 6b, 7b, 13 G3, 16b/16c, 17f, 20f/20g, 22 panel text, 24 definitions, 28 annotations.
    - 18 pt is readable, so this is a **conformance** issue, not a readability one.
    - **Patch:** a project-lead ruling (proposed BS-I5) that classes these as "secondary / annotation text, 18 pt" under the blueprint's "table and chart labels 16–18" band. Otherwise they must be raised to 20 pt, which several boxes cannot absorb.
- **Long-title wrap:** the longest title (slide 2) measures **11.607 in** at 32 pt bold, against 12.025 in usable. It fits on one line (TIGHT). All other titles are ≤ 10.77 in.
- **Spacing and alignment:**
  - Line spacing 1.10, 6 pt after paragraphs, insets and vertical alignment are locked. PASS.
  - **Table cells do not have their own line-spacing rule.** Because PowerPoint grows a table row to fit its text, this is a determinism risk. See BS-R13.

### Palette and PC-2 — PASS

| Pair | Contrast | Use |
|---|---:|---|
| PRIMARY_NAVY / white | 11.15 : 1 | Titles, labels |
| CHARCOAL / white | 16.10 : 1 | Body |
| MID_GRAY / white | 5.72 : 1 | Secondary text (AA) |
| MID_GRAY / PANEL | 5.19 : 1 | Banded cells (AA) |
| ACCENT_1 / white | 9.23 : 1 | Institution line only ✓ |
| White / PRIMARY_NAVY | 11.15 : 1 | Selected-segment letter |
| CHARCOAL / PALE | 13.80 : 1 | Text over bars |
| LIGHT_GRAY / white | 1.91 : 1 | Non-text strokes only ✓ |
| PANEL / white | 1.10 : 1 | Fills only. Slide 21's band and slide 25's segments also carry dashed edges, outlines and text, so PC-2 holds. |

- PANEL `#F2F4F7` and PALE `#E8EEF7` hex values are locked.
- ACCENT_1 is used only for the institution line.
- ACCENT_2 is reserved and unused.
- There are no red/green semantics.
- The dashed borders are 1.25 pt CHARCOAL, with 2 pt PRIMARY_NAVY on slide 22, so they stay visible in print.

### Master / layout — PASS

- Masters: 1. Layouts: 6.

| Layout | Slides | Count |
|---|---|---:|
| L-TITLE | 1 | 1 |
| L-BRIDGE | 2 | 1 |
| L-CONCEPT | 3, 6, 8, 9, 17, 27, 28 | 7 |
| L-COMPARE | 4, 11, 22, 24, 26 | 5 |
| L-DATA | 5, 7, 10, 12, 13, 14, 15, 16, 18, 19, 20, 21, 23, 25 | 14 |
| L-CLOSE | 29 | 1 |
| **Total** | | **29** |

- Unique slides: 29. Duplicate assignments: 0. Missing assignments: 0.
- Slide 19 is L-DATA (BS-I1).
- Every per-slide "Layout / role" line agrees with this table.

### Position cue — PASS

| Check | Result |
|---|---|
| Segments | 7: A B C D E F G. Block 0 is not a segment ✓ |
| Geometry | Each 0.360 × 0.240; gap 0.060; pitch 0.420; total width 2.880 (6 × 0.420 + 0.360) ✓; x 4.300–7.180 |
| Collisions | None. F2 ends at 4.204; the longest tag ("A · Data for a business question", 12 pt) measures 2.372 in, within the 3.600 box. F1 starts at 12.208. |
| Slide 1 | No F2/F3 ✓ |
| Slide 2 | Tag "0 · Open"; all 7 segments neutral; 0 selected ✓ |
| Slides 3–29 | Exactly one selected segment per slide. Map: 3–5 A, 6–8 B, 9–16 C, 17–22 D, 23–27 E, 28 F, 29 G ✓ |
| Neutral state | One shared style: white fill, 0.75 pt LIGHT_GRAY outline, regular MID_GRAY letter. No completed vs. future distinction ✓ |
| Selected state | Navy fill (L = 0.044 vs. 1.0 for white), **2 pt** outline vs. 0.75 pt, **bold** white letter. Survives grayscale ✓ |

- Harmless note: the neutral outline (1.91 : 1) is faint in print, but the MID_GRAY letter (5.72 : 1) carries each neutral segment.

### Label system — PASS (with tag-placement gaps under BS-R11)

| Label | Box | Text width at 13 pt bold | Fit |
|---|---|---:|---|
| ILLUSTRATIVE EXAMPLE | 2.700 × 0.360 | ≤ 2.54 usable | PASS |
| MINI EXAMPLE | 1.900 × 0.360 | — | PASS |
| RECALL · M6-R4A / RECALL · slide 12 (italic) | 2.200 × 0.340 | — | PASS |
| EXTEND · M6-R4A | 2.300 × 0.340 | — | PASS |
| RULE OF THUMB / NOT A RULE / CAUTION | 2.100 / 1.600 / 1.400 × 0.360 | — | PASS |
| Preview tag | 4.000 × 0.340 | — | PASS |

- **Stacking:** M6-R5 has at most one upper-right label per slide, and the stacking rule is defined for future use.
- **Title collision:** none, because every title is one line and the label zone sits below the rule.
- **Grayscale:**
  - RECALL/EXTEND are solid, italic and bracketed.
  - Heuristic tags are dashed caps.
  - Upper-right labels are solid caps.
  - All are distinguishable without color.
- **Gap:** inline tags on slides 13 (NOT A RULE, Preview) and 15 (RECALL) have **no coordinates** (BS-R11).

## 4. Data and arithmetic — PASS

**Canonical table:** reconstructed from §10, it matches the required 10 rows exactly, including P04 and P08 missing `rating`, and the blueprint §4 table. No per-slide binding contradicts it:
- slide 5 rows P01–P04;
- slide 6 examples;
- slide 18 P03/P02;
- slide 22 P10;
- slide 26 P01/P04/P09.

**Independent recomputation:**

| Quantity | Computed | Spec |
|---|---|---|
| price mean / median / sample SD | 28.0 / 16.5 / 33.642 | 28.0 / 16.5 / 33.6 ✓ |
| units_sold sample SD / range | 289.858 / 900 | 289.9 / 900 ✓ |
| rating observed n / missing / mean / SD | 8 / P04, P08 / 4.0 / 0.756 | 8 / P04, P08 / 4.0 / 0.8 ✓ |
| featured ones / zeros / mean / SD | 6 / 4 / 0.6 / 0.516 | ✓ (first five 0, 1, 1, 0, 1 → 0.6 ✓) |
| r(price, units_sold) | −0.7995 | −0.80 ✓ |
| Histogram (left-closed) | 6, 2, 1, 0, 0, 0, 1 (10) | ✓ |
| Tiers | 4 / 4 / 2 | ✓ |
| Shipping fee SD | 0.316 | 0.32 ✓ |
| Slide 21 mean / SD / band / z(80) | 51.2 / 7.353 / 29.14–73.26 / 3.92; other \|z\| ≤ 0.98 | ✓ |
| Min-max 10, 20, 40 | 0, 0.33, 1 | ✓ |
| n = 10 maximum \|z\| (QA-only) | 9/√10 = 2.846 | Not student-facing ✓ |

## 5. Per-slide audit

**Fit codes (slides with no fit finding are marked "—"):**
- **P:** PASS.
- **T:** TIGHT.
- **O:** LIKELY-OVERFLOW, with the collision named.

| Slide | Fit | Findings |
|---|---|---|
| 1 | P | Title 5.57 in at 44 pt ✓ |
| 2 | **O** | **2a** (24 pt bold) needs 2 lines = 0.94 in > 0.80, spilling into the "Workflow order" caption at y 2.85. **Fix:** 2a h 0.950; 2b at y 2.950 (2b sits left of 2d, so it clears it). Chevrons 2c/2e need 4 lines in the text area (T): lock the chevron preset and `adj` (m11). Roadmap: box A uses a letter + line break + name, while B–G use "X · name" (builder decision, m2). "Data for a business question" needs 3 lines at 15 pt and overflows the 0.85 box with the letter line. **Fix:** use one format, "X · name", 2 lines, for all seven. |
| 3 | P | Tiles, icons and RECALL OK |
| 4 | P | Cells 2 lines in 1.00 ✓ |
| 5 | **O** | **5a** caption (18 pt bold) needs 2 lines in a 0.35 box and spills into table 5b at y 2.35. **Fix:** 5a and 5c at 16 pt bold. 5a is still 2 lines at 16 pt (0.65 in), so also set 5a/5c h 0.65 and move both tables to y 2.650, with the RECALL rows at 5.400 / 5.900. |
| 6 | **O** | Header "Example values (from the table)" wraps to 2 lines at 18 pt or 16 pt bold in the 3.000 column (0.74 in > 0.55 row), so the table grows. **Fix:** header row 0.800 and body rows 0.550 (table h 4.100, y 1.950–6.050). 6b needs 2 lines (0.72 > 0.60). **Fix:** 6b (0.604, 6.100, 9.600, 0.740); 6c at y 6.250 is unchanged. |
| 7 | **O** | **7a** needs 3 lines at 20 pt (1.24 > 0.85) and **7b** needs 3 lines (1.13 > 0.85); both spill into the panel titles at 2.85. P4 title T. **Fix:** text band 1.950–3.200; panels P1/P2 at y 3.250, P3/P4 at y 5.050, each h 1.800; baseline = py + 1.420; dots Ø 0.085, pitch 0.100. The top of a 10-row stack is then py + 0.425 (titles end at py + 0.330); 16-pt tick labels end ≤ py + 1.76; horizontal fit 0.415 ≤ 0.500. Totals 200/100/30/8 ✓. |
| 8 | P | — |
| 9 | **O** | Card headers: "DATA PREPARATION / REPRESENTATION" (2 lines at 22 bold) + question (2 lines) = 1.73 in > 0.90, spilling into the list at +1.20. **Fix:** header h 1.750; list at +1.950, h 2.250; cards h 4.200 (y 2.650–6.850). Card 9b uses the same internal geometry. |
| 10 | **Collision** | Overlaps under §8 below. The median label box (5.500–6.950, y 2.95–3.25) overlaps the text-column box (to x 5.804). **Fix:** text column w 4.850; median label (5.550, 2.950, 1.400, 0.330). Marker x 6.987 / 7.535 ✓. "skew" is absent ✓. |
| 11 | T | Takeaway 22 pt in 0.35 box (needs 0.46). The axis line at 6.18 sits 0.23 below the C baseline (5.95). **Fix:** axis at y 5.960, tick labels y 5.990 h 0.290, takeaway (3.100, 6.350, 9.000, 0.460). B/C labels are not literally given; "B = {5, 6, 7, 8, 9}" and "C = {1, 4, 7, 10, 13}" (from blueprint §6.7) fit at 1.91 / 2.19 in ≤ 2.20 usable (m8). |
| 12 | **Collision** | The right-panel title ("Shipping fee · range $1 · SD $0.32", 3.57 in wide from x 6.829, y 2.95–3.25) overlaps the top of the nine-dot stack at $5 (x 8.876–9.016, top 3.130). **Fix:** panel titles h 0.350; shipping and units baselines 4.650; stack pitch 0.145 (top dot top = 4.650 − 0.140 − 8 × 0.145 = 3.350, clear of the title end at 3.300); 16-pt tick labels (y 4.700, h 0.300) end at 5.000, where the patched statement box begins. Key statement → 24 pt (above). Units dots min gap 0.20 > Ø 0.14 ✓. |
| 13 | **O + Collision** | Text column with real sizes needs 5.37 in > 4.85, and inline tag positions are unspecified (BS-R11). **Fix:** with the BS-I5 ruling, set G1/G2 sentences at 18 pt (fits 4.74 in); otherwise widen the column and move the chart, which this record does not recommend. Data label "6" (centered x 7.157, y ~2.25–2.55) overlaps the right-aligned "Median 16.5" label (text x 6.22–7.37, y 2.05–2.35). **Fix:** marker labels at y 1.950, h 0.330; markers start at y 2.300; data-label boxes explicit (BS-R11). The mean line (x 7.890, 2.25 pt) runs 0.02 in from the "2" data label centered at 7.971: specify data labels left-of-center for bin 2 or accept. Markers ✓: median 6.75 + 16.5 × 5.7/140 = 7.4218; mean 7.8900; bin width 0.8143 ✓. No interval notation is student-facing ✓. |
| 14 | **O** | Headers "rating (1–5)" and "featured (0/1)" wrap to 2 lines (0.74 > 0.55), so the table grows and the marker y positions become wrong. **Fix:** header row 0.800 (table h 3.550): Products row y 2.850–3.400, Mean row 3.400–3.950; marker 1 at (7.470, 3.535); marker 2 → **BS-R7**. C1 T (1.71 / 1.75). |
| 15 | **O** | The "Curved: r near 0, but clearly related" caption needs 2 lines (≥ 0.59 at 1.0 spacing) in a 0.40 box, below the panel. **Fix:** compress the plot to cy = py + 1.500 − y/11 × 1.300, axis bottom py + 1.600, captions (px, py + 1.630, 3.250, 0.620) at line spacing 1.0. RECALL tag position is missing (BS-R11). Points: r from **printed coordinates** = +0.943 / +0.072 / −0.944 / 0.000 ✓. All points sit inside the axes. The minimum centre distance of 0.294 exceeds Ø 0.12, so no point touches another or the frame. r is not printed ✓. |
| 16 | **O** | 16b needs 4–5 lines (1.46–1.79 in > 1.40) and spills into the caveat at 6.10. The caveat text needs 2 lines in 0.45. **Fix:** 16b (0.604, 4.500, 5.850, 1.500); CAUTION tag (0.604, 6.100); caveat text (2.150, 6.050, 4.300, 0.760). Matrix: symmetric, diagonal 1.00, off-diagonal −0.80 ✓. No `rating` ✓. Scatter centres recompute to −0.7995 ✓, max deviation 0.0005 in; minimum centre distance 0.163 > Ø 0.14 ✓. Tick-label boxes unspecified (BS-R11). |
| 17 | P | "four things to check" ✓ |
| 18 | P | Rows exact ✓. All cells single-line (product_id header 1.35 in at 18 bold in 1.44 usable: T). Bracket spans rows 1–2 (2.950–3.950) ✓. No new canonical item ✓. |
| 19 | T | Rows 0.370 at 16 pt need 0.373 (BS-R13). "(missing)" ✓. |
| 20 | T | 20e 2 lines in 0.80 (T); 20f 2 lines ✓. No "%" ✓; "0.6" ✓. |
| 21 | **Collision** | 21a box (y 1.95–2.45) overlaps the edge labels at y 2.33–2.63. **Fix:** 21a h 0.380. 21e needs 2 lines (0.65 > 0.60): h 0.680. 21f T: h 0.800. Leader endpoint should stop at the dot edge (m9). Mapping ✓: band x 1.866 / 10.028; the dot at 80 has left edge 11.195, **1.167 in beyond the upper edge** ✓. Horizontal pitch 0.185 > Ø 0.160; stack pitch 0.180 ✓. No "P10" or "3.92" ✓. |
| 22 | T | Scale line above the panels ✓; P11 "Incoming entry (not in the table)" ✓; P10 $120 "a real expensive product" ✓. Right-panel internal coordinates are implied by mirroring (m7). The 15-pt MID_GRAY captions carry the key teaching cue: raise to 16 pt. Entry text 1.10 / 1.15 (T). No automatic-deletion implication ✓. |
| 23 | **Collision** | Endpoint label "$8" (0.23 in wide, left of the bar starting at 1.984) collides with the row-label box (to x 1.854). Endpoint positions are unspecified. **Fix:** place all four endpoint labels **above** their bar ends: (bar end − 0.300, bar y − 0.330, 0.600, 0.300), centered. Bars ✓: 1.984 → 3.160; 2.320 → 11.770. |
| 24 | P / T | Formula widths 3.37 in and 4.62 in at 28 pt, in 5.40 in usable ✓. U+2212 minus and U+2032 prime are present ✓. Mini-table rows 0.35 at 18 pt (needs 0.41): rows 0.400, table h 1.600 (ends at card +3.75 ✓). Right-card header coordinates are implied (m6). The formulas sit at different heights in the two cards (+1.85 vs +0.70); this follows the content order and is harmless. Mini example shows no "price", "$" or "Pxx" ✓. |
| 25 | P | P05 ($15) centre 2.381 sits **exactly on** the $15 boundary tick (m5). The "Low" (0.44 in) and "Mid" labels fit inside their 1.281-in segments, so the spec's reason for placing them below the band is incorrect; this is harmless. Label boxes are unspecified (BS-R11). Counts 4/4/2 ✓. |
| 26 | P | "is_Electronics" fits 1 line ✓. EXTEND tag ambiguity (m3). |
| 27 | P | Group boxes are 0.02 in off center (m4). |
| 28 | **O** | 28f needs 3 lines (1.05 > 0.90) and spills to 6.50, into the 28g row at y 6.42 (28g spans x 2.95–12.729). **Fix:** 28c h 0.450; 28d (8.100, 2.850, 4.629, 1.450); 28e (8.100, 4.350, 4.629, 0.750); 28f (8.100, 5.150, 4.629, 1.100). **Blueprint drift:** the RECALL · M6-R3 tag is missing (BS-R8). 28a T. Grid rows 0.360 at 16 pt (BS-R13). |
| 29 | T | 29g 3 lines 1.24 / 1.30 (T) |

## 6. Specific slide audits

- **Slide 7:** the dot geometry is deterministic, with no jitter.
  - In v1.1, the tallest stack (40 dots = 10 rows) tops out at py + 0.46, below the title at py + 0.30.
  - Dots: Ø 0.090, pitch 0.110, 4 per row.
  - Bins: 4 × pitch fits in 0.500.
  - The rightmost element in P4 ends at x 12.689.
  - The caption "Sample of 8 · one possible small sample" fits in 5.96 width.
  - The only defect is the text band spilling into the panels, fixed above.
- **Slide 10:** dots Ø 0.100 (stack pitch 0.115); mapping x = 6.200 + p × 6.2/130. See §8.
- **Slide 13:** histogram bars, axes and markers are mathematically correct. Defects are the label collision and the column overflow.
- **Slide 14:** 3 columns (price, rating, featured); values ✓; callout objects = 2. No subtitle or third object acts as a callout. The numbered markers are paired with callouts, not separate callouts.
- **Slides 15, 16, 18, 21, 22, 24:** as in §5.

## 7. Formula QA — **PATCH (BS-R5)**

- v1.1 already names `FORMULA_1` and `FORMULA_2`, which is a good structural anchor. However, the gate's "=" allowlist is **incomplete**.
- Slide 11 legitimately shows "A = {7, 7, 7, 7, 7}" and the B and C equivalents, and these are not on the list. A correct build would therefore **fail** the gate.
- **Patch:** make the structural check primary:
  1. Exactly two shapes named `S24_FORMULA_1` and `S24_FORMULA_2` on slide 24, with exact text match.
  2. No other shape on any slide has a name containing `FORMULA`.
  3. 0 OMML/equation objects deck-wide.
  4. A secondary regex screen for formula patterns — a `/`, `√`, `Σ` or `^` inside a parenthesized arithmetic expression — outside the two named shapes.
- The "=" allowlist then becomes **informational**, extended with slide 11's three set labels.

## 8. Slide 10 dot overlap — **PATCH (BS-R2)**

- Adjacent $2 steps are 2 × 6.2/130 = **0.0954 in** apart, which is less than Ø 0.100.

| Pair | Centre distance |
|---|---:|
| P01–P02 | 0.0954 |
| P02–P03 | 0.0954 |
| P06–P07 | 0.0954 |

- **UNINTENTIONAL_DOT_OVERLAPS = 3.**
- The P03/P04 stack at $12 is intentional; its centre distance is 0.149 in.
- **Patch:**
  - Ø **0.085** (gap 0.0104), stack pitch **0.100**.
  - Dot left = centre − 0.0425; dot top 4.515; stacked P04 top 4.415.
  - Regenerate the C.10 table from the mapping. The marker lines are unchanged.

## 9. Notes audit — PASS

- **Notes present on:** 2, 3, 5–10, 12–25, 27, 28.
- **Empty on:** 1, 4, 11, 26, 29. This matches blueprint §9.
- **Forbidden-term scan** (SHA, EMU, n − 1, left-closed, right-open, builder, build metadata, metadata, QA, maximum z, assessment, admission, M6-R4B, App Store, hash, source deck, Optional):
  - **1 hit:** "SHA" on slide 7. It is a false positive from "**sha**pe".
  - Real leaks: **0**.
- **BUILD_METADATA leakage into notes:** 0.
- **BS-I4 (slide 22):** both sentences are present and "Optional:" is absent ✓.
- **Slide 13:** the two sentences are separate paragraphs ✓.

## 10. Static print — PASS

- Slides 6, 13, 14 and 24 each have a REVEAL_ORDER and a complete STATIC_FINAL_STATE. No other slide has reveals.
- PDF export prints all objects, so the static PDF preserves reading order, labels, callouts, chart meaning and the position cue (F1–F3 are static objects).
- No meaning depends on animation.

## 11. Z-order — PASS (minor m9)

- §12 gives a deterministic 10-layer back-to-front order:
  - Bars sit below markers on slide 13.
  - The band sits below the dots on slide 21.
  - Tables and callouts are ordered.
  - Tags and labels sit above content.
  - Header and footer are on top.
- **Minor:** leader lines (layer 7) are drawn **over** dots (layer 5). The slide-21 leader is specified to end at the dot centre and would cross the mark, so it should end at the dot edge. The slide-28 leader endpoints are unspecified.

## 12. Tables — **PATCH (BS-R13)**

- The defaults are locked: header 0.55, borders, padding, alignment, banding.
- Per-table widths sum correctly:

| Table | Column-width sum |
|---|---:|
| 4 | 12.125 |
| 5b | 6.20 |
| 5d | 5.479 |
| 6 | 12.125 |
| 14 | 6.80 |
| 16 | 4.60 |
| 18 | 9.60 |
| 19 | 3.20 |
| 24 | 3.00 |
| 26 | 9.00 |
| 28 | 7.20 |

- **Defect:** no cell line-spacing rule. PowerPoint auto-grows rows, so tight rows (19: 0.370; 28: 0.360; 24: 0.350) and wrapped headers (6, 14) change the table height.
- **Patch:**
  - Cell line spacing 1.0 and space-after 0.
  - Apply the header and row fixes in §5.
  - Gate: rendered table height equals the spec height ± 0.02 in.

## 13. Missing-value display — PASS

- Locked convention: "(missing)", 16 pt italic MID_GRAY, with a 1 pt dashed CHARCOAL cell border.
- Never blank, NA, N/A, "—" or 0.
- The other blank cells on slide 28 are PANEL placeholders. They differ from missing cells by the absence of text and of a dashed border.

## 14. Charts and shapes — **PATCH (BS-R11)**

- Defaults are locked:
  - axes 1 pt MID_GRAY; no gridlines, legends, 3-D, shadows or gradients;
  - bars PALE with a navy outline; points CHARCOAL with a white 0.5 pt outline;
  - markers 2.25 pt solid or dashed; band PANEL with dashed edges.
- Because every chart is built from shapes, **no native chart theme can leak in** ✓.
- **Unspecified items (builder decisions):**
  - tick-label boxes and offsets, and whether tick marks are drawn and how long;
  - slide-13 data-label boxes;
  - slide-23 endpoint labels;
  - slide-25 segment and boundary labels;
  - inline tag coordinates on slides 13 and 15.
- **Patch:** add a chart-label rule, plus explicit boxes for the listed items:
  - x tick label (t − 0.300, axis_y + 0.050, 0.600, 0.300), centered;
  - y tick label (axis_x − 0.650, y − 0.150, 0.580, 0.300), right-aligned;
  - tick marks 0.060 in, outside.

## 15. Native editability — PASS

- All objects are editable text, native shapes, native tables or line/freeform icons.
- Picture objects: 0.
- No described object requires rasterization.

## 16. Validation gates

**Actual count:** v1.1 has **26 gate rows**: 25 in v1 plus POSITION_CUE.

> **Correction:** the v1 completion report stated "27 gates". The v1 file actually contains **25**.

| # | Gate | Class |
|---:|---|---|
| 1 | SLIDE_COUNT | MECHANICAL |
| 2 | SLIDE_SIZE | MECHANICAL (after BS-R1) |
| 3 | MASTERS / LAYOUTS | MECHANICAL |
| 4 | FONT_RUNS | MECHANICAL |
| 5 | MIN_FONT | **AMBIGUOUS:** "body ≥ 15 pt" depends on an undefined "body". Patch: role table by shape-name prefix (BS-R12). |
| 6 | OFF_SLIDE_OBJECTS / SAFE_ZONE | MECHANICAL |
| 7 | AUTOFIT | MECHANICAL for the 0-shrink flag; "0 text overflow" is MANUAL VISUAL. Split it. |
| 8 | PICTURE_OBJECTS / COPIED_VISUALS | MECHANICAL for the picture count; copied-composition check is MANUAL VISUAL |
| 9 | APP_STORE_REFERENCES | MECHANICAL (term scan) |
| 10 | FORMULAS | **AMBIGUOUS** until BS-R5 |
| 11 | SLIDE_14_CALLOUTS | MECHANICAL **only with a shape-naming rule** (BS-R6) |
| 12 | SLIDE_16_MATRIX | MECHANICAL |
| 13 | HISTOGRAM | MECHANICAL with named bars (BS-R6) |
| 14 | TOY_DATA | MECHANICAL with a per-slide expected-value map (BS-R6) |
| 15 | FEATURED | MECHANICAL |
| 16 | MISSING | MECHANICAL |
| 17 | P11 | MECHANICAL |
| 18 | SLIDE_21 | MECHANICAL |
| 19 | SLIDE_17 | MECHANICAL |
| 20 | POSITION_CUE | MECHANICAL for structure; the grayscale clause is MANUAL VISUAL |
| 21 | M6_R4B_LEAKAGE | MECHANICAL; governed term scan only ✓ |
| 22 | NOTES_FORBIDDEN_TERMS | MECHANICAL. Needs a word-boundary rule, because of the "shape"/SHA false positive. |
| 23 | NOTES_PRESENCE | MECHANICAL |
| 24 | PC2_GRAYSCALE | MANUAL VISUAL |
| 25 | STATIC_PRINT | MANUAL VISUAL, plus a mechanical PDF page count of 29 |
| 26 | RENDER | MANUAL VISUAL |

- **Tally (primary class):**
  - Mechanical: 17 (1–4, 6, 9, 11–19, 21–23).
  - Mixed mechanical + manual: 4 (7, 8, 20, 25).
  - Manual only: 2 (24, 26).
  - Ambiguous: 2 (5, 10).
  - Gate 11 is counted as mechanical, conditional on BS-R6.
- **Coverage gaps (BS-R10 / m10):** add gates for:
  - exact title strings;
  - slide-10 no "skew";
  - slide-13 marker x positions;
  - slide-24 mini-example isolation (no "price", "$" or "Pxx");
  - slide-28 terms and RECALL tags.
- **Requirement:** with BS-R6, every gate labeled mechanical runs without interpretation.

**M6-R4B term-scan scope:** the wording "0 by governed term scan only" is correct, and the record makes no held-content comparison. §18 phrases the boundary as a prohibition.

**Prohibited-text scan:**
- App Store, `admission.csv`, `library(`, `install.packages`, import/export, user-defined functions and assessment language appear in the spec **only** in prohibition and QA-gate text.
- They appear in **0** student-visible strings and **0** note strings.

## 17. Title and content conformance

- **Titles:** all 29 match frozen v1.3 and the blueprint.
- **But (BS-R10):** the per-slide headings on slides 6, 13, 14 and 24 append "(HIGH)" or "(MEDIUM)". A builder could copy these into H2.
  - **Patch:** add an explicit `TITLE_TEXT` per slide, or strip the markers and move density to the role line.
  - With that patch, **TITLE_DRIFT = 0**.
- **Teaching jobs:** every visible string implements the blueprint's VISIBLE_CONTENT. No claim was added or changed. **TEACHING_JOB_DRIFT = 0.**
- **Blueprint drift:** 2 items, both must be patched:
  1. **BS-R8:** slide 28 omits the blueprint label **RECALL · M6-R3**. Content v1.3 also requires it: "**RECALL** M6-R3 rows/columns".
  2. **BS-R9:** the type-scale deviations from blueprint §3 listed in §3 of this record.
- **CONTENT_DRIFT = 0.**

## 18. Builder-judgment test

**SUBSTANTIVE_BUILDER_DECISIONS = 10** (the requirement is 0):
1. Internal layout of the slide-13 text column and its inline-tag positions.
2. Tick-label, tick-mark and data-label geometry on every chart.
3. Slide-23 endpoint-label positions.
4. Slide-25 segment and boundary label boxes.
5. Slide-15 RECALL tag position.
6. Slide-14 marker 2 target (BS-R7).
7. Whether H2 includes the "(HIGH)" / "(MEDIUM)" heading markers.
8. Slide-26 EXTEND tag (m3).
9. Slide-2 roadmap text format.
10. Table cell line spacing and row growth.

**Classified harmless:**
- Icon line-art details (3, 9, 17, 22), provided icons stay native and text-labeled.
- Right-card and right-panel mirroring on 22 and 24, if stated explicitly (m6, m7).

## 19. Patch register

### Required before freeze (apply in v1.2)

| ID | Patch |
|---|---|
| BS-R1 | Declare EMU authority: `cx=12192000`, `cy=6858000`; EMU = round(in × 914400); no recomputation from 13.333. |
| BS-R2 | Slide 10 dots Ø 0.085, stack pitch 0.100; regenerate C.10. |
| BS-R3 | Text-overflow geometry fixes as in §5 for slides 2, 5, 6, 7, 9, 13, 14, 15, 16 and 28. |
| BS-R4 | Collision fixes on slides 10, 12, 13, 21 and 23, as in §5. |
| BS-R5 | Structural formula validator; extend the allowlist with slide-11 set labels. |
| BS-R6 | Shape-naming convention `S{nn}_{ID}` (e.g., `S14_C1`, `S13_BAR_1`, `S24_FORMULA_1`, `F3_SEG_A`) and a per-slide expected-value map for TOY_DATA. |
| BS-R7 | Slide 14: anchor marker 2 to the **rating** "Products with a value" cell. Use a marker at the cell's right edge inside the table, (5.904 − 0.300, row centre − 0.140), or run the leader to the rating cell centre (5.304, 3.125) after BS-R3. Currently it sits next to the **featured** count. |
| BS-R8 | Slide 28: add a RECALL · M6-R3 tag (4.300, 1.950, 2.200, 0.340) beside the column label, with 28a narrowed to w 3.600, per the blueprint and v1.3. |
| BS-R9 | Type scale: chart and table labels 15 → 16 pt; slide 12 key statement → 24 pt bold (box h 1.600); slide 13 categorical line → body size, CHARCOAL; plus a project-lead ruling on 18-pt secondary text (proposed BS-I5). |
| BS-R10 | Explicit `TITLE_TEXT` for every slide; drop density markers from the title source; add title, no-"skew", marker-x, mini-isolation and slide-28 gates. |
| BS-R11 | Chart-label geometry rule and explicit boxes for the slide-13/15 tags, slide-23 endpoint labels and slide-25 labels. |
| BS-R12 | MIN_FONT gate by role table. Split AUTOFIT into a mechanical part (flag) and a manual part (render). Add word boundaries to the notes scan. |
| BS-R13 | Table cell line spacing 1.0; row heights fixed per §5; rendered-height gate. |

### Minor (recommended; not freeze-blocking)

| ID | Patch |
|---|---|
| m1 | Token provenance column; F1 and the label as R5-new; extend BS-I3 to blueprint §3's top-margin prose. |
| m2 | Slide-2 roadmap: single "X · name" format; pitch 1.744 so box 7 ends ≤ 12.729. |
| m3 | Slide 26: rule whether the EXTEND · M6-R4A tag appears. The blueprint VISIBLE_CONTENT says "EXTEND:", but its LABELS list omits it (proposed BS-I6; project-lead ruling). |
| m4 | Slide 27 group-box y = 3.350 / 4.730 / 5.900 (true centres of the fine-box spans). |
| m5 | Slide 25: P05 ($15) is centred on the boundary tick. Draw ticks below the band only, so the dot reads as starting the Mid tier, or accept. Its tier is stated in text. |
| m6 | Slide 24: state the right-card header and element coordinates explicitly. |
| m7 | Slide 22: state the right-panel coordinates explicitly; entry captions at 16 pt. |
| m8 | Slide 11: literal B and C label strings. |
| m9 | Leader endpoints at mark or cell edges (slides 21 and 28). |
| m10 | Correct the gate count in records (v1 = 25; v1.1 = 26). |
| m11 | Lock the chevron preset (`homePlate` / `chevron`) and `adj`, and the text-inset area (slides 2 and 29). |
| m12 | Single-line boxes that are 0.01–0.06 in short (5c, 7 titles, 10/13 marker labels, 12 titles, 28a, F2): add +0.05 in height. |
| m13 | Per-slide ROLE, STROKES and FILLS fields are mostly carried by defaults. Restate them for completeness. |

**Blocking patches (BLOCKED-class): 0.** **Required-before-freeze patches: 13.** **Minor: 13.**

## 20. Summary

| Item | Result |
|---|---|
| Overall verdict | **PASS-WITH-PATCHES** |
| Build spec ready for freeze | **NO.** Apply BS-R1 to BS-R13 in v1.2, then run targeted verification. |
| Content drift | 0 |
| Blueprint drift | 2 (BS-R8, BS-R9), patchable |
| Arithmetic | All values correct |
| Off-slide objects predicted | 0 |

## 21. Integrity

- Build spec v1 and v1.1: not modified. No v1.2 created.
- No PPTX, PDF, PNG, script or OOXML created.
- Content changes: 0. Blueprint changes: 0.
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- The system Arial fonts were read for width metrics only.
- Git staged: 0. Commit: none. Push: none.
