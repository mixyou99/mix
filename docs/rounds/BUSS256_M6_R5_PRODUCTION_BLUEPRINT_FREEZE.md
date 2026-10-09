# BUSS256 M6-R5 — Production Blueprint Freeze

*Recorded 2026-10-09. The project lead accepted the targeted-verification verdict PASS — READY FOR PROJECT-LEAD BLUEPRINT FREEZE.*

## Canonical production blueprint

| Item | Value |
|---|---|
| Canonical blueprint | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` |
| Blueprint SHA-256 | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` |
| Status | **APPROVED / FROZEN**, established by this record |
| Frozen content authority | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md`, SHA-256 `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |

**Status-line note:** the v1.1 file keeps its verified bytes, including its internal status line "DRAFT — TARGETED VERIFICATION REQUIRED". It was deliberately not edited after verification. **This record supersedes that line.** v1.1 is APPROVED / FROZEN.

## Lineage

| Record | SHA-256 |
|---|---|
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1.md` (original) | `9d5ce6013df38a91c50063585fb9051fb8b749293a275b6d6b99538e6d8d24a5` |
| `docs/rounds/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_RED_TEAM.md` | `01e7001f3a52f6a99d6371751ffcc4c3372af3199fb462c9573a07d3e3930bdb` |
| `docs/rounds/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1_TARGETED_VERIFICATION.md` | `8e1a22fa0a97ce442058ee276f202af1b64fb4becf4bfaf47462703e5bc273b1` |

## Freeze basis

| Item | Value |
|---|---|
| SLIDES | 29 |
| CONTENT_DRIFT | 0 |
| BP-R1 to BP-R5 | all **RESOLVED** |
| M-01 to M-12 | all **RESOLVED** |
| UNRESOLVED_PATCHES | 0 |
| Risk rows | 24 (14 original + 10 added QA gates) |

### Arithmetic and toy data (independently verified)

| Item | Value |
|---|---|
| Canonical toy rows | 10 (fictional online store; course-owned and synthetic) |
| featured | ones 6 · zeros 4 · mean 0.6 |
| price | mean 28.0 · median 16.5 · sample SD 33.6 |
| rating | observed n 8 · missing n 2 (P04, P08) · mean 4.0 |
| Slide 13 histogram | counts 6, 2, 1, 0, 0, 0, 1 · total 10 |
| Slide 16 | r(price, units_sold) = −0.7995… → **−0.80** |
| Slide 21 schematic | designated point **z = 3.92** |

### Status checks

| Check | Status |
|---|---|
| PC-2 | Satisfied. Non-color cues are specified per slide, and no violations were found. |
| Copied visuals | 0 |
| App Store dependency | 0 |
| Notes safety | Safe. Notes are assumed student-visible and contain no builder or forbidden terms. |

## Frozen production rules (carried forward)

**Dataset and visuals**
- Canonical 10-row fictional online-store dataset, course-owned and synthetic only.
- Copied visuals = 0; App Store dependency = 0.
- PC-2 required. Student-facing slides must not rely on animation for meaning.

**Notes and build metadata**
- Speaker notes are assumed student-visible. Builder-only instructions belong in BUILD_METADATA / QA.
- Sample SD uses n − 1 as a build-only convention.
- Histogram bins use a deterministic left-closed / right-open convention, stated in build metadata only.

**Slide-specific rules**
- The min-max 10 / 20 / 40 example is standalone and not part of the canonical dataset.
- Slide 21 uses a separate schematic for the ±3 SD heuristic. P10 = $120 remains the slide-22 unusual-but-valid example.
- Slide 13 mean/median markers are required and are distinguished by non-color line style.
- Slide 14 has exactly two visible callouts.
- Slide 16 uses `price` and `units_sold` only.
- Slide 17 says "four things to check".
- Slide 24 contains the lecture's only two formulas.

## Handoff states (unchanged)

| Handoff | State |
|---|---|
| HANDOFF-ASSESS-01 (M6-R5 content-freeze alignment) | CLOSED for M6-R5 content-freeze scope only |
| AF-R5-01 | OPEN — ASSESSMENT-FREEZE TRANCHE |
| HANDOFF-M5-01 | OPEN |
| HANDOFF-S3-01 | OPEN |
| M6-R4B | HOLD |

## Nonblocking observation

- The blueprint's summary PC-2 table does not enumerate slides 3, 4, 8, 9, 20 and 24 individually.
- Each of those slide entries has its own explicit non-color cue.
- **No patch required.** The per-slide specification remains authoritative.

## Next step

The M6-R5 **build spec** may begin only after the repository closure commit containing this record is made.

## Integrity

- Blueprint content changes: 0. Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
