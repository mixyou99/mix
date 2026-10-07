# BUSS256 M6-R1 — Build v1.1 Project-Lead Acceptance

**Decision: M6-R1 CLASSROOM-READY WORKING DECK = PASS.**

The project lead independently reviewed Build v1.1 (`work/m6_r1_build_v1_1/BUSS256_M6_R1_2027_BUILD_v1_1.pptx` and its PDF) and accepted it. Build v1.1 is the **accepted classroom-ready working deck**. Build v1 remains a **historical candidate** and is not promoted.

## 1. What changed from Build v1

Six slides changed: **#10, #16, #21, #22, #23, #29**.

| Slide | Class | Change |
|---|---|---|
| #21 | Authorized post-freeze content correction | Closing statement replaced by "Descriptive analytics summarizes past and current performance — it tells us what happened." (aligns with #20: Descriptive Analytics = "What has happened?"). |
| #23 | Authorized post-freeze content correction | Bullets replaced: "This can support planning by estimating possible future outcomes." / "Discover patterns and correlations in data that might be missed by the human eye." / "Build models that generate estimates under specified inputs or assumptions." (consistent with #26: prediction or association alone ≠ causal proof). |
| #10 | Mechanical/design | Forced balanced two-line title. |
| #16 | Mechanical/design | Forced balanced two-line title. |
| #22 | Mechanical/design | Removed the duplicate top-right "ILLUSTRATIVE EXAMPLE — Online Store" tag; dashboard header label kept. |
| #29 | Mechanical/design | Forced balanced two-line title. |

#21 and #23 are post-freeze content corrections discovered during review of the actual deck; they are **not a reopening of the curriculum**. They are recorded in `teaching/BUSS256/02_working/M6_R1/BUSS256_M6_R1_CONTENT_SPEC_v2_2.md`, which supersedes `…_v2_1.md` as the current M6-R1 content authority (v2.1 remains the historical content-freeze authority at commit `1c6fe4870b6fab5f220cfb81b88a364222e08316`). Final slide count remains 30.

## 2. Regression evidence (from `work/m6_r1_build_v1_1/BUSS256_M6_R1_BUILD_v1_1_QA.md`)

- Package comparison v1 → v1.1: same part names; only the six slide XML parts (slide10, 16, 21, 22, 23, 29) changed.
- Rendered comparison: the other 24 slides = **0 differing pixels**.
- The other 24 slides are regression-free and remain locked.

## 3. Structural QA (v1.1)

30 slides · 16:9 · Arial only (no substitution in the PDF) · no animations · no transitions · no notes · no hyperlinks · no OLE · no external media · no prohibited legacy raster (only the KU crest and logo) · source footers on #7, #14, #16, #24 · PowerPoint opened it with no repair prompt.

## 4. PC-2

Preserved: meaning is not carried by color alone (labels, position, numbering, outline style, icons/shapes); the grayscale check passed in Build v1 and the 24 locked slides are render-identical.

## 5. Accepted deviations (unchanged from the Build v1 review)

`►` for `▶`; unequal section-strip widths; #4 terms at 22 pt; #5 Product A/B rows; #22 "$1.2k" labels with Week N ticks; zero-based value axis without numeric ticks; 0.75 in source-footer area; Aptos/Calibri fallback as policy only; #30 chevrons at 20 pt; existing KU branding treatment.

## 6. Scope limits

- The promoted deck is a **working deck**; the final integrated visual migration remains a later project tranche.
- Temporary directories under `work/` (extract, audit, rerun, build v1, build v1.1) remain untracked and are not cleaned up here.
