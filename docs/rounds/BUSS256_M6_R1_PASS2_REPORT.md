# BUSS256 M6-R1 — Pass 2 Report

*Change log: Oct 6, 2026 — created. Focused delta revision of the Seminar 2 content spec per the project lead's closed R2 list. v1 files unchanged. No PPTX; nothing staged or committed.*

## Precheck

Darwin; worktree `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree` on `buss256/2027-refresh` at `f66af93cb8ac21b0441515db40b12e937547922d`; staged 0; no tracked modifications; no commit since the baseline; the only uncommitted items were the three Pass 1 files and `work/m6_r1_extract/`. Original KMB689 tree: `kmb689/deck-revision-2027s` at `53b87aa149bfd75802dc7a3ba8725b446c4110af`, dirty count 14, staged 0.

## Exact delta from v1

| N12 # | v1 | v2 |
|---:|---|---|
| 7 | KEEP | REVISE |
| 8 | KEEP | REVISE |
| 9 | KEEP | REVISE (carries one sentence from #10) |
| 10 | REVISE | DELETE as standalone |
| 11 (+12, 13) | REVISE | REVISE, plain definition, no quote overload |
| 14 | REVISE | REVISE (now also absorbs #16) |
| 15 | KEEP | DELETE |
| 16 | REVISE | MERGE → #14 |
| 17 | KEEP | REVISE completely (relationship map; "Part 1 recap") |
| 25 | KEEP-BUT-DATE | REVISE — merged with #26 ("More data ≠ more information") |
| 26 | KEEP | MERGE → #25 |
| 28 | KEEP-BUT-DATE | REVISE strongly (two separate trends) |
| 29 | KEEP | OPTIONAL-DEFER |
| 31 | KEEP-BUT-DATE | REVISE (infographic removed) |
| 33 | REVISE | REVISE — absorbs #34 |
| 34 | KEEP | MERGE → #33 |
| 36 | REVISE | REVISE (week numbers removed) |
| 40 | KEEP-BUT-DATE | REVISE (screenshot removed) |
| 42 | REVISE | REVISE (precise GFT lesson) |
| 44, 45 | KEEP | REVISE |
| 47 | KEEP | MERGE → #48 |
| 48 | KEEP | REVISE (carrier of the insight loop) |
| 49 | KEEP | REVISE |
| 51 | REVISE | REVISE (new structure; video removed) |
| 52 | REVISE | REVISE (no filename, no week) |
| 53 | DELETE | DELETE (handoff recorded) |

Unchanged from v1: #1, #2, #3, #5, #6, #23, #24, #38, #39, #41 and the v1 merges/deletes not listed above (#4, #12, #13, #20, #21, #22, #30, #32, #35, #37, #43, #46, #50).

## Counts

| Disposition | v1 | v2 |
|---|---:|---:|
| KEEP | 18 | 5 |
| KEEP-BUT-DATE | 5 | 1 |
| REVISE | 14 | 24 |
| MERGE | 12 | 16 |
| DELETE | 2 | 4 |
| OPTIONAL-DEFER | 0 | 1 |
| ADD | 0 | 0 |

- **Resulting slide count: 30** (31 if the optional #29 is reinstated); v1 was 37; target range 29–33.
- **Deleted:** #4, #10 (standalone), #15, #53.
- **Merged (into):** #12, #13 →#11; #16 →#14; #20 →#17; #21 →#9; #22, #37, #43, #46 →#23; #26 →#25; #30, #32, #35 →#27; #34 →#33; #47 →#48; #50 →#51.
- **Revised (24 carrier slides):** #2, #3, #6, #7, #8, #9, #11, #14, #17, #24, #25, #27, #28, #31, #33, #36, #40, #42, #44, #45, #48, #49, #51, #52 — 12 are new REVISEs in v2.
- **Optional-defer:** #29 (redundant after the merged #25 and the new #28; its chart asserts growth rates with no data; reinstatement conditions are in the spec).

## External evidence

All twelve VX items are closed in `BUSS256_M6_R1_EXTERNAL_VERIFY_QUEUE_v2.md`: 3 RESOLVED, 1 RESOLVED-PARTIAL (VX07), 8 RETIRED. **Unresolved external-evidence count: 0.** The evidence was supplied by the project lead; this pass did no web browsing and did not independently re-verify it.

## Governed open items (recorded, not resolved)

- **OPEN-M5-01** — AI-timing inconsistency ("after the midterm" vs. M-5 in Week 7 and the midterm in Week 8). Owner: ChatGPT / project lead. Deadline: before M5 production begins.
- **HANDOFF-S3-01** — N12 #53 (R review) removed from M6-R1; reconsider when Seminar 3 is built.
- **HANDOFF-S3-02** — exact Seminar 3 tutorial filename/version to be resolved during the Seminar 3 build.
- **SUPERSEDE-M6-01** — roadmap F-7 ("AI-assisted analytics workflow in Seminar 2") superseded for M6-R1 by the approved blueprint and PC-3; not to be reintroduced.

## Files created

- `teaching/BUSS256/02_working/M6_R1/BUSS256_M6_R1_CONTENT_SPEC_v2.md`
- `teaching/BUSS256/02_working/M6_R1/BUSS256_M6_R1_EXTERNAL_VERIFY_QUEUE_v2.md`
- `docs/rounds/BUSS256_M6_R1_PASS2_REPORT.md`

## Attestation

- Source mutations = 0 (N12, the 2025 tree, v1 files unchanged — v1 SHA-256 recorded before and checked after).
- Assessment reads = 0; assessment mutations = 0.
- Git staged = 0; commit = 0; push = 0.
- No PPT/PPTX built or edited; M5 not started; original KMB689 tree unchanged.
