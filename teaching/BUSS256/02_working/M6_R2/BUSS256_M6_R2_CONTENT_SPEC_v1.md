# BUSS256 M6-R2 — R / RStudio Setup Bundle: Content Spec v1

*Content contract only. No DOCX/PDF has been built; no historical source was modified. This file defines what the 2027 student-facing setup guide must say and must not say. Wording in quotation marks under §6 is the contract text (the build pass may only adjust line breaks and formatting). Current-source facts in §4 were supplied by the project lead and are **not** student-facing.*

---

## 1. Authority and scope

| Item | Value |
|---|---|
| Worktree / branch | `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree` · `buss256/2027-refresh` |
| HEAD at authoring | `d34c45a6575d630deeab7ccf10bede0c66d2e4d4` (M6-R1 closed; not reopened) |
| Source audit | `docs/rounds/BUSS256_M6_R2_SOURCE_AUTHORITY_AUDIT.md` |
| Module | M6-R2 — R / RStudio installation and setup prerequisite bundle (governed finding F-20) |
| Purpose | A short, beginner-friendly guide that gets every student to a working R + RStudio environment **before Seminar 3**. |
| Out of scope | Building the DOCX/PDF; modifying historical sources; Seminar 3 content (M6-R3); package installation; programming instruction. |

## 2. Baseline source set (closed — 3 sources)

| Role | Source (under `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 2_Data Science/R_Install/`) |
|---|---|
| **Primary editable content authority** | `Seminar_1_R_Installation.docx` (SHA-256 `2cf9e21228588644352ad6eea8d52af6f7296f73692e4162e11a294b84d09c13`) |
| **Historical student-facing render** | `R_Tutorial_1_Installation.pdf` (SHA-256 `5f516d820b6420ba6245a863541887294fc4f635ac3337f2b533af7fd5ef56da`) |
| **Supplemental RStudio setup authority** | `R Studio_Setup.pdf` (SHA-256 `619c9fb6371d2afebef493376d448d45b791aabe484dd23fcebd89d021101ea8`) |

Closed matters: the two text-identical installation PDFs (`R_Tutorial_1_Installation.pdf`, `R_Installation_Guideline.pdf`) need no further distribution-history investigation; the missing editable PPTX behind the setup PDF is **non-blocking**. No further source search is authorized unless an exact factual gap prevents specification. The baseline sources supply the *structure* (R → RStudio → first run → working-directory/script setup); their version and URL statements are **not** carried (see §3).

## 3. 2027 policy decisions (closed)

| ID | Decision |
|---|---|
| A. Timing | Students complete R/RStudio installation **before Seminar 3**. M6-R2 is the prerequisite/setup bundle for Seminar 3; Seminar 3 is **not** the primary installation session. The first R session includes a **brief verification/fallback check** for students with setup problems. |
| B. Version policy | **No R or RStudio version number is hard-coded in the student-facing core instructions.** Use "Install the current stable version of R." and "Install the current stable version of RStudio Desktop." Statements such as "R 4.5.1 at the time of writing" are removed. The course may keep an internal verification date separately (§4, §11). |
| C. Download authorities | Official provider destinations only, conceptually: **R: The R Project / CRAN. RStudio: Posit / RStudio Desktop.** No obsolete `rstudio.com` branding, no stale version-specific download URLs, no invented mirror-specific links. |
| D. Order | 1 Install R → 2 Install RStudio Desktop → 3 Open RStudio → 4 Verify R runs → 5 Create/open an RStudio Project → 6 Create an R script → 7 Run a simple command successfully. The guide states that **RStudio is the IDE and R is the underlying language/runtime.** |
| E. OS coverage | Windows and macOS, in concise text instructions. No screenshot-heavy walkthrough; no brittle UI screenshots unless absolutely necessary. |
| F. Packages | **No package installation in M6-R2** (no `install.packages()`). Packages are introduced later, when the course first needs them. |
| G. First-run verification | Ends with a base-R-only setup check (§8). A setup check, not a programming lesson. |
| H. Project/script habit | RStudio Project + R script workflow, from the start. `setwd()` is **not** taught as the default setup habit. |
| I. Troubleshooting | Short and bounded (§9); not a technical-support manual. |

## 4. Current-source verification record (supplied evidence — not browsed)

*Supplied by the project lead, who independently checked official current sources on **2026-10-07**. This pass did no web browsing and did not re-verify it. This record is internal; **none of these specifics appear in the student guide.***

| Tag | Record (as supplied) |
|---|---|
| **CURRENT-SOURCE CHECK DATE** | **2026-10-07** |
| E-R-CURRENT | R 4.6.1 was the current stable release on 2026-10-07. R 4.6.2 was scheduled for release on 2026-10-29. Therefore fixed version numbers are intentionally omitted from the Spring 2027 student guide. |
| E-RSTUDIO-CURRENT | RStudio Desktop 2026.09.0 was the current stable documented version. |
| E-PLATFORM-CURRENT | Official current platform guidance included Windows 11 and macOS 14 (Sonoma) or newer. Legacy statements ("Windows 11/10/8", "macOS 10.12+") must **not** be carried into the 2027 guide. Because platform requirements can change before Spring 2027, the guide points students to the current official download page instead of freezing OS-version claims. |

## 5. Student-facing guide structure

A short setup guide (target: a few pages; no assumed R knowledge; low-anxiety tone) with exactly these sections, in this order:

1. What you need
2. Install R — Windows · macOS
3. Install RStudio Desktop — Windows · macOS
4. First launch: what you should see
5. Create/open a BUSS256 project
6. Create an R script
7. Run the two verification commands
8. You're ready for Seminar 3
9. Short troubleshooting box

## 6. Exact content contract by section

Quoted text is the contract wording. Bracketed notes are builder instructions, not student text. Menu labels are taken from the supplemental setup source (`R Studio_Setup.pdf`) and must be re-checked against the current RStudio at recheck (§11).

**Title:** "Setting up R and RStudio" — subtitle line: "BUSS256 · Complete this before Seminar 3". *(Course/instructor header per course style; no semester-specific or version-specific text.)*

### 6.1 What you need
- "A Windows or macOS computer on which you are allowed to install software."
- "An internet connection."
- "About R and RStudio: **R** is the programming language and the engine that does the calculations. **RStudio** is the workspace that makes R easier to use. You install **R first, then RStudio**."
- "You do not need any programming experience. Nothing here is graded."
  *[Last sentence is a tone statement; do not expand it into grading policy.]*

### 6.2 Install R
- Lead-in: "Install the current stable version of R. You do not need to know which version number that is — the official page offers the current one."
- Destination (conceptual, official only): "Go to the official R website, **The R Project / CRAN** (cran.r-project.org), and download R for your operating system."
- **Windows branch:** "Choose the **Windows** installer. Run the downloaded file and accept the default options."
- **macOS branch:** "Choose the macOS installer that matches your Mac and macOS version. Open the downloaded file and follow the on-screen steps. If the installer reports an additional system requirement, follow the current official prompt or documentation."
- Closing line: "When the installer finishes, R is installed. You will not usually open R directly; you will use it through RStudio."

*[No version number, no deep link, no chip/architecture instructions.]*

### 6.3 Install RStudio Desktop
- Lead-in: "Now install the current stable version of **RStudio Desktop**. Install R first (previous step)."
- Destination: "Go to **Posit** (https://posit.co/downloads/) and download **RStudio Desktop** for your operating system. Use the current official download page; it lists the computers it supports."
- **Windows branch:** "Run the downloaded installer and accept the default options."
- **macOS branch:** "Open the downloaded file and follow the on-screen steps to install RStudio. If RStudio or the installer reports an additional system requirement, follow the current official prompt or documentation."
- Closing line: "Then open RStudio."

*[Do not state OS version numbers; do not link to `rstudio.com`.]*

### 6.4 First launch: what you should see
- "When RStudio opens, you should see a window with several areas (called *panes*):"
  - "**Console** — where R runs commands and shows results."
  - "**Environment** — shows the data and objects you have created."
  - "**Files / Plots / Help** — where files, charts and help pages appear."
- "A fourth pane, the **script editor**, appears when you open an R script (section 6.6)."
- "RStudio should find R automatically. If it says it cannot find R, see the troubleshooting box."
- *[Text only; no screenshot. Source basis: pane description in `Seminar_1_R_Installation.docx` (Areas A/B/C and scripting pane), restated by pane name rather than "Area A/B/C".]*

### 6.5 Create/open a BUSS256 project
- "Work inside one folder for this course, so RStudio always knows where your files are."
- Steps:
  1. "Create an empty folder for the course (for example **BUSS256**) in a place you can find easily, such as your Documents folder."
  2. "In RStudio, choose **File → New Project…**"
  3. "Choose **Existing Directory**."
  4. "Click **Browse…**, select the folder you created, then click **Create Project**."
- "RStudio now opens your project. The folder name appears at the top right of RStudio, and the **Files** pane shows that folder."
- "Next time, open the project (File → Open Project…, or from the recent-projects list) before you start work."
- *[Do not use "Desktop"/"바탕화면" wording. Do not teach `setwd()`. Do not mention working-directory commands in the core steps.]*

### 6.6 Create an R script
- "An R script is a text file where you write and save R commands (like a notepad for R)."
- Steps: "Choose **File → New File → R Script**. A script editor opens above the Console." then "Save it in your project folder with the name **setup_check.R** (File → Save)."
- *[`setup_check.R` is the contract file name for this guide.]*

### 6.7 Run the two verification commands
See §8 for the exact contract. Required framing: "This is only a check that your setup works."

### 6.8 You're ready for Seminar 3
- "If both checks show the results above, your setup is complete. You are ready for Seminar 3."
- "We will do a short setup check at the start of the first R session. If anything did not work, use the troubleshooting box below and tell your instructor before then."
  *[This sentence records policy decision A (brief verification/fallback check). It must not promise a specific alternative, deadline or grading effect.]*

### 6.9 Troubleshooting box
Exactly the five items in §9.

## 7. Windows / macOS branch requirements

| Requirement | Windows | macOS |
|---|---|---|
| Covered in §6.2 and §6.3 | Yes | Yes |
| Installer action (R) | Choose the Windows installer; run it; default options | Choose the macOS installer matching the Mac/OS; open it; follow prompts |
| Installer action (RStudio) | Run installer; default options | Open file; follow prompts |
| Extra requirement prompts | — | "Follow the current official prompt or documentation" (no frozen chip/architecture steps) |
| OS-version claims | None | None |
| Screenshots | None (text only) | None (text only) |
| Menu / shortcut text | Menu paths are identical on both; keyboard run shortcut stated per OS in §8 | same |

Both branches use the same R-then-RStudio order, the same Project/script steps, and the same verification.

## 8. First-run verification contract

Base R only. Setup check, not a programming lesson. No package use.

1. In the script `setup_check.R`, type: `1 + 1`
   - Run the line: place the cursor on it and click **Run** (or press **Ctrl + Enter** on Windows / **Command + Return** on macOS).
   - Expected in the **Console**: `[1] 2`
2. Then type these two lines in the script and run them (select both and click Run, or run them one at a time):
   ```
   x <- c(1, 2, 3)
   mean(x)
   ```
   - Expected in the **Console**: `[1] 2`
3. Required notes in the guide: "The first line stores three numbers in `x`; it prints nothing. The second line shows their mean." and "If you see the results above, R and RStudio are working."
4. The assignment arrow is written `<-` (ASCII less-than followed by hyphen); the guide must render it unbroken (see F-9 in §10; do not reproduce the broken glyph of the 2020 Seminar 3 PDF).
5. If a result differs: "Check that you typed the lines exactly (R is case-sensitive), then see the troubleshooting box."

*[The keyboard shortcuts and menu labels are standard RStudio conventions not stated in the baseline sources' text for macOS; they are part of this contract and must be re-checked at recheck (§11).]*

## 9. Troubleshooting limits

Exactly five items, one to two sentences each; no additional items, no command-line steps, no registry/path editing, no package troubleshooting.

1. **RStudio opens but cannot find R.** "R must be installed before RStudio can use it. If R is not installed, install it now, then restart RStudio."
2. **Installation is blocked or asks for permission.** "Installing software needs permission on your computer. If you see a permission error, use a computer or account where you can install software, or tell your instructor."
3. **Your computer is too old for the current download.** "The official download page lists the computers it supports. If your computer is not supported, tell your instructor before Seminar 3."
4. **Nothing works right after installing.** "Restart your computer, then open RStudio again."
5. **You installed RStudio first.** "Install R now (section 6.2), then restart RStudio."

*[Sources for the checks: project-lead list of common checks (policy decision I). No claims about specific error messages.]*

## 10. Seminar 3 handoffs

| ID | Status | Record |
|---|---|---|
| **HANDOFF-S3-02** | **RESOLVED / confirmed** | The Fall 2025 canonical Seminar 3 file is **`Seminar 3_R Tutorial_DataFrame.pdf`**. The old N12 reference **`Seminar 3_R.pdf`** is stale; it corresponds to an old **2018 "Tutorial 3"** file. Seminar 3 is **not renamed or modified** in this pass. |
| **HANDOFF-S3-03** | **RESOLVED / confirmed** | Seminar 3 assumes a functioning R/RStudio environment and contains **no installation walkthrough**. Therefore M6-R2 is the governed prerequisite bundle. |
| **F-9** | Remains open | The Seminar 3 tutorial's broken assignment-operator glyph (`<-` rendered as `< ̶`) remains for the **later Seminar 3 build (M6-R3)**. Not addressed here. |
| F-20 | Addressed by this contract | Stale branding/version in the install guides → replaced by version-free text and official-provider destinations (Posit / CRAN). Closure of F-20 occurs when the guide is built and approved. |
| HANDOFF-S3-01 | Unchanged | N12 #53 (R review) remains a Seminar 3 consideration; not addressed here. |

M6-R3 is not begun. The M6-R1 deck is not modified (its closing slide still points to Seminar 3).

## 11. RECHECK-M6R2-01

**RECHECK-M6R2-01 — Re-verify R, RStudio and supported OS/download guidance shortly before Spring 2027 course release.**

- Scope: that "current stable" installers for R and RStudio Desktop are available from the official providers; that the supported-OS statements on the official download pages still allow Windows and macOS students; that the RStudio menu labels used in §6.5–§6.6 and the run shortcuts in §8 still match; that `cran.r-project.org` and `https://posit.co/downloads/` remain the official entry points.
- Baseline of record: the supplied check dated **2026-10-07** (§4).
- Owner: project lead. Deadline: before Spring 2027 course release.
- Because the guide has no version numbers or OS-version claims, a recheck should not require rewriting the guide unless a destination, menu path or step has changed.

## 12. Source / provenance policy

- Content comes only from: the baseline source set (structure and menu labels), the project-lead policy decisions (§3), and the supplied current-source record (§4, internal only).
- No version numbers, OS-version claims, deep links, mirror links or `rstudio.com` URLs in the student guide. The only links permitted: the official top-level destinations named in §6.2 (`https://cran.r-project.org/`) and §6.3 (`https://posit.co/downloads/`), both already recorded in governed material (the baseline source's CRAN link; audit finding F-20 for Posit). No other URL.
- No screenshots, third-party images or screenshot-dependent steps. If the build pass finds a screenshot "absolutely necessary", it must stop and report rather than add one.
- No AI-assisted-workflow content in this guide (consistent with M6-R1).
- Historical sources remain unmodified and are not copied into governed outputs; the build pass authors new text in a new file.
- Build-pass format (DOCX + PDF render, following the historical lineage) is a downstream decision, not fixed here.

## 13. No-guessing attestation

- Every instruction traces to the baseline set's structure, the project-lead decisions A–I, or the supplied current-source record. Nothing was supplied from model memory beyond standard RStudio keyboard shortcuts and menu names that are flagged for recheck (§8, §11).
- R and RStudio version numbers and OS requirements appear **only** in §4 as supplied evidence and are excluded from the student guide.
- No web browsing, no web knowledge used to correct instructions.

## Final-check ledger

| Check | Result |
|---|---|
| Baseline set | 3 sources |
| Student timing | Before Seminar 3 |
| Fixed R version in student guide | None |
| Fixed RStudio version in student guide | None |
| Windows covered | Yes |
| macOS covered | Yes |
| R before RStudio explicit | Yes |
| RStudio Project workflow explicit | Yes |
| `setwd()` as default workflow | No |
| Package installation | Excluded |
| First-run verification | Included (`1 + 1` → `[1] 2`; `x <- c(1, 2, 3)`, `mean(x)` → `[1] 2`) |
| Seminar 3 canonical 2025 filename | `Seminar 3_R Tutorial_DataFrame.pdf` recorded |
| Stale `Seminar 3_R.pdf` reference | Recorded (2018 Tutorial 3) |
| RECHECK-M6R2-01 | Recorded |
