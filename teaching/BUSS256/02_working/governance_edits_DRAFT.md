# Governance Edits — DRAFT for approval (NOT yet applied)

*Change log: Jun 18, 2026 — created. Proposes edits to two governance files to make the locked
design decisions durable. **Nothing in `00_governance/` has been modified.** These are diffs for your
approval; on your go-ahead I (or you) apply them to the originals, each with its own change-log line.*

Decisions reflected: absolute grading; A1 = AI Collaboration (individual AI-verification mini-capstone);
proctored mid-term & final = the only secure no-AI assessments; ungraded Wk 2–3 hand-first → AI-verify
formative checkpoints; hand-first → AI-verify as the second-half design sequence. Tool/model names stay
out of stable text (→ `_currency/`).

---

## EDIT 1 — `00_governance/COURSE_PROFILE_BUSS256.md`, §4 (Design Decision 1)

**Where:** insert a new subsection at the END of §4, immediately **after** the "Rationale" paragraph
(which ends "…the same logic the course already teaches about automation and literacy.") and
**before** "## 5. Tool policy (R / Python / AI)".

**INSERT:**

> **Hand-first → AI-verify (the operating sequence).** Both halves of the course follow one
> sequence: **solve by hand → let AI run it → student verifies and critiques the AI's output.** It
> appears first as one or two *ungraded* in-class checkpoints in Weeks 2–3 (right after R basics),
> and then as the standard shape of every second-half module's exercise.
>
> *Rationale — the bootstrapping problem.* A student cannot verify a method they have never performed
> themselves; they can only check AI output against a standard they already hold. Doing the small
> version by hand first builds that standard, so the later "direct and verify the AI" step assesses
> genuine judgment rather than trust. This is the concrete mechanism behind Decision B's claim that
> verification literacy must precede AI orchestration.

---

## EDIT 2 — `00_governance/GRADING_POLICY.md`

**Where:** insert a new subsection **after** §A (after the line "…See `02_working/00_initial_findings.md`."
and its following `---`) and **before** "## B. What gets graded".

**INSERT:**

> ## A.1 AI-use levels & secure checks (Decision D-3 — locked Jun 18, 2026)
>
> Each assessment carries an explicit AI-use level (AI Assessment Scale):
>
> | Assessment | AI level |
> |------------|----------|
> | Individual assignment (A1) | **AI Collaboration** — individual AI-verification mini-capstone |
> | Group assignment (A2) | **AI Collaboration** — open group capstone |
> | Second-half in-class exercises | **AI Collaboration** |
> | Mid-term exam · Final exam | **No AI (secure)** |
>
> - **The only secure, no-AI assessments are the proctored mid-term and final exams.** A1 is **no
>   longer** a no-AI check; it is an AI-Collaboration task in which the assessed skill is the
>   student's hand-verification and critique of AI output.
> - **Integrity is assured by the proctored exams, not by AI detection or tool-policing.** Within an
>   open task, which assistant a student uses is not restricted; disclosure (AI-usage statement +
>   prompt log) is required and graded as process (see §B, §D).
> - **Ungraded formative checkpoints (design element, not assessment).** In Weeks 2–3, one or two
>   in-class **hand-first → AI-verify** activities carry no points; the hand-solved result is the
>   required input to the AI-verify step, so participation is enforced by design. They are the
>   on-ramp to the second-half hand-first → AI-verify sequence (see COURSE_PROFILE §4).

**Also (small consistency edit):** §D "Authenticity model" lists "in-class verification checkpoints" —
no wording change needed, but note that those checkpoints are now realized as (a) the ungraded Wk 2–3
formative activities and (b) the proctored exams; A1's earlier role as a secure check is retired.

---

## What I changed vs. left alone
- **Applied already** (working drafts, not governance): P-0a §B → absolute grading; P-0b → A1 = AI
  Collaboration, exams-only secure checks, formative-activity section, A1-redefinition note.
- **Not applied** (awaiting your approval): both governance inserts above. Say the word and I'll write
  them into `COURSE_PROFILE_BUSS256.md` and `GRADING_POLICY.md` with change-log lines.
- **Not touched:** §A canonical grading table (unchanged); all originals in the source folder; tool/
  model names (remain placeholders bound for `_currency/`).
