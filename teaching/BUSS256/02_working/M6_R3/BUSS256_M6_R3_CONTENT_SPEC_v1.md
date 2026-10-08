# BUSS256 M6-R3 — Seminar 3 DataFrame / R Tutorial: Content Spec v1

## 1. Authority and scope

This is the 2027 content contract only. It authorizes neither a DOCX/PDF build nor a change to historical files.

- **Primary student-facing authority:** Fall 2025 `Seminar 3_R Tutorial_DataFrame.pdf`, six pages.
- **Editable authority:** `Old/Week 2/S3_Data Structure I/Seminar 3_R Tutorial.docx`.
- **Excluded lineage:** the stale `Seminar 3_R.pdf` lineage; it must not inform 2027 decisions.
- **Scope:** the core Seminar 3 tutorial: vectors review, matrix, data frame, data access, and a small functions introduction.
- **Out of scope:** separate exercise materials, installation, import/export, packages, missing values, assessment materials, and all new external examples/facts.
- **Dataset dependency:** none. Retained examples use inline toy objects only.

## 2. Canonical-source determination

The Fall 2025 PDF is primary because it is the active Seminar 3/Data Structure distribution candidate. It is byte-identical to the old Week 2 tutorial PDF. The old Week 2 DOCX is the matching editable authority: its extracted headings, prose, examples, and the same F-9 defect align with the canonical PDF.

The source authority and content audit is [BUSS256_M6_R3_SOURCE_CONTENT_AUDIT.md](../../../../docs/rounds/BUSS256_M6_R3_SOURCE_CONTENT_AUDIT.md). The content contract uses only that audit, the canonical PDF/DOCX lineage, and the already-governed M6-R1/M6-R2 progression.

## 3. M6-R2 handoff

M6-R2 owns installation and setup. M6-R3 assumes students can open RStudio, already have a BUSS256 RStudio Project, and can create/run an R script.

The first tutorial section contains only this workflow handoff:

1. Open your BUSS256 RStudio Project.
2. Create or open an R script for Seminar 3.
3. Type code in the script.
4. Run code and inspect results in the Console.

No installation instructions, software-version guidance, stale UI screenshots, or `setwd()` instruction may appear. The script—not a console-only workflow—is the default location for student code.

## 4. 2027 learning objectives

By the end of this tutorial, a beginner can:

1. Use a short R script to assign an object, run it, and inspect its result.
2. Explain why a matrix and a data frame are both row/column structures, while a data frame can contain different kinds of columns.
3. Create and inspect a small matrix and a small inline data frame.
4. Select a named data-frame column with `$` and access a value or subset with `[row, column]` notation.
5. Explain that a function takes input and returns a result, using `mean()` as the source-grounded example.
6. Distinguish the intended use of a vector, matrix, data frame, and function at the level taught here.

## 5. Pedagogical progression

The tutorial follows a low-burden, concept-first progression:

1. **Start / workflow handoff** — move from the governed setup into a Seminar 3 script.
2. **Quick vector review** — assignment, `c()`, a small arithmetic or `mean()` check; no installation recap.
3. **Why structure matters** — transition from one-dimensional values to organized row/column objects.
4. **Matrix** — creation, rows/columns, and accessible elements/subsets.
5. **Data frame** — the core emphasis: observations/rows, variables/columns, different information types.
6. **Accessing data** — teach `$` and `[row, column]` separately before combining them in a filter.
7. **Simple functions** — a function name, input, and result, centred on `mean()`.
8. **Close / check** — contrast vector, matrix, data frame, and function.

Each move must be supported by a short runnable example and an explicit link between code, object structure, and output. Do not introduce advanced matrix algebra, lexical scoping, environments, anonymous functions, apply-family functions, packages, or data import.

## 6. Section-by-section source mapping

The mapping covers the complete canonical six-page tutorial inventory in eight units.

| Source page(s) / unit | Topic / teaching purpose | Source example | 2027 disposition | Exact reason | 2027 destination |
|---|---|---|---|---|---|
| 1 — matrix motivation and creation | Move from vectors to rows/columns | `matrix(1, 2, 3)`; `a < ̶ seq(1,6)` | KEEP-BUT-CLARIFY | The concept is needed, but assignment must be ASCII and the creation/output explanation must be clearer | C. Why structure matters; D. Matrix |
| 2 — reshape and cell access | Show matrix dimensions and two-index extraction | `b < ̶ 1:12`; `dim(b) < ̶ c(3,4)`; `b[2,4]` | KEEP | Core source-supported matrix progression; normalize code characters | D. Matrix |
| 3 — row/column and range access | Show omitted index and range subsetting | `b[3,]`; `b[,1]`; `b[,2:4]` | KEEP | Directly supports later row/column thinking | D. Matrix |
| 4 — data-frame construction | Introduce mixed-type tabular storage | `id`, `name`, `item`, `qty`; `sales < ̶ data.frame(...)`; `sales[2,3]` | KEEP-BUT-CLARIFY | Data frame is the seminar core; source code needs ASCII operators/quotes and explicit row/column language | E. Data frame |
| 5 — named-column access and filter | Contrast named columns and row/column subset | `sales[, “Name”]`; `sales$Name`; `sales[sales$ID == ‘C002’, ]` | KEEP-BUT-CLARIFY | `$`, brackets, and `==` should be separated and made copy/paste safe | F. Accessing data |
| 5 — functions concept / mean | Establish that a function performs an operation with input | `D < ̶ 1:10`; `mean(D)` | REVISE | Preserve the function objective but use one simple base-R example and explain name, input, result | G. Simple functions |
| 6 — composition, arguments, help/example | Extend function examples | `sum(D) / length(D)`; `mean(D, trim = 0.1)`; `help(mean)`; `example(mean)` | MERGE | Retain only the source-grounded explanation needed to support `mean()`; do not display version-dependent `example(mean)` transcript or unexplained `trim` argument | G. Simple functions |
| 6 — user-defined `hello()` | Demonstrate declaring/calling a custom function | `hello < ̶ function(x) ...`; `hello(‘World’)` | DEFER | It adds definition syntax, braces, `paste()`, and quote hazards beyond the beginner objective; the functions section remains through `mean()` rather than being silently deleted | G. Simple functions (explicitly excluded example) |

**Mapping totals:** KEEP = 2; KEEP-BUT-CLARIFY = 3; REVISE = 1; MERGE = 1; DEFER = 1; DELETE = 0. Total = 8 source units, reconciling to pages 1–6.

## 7. Exact content contract by 2027 section

### A. Start / workflow handoff

Use the four M6-R2 handoff steps exactly in substance. Explain that script code is run into the Console, and that output is not typed as code.

### B. Quick vector review

Keep this brief. Use only source-supported foundational constructs: assignment, `c()`, simple values, and `mean()`. The purpose is to activate necessary prior exposure before row/column structures—not to reteach R installation or build a general programming lesson.

### C. Data structures: why structure matters

Use the source-supported distinction: vectors organize values in one dimension; matrices and data frames organize values in rows and columns. Do not introduce unsupported taxonomy or external examples.

### D. Matrix

Retain source-supported creation, dimensions, and indexing. Explain what rows and columns mean in the printed result, and teach one cell selection before row/column/range selection. Use `matrix()`, `seq()`, `dim()`, and bracket notation only as the source supports.

### E. Data frame

This is the tutorial's core. Define rows as observations/cases and columns as variables. Explain that columns can represent different kinds of information. Retain the inline customer `sales` construction and printed result; do not introduce imported data or a package.

### F. Accessing data

Teach these separately:

- `$` selects a named column, e.g. `sales$Name`.
- `[row, column]` accesses one value or a subset, e.g. `sales[2, 3]`.

Only after each form is clear may the source-supported logical filter be shown: `sales[sales$ID == "C002", ]`. Explain `==` as comparison, not assignment.

### G. Simple functions

Keep the conceptual objective: a function name uses an input and returns a result. Use `D <- 1:10` and `mean(D)` as the single central, source-grounded example. `sum(D) / length(D)` may appear only as a brief comparison if it is explained as equivalent arithmetic; `trim`, `example(mean)` output, `help(mean)`, and the `hello()` declaration/call are not required in the student core. Do not introduce user-defined-function syntax in this seminar.

### H. Close / check

End with a short conceptual check: what a vector, matrix, data frame, and function are used for. The check is conceptual and uses no new data, package, or import task.

## 8. Code examples retained/revised

Only the following source-grounded examples are authorized as the core example set; an eventual build may use a subset where repetition is not pedagogically useful.

```r
x <- c(1, 2, 3)
mean(x)

a <- seq(1, 6)
matrix(a, 2, 3)

b <- 1:12
dim(b) <- c(3, 4)
b[2, 4]
b[3, ]
b[, 1]
b[, 2:4]

id <- c("C001", "C002", "C003")
name <- c("Gun", "Tom", "Bob")
item <- c("Pencil", "Paper", "Eraser")
qty <- c(3, 6, 2)
sales <- data.frame(ID = id, Name = name, Item = item, Quantity = qty)
sales[2, 3]
sales$Name
sales[sales$ID == "C002", ]

D <- 1:10
mean(D)
```

All code in this section is a contract for future build validation, not an authorization to build now. Expected output must be written separately from code and labelled **Expected output**. Console prompts such as `>` and console result markers such as `[1]` must never be mixed into an executable code block.

## 9. Matrix contract

- Retain: matrix motivation, `matrix()` construction, vector-driven construction, `dim()`, individual cell access, row/column selection, and simple ranges.
- Clarify: the relation between a vector and a matrix; what a row and a column are. All values in a matrix have the same data type.
- Do not add: matrix algebra, transposition, multiplication, or advanced coercion.
- Use at least one Predict–Run–Compare moment for a cell or subsetting example.

## 10. Data-frame contract

- Retain the inline customer transaction object and the `data.frame()` construction objective.
- Define rows as observations/cases and columns as variables.
- State that data-frame columns can contain different kinds of information.
- Make visible that the printed `sales` object has three observations and four variables.
- Do not add imported datasets, files, packages, or external facts.
- Use Predict–Run–Compare for at least one data-frame selection.

## 11. Indexing/access contract

- Teach `[row, column]` before multi-row/multi-column ranges.
- Teach `$` as a named-column selector in a separate step.
- Preserve the source-supported `==` filter only after `==` has been identified as comparison.
- Retain `[ ]`, `$`, `==`, commas, and parentheses as ordinary ASCII code characters.
- Do not introduce `[` syntax as an unexplained compound expression or conflate it with `$`.

## 12. Functions contract

**Resolved disposition: REVISE; `DECISION-FUNC-01` is not raised.**

Functions remain because the source tutorial uses them to bridge from object structures to later analytics work, and `mean()` is a minimal base-R example students will encounter again. The retained objective is: a function has a name, receives an input, and returns a result.

- Retain: `mean(D)` as the central example, with `D <- 1:10` as the input object.
- Optionally compare: `sum(D) / length(D)` only after the arithmetic is explained.
- Remove from student core: user-defined `hello()`, `function(...)` syntax, `paste()`, `trim`, and the rendered `example(mean)` transcript.
- Do not teach scope, environments, anonymous functions, or advanced arguments.

## 13. Predict–Run–Compare integration

Operationalize the course habit selectively, not mechanically:

1. **Predict:** What do you expect R to return?
2. **Run:** Execute the line(s).
3. **Compare:** Was the result what you expected? If not, inspect the object/code.

Use the sequence for at least: one matrix element/subset, one data-frame selection, and `mean(D)`. Each use must be attached to a particular object/result rather than repeated beside every code block.

## 14. F-9 normalization rule

Every assignment operator in executable R code must be the literal two-character ASCII sequence `<-` (U+003C then U+002D).

U+0336 COMBINING LONG STROKE OVERLAY is prohibited. The historical `<` + U+0336 sequence is an identified source-text/OOXML defect, not a permissible display variant. No typographic dash, Unicode lookalike, non-breaking space, or decorative space may replace the ASCII punctuation required by executable code.

## 15. Code/output separation rule

The eventual tutorial must visually and semantically separate:

- **Code:** text students may type/run in their script.
- **Expected output:** labelled result text students inspect in the Console.

Console prompt `>` and result markers such as `[1]` belong only to output illustrations, never inside executable code. Code blocks must use ordinary ASCII punctuation whenever possible.

## 16. Build-time Unicode/code QA

Before final release, every executable code block must pass all of the following:

1. Raw-text extraction from the editable source and final DOCX/PDF.
2. Unicode character scan.
3. Static syntax check.
4. Copy/paste check from the final PDF.
5. Local base-R execution where possible, without package installation or network access.

Priority character checks: `<-`, `'`, `"`, `$`, `[`, `]`, `(`, `)`, `==`, `!=`, `<=`, and `>=`. The scan must fail code containing U+0336, curly single/double quotes, typographic dash operators, or inappropriate non-breaking/decorative spaces.

## 17. Deferred topics

- Installation and version guidance: owned by M6-R2.
- `setwd()` and manual working-directory teaching: not taught.
- Import/export: deferred.
- Packages: deferred.
- Missing values: deferred; no retained source example requires them.
- Exercise materials and solutions: separate future governed tranche only.
- User-defined-function syntax: deferred from M6-R3 core.

## 18. Open decisions, if any

No build-blocking content decision remains for the core tutorial.

For a later tranche, the project lead may decide whether a short project/script reminder needs a visual RStudio illustration. It is not required for this content contract and must not add version-specific UI claims. Exercise-material governance remains separate and unresolved.

## 19. Build handoffs

An approved build tranche must:

1. Build only from this content contract and the identified primary/editable authorities.
2. Keep the tutorial student-facing, script-first, base-R, and low burden.
3. Include the M6-R2 workflow handoff without duplicating setup.
4. Treat data frames as core emphasis and functions as the constrained `mean()` introduction above.
5. Implement every code/output and Unicode QA rule in §§14–16.
6. Render and inspect every final page before seeking approval.
7. Remain outside `03_final` until independently reviewed and formally accepted.

## 20. Integrity/no-guessing attestation

- Fall 2025 PDF is primary authority; matching DOCX is editable authority.
- Stale `Seminar 3_R.pdf` lineage is excluded.
- External dataset dependency is none.
- Matrix is retained; data frame is the core emphasis; functions are explicitly revised.
- Import/export and packages are deferred.
- No fixed R/RStudio version is specified.
- Predict–Run–Compare is included.
- Source mapping totals reconcile to the full canonical six-page inventory.
- source mutations = 0
- assessment reads = 0
- assessment mutations = 0
- M6-R1 touched = no
- M6-R2 touched = no
- KMB689 touched = no
- git staged = 0
- commit = 0
- push = 0
