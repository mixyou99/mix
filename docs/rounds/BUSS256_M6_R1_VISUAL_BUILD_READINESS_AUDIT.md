# BUSS256 M6-R1 — Visual / Build Readiness Audit

Read-only pre-build pass. Factual audit, not a design pass. Nothing here reopens a content decision; `BUSS256_M6_R1_CONTENT_SPEC_v2_1.md` remains the content authority. Reuse statuses are *candidates*; the project lead decides.

## 1. Precheck

| Item | Value |
|---|---|
| Worktree | `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree` |
| Branch | `buss256/2027-refresh` |
| HEAD | `1c6fe4870b6fab5f220cfb81b88a364222e08316` — "course(BUSS256): freeze M6-R1 2027 content" |
| Staged | 0 |
| Untracked (temporary) | `work/m6_r1_extract/`, `work/m6_r1_visual_audit/` (pre-existing); `work/m6_r1_visual_audit_rerun/` (this audit) |
| Content spec SHA-256 | `55f194bb07a374320f7a0b7672eff2f1999a7f804d3602c0fad6c28895494aca` (same before and after this audit) |
| Target file existed before write | No (`docs/rounds/BUSS256_M6_R1_VISUAL_BUILD_READINESS_AUDIT.md` was absent) |

## 2. N12 identity

- Locator: `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 2_Data Science/Seminar 2_Lecture_Data Science_InClass_25F_2.ppt`
- MD5 re-checked at start and end: `992a2cf05bc63ed4419e9266055918f8` (matches registered identity; the Mixyou relocation is not a missing-source event).
- Size 4,674,560 bytes. 53 slides. The file was only read and copied; the copy (`work/m6_r1_visual_audit_rerun/N12_copy.ppt`) has the same MD5.

## 3. Inspection method

1. Copied N12 to the rerun folder (MD5-verified); all automation used the copy.
2. Microsoft PowerPoint (Mac) via minimal AppleScript (open / save-as / close only; no System Events, no UI scripting) produced `N12_rendered.pdf` (53 pages, MediaBox 720×540 pt) and `N12_converted_rerun.pptx` (conversion for XML inspection only; closed without saving over anything).
3. PowerPoint's AppleScript "save as PNG" wrote no files; per-slide PNGs (`slides_png/s01–s53.png`, 1080×810) were instead rasterized from the PDF with macOS CoreGraphics (a local Swift helper, no PowerPoint involvement). Contact sheets `sheet_NN_*.png` (4 slides each) were used for visual review.
4. Structural inventory (pictures, groups, tables, media, OLE, hyperlinks, timing/transition XML, fonts, notes) was read from the converted PPTX XML using `python3 -I` + `zipfile` (no third-party libraries available; LibreOffice, python-pptx, PyMuPDF, PIL, poppler not installed).
5. All 53 slides were viewed visually (52 via contact sheet, #53 individually). #18 and #19 were inspected only to confirm exclusion.
6. **Limits:** the PDF is an end-state render, so animation build order cannot be seen; the .ppt→.pptx conversion is PowerPoint's, so XML facts describe the conversion and may differ slightly from the original binary; "fonts detected" are typeface references in XML, not proof of what rendered.

## 4. Pre-existing interrupted audit artifacts

`work/m6_r1_visual_audit/` was listed (metadata only for the contents; not deleted, renamed, overwritten or reused as authority). It contains: AppleScript scratch files and logs (`conv/export/export2–5/info/info2/q .applescript`, `.log`, `.out`), `N12_working_copy.ppt`, `N12_PowerPoint_converted.pptx`, `N12_rendered_by_PowerPoint.pdf`, and `png/s01–s51.png`.

- `N12_working_copy.ppt` MD5 = `992a2cf0…` (matches N12), but nothing else in the directory could be deterministically tied to the frozen state.
- Only **51** PNGs for 53 slides: incomplete. Its PDF hash differs from the fresh render (PDF timestamps differ, so no equivalence was established).
- Classified **non-authoritative temporary material**. All findings below come from the fresh rerun.

## 5. Source slide ledger (53 slides)

Layouts: one master, 11 layouts, slide size 9144000×6858000 EMU (4:3). KU crest bottom-right on the master of nearly every content slide; slide number bottom-centre.

- **Excluded (#18, #19):** #18 name-tag sample ("GUN-WOONG LEE / Group #1"), #19 "Getting to Know Each Other! (G03, G05)" — text only, group-specific; exclusion confirmed.
- **Deleted by spec:** #4 (word-cloud raster, 84 KB, edge-cropped), #10 (text only), #15 (video poster image + YouTube link), #29 (data-explosion chart), #53 (R review: five code screenshots).
- **Merge sources** that are repeated markers: #22, #37, #43, #46 (and the #23 original) are text-only "Key Elements of Business Analytics" with one red bold bullet as the sole "you are here" signal; #30/#32/#35 are copies of #27.

## 6. 30-slide visual mapping

Statuses: RAI = REUSE-AS-IS-CANDIDATE · RWR = REUSE-WITH-REDRAW · CO = CONCEPT-ONLY · DNR = DO-NOT-REUSE · NVR = NEW-VISUAL-REQUIRED · TSO = TEXT/STRUCTURE-ONLY. "Pic" sizes are from the converted PPTX.

| New # | Title | N12 src | Source visuals present | Source visual function | Status | Notes / build requirement |
|---:|---|---|---|---|---|---|
| 1 | Seminar 2 — Principles in Data Science | #1 | KU Business School logo (image2.png, 8 KB) | Branding | RAI | Logo is small/low-res; confirm institutional asset/resolution. Title text per spec (Spring 2027). Dated nothing visual in source. |
| 2 | Data literacy: can I trust this data for this question? | #2 | Analytics clipart (30 KB JPEG) + 3-circle Venn (information literacy / statistical literacy / technical skills / data literacy, 15 KB JPEG) | Decorative + definition of data literacy | CO | Unsourced raster clipart. Venn encodes a different definition from the frozen three-question content and uses overlap/colour regions; do not carry. Three-question layout is new. |
| 3 | Learning objectives | #3 | None | — | TSO | Plain bullets. |
| 4 | Vocabulary test | #5 | None | — | TSO | Numbered list of ten terms. |
| 5 | Data and information | #6 | Flour/eggs vs cake photo pair (one PNG, 227 KB); native red two-column table; click animation (preset "appear") | Data vs information analogy | RAI | Photo is a strong, spec-consistent seed; provenance/licence unknown. Table is native but red fill + light-red body relies on header labels (labels present, OK). Business sales-list example in spec is new text. Animation present. |
| 6 | Data science and data mining | #7 | "DATA SCIENCE" icon banner (JPEG, 340 KB): ANALYSIS, STRUCTURE, ALGORITHM, PROCESS, PROGRAMMING, SOLVING, KNOWLEDGE | Decorative / discipline cue | RAI | Spec says banner kept. Labels do not match the spec's four contributing fields (CS, maths, statistics, business) — decorative only; provenance unknown. Raster only. |
| 7 | Analytics: our working definition | #8 | Monitor + bar chart + magnifier clipart (image8.png, 11 KB) | Decorative | RAI | Same image reused on #9/#21. Small file; check sharpness at projection size. Wikipedia definition dropped by spec. |
| 8 | The analytics process | #9 (+#21) | Same clipart; 8-step numbered text list; step 5 in red | Process list | TSO | No process diagram in N12. Red "Data Analysis" emphasis is colour-only; add a non-colour marker if emphasis is kept. Optional flow diagram is a project-lead call. |
| 9 | Data analytics | #11 (+#12, #13) | Hands-around-a-chart illustration (image9.png, 87 KB) | Decorative | RAI | Provenance unknown. #12 (3V text + spiral) and #13 (duplicate) contribute no visual. SAS/Webopedia quote styling not carried. |
| 10 | Business analytics: from a business problem to a better-informed decision | #14 (+#16) | #14 text only (708 chars, very dense). #16: native grouped diagram "Data ×3 → Tools & Techniques → Business insight" with wipe animation | Input→process→output diagram | CO | N12 diagram shows data→tools→insight, not the spec's optional "business · analytics · data" relation. Concept seed only; spec text is shorter, so density drops. Animation present on #16. |
| 11 | Part 1 recap: vocabulary and relationships | #17 (+#20) | #17: four native nested circles (Data Science ⊃ Data Analytics ⊃ Business Analytics ⊃ Data Mining), grey shading by depth. #20: same figure as picture (46 KB) + numbered list | Containment hierarchy | NVR | **Nested circles must not survive** (implies containment the spec rejects; depth encoded by grey shade). Five-term labeled relationship map has no N12 seed. |
| 12 | Four elements of business analytics | #23 (+#22, #37, #43, #46) | None — plain bullets; one red bold bullet moves per slide | Text list / position marker | NVR | N12 has no diagram. New connected-elements visual required (not a one-way sequence, not nested). Red-bullet "you are here" is colour-only. |
| 13 | Big data: data from everywhere | #24 | Five pictures: 4 embedded OLE objects with EMF previews (credit cards, ATM, store checkout, etc.) + 1 JPEG (face-on-screen, with vertical "NEWSFACTOR NETWORK" credit text) | Data-source examples | CO | Dated stock-style clipart; legacy OLE/EMF; visible third-party credit. Use as concept for data-source icons only. |
| 14 | More data ≠ more information | #25 (+#26) | None (text; slow transition on #25) | — | TSO | No chart in N12 (the "data explosion" chart is on deleted #29). Optional visual is new; no modern statistic may be invented. |
| 15 | The Vs of big data | #27 (+#30, #32, #35) | "3 Vs" spiral diagram (image10.png, 264 KB): Data Volume/Velocity/Variety, MB→PB scale, red/green/blue zones; Value and Veracity in grey text | Visual for 3Vs | CO | Spiral labels are far too small to read when projected; colour zones carry meaning; covers 3Vs only (no Value/Veracity), three identical slides in N12. Spec replaces repeats with section strips. Grey Value/Veracity text is low-contrast. Notes on #27/30/32/35 say "speed at which data is generated and used". |
| 16 | Why can we collect so much data? Two separate technology trends | #28 | **One merged PNG (268 KB)** containing: three illustrations (people, smart home, car), a Moore's-law curve (tiny, unlabeled), 2005 vs 2014 microSD photo with Korean source line, 2022 SanDisk 2 TB card, plus red "Data Storage becomes cheaper!" text | Context + Moore + storage comparison | NVR | The three context illustrations (people/home/vehicle) the spec references can only be cropped out of the merged raster (provenance unknown). Moore curve, microSD comparison, "Source: Wikipedia (2022)" and the "cheaper!" claim must not survive. Two-separate-trends visual is new. |
| 17 | Velocity: when timing matters | #31 | "Internet in 60 seconds" infographic (JPEG, 353 KB), go-gulf.com source line; notes contain a scoop.intel.com URL | Statistic infographic | DNR | **Must not survive.** Spec requires a labeled hypothetical (card-payment timing). A simple timing visual is optional and would be new; the notes URL must not be carried either. |
| 18 | Variety: structured vs. unstructured data | #33 (+#34) | #33: two-panel picture (173 KB): database + number grid vs PDF/audio/video/social icons; yellow-on-white YouTube "Source" text. #34: Gartner infographic (285 KB) with 20% / 80% rings | Contrast of data forms | RWR | Redraw the #33 two-panel idea natively (spec adds semi-structured note). **#34 must not survive** (80% / Gartner claim, colour-coded). YouTube hyperlink target (`awMXMXdton8`) does not match the printed URL (`0PPktPn5qZk`). |
| 19 | Data: why does business analytics rely on it? | #36 | None | — | TSO | Question list; week numbers removed by spec. |
| 20 | Analytics: methods and types | #38 | None | — | TSO | KEEP. Red emphasis on key words. |
| 21 | Descriptive analytics | #39 | None | — | TSO | KEEP. Dense (476 chars). |
| 22 | Descriptive analytics in practice: a dashboard (illustrative) | #40 | Google Analytics dashboard screenshot (PNG, 162 KB) | Example of a descriptive dashboard | NVR | **Screenshot must not survive** (real-looking figures such as 30.42k, 59.62, 3:51s). Layout idea (KPI tiles + line + bars) is a layout seed only; new illustrative dashboard (≈3 metrics, labeled "Illustrative example") required. |
| 23 | Predictive analytics | #41 | None | — | TSO | KEEP. |
| 24 | Google Flu Trends: a good model that stopped being reliable | #42 | Whole slide is one PNG (64 KB): NYT-credited chart, 2003–2008, estimated vs CDC lines, annotations, plus three caption labels | Estimates tracking CDC | RAI | Spec retains "the 2003–2008 graphic". Candidate only: third-party newspaper graphic with visible credit (rights decision), all text inside the raster, tiny annotation text, two lines distinguished mainly by colour (labelled by leader text). A redraw would need data not in the repo. 2013 overestimate has no visual in N12; spec carries it as text. |
| 25 | Business problems | #44 | None | — | TSO | Examples replaced by spec (gap-based). |
| 26 | Common business-analytics questions — and their limits | #45 | None | — | TSO | Red sub-bullets are colour emphasis. |
| 27 | From problem to outcome: the insight loop | #48 (+#47) | #47: third-party Data → Information → Knowledge → Decision Making figure with "Adaptive" return arrow (PNG, 179 KB, internetofwater.org). #48: text only | Loop / DIK-style figure | NVR | **#47 figure must not survive.** Loop concept (return arrow) is the only seed. Course-owned loop needed: Business problem → Data → Information → Insight → Decision → Outcome/feedback, problem as anchor. Copy-edit "deired" carried. |
| 28 | From finding to action: candidate actions to test | #49 | None | — | TSO | No N12 seed. Spec content is a five-step chain; a flow visual would be new (see §10). |
| 29 | What business analytics can support — and what it cannot guarantee | #51 (+#50) | None; #50 is a blank divider; yellow YouTube link (low contrast) | — | TSO | Two-column "can support / cannot guarantee" is new structure; do not rely on colour alone for the split. Video removed. |
| 30 | What's next… | #52 | None | — | TSO | No filename or week per spec. |

**Counts:** RAI 6 · RWR 1 · CO 4 · DNR 1 · NVR 5 · TSO 13 = **30**.

## 7. Requested focus slides

| New # | Useful N12 visual seed? | Verdict |
|---:|---|---|
| 11 | Only the nested-circle figure (rejected) | New five-term relationship map required. |
| 12 | No (bullets with a moving red marker) | New four-element visual required. |
| 14 | No | Text works; any visual is new/optional. |
| 15 | Partly: the spiral (illegible, 3Vs, colour-coded) | Concept only; 5V presentation is new. |
| 16 | Partial: three context illustrations inside a merged raster | New two-trend visual; old chart/microSD must go. |
| 17 | Only the infographic (prohibited) | Do not reuse; any timing visual is new. |
| 18 | Yes: #33 two-panel structure | Redraw natively; #34 infographic must not survive. |
| 22 | Layout idea only (GA screenshot) | New illustrative dashboard required. |
| 24 | Yes: the 2003–2008 NYT graphic | Candidate as-is, pending rights/legibility decision. |
| 27 | Return-arrow concept only | New loop visual required; DIK figure out. |
| 28 | No | New flow visual if wanted; otherwise text. |
| 29 | No | New two-column structure. |

## 8. Visuals that must not survive

| Source | Where | Why |
|---|---|---|
| Video poster + YouTube link | #15 (deleted) | Video-only material removed; link target `6jDjeNJrN14` also differs from printed URL `ly1RSNRWmEs`. |
| YouTube links | #33, #34, #51 | Videos removed from core deck. |
| Google Analytics screenshot | #40 → new 22 | Spec removes it. |
| "Internet in 60 seconds" infographic + go-gulf source; notes URL scoop.intel.com | #31 → new 17 | Spec removes it; stale statistics. |
| Data-explosion chart ("Available Data" vs ability, "Gap") | #29 (deleted) | Unsupported growth shapes. |
| Facebook 2.5 PB / eBay 6.5 PB text and "Google … user searches" wording | #25 → new 14 | Unverified/incorrect (text, not graphics). |
| Third-party DIK figure (internetofwater.org) | #47 → new 27 | Spec: not reused; course redraws loop. |
| 2005/2014/2022 microSD comparison, "Source: Wikipedia (2022)", Moore's-law curve | #28 (one merged raster) → new 16 | Implies Moore explains storage; unsourced/dated. |
| Gartner 20% / 80% infographic | #34 → new 18 | Spec: no "80% unstructured" claim. |
| Nested-circle hierarchy (#17 native, #20 picture) | → new 11 | Incorrect containment. |
| Three identical "3Vs" copies | #30, #32, #35 | Replaced by section strips. |
| Week/date markers and group markers | #52 "Seminar 3_R.pdf"; #19 "(G03, G05)"; #18 name tag; #53 R review | Spec removes filename/week; #18/#19 excluded; #53 deleted. |
| Word-cloud raster | #4 (deleted) | Deleted. |
| Colour-only meaning | red "you are here" bullet (#22/#23/#37/#43/#46); spiral zones (#12/#27…); grey-shade depth (#17/#20); yellow link text on white (#33, #51); estimated vs actual line colours (#42); red emphasis words throughout | PC-2: add labels/markers. |

## 9. Possible reuse candidates (not authorizations)

KU Business School logo (#1; resolution check) · flour/eggs/cake photo (#6) · DATA SCIENCE icon banner (#7) · monitor-chart clipart (#8/#9/#21) · hands-over-chart image (#11) · GFT 2003–2008 graphic (#42) · #33 two-panel concept for redraw · KU crest on the master. All are raster/third-party with unknown provenance except the logo/crest; none has a recorded licence in the repo.

## 10. New-visual requirements

Required by spec §6: relationship map (new 11), four-element framework (new 12), insight loop (new 27), illustrative dashboard (new 22), "You are here" section strips, redrawn data–information graphics, any Velocity visual (new 17).
Additional, not listed in §6, flagged for the project lead: two-trend visual (new 16, since the old image is merged and prohibited); structured/unstructured redraw (new 18); optional process flow (new 8); optional flow for "finding → action → test → measure → revise" (new 28); optional "can support / cannot guarantee" two-column layout (new 29); optional "More data ≠ more information" visual (new 14).

## 11. Technical build-readiness

| Topic | Finding |
|---|---|
| Source format | Legacy binary PowerPoint 97-2003 `.ppt`, 4,674,560 bytes, 53 slides. |
| Conversion | Microsoft PowerPoint for Mac opened the copy and produced a PDF (53 pages) and a PPTX (4.5 MB). No LibreOffice, python-pptx, PyMuPDF, PIL or poppler available locally. AppleScript PNG export silently produced nothing; rasterizing the PDF with CoreGraphics worked. Slide width/height via AppleScript page-setup was inaccessible; dimensions come from PDF and XML. |
| Dimensions | 720×540 pt, 9144000×6858000 EMU, `screen4x3`. All N12 assets are laid out for 4:3. |
| Fonts (typeface references) | Times New Roman (≈48 slide refs; bold dark-blue serif titles), MS PGothic / ＭＳ Ｐゴシック (East Asian fallback), Helvetica Neue Light (≈45) and Helvetica Neue (theme fonts), Arial (≈23), Wingdings / Wingdings 2 (bullets/checks), Helvetica LT Std, 나눔고딕 (1 slide). **No embedded fonts.** Helvetica Neue and Helvetica LT Std are not standard on Windows. |
| Embedded assets | 30 media files in the converted file: 20 PNG, 6 JPEG, 4 EMF. 4 embedded OLE objects (`oleObject1–4.bin`) on #24 with EMF previews. All images are embedded; no linked image files. |
| Media / video | No embedded audio/video. "Video placeholders" are still-image posters with external YouTube links (#15, #33, #34, #51). Two printed URLs differ from their link targets (#15, #33). |
| Missing/broken assets | None detected in the render. #4 word cloud and #34 logo overlay are edge-cropped by slide bounds (both in excluded/merged material). |
| Animations/transitions | Click animations on #6 (appear) and #16 (wipe); transitions on #25 (slow) and #29 (fade; deleted). The PDF shows end state only, so build order and fidelity of conversion are **not reliably inspectable**. |
| Notes | 24 notes pages. Notes on #27/30/32/35 contain a short definition; #31 notes cite a scoop.intel.com URL (must not be carried). |
| Accessibility | Roughly 22 shapes carry alt-text descriptions in the conversion (quality not assessed); most picture content is raster with text baked in (#42 entirely, #28, #31, #34, #47). |
| Compatibility | Legacy OLE/EMF on #24; PowerPoint-only fidelity; raster text cannot be edited; low-resolution small assets (logo 8 KB, clipart 11 KB). |
| Rendering differences | Only PowerPoint-for-Mac render available; no independent renderer to compare against. |
| Build risks | 4:3 vs target aspect; font substitution on non-Mac machines; provenance of reused rasters; text inside rasters; animations not verifiable; conversion-only inspection. No technical blocker prevents a build. Nothing was fixed in this pass. |

## 12. Unresolved project-lead decisions

1. Target slide aspect ratio (N12 is 4:3) and theme/typography (not chosen here).
2. Which candidate rasters may be reused given unknown provenance (#2, #6, #7, #8, #9, #13, #16 context images).
3. KU crest/logo: reuse the N12 master assets or an institutional template.
4. GFT graphic: reuse as-is with credit, or replace; redrawing would need data not in the repo.
5. Whether the optional visuals in §10 (new 8, 14, 17, 28, 29) are wanted.
6. Representation of five Vs (spiral concept vs new layout) for new 15.
7. Whether speaker notes are carried; N12 notes include an obsolete source URL.
8. Animation/transition policy (N12 has them on #6, #16, #25).
9. Non-colour marker convention (PC-2) and alt-text standard.
10. Whether cropping the three context illustrations out of the merged #28 raster is acceptable.

## 13. Artifacts (temporary, untracked)

`work/m6_r1_visual_audit_rerun/`: `N12_copy.ppt`, `N12_rendered.pdf`, `N12_converted_rerun.pptx`, `slides_png/s01–s53.png`, `sheet_*.png`, `struct_inventory.json`, AppleScript and Swift helper sources, `render_bin`, `sheets_bin`.

## 14. Attestation

| Check | Result |
|---|---|
| CONTENT_SPEC_v2_1 unchanged | Yes (SHA-256 `55f194bb…`) |
| Freeze commit unchanged | Yes (HEAD `1c6fe487…`) |
| N12 unchanged | Yes (MD5 `992a2cf0…` at start and end) |
| Assessment reads | 0 |
| Assessment mutations | 0 |
| Source mutations | 0 |
| Source PPT/PPTX edits | 0 (the conversion was written only to the rerun folder from a copy) |
| Final 2027 PPTX builds | 0 |
| Old `work/m6_r1_visual_audit/` modified | No (listing and metadata only; one MD5 of its working copy) |
| KMB689 touched | No |
| Web browsing | None |
| Staged / commit / push | 0 / 0 / 0 |

Disclosure: one of this session's early probes invoked `System Events`, which triggered a macOS permission prompt (the user later dismissed it); no accessibility access was used. A screenshot captured then was deleted immediately.
