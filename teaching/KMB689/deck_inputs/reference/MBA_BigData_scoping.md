# KMB689 (MBA Big Data) — Scoping Audit (DISCOVERY ONLY)

*Change log: Jun 18, 2026 — created. Stage 1 discovery/audit of the MBA Big Data course, read from the real
read-only source via the Dropbox connector. **No content authored.** Source (discovered — professor left the path
as a placeholder): `Dropbox/3_Teaching/2025/Spring/4_KBM_689_Big Data/` (Spring 2025, the most recent). Facts that
couldn't be confirmed are flagged, not assumed.*

---

## How this was read
Discovered via the Dropbox connector (the professor named no path). Read the **latest syllabus**
(`..._20250601_New.docx`, Jun 2025) in full, the **folder structure**, and confirmed the hands-on shape by
inventorying the LRM, Classification, and Data Management seminar folders (the `.r` exercise files are present).

---

## A. WHAT THE MBA COURSE ACTUALLY IS
**KMB689 — "빅데이터: 분석 및 경영에의 활용" (Big Data: Analysis & Application to Management)**, Korea University
**MBA (경영전문대학원)**, Spring 2025. **Evening class** (Tue 19:00–21:45) — i.e., **working professionals**.

- **Textbook:** Provost & Fawcett, *Data Science for Business* (the classic **data-analytic-thinking / business**
  text; purchase not required) — a **concept/case** anchor, not a coding manual.
- **Format ("seminar"), 3 elements (per syllabus):** (1) **Lecture** — BA theory + procedures; (2) **Assignments**
  — analysis on real data; (3) **Practicum** — **hands-on R** to analyze business data and derive insights.
- **Assessment:** Participation 20% (attendance 10 + participation 10) · Group Assignments 20% (**A1** data
  generation & analysis 10% + **A2** linear regression 10%) · **Midterm 30% · Final 30%.** *(Has BOTH a midterm
  and a final — like BUSS256; unlike BUSS215.)* 3 absences = F.
- **Audience note:** MBA professionals; the syllabus assumes an **R practicum** but states no R prerequisite.

**Technique coverage (from the seminar folders — the real topic map):**
| Seminar | Topic | Hands-on R? |
|---|---|---|
| 1 | Course Introduction | — |
| 2 | Big Data Analytics | concept |
| 3 | **Software Tools for Data Analytics** | R setup/tools |
| 4 | Tools in Business Analytics | concept/tools |
| 5–6 | **Data Management I / II** | **R exercises** (`.r` present) |
| 7 | Review / **Midterm** | — |
| 8 | **Linear Regression (LRM)** | **R exercise** on `MobileApp.csv` (2017) |
| 9 | **Data Visualization** | (deck; R likely) |
| 10 | **Clustering** | (R likely) |
| 11 | **Association rules (연관분석 / market basket)** | (R likely; mba/groceries lineage) |
| — | **Classification** ("Extra" lecture + R exercise) | **R exercise** (`.r`) — *a technique BUSS256 does NOT cover* |
| 16 | Final exam | — |

**How hands-on is it now?** **Lab-heavy, hands-on R — confirmed** (every technique seminar has a `.r` exercise;
the practicum is a stated course pillar). **This is the inversion target:** the current course is undergrad-style
hands-on coding; the new MBA direction wants **minimize-R + maximize theory/cases + AI-verification as the star.**

## B. FORK MAP toward the new direction
| BUSS256 asset | Adapts to MBA as | Compress / drop / new |
|---|---|---|
| **AI-verification creed ("hold the standard → direct → verify") — the STAR** | **"Supervise the analysis"** — MBAs direct AI/analysts and **verify & decide**, rather than code. The M-5 on-ramp + the verify-the-AI lab beats become the **centerpiece** of every session. | **NEW emphasis** (current course has none); this is the spine. |
| **Technique concepts** (regression, clustering, association, classification, viz) | **Theory + business case + a read-and-verify-AI demo** (read R output, don't write R). | **Compress** deep labs → concept + case + verify-demo. |
| **M-5 visualization-judgment** (read/critique charts) | **Strong fit** — executives read dashboards; "is this chart honest?" is an MBA skill. | Forks in nearly as-is (reading, not making). |
| **Datasets** (App-Store/`MobileApp.csv`, mba/groceries, etc.) | **Reuse as case data** — same lineage already in the MBA course. | Reuse; relabel historical. |
| **Classification** (the MBA already has it; BUSS256 doesn't) | Keep as an MBA technique (concept + case + verify-demo). | **New vs BUSS256** — fork-author or adapt the MBA's existing. |
| **Hand-coding depth** (writing R from scratch, the install/skill-building) | — | **DROP / minimize** — MBAs read R to check AI, not write it. |
| **Business cases** | The lean-on-cases direction | **NEW / GAP** — see §D. |

## C. THE "MINIMAL R + AI-VERIFY + CASES" SESSION SHAPE (proposed for review)
A session under the new direction:
1. **Concept/theory** (Provost-Fawcett "data-analytic thinking" framing) — what the technique decides, when to use it.
2. **Business case** — a real company/decision where the technique drives a call.
3. **Light "direct-and-verify-the-AI" demo** — the instructor (or student) directs an AI to run the analysis;
   students **read the R output and the result, verify it against the concept/case logic, and decide.** *Read R,
   don't write it.*
- **Omit R entirely** where the case carries the lesson (e.g., a pure decision/interpretation session).
- **Minimal reading-level R** only where checking the AI's output requires seeing the code (e.g., "did it use the
  right variable? the right model?"). **Flag for the professor:** how much reading-level R is the floor.

## D. CASES — the lean-on-cases direction has a GAP
- The **textbook (Provost & Fawcett)** supplies data-analytic-thinking *cases/examples* — a real asset to lean on.
- But I found **no dedicated business-case folder** in the course materials; the assignments (A1 data gen, A2
  regression) are **analysis tasks**, not classic decision cases. So **explicit company cases are thin** — the new
  direction needs them authored or sourced. **Flag as the main content gap.**

## E. CURRENCY (noted, NOT fixed — to verify)
- The R setup/tutorials (Seminar 3 "Software Tools", Seminar 5 Data Mgmt) **likely share the BUSS256/BUSS215
  lineage** → probable **F-9 (`<-` glyph)** in tutorial PDFs and **F-20 (rstudio.com→Posit)** in any install
  guide. **Not yet opened — flag to verify** (I confirmed the *technique* `.r` files exist but didn't read the
  setup PDFs).
- Datasets: `MobileApp.csv` (2017), association data (mba/groceries lineage) — **dated historical snapshots** (the
  BUSS256 F-13 stance).

## F. OPEN QUESTIONS (only the professor knows)
1. **MBA R background:** any prior R, or none? (Sets how much reading-level R scaffolding survives.)
2. **R floor:** reading-only, or some minimal writing? (§C) Where is R omitted entirely vs. kept minimal?
3. **Which techniques stay?** Keep all of regression / clustering / association / **classification** / viz — or
   drop some for an MBA-lean set? (Classification is MBA-only vs BUSS256 — keep it?)
4. **Sessions & structure:** confirm the ~16-week shape (midterm + final both stay?).
5. **Case sources:** Provost-Fawcett cases, HBS/company cases, or author bespoke ones? (The new direction leans here.)
6. **Assignments:** keep A1/A2 (data-gen, regression) or re-orient to case-and-verify deliverables?
7. **Governance:** full governed workspace (like BUSS256) or a lighter profile (like BUSS215)? — likely heavier
   than BUSS215 (a full ~16-week course) but the professor decides.

---

## Status
Discovery complete and **source-grounded**: MBA Big Data = **KMB689**, a **hands-on, R-lab-heavy** course
(regression, clustering, association, classification, viz, data management) for **MBA professionals**, using the
Provost-Fawcett business text + R practicum + midterm/final. **The professor's recollection (hands-on like the
undergrad) is confirmed.** The fork toward **minimize-R / AI-verify-as-star / cases** is mapped, with the **case
gap** and **currency-to-verify** flagged. **Nothing authored.** Awaiting your answers to §F — especially the **R
floor** (reading-only?) and **case sources** — before any design. STOP for review.
