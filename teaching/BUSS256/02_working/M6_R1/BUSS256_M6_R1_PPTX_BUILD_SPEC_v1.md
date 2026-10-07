# BUSS256 M6-R1 — PPTX Build Spec v1

*Specification only. No PPT/PPTX was built or edited in this pass. Content authority is unchanged: `BUSS256_M6_R1_CONTENT_SPEC_v2_1.md` (SHA-256 `55f194bb07a374320f7a0b7672eff2f1999a7f804d3602c0fad6c28895494aca`). This document states how the frozen 30 slides are to be built; it adds no instructional content. Final-closure patch applied: section-strip order, Google Flu Trends #24 text, KU branding sizes, approved toy data for #5/#22, and the Arial/Aptos/Calibri font stack.*

---

## 1. Authority and precheck

| Item | Value |
|---|---|
| Worktree | `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree` |
| Branch | `buss256/2027-refresh` |
| Content-freeze commit (HEAD at precheck) | `1c6fe4870b6fab5f220cfb81b88a364222e08316` |
| Content authority | `teaching/BUSS256/02_working/M6_R1/BUSS256_M6_R1_CONTENT_SPEC_v2_1.md` (M6-R1 CONTENT FREEZE = PASS; 30 slides fixed) |
| Visual audit | `docs/rounds/BUSS256_M6_R1_VISUAL_BUILD_READINESS_AUDIT.md` (untracked at precheck) |
| Staged at precheck | 0 |
| Output file existed before write | No |

### 1.1 Closed project-lead decisions (inputs to this spec)

| ID | Decision |
|---|---|
| A | 16:9; N12's 4:3 geometry is not inherited; this is a structurally clean 2027 working deck, final integrated visual migration is a later tranche. |
| B | No Helvetica Neue, Helvetica LT Std, MS PGothic or other source-specific legacy fonts; one cross-platform PowerPoint-safe sans-serif family; family Arial, fallback Aptos then Calibri; no embedded font files. |
| C | Third-party / unknown-provenance rasters: default DO NOT REUSE. KU institutional crest/logo may be reused as branding. |
| D | Google Flu Trends: no NYT raster; course-owned 2009 → 2013 → 2015 timeline; no invented numeric data. |
| E | Five Vs: no spiral; Volume/Velocity/Variety as core; Value and Veracity as additional questions; grouping understandable without color. |
| F | No legacy N12 speaker notes carried; lecturer-script work is a later tranche. |
| G | Build v1 has no animations or transitions. |
| H | PC-2: color is never the sole carrier of meaning; meaning must survive grayscale student-PDF rendering. |
| I | No cropping of #28 context art; use native/simple course-owned shapes if context icons are useful. |

---

## 2. Global visual system

### 2.1 Geometry (16:9)

- Slide size **13.333 in × 7.5 in** (12,192,000 × 6,858,000 EMU), PowerPoint "Widescreen" 16:9.
- Outer margin **0.6 in** left/right; safe area x = 0.6–12.733 in.
- Zones (all in inches, from top-left):

| Zone | x | y | w | h | Notes |
|---|---:|---:|---:|---:|---|
| Section strip (only on strip slides, §2.5) | 0.6 | 0.20 | 12.13 | 0.40 | |
| Title | 0.6 | 0.70 | 12.13 | 1.05 | Left-aligned; 1–2 lines; bottom-anchored text box so one- and two-line titles share a baseline region |
| Body | 0.6 | 1.90 | 12.13 | 4.60 | Diagrams and text live here |
| Source footer | 0.6 | 6.62 | 10.40 | 0.50 | Left-aligned; present only where §6 requires it, else empty |
| Slide number | 11.20 | 6.72 | 0.70 | 0.35 | Right-aligned, 12 pt |
| KU crest | 12.00 | 6.62 | 0.73 | 0.61 | Bottom-right (see §2.6) |

- Nothing outside the safe area except the crest. No text box overlapping another text box. No text in the footer zone other than source footer/slide number.

### 2.2 Font

- **Primary family: Arial** (all text: titles, body, labels, numerals). One family only; weight (regular/bold) and size carry hierarchy.
- **Fallback 1: Aptos. Fallback 2: Calibri.** Helvetica and Helvetica Neue are **not** fallbacks. Text boxes keep at least 10% horizontal slack so a fallback family causes no overflow.
- Set Arial as both Latin theme font (major and minor) and as the East-Asian/complex-script theme slots' Latin companion; **no Korean text is required by the frozen content**. If Korean text is later added, use the system East-Asian font (Malgun Gothic on Windows, Apple SD Gothic Neo on macOS) via PowerPoint font substitution; do not embed.
- **Do not embed font files.** Forbidden: Helvetica Neue (any weight), Helvetica LT Std, MS PGothic / ＭＳ Ｐゴシック, Times New Roman for titles, Wingdings/Wingdings 2 (use real Unicode or native shapes for checks and arrows), 나눔고딕.
- Checkmarks, arrows and symbols: use native shapes (preferred) or Unicode glyphs available in Arial (→ ← ↔ ≈ ≠ × ✓ is **not** in Arial: draw check as a native shape).

### 2.3 Type scale (minimum practical projected sizes)

| Role | Size | Weight | Minimum allowed |
|---|---:|---|---:|
| Title | 32 pt | Bold | 28 pt (two-line titles only) |
| Body / definitions | 24 pt | Regular (key terms Bold) | 20 pt |
| Diagram node labels | 20 pt | Bold or Regular | 18 pt |
| Diagram secondary labels, connector labels, captions | 18 pt | Regular | 16 pt |
| Label tags (HISTORICAL / ILLUSTRATIVE / HYPOTHETICAL EXAMPLE) | 16 pt | Bold, ALL CAPS | 14 pt |
| Source footer | 12 pt | Regular | 12 pt |
| Slide number | 12 pt | Regular | 12 pt |

Rule: if content does not fit at the minimum, split the *layout* (columns, cards), not the content; do not shrink below the minimum and do not drop frozen content. Line spacing 1.1; no paragraph-level hanging bullets longer than 3 lines. No autofit/shrink-on-overflow in the saved file.

### 2.4 Provisional palette (tokens; November may replace)

Defined once as theme/color tokens; no hard-coded hex elsewhere.

| Token | Hex (provisional) | Use |
|---|---|---|
| `INK` | #1A1A1A | Body text |
| `PRIMARY` | #1F3864 | Titles, node outlines, key terms |
| `ACCENT` | #9E1B32 | Emphasis marks, anchor outline, tag outlines |
| `MUTED` | #595959 | Secondary text, footers |
| `PANEL` | #F2F2F2 | Card/panel fill |
| `RULE` | #A6A6A6 | Hairlines, dividers |
| `PAPER` | #FFFFFF | Slide background |

Requirements: text/background contrast ≥ 4.5:1 (≥ 3:1 for ≥ 24 pt bold); `ACCENT` and `PRIMARY` must differ visibly in grayscale **or** never be the only distinction (see §7). No gradients, shadows, glows, 3-D, or picture fills.

### 2.5 Section strip ("You are here")

The four-item strip is **navigational**: it tells students which section is opening. It does not express the conceptual ordering of the four-element framework (new #12, where Business problem is the anchor). The "Volume → Velocity → Variety" sub-strip on the Velocity and Variety slides is a separate component required by CONTENT_SPEC_v2_1 §4.

- **Final strip order: Data | Analytics | Business problem | Insight.**
- The strip appears **only** on the four section-opening slides: **new #13 → Data, #20 → Analytics, #25 → Business problem, #27 → Insight**. It is not persistent and is not placed on any other slide.
- Form: four equal rounded rectangles in the strip zone, each 2.95 in × 0.40 in, separated by 0.11 in, containing label text 16 pt. There is no separate caption; the strip itself carries the "you are here" text (see state coding).
- **State coding (no color required):** the current element is **filled `PRIMARY` with white bold text, a 3 pt outline, and the text prefix "▶ "**, and its label ends with "— you are here" (e.g., "▶ Data — you are here"); the other three are **unfilled, 1 pt `RULE` outline, regular text, prefix "○ "**. Meaning survives grayscale and black-and-white print.
- **Three-V strip** on #17 and #18: three equal items "Volume → Velocity → Variety"; current item uses the same filled / 3 pt outline / "▶ " coding.
- Strip is a **reusable grouped component** with four named states (see §10.2).

### 2.6 Institutional branding

- **KU crest** (N12 master image `image1.png`, 175 × 147 px, 14,915 B) — small institutional branding mark, bottom-right on content slides at 0.73 in wide (≈ 240 dpi at that size), only where the layout calls for it.
- **KU Business School wordmark/logo** (N12 slide-1 image `image2.png`, 335 × 103 px, 8,484 B) — title slide only, top-left, **maximum approximately 1.6 in wide** (≈ 209 dpi).
- **Size rule:** neither asset is enlarged beyond the sizes above; no aggressive upscaling. If either visibly pixelates at its authorized size, use the crest alone or text-only institutional branding ("Korea University Business School") instead of enlarging the raster. No higher-resolution asset is required for Build v1.
- Both are extracted unmodified from the *copy* of N12 (conversion in `work/m6_r1_visual_audit_rerun/`), not from the source file. No recoloring, stretching or cropping beyond clear padding. They are the **only legacy visual assets authorized for reuse** (see §3.2).
- No other branding elements, mascots, or watermarks.

### 2.7 Layout inventory (master "BUSS256-2027-Working")

| Layout | Used by | Placeholders |
|---|---|---|
| L-TITLE | #1 | Title, subtitle, course/instructor line, logo area |
| L-STD | #3, #4, #7, #9, #14, #19–#21, #23, etc. | Title, body, source footer, slide number, crest |
| L-DIAGRAM | #5, #6, #8, #10–#13, #15–#18, #22, #24–#29 | Title, free diagram area (body zone), tag area (top-right of body), source footer, number, crest |
| L-STRIP | #13, #17, #18, #20, #25, #27 | Same as L-DIAGRAM + strip zone |
| L-CLOSE | #30 | Title, body, crest |

All titles, body text and footers must live in placeholders (not free text boxes) so November can re-theme by editing the master.

### 2.8 Label-tag convention (redundant encoding)

Tags sit at the top-right of the body zone (x = 9.43 in, y = 1.90 in, h = 0.40 in, right-aligned to the margin), 16 pt bold ALL CAPS, `PAPER` fill, 2 pt outline:

| Tag | Text (verbatim) | Outline style | Used on |
|---|---|---|---|
| Historical | `HISTORICAL EXAMPLE` | Solid | #14, #16 |
| Illustrative | `ILLUSTRATIVE EXAMPLE` (on #22: `ILLUSTRATIVE EXAMPLE — Online Store`) | Dashed | #5, #22 |
| Hypothetical | `HYPOTHETICAL EXAMPLE` | Dotted | #17 |

The tag is text first; the outline style is a second cue; color (`ACCENT` outline) is a third and optional cue.

### 2.9 Diagram grammar

- Nodes: rounded rectangles, 2 pt `PRIMARY` outline, `PANEL` or `PAPER` fill, text centered, ≥ 18 pt.
- Arrows: 2.25 pt `INK` lines with filled arrowheads; **every arrow that carries a relationship has a text label**.
- Numbered sequences: a circled numeral at the top-left of each node (1, 2, 3…), so order is carried by numbers, not color.
- "Anchor" or emphasis: 4 pt outline + bold text + the word "anchor"/"focus" where relevant; never color alone.
- Dashed outline = "additional / secondary / non-core"; solid outline = "core". (Used on #15, #29.)
- Native vector shapes and text only. **No raster images** except the two authorized KU branding assets.

---

## 3. Source / provenance rules

### 3.1 General
1. Native shapes and text are preferred over any image.
2. No third-party image, icon pack, stock illustration, screenshot, chart, or infographic is used unless the project lead authorizes it in writing for a named slide.
3. Icons/pictograms are **course-owned**, drawn from native PowerPoint shapes (circles, rectangles, lines, triangles, freeform made from native shapes). No emoji; no downloaded SVG.
4. All factual statements on slides trace to CONTENT_SPEC_v2_1 (evidence tags E-INFORMS, E-MOORE, E-KIOXIA, E-G20PB, E-GFT09, E-GFT14, E-GFT15). The evidence was *supplied by the project lead*; this build spec does not re-verify it and adds none.
5. Toy/illustrative values (slides #5, #22) are invented and are labelled as such; they must not look like real statistics.

### 3.2 Legacy-asset reuse register

| Legacy asset | Status |
|---|---|
| KU crest (`image1.png`) and KU Business School logo (`image2.png`) | **AUTHORIZED** — branding only |
| Flour/eggs/cake photo | NOT authorized |
| DATA SCIENCE raster banner | NOT authorized |
| Generic analytics clipart (monitor/chart/magnifier; hands-over-chart; data-literacy clipart and Venn) | NOT authorized |
| Old data-source OLE/EMF imagery and NEWSFACTOR JPEG (N12 #24) | NOT authorized |
| Merged N12 #28 raster (people/home/car, Moore curve, microSD photos) | NOT authorized (no cropping) |
| "Internet in 60 seconds" infographic | NOT authorized |
| Google Analytics screenshot | NOT authorized |
| Gartner 20%/80% infographic | NOT authorized |
| DIK/DIKW figure (internetofwater.org) | NOT authorized |
| 3V spiral (`image10.png`) | NOT authorized |
| NYT Google Flu Trends raster | NOT authorized |
| Word cloud, R-review screenshots, name-tag/group material | NOT authorized (slides deleted/excluded) |
| N12 slide text styling (Times New Roman, red emphasis words, bullet glyphs) | NOT inherited |

### 3.3 Build-level assumptions
- **B-1.** Toy values on #5 and #22 are the project-lead-approved illustrative data given in §5; they are not real and must not be presented as real.
- **B-2.** Simple native pictograms (person, house, car on #16; web/store/card/network on #13; document/audio/image/video/post on #18) are built from native shapes and are generic (no brand marks, no platform logos).

---

## 4. 30-slide build table

Layouts per §2.7. Strip: S4 = four-element strip, S3 = Volume/Velocity/Variety strip. Tag per §2.8. Footer = source footer required (§6).

| New # | Title (frozen) | N12 src | Layout | Primary native visual | Strip | Tag | Footer |
|---:|---|---|---|---|---|---|---|
| 1 | Seminar 2 — Principles in Data Science | #1 | L-TITLE | Title block + KU logo | — | — | — |
| 2 | Data literacy: can I trust this data for this question? | #2 | L-DIAGRAM | Three numbered question cards | — | — | — |
| 3 | Learning objectives | #3 | L-STD | 2×2 numbered cards | — | — | — |
| 4 | Vocabulary test | #5 | L-STD | Two-column numbered list (1–5 / 6–10) | — | — | — |
| 5 | Data and information | #6 | L-DIAGRAM | Data → Information → Decision flow with raw list → summary | — | Illustrative | — |
| 6 | Data science and data mining | #7 | L-DIAGRAM | Two overlapping outlined shapes + four field chips | — | — | — |
| 7 | Analytics: our working definition | #8 | L-STD | Definition focal panel + convention note | — | — | **Yes** |
| 8 | The analytics process | #9 (+#21) | L-DIAGRAM | Eight-step numbered flow (2 rows × 4) | — | — | — |
| 9 | Data analytics | #11 (+#12, #13) | L-DIAGRAM | Definition + bridge arrow to Vs | — | — | — |
| 10 | Business analytics: from a business problem to a better-informed decision | #14 (+#16) | L-DIAGRAM | 3-node chain + 3 question chips | — | — | — |
| 11 | Part 1 recap: vocabulary and relationships | #17 (+#20) | L-DIAGRAM | Five-node labeled relationship map | — | — | — |
| 12 | Four elements of business analytics | #23 (+#22, #37, #43, #46) | L-DIAGRAM | Anchor + three connected elements | — | — | — |
| 13 | Big data: data from everywhere | #24 | L-STRIP | Four pictogram tiles + hinge statement | S4: Data | — | — |
| 14 | More data ≠ more information | #25 (+#26) | L-DIAGRAM | "Measured / Not measured" comparison + verification chips | — | Historical | **Yes** |
| 15 | The Vs of big data | #27 (+#30, #32, #35) | L-DIAGRAM | Core panel (3 cards) + additional-questions panel (2 cards) | — | — | — |
| 16 | Why can we collect so much data? Two separate technology trends | #28 | L-DIAGRAM | Split COMPUTING / STORAGE panels with mini timelines | — | Historical | **Yes** |
| 17 | Velocity: when timing matters | #31 | L-STRIP | Two-lane timing diagram | S3: Velocity | Hypothetical | — |
| 18 | Variety: structured vs. unstructured data | #33 (+#34) | L-STRIP | Two-panel redraw | S3: Variety | — | — |
| 19 | Data: why does business analytics rely on it? | #36 | L-DIAGRAM | 2×2 question cards + habit box | — | — | — |
| 20 | Analytics: methods and types | #38 | L-STRIP | Method chips + two type cards | S4: Analytics | — | — |
| 21 | Descriptive analytics | #39 | L-STD | Typographic hierarchy only | — | — | — |
| 22 | Descriptive analytics in practice: a dashboard (illustrative) | #40 | L-DIAGRAM | Course-owned toy dashboard (3 metrics + trend) | — | Illustrative | — |
| 23 | Predictive analytics | #41 | L-STD | Typographic hierarchy + Input → Method/model → Estimate | — | — | — |
| 24 | Google Flu Trends: a good model that stopped being reliable | #42 | L-DIAGRAM | Three-stage timeline 2009 / 2013 / 2015 + lesson panel | — | — | **Yes** |
| 25 | Business problems | #44 | L-STRIP | Current state → perceived gap → desired state + decision box | S4: Business problem | — | — |
| 26 | Common business-analytics questions — and their limits | #45 | L-DIAGRAM | Three question cards + caution panel | — | — | — |
| 27 | From problem to outcome: the insight loop | #48 (+#47) | L-STRIP | Six-node loop, problem as anchor | S4: Insight | — | — |
| 28 | From finding to action: candidate actions to test | #49 | L-DIAGRAM | Five-step flow + feedback arrow | — | — | — |
| 29 | What business analytics can support — and what it cannot guarantee | #51 (+#50) | L-DIAGRAM | Two-column CAN SUPPORT / CANNOT GUARANTEE | — | — | — |
| 30 | What's next… | #52 | L-CLOSE | Four-step habit chain | — | — | — |

Slide count **30**; each of slides 1–30 appears exactly once. Source-footer slides: **#7, #14, #16, #24**. Tags: Historical #14, #16; Illustrative #5, #22; Hypothetical #17.

---

## 5. Slide-by-slide build requirements

Conventions: "Text (frozen)" is taken from CONTENT_SPEC_v2_1 (or N12 where the spec says "unchanged"); the builder may break lines but may not paraphrase, add or drop claims. All node text ≥ 18 pt; body ≥ 20 pt.

### 1 — Seminar 2 — Principles in Data Science
- **Layout:** L-TITLE. KU Business School logo top-left, maximum approximately 1.6 in wide (§2.6). Title "Seminar 2 — Principles in Data Science" 40 pt bold `PRIMARY`, left-aligned, vertically centered in upper-middle.
- **Text (frozen):** "BUSS256: Introduction to Big Data Analytics and Interpretation" · "Korea University Business School" · "Prof. Gun-woong Lee" · "Spring 2027".
- Thin `RULE` line between title and course lines. No images other than the logo. No slide number, no crest (logo only).

### 2 — Data literacy: can I trust this data for this question?
- **Text (frozen):** Data literacy = judging whether data is useful for a problem and arguing with evidence from data; it means reading and understanding data. Three questions for any dataset: **Where did it come from? · What does it measure? · Is it good enough for this question?** Algorithm literacy comes later with the techniques.
- **Visual:** three equal cards (3.85 in × 2.6 in, 0.29 in gaps) at y = 2.9 in, each with a circled numeral (1, 2, 3) and the question at 24 pt bold. Definition sentence above the cards (24 pt, y = 1.9 in). Line below the cards (18 pt, `MUTED`): "Algorithm literacy comes later, with the techniques."
- No Venn, no clipart.

### 3 — Learning objectives
- **Text (frozen), four outcomes:** (1) use the core terms in plain business language; (2) name the four key elements of business analytics and how they connect; (3) explain what BA is used for and what it cannot promise; (4) practise one habit — before you trust a number or claim, ask how you would check it.
- **Visual:** 2×2 cards (5.95 in × 2.2 in), numeral badge 1–4 top-left, text 24 pt. No stock image.

### 4 — Vocabulary test
- **Text (N12 #5, unchanged):** "How many terms do you know?" then: 1 Data · 2 Information · 3 Data Science · 4 Data Mining · 5 Analytics (vs. Analysis) · 6 Data Analytics · 7 Business Analytics · 8 Big Data · 9 Business Problems · 10 Descriptive/Predictive Analytics.
- **Visual:** prompt on one line (24 pt bold); two columns (1–5 left, 6–10 right), numerals as part of each text line, 28 pt for terms. Opening diagnostic: **no definitions, no answers, no hints.**

### 5 — Data and information
- **Text (frozen):** Data = raw facts (flour, eggs); information = data organized so it can answer a question (the cake). Business version: raw transactions → organized summary → a decision question (approved illustrative data below). Prompt: **"Is a spreadsheet of 10,000 transactions data or information; what turns it into information?"**
- **Visual:** three native nodes in a row — **1 Data → 2 Information → 3 Decision** — with node captions "raw facts", "data organized to answer a question", "a decision to make". Tag `ILLUSTRATIVE EXAMPLE` (dashed).
  - **Node 1 — "Raw transactions":** a mini list of eight rows, each "Sale · Product A" or "Sale · Product B" (five rows for Product A, three for Product B, in mixed order).
  - **Node 2 — "This week":** "Product A = 5 units" and "Product B = 3 units".
  - **Node 3 — "Decision question":** **"Should we stock more A next week?"** It is a question, not a claimed correct decision; no answer is shown.
  - The flour/eggs/cake analogy is one text line only (no photo, no drawing). Prompt in a bottom bar (22 pt bold). The values above are toy values (B-1).

### 6 — Data science and data mining
- **Text (frozen):** **Data science** = a set of principles for extracting useful information and knowledge from data; it draws on computer science, mathematics, statistics and business/strategy knowledge. **Data mining** = the technologies and methods that apply such principles to discover useful patterns and information in data. They overlap; one is not simply "inside" the other.
- **Visual:** two equal-size rounded shapes side by side that **partly overlap** (about 25% horizontal overlap). Left: solid 3 pt outline, label "Data science". Right: dashed 3 pt outline, label "Data mining". Overlap zone has a text label "overlap" (no fill color required; use a pattern-free `PANEL` fill). Beneath/above the left shape, four chips for the contributing fields: computer science · mathematics · statistics · business/strategy knowledge, joined to "Data science" by thin lines labeled "draws on". Definitions in 20–22 pt text under each shape. Caption: "They overlap; one is not simply 'inside' the other." **No subset/nesting layout; no raster banner.**

### 7 — Analytics: our working definition
- **Text (frozen):** **"Analytics is the scientific process of transforming data into insight for making better decisions."** *(INFORMS)* — "Different sources draw the boundaries differently; this is the convention used in BUSS256."
- **Visual:** the definition is the focal point: a wide panel (11.1 in × 2.6 in) with 4 pt `PRIMARY` left bar, text 32 pt, with "scientific process", "transforming data", "insight", "better decisions" in bold (bold, not color alone). Convention note below at 20 pt `MUTED`. **Source footer required** (§6). No Wikipedia text; no clipart.

### 8 — The analytics process
- **Text (frozen):** Problem identification → data collection → data storing → data management (pre-processing, cleansing…) → data analysis → results and interpretation → answering the business problem → offering insights. *Analysis is one step within the broader analytics process; analytics may include descriptive, predictive and decision-oriented work.*
- **Visual:** eight nodes in two rows of four, each with numeral 1–8; row 1 arrows left→right, a connector wraps from node 4 to node 5, row 2 left→right. Node labels: 1 Problem identification · 2 Data collection · 3 Data storing · 4 Data management (pre-processing, cleansing…) · 5 **Data analysis** · 6 Results and interpretation · 7 Answering the business problem · 8 Offering insights. If step 5 is emphasized: 4 pt outline **plus** a small label "analysis = one step" under it; optional `ACCENT` outline. Italic sentence below the flow (20 pt).

### 9 — Data analytics
- **Text (frozen):** **Data analytics is analytics focused on analyzing data** — collecting, organizing and examining data to find patterns and useful information. When the data are very large, new challenges appear; the Big Data section takes them up (volume, velocity, variety).
- **Visual:** definition panel (as #7 style, 28 pt). Below: a bridge — node "Data analytics" → arrow labeled "when the data are very large" → node "New challenges: volume · velocity · variety (Big Data section)". No raster illustration.

### 10 — Business analytics: from a business problem to a better-informed decision
- **Text (frozen):** **Business analytics applies data and analytics to a business problem to generate insight for decisions.** It helps answer three questions: **How are we doing? Why? What should we do next?**
- **Visual:** chain **Business problem → Analytics → Better-informed decision** (nodes numbered 1–3, arrows unlabeled but sequence numbered); data is shown as an input tag feeding the Analytics node, labeled "data". Under the chain, three question chips (numbered Q1–Q3): "How are we doing?", "Why?", "What should we do next?". Definition sentence above (24 pt). Do not copy N12's Data/Data/Data → Tools & Techniques diagram.

### 11 — Part 1 recap: vocabulary and relationships
- **Text (frozen):** five terms with one-line meanings — **Analytics** (the broad process for turning data into insight for decisions); **Data analytics** (analytics focused on analyzing data); **Data mining** (methods for discovering useful patterns in data); **Business analytics** (the application of analytics to business problems and decisions); **Data science** (broader interdisciplinary principles and practice around learning from data). Note: "Boundaries vary across sources; BUSS256 uses these working distinctions." Check-back: **"Which terms from the opening vocabulary test can you now explain in your own words?"**
- **Visual:** five equal nodes (2 pt outline, term bold at 22 pt + one-line meaning at 18 pt) arranged: Data science (left), Analytics (center), Data analytics (upper right), Business analytics (lower right), Data mining (bottom center). **Five labeled directed connectors** (labels ≥ 16 pt, on a `PAPER` pad so they stay readable):
  1. Data science → Analytics: "provides principles to"
  2. Analytics → Data analytics: "focused on data"
  3. Analytics → Business analytics: "applied to business problems"
  4. Data mining → Data analytics: "supplies methods to"
  5. Data mining → Business analytics: "supplies methods to"
- **Prohibited:** containment circles, nested shapes, any shape enclosing another. Check-back prompt in a full-width bar at the bottom (22 pt bold). Boundary note at 16 pt `MUTED`.

### 12 — Four elements of business analytics
- **Text (frozen):** **Business problem** — What perceived gap or decision are we trying to address? **Data** — What evidence do we have, and is it suitable for the problem? **Analytics** — How do we examine the evidence to find patterns, estimates, or comparisons? **Insight** — What have we learned that can inform the decision? Note: "These are connected elements, not a rigid one-way sequence. The later insight-loop slide shows how they interact in a decision process."
- **Visual:** **Business problem** as the anchor (larger node, 4 pt outline, tag "anchor", centered); **Data, Analytics, Insight** as three satellite nodes placed around it (left, top/right, right-bottom). Each satellite is connected to the anchor by a **two-way** connector (no single-direction sequence, no numbering that implies order). Each node carries its guiding question at 18 pt. Note text at the bottom (18 pt). **Do not** draw Data → Analytics → Problem, a closed loop with outcome/feedback, or the six-node loop of #27.

### 13 — Big data: data from everywhere
- **Strip:** S4, **Data** current.
- **Text (frozen):** Data comes from web and e-commerce, purchases at stores, bank and card transactions, social networks. **"Collecting more data has become easier; turning it into useful information remains hard."**
- **Visual:** four tiles in a row (2.85 in × 2.3 in), each a native pictogram + 20 pt label: **Web / e-commerce** (browser-window rectangle with title bar and cursor arrow), **Purchases at stores** (receipt-shaped rectangle with lines or basket outline), **Bank / card transactions** (rounded card with stripe line), **Social networks** (three circles linked by lines). Hinge statement in a full-width bar below (24 pt bold). No OLE/EMF/stock imagery; no logos.

### 14 — More data ≠ more information
- **Tag:** `HISTORICAL EXAMPLE`. **Source footer required.**
- **Text (frozen):** A January 2008 TechCrunch report, citing Google engineering work, described Google as processing roughly **20 PB of data per day as of September 2007** — large-scale data processing across Google's MapReduce workloads, **not** "20 PB of user searches per day." *Historical example — not a current figure.* Large volume alone does not create information or insight. Ask: **what was measured, when, and for what purpose?** Hinge: **"Big data also creates special challenges in volume, velocity and variety."**
- **Visual:** left card "What the report described": "≈ 20 PB / day · as of Sept 2007 · reported Jan 2008 · large-scale data processing (MapReduce workloads)"; right card "What it is NOT": "'20 PB of user searches per day'" with a native ✕-in-circle shape and the word **NOT**. Under them, three verification chips: **What was measured?** · **When?** · **For what purpose?** Statement "Large volume alone does not create information or insight." Hinge in a bottom bar. **Do not** add Facebook/eBay figures or any modern statistic.

### 15 — The Vs of big data
- **Text (frozen):** **Volume** — the amount of data. **Velocity** — the rate at which data are generated, arrive or need processing. **Variety** — different forms and sources of data. **Value** — whether using the data can create useful value relative to its cost. **Veracity** — whether the data can be trusted, considering accuracy, bias and provenance. Note: "Different frameworks use 3V, 4V or 5V labels; BUSS256 starts from the classic 3Vs and uses Value and Veracity as two additional questions." Teaching link: check your input before you trust your output (GIGO).
- **Visual:** left panel (solid 3 pt outline, header "CORE: THE THREE Vs") holds three equal cards numbered 1–3 (Volume, Velocity, Variety) with definitions at 20 pt; right panel (dashed 3 pt outline, header "TWO ADDITIONAL QUESTIONS") holds two cards numbered +1, +2 (Value, Veracity) with their definitions, each phrased as a question line under the label as the content spec states. Panels differ in **position, header text, numbering and outline style** — color optional. GIGO line and framework note beneath (18 pt). All five terms ≥ 22 pt bold. **No spiral.**

### 16 — Why can we collect so much data? Two separate technology trends
- **Tag:** `HISTORICAL EXAMPLE`. **Source footer required.**
- **Text (frozen):** Context: data are generated by people, homes and vehicles. **Computing.** Gordon Moore's 1965 observation projected roughly annual doubling of components (transistors) on integrated circuits; in 1975 he revised the pace to roughly every two years; an empirical observation/projection, not a natural law. **Storage.** Kioxia announced a *working prototype* of a 2 TB microSDXC card in September 2022; mass production was planned for 2023. **Teaching point:** "Advances in computing and storage made it increasingly feasible to collect and process much larger datasets. These are related technology trends, not evidence that one caused the other." Label: historical examples, not current product specifications.
- **Visual:** a thin top band with three native pictograms (person, house, car) and the text "Data are generated by people, homes and vehicles". Below, two equal panels with header bars **COMPUTING** (left) and **STORAGE** (right) separated by a vertical divider labeled "RELATED, BUT SEPARATE". Each panel has a mini two-point timeline: Computing — "1965: ≈ annual doubling" → "1975: ≈ every two years", plus "empirical observation/projection, not a natural law"; Storage — "Sept 2022: working prototype, 2 TB microSDXC" → "2023: mass production planned". **No curve, no chart, no numeric series.** Teaching point in a bottom bar (20 pt bold). Do not reuse the merged raster, the Moore chart, or the 2005/2014/2022 card comparison.

### 17 — Velocity: when timing matters
- **Strip:** S3, **Velocity** current. **Tag:** `HYPOTHETICAL EXAMPLE` (dotted).
- **Text (frozen):** **Definition:** velocity is how quickly data are generated, arrive, or need processing. **Implication:** some decisions lose value when the data arrive too late. **Illustrative example — not measured data:** a card payment system sees a suspicious transaction (hypothetical). **If a suspicious transaction is flagged within seconds, it may be stopped before completion; if it is detected much later, that preventive opportunity may already be gone. Same underlying data, different decision value because of timing.** **Verification prompt:** "If this were a real statistic, what source and timestamp would you need before quoting it?"
- **Visual:** definition + implication as two lines (22 pt). Two horizontal lanes on a shared left-to-right time axis labeled "time →": **Lane A "Flagged within seconds"**: nodes "Suspicious transaction" → "Flag raised" → "May be stopped before completion"; **Lane B "Detected much later"**: "Suspicious transaction" → (long gap marked "…") → "Detected" → "Preventive opportunity may already be gone". Gap length in B is drawn visibly longer; **no numbers or units on the axis**. A banner between/below lanes: "Same underlying data — different decision value because of timing." Verification prompt in a bottom bar. No infographic, no statistics.

### 18 — Variety: structured vs. unstructured data
- **Strip:** S3, **Variety** current.
- **Text (frozen):** **Structured data** — organized in a predefined structure such as rows and columns (database tables, spreadsheets). **Unstructured data** — text documents, audio, images, video, social-media posts. *Some data are semi-structured (for example JSON or log records); we do not go deeper here.*
- **Visual:** two equal panels with header bars "STRUCTURED" and "UNSTRUCTURED" and a center label "vs". Structured panel: a native mini table (4 columns × 4 rows; header cells "ID · Item · Amount · Date", body cells "…" or toy short entries) + captions "rows and columns", "database tables, spreadsheets". Unstructured panel: five labeled pictograms — text document (page with lines), audio (speaker with arcs), images (frame with triangle/circle), video (rectangle with play triangle), social posts (speech bubble) — each with its label. Secondary note (18 pt `MUTED`) at the bottom: "Semi-structured — JSON / logs; not developed further." **No platform logos, no 20%/80% claim, no video links.**

### 19 — Data: why does business analytics rely on it?
- **Text (frozen):** questions about data — What kinds of data? How do we get it (data collection)? How do we manage it? How do we analyze it? **Where the course goes:** data types and data management are covered later; analytical methods follow; text analysis later handles unstructured text. Data-literacy habit: say when and how a dataset was collected (for example, the App Store dataset is a historical snapshot collected in July 2013 and is labeled that way).
- **Visual:** 2×2 numbered cards: 1 What kinds of data? · 2 How collected (data collection)? · 3 How managed (data management)? · 4 How analyzed (data analytics)? Below, a "Where the course goes" strip (one line, 20 pt) and a habit box with a small calendar-style pictogram or the word "Habit:" (text carries meaning). **No week numbers.**

### 20 — Analytics: methods and types
- **Strip:** S4, **Analytics** current.
- **Text (N12 #38, unchanged):** "Refers to various methods and procedures in — Mathematics (Arithmetic: Sum, Mean, SD…) — Statistics (Prediction, Probabilities,…) — Computer Science (Machine Learning) — …" and "Types of analytics — Descriptive Analytics: What has happened? — Predictive Analytics: What could happen?"
- **Visual (hierarchy only):** left block "Methods and procedures in" with three bullets plus the "…" line; right block "Types of analytics" as two cards "Descriptive Analytics — What has happened?" and "Predictive Analytics — What could happen?" (cards differ by label and position; icon optional). No new method categories.

### 21 — Descriptive analytics
- **Text (N12 #39, unchanged):** "Identify, classify, and count objects or events — Money spent or number of widgets manufactured in the past time period. — They are critical for knowing how the organization is performing—your current situation. — For example, they let you know if you are above or below budget, or are performing up to standards. — This category includes reports and dashboards." and "Learn from past behaviours, and understand how they might influence future outcomes".
- **Visual:** typography/layout only: lead sentence 28 pt bold; three supporting lines at 22 pt with generous spacing; closing sentence set apart under a `RULE` line. No images, no new claims.

### 22 — Descriptive analytics in practice: a dashboard (illustrative)
- **Tag:** `ILLUSTRATIVE EXAMPLE — Online Store` (dashed) at slide level **and** repeated inside the dashboard frame header, with the line "Toy values — not from a real organization or dataset".
- **Text (frozen):** Questions kept: **"Which numbers tell us what happened?"** and **"What question would require prediction?"**
- **Visual:** a dashboard frame (≈ 8.0 in × 4.4 in, 2 pt outline) at left with:
  - three KPI tiles: **Orders = 120** · **Revenue = $6,000** · **Average order value = $50**;
  - one simple weekly revenue trend, as a four-point line (native chart or shape-drawn) with marker shapes, direct data labels and the axis label "Week 1–4": **Week 1 = $1.2k · Week 2 = $1.4k · Week 3 = $1.5k · Week 4 = $1.9k**.
  - Internal consistency (fixed): 120 orders × $50 = $6,000; $1.2k + $1.4k + $1.5k + $1.9k = $6.0k = Revenue.
  - At right, the two frozen questions in two stacked boxes (22 pt).
  - Do not reproduce Google Analytics layout, tabs, icons, or numbers. The values are intentionally toy values and must not imply a real organization or dataset.

### 23 — Predictive analytics
- **Text (N12 #41, unchanged):** "Look at the trend of past events to anticipate possible future outcomes. — This allows the organization to better plan for the future—deciding what actions to take that can improve the future results. — Discover patterns and correlations in data that might be missed by the human eye. — Build a model that will allow “What if” analyses to decide on the best course of action."
- **Visual:** lead sentence 28 pt bold; three supporting lines 22 pt; a small three-node strip **Input → Method / model → Estimate** (labels only, 18 pt) at the bottom; **no new claim, no numeric example.**

### 24 — Google Flu Trends: a good model that stopped being reliable
- **Source footer required.**
- **Text (frozen):** **The model.** Ginsberg et al. (Nature, 2009) built Google Flu Trends from search-query data and tested it on a held-out validation period. **The problem.** Lazer et al. (Science, 2014) reported that GFT substantially overestimated flu activity — in early 2013 it predicted more than twice the CDC-reported proportion of influenza-like-illness doctor visits — and discussed algorithm dynamics and "big data hubris" among the problems. **The outcome.** In August 2015 Google Research announced that it would stop maintaining its own Flu Trends website and instead provide signal data to specialist research partners. **The lesson (verification):** *"A model can fit historical data and still become unreliable when the data-generating environment changes. Keep checking performance on new data."*
- **Visual:** three-stage horizontal timeline on a labeled line with three year markers and numbered cards (schematic spacing, no scale):
  - **1 — 2009:** "Original study (2009): GFT estimates tracked CDC-reported flu activity over the 2003–2008 study period, including a held-out validation period." (Ginsberg et al., *Nature*, 2009; built from search-query data.) This is a text-only statement.
  - **2 — 2013:** substantial overestimation, discussed in the 2014 critique (Lazer et al., *Science*, 2014): early 2013, more than twice the CDC-reported proportion of influenza-like-illness doctor visits; algorithm dynamics and "big data hubris".
  - **3 — 2015:** Google stopped maintaining its own Flu Trends website and provided signal data to specialist research partners (Google Research, Aug. 2015).
  - Lesson in a full-width panel (22 pt, bold lead-in "Lesson:"): historical fit does not guarantee future reliability when the data-generating environment changes; keep checking performance on new data.
- **Prohibited:** NYT raster, any replacement chart, any curve, any invented or plotted data.

### 25 — Business problems
- **Strip:** S4, **Business problem** current.
- **Text (frozen):** **A business problem is a perceived gap between the current state and a desired state that requires deciding how to close the gap.** Examples: *current customer churn is above the desired level; inventory availability is below the desired service level; sales growth is below a target.* For each: what is the current state, the desired state, and the decision needed to close the gap? BA helps when the gap can be measured and the decision can be informed by data.
- **Visual:** left→right: node **Current state** → bracket/double arrow labeled **perceived gap** → node **Desired state**; a fourth box beneath the gap labeled **Decision needed to close the gap** with an upward arrow to the gap. Three example chips below (churn, inventory availability, sales growth), each in 20 pt. Closing line (22 pt): "BA helps when the gap can be measured and the decision can be informed by data."

### 26 — Common business-analytics questions — and their limits
- **Text (frozen):** *How likely is client X to buy product Y?* (look at the client's purchase behaviour and patterns); *Which clients are at risk of going to competitors?* (look at similarities with clients who left); *What promotions should we offer to retain customers?* (look at relationships between offers and retention). **Limits:** prediction can identify who may be at risk; association can suggest patterns; **neither alone proves that an intervention caused an outcome.** One way to test an intervention is an A/B test.
- **Visual:** three numbered question cards (question 22 pt bold; "look at…" line 18 pt). A caution panel (4 pt solid outline, a native warning-triangle shape, header text **CAUTION**) containing: "Prediction or association alone ≠ causal proof." and, once, "One way to test an intervention is an A/B test." No definition or elaboration of A/B testing.

### 27 — From problem to outcome: the insight loop
- **Strip:** S4, **Insight** current.
- **Text (frozen):** a **loop, not a hierarchy:** Business problem → Data → Information → Insight → Decision → Outcome / feedback → back to the business problem. **Insight** = an understanding of the business situation that can inform a decision; a good decision is judged by a measurable outcome consistent with the organization's goals, and it should help close the gap between the current and desired state. *Data vs. information is on the earlier slide; this slide is about what comes after information.* (Copy-edit carried: "desired".)
- **Visual:** six nodes numbered **1 Business problem · 2 Data · 3 Information · 4 Insight · 5 Decision · 6 Outcome / feedback** arranged clockwise around a rectangular ring; arrows between consecutive nodes plus a **return arrow from 6 to 1 labeled "feedback"**. Node 1 is the **anchor**: larger, 4 pt outline, tag "anchor". Insight definition in a side or bottom panel (20 pt); italic note at 16 pt. All nodes the same size except node 1; no tiers, no vertical stacking, no pyramid, no DIK/DIKW arrangement or labels such as "Knowledge".

### 28 — From finding to action: candidate actions to test
- **Text (frozen):** predictions and patterns do not automatically determine the action. Treat outputs as **candidate actions to evaluate:** *Prediction / finding → candidate action → test or compare → measure outcome → revise the decision.* Apply it to the three questions on the earlier slide.
- **Visual:** five numbered nodes in a row: **1 Finding / prediction → 2 Candidate action → 3 Test or compare → 4 Measure outcome → 5 Revise decision**, with a curved **feedback arrow from 5 back to 2**, labeled "repeat". Under node 1–2 a note: "A prediction does not automatically determine the action." Closing line (22 pt): "Apply this to the three questions on the earlier slide." No arrow from model output directly to "act".

### 29 — What business analytics can support — and what it cannot guarantee
- **Text (frozen):** **Can support:** describe what happened · identify patterns · estimate likely outcomes · compare options · inform operational and strategic decisions · contribute to competitive advantage when used well. **Cannot guarantee:** that the data are trustworthy · that correlation is causation · that a model that worked before will keep working · that a recommendation will improve the outcome. Close: **"The value of analytics depends on the question, the data, the method, and verification."**
- **Visual:** two equal columns. Left: header **CAN SUPPORT**, solid 3 pt outline, a native check-shape icon, six items. Right: header **CANNOT GUARANTEE**, dashed 3 pt outline, a native caution-triangle icon, four items. Distinction by header text, position (left/right), outline style and icon; color optional. Closing line in a bottom bar (24 pt bold). No video, no link.

### 30 — What's next…
- **Text (frozen):** **Next: Data structures and basics in R.** Our habit from here: **Predict it → work it out → run it → compare.** (No tutorial filename, no week number.)
- **Visual:** headline "Next: Data structures and basics in R" (32 pt bold). Four numbered chevrons: **1 Predict it → 2 Work it out → 3 Run it → 4 Compare**. No assignments, filenames or dates.

---

## 6. Source-footer policy

- Format: one or two lines at 12 pt `MUTED` in the footer zone (x = 0.6 in, y = 6.62 in, w = 10.4 in), beginning "Source:" (or "Sources:").
- Only the footers below are authorized. No additional sourcing claims; no URLs beyond what the content spec supplies; no "accessed" dates are invented.

| New # | Footer text (verbatim) |
|---:|---|
| 7 | Source: INFORMS, "Operations Research & Analytics" and "FAQs About O.R. & Analytics" (informs.org). |
| 14 | Source: TechCrunch, Jan. 9, 2008 (reporting Google's processing volume as of Sept. 2007). Historical example — not a current figure. |
| 16 | Sources: Intel, Moore's Law page (1965 projection; 1975 revision); Kioxia announcement, Sept. 28, 2022 (2 TB microSDXC prototype; mass production planned for 2023). Historical examples, not current product specifications. |
| 24 | Sources: Ginsberg et al., *Nature* (2009); Lazer et al., *Science* (2014); Google Research, "The Next Chapter for Flu Trends" (Aug. 20, 2015). |

Evidence status: as stated in CONTENT_SPEC_v2_1 §1, these records were supplied by the project lead and not independently re-verified in this pass.

---

## 7. PC-2 / grayscale policy

1. **No meaning by color alone.** Every distinction (current vs. other, core vs. additional, can vs. cannot, historical/illustrative/hypothetical, anchor vs. satellite, step order) must be carried by at least two of: text label, position, numbering, outline weight/style (solid/dashed/dotted), shape, icon, line type, marker.
2. Required encodings are listed per slide in §5 and in §2.5, §2.8, §2.9. Color is permitted only as redundant reinforcement.
3. Prohibited carry-overs from N12: red-bullet "you are here"; grey-shade depth hierarchy; red/green/blue zone coding; yellow link text; red emphasis words as the only emphasis.
4. **Grayscale test (QA, mandatory):** export the finished deck to PDF; convert all pages to grayscale (and, separately, to 1-bit threshold at 50%); a reviewer must be able to answer, per slide, "what is current / core / can / cannot / hypothetical" without color. Failures block release.
5. Contrast: ≥ 4.5:1 body, ≥ 3:1 large bold text and graphical outlines; no light-grey text on white below `MUTED`.
6. Each diagram element that is not decorative has alt text; decorative shapes are marked decorative; reading order = title → tag → left-to-right/top-to-bottom content → footer.

---

## 8. Animation / notes policy

- **Animations = 0** and **transitions = 0** in Build v1 (no entrance, emphasis, exit, motion path; no slide transitions; no auto-advance timings; no embedded or linked media; no hyperlinks to video). Progressive reveal is considered only after classroom QA.
- **Speaker notes:** none carried from N12; build with empty notes. No source URLs (e.g., the legacy scoop.intel.com note) or legacy text in notes. Lecturer scripts belong to a later tranche.
- No hidden slides, no off-slide objects, no comments, no embedded workbooks except those created by a native chart on #22 (if used; otherwise zero).
- No external links; no OLE objects; no EMF/WMF.

---

## 9. Build QA checklist

**Structure:** [ ] 30 slides, in the order of §4, titles match CONTENT_SPEC_v2_1 §4 exactly · [ ] 16:9 (13.333 × 7.5 in) · [ ] one master, five layouts (§2.7) · [ ] titles/body/footers in placeholders · [ ] slide numbers on 2–30.
**Content fidelity:** [ ] every slide's text equals the frozen text in §5 (no additions, no omissions) · [ ] no week numbers, filenames or dates not in the frozen content · [ ] no Facebook/eBay, Gartner 80%, "20 PB of user searches", Wikipedia/SAS/Webopedia/IBM quotes · [ ] "desired" spelled correctly on #27.
**Provenance:** [ ] only two raster images in the file (KU crest, KU logo) · [ ] media inventory = {crest, logo} (+ none) · [ ] no OLE, EMF, WMF, JPEG other than authorized assets.
**Fonts:** [ ] every run is Arial (fallback Aptos, then Calibri; never Helvetica) · [ ] theme major/minor = Arial · [ ] no Helvetica Neue/LT Std, MS PGothic, Times New Roman, Wingdings · [ ] no embedded fonts.
**Sizes:** [ ] body ≥ 20 pt, node labels ≥ 18, secondary ≥ 16, tags ≥ 14, footers/number ≥ 12 · [ ] no text overflow, no autofit shrink · [ ] no overlap between text and connectors except labeled connectors on pads.
**Diagrams:** [ ] #11 has five labeled connectors and no containment · [ ] #12 shows the anchor and two-way connectors · [ ] #15 groups distinguishable in grayscale · [ ] #17 axis has no numbers · [ ] #5 values exactly A = 5, B = 3 and decision shown as a question · [ ] #22 values exactly Orders 120, Revenue $6,000, AOV $50, weeks $1.2k/$1.4k/$1.5k/$1.9k, tag present twice · [ ] #24 has no chart · [ ] #27 has numbered nodes and a labeled feedback arrow, no DIK labels.
**Tags/footers:** [ ] tags exactly as §2.8 on #5, #14, #16, #17, #22 · [ ] footers exactly as §6 on #7, #14, #16, #24 and nowhere else.
**Strips:** [ ] S4 strip order Data | Analytics | Business problem | Insight, only on #13, #20, #25, #27, current state identifiable in grayscale · [ ] S3 only on #17, #18.
**PC-2:** [ ] grayscale and 1-bit tests pass (§7.4) · [ ] alt text present.
**Zero-features:** [ ] animations 0, transitions 0, notes empty, hyperlinks 0, media 0, comments 0, hidden slides 0.
**Branding:** [ ] KU crest ≥ 0.7 in wide, undistorted · [ ] KU logo ≤ about 1.6 in wide and not pixelated; otherwise crest or text-only branding (§2.6).
**Render:** [ ] open in PowerPoint (Mac/Windows) with no repair prompt · [ ] PDF export has 30 pages, 16:9.
**Integrity:** [ ] CONTENT_SPEC_v2_1 hash unchanged · [ ] N12 MD5 `992a2cf05bc63ed4419e9266055918f8` unchanged · [ ] no assessment-sensitive file opened.

---

## 10. November visual-migration handoff

### 10.1 Intent
Build v1 is a structurally clean working deck. November's integrated visual migration changes **theme, color, type, imagery and polish**, not structure or content.

### 10.2 Compatibility requirements
- All colors referenced through the theme tokens in §2.4; replacing tokens re-themes the whole deck.
- All text in placeholders; fonts via theme fonts (swap Arial globally in one place).
- Reusable components built as **named groups** with consistent names: `STRIP_S4` (four states), `STRIP_S3`, `TAG_HIST`, `TAG_ILLUS`, `TAG_HYP`, `NODE`, `NODE_ANCHOR`, `ARROW_LABELED`, `CARD_NUM`, `PANEL_CORE`, `PANEL_ADDL`, `ICON_*` (all native-shape groups), `DASH_TOY`.
- Shape naming: `S{nn}_{role}_{n}` (e.g., `S11_conn_label_3`) for every shape; z-order and reading order documented.
- Icons are native-shape groups, replaceable one-for-one by licensed icons later without moving layout (fixed bounding boxes).
- Layout grid in §2.1 retained so imagery and polish can be added without re-flowing text.
- Known later-tranche items: final brand typography, KU palette, lecturer notes, any progressive reveal, higher-resolution KU logo and crest (a November visual-migration opportunity, not a Build-v1 blocker), optional photographic imagery with licensed sources.

## 11. No-guessing attestation

- Every slide's text comes from CONTENT_SPEC_v2_1 (or, where it says "unchanged", from N12 #5, #38, #39, #41 as extracted in Pass 1). No instructional content was added, removed, reordered or reinterpreted.
- Visual choices (layout, native shapes, tags, strip coding, palette, font, sizes) are build specifications under the closed decisions A–I; they are not claims about the world.
- No factual claim, figure, URL, or source was supplied from model memory. Footer wording uses only names and dates present in CONTENT_SPEC_v2_1 §1.
- Toy values on #5 and #22 are the project-lead-approved illustrative data and are labeled illustrative.
- The N12 asset facts (sizes, authorized crest/logo) come from the Pass-1/visual-audit conversion of a copy; no source file was modified.
- No PPT/PPTX was built or edited; no web browsing; no assessment-sensitive file opened; KMB689 not touched; nothing staged, committed or pushed.

### Final-check ledger

| Check | Result |
|---|---|
| Frozen slide count | 30 |
| Slides 1–30 each exactly once (§4) | Yes |
| Unknown-provenance raster authorized | None |
| Legacy visual reuse authorized | KU crest and KU logo only |
| NYT GFT raster / GA screenshot / Internet infographic / DIK figure / 3V spiral / merged #28 raster | None authorized |
| Animations / transitions | 0 / 0 |
| Assessment reads | 0 |
| Source mutations | 0 |
| PPT/PPTX builds | 0 |
| Staged / commit / push | 0 / 0 / 0 |
