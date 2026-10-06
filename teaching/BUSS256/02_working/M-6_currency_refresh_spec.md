# M-6 — Currency Refresh Spec (BEFORE / AFTER) · STAGE 2 (refresh)

*Change log: Jun 18, 2026 — created (Stage 2). Exact before/after for each dated/broken first-half item,
ready to apply in the **single production phase** (Production Policy — no deck/PDF edits here; this is the
authored change set). Targeted refresh only — assets are protected, not rewritten. Honesty rule: each item is
marked **VERIFIED** (with source + date) or **NEEDS-PROFESSOR-CONFIRMATION**.*

**PHASE A APPLICATION STATUS (Jun 18, 2026):**
- **F-13 → APPLIED** to authored markdown (`M-2_note_W11-1` now carries the full "historical snapshot, July
  2013" label; P-2 design text already dates the A2 data). The A2-brief relabel is **locked for A2-build**.
- **F-9 / F-20 / F-5-Option-B → LOCKED (text final here; applies at artifact build).** Their text lives in the
  existing decks/PDFs (Seminar-3 R tutorial; R-install guides; Seminar-2 "Drowning in Data" slide) — there is
  **no authored markdown to edit now**, and those artifacts are built in a later round (decks deferred per Q2;
  setup-guide rebuild + F-9 tutorial regeneration happen at their build, with the R paste-test gate). The
  corrected text below is **final/authoritative** and the build inherits it.
- **F-3 (McKinsey 52%) and F-6 (dead YouTube) → HELD — NOT applied.** Still awaiting professor decision.

**Status summary:** F-9 ✅ fix specified (highest priority) · **F-20 ✅ VERIFIED (direct fetch, 2026-06-18)** ·
**F-5 ⚠ figure NEEDS-PROFESSOR-CONFIRMATION** (direction supported; primary source paywalled — see below) ·
F-13 ✅ relabel specified · **F-3 ⚠ NEEDS-PROFESSOR-CONFIRMATION** · **F-6 ⚠ NEEDS-PROFESSOR-CONFIRMATION**.

*Verification provenance (added 2026-06-18): the web-verification **subagent did not complete** (rate-limited,
then session-limited — zero output). Verification was redone by the TA directly: **WebSearch** for all three,
plus a **direct `web_fetch`** of the two primary pages. The Posit page fetched live (F-20 confirmed). The
Statista page returned empty/paywalled, so F-5's exact figure is **not** primary-confirmed and is downgraded.*

---

## F-9 — Seminar-3 R Tutorial: broken `<-` glyph **+ smart quotes** (HIGHEST PRIORITY) ✅
**File:** `Seminar 3_Data Structure/Seminar 3_R Tutorial_DataFrame.pdf` (and its source document).
**Why critical:** beginners **copy-paste** these code lines into R; both defects below cause immediate errors.

**Defect 1 — the assignment operator.** Every `<-` in the code renders as **`< ̶`** — a `<` followed by a
**space + U+0336 COMBINING LONG STROKE OVERLAY** (confirmed at the byte level: `0xCC 0xB6`). It is **not** a real
`<-`, so pasted code fails. Affects ~every code line (e.g., lines with `a <- seq(1,6)`, `b <- 1:12`,
`dim(b) <- c(3,4)`, `b[3,1] <- 7`, the `data.frame(...)` block, `D <- 1:10`, the `hello <- function(x)` line).

| | Text |
|---|---|
| **BEFORE (renders as)** | `> a < ̶ seq(1,6)`   ·   `> sales < ̶ data.frame(ID=id, Name=name, …)` |
| **AFTER (must be)** | `> a <- seq(1,6)`   ·   `> sales <- data.frame(ID=id, Name=name, …)` |

**Defect 2 — curly/smart quotes in code (second copy-paste hazard, same file).** Code examples use **typographic
quotes** `‘ ’ “ ”` where R requires **straight** `' "`. Affects the data-frame block and the function example.

| | Text |
|---|---|
| **BEFORE** | `id <- c(‘C001’, ‘C002’, ‘C003’)`   ·   `hello <- function(x) {print(paste(“Hello”, x))}` |
| **AFTER** | `id <- c('C001', 'C002', 'C003')`   ·   `hello <- function(x) {print(paste("Hello", x))}` |

*(Curly quotes in the surrounding **prose** — "if you print 'b'…" — are fine; only the **code** must be ASCII.)*

**Cause (so it doesn't recur):** the PDF was generated from a word-processor source with **autoformat on** — it
restyled `<-` into a strikethrough-overlay glyph and "smart-quoted" the apostrophes/quotes. **Fix:** regenerate
the tutorial with all **code** in a monospace font and **autoformat / smart-quotes OFF** (or author the code from
a plain-text / R-Markdown source). **Verify by pasting every code line into a real R console** before release.
**Rationale:** a foundations tutorial students copy-paste must be byte-exact, or week-2 beginners hit errors that
look like *their* mistakes.

---

## F-20 — R/RStudio install guides: `rstudio.com` → Posit ✅ VERIFIED
**Files:** the Seminar-2 install guides (`R_Installation_Guideline.pdf` / `R_Tutorial_1_Installation.pdf` and the
RStudio setup PDF). **Verified 2026-06-18** (`_reference/ref_m6_posit_rstudio.md`).

| | Text |
|---|---|
| **BEFORE** | "Download **RStudio** from **rstudio.com** (…/products/rstudio/download)" |
| **AFTER** | "Download **RStudio (by Posit)** from **https://posit.co/download/rstudio-desktop/** (landing: https://posit.co/downloads)" |

- First mention: "**RStudio (by Posit)** — Posit Software, PBC (formerly RStudio, PBC)."
- **Leave the R/CRAN link unchanged** — `https://cran.r-project.org/` is still correct.
- One-line OS note (cross-platform §9): installers exist for **Windows 11 / macOS 14+ / Linux**.
**Rationale:** the old brand/URL can dead-end or confuse first-time installers.

---

## F-5 — Seminar-2 "Drowning in Data" scale stats: aged + undated ⚠ figure NEEDS-PROFESSOR-CONFIRMATION
**File:** `Seminar 2_Data Science/Seminar 2_Lecture_Data Science.pdf` (slide *Drowning in Data*).
**Current (≈2012-era, undated):**
> • Google processes 20 petabyte (PB) of user searches a day
> • Facebook has 2.5 PB of user data + 15 TB/day
> • eBay has 6.5 PB of user data + 50 TB/day

**Recommended fix (Option A — replace with a current, dated headline figure; keep the old ones as a labeled
"then vs now"):**
> **Today (2025): the world generates ~180 zettabytes of data a year** — and it's still climbing fast.
> *(IDC Global DataSphere, via Statista, 2025. 1 ZB = 1 trillion GB.)*
> *Back in ~2012, "big" meant Google ~20 PB/day, Facebook ~2.5 PB, eBay ~6.5 PB — the point is the **growth**.*

**Minimal fix (Option B — if you'd rather not restructure the slide):** keep the three lines, add a dated label:
> *(Figures circa 2012 — illustrative of scale at the time.)*

- **⚠ NOT primary-verified** (`_reference/ref_m6_data_scale.md`). A direct `web_fetch` of the Statista primary
  page returned empty (paywalled/JS); the ~180 ZB figure rests on a WebSearch summary of mixed IDC/Statista-
  derived sources with a real **173–181 ZB** spread. **Two safe routes:** (a) **Option B is risk-free** — it
  adds no new external number, just dates the existing 2012 figures as historical; (b) if you want the headline
  ZB figure (Option A), **confirm "~180 ZB (2025)" directly against IDC/Statista before it goes on a slide.**
**Rationale:** undated decade-old figures read as stale; but a replacement figure must itself be primary-sourced,
or we'd just be swapping one unverified stat for another — Option B avoids that entirely.

---

## F-3 — Seminar-1 McKinsey "52% of C-level" stat ⚠ NEEDS-PROFESSOR-CONFIRMATION
**File:** `Seminar 1_Intro/Seminar 1_Lecture_Course Introduction.pdf` (slide *Main Difficulties in Implementing
Data-driven Business Plans and Strategies*).
**Current:**
> "**52% of C-Level executives dismiss data because they don't understand it.**" — **McKinsey (2024)**

**Finding:** I could **not verify** this exact figure/attribution (`_reference/ref_m6_mckinsey_stat.md`). The
only "52%" found in McKinsey material is unrelated (tech leaders' involvement in strategy, Global Tech Agenda
2026). **Do not present as sourced until confirmed.**

**Two paths (professor decides):**
1. **Confirm** — supply the original 2024 McKinsey source for the 52% claim; then keep as-is with a precise cite.
2. **Replace** with a VERIFIED McKinsey stat (clearly labeled, year updated), e.g.:
   - "**47%** of executives say data and analytics have **significantly or fundamentally changed the basis of
     competition** in their industry." *(McKinsey)* — fits the same "why data matters" slide.
   - or "Only **20%** of leaders say their organizations **excel at decision-making**." *(McKinsey, Decision
     making in the age of urgency)*

**Rationale:** an unverifiable headline stat on the course's opening "why data matters" slide undercuts the very
data-literacy standard the course teaches.

---

## F-13 — App Store / mobile-app dataset (July 2013): relabel as historical snapshot ✅
**Where:** wherever the **mobile-app (Apple App Store) dataset** is introduced in the Data-Management materials
(the data-management lecture/script; data file `07192013Apps.csv`, whose name encodes **2013-07-19**). The script
currently says: *"I gathered the mobile app data from Apple App Store and third-party websites…"* — **no date.**

| | Text |
|---|---|
| **BEFORE** | "This is data on mobile applications… I gathered the mobile app data from Apple App Store and third-party websites." |
| **AFTER (add the dated label)** | "This is a **historical snapshot** of Apple **App Store** data, **collected July 2013**. We use it to teach **data-management technique** — not as a current read on the app market." |

- **D-5 note:** an actual **re-collection** of current App Store data is a **SEPARATE task** (it also affects
  **M-2 / A2**, which use the same flagship dataset) — **flagged here, not done in M-6.**
**Rationale:** D-5 — date historical data honestly so students don't mistake a 2013 snapshot for current figures;
the technique it teaches is unaffected by the age.

---

## F-6 — Seminar-2 dead embedded YouTube clip ⚠ NEEDS-PROFESSOR-CONFIRMATION
**File:** `Seminar 2_Data Science/Seminar 2_Lecture_Data Science.pdf`. The deck embeds **three** YouTube links;
the audit (F-6) + the script flagged that **at least one clip is gone**. I **cannot reliably verify** which are
live (link-liveness isn't checkable here, and I won't click embedded video links). **Professor to check each:**

| Slide context | Link |
|---|---|
| (early, "what is…" framing) | `https://www.youtube.com/watch?v=ly1RSNRWmEs` |
| "Source:" citation | `https://www.youtube.com/watch?v=0PPktPn5qZk` |
| (later reference) | `https://www.youtube.com/watch?v=HbHTvqZE3D8` |

**Recommendation:** verify each; **remove or replace** any dead one. I am **not** auto-picking a replacement
video — pick one only after confirming it's live and appropriate (else cut it; the slide stands without video).
**Rationale:** a dead embed mid-lecture breaks flow and signals stale material.

---

## Apply-phase checklist (for the single production phase)
1. **F-9 first** — regenerate the Seminar-3 tutorial (ASCII `<-` + straight quotes); **paste-test every code line in R.**
2. F-20 — swap `rstudio.com` → `posit.co/download/rstudio-desktop/`; "RStudio (by Posit)"; CRAN unchanged. ✅ fetch-verified.
3. F-5 — **Option B (date the old figures) is safe to apply now; Option A's ~180 ZB figure needs professor
   confirmation against IDC/Statista first.**
4. F-13 — add the dated historical-snapshot label.
5. **F-3 — hold for professor** (confirm source or pick a verified alternative).
6. **F-6 — hold for professor** (verify the three links; remove/replace dead).
7. **B&W (§8) + cross-platform (§9):** any regenerated student-facing item reads in black-and-white and names
   both OS paths where install/setup is OS-dependent.
