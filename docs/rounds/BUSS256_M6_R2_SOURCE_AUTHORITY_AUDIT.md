# BUSS256 M6-R2 — R / RStudio Installation & Setup: Source Authority Audit

Read-only source-recovery pass (F-20 prerequisite bundle). No source was modified, copied or modernized; nothing outside this report was written to the worktree. Text extraction used scratch copies of extracted text only (session scratchpad, outside the repo). No web knowledge was used to correct any instruction.

## 1. Precheck

| Item | Value |
|---|---|
| Worktree | `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree` |
| Branch | `buss256/2027-refresh` |
| HEAD | `d34c45a6575d630deeab7ccf10bede0c66d2e4d4` — "course(BUSS256): close M6-R1 classroom-ready deck" |
| `git status --short` | only the five untracked `work/` dirs (m6_r1_build_v1, m6_r1_build_v1_1, m6_r1_extract, m6_r1_visual_audit, m6_r1_visual_audit_rerun) |
| Staged | 0 |
| M6-R1 | closed, untouched (current content authority `…/M6_R1/BUSS256_M6_R1_CONTENT_SPEC_v2_2.md`) |

## 2. Search scope

- **Tree:** `/Volumes/Mixyou/Teaching_2025/` (professor-confirmed tree; present, mounted). Filename search across all of it for `install*`, `setup*`, `rstudio*`/`r studio*`, `R_Tutorial*`/`R Tutorial*`, `*Guideline*`; then full content/metadata inspection of every BUSS256 candidate (`Fall/BUSS256_BigData/`).
- **Other courses in the same tree** (BUSS215_MIS, BUS900, BUS929_MSBA, KBM_689_Big_Data): used only for **lineage by SHA-256/size/date** (hash only; contents not read, except one BUSS215 Spring copy of the install PDF/DOCX used to diff the version sentence). The KMB689 repository worktree was not touched.
- **Repository:** `git ls-files`/`find` for install/setup/RStudio names → only `teaching/BUSS256/02_working/M-1_ollama_setup_guide.md` (Ollama; OUT-OF-SCOPE). Governed context read: `01_audit_report.md` (Seminar 2/3 sections, F-9, F-20), `03_modernization_roadmap.md` (M-6 row), `CURRENCY_LOG.md` (RStudio→Posit row), M6-R1 HANDOFF-S3-01/02/03.
- **Not opened (assessment-sensitive or out of scope):** A1/A2 folders, midterm/final exams, solutions, scores, group files, review sessions, `0_Course Syllabus/` (contains assessment policy; see §8). No assessment file was read or modified.
- **Not available/not searched:** `/Users/gunwoonglee/Dropbox/3_Teaching/2025/Fall/BUSS256_BigData` (the older "source of record" path in COURSE_PROFILE); the Mixyou tree is the current professor-confirmed location per prior instruction.

## 3. Candidate inventory

Paths are relative to `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/` unless stated. "Created/modified" prefers embedded metadata (PDF creation date / DOCX core.xml); filesystem dates (Sep 10 2025) are copy dates and are **not** treated as provenance. SHA-256 full where it matters.

### 3.1 Seminar 2 `R_Install/` (Fall 2025 distributed-set folder)

| # | File | Type / size | Embedded date | SHA-256 | Notes |
|---|---|---|---|---|---|
| C1 | `Seminar 2_Data Science/R_Install/Seminar_1_R_Installation.docx` | DOCX 188,719 B | created 2024-03-01, **modified 2025-08-29 05:28 UTC**; author 이건웅 | `2cf9e21228588644352ad6eea8d52af6f7296f73692e4162e11a294b84d09c13` | Editable source of the install tutorial; 1 embedded figure (RStudio panes). Student-facing text. |
| C2 | `…/R_Install/R_Tutorial_1_Installation.pdf` | PDF 3 pp, 279,489 B | created **2025-08-29 05:29:48 UTC** (Word LTSC) | `5f516d820b6420ba6245a863541887294fc4f635ac3337f2b533af7fd5ef56da` | Student-facing PDF of C1; title page text "Tutorial 1 – Installing R and R Studio". |
| C3 | `…/R_Install/R_Installation_Guideline.pdf` | PDF 3 pp, 279,503 B | created 2025-08-29 05:28:54 UTC (Word LTSC) | `f8865a0c0a553fccb7bb6a2a6100f85e5f68525b301e1ad7ea795255f7aaeded` | **Text identical to C2** (diff clean); exported ~1 min before C2, same minute as C1's last save. |
| C4 | `…/R_Install/R Studio_Setup.pdf` | PDF 3 pp, 311,977 B | created 2020-09-08 (PowerPoint 365) | `619c9fb6371d2afebef493376d448d45b791aabe484dd23fcebd89d021101ea8` | Student-facing 3-slide "R Studio Setup" (working directory, project, R script). Header: "Prof. Lee, Gunwoong / Korea University Business School". |

### 3.2 Older BUSS256 variants (`Old/`)

| # | File | Type / size | Embedded date | SHA-256 | Notes |
|---|---|---|---|---|---|
| C5 | `Old/Week 2/S3_Data Structure I/R Studio Setup.pdf` | PDF 3 pp, 373,159 B | created 2020-03-19 (PowerPoint 2016) | `c8a92225d633d4002e76b73bdd09960b1babc97b0a36a78607c353472a392546` | Same three steps as C4; text differs only in bullet glyphs (no "✓"). Older render. |
| C6 | `Old/Week 2/S3_Data Structure I/R Studio Setup.pptx` | PPTX 356,034 B | — | `f62359885f3d1a1fb6ae2a1270e18135672a47656470521c28ea74bdddaffece` | Editable source (apparently of C5); content not opened beyond metadata. |
| C7 | `Old/S3_R Intro/Excercise/Seminar 1_R.pdf` | PDF 3 pp, 460,711 B | created 2019-08-27 (Word 2013) | `d666345d17c97d5fbbb8d2fe60a132db1e6f5b282b709102a78ad2c2791ca413` | Earlier "Tutorial 1 – Installing R": **R 3.6.1 ("Action of the Toes", Sept 2019)**, older RStudio URLs. Predecessor of C1/C2. |

### 3.3 Instructor-facing Seminar 2 script material (prerequisite evidence)

| # | File | Size | SHA-256 | Notes |
|---|---|---|---|---|
| C8 | `Seminar 2_Data Science/Script/Seminar 2_Script_25F_2.docx` | 30,753 B | `64e3147c5cb9b4ec35e71779c3df3b9f6e9f1c0f11edde8093fcb5535b66a769` | Lecturer script, dated "Seminar 2: 2025/09/03". Contains the in-class install prompt (§9). |
| C9 | `…/Script/R 실습순서_New.docx` | 16,466 B | `bc8acf4379a37abcee887a1f19de2a0a041083c63d9682d938e05aa6c74aa63f` | Outline (English text, Korean filename) for the first R session: About R → R Running (3 panes) → R Studio Setup (working dir, R script, `getwd()`, run/ctrl+enter). Asks "have you read the R tutorial?" |
| C10 | `…/Script/R 실습 순서.docx` | 17,651 B | `86462906df748db02d80052013ebacac69bdcb061ba80e9c21f2ce09e5b41ed1` | Older (2023/09/12) version of C9. |
| (C8b) | `…/Script/Seminar 2_Script_25F.docx` | — | — | Earlier variant of C8 (1 install mention); not diffed in detail. |

### 3.4 Seminar 2 / Seminar 3 R materials (handoff evidence; not install guides)

| File | Size | Embedded date | SHA-256 | Notes |
|---|---|---|---|---|
| `Seminar 2_Data Science/Excercise/Seminar 2_R_Exercise_Questions_Updated.pdf` | 289,242 B | — | `7dfebf56e191e7fac1c67bd3c1be9ddb48293a561bdbd77356380d22900dfaf6` | R Exercise Tasks I (values, scalar/vector/table, `=` vs `==`, `rm(list=ls())`). Several variants (.pptx/_InClass) exist in the folder. |
| `…/Excercise/Seminar 2_R_Exercise_Code.r` | 3,360 B | — | `456ea3c7637de5e5267e6b10c59602f98cfb31808df1ccabb05742924a081e71` | Values, `class()`, coercion, arithmetic, vectors. |
| `Seminar 3_Data Structure/Seminar 3_R Tutorial_DataFrame.pdf` | 6 pp, 350,992 B | created 2020-03-19 (Word 2016) | `02cee869a85eb5333fbca38f94fbe4b44f0b2071a65d501449d5f1989774d325` | Title "Seminar 3 – Matrix and Data Frame". Text-identical to `Old/Week 2/S3_Data Structure I/Seminar 3_R Tutorial.pdf` (same hash). |
| `Old/S3_R Intro/Excercise/Seminar 3_R.pdf` | 6 pp, 355,069 B | created 2018-09-12 (Word 2013) | `c9fe4bba416b4307801009c2f4a5230be1500a3a11fcc6f227789fe4f4cd469f` | "Tutorial 3 – Matrix, Data Frame, and Functions" (2018 predecessor; near-identical body text). **Filename matches the "Seminar 3_R.pdf" cited in N12 #52.** |
| `Seminar 3_Data Structure/Data Frame/…`, `…/Functions/…`, `Seminar 2_Data Science/Excercise/S3/…` | various | Sep 2025 copy dates | — | Seminar 3 exercise question decks/code/solutions (inventoried only). |

### 3.5 Cross-course copies (hash/size/date only)

| Cluster | SHA-256 prefix | Copies in tree (courses) | Embedded date / version evidence |
|---|---|---|---|
| Install PDF, R **4.3.3** | `55e58983c36e9e1a` | BUSS215 Spring, BUS929, BUS900, KBM_689 (×2) | Word 365, created 2024-03-01; diff vs C2 = **one line only** ("4.3.3" vs "4.5.1") |
| Install DOCX, Spring version | `51f9249c7d7dfff1` | BUSS215 Spring, BUS929, BUS900 | core.xml created = modified 2024-03-01 |
| Install DOCX, Fall 2025 version | `2cf9e21228588644` (= C1) | BUSS256 R_Install; BUSS215 Fall (×2, incl. "…- 복사본") | modified 2025-08-29 |
| R Studio Setup PDF (= C4) | `619c9fb6371d2afe` | BUSS256 R_Install; BUSS215 Spring/Fall(×2); BUS900 | 2020-09-08 |
| R Studio Setup PDF (= C5) | `c8a92225d633d400` | BUSS256 Old/Week 2; BUS929; KBM_689 (×2) | 2020-03-19 |

## 4. Variant / lineage relationships

- **Install-tutorial lineage (BUSS256 text):** C7 (Aug 2019, R 3.6.1) → Spring-2024 Word version (created 2024-03-01, R 4.3.3, PDF `55e58983…`, DOCX `51f9249c…`) → **Fall 2025 version: C1 DOCX modified 2025-08-29 05:28 (R 4.5.1) → C3 PDF exported 05:28:54 → C2 PDF exported 05:29:48.** C2 and C3 are text-identical; the 2025 DOCX differs from the 2024 DOCX only by the version sentence (diff confirmed on the extracted text of the PDFs).
- **R Studio Setup lineage:** C5/C6 (Mar 2020, PowerPoint 2016) → C4 (Sep 2020, PowerPoint 365; bullet glyph "✓"); text-equivalent. C4 is the copy placed in the Fall 2025 `R_Install/` folder (and used by other courses).
- **Seminar 3 tutorial lineage:** `Seminar 3_R.pdf` (2018, "Tutorial 3", includes Functions) → `Seminar 3_R Tutorial_DataFrame.pdf` / `Seminar 3_R Tutorial.pdf` (2020, retitled "Seminar 3 – Matrix and Data Frame", same hash).
- The same install files are reused across five courses; no divergent BUSS256-specific install guide exists.

## 5. Content comparison

| Question | C1/C2/C3 (Fall 2025 install) | C4/C5 (R Studio Setup) | C7 (2019) |
|---|---|---|---|
| **R covered** | Yes: what R is; install from CRAN; "latest version"; states R 4.5.1 "at the time of the writing" | — | Yes (R 3.6.1) |
| **RStudio covered** | Yes: RStudio Desktop (Free) described and install links; pane tour (Areas A/B/C + script pane) | Yes: project/working-directory setup, new R script | Yes (older URLs) |
| **Windows** | Link only: `cran.r-project.org/bin/windows/base/`; RStudio "Windows 11/10/8" | No OS detail | Link only |
| **macOS** | Link only: `cran.r-project.org/bin/macosx/`; RStudio "MacOS 10.12+" | No OS detail | Link only |
| **Step-by-step by OS** | No: "double-click the downloaded file… accept default settings" | — | same |
| **Package installation** | **No** (first package installs appear later in seminar code: Seminar 7 `install.packages('arules')`, Seminar 12 `NLP`/`tm`/`SnowballC`/`wordcloud`) | No | No |
| **First-run verification** | Yes: open RStudio; `2+2` → `[1] 4`; `print("Hello !")`; `help(print)` | Working directory path check ("See if the path is correct"); `getwd()` appears in C9 | Yes |
| **Dated / version-specific** | R 4.5.1 statement; `rstudio.com` URLs (`rstudio.com/products/rstudio/download/`); "Windows 11/10/8 / MacOS 10.12+" | Desktop-folder wording "(바탕화면)" (Korean UI term) | R 3.6.1, 2019 |
| **Audience** | Student-facing | Student-facing | Student-facing |
| **Completeness** | Complete 3-page document; embedded screenshot in DOCX; no explicit troubleshooting | Complete 3 slides | Complete, older |

- **A. Software the sources instruct:** R (from CRAN) + RStudio Desktop (free). Nothing else.
- **B. Still logically usable for 2027?** The structure (R → RStudio → open → console test → working directory/project → script) is logically reusable; the version sentence, URLs and OS-version statements are dated (see §6/§8). Governed audit **F-20** already records "current on version (R 4.5.1) but stale on branding (rstudio.com → Posit)". No web check was done here.
- **C. Conflicts between variants:** none between C1/C2/C3 (text-identical). Differences exist only against older lineages (R version sentence; bullet glyphs).
- **D. Historical distributed/canonical version:** Fall 2025 `R_Install/` set is the clear current lineage (see §6). Which of C2/C3 was actually posted to students is **not provable** from the tree.
- **E. Seminar 3 prerequisite:** see §9.

## 6. Authority classification

| Candidate | Class | Reason |
|---|---|---|
| C1 `Seminar_1_R_Installation.docx` (Fall 2025) | **PRIMARY-CANDIDATE** | Editable source of the install tutorial; latest save 2025-08-29, directly before Fall 2025; textual content of both current PDFs. |
| C2 `R_Tutorial_1_Installation.pdf` (Fall 2025) | **PRIMARY-CANDIDATE** | Latest export (05:29:48) of C1 and carries the name lineage ("R_Tutorial_1_Installation") used in earlier cohorts; student-facing form. |
| C4 `R Studio_Setup.pdf` (R_Install) | **PRIMARY-CANDIDATE** | The setup-after-install companion in the Fall 2025 `R_Install/` folder; carries the working-directory/project/script steps the Seminar 2 script follows (C9). Source PPTX for this exact PDF not found (see §8). |
| C3 `R_Installation_Guideline.pdf` | DUPLICATE/VARIANT | Text-identical to C2; byte-different export one minute earlier. |
| C5 `Old/Week 2/…/R Studio Setup.pdf` | DUPLICATE/VARIANT | Text-equivalent older render (Mar 2020) of C4. |
| C6 `Old/Week 2/…/R Studio Setup.pptx` | SECONDARY-REFERENCE | Editable source for C5; only available PPTX for the setup slides. |
| C7 `Old/S3_R Intro/Excercise/Seminar 1_R.pdf` | SECONDARY-REFERENCE | Historical (2019, R 3.6.1) predecessor; useful as lineage only. |
| C8 `Seminar 2_Script_25F_2.docx` | SECONDARY-REFERENCE | Instructor-facing evidence of when/how install is expected. |
| C9 `R 실습순서_New.docx` | SECONDARY-REFERENCE | Instructor-facing outline of the first R session (setup flow). |
| C10 `R 실습 순서.docx` (2023) and C8b | DUPLICATE/VARIANT | Older versions of C9/C8. |
| Spring-2024/25 install DOCX/PDF (R 4.3.3), other courses' copies | DUPLICATE/VARIANT | Same lineage, older version sentence; reused in BUSS215/BUS929/BUS900/KBM_689. |
| `M-1_ollama_setup_guide.md` (repo) | OUT-OF-SCOPE | Ollama setup, not R/RStudio. |
| Seminar 2/3 exercise and tutorial files (§3.4) | SECONDARY-REFERENCE (for M6-R3 handoff) | Not install material; evidence of what Seminar 3 assumes. |
| Which of C2/C3 was distributed; whether the 2020 PPTX behind C4 exists in the tree | **AMBIGUOUS** | See §8. |

## 7. Recommended M6-R2 baseline

Evidence is sufficient to recommend a **baseline set**, not a single file:

1. **C1** (`Seminar_1_R_Installation.docx`, Fall 2025) as the editable text baseline for "Install R and RStudio + first-run test".
2. **C4** (`R Studio_Setup.pdf`, with C6/C5 as editable-source references) as the baseline for "working directory / project / R script".
3. C2 (= C3 text) as the student-facing-form reference; C7 and the Spring 4.3.3 copies as lineage only.

Package installation is **not** covered by any install guide (first appears in later seminar code); M6-R2 scope for it is a design question, not a recovery fact.

## 8. Unresolved questions

1. **Which PDF was distributed** (C2 vs C3)? Text is identical; only distribution records (LMS/posting) could settle it. Impact is low.
2. **Source PPTX for C4** (PowerPoint 365, Sept 2020) is not in the BUSS256 tree; the only PPTX found (C6) matches the older C5 render. Needed: the professor's confirmation of where the editable C4 lives, or acceptance of C6 as the editing base.
3. **When students are expected to install:** the Fall 2025 script says to install **in class at Seminar 2** (and asks whether students "read the R tutorial"); the DOCX/PDF are named "Seminar 1/Tutorial 1". Not checked: `0_Course Syllabus/` and the Seminar 1 deck/script (the syllabus holds assessment policy and was not opened; the Seminar 1 script has no install mention). Needed: a read-only check of pre-class instructions, or the professor's statement.
4. **Currency of the version/URL statements** (R 4.5.1, `rstudio.com` links, OS-version statements) cannot be judged here (no web). Governed audit F-20 flags the rebrand risk; verification is a later pass with project-lead-supplied evidence.
5. **Windows vs macOS:** no OS-specific walkthroughs or screenshots exist beyond the pane-tour figure; whether 2027 needs them is a design decision for M6-R2.
6. **Other-course copies** (BUSS215/BUS900/BUS929/KBM_689) were hashed only; their relation to BUSS256 distribution was inferred from identical hashes, not from content reading.

## 9. M6-R3 handoff evidence (do not begin M6-R3)

- **Seminar 3 tutorial filename/version evidence:**
  - N12 #52 (per M6-R1 spec) says the assignment is to read **"Seminar 3_R.pdf"**. The only file with that name is the **2018** tutorial `Old/S3_R Intro/Excercise/Seminar 3_R.pdf` ("Tutorial 3 — Matrix, Data Frame, and Functions", SHA `c9fe4bba…`).
  - The Fall 2025 Seminar 3 folder instead holds **`Seminar 3_R Tutorial_DataFrame.pdf`** (SHA `02cee869…`, created 2020-03-19; "Seminar 3 – Matrix and Data Frame"; text-identical to `Seminar 3_R Tutorial.pdf` in `Old/Week 2/S3_Data Structure I/`).
  - So the N12 filename is a stale reference; HANDOFF-S3-02 (exact filename/version) should resolve to the 2025 DataFrame tutorial plus the `Data Frame/` and `Functions/` exercise tracks, subject to project-lead confirmation.
- **Seminar 3 prerequisite assumption:** the Seminar 3 tutorial contains **no install or setup text**. It opens "In the last class, we only worked with vectors…" and uses console commands directly (`matrix`, `data.frame`, `help(mean)`), assuming R/RStudio are installed and the console works, and that Seminar 2's R exercise (values, vectors) was done. Setup is **not embedded** in Seminar 3.
- **Where setup lives historically:** a separate `R_Install/` folder in Seminar 2; the Seminar 2 script says to install in class if not done and runs the first R session (C9). This is the prerequisite HANDOFF-S3-03 asks to confirm.
- **Known defect (governed F-9):** the Seminar 3 PDF's text layer renders `<-` as `< ̶` (e.g., `a < ̶ seq(1,6)`), confirmed again in this audit's text extraction.
- **R review material for former N12 #53:** #53 shows R code screenshots (values, variables, vectors, indexing, logical expressions, case-sensitivity, functions). The matching sources are the Seminar 2 R Exercise material (`Seminar 2_R_Exercise_Code.r`, `…Questions_Updated.pdf`, which cover values, classes, vectors) and the Seminar 3 `Functions` track (functions). No separate "R review" file exists. Mapping is by topic, not by a documented link.

## 10. Attestation

| Check | Result |
|---|---|
| Source mutations | 0 (all candidates opened read-only; no copies made into the repo) |
| Assessment reads | 0 (assessment-sensitive folders and the syllabus were not opened) |
| Assessment mutations | 0 |
| M6-R1 touched | No |
| KMB689 repository worktree touched | No (the KBM_689 course folder in the Teaching tree was hashed only; contents not read) |
| Web browsing | None; no web knowledge used to correct instructions |
| Staged / commit / push | 0 / 0 / 0 |
| Created in repo | this report only |
