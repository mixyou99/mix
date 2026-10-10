# BUSS256 M6-R5 — Build Spec v1.3.2 Self-Check (author)

**Status: DRAFT. This is an AUTHOR SELF-CHECK, not an independent audit.** Independent Codex verification is still required, and freeze is not recommended until it is complete.

*Recorded 2026-10-10.*

## 0. Inputs and output

| Item | SHA-256 |
|---|---|
| v1.3.1 spec (canonical input) | `ac44fb1bc9ba565a9ca25c8022072ab3324a917aefc53c493a5455d29c4bb48d` (matched the expected value before writing) |
| v1.3.1 supplement | `e7529f8ec7dc40cada02c1ebb49672368313423e5c0555730634a0d488f9d438` (matched) |
| v1.3.1 self-check | `8be3466f6c6341c3142ca05cb213ed33af01ac580600226ab8b638d48b30b0b0` (matched) |
| **v1.3.2 spec** | `eb6b80e00ff2da7f3a7864324eea7189e6ef6884b71ebf3d7a98f0a2d57bd965` |
| v1.3.2 supplement | See the final report (a record cannot contain its own hash or a later file's hash) |

**Baseline:** HEAD `64b2cd8154241d0d626f2cd935db1167a1d8103c` on `buss256/2027-refresh`; 0 files staged.

**Method:** v1.3.2 was produced from v1.3.1 by exact-string replacements. Each replacement asserted its match count, and the script refused to overwrite an existing file. The checks below parse the written files.

## A. Exact v1.3.1 → v1.3.2 diff

POSIX `diff` reports 10 hunks and 62 changed lines (5 removed, 57 added).

| Hunk (v1.3.1 line) | Section | Change |
|---|---|---|
| 1, 3, 4a | Title, status, preface | Version v1.3.2; DRAFT status; base hash; scope statement |
| 28a | §0.3 (new) | v1.3.1 → v1.3.2 change log |
| 58 | §0.1 | Historical "notes unchanged" line clarified |
| 88a | §1 | v1.3.2 supplement added to the authority table |
| 1418 | §16 tally sentence | "v1.3.2 updates only the §16.1 gate-37 row (and adds §16.1.1)" |
| 1432 | §16.1 gate-37 row | Slide-14 artifacts, mandatory R1–R4 and the slide-14 evidence set added. The earlier criteria are retained verbatim. |
| 1433a | §16.1.1 (new) | R1–R4 criteria, evidence, failure handling, ownership, status |
| 1504a | §20 | v1.3.2 integrity block |

## B–C. No content, geometry or notes change

| Check | Result |
|---|---|
| §11 (all 29 slides: objects, coordinates, text, notes) | **Byte-identical** to v1.3.1 |
| §2–§10, §12–§15, §17–§19 | Byte-identical |
| Appendix T and Appendix C | Byte-identical |
| All 38 numbered gate rows in §16 | Byte-identical |
| Slide 14 coordinates and callout order | Unchanged (they live in §11, which is identical) |
| Slide-2 / slide-6 notes (NX-2, NX-6) | Unchanged |
| Deck-wide regression (the verifier rerun on v1.3.1 and v1.3.2) | **Output byte-identical**: 29 slides, 285 objects, 0 overflow, 0 collisions, 0 dot overlaps, 46 TIGHT |

## D–G. Gate-37 coverage

| Check | Result |
|---|---|
| D. R1–R4 explicitly covered | Yes. §16.1.1 has one row for each of R1, R2, R3 and R4, and the gate-37 row makes all four mandatory. |
| E. Operational criteria | R1 (a)–(e), R2 (a)–(c), R3 (a)–(d), R4 (a)–(d). Each is an observable condition with a FAIL otherwise. "No glyph collision" is stated to be insufficient. |
| F. Recorded evidence | Eight items per risk, plus a full-slide context observation. |
| G. FAIL → STOP | Any R1–R4 FAIL is a gate-37 FAIL and triggers the STOP rule. The builder may not move, resize, rewrite or recolor. A governed, versioned spec correction is required. |
| Not weakened | The earlier gate-37 criteria string is present verbatim. "Annotated crops" is retained. Ownership and the STOP-rule text are unchanged (1 → 1 occurrence). |
| Not claimed | No R1–R4 result is reported. These checks need an actual PPTX and PDF. |

## H–I. Documentation

| Check | Result |
|---|---|
| H. Gate-34 reconciliation | The v1.3.2 supplement §4 states the complete v1.3.1 gate set (17, 18, 34, 38, and the gate-37 row) and that gate 34 was already authorized. Documentation only. The v1.3.1 supplement is unchanged. |
| I. §0.1 clarification | The new line is present exactly as directed, and the old bare line is gone. |

## J. Counts and authorities

| Item | v1.3.1 → v1.3.2 |
|---|---|
| Slides | 29 → 29 |
| Declared objects | 285 → 285 |
| Numbered gates | 38 → 38 (M 31 / HYBRID 3 / MV 4) |
| TIGHT records | 46 → 46 |

**Preserved marker strings** (occurrence counts unchanged):
- TV-m1: TABLE_FOCAL.
- TV-m2: CHART_LABEL and fail-closed.
- TV-m3: zero timing and animation.
- TV-m4: 46 TIGHT and the STOP rule.
- TV-m5: slide-15 r values.
- Slide-21 QA.
- The Slide-1 strings.

**Frozen and earlier authorities:** unchanged (hashes re-verified after writing; see the final report).

## Drift

- UNAUTHORIZED_CONTENT_DRIFT = 0.
- UNAUTHORIZED_BLUEPRINT_DRIFT = 0.
- No new exception was granted.
