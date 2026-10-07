# BUSS256 M6-R1 — Pass 2.1 Closure Report

*Change log: Oct 6, 2026 — created; Pass 2.1a bookkeeping corrections applied the same day (disposition count and N12 locator). Bounded content-only closure patch to Pass 2. v1 and v2 files unchanged. No PPTX; nothing staged or committed.*

## 1. Precheck state

Worktree `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree`; branch `buss256/2027-refresh`; HEAD `f66af93cb8ac21b0441515db40b12e937547922d`; nothing staged; the only uncommitted items were the Pass 1 and Pass 2 files and `work/m6_r1_extract/`. No cleanup, reset, stash or removal was performed.

## 2. The six authorized patch groups

| Patch | Change |
|---|---|
| A | N12 #23 / new 12: the linear "Data → Analytics → Business problem → Insights" is replaced by **"Four elements of business analytics"** — Business problem, Data, Analytics, Insight — each with its guiding question, plus the course-convention note ("connected elements, not a rigid one-way sequence; the later insight-loop slide shows how they interact"). The full loop is not duplicated. Mechanical cross-references updated (section strips, sequence title, deferred-visual list). |
| B | N12 #29: OPTIONAL-DEFER → **DELETE** from the 2027 core deck. |
| C | New 13 / N12 #24: "Collecting more data has become easier; turning it into useful information remains hard." The unsupported lack-of-people claim stays deleted. |
| D | New 17 / N12 #31: card-payment example reworded — "If a suspicious transaction is flagged within seconds, it may be stopped before completion; if it is detected much later, that preventive opportunity may already be gone. Same underlying data, different decision value because of timing." Verification prompt kept; no card-network claims added. |
| E | OPEN-M5-01 → **RESOLVED-M5-01** (M-5 / Week 7 is the guided AI on-ramp before the midterm; broader AI collaboration begins after it; "AI begins after the midterm" is superseded). **HANDOFF-M5-01** added. Governed W1/M5 files not edited. |
| F | **HANDOFF-S3-03** (R/RStudio setup prerequisite, with F-20, in the Seminar 3 build) and **HANDOFF-ASSESS-01** (read-only alignment check before assessment freeze) added. |

## 3. No other content decision changed

All other Pass 2 decisions are carried over unchanged (#10, #15, #16, #17 and its check-back, #25, #27, #28, #31's removal of the infographic, #33/#34, #36, #40, #42, #44, #45, #47/#48, #49, #51, #52, #53, SUPERSEDE-M6-01, etc.). `BUSS256_M6_R1_CONTENT_SPEC_v2_1.md` was generated from v2 with exact-match replacements; every replacement was asserted to match exactly once (or, for the repeated-phrase cases, the exact intended target).

## 4. Final disposition counts (51 N12 slides, #18–#19 excluded)

KEEP 4 · KEEP-BUT-DATE 1 · REVISE 25 · MERGE 16 · DELETE 5 (#4, #10, #15, #29, #53) · OPTIONAL-DEFER 0 · ADD 0 = **51**.

**Pass 2.1a correction:** N12 #23 / new 12 was substantively rewritten by Patch A, so its disposition is **REVISE** (professor-confirmed). The earlier KEEP 5 / REVISE 24 aggregate was mechanically inconsistent with that rewrite and has been corrected to KEEP 4 / REVISE 25. The new #12 content is unchanged. Final deck remains 30 slides.

## 5. Final slide count

**30 slides, fixed.** The numbered sequence is not renumbered (#29 was already outside it); all "31 if reinstated" language is removed.

## 6. External-evidence queue status

`BUSS256_M6_R1_EXTERNAL_VERIFY_QUEUE_v2.md` unchanged (it contains no reference to #29). RESOLVED 3 · RESOLVED-PARTIAL 1 · RETIRED 8 · **unresolved 0**. No web browsing.

## 7. Governance status

- **RESOLVED-M5-01** — recorded.
- **HANDOFF-M5-01** — recorded (owner ChatGPT / project lead; before M5 production is finalized).
- **HANDOFF-S3-01** — carried (N12 #53 R review; reconsider when Seminar 3 is built).
- **HANDOFF-S3-02** — carried (Seminar 3 tutorial filename/version).
- **HANDOFF-S3-03** — recorded.
- **HANDOFF-ASSESS-01** — recorded.
- **SUPERSEDE-M6-01** — carried.

## 8–11. Counts

- Source mutations: 0 (N12, the 2025 tree, v1, v2 and the evidence queue unchanged).
- Assessment reads: 0. Assessment mutations: 0.
- Staged: 0. Commit: 0. Push: 0.
- PPT/PPTX built or edited: 0.

## N12 source location

N12 identity unchanged. The Teaching_2025 source tree was intentionally relocated by the professor from Downloads to the Mixyou external drive. The current N12 locator is `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 2_Data Science/Seminar 2_Lecture_Data Science_InClass_25F_2.ppt`. Historical records retain the execution-time paths that were valid when those rounds ran.

- Registered N12 MD5: `992a2cf05bc63ed4419e9266055918f8`; the relocated file matches it exactly. Identity unchanged: yes.
- Relocation professor-confirmed: yes. It is not an anomaly, not a missing-source event and not a new source registration; a relocation with a matching registered identity does not create a new N12 version.
- The 0a, Pass 1, Pass 2, v1 and v2 records keep the execution-time paths valid when those rounds ran; they were not edited.
- Source mutations: 0.

## Files created

- `teaching/BUSS256/02_working/M6_R1/BUSS256_M6_R1_CONTENT_SPEC_v2_1.md`
- `docs/rounds/BUSS256_M6_R1_PASS2_1_CLOSURE_REPORT.md`
