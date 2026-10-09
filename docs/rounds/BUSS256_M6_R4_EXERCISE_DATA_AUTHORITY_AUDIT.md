# BUSS256 M6-R4 — Exercise / Data Track Assessment-Safe Authority Boundary Audit

## 1. Precheck

- Worktree: `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree`
- Branch: `buss256/2027-refresh`
- HEAD: `b18a8356d0db5e6860e65c6422424d6c9c299728`
- Staged files at entry: `0`
- Read first: `docs/rounds/BUSS256_M6_R4_SOURCE_AUTHORITY_AUDIT.md`.
- The canonical lecture is closed for this pass: `Seminar 4_Lecture_Data Analytics_Updated.pdf`, with matching `_Updated.ppt` as editable authority.

## 2. Scope and safety boundary

This pass resolves only filename, path, timestamp, size, hash, duplicate, and safe-governance evidence for the Wk-3 exercise/data boundary. It does not determine exercise content, answers, data schema, pedagogy, or 2027 revisions.

Not opened or parsed: InClass1/2/3 deck content; question/task content; solution files; R exercise code; CSV headers or rows; or any ambiguous exercise artifact. The only lecture authority used is the already-resolved 49-slide pair, and its contents were not rescanned.

## 3. Assessment-incident note

The prior M6-R4 authority pass used an automated scan before InClass2 and InClass3 were classified as instructor-only and encountered embedded assessment slides. No standalone assessment file or solution was opened, and none of that material is reused here. All InClass variants are excluded from further M6-R4 instructional source-authority work unless a later authorization expressly includes them.

## 4. `admission.csv` candidate inventory

| Candidate | Parent-folder context | Size | Modified date | SHA-256 | Duplicate evidence |
|---|---|---:|---|---|---|
| `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 4_Data Analytics/Exercise/admission.csv` | Active Seminar 4 `Exercise/` folder | 5,489 B | 2025-09-18 | `41e2312ca09d50e99c2db67fbabc78d215df6ce71eefe880df5e9310a9fa8397` | Same bytes as the historical copy below |
| `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Old/Week 4/S7_Data Mgmt 1/admission.csv` | Historical Data Management location | 5,489 B | 2025-09-10 | `41e2312ca09d50e99c2db67fbabc78d215df6ce71eefe880df5e9310a9fa8397` | Byte-identical duplicate |

No header, row, column, missingness, or schema inspection occurred. The canonical 49-slide lecture authority has no established safe reference to `admission.csv`; active Exercise filenames make an instructional connection plausible but do not establish whether the file is safe to inspect.

## 5. `admission.csv` safety/authority classification

| Component | Safety classification | Authority decision | Rationale |
|---|---|---|---|
| Active Seminar 4 `Exercise/admission.csv` | **AMBIGUOUS** | **AMBIGUOUS — USER/PROJECT-LEAD DECISION REQUIRED** | Located with Exercise materials and named by admission-data exercise artifacts, but no safe evidence establishes whether it is a non-assessment teaching dataset. |
| Old Week-4 copy | **DUPLICATE** | **DUPLICATE** | Exact SHA-256 identity to the active Seminar 4 copy. It cannot independently govern the Wk-3 track. |

## 6. Wk-3 exercise candidate inventory

The following inventory uses metadata only. “Likely role” is based solely on naming and folder context, not content.

| Candidate | Type | Size | Modified date | SHA-256 | Folder / likely role | Safe evidence relationship |
|---|---|---:|---|---|---|---|
| `Seminar 4_R_Exercise_Data Import_Export.pdf` | PDF | 224,068 B | 2025-09-18 | `47c6dc2f…fbee` | Active Seminar 4 Exercise; likely student practice | Direct Wk-3 path; no solution/in-class marker |
| `Seminar 4_R_Exercise_Data Import_Export.pptx` | PPTX | 71,724 B | 2025-09-18 | `6c298adf…9215` | Active Seminar 4 Exercise; likely editable/student presentation companion | Direct Wk-3 path; no solution/in-class marker |
| `Seminar 4_R_Exercise_Data Import_Export_Updated.pdf` | PDF | 226,547 B | 2025-09-27 | `67094082…8aec` | Active Seminar 4 Exercise; likely later student-practice candidate | Direct Wk-3 path; no solution/in-class marker |
| `Seminar 4_R_Exercise_Data Import_Export_Updated.pptx` | PPTX | 69,428 B | 2025-09-27 | `2fbf60e8…ffc1` | Active Seminar 4 Exercise; likely later editable companion | Direct Wk-3 path; no solution/in-class marker |
| `Seminar 4_R_Exercise_Code.r` | R | 1,812 B | 2025-09-18 | `4ee9d875…cbac` | Active Seminar 4 Exercise; role unknown without content | Associated exercise code; content not opened |
| `Seminar 4_R_Exercise_Admission_inClass.pptx` | PPTX | 265,191 B | 2025-09-27 | `6c67babf…2ade` | Active Exercise; instructor/in-class signal | Metadata only; excluded |
| `R Exercise 3_Admission Data_inClass_25F2.pptx` | PPTX | 463,339 B | 2025-11-05 | `483b4057…eeb64` | Active Exercise; instructor/in-class signal | Metadata only; excluded |
| `Seminar 4_R_Exercise_Solution_Admission Data.r` and `_Updated.r` | R | solution-named | active Exercise | not content-opened | Instructor solution | Explicitly excluded |

The safe M-6 verification-seed specification names Wk 3 “functions & packages” and a functions-in-R exercise, but it does not identify any file in this active Seminar 4 Exercise folder as that canonical functions artifact.

## 7. Functions-track lineage classification

| Candidate lineage | Classification | Authority / safety result |
|---|---|---|
| Active Seminar 4 import/export and admission Exercise materials | Seminar 4 / Wk-3 lineage | **SAFE PRIMARY CANDIDATE** only for the student-marked data-import/export PDF/PPTX pair; this does not establish a functions authority. The `Code.r` file remains ambiguous. |
| `Old/Week 2/S4_Data Structure II/` files named `Seminar 4_R.*` | Historical S4/data-structure lineage | **AMBIGUOUS — USER/PROJECT-LEAD DECISION REQUIRED**. The folder contains task and solution naming, so content review is unsafe without a separate authorization. |
| `Seminar 3_Data Structure/Functions/` question/code/solution lineage | Seminar 3 historical functions lineage | **SAFE SECONDARY REFERENCE** for lineage only, not the M6-R4 Wk-3 authority. Prior governance records a functions connection but classifies solutions and in-class variants as out of scope. |

No locally safe evidence resolves a canonical Wk-3 functions exercise. The existing M6-R3 record confirms the Seminar 3 functions lineage is separate; it must not be silently promoted into Seminar 4.

## 8. Package-track classification

No direct Wk-3 package-named handout, guide, or safe instructional file is present in the active Seminar 4 directory inventory. The canonical lecture does not supply package instruction, while M6-R2 owns setup and its governed audit records that package installation first appears in later seminar code, not in the setup guide.

**Package-track decision: NOT PRESENT.** Any Wk-3 package component requires a later project-lead source decision; no existing ambiguous Exercise file is assumed to supply it.

## 9. Component authority table

| Component | Decision | Safe authority / boundary |
|---|---|---|
| Canonical lecture | AUTHORITY RESOLVED | Existing M6-R4 authority result remains closed: `_Updated.pdf` plus matching `_Updated.ppt`. |
| `admission.csv` | AMBIGUOUS — USER/PROJECT-LEAD DECISION REQUIRED | Active copy is an Exercise-folder candidate; old copy is byte-identical duplicate. No content inspection authorized. |
| Data import/export student-material pair | SAFE PRIMARY CANDIDATE | `_Updated.pdf` and `_Updated.pptx` are later named active exercise candidates, but require a scoped content audit before promotion or revision. |
| Active `Code.r` | BLOCKED BY ASSESSMENT STATUS | Exercise-code role cannot be safely inferred from filename alone. |
| Admission InClass decks | BLOCKED BY ASSESSMENT STATUS | Instructor/in-class markers; metadata only. |
| Admission solution R files | BLOCKED BY ASSESSMENT STATUS | Explicit solution naming. |
| Wk-3 functions exercise | AMBIGUOUS — USER/PROJECT-LEAD DECISION REQUIRED | No safe canonical file resolution. |
| Package instructional artifact | NOT PRESENT | No safe distinct Wk-3 artifact found. |

## 10. Remaining ambiguities

1. Whether the active `admission.csv` is a non-sensitive instructional dataset that can be structurally audited.
2. Whether `Seminar 4_R_Exercise_Data Import_Export_Updated` is ungraded student practice or has an assessment role.
3. Which artifact, if any, governs Wk-3 user-defined functions and packages.
4. Whether the active `Code.r` belongs to the safe student exercise or to an assessment/instructor workflow.
5. Whether a project lead wishes to authorize an assessment-safe content audit of the identified student-marked import/export pair.

## 11. Recommended next step

Request a project-lead decision that explicitly classifies the active `Seminar 4_R_Exercise_Data Import_Export_Updated.pdf/.pptx` pair and `admission.csv` as either non-assessment instructional material or assessment-related. If classified safe, the next tranche may read only that approved pair and the CSV header/schema, then establish content authority and runnable compatibility. Keep code, InClass, task, and solution artifacts excluded unless separately authorized.

## 12. Integrity attestation

- Canonical lecture authority reopened: `no`
- InClass deck contents read: `0`
- Standalone assessment files read: `0`
- Assessment solutions read: `0`
- `admission.csv` content read: `0`
- Ambiguous exercise contents read: `0`
- Source mutations: `0`
- Git staged: `0`
- Commit: `0`
- Push: `0`
