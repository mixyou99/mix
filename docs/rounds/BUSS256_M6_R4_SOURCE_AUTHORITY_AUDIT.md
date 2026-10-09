# BUSS256 M6-R4 — Seminar 4 Overview of Data Analytics Source Authority Audit

## 1. Precheck

- Worktree: `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree`
- Branch: `buss256/2027-refresh`
- HEAD: `b18a8356d0db5e6860e65c6422424d6c9c299728`
- Staged count at entry: `0`
- Resolution read first: `docs/rounds/BUSS256_NEXT_MODULE_RESOLUTION.md`.
- Scope: source recovery and authority resolution only. No 2027 content, build, or source repair was created.

## 2. Search scope

Read-only search covered the current BUSS256 worktree and the direct Seminar 4 lineage under:

`/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 4_Data Analytics/`

The direct historical duplicate location `Old/Week 4/S7_Data Mgmt 1/` and direct Week-2/S4 filenames were checked only for duplicate/lineage metadata. Assessment folders, solutions, and R exercise source were not opened for content. No web access occurred.

## 3. Lecture candidate inventory

| Candidate | Type / role | Size | Modified date | SHA-256 | Pages / slides | `_Updated` | Completeness and contents |
|---|---|---:|---|---|---:|---|---|
| `Seminar 4_Lecture_Data Analytics.pdf` | student-facing distribution candidate | 1,385,954 B | 2025-09-18 | `efd12a7…e0e6` | 49 | no | Complete 4:3 lecture export. Analytics overview, six techniques, examples, supervised/unsupervised distinction, statistics, querying, and analytics process. No R function/package/import/data-file instruction found in extractable text. |
| `Seminar 4_Lecture_Data Analytics.ppt` | editable predecessor | 9,401,344 B | 2025-11-23 filesystem date; OLE last-save 2025-09-19 | `7216369…4a3a` | 49 when rendered | no | Editable source matching the original 49-page distribution sequence. |
| `Seminar 4_Lecture_Data Analytics_Updated.pdf` | student-facing distribution candidate | 1,658,215 B | 2025-11-23 | `7a144900…187e` | 49 | yes | Complete 4:3 lecture export; later companion to the updated PPT. Same core sequence, with localized instructional updates. |
| `Seminar 4_Lecture_Data Analytics_Updated.ppt` | editable updated source | 10,985,472 B | 2025-11-23; OLE last-save 2025-11-24 | `1dd76a4…44ab6` | 49 when rendered | yes | Complete editable source; companion export retains the same 49-slide sequence. |
| `…_InClass1.ppt` | instructor-facing reveal variant | 11,338,240 B | 2025-11-23; OLE last-save 2025-09-22 | `f5aa039e…f8b4` | 60 when rendered | no | Adds staged/reveal material to the lecture sequence. Not a student distribution authority. |
| `…_InClass2.ppt` | instructor-facing in-class variant | 11,483,648 B | 2025-11-09; OLE last-save 2025-09-29 | `a38fbe34…edd5b` | 62 when rendered | no | In-class variant with additional instructor-only material. Not a student distribution authority. |
| `…_InClass3.ppt` | instructor-facing in-class variant | 11,483,136 B | 2025-11-23; OLE last-save 2025-10-14 | `1be89859…1523` | 63 when rendered | no | Latest observed in-class variant; adds a review/reveal item relative to InClass2. Not a student distribution authority. |
| `Seminar 4_Script_1.docx` | lecturer-script candidate | 33,442 B | 2025-09-20 | `73b5f1b7…e608` | not content-opened | no | Directly colocated, but not needed to establish lecture-deck authority. Treated as a secondary reference pending a separately scoped script review. |

Both 49-page lecture PDFs use a 4:3 page size (720 × 540 pt). The deck contains imported figures/case graphics. A separate visual/image-layer audit would be needed to classify every raster asset as a screenshot or non-UI image; no R/IDE screenshot or version-specific UI claim appears in the extractable 49-slide student-deck text.

## 4. Lecture lineage map

```text
49-slide editable predecessor PPT ──export──> 49-page predecessor PDF
             │
             └─ localized content updates ──> 49-slide _Updated PPT ──export──> 49-page _Updated PDF
                                                        │
                                                        └─ separate instructor branches:
                                                           InClass1 (60) → InClass2 (62) → InClass3 (63)
```

The `_Updated` pair is genuinely later, not merely renamed: its PDF creation metadata is 2025-11-23 and its editable PPT OLE last-save metadata is 2025-11-24, after the predecessor pair. The 49-slide structure remains intact. Text comparison identifies localized changes on slides 23 and 25: the Target case is simplified/recomposed and the classification example’s displayed response state is updated. No broad lesson-sequence replacement was found.

The InClass files add staged/reveal and instructor-facing material, raising the rendered count from 49 to 60, 62, and 63. They are not duplicates and must not replace the student distribution source. No byte-identical copy of either 49-slide lecture pair was found elsewhere in the BUSS256 source tree.

## 5. Canonical lecture authority

- **PRIMARY AUTHORITY, student-facing distribution:** `Seminar 4_Lecture_Data Analytics_Updated.pdf`.
- **EDITABLE AUTHORITY:** `Seminar 4_Lecture_Data Analytics_Updated.ppt`.
- **SECONDARY REFERENCE / predecessor:** the non-Updated 49-page PDF/PPT pair.
- **SECONDARY REFERENCE, instructor-only:** InClass1, InClass2, and InClass3.
- **SECONDARY REFERENCE:** `Seminar 4_Script_1.docx`, pending a separately governed script review.

This decision relies on the later editable/export pair, preserved 49-slide student sequence, the localized substantive updates, and the prior governed finding F-11. It does not rely on `_Updated` in the filename alone.

## 6. `admission.csv` inventory and authority

| Candidate | Size | SHA-256 | Relationship | Authority result |
|---|---:|---|---|---|
| `Seminar 4_Data Analytics/Exercise/admission.csv` | 5,489 B | `41e2312c…8397` | Active Seminar 4 Exercise folder | **AMBIGUOUS instructional-data candidate** |
| `Old/Week 4/S7_Data Mgmt 1/admission.csv` | 5,489 B | `41e2312c…8397` | Historical duplicate location | **DUPLICATE/VARIANT** |

The two files are byte-identical. The 49-slide lecture PDFs contain no extractable `admission.csv`, `read.csv`, or data-import reference. The active Exercise filenames identify an admission-data exercise, but the CSV sits inside an Exercise folder. Its assessment status was not established from non-sensitive evidence, so rows, header, dimensions, missingness, and tutorial runnability were intentionally not inspected. It is not a lecture-deck authority; it requires a separate assessment-safe data/exercise authority decision before content inspection.

## 7. Functions exercise track authority

No active Seminar 4 source named as a functions exercise was found. The active Seminar 4 Exercise bundle is named for admission data and import/export; its content was not opened because the exercise boundary is separately governed.

Direct historical S4-named candidates exist under `Old/Week 2/S4_Data Structure II/`:

| Candidate set | Metadata evidence | Classification |
|---|---|---|
| `Seminar 4_R.docx` (`bebedf1a…eed0b`), `Seminar 4_R Exericise.r` (`77c78ac7…414f`), `Seminar 4_R_Task.pdf` (`b9b0a509…374a`), `Seminar 4_R_Task.pptx` (`fc51b7f9…fea1`), and associated script/solution files | Historical Week-2/S4 location; mixed student/task/solution naming; no active-Seminar-4 linkage proved | **AMBIGUOUS / OUT-OF-SCOPE for content** |
| `Seminar 3_Data Structure/Functions/…` track | Prior M6-R3 audit identifies it as a parallel functions exercise lineage, not the Seminar 4 lecture | **SECONDARY REFERENCE** |

The prior M6-R3 audit establishes that the Seminar 3 functions track includes user-defined-function material, while M6-R3’s 2027 tutorial deliberately retains only `mean()`. This audit does not establish that any candidate above is the canonical Wk-3 functions exercise, and does not inspect arguments, return values, scope, packages, or datasets inside exercises. A separate assessment-safe authority audit is required.

## 8. Package-material audit

The canonical 49-slide student deck does not contain extractable `install.packages()`, `library()`, package names, package-install/load instructions, `RStudio`, `Posit`, external-download directions, `setwd()`, or data-import instructions. It therefore does not independently teach the package-installation/loading distinction.

No distinct, non-assessment Seminar 4 package handout was found in the direct active folder. M6-R2 remains the authority for installation, setup, RStudio Project, and script workflow. The package component of M6-R4 is **UNRESOLVED**, rather than inferred from an unrelated later-semester package source.

## 9. M6-R2 / M6-R3 alignment

| Prior-module boundary | M6-R4 source evidence | Alignment result |
|---|---|---|
| M6-R2 owns setup, Project habit, and script workflow | No setup or RStudio/Posit text in the 49-slide lecture | No direct duplication; the lecture also does not reinforce the Project/script handoff. |
| M6-R3 owns vectors, matrices, data frames, `$`, `[row,column]`, and `mean()` | The lecture is conceptual analytics content and has no extractable R code | No contradiction, but it does not visibly build the intended functions/packages continuation. |
| M6-R3 defers packages and user-defined functions | The lecture contains no package or user-defined-function instruction | The intended continuation is absent from the canonical lecture authority; do not invent it before a separate exercise/source audit. |
| M6-R3 uses ASCII-safe code and no `setwd()` | No `<-`, U+0336, or `setwd()` in the 49-slide PDF extraction | No direct code-glyph regression in the canonical lecture. |
| Predict–Run–Compare habit | No extractable execution activity in the student lecture | Not contradicted; reinforcement is absent. |

## 10. Code / glyph risks

The canonical lecture is not code-bearing in its extractable text. Static checks on both 49-page PDFs found:

- ASCII `<-`: 0 occurrences.
- U+0336: 0 occurrences.
- `setwd()`: 0 occurrences.
- `install.packages()` / `library()`: 0 occurrences.
- `admission.csv` / `read.csv`: 0 occurrences.

Curly quotation marks occur in ordinary slide prose and examples, including case-question wording. They are not identified as executable R code in the canonical lecture. Code, solution, and task files in the Exercise boundary were not opened, so their copy/paste safety, undeclared objects, package calls, outputs, and code glyphs remain unverified.

## 11. F-11 mapping

| Field | Result |
|---|---|
| Definition | F-11 records the Seminar 4 `_Updated` deck as the best-maintained first-half source. |
| Location | `_Updated.ppt` and its 49-page `_Updated.pdf` companion. |
| Type | AUTHORITY / CONTENT |
| Status | **CONFIRMED** |
| Evidence for later closure | Preserve the updated editable/distribution pair as the baseline; any 2027 revision must trace its changes to this pair. |

## 12. F-12 mapping

| Field | Result |
|---|---|
| Definition | F-12 records the six-technique course spine and its data-literacy framing. |
| Location | Canonical student deck slide 12 lists clustering, association, classification, prediction, data visualization, and text-mining; slides 13–39 elaborate the taxonomy and examples. |
| Type | CONTENT |
| Status | **CONFIRMED** |
| Evidence for later closure | A content-spec pass must reconcile this spine with the approved Wk-7-first AI progression without treating AI as a seventh technique. |

## 13. F-20 mapping

| Field | Result |
|---|---|
| Definition | F-20 governs stale RStudio branding/URL risk and assigns installation/setup ownership to M6-R2. |
| Location | No direct RStudio/Posit/install URL or package-installation text in the canonical 49-slide lecture extraction. |
| Type | VERSION/URL / WORKFLOW |
| Status | **NOT-APPLICABLE to the canonical lecture; UNRESOLVED for the separately governed exercise/package track** |
| Evidence for later closure | Authority and content inspection of the exercise/package track, then local verification of any retained URL/version claim. |

## 14. F-6 held-status note

F-6 remains professor-held and unverified. The wider first-half record identifies dead embedded Seminar-2 media; this audit found no basis to assert that the Seminar 4 canonical deck contains an F-6 target. No media was browsed, tested, removed, or replaced.

## 15. Component-by-component authority table

| Component | Classification | Authority / boundary |
|---|---|---|
| Student lecture distribution | PRIMARY AUTHORITY | `Seminar 4_Lecture_Data Analytics_Updated.pdf` |
| Editable lecture | EDITABLE AUTHORITY | `Seminar 4_Lecture_Data Analytics_Updated.ppt` |
| Predecessor 49-slide pair | SECONDARY REFERENCE | Non-Updated PDF/PPT pair |
| InClass1–3 | SECONDARY REFERENCE | Instructor-facing variants; do not substitute for student source |
| Lecturer script | SECONDARY REFERENCE | Directly colocated but not content-opened |
| `admission.csv` | AMBIGUOUS | Active Exercise copy has one byte-identical historical duplicate; data content not inspected |
| Functions exercise | AMBIGUOUS / OUT-OF-SCOPE | No active canonical source resolved; historical S4 and Seminar-3 functions tracks require a separate safe audit |
| Package/setup supplemental material | UNRESOLVED | None found in the canonical lecture; M6-R2 remains setup authority |

## 16. Provisional 2027 dispositions

| Lecture section | Provisional disposition | Evidence-bound rationale |
|---|---|---|
| Business-problem / analytics overview | KEEP-BUT-CLARIFY | Core purpose of the canonical lecture; overlap with M6-R1 requires a later boundary map. |
| Six-technique map | KEEP-BUT-CLARIFY | F-12 course spine is explicit and should remain, with later progression reconciliation. |
| Technique examples / supervised–unsupervised map | KEEP-BUT-CLARIFY | Foundational taxonomy; no redesign decision made here. |
| Statistics, data querying, and analytics-process material | KEEP-BUT-CLARIFY | Present in canonical deck; later scope mapping must avoid duplication with Wk 4–5 data management. |
| Functions / package teaching | DEFER | Not present in canonical lecture authority; exercise-track authority is unresolved. |
| Admission-data import/use | DEFER | CSV/exercise status and compatibility are not yet safe to inspect. |
| InClass reveal additions | DEFER | Instructor-facing sequence; not a student-deck authority. |

## 17. Unresolved questions

1. Which separately governed artifact, if any, is the canonical Wk-3 functions/packages exercise?
2. Is `admission.csv` a non-sensitive instructional dataset eligible for a scoped structure audit, and which active exercise version owns it?
3. Should the later M6-R4 content specification explicitly add a Project/script reminder because the authoritative lecture does not carry M6-R2’s workflow handoff?
4. Which boundaries should separate Seminar 4 analytics overview from M6-R1 concepts and Wk 4–5 data-management content?
5. Does any Seminar 4-specific media asset require F-6 handling? Local evidence does not establish one.

## 18. Recommended next tranche

Before a content specification, run a **bounded assessment-safe authority audit of the Wk-3 exercise/data track**. It must first classify the active admission/import-export materials and any legitimate functions/packages companion without opening solutions or assessment content. If the course owner authorizes content inspection, then establish the canonical exercise source, `admission.csv` schema/compatibility, package workflow, and code-glyph safety. Do not redesign the lecture or create material in that tranche.

## 19. Integrity attestation

- Source mutations: `0`
- M6-R1 touched: `no`
- M6-R2 touched: `no`
- M6-R3 touched: `no`
- KMB689 touched: `no`
- Git staged: `0`
- Commit: `0`
- Push: `0`
- Web browsing: `0`
- **Assessment-read exception:** an automated text scan of two plausible InClass lecture candidates encountered embedded in-class assessment slides before they were classified as instructor-only. No separately stored assessment file, solution, or assessment-folder content was opened; no further assessment content was accessed. Therefore an `assessment reads = 0` attestation cannot be made for this audit.
