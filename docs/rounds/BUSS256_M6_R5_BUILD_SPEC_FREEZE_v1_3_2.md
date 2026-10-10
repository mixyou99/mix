# BUSS256 M6-R5 — PPTX Build Spec Freeze (v1.3.2)

**Status: M6-R5 PPTX BUILD SPEC v1.3.2 = FROZEN (specification level only)**

## A–B. Freeze date and approval

| Item | Value |
|---|---|
| Freeze date | 2026-10-10 |
| Approval | Project lead, tranche "BUSS256 M6-R5 — BUILD SPEC v1.3.2 FREEZE AND BOUNDED GIT PRESERVATION" (2026-10-10) |
| Final authority | The professor retains final acceptance authority for the completed teaching materials. This record carries no professor signature. |

## C. Canonical build spec

| Path | SHA-256 |
|---|---|
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_2.md` | `eb6b80e00ff2da7f3a7864324eea7189e6ef6884b71ebf3d7a98f0a2d57bd965` |

**Any change to this file requires a new version number and a new freeze.**

## D–E. Upstream authorities (unchanged)

| Authority | Path | SHA-256 |
|---|---|---|
| Content spec v1.3 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Production blueprint v1.1 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` |
| Locked manifest v0.2.3 | Outside the repository: `~/Downloads/BUSS256_HANDOFF_2026-10-10.zip` → `essential/BUSS256_Session_Authority_Build_Manifest_LOCKED_v0.2.3.md` | `d5734738e06afde34545c6c07b44c0b22e19ed3965f860869414131f77d37557` |

## F. Build-spec version lineage (all preserved)

| Version | Path (`teaching/BUSS256/02_working/M6_R5/`) | SHA-256 | Note |
|---|---|---|---|
| v1 | `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1.md` | `868721f7257ba9a571130f17ef20a0239fe16b3b8bb1aa1c415b9dabfb183227` | Initial spec |
| v1.1 | `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1.md` | `aa9401e3b62d8f7f0c1948889ed75b48b8fb5b37fb649048703b50c4605b229e` | 7-segment position bar (BS-I2) |
| v1.2 | `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_2.md` | `55221b0683d3114542b4093a043381c27ae65257753555065b889a46641e4ec0` | Red-team patches BS-R1–R13 |
| v1.3 | `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3.md` | `c063b691024b79c1229fb2f94a987e48e9bd62312fc1f573aeeadc48294c37cb` | TV-m1–m5; slide-1 exception |
| v1.3.1 | `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_1.md` | `ac44fb1bc9ba565a9ca25c8022072ab3324a917aefc53c493a5455d29c4bb48d` | Slide 14 alternative B; note exceptions on slides 2 and 6 |
| **v1.3.2** | `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_2.md` | `eb6b80e00ff2da7f3a7864324eea7189e6ef6884b71ebf3d7a98f0a2d57bd965` | Gate-37 R1–R4 coverage; documentation reconciliation. **Canonical.** |

**Review records** (`docs/rounds/`):

| Record | SHA-256 |
|---|---|
| `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_1_RED_TEAM.md` | `217892212e1fe7cfd93f8709c2da7a81140c9ef6dfa71fcb5deccab50fd65861` |
| `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_2_TARGETED_VERIFICATION.md` | `dc1ada937cecaf3dc276b2140ace9bc81f8a12bfd295ddf1f1a500231ecd3c01` |
| `BUSS256_M6_R5_BUILD_SPEC_v1_3_SELF_CHECK.md` (author self-check) | `819e2c55c90e915e69d097486ba02a93798b7b3d1c3355e48a6a8980d10f90bd` |
| `BUSS256_M6_R5_BUILD_SPEC_v1_3_1_SELF_CHECK.md` (author self-check) | `8be3466f6c6341c3142ca05cb213ed33af01ac580600226ab8b638d48b30b0b0` |
| `BUSS256_M6_R5_BUILD_SPEC_v1_3_2_SELF_CHECK.md` (author self-check) | `b987a251f7f813bee147a01c7a9d0d5364acbfeb54dbd27e2f71eba6773deedc` |

## G. Authority-exception lineage (`docs/rounds/`)

| Record | SHA-256 | Scope |
|---|---|---|
| `BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` | `9e2e7c3f9156a6ab7dbec586451a86c97926922bb1db4f0d510c9a85a2073d32` | Slide 1: S01_META and S01_COURSE (2 text exceptions) |
| `BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md` | `e7529f8ec7dc40cada02c1ebb49672368313423e5c0555730634a0d488f9d438` | Slide-14 geometry correction (alternative B); note exceptions NX-2 (slide 2) and NX-6 (slide 6) |
| `BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_2.md` | `dd4287519b17807f0e0f24d2c119f758461a48c90d10bffec98bb0926bb8e2e6` | Gate-37 coverage; affected-gate reconciliation (17, 18, 34, 38 and the gate-37 row). No new authorization. |

**Exception totals:**
- 4 authorized blueprint text deviations: S01_META, S01_COURSE, NX-2, NX-6.
- 1 authorized geometry correction: slide 14.

## H. Independent audit

| Item | Value |
|---|---|
| Auditor | Codex (independent; not the spec author) |
| Verdict | **PASS WITH NONBLOCKING RENDER RISKS — READY FOR BUILD-SPEC FREEZE** |
| Evidence | Reported by the Codex auditor and accepted by the project lead in the freeze tranche. **No standalone Codex audit file exists in the repository**, and none is cited here. |

**Reported findings:**
- All required hashes pass.
- The v1.3.1 → v1.3.2 diff is confined to authorized QA and documentation changes.
- Gate 37 normatively binds §16.1.1.
- R1–R4 each carry a mandatory PASS/FAIL result, evidence retention and STOP.
- Slide content and notes are unchanged.
- Counts are 29 / 285 / 38 / 46.
- Unauthorized drift is 0, and blocking findings are 0.

**Nuance (nonblocking):** "10 hunks" counts the edit blocks in normal `diff` output. Unified-diff grouping differs.

The three self-check records are **author** checks. They are not independent verification.

## I–K. Invariants and findings

| Invariant | Value |
|---|---|
| Slides | 29 |
| Declared objects | 285 |
| Numbered QA gates | 38 (M 31 / HYBRID 3 / MV 4) |
| TIGHT objects (nonblocking render risks) | 46 |
| UNAUTHORIZED_CONTENT_DRIFT | 0 |
| UNAUTHORIZED_BLUEPRINT_DRIFT | 0 |
| Blocking findings | 0 |

## L. Render risks carried forward (mandatory at build)

| Risk | Gate |
|---|---|
| Slide 14, R1: the horizontal leader above the row-1 digits must stay readable | 37 (§16.1.1) |
| Slide 14, R2: the vertical leader at x 7.502 must not read as a table border | 37 (§16.1.1) |
| Slide 14, R3: L2 must not appear connected to S14_M1 | 37 (§16.1.1) |
| Slide 14, R4: L2 crosses the padded row-1 cell rectangles; the digits must stay clear | 37 (§16.1.1) |
| 46 TIGHT text boxes | 11 |
| Narrow gaps: slides 12 (0.040), 16 (0.030), 21 (0.020); slide-10 dot clearances | 37 |
| Grayscale legibility of all non-colour cues | 31, 35 |
| Complete static reading of all 29 slides | 36 |

## M. Downstream PPTX build requirements

- Build only from the canonical v1.3.2 spec above, verified by hash before the build.
- Outputs go to the §17 locations: `work/m6_r5_build_v1/` and `BUSS256_M6_R5_2027_BUILD_v1.pptx` / `.pdf`. Production placement requires QA and explicit project-lead approval.
- All 38 gates must run.
- The manual-visual gates (11, 14, 35, 37 and the MV halves of 12, 31 and 36) are executed by an independent render reviewer and must retain their §16.1 / §16.1.1 evidence.
- No render gate counts as passed until an actual PPTX and PDF exist and the reviewer records a result.

## N. Versioned repair and STOP rule

- On any actual render failure the build STOPS.
- The builder must not reposition, resize, rewrite or recolor any object.
- Work returns to an authorized, versioned spec correction (v1.3.3 or later) with its own record and verification before rebuilding.

## What "BUILD SPEC FROZEN" does NOT mean

- The PPTX build has **not** been completed.
- PowerPoint visual QA has **not** passed.
- The student PDF has **not** been accepted.
- Grayscale readability has **not** been approved.
- The production deck has **not** been released.

The professor retains final acceptance authority for the completed teaching materials.
