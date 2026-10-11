# BUSS256 M6-R5 — Build Authority Supplement v1.3.3

**Status: DRAFT — PROJECT-LEAD REVIEW AND INDEPENDENT VERIFICATION REQUIRED. Not frozen.**

*Recorded 2026-10-11. This record supplements the v1.3 exception and the v1.3.1 and v1.3.2 supplements, which all remain unchanged. **It grants no content or blueprint exception.** It records two candidate geometry corrections and the gate wording that depends on them.*

## 1. Authority hash lineage

| # | Artifact | Path | SHA-256 | State |
|---|---|---|---|---|
| 1 | Content spec v1.3 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` | Unchanged |
| 2 | Production blueprint v1.1 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` | Unchanged |
| 3 | v1.3 exception (Slide 1) | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` | `9e2e7c3f9156a6ab7dbec586451a86c97926922bb1db4f0d510c9a85a2073d32` | Preserved |
| 4 | v1.3.1 supplement | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md` | `e7529f8ec7dc40cada02c1ebb49672368313423e5c0555730634a0d488f9d438` | Preserved |
| 5 | v1.3.2 supplement | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_2.md` | `dd4287519b17807f0e0f24d2c119f758461a48c90d10bffec98bb0926bb8e2e6` | Preserved |
| 6 | v1.3.2 self-check | `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_v1_3_2_SELF_CHECK.md` | `b987a251f7f813bee147a01c7a9d0d5364acbfeb54dbd27e2f71eba6773deedc` | Preserved |
| 7 | v1.3.2 freeze record | `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_FREEZE_v1_3_2.md` | `1a422981f4ca012d5ee7cca5e88556dd569f8e45957720f71ea6f0474ffed9ea` | Preserved |
| 8 | Build spec v1.3.2 (frozen; canonical build input) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_2.md` | `eb6b80e00ff2da7f3a7864324eea7189e6ef6884b71ebf3d7a98f0a2d57bd965` | Preserved |
| 9 | **Build spec v1.3.3 (this patch)** | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_3.md` | `7ee1b7bd2ffc242c26ef896945625e4b20c50132d310a007b1ccd4e0e195a08d` | DRAFT |

Hash 8 was verified before v1.3.3 was written; the patch script refused to run otherwise.

## 2. Authorization

| Item | Value |
|---|---|
| Source | Project-lead tranche "BUSS256 M6-R5 — TARGETED v1.3.3 PATCH DRAFT". The professor retains final authority. |
| Basis | The professor confirmed that a LibreOffice-normalized 29-slide PPTX opens normally in Microsoft PowerPoint. The project lead inspected its rendered slides and tested both corrections on it. |
| Standing | **Candidate authorized corrections, subject to specification and geometry QA.** Not final until project-lead review, independent verification and a v1.3.3 freeze. |
| Scope | Slide 14 (S14_M2, S14_L2) and slide 24 (S24_MAPS) geometry only. |

The LibreOffice-normalized file is not a build output of any spec version. It is not evidence for any v1.3.3 gate.

## 3. Corrections

### 3.1 Slide 14 — marker 2 and leader 2

| Object | v1.3.2 (frozen) | v1.3.3 (draft) |
|---|---|---|
| S14_M2 (x, y, w, h) | 4.374, 2.735, 0.280, 0.280 | **5.000**, 2.735, 0.280, 0.280 |
| S14_M2 centre | (4.514, 2.875) | (5.140, 2.875) |
| S14_L2 vertices | (8.000, 5.000) → (7.502, 5.000) → (7.502, 2.700) → (4.720, 2.700) → (4.621, 2.784) | (8.000, 5.000) → (7.502, 5.000) → (7.502, 2.700) → (**5.346**, 2.700) → (**5.247**, 2.784) |

**Reason.** The gate-37 builder observation recorded for Build v1 (R3(d)/R4(d)): at x 4.374 the marker sat about 0.150 in right of the price value "10" and 0.95 in left of the rating value "8". At a glance, "10 ②" could read as one unit. The marker is meant to point at the rating count.

**Invariants:**

| Item | Value |
|---|---|
| Target cell | Unchanged: rating × "Products with a value" (x 4.304–5.804, y 2.600–3.150) |
| M2 position | Fully inside the cell; 0.135 from its top and bottom edges |
| M2 clearances | 0.320 from the "8" ink; 0.776 from the "10" ink |
| Last leader segment | Same shape, moved +0.626 in x. It still ends 0.14046 from M2's centre (\|Δ\| = 0.00046 ≤ 0.001), 0.066° off radial. |
| Drawn table borders crossed | 0 |
| Leader crossings | L2 does not cross L1 |
| Callouts, markers | L2 passes through neither callout interior. Its nearest approach to the S14_M1 centre is 0.238 and to the S14_C2_M centre 0.234 (r 0.140). |
| Horizontal run (y 2.700) | Its stroke edge 2.7087 stays above M2's top 2.735 |
| Vertical run (x 7.502) | Unchanged, still between 7.404 and 7.600 |
| Unchanged objects | Callout order, callout text, table, S14_M1, S14_L1 |

**Dependent gate changes:**
- **Gate 18:** the S14_L2 vertex list.
- **Gate 38:** the S14_L2 end point, plus an explicit M2 centre.
- **§16.1.1 R4:** criterion (e) added: "S14_M2 reads as marking the rating count '8', not the price value '10'".

R4(e) only adds a requirement; no criterion is removed. It is the author's proposal, flagged for project-lead review (§5).

### 3.2 Slide 24 — "maps" line

| Object | v1.3.2 (frozen) | v1.3.3 (draft) |
|---|---|---|
| S24_MAPS (x, y, w, h) | 7.029, 3.500, 5.500, 0.800 | **6.979**, 3.500, **5.650**, 0.800 |

**Unchanged:** text ("Commonly maps the observed range to 0–1."), role PRIMARY, 20 pt, regular CHARCOAL left.

**Fit.** Spec model: Arial advance widths, with 0.05 in left/right insets.

| Width | Fit |
|---|---|
| 5.500 (v1.3.2) | The text wraps to 2 lines, with "0–1." alone on line 2. 2-line need 0.793 in a 0.800 box. |
| 5.650 (v1.3.3) | 1 line: 5.481 of 5.550 available, 0.069 horizontal margin. 1-line need 0.427. If a renderer still wraps, the 2-line need of 0.793 still fits. |

**Containment.** The box stays inside S24_CARD_R (6.829–12.729): 0.150 from the card's left edge, 0.100 from its right edge.

**Overlaps.** None except its own card container, which is an intentional §12 exception.

**No gate row changes.** Gate 8 checks the new values at ±1 EMU.

**TIGHT inventory.** S24_MAPS stays in the 46-object list for gate 11 because its horizontal margin is small. The spec-level verifier no longer flags it as height-tight.

## 4. Gate 8 and LibreOffice normalization

- Gate 8 (±1 EMU) is unchanged.
- v1.3.3 grants no tolerance for LibreOffice-normalized output.
- A separate, unratified compatibility-QA proposal is in `docs/rounds/BUSS256_M6_R5_LO_NORMALIZED_COMPATIBILITY_QA_PROPOSAL.md`.

## 5. Items for project-lead review

1. Confirm S14_M2 x 5.000 and the two S14_L2 vertices as authorized. They are currently candidates.
2. Confirm S24_MAPS x 6.979 / w 5.650 as authorized.
3. Accept or delete §16.1.1 R4(e). It was added by the author and is not in the directive.
4. The S14_M2 style wording "left zone" was replaced by "right of the cell centre, left of the value '8'". The marker centre (5.140) is now 0.086 right of the cell centre (5.054), so the old wording no longer matched the geometry.
5. A future build must update the hard-coded S14_L2 vertices in the builder and its QA. `build.py` line 615 and `qa.py` line 510 of Build v1 encode the v1.3.2 path. This record changes neither file.

## 6. Exception inventory

| Category | Count | Items | Source record |
|---|---|---|---|
| Authorized blueprint text deviations | 4 (unchanged) | S01_META, S01_COURSE; NX-2, NX-6 | v1.3 exception; v1.3.1 supplement |
| Authorized geometry correction | 1 (unchanged) | Slide 14, alternative B | v1.3.1 supplement |
| Candidate geometry corrections | 2 (new, DRAFT) | Slide 14 M2/L2 end; slide 24 S24_MAPS | This record |
| QA-coverage decisions | 1 + 1 proposed | Gate 37 R1–R4 (v1.3.2); R4(e) (proposed) | v1.3.2 supplement; this record |
| UNAUTHORIZED_BLUEPRINT_DRIFT | **0** | — | — |
| UNAUTHORIZED_CONTENT_DRIFT | **0** | — | — |

## 7. Still open (not addressed by v1.3.3)

- **Gate 14:** the source-figure comparison gap is retained.
- **Gate 37 status:** all slide-14 checks (R1–R4, and R4(e) if adopted) need a fresh render of a v1.3.3 build. The v1.3.3 geometry is not claimed to pass any visual check.
- **Native PowerPoint open without repair:** to be verified for any new build.

## 8. Integrity

- No frozen authority and no earlier spec, exception, self-check or freeze record was modified.
- No PPTX or PDF was built, and Build v1 and Build v2 were not touched.
- Assessment reads: 0. M6-R4B reads: 0. `admission.csv` reads: 0.
- Nothing was staged, committed or pushed.
