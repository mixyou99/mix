# BUSS256 M6-R5 — PPTX Build Spec Freeze (v1.3.3)

**Status: M6-R5 PPTX BUILD SPEC v1.3.3 = FROZEN (specification level only). v1.3.3 supersedes v1.3.2 as the canonical build input.**

## A–B. Freeze date and approval

| Item | Value |
|---|---|
| Freeze date | 2026-10-11 |
| Approval | Project lead, tranche "BUSS256 M6-R5 — v1.3.3 FREEZE + BUILD v3": "Build Spec v1.3.3 is APPROVED FOR FREEZE." |
| Final authority | The professor retains final production and acceptance authority. This record carries no professor signature. |

## C. Canonical build spec

| Path | SHA-256 |
|---|---|
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_3.md` | `7ee1b7bd2ffc242c26ef896945625e4b20c50132d310a007b1ccd4e0e195a08d` |

**Any change to this file requires a new version number and a new freeze.**

The file's own status line still reads "DRAFT". That line was part of the reviewed and approved bytes, so it is not edited. **This record is what establishes the frozen status.** The same convention was used for v1.3.2.

## D. Upstream authorities (unchanged)

| Authority | Path | SHA-256 |
|---|---|---|
| Content spec v1.3 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Production blueprint v1.1 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` |
| Locked manifest v0.2.3 | Outside the repository: `~/Downloads/BUSS256_HANDOFF_2026-10-10.zip` → `essential/BUSS256_Session_Authority_Build_Manifest_LOCKED_v0.2.3.md` | `d5734738e06afde34545c6c07b44c0b22e19ed3965f860869414131f77d37557` (as recorded at the v1.3.2 freeze; not re-read in this tranche) |
| Build spec v1.3.2 (previous freeze; preserved) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_2.md` | `eb6b80e00ff2da7f3a7864324eea7189e6ef6884b71ebf3d7a98f0a2d57bd965` |
| v1.3.2 freeze record (preserved) | `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_FREEZE_v1_3_2.md` | `1a422981f4ca012d5ee7cca5e88556dd569f8e45957720f71ea6f0474ffed9ea` |

## E. v1.3.3 records (`docs/rounds/`)

| Record | SHA-256 | Standing |
|---|---|---|
| `BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_3.md` | `0e1861e2c03657d984a8ba23e6367f5590e6e4634e69335db8b5c66122885643` | Authority supplement. Its "candidate" corrections are approved by this freeze. |
| `BUSS256_M6_R5_BUILD_SPEC_v1_3_3_SELF_CHECK.md` | `551afdb0150d4ddb3e3f279e4f75e3c06d6fb2d6322912d9fab341db0fa0fc37` | Author self-check, not independent verification |
| `BUSS256_M6_R5_LO_NORMALIZED_COMPATIBILITY_QA_PROPOSAL.md` | `a4d582028ce1ed8402e62a9ee3f592933f32194a889122bb8cc2be5a766e18d4` | **PROPOSAL only. Not ratified. No distribution-drift tolerance is in force.** |

Earlier authority-exception records (v1.3, v1.3.1, v1.3.2) and earlier self-checks are preserved unchanged, with hashes as listed in the v1.3.2 freeze record.

## F. Authorized changes v1.3.2 → v1.3.3

| Item | Change |
|---|---|
| Slide 14, S14_M2 | x 4.374 → **5.000**. y 2.735 and w = h = 0.280 unchanged. Centre (5.140, 2.875). Still inside the rating × "Products with a value" cell. |
| Slide 14, S14_L2 | (8.000, 5.000) → (7.502, 5.000) → (7.502, 2.700) → (**5.346**, 2.700) → (**5.247**, 2.784) |
| Slide 24, S24_MAPS | x 7.029 → **6.979**; w 5.500 → **5.650**. y 3.500 and h 0.800 unchanged. Text and font unchanged. |
| Gates 18 and 38 | S14_L2 vertex and end-point values updated to the new path |
| Gate 37 §16.1.1 R4(e) | "S14_M2 reads as marking the rating count '8', not the price value '10'." **Mandatory semantic check.** Gate 37 passes only if R1–R4 pass, R4(e) included. |

**Unchanged:**
- all other slides, objects, text, notes, data, fonts and visual tokens;
- callout order (alternative B);
- **gate 8 at ±1 EMU**;
- the STOP rule and reviewer ownership;
- the gate-14 source-figure comparison requirement, which remains open.

## G. Independent audit

| Item | Value |
|---|---|
| Auditor | Codex (independent; not the spec author) |
| Verdict | **PASS — READY FOR v1.3.3 FREEZE** |
| Evidence | Reported by the project lead in the freeze tranche. **No standalone Codex audit file exists in the repository, and none is cited here.** |

## H. Invariants

| Invariant | Value |
|---|---|
| Slides | 29 |
| Declared objects | 285 |
| Numbered QA gates | 38 (M 31 / HYBRID 3 / MV 4) |
| TIGHT objects | 46 |
| Authorized blueprint text deviations | 4 (unchanged) |
| UNAUTHORIZED_CONTENT_DRIFT | 0 |
| UNAUTHORIZED_BLUEPRINT_DRIFT | 0 |

## I. Pending (not established by this freeze)

- Physical render QA: gates 11, 14, 35, 37 (R1–R4 and R4(e)), and the MV halves of 12, 31 and 36.
- Gate 14 source-figure comparison: pending or indeterminate until supported by actual source-figure evidence.
- Native Microsoft PowerPoint opening without repair for any build.
- The LibreOffice-normalized distribution workflow and any drift tolerance: proposal only, awaiting project-lead ratification.

## J. Downstream build requirements

- Build only from the canonical v1.3.3 spec, verified by hash before the build.
- The builder and its QA must take the slide-14 leader path from v1.3.3. Earlier builds hard-coded the v1.3.2 path.
- The source build (gate 8 ±1 EMU) and any normalized distribution file are kept distinct.
- Production placement requires QA and explicit project-lead approval, and the professor's final acceptance.

## What "BUILD SPEC FROZEN" does NOT mean

- No PPTX has passed visual QA.
- Native PowerPoint compatibility has **not** been established.
- No distribution tolerance has been ratified.
- The production deck has **not** been released.

The professor retains final production authority.
