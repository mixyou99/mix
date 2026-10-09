# BUSS256 M6-R4A — Closure Correction

*Issued 2026-10-09. Records-accuracy correction only. The original closure record stays unchanged as the historical issued record.*

## Target

- **Correction target:** `docs/rounds/BUSS256_M6_R4A_CLOSURE.md`
- **Target closure commit:** `65e83fffea78def3a4e9481cdbb5f2625c7334f0`
- **Raised by:** `docs/rounds/BUSS256_M6_R4A_INDEPENDENT_CROSS_VALIDATION.md` (verdict BLOCKED, records-accuracy only)

## Correction 1 — Assessment-read statement

The original closure record's unqualified statement **"Assessment reads: 0"** (Governance status section) is too broad. The correct reading follows.

1. **M6-R4A assessment reads = 0.** Across every M6-R4A lecture tranche, assessment-sensitive file reads = 0. These tranches are: content specification, decision/verification packet, external verification, production blueprint, PPTX build spec, build, QA, final-candidate validation, production promotion, and closure.
2. **M6-R4 overall source-audit assessment exposure = NONZERO.** During the earlier M6-R4 source-authority exploration, an automated text scan of the InClass2 and InClass3 lecture variants encountered embedded in-class assessment slides. This happened before those variants had been classified as instructor-only.
3. That exception was already recorded in `docs/rounds/BUSS256_M6_R4_SOURCE_AUTHORITY_AUDIT.md` (final integrity attestation, "Assessment-read exception"). That audit states that an `assessment reads = 0` attestation cannot be made for it.
4. No standalone protected assessment file was opened, and no solution or assessment-folder content was opened.
5. The protected set of 11 assessment-sensitive files (listed in `docs/rounds/BUSS256_2027_GATE_ANNEX.md`) remains outside tracked scope and history: 0/11 tracked at HEAD and 0/11 in history on all refs. This is per the later independent audit (filename-level evidence).
6. No assessment content was reused in M6-R4A. The InClass variants are excluded from M6-R4A source authority (M6-R4A content spec §2, §10).

**Accordingly:**
- "Assessment reads: 0" in the closure record is valid **only** as an M6-R4A statement.
- Read at M6-R4 module scope, it must be qualified by the documented InClass embedded-slide exception.

This correction does not minimize or remove that exception.

## Correction 2 — "Unresolved BUILD-R4A issues: none"

This is a project-governance clarification. The original statement did not cite an explicit acceptance of the render-method deviation.

The final QA accepted the render-method deviation for slides 13 and 32. The facts:
- PowerPoint produced the final PDF.
- PowerPoint's AppleScript PNG export emitted no PNGs in that session.
- The final renders of slides 13 and 32 were rasterized from the PowerPoint-produced PDF at 144 dpi.
- Calibration against PowerPoint-native PNGs of the same pre-patch slides showed only antialiasing and text-raster differences.
- Layout equivalence was verified. A full-page comparison of the pre-patch and final PDFs differs only on pages 13 and 32.
- This QA method did not alter the final deck.

**Item status:**

| Item | Status | Evidence |
|---|---|---|
| BUILD-R4A-QA-03, render-method process item | **ACCEPTED / NONBLOCKING** | `work/m6_r4a_build_v1/BUSS256_M6_R4A_BUILD_v1_1_QA.md` §3, §15 |
| BUILD-R4A-QA-03, validation-receipt item | **RESOLVED** | `work/.codex-finalizer/m6_r4a_build_v1_1_final.validation.json`; QA report addendum "FINAL-CANDIDATE VALIDATION RECEIPT: PASS" |
| BUILD-R4A-QA-01 (slide 13), BUILD-R4A-QA-02 (slide 32) | RESOLVED (geometry-only patch) | QA report §14; the independent audit verified that only `a:off`/`a:ext` values changed |

**OPEN BUILD-R4A ISSUES = 0.**

## What this correction does NOT change

- M6-R4A content
- Production PPTX: SHA-256 `986414c230a30ea7a2e2a32f26c7576433dfde28aa2c103693e62711e85649ff`
- Production PDF: SHA-256 `5396e00d6dc4acedf108a9cfcb79a0250eb8f542cc1d0f43aec93b2f3cf2855c`
- Production status (CLOSED)
- The six-technique spine
- M6-R4B HOLD (see `docs/rounds/BUSS256_M6_R4B_HOLD_LEDGER.md`)

## Integrity

- Existing files modified: 0 (new file only)
- Protected assessment files read: 0
- InClass slide content re-inspected: 0
- Git staged: 0. Commit: 0. Push: 0.
