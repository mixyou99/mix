# BUSS256 M6-R3 — Seminar 3 DataFrame / R Tutorial Source + Content Audit

Mode: read-only source recovery and content audit. No tutorial, content spec, or repair was created.

## 1. Precheck

- Worktree: `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree`
- Branch: `buss256/2027-refresh`
- HEAD: `0944257fea911b8193d6c45ccc3cf2cba5ef08c6`
- Staged count: `0`
- Existing untracked `work/` directories were left untouched.
- At audit start, the only pre-existing worktree changes were the untracked `work/` build/audit directories from prior rounds.

## 2. Search scope

Read-only search covered the BUSS256 teaching tree at `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData` and the current BUSS256 worktree. The scoped search included Seminar 3/Data Structure files, direct DataFrame/function exercise companions, the old Week 2 lineage folder, and the old `Seminar 3_R.pdf` references. Unrelated courses and assessment-sensitive contents were not read. No web browsing, staging, commit, or push was performed.

No Seminar 3 candidate was present in the current worktree before this audit. The professor-confirmed teaching tree contained the candidate set below.

## 3. Candidate inventory

| Candidate | Type / role | Size | SHA-256 | Pages / notes | Classification |
|---|---|---:|---|---|---|
| `Seminar 3_Data Structure/Seminar 3_R Tutorial_DataFrame.pdf` | Fall 2025 student-facing tutorial candidate | 350,992 B | `02cee869a85eb5333fbca38f94fbe4b44f0b2071a65d501449d5f1989774d325` | 6 pages, Letter | PRIMARY-CANDIDATE |
| `Old/Week 2/S3_Data Structure I/Seminar 3_R Tutorial.pdf` | older student-facing tutorial variant | 350,992 B | `02cee869a85eb5333fbca38f94fbe4b44f0b2071a65d501449d5f1989774d325` | 6 pages, Letter; byte-identical to candidate above | DUPLICATE/VARIANT |
| `Old/Week 2/S3_Data Structure I/Seminar 3_R Tutorial.docx` | editable tutorial lineage source | 42,894 B | `65a765cf6a29342dca80f02755631667fa537584b275c70d3dc4295d49a7a955` | editable; extracted text contains same U+0336 defect | EDITABLE-AUTHORITY |
| `Old/S2_BA Intro/Excercise/Seminar 3_R.pdf` | stale old N12-named reference | 355,069 B | `c9fe4bba416b4307801009c2f4a5230be1500a3a11fcc6f227789fe4f4cd469f` | 6 pages, Letter | SECONDARY-REFERENCE |
| `Old/S3_R Intro/Excercise/Seminar 3_R.pdf` | duplicate of stale old N12-named reference | 355,069 B | `c9fe4bba416b4307801009c2f4a5230be1500a3a11fcc6f227789fe4f4cd469f` | 6 pages, Letter; byte-identical to preceding row | DUPLICATE/VARIANT |
| `Seminar 3_Data Structure/Data Frame/Seminar 3_R_Exercise_Questions_1.pdf` | DataFrame exercise question deck/export | 128,035 B | `99d278280b1c821bfe27e96b6ea152dac908e7717db7aa5907cb13a0910249c9` | 4 pages, 4:3 | SECONDARY-REFERENCE; exercise content not opened |
| `Seminar 3_Data Structure/Data Frame/Seminar 3_R_Exercise_Code_1.r` | DataFrame exercise companion | 955 B | `7b809f454a11a690f99ab8890950cb8879e7b690bbc99d11d5e79e50b9f27988` | content not opened because exercise material is assessment-sensitive | OUT-OF-SCOPE for this content read |
| `Seminar 3_Data Structure/Functions/Seminar 3_R_Exercise_Questions_2.pdf` | functions exercise question deck/export | 134,765 B | `5d8c088ec0ff5d86dc8b40841d8ff2b120ecb066a732ce5aa9f6520519871fe4` | 4 pages, 4:3 | SECONDARY-REFERENCE; exercise content not opened |
| `Seminar 3_Data Structure/Functions/Seminar 3_R_Exercise_Questions_2_InClass.pptx` | instructor/in-class exercise variant | 242,758 B | `aad1e048e843f9ad9b6a7e5d4fce7aa042c25ea4eb223a0f88e8d5d6784c2aa2` | slide count not read | OUT-OF-SCOPE for this content read |
| `Seminar 3_Data Structure/Functions/Seminar 3_R_Exercise_Solutions_2.r` | solution companion | 1,090 B | `c8158a901ef047f0d662ffadfa6c5e4076e1d06792a1de00fd3bf23596321ba4` | content not opened | OUT-OF-SCOPE / assessment-sensitive |
| `Seminar 3_Data Structure/Data Frame/Seminar 3_R_Exercise_Solutions_1.r` | solution companion | 686 B | `911d28496e09f5b77483fc1eb29a0cf928cc3da8b247160c8d657b7b2c96cfc3` | content not opened | OUT-OF-SCOPE / assessment-sensitive |

The direct tutorial candidate was modified in the source tree on 2025-09-10; that filesystem date is recorded as provenance metadata, not as authority by itself.

## 4. Lineage map

The Fall 2025 candidate named `Seminar 3_R Tutorial_DataFrame.pdf` is byte-identical to `Old/Week 2/S3_Data Structure I/Seminar 3_R Tutorial.pdf`. The old Week 2 folder also contains the only directly matching editable DOCX found in scope. Therefore the PDF is a later/relocated distribution copy of the same tutorial lineage, not an independently authored 2025 text.

The two old `Seminar 3_R.pdf` files under `Old/S2_BA Intro` and `Old/S3_R Intro` are byte-identical to each other but have a different hash from the DataFrame tutorial. Per the supplied handoff they are the stale old N12 reference associated with a 2018 “Tutorial 3”; they are not the Fall 2025 DataFrame tutorial.

No distinct 2019 or 2020 Seminar 3/DataFrame variant was found in the scoped BUSS256 tree. The exercise question/deck and solution files are parallel exercise lineage, not the student tutorial itself.

## 5. Authority classification

- **PRIMARY-CANDIDATE:** `Seminar 3_Data Structure/Seminar 3_R Tutorial_DataFrame.pdf`.
- **EDITABLE-AUTHORITY:** `Old/Week 2/S3_Data Structure I/Seminar 3_R Tutorial.docx`, the only matching editable source found. Its extracted text reproduces the tutorial content and the same assignment-glyph defect; content equivalence is supported by the byte-identical PDF export and matching section/code text.
- **SECONDARY-REFERENCE:** the two byte-identical old `Seminar 3_R.pdf` files and the DataFrame/functions exercise question exports.
- **DUPLICATE/VARIANT:** the old Week 2 PDF and the paired old `Seminar 3_R.pdf` copies.
- **OUT-OF-SCOPE:** exercise solution/code files for content reading in this audit because they are assessment-sensitive.

## 6. Canonical Fall 2025 tutorial determination

The canonical Fall 2025 student tutorial is:

`/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 3_Data Structure/Seminar 3_R Tutorial_DataFrame.pdf`

Evidence: its path is the active Seminar 3/Data Structure location, it is a six-page student-facing tutorial, and its bytes exactly match the recovered Week 2 tutorial PDF. No newer or separate editable Fall 2025 tutorial was found.

## 7. Editable-source determination

Yes, a matching editable source exists:

`/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Old/Week 2/S3_Data Structure I/Seminar 3_R Tutorial.docx`

This DOCX is not in the active 2025 folder, but its extracted headings, examples, prose, and code correspond to the canonical PDF. It is the editable authority for a future governed build, subject to professor confirmation of whether the moved 2025 PDF should remain the primary distribution authority.

## 8. F-9 broken `<-` glyph audit

The canonical six-page PDF contains **11 code occurrences** of the broken assignment glyph, on pages 1, 2, 4, 5, and 6:

- Page 1: `a < ̶   seq(1,6)` — 1 occurrence.
- Page 2: `b < ̶   1:12`; `dim(b) < ̶ c(3, 4)`; `b[3,1] < ̶ 7` — 3 occurrences.
- Page 4: `id`, `name`, `item`, `qty`, and `sales` assignments — 5 occurrences.
- Page 5: `D < ̶ 1:10` — 1 occurrence.
- Page 6: `hello < ̶ function(x) ...` — 1 occurrence.

The rendered PDF visibly shows `<` followed by a combining strike/long-stroke mark, not a normal hyphen. PDF text extraction reports the sequence as `<` plus U+0336; it does not report ASCII `<-` for these code occurrences. The editable DOCX extraction shows the same sequence in the underlying text. This establishes that the defect is present in the source text/OOXML character sequence before PDF rendering. Evidence does **not** support a font-only substitution or PDF-only conversion cause. The correct diagnosis is an invalid source-character sequence (`<` + combining long stroke U+0336) propagated into the PDF.

The future 2027 build should construct or validate assignment operators as the two ASCII characters U+003C U+002D and should include both source-text and rendered-PDF checks. Do not repair this source in the audit tranche.

## 9. Other code/glyph risks

- Curly single quotes occur inside executable-looking code, including `c(‘C001’, ...)`, `sales[sales$ID == ‘C002’, ]`, and `hello(‘World’)`. These are not safe copy/paste R strings.
- Curly double quotes occur in executable-looking code, including `sales[, “Name”]` and `paste(“Hello”, x)`. These should be treated as syntax risks, not typographic decoration.
- `==`, `!=`, `<`, `>`, `$`, brackets, parentheses, commas, and colons appear structurally intact in the extracted text and rendered pages.
- No `->`, `<=`, `>=`, backslash, or replacement-character defect was found in the canonical tutorial.
- The prose says “logical operates” rather than “logical operators”; this is wording, not a code-glyph failure.
- No systematic corruption of non-assignment operators was evidenced. F-9 is isolated to the assignment examples, while smart quotes are a separate systematic copy/paste hazard.

## 10. Section-by-section content audit

| Pages / section | Topic and purpose | Concepts/code introduced | Exercise/application | Dependencies and risks | Provisional disposition |
|---|---|---|---|---|---|
| 1, Matrix introduction | Move from vectors to row/column storage; motivate matrix/data frame distinction | matrix, dimensions, `matrix(1, 2, 3)`, `seq()` and assignment | Creates a small matrix and prints output | Assumes vector familiarity; F-9; otherwise base R | KEEP-BUT-CLARIFY |
| 2–3, Matrix indexing | Reshape a vector and retrieve cells, rows, and columns | `1:12`, `dim()`, two-index brackets, omitted index, ranges | `b[2,4]`, `b[3,1]`, `b[3,]`, `b[,1]`, `b[,2:4]` | Requires prior vectors and indexing; outputs are illustrative | KEEP |
| 4, Data frame construction | Introduce mixed-type tabular storage | `c()`, `data.frame()`, named columns, row/column indexing | Builds inline `sales` data frame and selects `sales[2,3]`, ranges | No external data dependency; curly quote code; F-9 | KEEP-BUT-CLARIFY |
| 5, Data-frame column selection and filter | Show column names, `$`, and logical row filtering | `sales[, "Name"]`, `$`, `==`, `sales[sales$ID == ..., ]` | Retrieves Name and C002 row | Assumes logical conditions from earlier class; curly quotes; F-9 | KEEP-BUT-CLARIFY |
| 5–6, Functions | Close the console introduction with built-in and user-defined functions | `mean()`, `sum()`, `length()`, `trim`, `help()`, `example()`, `function()`, `paste()` | Computes means and declares/calls `hello()` | Function block follows data-frame material; smart quotes and F-9 make copy/paste unsafe | REVISE |

No import/export, packages, missing values, or external dataset workflow is taught in this tutorial. It is a compact base-R data-structure tutorial, not a data-import lesson.

## 11. M6-R2 alignment

- Assumes R/RStudio is already working: **yes**. It begins with a working console prompt and does not repeat installation instructions.
- Script-based workflow: **not explicit**. Examples are presented as console commands with `>` prompts.
- RStudio Project: **not taught**. The tutorial does not mention creating/opening a project.
- `setwd()`: **not present**.
- Manual working directory: **not present**.
- Old installation guidance: **not present** in the canonical tutorial.
- Setup duplication: **none**. M6-R2 owns installation/setup; this tutorial starts after that boundary.

The only alignment gap to flag for a later content tranche is workflow framing: a future 2027 tutorial may need a short instruction to open the M6-R2 project and place the examples in a script, but that is not a source repair performed here.

## 12. R learning progression

| Item | Status in this tutorial | Evidence |
|---|---|---|
| Vectors | REVIEWED / prerequisite | opening says the last class worked with vectors |
| Assignment | INTRODUCED/used | repeated assignment examples, currently malformed as `<` + U+0336 |
| `c()` | INTRODUCED/used | vector and data-frame column construction |
| Arithmetic | REVIEWED/used | `sum(D) / length(D)` |
| `mean()` | INTRODUCED | built-in function examples |
| Object inspection / printing | INTRODUCED/used | `print(b)`, `b`, `sales` |
| `data.frame` | INTRODUCED | page 4 |
| Columns / rows | INTRODUCED | matrix and data-frame two-dimensional structure |
| Indexing | INTRODUCED/reviewed | bracket indexing, omitted dimensions, ranges |
| `$` operator | INTRODUCED | `sales$Name`, `sales$ID` |
| Brackets | INTRODUCED/reviewed | matrix/data-frame extraction |
| Functions | INTRODUCED | built-in and user-defined function examples |
| Logical conditions | REVIEWED/prerequisite | prose says logical operators were learned earlier; `==` filter applies them |
| Missing values | NOT PRESENT | no `NA` or missing-value handling |
| Import/export | DEFERRED / NOT PRESENT | no `read.csv`, write operation, or file path |
| Packages | NOT PRESENT | no `library()` or package installation |

## 13. Code validity findings

Static audit only; no R installation or package installation was performed. No local execution was needed. Base-R constructs are conceptually valid when normalized, but the distributed code is not fully copy/paste-valid because:

1. 11 assignment examples contain `<` + U+0336 instead of ASCII `<-`.
2. Curly single/double quotes occur inside executable-looking R code.
3. The tutorial assumes objects are created in preceding examples; it is sequential, not self-contained per block.
4. `example(mean)` is valid base R but prints its own example transcript; the displayed output should not be treated as a guaranteed current console transcript without a version/locale check.
5. The prose typo “logical operates” and a few compressed explanations reduce beginner clarity.

No package-dependent code, undeclared external dataset, `setwd()`, smart-code punctuation outside the quoted strings, or obvious base-R function obsolescence was found.

## 14. Data-file dependencies

The canonical tutorial has **no external dataset/file dependency**. The customer table is written inline, and all objects (`a`, `b`, `id`, `name`, `item`, `qty`, `sales`, `D`, `hello`) are created in the tutorial itself. No relative path or working-directory assumption is present. The parallel exercise companions may have their own dependencies, but they were not opened because they are outside this audit's safe student-tutorial read scope.

## 15. Provisional 2027 dispositions

- Matrix motivation and matrix construction: **KEEP-BUT-CLARIFY** — retain the vector-to-two-dimensional bridge, but repair assignment glyphs and tighten the `matrix()` explanation.
- Matrix indexing/subsetting: **KEEP** — central prerequisite for data-frame row/column access.
- Data-frame construction: **KEEP-BUT-CLARIFY** — retain inline example; replace curly quotes and clarify column/row terminology.
- Column selection and logical filtering: **KEEP-BUT-CLARIFY** — retain `$`, bracket, and `==` contrast; make copy/paste-safe code explicit.
- Functions block: **REVISE** — preserve `mean()` and simple user-defined function progression, but separate built-in help from user-defined functions and repair smart quotes/assignment glyphs.
- Import/export, packages, missing values: **DEFER** — absent from this tutorial and should not be invented in this audit.

## 16. Unresolved questions

- Should the recovered Week 2 DOCX be formally confirmed by the professor as the editable authority for the 2025 PDF, or is the PDF itself the only release authority?
- Is the six-page PDF intentionally distributed as a student tutorial despite its console-prompt presentation, or should a 2027 script/project wrapper be added later under a separate approved tranche?
- Should the exercise question and solution files be governed as separate Seminar 3 artifacts? They were not read here because of assessment sensitivity.
- Should the existing `example(mean)` transcript be frozen as illustrative output or regenerated under the target 2027 R version? This is a future build decision.

## 17. Recommended next tranche

1. Professor confirms the PDF/DOCX authority relationship and whether the exercise materials may be read in a separately governed assessment-safe audit.
2. Create a content specification only after that authority decision.
3. Repair and validate ASCII operator/quote handling in a controlled editable build, with source XML checks and rendered-PDF checks for `<-`, quotes, and other operators.
4. Decide whether M6-R2 project/script framing should be a one-paragraph bridge or remain outside Seminar 3.
5. Run a bounded base-R static/runtime check only after the code text is normalized and the professor approves the repair tranche.

## 18. Integrity attestation

- source mutations = 0
- assessment reads = 0
- assessment mutations = 0
- M6-R1 touched = no
- M6-R2 touched = no
- KMB689 touched = no
- git staged = 0
- commit = 0
- push = 0
