# BUSS256 M6-R5 — Build Authority Exception (Slide 1)

**Status: DRAFT — INDEPENDENT ACCEPTANCE REQUIRED**

*Recorded 2026-10-09. This record documents a bounded, authorized divergence between the frozen M6-R5 production blueprint and the M6-R5 PPTX build spec v1.3. It does not edit the content spec or blueprint in place.*

## 1. Authorities (all unchanged)

| Authority | Path | SHA-256 |
|---|---|---|
| Content spec v1.3 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` |
| Production blueprint v1.1 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` |
| Build spec v1.2 (preserved) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_2.md` | `55221b0683d3114542b4093a043381c27ae65257753555065b889a46641e4ec0` |
| Locked manifest v0.2.3 | `~/Downloads/BUSS256_Session_Authority_Build_Manifest_LOCKED_v0.2.3.md` (outside the repository; located by name and hash) | `d5734738e06afde34545c6c07b44c0b22e19ed3965f860869414131f77d37557` |

## 2. Manifest rule enforced

Locked Manifest v0.2.3, §1 (read verbatim):

> 2. `S#` is **schedule-layer only**. Week/date/day-of-week are also schedule-layer only.
> 3. Deck bodies do **not** hard-code week/date/deadline/assessment percentage. Those live only in syllabus/schedule/administration surfaces.
> 9. **Historical-value separation:** … Historical scores, weights, dates, or logistics are never copied into a 2027 student-facing artifact by default.

**Primary rule:** §1 rule 3. Rules 2 and 9 support it.

## 3. Divergence

| Shape (unchanged ID, position, size, role) | Original string | Source of the original | Replacement (project-lead ruling) |
|---|---|---|---|
| `S01_META` | `Seminar 5 · Week 4` | **Literal frozen-blueprint string**: blueprint §5 Slide 1 VISIBLE_CONTENT "Seminar 5 · Week 4". Build spec v1.2 reproduced it literally. | `UNDERSTAND · SUMMARIZE · PREPARE` |
| `S01_COURSE` | `BUSS256 · Spring 2027` | **Spec rendering**: the blueprint says only "course line". v1.1/v1.2 rendered it with a semester label. | `BUSS256 · Introduction to Big Data Analytics and Interpretation` |

**Literal blueprint differences:** 1. The blueprint string "Seminar 5 · Week 4" is no longer displayed. This record does **not** claim zero literal blueprint differences.

**Unchanged:** `S01_TITLE` "Data Management I" is unchanged and matches content v1.3 and the blueprint.

**Fit check (Arial):**
- `UNDERSTAND · SUMMARIZE · PREPARE` at 20 pt bold: 5.463 in.
- `BUSS256 · Introduction to Big Data Analytics and Interpretation` at 20 pt: 7.813 in.
- Both fit their existing 12.125 in boxes on one line.

**Counts:**

| Measure | Count |
|---|---|
| UNAUTHORIZED_BLUEPRINT_DRIFT | **0** |
| AUTHORIZED_SLIDE1_TEXT_EXCEPTIONS | **2** |

## 4. Authorization and scope

| Item | Value |
|---|---|
| Authorization | Project-lead ruling in the "BUILD SPEC v1.3 GOVERNED MICRO-PATCH" tranche (2026-10-09). The professor retains final authority. |
| Scope limit | **Slide 1 only**, these two strings only. No other slide, note, data value or geometry is affected by this exception. |
| Enforcement | Build spec v1.3 gate 5: exact S01_META / S01_COURSE strings, and 0 matches on slide 1 for `\bweek\b`, `\bseminar\b`, `\bspring\b`, `\b20\d\d\b` |

## 5. Cross-deck observations (recorded for the later design-unification tranche; no other deck modified)

Slide-1 text was extracted read-only from the actual production PPTX files. It was not inferred from the build specs.

| Deck | SHA-256 | Slide-1 text runs | Observation |
|---|---|---|---|
| `teaching/BUSS256/03_final/production/BUSS256_M6_R4A_2027.pptx` | `986414c230a30ea7a2e2a32f26c7576433dfde28aa2c103693e62711e85649ff` | "KOREA UNIVERSITY BUSINESS SCHOOL", "Overview of Data Analytics", "01", "SEMINAR 4", "Overview of", "Data Analytics", "Which analytical technique fits which business question?", "BUSS256 · Spring 2027" | Contains an `S#`-style label ("SEMINAR 4") and a semester label ("Spring 2027") |
| `teaching/BUSS256/03_final/production/BUSS256_M6_R1_2027.pptx` | `c30d73b07e48acecb9d1fb322d8a6ded9b335e78eabc1ed0173674a75c136c0f` | "Seminar 2 — Principles in Data Science", "BUSS256: Introduction to Big Data Analytics and Interpretation", "Korea University Business School", "Prof. Gun-woong Lee", "Spring 2027" | Contains "Seminar 2" and "Spring 2027" |

**Pattern (CD-1):** both closed production decks carry seminar-number and semester labels on slide 1, the same pattern this exception removes from M6-R5.

**Recommendation (not executed):** the later design-unification / week-label-migration tranche (manifest §1 rules 6 and 8) should decide on one cross-deck title-slide convention. M6-R4A and M6-R1 are not modified here.

**Related observation outside this exception's scope (F-N1, for project-lead ruling):** frozen M6-R5 speaker notes on slide 2 ("…not the order of our seminars. You chose techniques in Seminar 4; …") and slide 6 ("Recall from Seminar 4 …") contain an `S#` reference. Notes are assumed student-visible. This exception does **not** change them (scope: Slide 1 only). Whether manifest §1 rule 2 applies to notes requires a ruling.

## 6. Integrity

- Content spec v1.3 and blueprint v1.1 bytes: unchanged.
- No other deck or production file was modified.
- Assessment files read: 0. M6-R4B reads: 0. Web research: 0.
- Git staged: 0. Commit: none. Push: none.
