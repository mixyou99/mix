# BUSS256 M6-R5 — Compatibility QA Proposal for LibreOffice-Normalized PPTX

**Status: PROPOSAL — NOT RATIFIED. No tolerance in this document is in force until the project lead approves it.**

*Recorded 2026-10-11 by the spec author (Claude Code). Not part of any build spec. Gate 8 and every other numbered gate in v1.3.2 / v1.3.3 are unchanged.*

## 1. Problem

| Item | Value |
|---|---|
| Distribution file | A LibreOffice-normalized 29-slide PPTX. The professor confirmed it opens normally in Microsoft PowerPoint. |
| Observed difference from the source build (reported by the project lead) | 884 objects differ by more than 1 EMU. Maximum coordinate difference 533 EMU (0.00058 in, 0.042 pt). |
| Author verification of these figures | **None.** The author has not read the normalized file. The figures are taken as reported. |
| Conflict | Gate 8 (GEOMETRY_MATCH) requires ±1 EMU, so the normalized file fails it as written. |

Two shortcuts are both rejected:

- **Relaxing gate 8.** It would weaken the check of the builder against the frozen spec.
- **Waiving geometry checks on the distribution file.** It would leave the file students receive unverified.

The proposal keeps the two files separate. Each file is verified for what it is.

## 2. Two artifacts, two verdict columns

| Code | Artifact | Role |
|---|---|---|
| **S** | Source build: the builder's direct output from the frozen spec | Proves the spec was implemented exactly |
| **D** | Distribution file: S after LibreOffice normalization | The file students and PowerPoint receive |

Every gate result is reported separately for S and D. A PASS on one never stands in for the other.

## 3. Proposed verification tracks

| Track | Applies to | What it proves | Proposed rule |
|---|---|---|---|
| **V1 Exact frozen-spec implementation** | S | The builder implements the spec | All 38 gates exactly as written; gate 8 stays ±1 EMU. No change. |
| **V2 Normalized PowerPoint-compatible output** | D | D is a well-formed, traceable derivative of S | (a) Provenance: converter name and exact version, command line and options, input S SHA-256, output D SHA-256, date. (b) Package integrity: ZIP valid; every XML part parses; every relationship target resolves; content types complete; no unknown or dangling parts. (c) Reproducibility: a second conversion of the same S gives the same D hash, or the differences are listed. |
| **V3 Semantic/content equality** | S vs D | Normalization changed no content | Exact equality, 0 differences allowed. **Inventory:** slide count and order; layout per slide; per-slide shape-name set (1:1 mapping, no renamed, dropped or added shapes); shape types. **Text:** every text run's string, font (latin/ea/cs), size, bold, italic and color; paragraph alignment, line spacing and spacing before/after; body insets, anchor, wrap and autofit state. **Tables:** cell text, row heights, column widths, borders, fills. **Other:** speaker notes verbatim; z-order; hidden flags; 0 timing, animation or transition nodes; 0 pictures, OLE, SmartArt, chart parts or embedded fonts. Mechanical gates other than 8, 18 and 38 are re-run on D unchanged. |
| **V4 Bounded geometry round-trip drift** | S vs D | Normalization moved nothing visibly | See §4. Gate 8 is **not** applied to D; V4 replaces it for D only. |
| **V5 Native PowerPoint opening without repair** | D (and S, reported separately) | PowerPoint accepts the file as is | A person opens the exact file by hash in Microsoft PowerPoint (version recorded). PASS only if there is no repair or "problem with content" dialog and no "Repaired" in the title. On a repair prompt: Cancel, never Repair. The file hash is checked before and after. **Not evidence:** Quick Look, ZIP validity, XML parsing, LibreOffice opening, or PDF conversion. |
| **V6 Independent visual QA** | D, and the PDF exported from D | Students see what the spec intends | The MV gates 11, 14, 35, 37 and the MV halves of 12, 31, 36 run on D's PowerPoint render and D's PDF, by the independent reviewer. This includes slide-14 R1–R4 (and R4(e) if adopted). A pass on S renders does not carry over. |

**Release condition (proposed):** S passes V1, and D passes V2–V6. Any FAIL triggers the existing STOP rule.

## 4. V4 detail: bounded drift (candidate rules; none ratified)

**Measure.** For every shape matched by name in S and D, record Δ for:
- `a:off` x and y;
- `a:ext` cx and cy;
- every custom-geometry path point (converted to slide coordinates);
- table column widths and row heights.

Report the number of values with \|Δ\| > 1 EMU, the maximum \|Δ\|, and the full per-object table.

**Candidate rules for review:**

| ID | Candidate | Note |
|---|---|---|
| V4-a | Per-value ceiling. Option A: \|Δ\| ≤ 914 EMU (0.001 in, the spec's stated precision). Option B: a tighter ceiling set from the observed distribution. | The observed maximum of 533 EMU is below Option A. **The value is a project-lead decision.** |
| V4-b | Mechanism check (stronger than a ceiling): each D value equals the S value after a stated, deterministic unit conversion. For example, LibreOffice's internal 1/100 mm grid (1/100 mm = 360 EMU). Any value not explained by that conversion is listed and reviewed individually. | The 1/100-mm hypothesis is **unverified**. It must be confirmed against the actual files. |
| V4-c | Ext drift must not change text layout: every text box in D still fits by the §19 spec model at D's actual width and height. | 0 new wraps are allowed. For example, S24_MAPS in v1.3.3 has only 0.069 in of horizontal margin. |
| V4-d | Gates 18 and 38 conditions are re-evaluated on D's actual coordinates, and every relational condition must still hold: M2 inside its cell, 0 border crossings, no leader crossing, the vertical run strictly between the table edge and M1, and leader ends on mark edges. | For the gate-38 endpoint distance, report D's value. A drifted tolerance (for example ≤ 0.002 in) is a **project-lead decision**, since 421 EMU of design offset plus up to 533 EMU of drift can exceed the current 0.001 in (914 EMU). |
| V4-e | No drift is accepted on the slide size (`p:sldSz` exact), or on the 1:1 shape mapping. | — |

## 5. What this proposal does not do

- It does not change gate 8, any numbered gate, the STOP rule or reviewer ownership.
- It does not ratify a tolerance, converter or distribution workflow.
- It does not claim that S, D or Build v2 passes anything.
- It does not explain why the source build triggered PowerPoint repair. Build v2 (viewProps removed) is still awaiting its manual open test. If Build v2 opens cleanly, normalization may be unnecessary, and this proposal should be reconsidered.

## 6. Decisions requested from the project lead

1. Is D or S the production artifact? Which file does `03_final/production` receive?
2. The V4-a ceiling (Option A, B or another value), and whether V4-b is required.
3. The gate-38 endpoint tolerance on D (V4-d).
4. Converter version pinning, and the location of the provenance record.
5. Whether V3's run-property list is complete enough, or needs additions (for example `lang`, kerning, `dirty` flags).
