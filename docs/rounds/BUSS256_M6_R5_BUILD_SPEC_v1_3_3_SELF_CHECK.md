# BUSS256 M6-R5 — Build Spec v1.3.3 Self-Check (author)

**Status: DRAFT. This is an AUTHOR SELF-CHECK, not an independent audit.** Project-lead review and independent verification are still required. A freeze is not recommended until both are complete.

*Recorded 2026-10-11.*

## 0. Inputs and output

| Item | SHA-256 |
|---|---|
| v1.3.2 spec (frozen; canonical input) | `eb6b80e00ff2da7f3a7864324eea7189e6ef6884b71ebf3d7a98f0a2d57bd965` (asserted by the patch script before writing) |
| **v1.3.3 spec (DRAFT)** | `7ee1b7bd2ffc242c26ef896945625e4b20c50132d310a007b1ccd4e0e195a08d` |
| v1.3.3 supplement | See the final report (a record cannot contain a later file's hash) |

**Baseline:** HEAD `96594c4c1fc33a751c6bdfc319db080a45a1592b` on `buss256/2027-refresh`; 0 files staged; 0 tracked files modified.

**Method:**
- v1.3.3 was produced from v1.3.2 by 18 exact-string replacements. Each replacement asserted its match count.
- The script refused to overwrite an existing file and wrote with exclusive create.
- The checks below parse the written files only.

## A. Exact v1.3.2 → v1.3.3 diff

POSIX `diff` reports 18 hunks: 11 lines removed, 54 added. The file grows from 1,707 to 1,750 lines.

| v1.3.2 line | Section | Change |
|---|---|---|
| 1, 3, 4a | Title, status, preface | Version v1.3.3; DRAFT / not-frozen status; base hash; scope statement |
| 30a | §0.4 (new) | v1.3.2 → v1.3.3 change log: items A–E; not changed; not adopted; counts |
| 103a | §1 | v1.3.3 supplement row |
| 854 | §11 S14_M2 row | x 4.374 → 5.000; style wording "left zone" → "right of the cell centre, left of the value '8'" |
| 863a | §11 Slide 14 | New "v1.3.3 geometry" bullet (M2 clearances) |
| 865 | §11 Slide 14, S14_L2 | Last two vertices → (5.346, 2.700), (5.247, 2.784); M2 centre (5.140, 2.875); distance 0.14046 |
| 870 | §11 Slide 14, superseded paths | v1.3.1–v1.3.2 path recorded as superseded |
| 1156 | §11 S24_MAPS row | x 7.029 → 6.979; w 5.500 → 5.650 |
| 1160a | §11 Slide 24 | New "v1.3.3 geometry" bullet (fit, containment, no overlap) |
| 1411 | Gate 18 | S14_L2 vertex list |
| 1431 | Gate 38 | S14_L2 end point (5.247, 2.784); M2 centre stated |
| 1433 | §16 tally sentence | v1.3.3 scope added; still no gate added or removed |
| 1451 | §16.1.1 preface | "as amended in v1.3.3" |
| 1458 | §16.1.1 R4 | Criterion (e) added. Items (a)–(d) are verbatim. |
| 1540a | §19 | v1.3.3 conformance statement |
| 1551a | §20 | v1.3.3 integrity block |

## B. Scope: nothing else changed

| Check | Result |
|---|---|
| §11 slides 1–13, 15–23, 25–29 | **Byte-identical** to v1.3.2 (slide 2 and slide 13 included) |
| Slide-14 object rows | 9 → 9; only S14_M2 changed |
| Slide-24 object rows | 12 → 12; only S24_MAPS changed |
| Speaker notes (all 29) | Identical |
| Declared objects (builder's parse rule) | 285 |
| §2–§10, §12–§15, §17, §18 | Byte-identical |
| Appendix T, Appendix C | Byte-identical |
| Numbered gate rows | 38 → 38. Only rows 18 and 38 changed. Gate 8 (±1 EMU) is unchanged. |
| §12 slide-14 layering row | Unchanged; still accurate (M2 covers no cell text) |

**Deck-wide regression.** The spec verifier was rerun on v1.3.2 and on v1.3.3; on v1.3.2 it reproduces the earlier output exactly. The only output difference: S24_MAPS leaves the height-TIGHT list (2 lines → 1 line). Unchanged:
- overflow 0;
- collisions 0;
- dot overlaps 0;
- off-slide and safe-zone violations 0;
- role violations 0.

The 46-object TIGHT inventory for gate 11 is **kept at 46**: S24_MAPS stays listed because of its 0.069 in horizontal margin.

## C. Slide-14 geometry (computed from the written v1.3.3 text)

| Check | Result |
|---|---|
| S14_M2 box (5.000, 2.735, 0.280, 0.280) inside the rating × "Products with a value" cell (4.304–5.804 × 2.600–3.150) | Yes |
| Clearance to the cell edges | Left 0.696, right 0.524, top 0.135, bottom 0.135 |
| M2 to the rating "8" ink (≈ 5.600–5.724) | 0.320 |
| M2 to the price "10" ink (ends 4.224) | 0.776 (was 0.150) |
| L2 end-point distance to the M2 centre | 0.14046; \|Δ\| = 0.00046 ≤ 0.001 (gate 38) |
| L2 last segment off radial | 0.066° |
| L2 crossings of drawn rules (y 2.600 / 3.150 / 3.700 / 4.250 / 4.800, x 0.604–7.404) | 0 |
| L2 × L1 intersections | 0 |
| L2 through the S14_C1 / S14_C2 interior | None |
| L2 nearest approach to marker centres (r 0.140) | S14_M1 0.238; S14_C2_M 0.234; S14_C1_M 0.837; S14_M2 0.140 (its end point only) |
| Horizontal-run stroke bottom vs M2 top | 2.7087 < 2.735 |
| Vertical run x 7.502 | Strictly between 7.404 and 7.600 (unchanged) |
| Gate 18 and gate 38 values vs §11 | Consistent |

## D. Slide-24 geometry

| Check | Result |
|---|---|
| S24_MAPS (6.979, 3.500, 5.650, 0.800), right edge 12.629 | Inside S24_CARD_R (6.829–12.729): 0.150 left, 0.100 right |
| Overlap with any other slide-24 object | Only its own card (an intentional §12 container exception) |
| Fit at 20 pt Arial (insets 0.05 / 0.03) | 1 line, width 5.481 of 5.550; need 0.427 ≤ 0.800. A 2-line fallback needs 0.793 ≤ 0.800. |
| Text, role, size, style | Unchanged |

## E. Task C: slide 2 and slide 13

### Slide 2 chevron wrapping: NONBLOCKING (no change)

**Text boxes vs chevrons:**
- The chevron text boxes S02_CHEVn_T (w 2.250) span exactly the chevron's inner rectangle: from the notch tip (chevron x + 0.300) to the point base (chevron right − 0.300).
- With the 0.05 in insets, text runs over 2.150 in. That keeps ≥ 0.05 in from the notch tip at mid-height and from the point base at the top and bottom.

**Spec-model breaks at 18 pt:**

| Box | Lines | Fit |
|---|---|---|
| CHEV1 | "Store data in rows / and columns / (M6-R3)" (3) | — |
| CHEV2 | "Understand and / prepare the data / today" (3) | — |
| CHEV3 | "Choose a / technique for the / question (M6-R4A)" (3) | The last line is 2.098 of 2.150, so a renderer may move "(M6-R4A)" to a 4th line |
| CHEV4 | "Apply analytics / (later modules)" (2) | — |
| CHEV1/3/4 boxes (h 1.350) | 4 lines need 1.260 | Fits |
| CHEV2 box (h 1.650) | Up to 5 lines (1.643) | Fits |

No word is wider than 2.150 (the widest is "technique" at 1.084), so a word cannot break mid-word.

**Why not widen:**
- **Left:** the notch tip sits 0.05 in from the text area at mid-height. Any leftward widening beyond 0.05 puts middle-line glyphs on or outside the chevron's left border.
- **Right:** the point base sits at the box edge for the top and bottom lines, so widening crowds the sloped border for multi-line text.
- **Net:** no widening can be made without reducing border clearance. Wrapping is therefore assessed **nonblocking**.

**Gate status:** rendered overflow remains under gate 11, and border contact under gate 37. If any slide-2 chevron renders 5 or more lines in a 1.350 box, or touches its border, that is a gate FAIL and goes through the STOP rule. It is not a builder fix.

### Slide 13: PRESERVED AS IS

§11 slide 13 is byte-identical to v1.3.2. No readability failure has been separately confirmed. Any change would need its own confirmed finding and a versioned patch.

## F. Counts and preserved items

| Item | v1.3.2 → v1.3.3 |
|---|---|
| Slides | 29 → 29 |
| Declared objects | 285 → 285 |
| Numbered gates | 38 → 38 (M 31 / HYBRID 3 / MV 4) |
| TIGHT inventory (gate 11) | 46 → 46 |
| Authorized blueprint text deviations | 4 → 4 |

**Not weakened:**
- gate 8;
- the gate-37 row;
- R1–R4 (a)–(d);
- the STOP rule;
- reviewer ownership;
- gate 14, including its source-figure comparison gap, which is still open.

## G. Open items

1. Project-lead confirmation of both candidate corrections, and of R4(e) (author-added).
2. Independent verification of v1.3.3, then a freeze record. Until then, v1.3.2 stays canonical.
3. For a future build tranche: the builder and QA hard-code the S14_L2 path (Build v1 `build.py:615`, `qa.py:510`) and must be updated to v1.3.3. The builder's spec hash must also move to the frozen v1.3.3.
4. Every slide-14 visual check (R1–R4, plus R4(e) if adopted) needs a fresh render of a v1.3.3 build.
5. LibreOffice-normalized output: separate unratified proposal (`docs/rounds/BUSS256_M6_R5_LO_NORMALIZED_COMPATIBILITY_QA_PROPOSAL.md`).
6. Build v2 native-open result: still pending.

## Drift

- UNAUTHORIZED_CONTENT_DRIFT = 0.
- UNAUTHORIZED_BLUEPRINT_DRIFT = 0.
- Candidate geometry corrections = 2. They are pending ratification.
