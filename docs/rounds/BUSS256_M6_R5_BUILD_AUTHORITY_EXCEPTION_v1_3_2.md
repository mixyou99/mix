# BUSS256 M6-R5 — Build Authority Supplement v1.3.2

**Status: DRAFT — INDEPENDENT VERIFICATION REQUIRED**

*Recorded 2026-10-10. This record supplements the v1.3 exception (`docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md`) and the v1.3.1 supplement (`docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md`). Both remain unchanged. **This record grants no new content or blueprint exception.** It records a QA-coverage decision and reconciles documentation.*

## 1. Authority hash lineage

| # | Artifact | Path | SHA-256 | State |
|---|---|---|---|---|
| 1 | Locked manifest v0.2.3 | `~/Downloads/BUSS256_HANDOFF_2026-10-10.zip` → `essential/BUSS256_Session_Authority_Build_Manifest_LOCKED_v0.2.3.md` (also loose in `~/Downloads/`) | `d5734738e06afde34545c6c07b44c0b22e19ed3965f860869414131f77d37557` | Unchanged |
| 2 | Content spec v1.3 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` | Unchanged |
| 3 | Production blueprint v1.1 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` | Unchanged |
| 4 | Build spec v1.3 | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3.md` | `c063b691024b79c1229fb2f94a987e48e9bd62312fc1f573aeeadc48294c37cb` | Preserved |
| 5 | v1.3 exception (Slide 1) | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` | `9e2e7c3f9156a6ab7dbec586451a86c97926922bb1db4f0d510c9a85a2073d32` | Preserved |
| 6 | Build spec v1.3.1 (canonical input) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_1.md` | `ac44fb1bc9ba565a9ca25c8022072ab3324a917aefc53c493a5455d29c4bb48d` | Preserved |
| 7 | v1.3.1 supplement | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION_v1_3_1.md` | `e7529f8ec7dc40cada02c1ebb49672368313423e5c0555730634a0d488f9d438` | Preserved |
| 8 | v1.3.1 self-check | `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_v1_3_1_SELF_CHECK.md` | `8be3466f6c6341c3142ca05cb213ed33af01ac580600226ab8b638d48b30b0b0` | Preserved |
| 9 | **Build spec v1.3.2 (this patch)** | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_2.md` | `eb6b80e00ff2da7f3a7864324eea7189e6ef6884b71ebf3d7a98f0a2d57bd965` | DRAFT |

Hashes 6, 7 and 8 were verified against the directive's expected values before any file was written.

## 2. Authorization

| Item | Value |
|---|---|
| Source | Project-lead tranche "BUSS256 M6-R5 — BUILD SPEC v1.3.2 FINAL QA-COVERAGE MICRO-PATCH" (2026-10-10). It adopts the author's gate-37 findings. The professor retains final authority. |
| Scope | QA wording and documentation only. No slide, object, coordinate, text, note, data or font change. |

## 3. Gate-37 QA coverage (project-lead decision)

The v1.3.1 gate-37 row named only two of the four slide-14 leader risks, and gave no operational criterion for them. v1.3.2 extends the existing §16.1 gate-37 row and adds §16.1.1. All four checks are mandatory, and each has its own PASS/FAIL result.

| Risk | v1.3.1 coverage | v1.3.2 coverage |
|---|---|---|
| R1 Horizontal leader readability (y 2.700) | Partial ("no visible overlap" only) | Explicit criteria (a)–(e) |
| R2 Vertical leader vs table border (x 7.502) | Covered ("must not read as a table border") | Explicit criteria (a)–(c) |
| R3 False connection to S14_M1 | **Not covered** | Explicit criteria (a)–(d) |
| R4 Padded text-box crossing (row-1 rating and featured cells) | Partial (glyph overlap only) | Explicit criteria (a)–(d) |

**Evidence required per risk (eight items):**
- a PASS/FAIL result;
- an annotated PowerPoint render crop;
- inspection at 100% and 200%;
- inspection of the student-distribution PDF;
- a grayscale check;
- a reviewer observation;
- the reviewer's identity;
- artifact references.

Full-slide context is also required.

**Failure handling:** any FAIL triggers the existing STOP rule. The builder may not move, resize, rewrite or recolor anything; the fix is a governed, versioned spec correction.

**Unchanged:** reviewer ownership and the professor's final acceptance. The earlier gate-37 criteria are retained verbatim, so the change only adds requirements.

**Not weakened:** the numbered-gate count stays at 38, and every numbered gate row is byte-identical to v1.3.1.

## 4. Affected-gate reconciliation (documentation only)

The v1.3.1 supplement lists the updated gates as "17, 18, 38, and the §16.1 gate-37 row" in its §3. Its §5 separately records the gate-34 update for the note exceptions.

**Complete gate set affected by v1.3.1:** gates **17, 18, 34, 38**, and the **§16.1 gate-37 review row**.

**Gate 34 was already authorized** in v1.3.1:
- the v1.3.1 supplement, §5;
- build spec v1.3.1, §0.2 items B and C, and the gate-34 row.

This section reconciles the documents. It grants **no new authorization**. The v1.3.1 supplement is preserved unchanged.

**v1.3.2 itself** changes the §16.1 gate-37 row and adds §16.1.1. It changes no numbered gate row.

## 5. Historical-statement clarification

Build spec v1.3.1 §0.1 (the v1.2 → v1.3 change log) said "canonical toy data and notes unchanged". In v1.3.2 it reads:

> "canonical toy data and notes unchanged in v1.3 (v1.3.1 changes the slide-2 and slide-6 notes; see §0.2)."

The historical record is preserved. The slide-2 and slide-6 notes themselves (NX-2, NX-6) are unchanged in v1.3.2.

## 6. Exception inventory (carried; nothing added)

| Category | Count | Items | Source record |
|---|---|---|---|
| Authorized blueprint text deviations | 4 | S01_META, S01_COURSE; NX-2, NX-6 | v1.3 exception; v1.3.1 supplement |
| Authorized geometry correction | 1 | Slide 14, alternative B | v1.3.1 supplement |
| QA-coverage decision | 1 | Gate 37 R1–R4 | This record |
| UNAUTHORIZED_BLUEPRINT_DRIFT | **0** | — | — |
| UNAUTHORIZED_CONTENT_DRIFT | **0** | — | — |

## 7. Integrity

- No frozen authority and no earlier spec or record was modified.
- No PPTX or PDF was built, and no render gate is claimed as passed.
- Assessment reads: 0. M6-R4B reads: 0. `admission.csv` reads: 0.
- The nine `work/` directories were not touched.
- Nothing was staged, committed or pushed.
