# BUSS256 M6-R5 — Seminar 5 Data Management I: PPTX Build Spec v1

**Status: M6-R5 PPTX BUILD SPEC v1 = DRAFT — PROJECT-LEAD REVIEW REQUIRED**

*Created 2026-10-09. This is an implementation specification only: no PPTX, PDF, PNG, OOXML, or build script was produced. It translates the frozen production blueprint into deterministic build instructions and makes no content decision.*

## 1. Authority

| Item | Value |
|---|---|
| Frozen content authority | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md`, SHA-256 `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Frozen production blueprint | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md`, SHA-256 `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` (APPROVED / FROZEN per `docs/rounds/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_FREEZE.md`) |
| Verification | `docs/rounds/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1_TARGETED_VERIFICATION.md` |
| Repository at drafting | `buss256/2027-refresh` @ `64b2cd8154241d0d626f2cd935db1167a1d8103c` |
| Consistency reference (read-only) | `teaching/BUSS256/02_working/M6_R4A/BUSS256_M6_R4A_PPTX_BUILD_SPEC_v1.md` and the measured M6-R4A build geometry (`work/m6_r4a_build_v1/.build/build.mjs`, read-only). Where the older convention conflicts with the M6-R5 blueprint, **M6-R5 wins**. |

**Precedence:** frozen blueprint per-slide entries > blueprint summary tables > this spec's defaults. When this spec states a value, the builder must not change it.

## 2. Interpretation register (build-level decisions; no content change)

| ID | Issue in frozen sources | Resolution in this spec | Content impact |
|---|---|---|---|
| BS-I1 | Blueprint §3 lists slide 19 under L-CONCEPT; the slide-19 entry says L-DATA. | Use **L-DATA**. The per-slide entry is authoritative, per the freeze record ("the per-slide specification remains authoritative"). | None |
| BS-I2 | Blueprint §3 specifies a "7-segment position bar", but the architecture has blocks 0 and A–G (eight). | The bar has **7 segments, labeled A–G**. Block-0 slides: slide 1 shows no footer cue; slide 2 shows the tag "0 · Open" with **no segment filled**. | None (navigation aid only) |
| BS-I3 | M6-R4A build spec states a 0.35 in top margin, but the built M6-R4A deck places the institution line at y 0.229 in. | Adopt the **measured M6-R4A deck geometry** for the header band (§3) so modules match visually. Safe zones are defined in §3. | None |
| BS-I4 | Slide-22 note contains an item marked "Optional". | Insert both note sentences; drop the word "Optional:". Both are approved, student-safe text. | None |

**Project-lead review requested for BS-I2 only.** It is a navigation-cue interpretation.

## 3. Global geometry

| Item | Value |
|---|---|
| Slide size | 13.333 × 7.500 in = **12,192,000 × 6,858,000 EMU** (16:9) |
| Coordinate unit in this spec | inches, 3 decimals; origin top-left; 1 in = 914,400 EMU |
| LEFT_SAFE | 0.450 in (no object x < 0.450) |
| RIGHT_SAFE | 0.450 in (no object right edge > 12.883) |
| TOP_SAFE | 0.200 in (no object y < 0.200) |
| BOTTOM_SAFE | 0.200 in (no object bottom > 7.300) |
| Content alignment edges | left x = **0.604**; right edge x = **12.729** (width 12.125), the M6-R4A measured content lines |
| Header band | y 0.200–1.350: institution line, title, rule |
| Body zone | **x 0.604–12.729, y 1.950–6.850** (12.125 × 4.900) |
| Upper-right label zone | right-aligned to x 12.729, **y 1.420–1.780** |
| Footer band | y 6.950–7.300: section cue (left), slide number (right) |

**Standard header objects (all layouts except where noted):**

| ID | Object | x | y | w | h | Text / style |
|---|---|---:|---:|---:|---:|---|
| H1 | Institution line | 0.604 | 0.229 | 4.792 | 0.250 | "KOREA UNIVERSITY BUSINESS SCHOOL" · 13 pt bold ACCENT_1 · left |
| H2 | Title | 0.604 | 0.604 | 12.125 | 0.604 | Slide title · 32 pt bold PRIMARY_NAVY · left · single line · vertical middle |
| H3 | Title rule | 0.604 | 1.313 | 12.125 | 0.031 | Filled rectangle LIGHT_GRAY, no outline |
| F1 | Slide number | 12.208 | 7.000 | 0.521 | 0.250 | Two digits ("01"–"29") · 12 pt MID_GRAY · right |
| F2 | Section tag | 0.604 | 7.000 | 3.600 | 0.250 | e.g., "C · Summarize" · 12 pt MID_GRAY · left (omit on slide 1) |
| F3 | Position bar | 4.300 | 7.005 | 2.880 | 0.240 | 7 segments A–G; each 0.360 × 0.240; gap 0.060; segment x = 4.300 + k × 0.420 (k = 0…6). Letter 12 pt centered. **Current block:** fill PRIMARY_NAVY, 1 pt PRIMARY_NAVY border, white bold letter. **Others:** no fill, 0.75 pt LIGHT_GRAY border, MID_GRAY regular letter. Omitted on slide 1; no segment filled on slide 2. |

**Section tags by slide:**

| Slides | Tag | Filled segment |
|---|---|---|
| 2 | "0 · Open" | none |
| 3–5 | "A · Data for a business question" | A |
| 6–8 | "B · Variables and samples" | B |
| 9–16 | "C · Summarize" | C |
| 17–22 | "D · Data quality" | D |
| 23–27 | "E · Preparation" | E |
| 28 | "F · Dimensionality" | F |
| 29 | "G · Close" | G |

## 4. Font policy and type scale

- **Arial only.** Every text run explicitly sets `latin`, `ea` and `cs` typeface = "Arial".
- Theme major and minor fonts = Arial. No embedded fonts. Prohibited: Aptos, Calibri, Helvetica, Times New Roman, MS PGothic, Wingdings, Nanum, or any other family.
- Symbols use Arial-supported Unicode only: − (U+2212), ′ (U+2032), ≠, ≥, ±, →, •, ·, Ø (QA only).
- **Color for student-visible text** is CHARCOAL unless stated otherwise.

| Role | Size (pt) | Weight | Notes |
|---|---:|---|---|
| Slide title (H2) | 32 | Bold | PRIMARY_NAVY |
| Title-slide main title | 44 | Bold | PRIMARY_NAVY (slide 1) |
| Institution line (H1) | 13 | Bold | ACCENT_1 |
| Key statement | 24–26 | Bold | As specified per slide |
| Major body | 22 | Regular / bold as specified | — |
| Secondary body | 20 | Regular | — |
| Callout text | 18 | Regular; lead phrase bold | — |
| Table header | 18 | Bold | — |
| Table cell | 18 | Regular | **Dense tables (slides 6, 19, 28): 16** |
| Chart axis title | 16 | Regular | — |
| Chart tick / data label | 15 | Regular | — |
| Annotation / caption | 15–16 | Regular | — |
| Formula | 28 | Regular | Slide 24 only |
| Upper-right label (ILLUSTRATIVE / MINI) | 13 | Bold | PRIMARY_NAVY, all caps |
| Inline tag (RECALL / EXTEND / RULE OF THUMB / NOT A RULE / CAUTION / Preview) | 13 | Bold (RECALL/EXTEND italic) | — |
| Footer (F1, F2, F3) | 12 | Regular | **Minimum anywhere: 12 pt** |

**Spacing:**
- Title line spacing 1.0. Body line spacing 1.10 (110%). Space after paragraph 6 pt. No space before.
- Bulleted lists use "•" (U+2022, Arial) with a 0.25 in hanging indent.
- Text box insets: 0.05 in left/right, 0.03 in top/bottom unless stated.
- Autofit **off** for every text box (shrink-on-overflow forbidden); overflow is a QA failure.

## 5. Palette, strokes, grayscale behavior

| Token | Hex | Use |
|---|---|---|
| PRIMARY_NAVY | `#1F3B68` | Titles, label borders, current-segment fill, primary outlines |
| CHARCOAL | `#202124` | Body text, chart marks, scatter points, marker lines |
| MID_GRAY | `#5F6772` | Secondary text, axes, footer, RECALL tags |
| LIGHT_GRAY | `#B8BCC2` | Title rule, inactive segments, gridless light borders |
| BACKGROUND | `#FFFFFF` | Slide background (solid; no gradient) |
| PANEL | `#F2F4F7` | Table banding, card fill, band fill on slide 21 |
| PALE | `#E8EEF7` | Histogram bars, range bars |
| ACCENT_1 | `#8B1737` | Institution line only |
| ACCENT_2 | `#A47A21` | Reserved; **not used** in M6-R5 |

**Strokes:**

| Stroke | Spec |
|---|---|
| Card outline | 1.5 pt PRIMARY_NAVY solid |
| Emphasis outline ("today", slide 2) | 3 pt PRIMARY_NAVY solid |
| Dashed caveat border | 1.25 pt CHARCOAL, dash pattern "dash" (OOXML `prstDash="dash"`) |
| Axis | 1 pt MID_GRAY solid |
| Median / "solid" marker | 2.25 pt CHARCOAL solid |
| Mean / "dashed" marker | 2.25 pt CHARCOAL `dash` |
| Leader line | 1.25 pt CHARCOAL solid, no arrowhead |
| Bracket | 1.5 pt CHARCOAL |

**PC-2 rules:**
- Color never carries meaning alone. Every distinction uses at least one of: text label, position, shape, border style (solid vs. dashed), line style, icon, or numbering.
- No red/green semantics anywhere.
- All fills are light (PANEL/PALE) with dark text, so grayscale contrast stays at least the WCAG AA equivalent.

## 6. Package architecture

| Item | Value |
|---|---|
| Slide masters | **1**: "BUSS256-2027" |
| Layouts | **6**: L-TITLE, L-BRIDGE, L-CONCEPT, L-COMPARE, L-DATA, L-CLOSE |
| Theme fonts | Major Arial, minor Arial |
| Theme colors | dk1 `#202124` · lt1 `#FFFFFF` · dk2 `#1F3B68` · lt2 `#F2F4F7` · accent1 `#1F3B68` · accent2 `#8B1737` · accent3 `#5F6772` · accent4 `#B8BCC2` · accent5 `#E8EEF7` · accent6 `#A47A21` · hlink `#1F3B68` · folHlink `#8B1737` |
| Footer / slide number | Built as **static text objects** F1–F3 on each slide (not master placeholders), so the static PDF is deterministic |
| Notes master | Default notes page; Arial 12 pt; notes text = blueprint SPEAKER_NOTES only (§14) |
| Transitions | None |
| Animations | Only the reveal groups listed per slide (§13); "appear" effect; on click |
| Object types | Native shapes, text boxes, tables, lines. **No pictures, no SmartArt, no OLE, no screenshots, no embedded fonts.** Charts are composed from native shapes (rectangles, ellipses, lines, text) at the coordinates in Appendix C. Native chart objects are not used, to keep coordinates deterministic. |

## 7. Layout families

All layouts share H1–H3, F1–F3 and the body zone (§3) unless stated.

| Layout | Use | Body structure defaults |
|---|---|---|
| L-TITLE | 1 | No H2/H3 title bar. Title block per slide 1. No F2/F3. |
| L-BRIDGE | 2 | Key statement band y 1.950–2.750; flow band y 3.200–4.850; roadmap band y 5.550–6.400 |
| L-CONCEPT | 3, 6, 8, 9, 17, 27, 28 | Full-width body; card grid or table; card gutter 0.200 |
| L-COMPARE | 4, 11, 22, 24, 26 | Two equal columns: left x 0.604 (w 5.900), right x 6.829 (w 5.900), gutter 0.325; or a full-width comparison table |
| L-DATA | 5, 7, 10, 12, 13, 14, 15, 16, 18, 19, 20, 21, 23, 25 | Data object (table/chart) plus a text column; chart plot areas per Appendix C |
| L-CLOSE | 29 | Flow band y 2.200–3.500; two-question band y 4.250–5.550; prompt y 5.850–6.400 |

**Card defaults:**
- Corner radius 0.06 in (rounded rectangle, `adj` = 6%).
- Fill BACKGROUND or PANEL as specified; outline 1.5 pt PRIMARY_NAVY.
- Inner padding 0.15 in.

## 8. Label and tag system

| Label | Placement | Geometry | Style |
|---|---|---|---|
| ILLUSTRATIVE EXAMPLE | Upper-right zone | x 10.029, y 1.420, w 2.700, h 0.360 | White fill; 1.5 pt PRIMARY_NAVY solid border; 13 pt bold PRIMARY_NAVY caps; centered; insets 0.08 |
| MINI EXAMPLE | Upper-right zone (slide 24) | x 10.829, y 1.420, w 1.900, h 0.360 | Same as above |
| Stacking | If two upper-right labels | The second label sits immediately left of the first with a 0.120 gap (right edge = first.x − 0.120) | Not needed in M6-R5 (max one per slide) |
| RECALL · M6-Rx / EXTEND · M6-R4A | Inline, at the start of the recalled line | w 2.200, h 0.340 | White fill; 1 pt MID_GRAY solid border; 13 pt bold *italic* MID_GRAY; plus a 2.25 pt MID_GRAY vertical bracket line 0.05 left of the tag spanning the tag height |
| RULE OF THUMB / NOT A RULE / CAUTION | Inline, at the start of its line | w 2.100 (RULE OF THUMB), 1.600 (NOT A RULE), 1.400 (CAUTION), h 0.360 | White fill; 1.25 pt CHARCOAL **dashed** border; 13 pt bold CHARCOAL caps |
| "Preview · preparation step (see slide 9)" | Inline (slide 13) | w 4.000, h 0.340 | Same as RULE OF THUMB style (dashed), sentence case |
| Numbered callout marker | On callouts and target cells (slide 14) | Circle Ø 0.280 | White fill; 1.5 pt PRIMARY_NAVY; 16 pt bold PRIMARY_NAVY digit |

## 9. Table, chart, equation, callout rules

**Tables (native PowerPoint tables):**
- Header row height 0.550 (slide-specific overrides stated).
- Header: 18 pt bold CHARCOAL, bottom border 1.5 pt PRIMARY_NAVY, no fill.
- Body rows: 18 pt regular (dense 16); row bands alternate BACKGROUND / PANEL starting BACKGROUND.
- Inner horizontal borders 0.75 pt LIGHT_GRAY; no vertical borders unless stated; outer border none.
- Cell padding 0.08 in left/right, 0.04 in top/bottom.
- Text left-aligned; numbers right-aligned.
- **Missing value display:** the text "(missing)" in 16 pt *italic* MID_GRAY, cell border 1 pt `dash` CHARCOAL. Never blank, never 0, never color alone.

**Charts (native shapes):**
- No 3-D, no gradients, no shadows, no gridlines, no legends.
- Axes 1 pt MID_GRAY. Axis titles 16 pt; tick labels 15 pt MID_GRAY.
- Histogram bars: fill PALE, 1 pt PRIMARY_NAVY outline, 0.000 gap between bins.
- Scatter and dot marks: CHARCOAL filled ellipses (sizes per Appendix C) with a 0.5 pt white outline.
- Markers and captions per §5 strokes.

**Equations:**
- Native editable text: Arial 28 pt, centered in a 0.80 in high box, with no rasterization and no equation-editor images.
- **Exactly two formulas in the deck, both on slide 24.** Nowhere else may a formula-shaped expression appear (e.g., range is written in words on slide 12).

**Callouts:**
- Rounded rectangle, white fill, 1.5 pt PRIMARY_NAVY border.
- Numbered marker at top-left (§8); leader line from the callout's left edge midpoint to the target marker.

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
- price: mean 28.0 · median 16.5 · sample SD 33.6 · min 8 · max 120 · range 112.
- units_sold: range 900 · sample SD 289.9.
- rating: observed 8 · missing 2 (P04, P08) · mean 4.0 · sample SD 0.8.
- featured: ones 6 · zeros 4 · mean 0.6 · sample SD 0.5.
- **r(price, units_sold) = −0.7995 → −0.80.**
- Histogram (left-closed / right-open, build-only): 6, 2, 1, 0, 0, 0, 1 (total 10).
- Shipping fee: nine at 5, one at 6 → range 1, SD 0.32.
- Slide 21 schematic: mean 51.2, SD 7.35, band 29.14–73.26, z(80) = 3.92.
- Mini example: 10 → 0, 20 → 0.33, 40 → 1.
- **Sample SD (n − 1) is a build convention only. It is never shown or taught.**

## 11. Slide-by-slide specification

Shared conventions for every entry:
- H1–H3 and F1–F3 apply unless stated.
- Coordinates are in inches: (x, y, w, h).
- "Label" means the upper-right label (§8).
- **REVEAL** groups are on click; **STATIC_FINAL_STATE** is what prints.
- **EXCL** = BUILD_METADATA exclusions (never in notes or on the slide).
- Chart coordinates are in Appendix C.

---

### Slide 1 — Data Management I
- **Layout / role:** L-TITLE · open
- **Title box:** no H2/H3
- **Label:** none

**Objects:**

| ID | Type | x | y | w | h | Text | Font |
|---|---|---:|---:|---:|---:|---|---|
| 1a | text | 0.604 | 2.300 | 12.125 | 0.450 | "SEMINAR 5 · WEEK 4" | 20 bold MID_GRAY |
| 1b | text | 0.604 | 2.850 | 12.125 | 1.100 | "Data Management I" | 44 bold PRIMARY_NAVY |
| 1c | rect | 0.604 | 4.150 | 5.500 | 0.060 | — | PALE fill, no line |
| 1d | text | 0.604 | 4.450 | 12.125 | 0.500 | "BUSS256 · Spring 2027" | 20 MID_GRAY |

- **Footer:** F1 only.
- **PC-2:** text only. **Reveal:** none. **Static:** complete.
- **Notes:** none.
- **EXCL:** no copied logo or photo; text institution line only.
- **Source:** source slide 3.
- **QA:** no image objects; F2/F3 absent.

### Slide 2 — Before the technique: understand and prepare the data
- **Layout / role:** L-BRIDGE · bridge
- **Label:** none
- **Footer:** F2 "0 · Open"; F3 no segment filled (BS-I2)

**Objects:**

| ID | Type | x | y | w | h | Content |
|---|---|---:|---:|---:|---:|---|
| 2a | text | 0.604 | 1.950 | 12.125 | 0.800 | "What does it mean to prepare and understand data before applying an analytical technique?" · 24 bold PRIMARY_NAVY |
| 2b | text | 0.604 | 2.850 | 3.000 | 0.300 | "Workflow order" · 15 MID_GRAY |
| 2c | chevron | 0.604 | 3.350 | 2.850 | 1.350 | "Store data in rows and columns (M6-R3)" · 18 |
| 2d | chevron (emphasis) | 3.694 | 3.200 | 2.850 | 1.650 | "Understand and prepare the data" + new line "today" (bold) · 18; 3 pt PRIMARY_NAVY outline |
| 2e | chevron | 6.784 | 3.350 | 2.850 | 1.350 | "Choose a technique for the question (M6-R4A)" · 18 |
| 2f | chevron | 9.874 | 3.350 | 2.850 | 1.350 | "Apply analytics (later modules)" · 18 |
| 2g | RECALL tag | 0.604 | 4.950 | 2.200 | 0.340 | "RECALL · M6-R3" |
| 2h | RECALL tag | 6.784 | 4.950 | 2.200 | 0.340 | "RECALL · M6-R4A" |
| 2i–2o | 7 roadmap boxes | x = 0.604 + k × 1.745 (k = 0…6) | 5.550 | 1.660 | 0.850 | "A" + line break + "Data for a business question" / "B · Variables and samples" / "C · Summarize and understand" / "D · Data quality" / "E · Preparation / representation" / "F · Dimensionality" / "G · Close" · letter 16 bold, name 15; 1 pt LIGHT_GRAY outline, no fill |

- **Fills:** chevrons PANEL; 2d BACKGROUND.
- **PC-2:** "today" text plus the 3 pt outline and size.
- **Reveal:** none.
- **Notes:** "This is the order of the analysis workflow, not the order of our seminars. You chose techniques in Seminar 4; today asks what must be true of the data first."
- **EXCL:** M-12 annotation.
- **Source:** source slide 4.
- **QA:** guiding question verbatim; "Workflow order" present.

### Slide 3 — Data for a business question
- **Layout / role:** L-CONCEPT
- **Label:** none

**Tiles** (rounded cards, PANEL fill, 1.5 pt navy):
- Columns x = 0.604 / 4.714 / 8.824 (w 3.905); rows y = 1.950 / 3.900 (h 1.800).

| Tile | Source (20 bold at tile + (0.700, 0.120), w 3.050, h 0.450) | Question (18 at tile + (0.200, 0.750), w 3.500, h 0.900) | Icon (0.450 sq. at tile + (0.150, 0.150); 1.5 pt CHARCOAL line art, no fill) |
|---|---|---|---|
| 1 | "Transactions" | "What sells together?" | Receipt: rectangle + 3 horizontal lines |
| 2 | "Card records" | "Which charges look unusual?" | Rounded rectangle + stripe |
| 3 | "Web logs" | "Where do visitors leave?" | Window: rectangle + top bar |
| 4 | "Surveys" | "How satisfied are customers?" | Square + check line |
| 5 | "Service calls" | "What do customers complain about?" | Speech bubble (`wedgeRoundRectCallout`) |
| 6 | "Documents" | "What do reviews mention?" | Page with folded corner (`foldedCorner`) |

**Other objects:**
- 3g RECALL tag (0.604, 6.000, 2.200, 0.340) "RECALL · M6-R1".
- 3h text (2.950, 5.950, 9.779, 0.450): "Data come in many forms, structured and unstructured." · 18.

- **PC-2:** text plus icon shape.
- **Reveal:** none.
- **Notes:** "Start from the business question, then ask which data could answer it."
- **EXCL:** no company names or claims; zero images.
- **Source:** source slides 6 + 40.
- **QA:** 0 picture objects; each tile ≤ 2 lines.

### Slide 4 — Primary vs. secondary data
- **Layout / role:** L-COMPARE
- **Label:** none

**Table 4a** (0.604, 1.950, 12.125, 3.550): columns 2.400 / 4.862 / 4.863; header 0.550; 3 rows × 1.000.

| | Primary | Secondary |
|---|---|---|
| Definition | Data you collect firsthand for a specific purpose. | Data collected by others for a different purpose, reused by you. |
| Typical methods | Surveys, interviews, experiments, A/B tests | Government statistics, industry reports, academic datasets, partner data |
| Example | A store surveys its own customers. | A store reuses published industry statistics or a partner's sales data. |

**Text 4b** (0.604, 5.800, 12.125, 0.700): "Secondary data were collected for someone else's purpose. Check their fit." · 24 bold.

- **PC-2:** headers in text.
- **Reveal:** none.
- **Notes:** none.
- **EXCL:** no "App Store" or "2013".
- **Source:** source slide 7.
- **QA:** text scan clean.

### Slide 5 — Records, transactions, and one analysis table
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 5a caption (0.604, 1.950, 6.200, 0.350): "Record data: one row per product, one column per attribute" · 18 bold.
- 5b table (0.604, 2.350, 6.200, 2.500): columns product_id 1.400 / category 1.800 / price ($) 1.400 / units_sold 1.600; header 0.500; rows P01–P04 × 0.500 (values from §10).
- 5c caption (7.250, 1.950, 5.479, 0.350): "Transaction data: each order is a set of items" · 18 bold.
- 5d table (7.250, 2.350, 5.479, 2.000): columns order_id 1.600 / items 3.879; rows "O-101 | P01, P05", "O-102 | P02", "O-103 | P04, P06, P07".
- 5e RECALL tag (0.604, 5.300, 2.200, 0.340) "RECALL · M6-R3" + 5f text (2.950, 5.250, 9.779, 0.450) "Rows = observations, columns = variables." · 18.
- 5g RECALL tag (0.604, 5.850, 2.200, 0.340) "RECALL · M6-R4A" + 5h text (2.950, 5.800, 9.779, 0.450) "Transaction data feed association." · 18.

- **PC-2:** captions; grid vs. list.
- **Reveal:** none.
- **Notes:** "The orders view is another view of the same store."
- **EXCL:** orders reference P01–P07 only.
- **Source:** source slides 8 + 9.
- **QA:** values equal §10.

### Slide 6 — Types of variables (HIGH)
- **Layout / role:** L-CONCEPT
- **Label:** ILLUSTRATIVE EXAMPLE

**Table 6a** (0.604, 1.950, 12.125, 4.150): columns 2.200 / 2.900 / 3.000 / 4.025; header 0.550; 6 rows × 0.600; **cells 16 pt** (dense). Exact cells (blueprint M-01):

| Column | Type | Example values (from the table) | What values are possible |
|---|---|---|---|
| `product_id` | identifier | P01, P10 | Labels only; not a quantity |
| `category` | categorical, unordered | Books, Home, Electronics | One of the listed categories |
| `price` | numeric, continuous | 8, 120 | Any non-negative amount of money |
| `units_sold` | numeric, discrete count | 40, 940 | Whole numbers 0, 1, 2, … |
| `rating` | ordered | 3, 5 | Only 1, 2, 3, 4 or 5 |
| `featured` | binary | 0, 1 | Only 0 or 1 |

**Other objects:**
- 6b text (0.604, 6.200, 9.600, 0.600): "Numeric-looking codes can be categorical (e.g., a product code or zip code). A variable's type limits which values are possible." · 18.
- 6c EXTEND tag (10.429, 6.250, 2.300, 0.340): "EXTEND · M6-R4A".

- **Reveal:** rows 1→6 (6 clicks), then 6b + 6c.
- **Static:** full table + footer line.
- **Notes:** "Recall from Seminar 4 that category codes need interpretation; today we name the types."
- **EXCL:** M-01 note.
- **Source:** source slide 10.
- **QA:** 24 cells non-empty; no clipping at 16 pt.

### Slide 7 — Samples and representativeness
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Text:**
- 7a (0.604, 1.950, 7.600, 0.850): "A sample should reflect the population on the attributes that matter." / "Random sampling helps avoid systematic bias." · 20.
- 7b (8.400, 1.950, 4.329, 0.850): "Larger sample → shape captured better" / "…but more cost and effort" · 18.

**Panels** (no border):

| Panel | x | y | w | h | Panel title (16 bold, at panel (x, y, 5.960, 0.300)) |
|---|---:|---:|---:|---:|---|
| P1 | 0.604 | 2.850 | 5.960 | 1.950 | "Population (200 customers)" |
| P2 | 6.769 | 2.850 | 5.960 | 1.950 | "Sample of 100" |
| P3 | 0.604 | 4.900 | 5.960 | 1.950 | "Sample of 30" |
| P4 | 6.769 | 4.900 | 5.960 | 1.950 | "Sample of 8 · one possible small sample" |

**Dot-histogram rule per panel (px, py):**
- Baseline y = py + 1.550.
- Bins k = 0…9 for ages 20 + 5k; bin left = px + 0.450 + k × 0.500 (width 0.500).
- Dots: Ø 0.090, pitch 0.110, 4 per row, filled bottom row first, then left→right.
  - Dot j (0-based) in bin k: column c = j mod 4, row r = floor(j/4).
  - Dot left = bin left + 0.030 + c × 0.110; dot top = baseline − 0.100 − r × 0.110.
- Counts per bin (ages 20, 25, …, 65):

| Panel | Counts | Total |
|---|---|---|
| P1 | 20, 40, 26, 10, 4, 10, 26, 40, 20, 4 | 200 |
| P2 | 10, 20, 13, 5, 2, 5, 13, 20, 10, 2 | 100 |
| P3 | 3, 6, 4, 1, 1, 1, 4, 6, 3, 1 | 30 |
| P4 | 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 | 8 |

- Axis line: (px + 0.450, baseline + 0.010) to (px + 5.450, same), 1 pt MID_GRAY.
- Tick labels "20", "30", "40", "50", "60" centered at bin centers of ages 20, 30, 40, 50, 60, at y baseline + 0.040, h 0.260, 15 pt.
- Axis word "age" at (px + 5.470, baseline − 0.050, 0.450, 0.260), 15 pt.
- **No jitter; no color grouping.**

- **PC-2:** stacked position + titles.
- **Reveal:** none.
- **Notes:** "Representativeness is about the attributes that matter for the question. Small samples can hide the shape."
- **EXCL:** counts are build data.
- **Source:** source slides 11 (part) + 12.
- **QA:** dot totals 200 / 100 / 30 / 8; no figure resembling the old 2-D sampled-shape image.

### Slide 8 — How much data?
- **Layout / role:** L-CONCEPT
- **Label:** none

**Objects:**
- 8a (0.604, 1.950, 12.125, 1.000): "More relevant, representative, high-quality data can help, but more observations are not automatically better." · 24 bold.
- 8b–8d cards (y 3.150, h 1.500, w 3.905; x 0.604 / 4.714 / 8.824; PANEL): "A biased sample stays biased." / "Poor measurement stays poor." / "Collecting and managing data costs time and money." · 20.
- 8e RULE OF THUMB tag (0.604, 5.000, 2.100, 0.360) + 8f text (2.850, 4.950, 9.879, 0.450): "Keep more observations than variables." · 20.
- 8g (0.604, 5.600, 6.000, 0.350): "→ slide 28" · 16 MID_GRAY.

- **PC-2:** dashed tag text.
- **Reveal:** none.
- **Notes:** "A tall table (many rows, few columns) is usually easier to learn from than a wide one; we revisit this on slide 28."
- **EXCL:** —
- **Source:** source slide 11 (part).
- **QA:** RULE OF THUMB tag present; no "always".

### Slide 9 — Two questions about data
- **Layout / role:** L-CONCEPT
- **Label:** none

**Objects:**
- 9a (0.604, 1.950, 12.125, 0.500): "First we summarize the data so we can see both." · 20.
- 9b card (0.604, 2.650, 5.900, 3.900) BACKGROUND:
  - Check icon (native polyline ✓ 0.500 sq., 2.25 pt CHARCOAL) at (+0.150, +0.150).
  - Header (+0.750, +0.120, 5.000, 0.900): "DATA QUALITY" + new line "Is the value right?" · 22 bold.
  - List (+0.200, +1.200, 5.500, 2.500): "• Duplicates • Missing values • Impossible values • Unusual values" · 20, one item per line.
- 9c card (6.829, 2.650, 5.900, 3.900) BACKGROUND:
  - Reshape icon: rectangle → rounded rectangle with arrow, 0.500 sq.
  - Header: "DATA PREPARATION / REPRESENTATION" + "Is the representation suitable for the analytical task?" · 22 bold.
  - List: "• Scaling • Log transformation • Binning • Indicator coding • Fewer categories" · 20.

- **PC-2:** question text + icon shape.
- **Reveal:** none.
- **Notes:** "We return to these two questions on slides 17 and 29."
- **EXCL:** —
- **Source:** source slide 14.
- **QA:** questions verbatim.

### Slide 10 — Center: mean and median
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Text column (0.604, 1.950, 5.200, 4.400)** · 20, paragraphs:
1. "Mean: the average (balance point)."
2. "Median: the middle value when sorted."
3. "Extreme values pull the mean more than the median, so the two can differ." (bold)
4. "Business reading: typical price ≈ median; average price is pulled up by one expensive product."

**Dot strip:** per Appendix C.10.
- Axis (6.200, 4.610) → (12.400, 4.610).
- Ticks $0, 20, …, 120 at 15 pt; axis title "Price ($)" (8.300, 4.950, 2.000, 0.300) · 16.
- Median line x 6.987 (y 3.250→4.600, solid); label "median $16.5" right-aligned (5.500, 2.950, 1.450, 0.300) · 15.
- Mean line x 7.535 (y 3.600→4.600, dashed); label "mean $28.0" left-aligned (7.585, 3.300, 1.500, 0.300) · 15.

- **PC-2:** solid vs. dashed + labels.
- **Reveal:** none.
- **Notes:** "A mean describes the group as a whole, not any particular product."
- **EXCL:** stacking rule; no equation; **the word "skew" must not appear.**
- **Source:** source slides 15 + 16.
- **QA:** 10 dots, with the two at $12 stacked; markers at 6.987 / 7.535.

### Slide 11 — Why center is not enough
- **Layout / role:** L-COMPARE
- **Label:** ILLUSTRATIVE EXAMPLE

**Row labels:**
- (0.604, 2.950, 2.300, 0.500) "A = {7, 7, 7, 7, 7}" 18 bold + (0.604, 3.400, 2.300, 0.300) "mean 7 · median 7" 15.
- Same layout for B (y 4.250 / 4.700) and C (y 5.550 / 6.000) with their sets.

**Dot strips:** Appendix C.11.
- Shared axis line (3.100, 6.180) → (12.100, 6.180).
- Ticks 0, 2, …, 14 · 15 at y 6.200.

**Takeaway:** (3.100, 6.480, 9.000, 0.350) "Same center, very different spread." · 22 bold.

- **PC-2:** set names + positions.
- **Reveal:** none.
- **Notes:** none.
- **EXCL:** —
- **Source:** source slide 17.
- **QA:** shared axis.

### Slide 12 — Spread: range and standard deviation
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Text 12a (0.604, 1.950, 12.125, 0.950)** · 20, two paragraphs:
- "Range: the distance from the smallest to the largest value. Sensitive to extremes."
- "Standard deviation (SD): how far values typically sit from the mean, in the variable's own units."

**Panels:**
- Left panel (0.604, 2.950, 5.900, 1.950): title "units_sold · range 900 · SD 289.9 units" · 16 bold at panel top; dots per Appendix C.12.
- Right panel (6.829, 2.950, 5.900, 1.950): title "Shipping fee · range $1 · SD $0.32" · 16 bold; dots per C.12.
- Axes 1 pt, with ticks:
  - left: 0, 250, 500, 750, 1000;
  - right: $4, $5, $6, $7.

**Statement box 12d (0.604, 5.100, 12.125, 1.250):** 1.25 pt dashed border, BACKGROUND.
- "A variable with almost no variation often provides little information for distinguishing observations." · 20 bold
- "That does not make it automatically useless in every context." · 20

- **PC-2:** titles/values; flat stack.
- **Reveal:** none.
- **Notes:** "Variance is the squared-unit quantity behind the SD; we do not compute it here."
- **EXCL:** shipping fee deliberately non-binary; never `featured`; sample SD; no formula.
- **Source:** source slide 18.
- **QA:** 289.9 and 0.32 shown; no "=" formula.

### Slide 13 — Distributions, histograms, and shape (HIGH)
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Text column (0.604, 1.950, 5.100, 4.850):**

| Group | Content |
|---|---|
| G1 | "A histogram shows the distribution of a numeric variable by grouping values into bins." · 20; then "For categorical variables, show category counts with a bar-type display." · 16 MID_GRAY |
| G2 | "Skew: asymmetry, a longer tail on one side." · 20; "In a strongly skewed distribution, the mean is often pulled toward the long tail more than the median." · 20 bold; NOT A RULE tag (1.600 × 0.360) + "mean > median does not always mean skew." · 16 |
| G3 | Preview tag (4.000 × 0.340) "Preview · preparation step (see slide 9)" + "A transformation such as log can sometimes reduce strong right-skew." · 18 |

**Chart (single):** Appendix C.13.
- Bars [0,20)…[120,140) with heights 6, 2, 1, 0, 0, 0, 1.
- Data labels 15 pt above nonzero bars ("6", "2", "1", "1").
- x axis (6.750, 5.850)→(12.450, 5.850); x ticks 0–140 every 20 · 15; x title "Price ($)" (8.600, 6.250, 2.000, 0.300) · 16.
- y axis (6.750, 2.550)→(6.750, 5.850); y ticks 0–6 · 15; y title "Number of products" rotated 270° (5.900, 3.200, 0.350, 2.000) · 16.
- **Markers (required):**
  - median solid at x 7.422, y 2.400→5.850, label "Median 16.5" right-aligned (6.050, 2.050, 1.320, 0.300) · 15;
  - mean dashed at x 7.890, y 2.400→5.850, label "Mean 28.0" left-aligned (7.940, 2.050, 1.300, 0.300) · 15.
- "Long tail" bracket: horizontal bracket 1.5 pt from (7.600, 4.350) to (12.450, 4.350) with end ticks 0.120; label "long tail" (9.600, 3.950, 1.400, 0.350) · 16.
- **Exactly one chart; no interval notation anywhere on the slide.**

- **PC-2:** solid vs. dashed + labels; bracket text.
- **Reveal:** (1) chart bars/axes + G1; (2) markers + labels + bracket + G2; (3) G3.
- **Static:** all visible, coherent.
- **Notes:** "Bin choice changes the look of a histogram." / "Log works only for positive values; details later."
- **EXCL:** bin convention; no log formula; no second chart.
- **Source:** source slides 22 + 23.
- **QA:** counts 6, 2, 1, 0, 0, 0, 1; marker x positions; "often" present.

### Slide 14 — Reading a summary table (MEDIUM)
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Table 14a** (0.604, 2.050, 6.800, 3.300): columns row label 2.600 / price ($) 1.400 / rating (1–5) 1.400 / featured (0/1) 1.400; header 0.550; 5 rows × 0.550.

| | price ($) | rating (1–5) | featured (0/1) |
|---|---:|---:|---:|
| Products with a value | 10 | 8 | 10 |
| Mean | 28.0 | 4.0 | 0.6 |
| SD | 33.6 | 0.8 | 0.5 |
| Min | 8 | 3 | 0 |
| Max | 120 | 5 | 1 |

**Target markers:**
- "1" (Ø 0.280) at (7.470, 3.285), right of the featured-mean cell (row Mean, y 3.150–3.700).
- "2" at (7.470, 2.735), level with the "Products with a value" row (y 2.600–3.150).

**Callouts (exactly two):**
- C1 (8.000, 2.050, 4.729, 1.750), marker "1": "**Binary mean:** For a 0/1 variable, the mean is the proportion coded 1: here 0.6 → 60% of products are featured. (First five products: 0, 1, 1, 0, 1 → 0.6.)" · 18. Leader from (8.000, 2.925) to (7.750, 3.425).
- C2 (8.000, 4.200, 4.729, 1.350), marker "2": "**Missing-value cue:** `rating` has some missing observations (8 of 10). We return to this on slide 19." · 18. Leader from (8.000, 4.875) to (7.750, 2.875).

- **PC-2:** numbers + leader lines.
- **Reveal (optional):** C1, then C2.
- **Static:** table + both callouts.
- **Notes:** "Price's maximum sits far above its median, a reminder of the long tail on slide 13."
- **EXCL:** no other callouts; sample SD; one decimal.
- **Source:** source slide 19.
- **QA:** 3 data columns; callout count = 2; featured 0.6 in both table and callout.

### Slide 15 — Correlation: direction and strength
- **Layout / role:** L-DATA
- **Label:** none (schematic)

**Text column (0.604, 1.950, 5.000, 4.850)** · 20, one paragraph each:
1. "Pearson r ranges from −1 to +1."
2. "Sign = direction."
3. "|r| = strength of linear association."
4. "r near 0 = little linear association, but a nonlinear relationship may still exist."
5. "Perfect correlation: r = +1 or r = −1."

Then a RECALL tag (2.200 × 0.340) "RECALL · M6-R4A" + "Correlation does not establish causation." · 18.

**Panels (2 × 2):**
- Boxes (5.950, 1.950) / (9.479, 1.950) / (5.950, 4.550) / (9.479, 4.550), each 3.250 × 2.250, no border.
- L-axes 1 pt MID_GRAY from (px + 0.150, py + 1.750) up to py + 0.100 and right to px + 3.100.
- Points per Appendix C.15, Ø 0.120 CHARCOAL.
- Captions (px, py + 1.800, 3.250, 0.400) · 16, centered: "Strong positive" / "Near zero" / "Strong negative" / "Curved: r near 0, but clearly related".
- **No r values printed.**

- **PC-2:** captions; patterns.
- **Reveal:** none (static).
- **Notes:** "The curved panel is the key caution: a near-zero r does not mean 'no relationship'."
- **EXCL:** QA r values; no formula.
- **Source:** source slide 20.
- **QA:** 4 panels; coordinates match C.15.

### Slide 16 — Correlation matrix and matrix plot
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Matrix 16a** (native table, 0.604, 2.100, 4.600, 2.300): columns 1.600 / 1.500 / 1.500; header row 0.700, 2 rows × 0.800; all borders 1 pt CHARCOAL; no fill.

| | price | units_sold |
|---|---:|---:|
| price | 1.00 | −0.80 |
| units_sold | −0.80 | 1.00 |

Values 22 pt bold; headers 18 bold.

**Reading text 16b (0.604, 4.600, 5.400, 1.400)** · 18:
- "Diagonal = 1 (a variable with itself). The matrix is symmetric."
- "−0.80: strong negative linear association. Pricier products sold fewer units in this example."

**Caveat:** 16c CAUTION tag (1.400 × 0.360) at (0.604, 6.150) + text (2.150, 6.100, 4.000, 0.450): "A screening aid for redundant variables, not proof." · 18.

**Scatter:** Appendix C.16.
- Axes (7.400, 5.950)→(12.400, 5.950) and (7.400, 2.350)→(7.400, 5.950).
- x ticks 0–120 every 20; y ticks 0–1000 every 200 · 15.
- Titles "Price ($)" (9.300, 6.250, 1.600, 0.300) and "Units sold" rotated (6.650, 3.400, 0.350, 1.500) · 16.

- **PC-2:** numbers in every cell.
- **Reveal:** none.
- **Notes:** "Larger datasets give bigger matrices; the reading rules are the same."
- **EXCL:** recomputation r = −0.7995; no `rating`; no missing-data rule.
- **Source:** source slides 21 + 24.
- **QA:** cells 1.00 / −0.80 / −0.80 / 1.00.

### Slide 17 — Data quality: four things to check
- **Layout / role:** L-CONCEPT
- **Label:** none

**Objects:**
- 17a (0.604, 1.950, 12.125, 0.450): "Is the value right? Four things to check:" · 20 bold.
- 17b–17e tiles (y 2.600, h 2.600, w 2.850; x 0.604 / 3.696 / 6.788 / 9.879; PANEL):
  - Icon 0.800 sq. at (tile + 1.025, +0.250).
  - Label (tile + 0.150, +1.250, 2.550, 1.000) · 20 bold, centered.

| Tile | Icon | Label |
|---|---|---|
| 1 | Two overlapping rectangles | "Duplicates" |
| 2 | Empty rectangle with 1 pt dashed border | "Missing values" |
| 3 | Square with an X (two lines) | "Impossible / invalid values" |
| 4 | Small cluster of 4 dots + 1 distant dot | "Unusual / outlier values" |

- 17f (0.604, 5.450, 12.125, 0.550): "An unusual value is something to check, not automatically a problem or an error (slide 22)." · 18.
- 17g (0.604, 6.100, 12.125, 0.500): "What would you check, and why?" · 20 bold.

- **PC-2:** icon + text.
- **Reveal:** none.
- **Notes:** "Each of these four checks gets its own slide next."
- **EXCL:** never "four problems".
- **Source:** source slide 25.
- **QA:** exact phrase "four things to check" (case-insensitive); "problems" absent from the frame.

### Slide 18 — Duplicates
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 18a (0.604, 1.950, 9.600, 0.400): "Merged listing from two sources (derived view)" · 18 bold.
- 18b table (0.604, 2.450, 9.600, 2.000): columns source 2.200 / product_id 1.600 / category 1.800 / price ($) 1.400 / last_updated 2.600; header 0.500; rows ×0.500:
  1. store catalog · P03 · Books · 12 · 2026-03-02
  2. partner feed · P03 · Books · 12 · 2026-01-15
  3. store catalog · P02 · Books · 10 · 2026-03-02
- 18c bracket: vertical 1.5 pt at x 10.350 from y 2.950 to 3.950, end ticks 0.120 left.
- 18d label (10.550, 3.250, 2.100, 0.400): "same product" · 16.
- 18e list (0.604, 4.750, 12.125, 1.400) · 20:
  - "• Keep the most reliable record (needs a trustworthy timestamp)"
  - "• Merge"
  - "• Delete"
- 18f (0.604, 6.250, 12.125, 0.450): "Write down which rule you used." · 20 bold.

- **PC-2:** bracket + text.
- **Reveal:** none.
- **Notes:** "Duplicates are common after merging data from different sources."
- **EXCL:** P03 values = §10; only source/date differ.
- **Source:** source slide 26.
- **QA:** rows exact.

### Slide 19 — Missing values: what is missing?
- **Layout / role:** L-DATA (BS-I1)
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 19a (0.604, 1.950, 12.125, 0.500): "Missingness is not a value." · 24 bold.
- 19b table (0.604, 2.600, 3.200, 4.100): columns product_id 1.500 / rating 1.700; header 0.400; 10 rows × 0.370; **16 pt**. P04 and P08 show "(missing)" per §9.
- 19c–19e cards (x 4.200, w 8.529, h 1.100; y 2.600 / 3.850 / 5.100; PANEL) · 20:
  - "Why values go missing: not collected · not applicable · not yet recorded"
  - "0 vs. missing vs. not applicable: a balance of 0 vs. no account at all"
  - "Many methods drop or cannot use incomplete records unless you handle them."

- **PC-2:** "(missing)" text + dashed cell.
- **Reveal:** none.
- **Notes:** "A rare value that is present is not the same as a missing value."
- **EXCL:** blanks never 0.
- **Source:** source slide 27.
- **QA:** P04 and P08 show "(missing)".

### Slide 20 — Handling missing values
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 20a (0.604, 1.950, 12.125, 0.500): "Treatment depends on variable type, context, and purpose." · 22 bold.
- 20b–20d cards (y 2.600, h 1.200, w 3.905; x 0.604 / 4.714 / 8.824; PANEL): "Substitute a value" / "Omit the records" / "Drop the variable" · 20 bold, centered.
- 20e (0.604, 4.000, 12.125, 0.800): "For a numeric column, a simple option is to fill blanks with the mean of the observed values. For `rating`, that would be 4.0." · 20.
- 20f caveat box (0.604, 4.950, 12.125, 1.200), dashed 1.25 pt:
  - CAUTION tag at (+0.150, +0.150);
  - text (+1.700, +0.100, 10.300, 1.000): "Mean imputation is only a simple numeric example. It is not a default for categorical or binary variables: `category` has no mean, and a 0/1 mean such as 0.6 is not a valid value." · 18.
- 20g RULE OF THUMB tag (0.604, 6.350, 2.100, 0.360) + text (2.850, 6.300, 9.879, 0.450): "If a variable is mostly missing, dropping it may be reasonable." · 18.
- **No imputed table.**

- **PC-2:** dashed tags/borders.
- **Reveal:** none.
- **Notes:** "Filling with the mean keeps rows but makes values look less varied." / "`rating` is an ordered scale; the mean fill is shown only as the simplest numeric illustration."
- **EXCL:** canonical table unchanged; any future imputed view must be labeled "ILLUSTRATIVE — DERIVED (imputed) VIEW"; source percentage example not carried; no visible %.
- **Source:** source slide 28.
- **QA:** no "%" on the slide; caveat contains "0.6".

### Slide 21 — Detecting unusual values
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 21a (0.604, 1.950, 12.125, 0.500): "An outlier is an observation far from the rest. 'Far' is deliberately vague." · 20.
- 21b band: rectangle x 1.866 → 10.028 (w 8.162), y 2.750 → 4.450 (h 1.700), PANEL fill, no outline; dashed 1.5 pt PRIMARY_NAVY vertical edge lines at x 1.866 and 10.028 (y 2.650 → 4.450).
- 21c edge labels: "−3 SD" (1.466, 2.330, 0.800, 0.300) and "+3 SD" (9.628, 2.330, 0.800, 0.300) · 15, centered.
- 21d dots per Appendix C.21 (Ø 0.160).
- Axis (1.100, 4.410) → (12.200, 4.410); ticks 25, 35, …, 85 · 15; axis caption "Illustrative values" (5.600, 4.750, 2.100, 0.300) · 15.
- 21e annotation (10.400, 3.350, 2.300, 0.600): "beyond the ±3 SD heuristic" · 16; leader to the dot at 80 (centre 11.275, 4.320).
- 21f RULE OF THUMB tag (0.604, 5.250, 2.100, 0.360) + text (2.850, 5.200, 9.879, 0.700): "±3 SD from the mean is a common heuristic, most useful for roughly symmetric data." · 20.
- 21g (0.604, 6.100, 12.125, 0.450): "Unusual values can strongly influence results." · 20.
- **No z value, no mean value, no P10 on the slide.**

- **PC-2:** dashed labeled edges; text annotation.
- **Reveal:** none.
- **Notes:** "±3 SD is a heuristic, not a definition. Context matters, and the rule is easiest to interpret when data are roughly symmetric. Not every unusual value crosses this line."
- **EXCL:** schematic not in §10; QA-only facts (mean 51.2, SD 7.35, z = 3.92; the n = 10 max-|z| fact).
- **Source:** source slide 29.
- **QA:** band edges at 1.866 / 10.028; the 80 dot outside; no "P10" and no "3.92" on the slide.

### Slide 22 — Outlier ≠ error
- **Layout / role:** L-COMPARE
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 22a (0.604, 1.950, 12.125, 0.650): "OUTLIER ≠ ERROR" · 32 bold PRIMARY_NAVY, centered.
- 22b (0.604, 2.650, 12.125, 0.450): "`rating` allows only 1, 2, 3, 4 or 5." · 20 bold, centered (**placed above both panels**).
- 22c left panel (0.604, 3.250, 5.900, 2.800): **solid** 2 pt PRIMARY_NAVY border.
  - Crossed-box icon 0.500 at (+0.150, +0.150).
  - Header (+0.750, +0.150, 5.000, 0.500) "IMPOSSIBLE / INVALID" · 22 bold.
  - Text (+0.200, +0.800, 5.500, 0.500) "Breaks a coding or domain rule." · 18.
  - Entry box (+0.200, +1.450, 5.500, 1.150), 1 pt dashed border: "Incoming entry (not in the table)" 15 MID_GRAY / "P11 · rating = 7" 20 bold.
- 22d right panel (6.829, 3.250, 5.900, 2.800): **dashed** 2 pt PRIMARY_NAVY border.
  - Distant-dot icon.
  - Header "UNUSUAL / OUTLIER" · 22 bold.
  - Text "Rare but possibly valid." · 18.
  - Entry box (1 pt solid): "From the table" 15 MID_GRAY / "P10 · Electronics · $120" 20 bold / "a real expensive product" 15.
- 22e (0.604, 6.250, 12.125, 0.500): "Domain knowledge decides. Do not remove unusual values automatically." · 20 bold.

- **PC-2:** header text; solid vs. dashed panels; icons; **no red/green**.
- **Reveal:** none.
- **Notes:** "After checking, a few invalid entries may be treated as missing." / "50 °C is implausible in some climates and possible in others." (BS-I4)
- **EXCL:** P11 never in §10.
- **Source:** source slide 30.
- **QA:** 22b above 22c/22d; "not in the table" present.

### Slide 23 — Why scale matters
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 23a RECALL tag (0.604, 1.980, 2.200, 0.340) "RECALL · M6-R4A" + text (2.950, 1.950, 9.779, 0.450): "Representation changes comparisons." · 20.
- 23b (0.604, 2.550, 12.125, 0.500): "`price` spans $8–$120 (range 112). `units_sold` spans 40–940 (range 900)." · 20.
- Bars per Appendix C.23 (PALE fill, 1 pt navy).
- Row labels: "price ($)" (0.604, 3.500, 1.250, 0.450) and "units_sold" (0.604, 4.400, 1.250, 0.450) · 18.
- Endpoint labels · 15:
  - "$8" left of the price bar, "$120" right of it;
  - "40" left of the units bar, "940" right of it.
- Axis (1.900, 5.100) → (12.400, 5.100); ticks 0, 200, …, 1000 · 15.
- 23c (0.604, 5.750, 12.125, 0.800): "Combine them unscaled, and the larger-range variable dominates the comparison." · 22 bold.

- **PC-2:** lengths + labels.
- **Reveal:** none.
- **Notes:** "This is why the next slide rescales variables."
- **EXCL:** no distance formula.
- **Source:** source slides 32 + 34.
- **QA:** bar coordinates per C.23.

### Slide 24 — Two scaling choices (HIGH)
- **Layout / role:** L-COMPARE
- **Label:** MINI EXAMPLE (upper-right)

**Left card (0.604, 1.950, 5.900, 4.200)**, BACKGROUND:
- Header (+0.200, +0.150, 5.500, 0.450) "STANDARDIZATION" · 22 bold.
- Definition (+0.200, +0.700, 5.500, 1.000) "Z-standardization centers a variable at 0 and scales it to unit standard deviation." · 18.
- **Formula 1** box (+0.200, +1.850, 5.500, 0.800): "z = (x − mean) / SD" · 28, centered.
- (+0.200, +2.850, 5.500, 0.600) "It does not make the distribution normal." · 18 bold.

**Right card (6.829, 1.950, 5.900, 4.200)**:
- Header "MIN-MAX NORMALIZATION" · 22 bold.
- **Formula 2** box (+0.200, +0.700, 5.500, 0.800): "x′ = (x − min) / (max − min)" · 28, centered.
- (+0.200, +1.550, 5.500, 0.450) "Commonly maps the observed range to 0–1." · 18.
- Mini table (+0.700, +2.150, 3.000, 1.400): columns x / x′ (1.500 each); header 0.350; rows 10 | 0 · 20 | 0.33 · 40 | 1 (0.350 each) · 18.
- Caption (+3.900, +2.300, 1.800, 0.900): "three values only; min = 10, max = 40" · 15.

**Footer statement 24c (0.604, 6.300, 12.125, 0.450):** "Two different choices. Do not call both simply 'normalization'." · 20 bold.

- **Reveal:** (1) left card; (2) right card except mini table; (3) mini table + caption.
- **Static:** both cards complete.
- **Notes:** "Binary indicators may already be on a comparable 0–1 scale; handle them according to the modeling purpose."
- **EXCL:** no product IDs, "price", "$" or log content anywhere on the slide; no SD-convention text.
- **Source:** source slide 33.
- **QA:** formula count in the deck = 2 (both here); mini values exact.

### Slide 25 — Binning and binary conversion
- **Layout / role:** L-DATA
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 25a (0.604, 1.950, 12.125, 0.500): "Price tiers: Low (under $15): 4 products · Mid ($15 to under $30): 4 · High ($30 and over): 2" · 20.
- Tier band and dots per Appendix C.25.
  - Segments: Low PANEL, Mid BACKGROUND, High PANEL, each with a 1 pt PRIMARY_NAVY outline.
  - Segment labels "Low" / "Mid" / "High" centered in the segments (High label at x 7.500) · 16 bold; the Low and Mid labels sit below the band at y 3.450 because the segments are narrow.
  - Boundary ticks labeled "$15" and "$30" at y 3.450.
- 25b (0.604, 4.400, 12.125, 0.500): "Binning loses detail: $40 and $120 both become 'High'." · 20 bold.
- 25c (0.604, 5.200, 12.125, 0.900): "A score or probability → yes/no using a chosen cut-off, e.g., likelihood to buy ≥ 0.5 → 'likely buyer'." · 20.

- **PC-2:** segment text + ticks.
- **Reveal:** none.
- **Notes:** "Cut-offs are choices; different cut-offs give different categories."
- **EXCL:** boundaries 15 → Mid, 30 → High.
- **Source:** source slide 35 (part).
- **QA:** counts 4 / 4 / 2.

### Slide 26 — Indicator coding vs. category codes
- **Layout / role:** L-COMPARE
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 26a RECALL tag (0.604, 1.980, 2.200, 0.340) + text (2.950, 1.950, 9.779, 0.450): "Codes like Low = 1, Mid = 2, High = 3 are labels, not distances." · 20.
- Group captions · 16:
  - (2.104, 2.550, 2.100, 0.350) "category (a label)";
  - (4.204, 2.550, 5.400, 0.350) "indicators (0/1)".
- 26b table (0.604, 2.950, 9.000, 2.100): columns product_id 1.500 / category 2.100 / is_Books 1.800 / is_Home 1.800 / is_Electronics 1.800; header 0.600; rows:
  - P01 Books 1 0 0
  - P04 Home 0 1 0
  - P09 Electronics 0 0 1
  - 2.25 pt CHARCOAL vertical rule between category and is_Books.
- 26c (0.604, 5.350, 12.125, 0.500): "One 0/1 indicator per category." · 22 bold.

- **PC-2:** captions + headers + rule.
- **Reveal:** none.
- **Notes:** none.
- **EXCL:** —
- **Source:** source slide 35 (part).
- **QA:** exactly one "1" per row.

### Slide 27 — Reducing categories
- **Layout / role:** L-CONCEPT
- **Label:** none (schematic)

**Objects:**
- 27a (0.604, 1.950, 12.125, 1.000): "Too many categories create too many indicators." / "Combine sparse or similar categories into groups that make business sense." · 20.
- Fine boxes (x 2.000, w 3.000, h 0.360, 16 pt, 1 pt LIGHT_GRAY outline) at y:

| Group | Boxes and y |
|---|---|
| Books | Fiction 3.050 · Non-fiction 3.470 · Comics 3.890 |
| Home | Kitchen 4.430 · Bedding 4.850 · Lighting 5.270 |
| Electronics | Phones 5.810 · Audio 6.230 |

- Group boxes (x 8.000, w 3.200, h 0.600, 20 bold, PANEL, 1.5 pt navy):
  - Books y 3.330 (center of 3.050–4.250)
  - Home y 4.710
  - Electronics y 5.920
- Connector lines 1.25 pt from each fine box's right-mid point to its group box's left-mid point.

- **PC-2:** brackets/lines + labels.
- **Reveal:** none.
- **Notes:** "Some models, such as regression, use one fewer indicator than the number of categories, with a reference category; details come later."
- **EXCL:** no m − 1 on the slide.
- **Source:** source slide 36.
- **QA:** 8 fine boxes → 3 groups.

### Slide 28 — Rows, columns, missingness, dimensionality
- **Layout / role:** L-CONCEPT
- **Label:** ILLUSTRATIVE EXAMPLE

**Objects:**
- 28a column brace: horizontal bracket over the grid from (0.604, 2.300) to (7.804, 2.300); label (0.604, 1.950, 7.200, 0.330) "Columns = variables/features" · 16 bold.
- 28b grid table (0.604, 2.350, 7.200, 4.000): 6 columns × 1.200 (product_id, category, price, units_sold, rating, featured); header 0.400 (16 bold); 10 rows × 0.360.
  - Column 1 shows P01–P10 (16).
  - **All other cells blank PANEL placeholders** except `rating` P04 and P08: "(missing)" 16 italic, dashed cell border.
- 28c row brace: vertical bracket at x 7.880 from y 2.750 to 6.350; label (8.100, 2.350, 4.629, 0.700) "Rows = observations (10 products)" · 18 bold.
- 28d (8.100, 3.150, 4.629, 1.400): "Dimensionality = the number of variables/features used. If an analysis uses price, units_sold, rating and featured, its dimensionality is 4." · 18.
- 28e (8.100, 4.650, 4.629, 0.700): "(missing) cells: missingness, a separate issue" · 18; leader lines to the two "(missing)" cells.
- 28f (8.100, 5.450, 4.629, 0.900): "More variables need more data, make distances less informative, and each variable should earn its place." · 18.
- 28g RECALL tag (0.604, 6.450, 2.200, 0.340) "RECALL · slide 12" + text (2.950, 6.420, 9.779, 0.400): "A variable with little variation may add little separation." · 18.

- **PC-2:** braces, text, dashed cells.
- **Reveal:** none.
- **Notes:** "The intuition is enough here: more columns ask more of the data."
- **EXCL:** no "sparsity"; no numeric cell values.
- **Source:** source slide 37.
- **QA:** four terms each labeled once; label present.

### Slide 29 — Close: understand → clean → represent → prepare
- **Layout / role:** L-CLOSE
- **Label:** none

**Objects:**
- 29a–29d chevrons (y 2.200, h 1.300, w 2.850; x 0.604 / 3.694 / 6.784 / 9.874; PANEL): "understand" / "clean" / "represent" / "prepare" · 24 bold.
- 29e (0.604, 3.650, 12.125, 0.400): "before modeling" · 18 MID_GRAY, centered.
- 29f card (0.604, 4.250, 5.900, 1.300): "DATA QUALITY" / "Is the value right?" · 20 (first line bold).
- 29g card (6.829, 4.250, 5.900, 1.300): "DATA PREPARATION / REPRESENTATION" / "Is the representation suitable for the analytical task?" · 20.
- 29h (0.604, 5.850, 12.125, 0.550): "Does this summary, correlation, or cleaning choice make sense?" · 22 bold.

- **PC-2:** order by position/arrows + text.
- **Reveal:** none.
- **Notes:** none.
- **EXCL:** nothing new.
- **Source:** source slides 31 + 14.
- **QA:** every item appears earlier.

## 12. Object layering (z-order, back to front)

1. Background
2. Bands and panels (e.g., slide 21 band, card fills)
3. Tables / bars / segments
4. Axes
5. Data marks (dots, points)
6. Marker lines (median/mean, band edges)
7. Brackets and leader lines
8. Text labels and annotations
9. Tags and upper-right label
10. Header (H1–H3) and footer (F1–F3)

No object may overlap another's text bounding box except marker lines crossing bars by design (slide 13) and leader lines.

## 13. Reveal and static-print policy

| Slide | REVEAL_ORDER | STATIC_FINAL_STATE |
|---|---|---|
| 6 | Table rows 1→6, then 6b + 6c | Full table + footer line |
| 13 | (1) chart + G1 → (2) markers, labels, bracket + G2 → (3) G3 | All groups visible |
| 14 | (optional) C1 → C2 | Table + both callouts |
| 24 | (1) left card → (2) right card minus mini table → (3) mini table + caption | Both cards complete |
| Others | None | As built |

- Animation is never required for meaning.
- The PDF export uses the static final state (all objects visible).
- QA renders the final state only.

## 14. Speaker-notes insertion

- Insert **only** the frozen SPEAKER_NOTES text quoted in §11. Each quoted sentence becomes one paragraph, in Arial 12 pt.
- Slides **1, 4, 11, 26, 29**: no notes text (empty notes body).
- **Never insert** BUILD_METADATA, QA values, hashes, the bin or SD conventions, the n = 10 maximum-z fact, coordinates, held-material names, assessment information, or source-deck instructions.
- Notes are assumed student-visible.

## 15. Visual originality

- Copied visuals = 0. No picture objects at all.
- All figures are native reconstructions with new compositions:
  - slide 7: four one-dimensional dot-histograms (not a 2-D sampled shape);
  - slide 15: 2 × 2 captioned panels (not a horizontal 7-panel strip);
  - slides 5, 18, 26: new product/order tables;
  - slide 21: the course schematic.
- None of the following may appear: Math Is Fun graphics, historical sample-size figures, source screenshots, App Store material, or web-search imagery.

## 16. Validation plan (for the later build)

| Gate | Requirement |
|---|---|
| SLIDE_COUNT | 29 |
| SLIDE_SIZE | 12,192,000 × 6,858,000 EMU |
| MASTERS / LAYOUTS | 1 / 6 |
| FONT_RUNS | 100% Arial (latin/ea/cs); theme fonts Arial; 0 embedded fonts |
| MIN_FONT | ≥ 12 pt everywhere; body ≥ 15 pt except footer |
| OFF_SLIDE_OBJECTS | 0; SAFE_ZONE_VIOLATIONS 0 (§3) |
| AUTOFIT | 0 shrink-on-overflow; 0 text overflow in render |
| PICTURE_OBJECTS / COPIED_VISUALS | 0 / 0 |
| APP_STORE_REFERENCES | 0 ("App Store", "2013", "Rating_Volume", "mobile app") |
| FORMULAS | Exactly 2 formula objects (named `FORMULA_1`, `FORMULA_2`), both on slide 24. Every other "=" in student text must be on this frozen-wording allowlist: slide 5 "Rows = observations, columns = variables"; slide 15 "Sign = direction", "\|r\| = strength…", "r near 0 = …", "r = +1 or r = −1"; slide 16 "Diagonal = 1"; slide 22 "rating = 7"; slide 24 caption "min = 10, max = 40"; slide 26 "Low = 1, Mid = 2, High = 3"; slide 28 "Rows = …", "Columns = …", "Dimensionality = …". Any other "=" fails. |
| SLIDE_14_CALLOUTS | 2 |
| SLIDE_16_MATRIX | 1.00 / −0.80 / −0.80 / 1.00; no `rating` on slide 16 |
| HISTOGRAM | Bars 6, 2, 1, 0, 0, 0, 1 at Appendix C.13 coordinates; no interval notation |
| TOY_DATA | Every displayed number equals §10 (independent recomputation, sample SD n − 1) |
| FEATURED | 0.6 on slides 14 and 20 |
| MISSING | "(missing)" exactly at P04 and P08 (slides 19, 28) |
| P11 | Appears only on slide 22, captioned "not in the table" |
| SLIDE_21 | No "P10", no "3.92", band edges 1.866 / 10.028 |
| SLIDE_17 | Contains "four things to check"; does not contain "four problems" |
| M6_R4B_LEAKAGE | 0 by governed term scan only (`admission`, import/export, user-defined function, `library(`, `install.packages`, `.csv`, `.r` filenames) |
| NOTES_FORBIDDEN_TERMS | 0 (builder, metadata, QA, n − 1, left-closed, maximum z, 9/√10, assessment, admission, M6-R4B, App Store, hash, source deck) |
| NOTES_PRESENCE | Notes on slides 2, 3, 5–10, 12–25, 27, 28; none on 1, 4, 11, 26, 29 |
| PC2_GRAYSCALE | PASS all 29 (grayscale render review) |
| STATIC_PRINT | PASS all 29 (PDF of final state) |
| RENDER | No clipping, overlap, or tiny text at 100% and in the PDF |

## 17. Future build outputs (defined, not created)

- **Build directory:** `work/m6_r5_build_v1/`
  - `BUSS256_M6_R5_2027_BUILD_v1.pptx`
  - `BUSS256_M6_R5_2027_BUILD_v1.pdf`
  - `slides_png/`, `slides_gray/`, `sheets/`
  - `qa_struct.json`, the build script and helpers, and a QA report
- **Production destination:** `teaching/BUSS256/03_final/production/BUSS256_M6_R5_2027.pptx` and `.pdf`. These are created only after QA and explicit project-lead approval.
- **None of these is created in this tranche.**

## 18. Boundaries and handoffs

- **M6-R4B = HOLD.** None of these appear: `admission.csv`, import/export instruction, user-defined functions, packages, exercise filenames, R code, solution, InClass, or exam/review material.
- **HANDOFF-ASSESS-01:** CLOSED for M6-R5 content-freeze scope only.
- **AF-R5-01:** OPEN — ASSESSMENT-FREEZE TRANCHE.
- **HANDOFF-M5-01:** OPEN.
- **HANDOFF-S3-01:** OPEN.

## 19. Integrity

- Content and blueprint changes: 0.
- Existing files modified: 0.
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- No PPTX, PDF, PNG, OOXML, or script was created.
- Git staged: 0. Commit: 0. Push: 0.

## Appendix C — Deterministic chart coordinates (inches)

### C.10 Slide 10 price dot strip
Mapping: centre x(p) = 6.200 + p × 0.04769 (axis $0–$130 over x 6.200–12.400); baseline y 4.600; dot Ø 0.100 with 0.5 pt white outline; stack pitch 0.115. Table gives **top-left** of each dot.

| Product | price | dot left x | dot top y | Ø |
|---|---:|---:|---:|---:|
| P01 | 8 | 6.532 | 4.500 | 0.100 |
| P02 | 10 | 6.627 | 4.500 | 0.100 |
| P03 | 12 | 6.722 | 4.500 | 0.100 |
| P04 | 12 | 6.722 | 4.385 | 0.100 |
| P05 | 15 | 6.865 | 4.500 | 0.100 |
| P06 | 18 | 7.008 | 4.500 | 0.100 |
| P07 | 20 | 7.104 | 4.500 | 0.100 |
| P08 | 25 | 7.342 | 4.500 | 0.100 |
| P09 | 40 | 8.058 | 4.500 | 0.100 |
| P10 | 120 | 11.873 | 4.500 | 0.100 |

Median line x = 6.987 (solid, y 3.250→4.600); mean line x = 7.535 (dashed, y 3.600→4.600). Ticks at $0,20,…,120: x = 6.200 + t × 0.04769.

### C.13 Slide 13 histogram
Plot area x 6.75–12.45 ($0–$140; 0.04071 in/$); y baseline 5.85, top 2.55 (0–6 products; 0.550 in/product).

| Bin (build-only) | Count | bar x | bar y | bar w | bar h |
|---|---:|---:|---:|---:|---:|
| [0,20) | 6 | 6.750 | 2.550 | 0.814 | 3.300 |
| [20,40) | 2 | 7.564 | 4.750 | 0.814 | 1.100 |
| [40,60) | 1 | 8.379 | 5.300 | 0.814 | 0.550 |
| [60,80) | 0 | 9.193 | 5.850 | 0.814 | 0.000 |
| [80,100) | 0 | 10.007 | 5.850 | 0.814 | 0.000 |
| [100,120) | 0 | 10.821 | 5.850 | 0.814 | 0.000 |
| [120,140) | 1 | 11.636 | 5.300 | 0.814 | 0.550 |

Median line x = 7.422 (solid); mean line x = 7.890 (dashed); both y 2.40→5.85. x ticks at $0,20,…,140: x = 6.75 + t × 0.04071. y ticks 0–6 at y = 5.85 − k × 0.550.

### C.15 Slide 15 schematic panels (x = 1…10)
Panel box 3.250 × 2.250. Plot axes: left x = panel_x + 0.150, bottom y = panel_y + 1.750, plot width 2.950, height 1.650. Point centre: cx = panel_x + 0.300 + (x−1)/9 × 2.650; cy = panel_y + 1.650 − y/11 × 1.450. Point Ø 0.120.

- **Strong positive** (panel at 5.950, 1.950) centres: (6.250, 3.336); (6.544, 3.468); (6.839, 3.139); (7.133, 3.139); (7.428, 2.743); (7.722, 3.007); (8.017, 2.611); (8.311, 2.677); (8.606, 2.282); (8.900, 2.348)
- **Near zero** (panel at 9.479, 1.950) centres: (9.779, 2.941); (10.073, 3.336); (10.368, 2.677); (10.662, 3.073); (10.957, 2.809); (11.251, 3.205); (11.546, 2.545); (11.840, 2.941); (12.135, 3.336); (12.429, 2.809)
- **Strong negative** (panel at 5.950, 4.550) centres: (6.250, 4.948); (6.544, 4.882); (6.839, 5.277); (7.133, 5.211); (7.428, 5.607); (7.722, 5.343); (8.017, 5.739); (8.311, 5.673); (8.606, 6.068); (8.900, 6.002)
- **Curved** (panel at 9.479, 4.550) centres: (9.779, 4.865); (10.073, 5.393); (10.368, 5.788); (10.662, 6.052); (10.957, 6.184); (11.251, 6.184); (11.546, 6.052); (11.840, 5.788); (12.135, 5.393); (12.429, 4.865)

### C.16 Slide 16 scatter
Plot area x 7.400–12.400 (price $0–$130; 0.03846 in/$), y 5.950 (0 units) → 2.350 (1,000 units; 0.0036 in/unit). Point Ø 0.140.

| Product | price | units_sold | centre x | centre y |
|---|---:|---:|---:|---:|
| P01 | 8 | 900 | 7.708 | 2.710 |
| P02 | 10 | 940 | 7.785 | 2.566 |
| P03 | 12 | 700 | 7.862 | 3.430 |
| P04 | 12 | 820 | 7.862 | 2.998 |
| P05 | 15 | 610 | 7.977 | 3.754 |
| P06 | 18 | 450 | 8.092 | 4.330 |
| P07 | 20 | 520 | 8.169 | 4.078 |
| P08 | 25 | 380 | 8.362 | 4.582 |
| P09 | 40 | 260 | 8.938 | 5.014 |
| P10 | 120 | 40 | 12.015 | 5.806 |

### C.21 Slide 21 schematic dot strip
Mapping x(v) = 1.100 + (v − 25) × 0.185 (axis 25–85 over x 1.100–12.200); baseline y 4.400; dot Ø 0.160; stack pitch 0.180. Band edges: x(−3 SD = 29.14) = 1.866; x(+3 SD = 73.26) = 10.028.

| Value | dot left x | dot top y |
|---:|---:|---:|
| 44 | 4.535 | 4.240 |
| 45 | 4.720 | 4.240 |
| 46 | 4.905 | 4.240 |
| 47 | 5.090 | 4.240 |
| 48 | 5.275 | 4.240 |
| 48 | 5.275 | 4.060 |
| 49 | 5.460 | 4.240 |
| 49 | 5.460 | 4.060 |
| 50 | 5.645 | 4.240 |
| 50 | 5.645 | 4.060 |
| 50 | 5.645 | 3.880 |
| 50 | 5.645 | 3.700 |
| 51 | 5.830 | 4.240 |
| 51 | 5.830 | 4.060 |
| 52 | 6.015 | 4.240 |
| 52 | 6.015 | 4.060 |
| 53 | 6.200 | 4.240 |
| 54 | 6.385 | 4.240 |
| 55 | 6.570 | 4.240 |
| 80 | 11.195 | 4.240 |

### C.12 Slide 12 dot strips
units_sold panel: x(u) = 1.054 + u × 0.0050 (0–1,000 over 1.054–6.054); baseline y 4.550; Ø 0.140; values 40, 260, 380, 450, 520, 610, 700, 820, 900, 940 (no ties).
Shipping panel: x(f) = 7.279 + (f − 4) × 1.6667 (axis $4–$7 over 7.279–12.279); baseline y 4.550; Ø 0.140; pitch 0.160; nine dots stacked at $5 (top dot centre y = 4.550 − 0.070 − 8 × 0.160 = 3.200), one dot at $6.

### C.23 Slide 23 range bars (common scale 0–1,000 over x 1.900–12.400; 0.0105 in/unit)
- price: x 1.984 → 3.160 (w 1.176), y 3.500, h 0.450
- units_sold: x 2.320 → 11.770 (w 9.450), y 4.400, h 0.450

### C.25 Slide 25 tier line (axis $0–$130 over x 1.100–12.200; 0.08538 in/$)
Segments (band y 2.900, h 0.500): Low x 1.100–2.381; Mid 2.381–3.662; High 3.662–12.200. Boundary ticks at x 2.381 ($15) and 3.662 ($30).
Price dots above band (top-left coordinates): baseline y 2.850, Ø 0.140, pitch 0.160 (P03/P04 at $12 stacked): P01 x 1.713 y 2.710; P02 x 1.884 y 2.710; P03 x 2.055 y 2.710; P04 x 2.055 y 2.550; P05 x 2.311 y 2.710; P06 x 2.567 y 2.710; P07 x 2.738 y 2.710; P08 x 3.165 y 2.710; P09 x 4.445 y 2.710; P10 x 11.276 y 2.710

### C.11 Slide 11 dot strips (axis 0–14 over x 3.100–12.100; 0.6429 in/unit; dot Ø 0.200; pitch 0.220; coordinates are top-left)
- Set A (baseline y 3.350): (7.500, 3.150); (7.500, 2.930); (7.500, 2.710); (7.500, 2.490); (7.500, 2.270)
- Set B (baseline y 4.650): (6.214, 4.450); (6.857, 4.450); (7.500, 4.450); (8.143, 4.450); (8.786, 4.450)
- Set C (baseline y 5.950): (3.643, 5.750); (5.571, 5.750); (7.500, 5.750); (9.429, 5.750); (11.357, 5.750)
