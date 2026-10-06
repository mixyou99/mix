# Production Log — A2 assignment .docx (TRIAL)

*Jun 18, 2026. Trial production of one file to validate the workflow before the bulk phase.
Output: `03_final/production/BUSS256_A2_GroupAssignment_2027.docx` (10 pages). Source original
`A2/BUSS256_Group Assignment.docx` was read in place and NOT modified.*

## Workflow validated
docx-js (local `npm install docx`) → build script → `Packer.toBuffer` → write to `03_final/production/`.
Validation: all 26 package XML parts parse; pandoc round-trip confirms content; LibreOffice render →
10-page PDF, visually inspected (title, deliverables, rubric, instructor note). Workflow is sound for
the bulk phase.

## What was merged from each draft
- **P-1 (AI-permission language):** applied the three replacements that live in *this* file — p8
  (Notes: "DO NOT USE AI CHATBOTS" → the AI-Collaboration permission paragraph), p61 (Step 5) and p68
  (Step 6) ("DO NOT COPY from any online resources…" → "explain in your own words; you may consult AI…
  but verify and cite"). The old bans are **removed**, not appended.
- **P-2 (structure):** redesigned task framing (unique per-category slice; "no two teams share data");
  Scheme-1 allocation (assigned category + slice-file plug-in note + an empty Group→Category table);
  retained the 8-step analytical spine; replaced the old requirements block with the **gate-vs-judgment
  deliverable split** — Section A "Technical Checklist" (G1–G8, pass/fail) and Section B "Analysis &
  Decision" (J1–J4, scored) — plus Section C (the four AI artifacts B-1–B-4).
- **P-3 (rubric):** appended a "Grading Rubric" section — weighting table, J1–J4 0/1/2/3 descriptor
  tables, gate-cap, disclosure pass/fail, peer-eval multiplier. The grading-automation **tier map** was
  placed in a separate, clearly-marked **"Instructor Note — REMOVE BEFORE STUDENT DISTRIBUTION"** page
  (it is instructor-internal, not for students).

## Conflicts found while merging, and how resolved
1. **Old ban vs. new permission (p8).** Used the P-1 wording; the ban is fully removed (not shown
   alongside).
2. **Old "aggregate the 8 datasets" + "category dummies + baseline" vs. Scheme-1 single category.** The
   original cross-category requirements were **replaced**, not appended, by G1 (assemble *one* category
   slice) and G4 (a *within-slice* justified-baseline dummy set).
3. **Old "5 points deducted" file-naming penalty (p93) vs. P-2 gate (no points).** Rendered as gate item
   G8; the points-penalty language was dropped.
4. **Old Steps 5/6 "DO NOT COPY…" vs. P-1 own-words/verify wording.** Replaced in place.
5. **Tier map placement.** P-3's tier map is instructor-internal; rather than expose grading-automation
   detail to students, it was moved to the "remove before distribution" appendix. *(Flag: confirm you
   want it kept in this file at all, vs. a separate instructor doc.)*
6. **P-1 item #4 (Common Mistakes line) is in a DIFFERENT file** (`…Common Mistakes…pptx`), not this
   assignment `.docx` — so it is **out of scope for this trial** and not applied here. It must be applied
   when the Common Mistakes handout is produced.

## What did NOT translate cleanly from Markdown → .docx (and how handled)
- Markdown tables were **rebuilt as native Word tables** (dual-width DXA, shaded headers; gate=peach,
  judgment=green). Renders correctly in LibreOffice.
- Special characters (−log(Rank), R², ×, en/em dashes, the • bullet glyph) render correctly — verified
  in the PDF.
- Inline bold/italic preserved via separate runs. No images involved. No data loss; nothing required a
  manual XML patch.
- The Group/member table and the Group→Category allocation table are intentionally **empty templates**.

## Placeholders / open items left for the professor
- **`[DATE — professor to confirm against final 2027 calendar]`** — due date (not guessed; old spec said
  "Nov 23", canonical Updated syllabus = Week 13).
- **Group → Category allocation table** — `[to assign]` rows to be filled.
- **Slice-file plug-in** — per-group `BUSS256_A2_<Category>_GXX.csv` files are a **separate data task**
  (not generated in this trial); noted in the doc where they attach.
- **Collection date** — marked "to be confirmed during dataset refresh" (2013 snapshot; D-5 re-collect).
- **All rubric numbers marked PROPOSED** — weights 30/25/30/15, the 50% gate cap, the peer multipliers.
- **Instructor-Note appendix** must be removed before any student distribution.

## Status
Trial succeeded. For the bulk production phase, the same build pattern applies; the only file-specific
inputs are the merged content per source file and its own dependency list (e.g., this `.docx` carries
P-1 + P-2 + P-3; the Common Mistakes `.pptx` separately carries P-1 #4).

---

## Revision — Jun 18, 2026: black-and-white / print-safe pass
Re-produced the same `.docx` (overwrite) for black-and-white printing/photocopying. **No meaning now
depends on color.**

**Changes:**
- Removed all color fills and colored text (the orange gate / green judgment fills, the blue headings,
  the red PROPOSED/date). Everything is now black text on white, with **grayscale-only** shading.
- Tables: **dark-gray header row (≈25% gray) with white text + light-gray zebra rows** — both survive
  B&W printing and are separated by gray borders regardless.
- Gate vs judgment now distinguished by **non-color cues**: the section headings ("A. Technical
  Checklist (GATE — pass/fail…)" vs "B. Analysis & Decision (SCORED…)"), a **bold lead tag** under each
  ("GATE — pass/fail." / "SCORED — these items differentiate your grade."), and the structural
  difference (the gate table has no weight column; the judgment table has a Weight column).
- PROPOSED markers are now the literal **bold "[PROPOSED]"** (no red), e.g., "30% [PROPOSED]",
  "50% [PROPOSED]", "Gate cap [PROPOSED]".
- Headings are black with a black bottom-rule on H2.

**Print legibility verification:** rendered to PDF (10 pages) and re-rendered with `pdftoppm -gray`
(true grayscale, simulating B&W). Inspected pages 1 (title), 5 (gate + judgment + artifacts), 6
(artifacts + file naming), 8 (J3/J4 + gate-cap + disclosure), 10 (instructor tier map). Confirmed:
every table header, zebra row, the gate/judgment distinction, and all "[PROPOSED]" marks are clearly
readable in pure grayscale. XML validates.

**Residual-color fix (important for the bulk phase).** A second pass scanned the package XML for any
non-grayscale hex codes and found three blues still present: `2E74B5`/`1F4D78` in the **Heading 1–3
style definitions** and `0563C1` in the unused **Hyperlink** style. docx-js emits its built-in heading
colors and they **silently override the `color` set in the JS `paragraphStyles`** — so the visible
headings were actually blue (≈ mid-gray in print), not black. Fix applied: unpacked the `.docx`,
replaced `2E74B5/1F4D78/0563C1 → 000000` in `word/styles.xml`, and repacked. Re-scan now reports
**NON-grayscale: NONE** (only `000000/404040/595959/999999/F2F2F2/FFFFFF`), and the re-render shows the
headings in true black. **Bulk-phase note:** the build pipeline must include this styles.xml color-scrub
step (or an equivalent), because regenerating from docx-js alone reintroduces the default blue heading
colors. A pure visual grayscale check would have missed this (blue ≈ dark gray); the XML hex scan is
the reliable test.

---

## Revision — Jun 18, 2026: locked B&W standard applied + standards extracted
Per the locked B&W production standard, the exemplar `.docx` now implements the gate/judgment
**non-color cue**: a left **"PASS / FAIL"** label column on the Technical Checklist and a **"SCORED"**
label column + **heavy outline border** on the Analysis & Decision table (plus the existing headings and
bold lead tags). Rebuilt through the full pipeline (build → scrub blue→black → repack), then verified
both ways: XML hex scan = **NON-grayscale NONE**; grayscale render inspected (gate/judgment now
unmistakable without color). Two standards were extracted to `03_final/production/`:
- `BW_PRODUCTION_STANDARD.md` — what every B&W deliverable must satisfy (meaning never depends on color;
  the locked PASS/FAIL-vs-SCORED + heavy-border cue; the two-step verification).
- `PRODUCTION_BUILD_CHECKLIST.md` — the build pipeline, the docx-js blue-color scrub, and the
  XML-hex-scan final gate.
