# GRADING_POLICY

*Change log: Jun 18, 2026 — added §A.1 "AI-use levels & secure checks" (D-3: AIAS labels; A1 = AI Collaboration; proctored exams are the only no-AI secure checks; ungraded Wk 2–3 formative checkpoints). Approved by professor Jun 18, 2026.*
*Change log: Jun 18, 2026 — §A.1 reconciliation (partial revision of D-3): A1 reverted to No-AI Week-5 in-class hand-fluency check (precedes the Week-7 AI on-ramp); Weeks 2–3 checkpoints reframed AI-free (the AI-verify version starts Week 7). Calendar reconciliation. Approved by professor Jun 18, 2026.*

Standards for assessment design and grading automation. Read before any
assignment-creation or grading task.

---

## A. Canonical grading scheme — RESOLVED (professor-confirmed)

The source documents previously disagreed; the professor has confirmed the
**syllabus / slides version as canonical.** Conflicting numbers in the script
(and the "no midterm" line) are **errors to be corrected** during the content
audit. Propagate this single version everywhere.

| Component | Weight | Individual / Group |
|-----------|--------|--------------------|
| Class participation (attendance & engagement) | 10% | Individual |
| Assignments | 30% | **1 group + 1 individual** |
| Mid-term exam | 30% | Individual |
| Final exam | 30% | Individual |
| **Total** | **100%** | |

Confirmed companion decisions:

- **Midterm:** YES — exists (Week 8). The script's "no midterm" is an error.
- **Assignments:** exactly **two** — one group assignment + one individual
  assignment. The script's "three group assignments" and the slide's "No Group
  Projects" are both errors. *(Open minor item: how the 30% splits between the
  two assignments — default 15% / 15% unless the professor specifies otherwise.)*
- **Attendance-fail threshold:** **4 or more** absences = fail. The script's
  "five" is an error.
- **Peer evaluation** applies to the group assignment (guards against
  free-riding).

Remaining minor inconsistencies for the audit to clean (non-blocking): number
of in-class groups (8–9 vs 6–7), "15 vs 16 weeks" wording, office-hours times,
and a numeric error in the algorithm worked-example. See
`02_working/00_initial_findings.md`.

---

## A.1 AI-use levels & secure checks (Decision D-3 — locked Jun 18, 2026)

Each assessment carries an explicit AI-use level (AI Assessment Scale):

| Assessment | AI level |
|------------|----------|
| Individual assignment (A1) | **No AI (secure)** — in-class R hand-fluency check (Week 5, before the AI on-ramp) |
| Group assignment (A2) | **AI Collaboration** — open group capstone |
| Second-half in-class exercises | **AI Collaboration** |
| Mid-term exam · Final exam | **No AI (secure)** |

- **The secure, no-AI assessments are the in-class A1 hand-fluency check (Week 5)
  and the proctored mid-term and final exams.** A1 is a pure **hand-skills**
  checkpoint: it falls in Week 5, *before* AI is introduced in Week 7, so it
  cannot be an AI task. A2 is the AI-collaboration capstone; the clean split is
  **A1 = hand (no AI), A2 = AI-collaboration.**
- **Integrity is assured by the proctored exams, not by AI detection or
  tool-policing.** Within an open task, which assistant a student uses is not
  restricted; disclosure (AI-usage statement + prompt log) is required and graded
  as process (see §B, §D).
- **Ungraded formative checkpoints (design element, not assessment).** In Weeks
  2–3, one or two in-class **AI-free verification-mindset** activities carry no
  points: students solve by hand and **check their own work by hand** ("does this
  output look right?"). No AI is used yet (it arrives Week 7). These build the
  standard-holding habit that the Week-7 on-ramp turns into hand-first → AI-verify
  (see COURSE_PROFILE §4).

---

## B. What gets graded (Design Decision 2 — proposed default)

Once students may use AI to execute analysis, grading correctness-of-output
alone stops measuring the student. Shift the assessed object to **process and
judgment.** For AI-assisted work, grade:

1. **Problem framing** — did they define the business question and choose
   appropriate data/technique?
2. **Direction of the tool** — approach and prompts used (process artifact).
3. **Verification & critique** — did they catch errors, check robustness, and
   not take AI output at face value?
4. **Interpretation** — the "so what" for a business decision.
5. **Reflection** — what the AI got wrong and what they would do differently.

The foundational R/verification skills from the first half are still graded
directly (students must demonstrate they can read and check an analysis).

## C. Three-tier grading automation (Design Decision 3 — proposed default)

| Tier | What | Automation | Human role |
|------|------|------------|------------|
| 1 | Runnable-code correctness, multiple choice, numeric answers, rubric-checkable structured output | **Fully automated** | Spot-check |
| 2 | Structured short-answer with a clear rubric | **AI first-pass score + rationale** | Professor reviews, focuses on borderline cases |
| 3 | Interpretation, judgment, reflection | **AI assists only** (flags, summarizes, checks rubric coverage) | **Professor scores** |

**Key caution:** the areas that matter most under Decision 2 (interpretation,
judgment) are exactly where automated grading is least reliable — and where an
AI grading AI-assisted work risks a closed loop. Tier 3 therefore stays
professor-scored; AI never assigns the final mark there.

## D. Authenticity model (Design Decision 4 — proposed default)

Mandating AI inverts the integrity problem: AI-use *detection* does not work and
is not the strategy. Instead, design so the student's own judgment must show:

- **Unique inputs** — student/group-specific data slices or parameters so a
  generic AI answer doesn't fit.
- **Process artifacts** — prompt logs, intermediate outputs, decision notes.
- **In-class verification checkpoints** — brief live checks that the student can
  explain and defend their submitted analysis.
- **Reflection components** — graded explanation of verification and limitations.

## E. Rubric standard (template)

Every assignment ships with a rubric the TA can apply at Tier 1–2:

- Criterion · levels (e.g., 0 / 1 / 2 / 3) · observable descriptor per level ·
  weight.
- For AI-assisted tasks, include explicit criteria for verification and
  interpretation, not just a correct final number.
- Rubrics live with the assignment in `02_working/` then `03_final/`.
