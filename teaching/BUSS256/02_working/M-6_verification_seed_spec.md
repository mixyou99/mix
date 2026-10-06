# M-6 — Verification-Mindset Seed Spec (prompts to ADD) · STAGE 2 (refresh)

*Change log: Jun 18, 2026 — created (Stage 2). The **AI-free** verification seed: short "check your own work by
hand" prompts **added** to existing first-half exercises. **Additions, not rewrites** — the exercises are assets
(F-8/F-10/F-14/F-15); we don't touch their content, we append one prompt each. No tools, no AI, no R packages
beyond what the exercise already uses.*

**The point (one paragraph for you).** These prompts build **one habit**: *don't trust the screen — hold your
own standard.* That is the exact muscle the **Week-7 on-ramp (M-5)** turns into *"hold the standard → direct the
AI → verify."* In Weeks 2–5 there's **no AI to verify** — the student verifies **their own** output by hand. So
M-6 plants the *habit*; M-5 points it at the AI. *(This is also why the governance "Weeks 2–3 checkpoints" must
be reframed AI-free — see `M-6_governance_reconciliation.md`.)*

**Format to insert (each is one or two sentences, appended as a final bullet):**
> **🔎 Check your work (no computer).** *[prompt]* — if your by-hand answer and R's answer disagree, **R isn't
> wrong; find your mistake (or theirs).** This is the habit we'll use on AI after the midterm.

*(In production, the 🔎 can be a plain "Check your work —" label; it must read in **black-and-white** — meaning
is in the words, not the icon/color, per §8.)*

---

## Wk 2 — R basics & data structures (target: the R-basics / data-frame exercise, F-8/F-10)
**Insert after the vector/data-frame creation task:**
> **🔎 Check your work (no computer).** You built a vector and a small data frame. **Before** running `length()`
> or `nrow()/ncol()`, **write down** how many elements the vector has and the rows × columns of the frame from
> your own code. Then run them. Match? If not, the mismatch is the lesson — find where your count and the code
> diverged.

*Why:* the cheapest possible "predict-then-check" — counts you can verify by eye. Primes "I hold the answer first."

---

## Wk 3 — functions & packages (target: the functions-in-R exercise)
**Insert after the student writes/calls a small function:**
> **🔎 Check your work (no computer).** Pick **one** input and compute the function's output **in your head or on
> paper first** (e.g., for `hello("Tom")`, what exact string should print?). Then run it. If R prints something
> else, decide **who's right** — and usually it's the function that needs fixing, not your expectation.

*Why:* a function is a tiny "answer machine" — perfect first place to practice holding the expected output and
checking the machine against it (the on-ramp pattern in miniature).

---

## Wk 4 — data summary & correlation (target: the Data-Management-I summary/correlation exercise, F-14)
**Insert after `summary()` / `cor()`:**
> **🔎 Check your work (no computer).** (a) For one numeric column, **eyeball a few values** and predict whether
> the **mean** sits above or below the **median** (is the column skewed?) — then read `summary()` and see if you
> were right. (b) For one correlation, predict its **sign** (+ / − / ~0) from what the two variables *mean*
> before you read the number. A correlation whose **sign surprises you** is either a real finding **or** a data
> problem — investigate, don't just report it.

*Why:* this is the **descriptive-stats** core (no p-values — that's M-2) and it rehearses **mid-term MT-1…MT-6**
(variable quality, correlation interpretation). "Does this number make sense?" is precisely the AI-verification
question, applied to your own output first.

---

## Wk 5 — data cleansing & filtering (target: the airbnb clean/filter exercise, F-15)
**Insert after a filtering / missing-value / outlier step:**
> **🔎 Check your work (no computer).** Before you filter, **predict the row count** you expect to keep (roughly:
> "most listings are under \$500, so I should lose only a handful"). Run the filter, check `nrow()`. **Way off?**
> Your filter condition is probably wrong (a `>` that should be `<`, or `NA`s silently dropped) — a filter that
> quietly returns 0 rows or all rows is the classic bug. **Sanity-check the count every time.**

*Why:* row-count sanity-checking is the single most useful data-management reflex, and it's the same reflex
students will use to catch an AI that "cleaned" data wrong after the midterm.

---

## Continuity note (for the Wk-1 framing + M-5)
- **Wk 1** introduces *why* (the "third literacy" + "we'll learn to **verify** AI"); these Wk 2–5 prompts are the
  *practice* of the verify habit — **on your own work, no AI yet.**
- **Wk 7 (M-5)** flips the same habit onto the AI: *hold the standard → direct → verify.* Students who've done
  these by-hand checks will recognize the move. **No new concept in M-5 — just a new target (the AI).**
- **Scope guard:** these are **additions** of one prompt per exercise. The exercises themselves (their R code,
  data, tasks) are **unchanged** — assets stay protected.
