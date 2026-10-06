# COURSE_PROFILE — BUSS256

*Change log: Jun 18, 2026 — added §4 subsection "Hand-first → AI-verify" (operating sequence + bootstrapping-problem rationale). Approved by professor Jun 18, 2026.*
*Change log: Jun 18, 2026 — §4 reconciliation: the AI version of the hand-first → AI-verify sequence begins at the Week-7 on-ramp (M-5, first AI use); the Weeks 2–3 checkpoints are reframed as the AI-free verification-mindset seed. Calendar reconciliation. Approved by professor Jun 18, 2026.*

**Course:** Introduction to Big Data Analytics and Interpretation
**Institution:** Korea University Business School
**Level:** Undergraduate
**Instructor:** Prof. Gun-woong Lee
**Role in workspace:** Canonical source for all Big Data Analytics variants
(this undergraduate version is the deep original; the MBA version forks from it).
**Source of record (READ-ONLY — do not edit, do not copy):**
`/Users/gunwoonglee/Dropbox/3_Teaching/2025/Fall/BUSS256_BigData` — the Fall
2025 instance (syllabus, all seminar slides, notes, scripts, R tutorials,
datasets). This external Dropbox folder is the canonical source; Cowork is
granted read access and reads files in place (no copying into the workspace).
All new/updated work for the **Spring 2027** redesign is written to this
workspace's `02_working/` → `03_final/`.

---

## 1. Audience

- ~40 students; seminar-style, group-based in-class activities.
- **Mixed majors** — not all Business School students; non-majors expected and
  explicitly welcomed.
- **Mixed background** — international/exchange students present; English
  delivery with accessibility for non-native speakers.
- **Low coding baseline** — most students have little or no prior programming
  experience. The course has historically been positioned as *not
  coding-intensive*.

**Design implication:** materials must onboard true beginners while remaining
credible for the minority with coding experience. Verification skill, not
syntax fluency, is the target (see §4).

## 2. Learning objectives (from syllabus)

- General understanding of business data management and analytics.
- Practical grasp of core techniques and *when/how* to apply each.
- Awareness of up-to-date trends in data tools.
- The "business analytics service" capability: frame a business problem →
  select data & technique → turn results into insight → support decisions.

## 3. Pedagogical spine — the two literacies

The course is organized around two literacies the professor treats as the
essential capabilities for future business leaders:

- **Data literacy** — ability to judge whether data is useful for a problem and
  to argue with evidence from data.
- **Algorithm literacy** — ability to understand how an algorithm produces its
  outcome and to critically evaluate algorithmic decisions.

These are not decoration; they are the assessment target. Every module should
ladder back to one or both.

## 4. Design Decision 1 — CONFIRMED: B (scaffolding)

Coding/verification foundation first, AI orchestration layered on top.

**Concretely for BUSS256:**

- **First half (through data management / visualization / basic statistics):**
  students build enough R (and optionally Python) literacy to *read and verify*
  an analysis — to recognize when an output is wrong or misleading. Coding is
  taught as a means to verification, not as an end in itself.
- **Second half (techniques: association rules, regression, clustering,
  text-mining):** students may use AI (Claude/ChatGPT) to help generate and run
  analysis, but are assessed on directing it, checking it against the
  foundation they built, and interpreting it for a business decision.

**Rationale:** the central risk of AI-assisted analytics is plausible-but-wrong
output the student cannot detect. You cannot verify code you cannot read.
Verification literacy is therefore the new core skill, and AI use sits safely
only on top of it. This is the same logic the course already teaches about
automation and literacy.

**Hand-first → AI-verify (the operating sequence).** Both halves of the course
follow one sequence: **solve by hand → let AI run it → student verifies and
critiques the AI's output.** The **AI** version of this sequence begins at the
**Week-7 on-ramp (M-5)** — the first time AI enters the course — and is then the
standard shape of every second-half module's exercise. Its **AI-free seed**
appears earlier: one or two *ungraded* in-class checkpoints in **Weeks 2–3**
(right after R basics) where students **solve by hand and verify their own work
by hand**. Same habit (hold a standard, then check against it); the Weeks 2–3
target is the student's own output, the Week-7+ target is the AI's.

*Rationale — the bootstrapping problem.* A student cannot verify a method they
have never performed themselves; they can only check AI output against a standard
they already hold. Doing the small version by hand first builds that standard, so
the later "direct and verify the AI" step assesses genuine judgment rather than
trust. This is the concrete mechanism behind Decision B's claim that verification
literacy must precede AI orchestration.

## 5. Tool policy (R / Python / AI)

- **R** — retained as the primary teaching language (continuity with existing
  materials, datasets, and the textbook).
- **Python** — admitted as an allowed alternative for assignments where
  appropriate; not a second full curriculum in the pilot.
- **AI (Claude / ChatGPT)** — introduced as an analysis and coding *collaborator*
  in the second half. Students learn prompting, output verification, and error
  detection as explicit skills. AI is required-and-disclosed, not forbidden
  (see GRADING_POLICY §authenticity).

*This is a substantive shift from the Fall 2025 "R-only, not coding-intensive"
framing and should be reflected in the updated syllabus, objectives, and
Seminar 1 materials.*

## 6. Topic map & currency tags

Stable = pedagogy rarely changes. Volatile = examples/tools/models age fast and
belong in `_currency/`.

| Wk | Topic | Stability |
|----|-------|-----------|
| 1 | Course overview; data & algorithm literacy | Volatile (AI framing, current examples) |
| 1 | Principles of data science | Stable |
| 2–3 | R basics; data structures | Stable (add: AI-assisted coding intro) |
| 4–5 | Data management; basic statistics | Stable |
| 6–7 | Data visualization; review | Mostly stable |
| 8 | Mid-term exam (confirmed) | — |
| 9–11 | Association rules; regression | Stable core (Volatile: AI-assisted workflow) |
| 12–13 | Clustering | Stable core (Volatile: AI-assisted workflow) |
| 14–15 | Text-mining; review | **Volatile** — NLP/LLM material ages fastest |
| 16 | Final exam | — |

Text-mining (W14–15) is the highest-priority candidate for AI-topic integration:
classical NLP framing now coexists with LLM-based approaches.

## 7. Recurring cases & datasets (from existing materials)

App Store / mobile apps (instructor's own dataset), Facebook, Airbnb, Netflix,
Amazon. Keep these as the running examples for continuity; refresh figures and
add AI-era cases as needed.

## 8. Confirmed decisions & remaining open items

**Confirmed (professor):** grading = participation 10 / assignments 30 / midterm
30 / final 30; assignments = 1 group + 1 individual; midterm exists;
attendance-fail = 4 absences. (Full detail in GRADING_POLICY §A.)

**Still open (non-blocking):**
- Split of the 30% assignment weight between the group and individual
  assignment (default 15/15).
- How far to push Python alongside R in the pilot (current setting: allowed
  alternative for assignments, not a full second track).
- Number of in-class groups (8–9 vs 6–7) — minor, for audit cleanup.
