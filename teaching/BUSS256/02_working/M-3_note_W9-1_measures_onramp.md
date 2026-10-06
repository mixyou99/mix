# Lecture Note — W9-1: How we work with AI + the three measures

*Change log: Jun 18, 2026 — created (Stage 2-B, note 1 of 2). Lecture-note DRAFT for professor review.
Spoken script comes in part 2. Markdown only (Production Policy).*

**Source-file map (production):** modernizes the "Basics / Measures" portion of `Seminar 7_Association
Rules/Seminar 7_Lecture_Association Rules_Updated.pdf`; adds the **AI-collaboration on-ramp**. Pairs with
`M-3_assocrules_lab.md` Part A. The AI step uses the local **code** model via `ellmer` chat (see
`_currency/assocrules_llm.md` → `reg_llm_tools.md`); OS steps → `M-1_ollama_setup_guide.md`. **Model note:**
AI behavior is a *pattern to verify*, not a fixed output.

*(Note format follows STYLE_STANDARDS §6. Plain language, one idea per sentence; terms defined on first use.)*

---

## Learning objectives
By the end of this session you can:
1. **Recall the AI rule from the visualization week (Wk 7)** and apply its **hand-first** form: do it by hand, then direct the AI, then verify — and say why that order matters. → the course's operating habit + **verification**.
2. Explain what an **association rule** is and read one (`{A} → {B}`) in plain language. → **algorithm literacy**.
3. **Hand-compute** support, confidence, and lift for a rule on a small basket. → **algorithm + data literacy**.
4. Say what **lift below 1** means — and why it's the opposite of a cross-sell. → **data literacy**.

## The AI rule, now with numbers (a callback from Week 7)
This is our **first technique after the midterm** — so before we start, a quick callback to the rule we set in the **visualization week**: *hold your standard, direct the AI, verify it against your standard.* Back then your standard was a **principle** (a good chart). From here on it's a **number you compute by hand** — so the rule takes its working form: **hand-first, then direct, then verify.** Same rule, now with numbers.

**The rule: you do it by hand first. Then you direct the AI. Then you verify the AI against what you did by hand.** Hand-first, then direct, then verify. **Never** trust-first.

**Why this order?** Because the AI is fast, fluent, and *sometimes confidently wrong.* It will hand you a clean, professional-looking answer in two seconds — and you have no way to know if it's right unless **you already hold the correct answer yourself.** Your by-hand work is your **yardstick.** Without a yardstick, you're not checking the AI; you're just hoping.

Association rules is the *perfect* place to put that habit to work with real numbers, because the whole toolkit is three simple fractions you can compute by hand. So you'll genuinely hold the truth — and you'll catch the AI when it slips. (Set-up for the AI part is in `M-1_ollama_setup_guide.md`; we'll use it next session.)

## The big idea — association rules (study-from explanation)
Ever notice the store puts chips next to salsa? Someone figured out those sell together. **Association rules** find exactly that: items that show up in the same shopping baskets more than you'd expect. A rule is written `{A} → {B}`, read as "baskets with A tend to also have B." The classic use is **market-basket analysis** — what to shelve together, bundle, or recommend.

To judge a rule, we have **three measures**. They're all just counting:
- **Support**(items) = (# baskets with all those items) ÷ (total baskets). *How common is this combo?*
- **Confidence**(`A → B`) = Support(A and B together) ÷ Support(A). *When A is bought, how often is B too?*
- **Lift**(`A → B`) = Confidence ÷ Support(B). This is the important one — it asks whether A and B go together **more than chance**. **Lift > 1 = positive (they attract); lift = 1 = independent (no relationship); lift < 1 = negative (they *repel*).**

That last line is the heart of the module. A high *confidence* can fool you — if B is in almost every basket anyway, then "A → B" looks strong but means nothing. **Lift corrects for that.** Read the lift.

*(Light motivation, optional: this is the engine behind recommendation systems. "People who bought this also bought…" is **collaborative filtering** — recommend based on what similar shoppers did. "More items like this one" is **content-based filtering** — recommend by the item's features. Modern Netflix/Spotify recommenders are fancier versions of the same idea. We won't build those — we're learning the measure underneath them.)*

## Worked example (the real basket — your yardstick)
Six shopping trips:

| Trip | Items |
|---|---|
| T1 | bread, milk |
| T2 | bread, milk, eggs |
| T3 | beer, diapers |
| T4 | beer, diapers, bread |
| T5 | milk, eggs |
| T6 | bread, milk, beer, diapers |

Let's compute three rules by hand (N = 6). Watch the lift.
- **`{diapers} → {beer}`** — both appear in T3, T4, T6, so support = 3/6 = **0.50**. Every diaper trip *also* had beer, so confidence = 3/3 = **1.00**. Beer's own support is 3/6 = 0.50, so lift = 1.00 / 0.50 = **2.00**. **Lift 2 — strong positive. They attract. Act on this one.**
- **`{bread} → {milk}`** — together in T1, T2, T6, support = **0.50**; bread is in 4 trips, so confidence = 3/4 = **0.75**; milk's support is 4/6 = 0.667, so lift = 0.75 / 0.667 = **1.125**. **Lift just above 1 — weak positive.**
- **`{milk} → {beer}`** — together only in T6, support = 1/6 = **0.167**; milk in 4 trips → confidence = 1/4 = **0.25**; beer support 0.50 → lift = 0.25 / 0.50 = **0.50**. **Lift 0.5 — below 1 — NEGATIVE. Milk and beer go together *less* than chance. These items repel — the opposite of a cross-sell.**

Write those three down: **2.0, 1.125, 0.5.** That spread — strong, weak, negative — is your yardstick for the whole module, and that **0.5** rule is the trap you'll watch the AI walk into next session.

## When / how to use it
- Use **support** to filter out combos too rare to bother with.
- Use **confidence** to see how reliably A predicts B — but never on its own.
- Use **lift** to decide if a rule is *real*: above 1 to recommend together, below 1 to keep apart.

## Common mistakes / how to verify
- **Trusting high confidence alone.** If B is everywhere, confidence is high but lift ≈ 1 — meaningless. Always read the lift.
- **Reading lift < 1 as "weak positive."** It is **negative** — the items repel. This is the single most important distinction in the module (and, you'll see, the one the AI fumbles).
- **Swapping support and confidence.** They answer different questions; check which fraction you computed.
- **How to verify:** for any rule, re-count the baskets and recompute the three fractions. It's arithmetic — you can always check it by hand. That's the yardstick.

## Key takeaways
- The course rule (**set in Week 7**), here in its numeric form: **hand-first → direct the AI → verify.** Never trust-first.
- An association rule `{A} → {B}` is judged by **support, confidence, lift** — all just counting.
- **Lift is the one that matters:** > 1 attract, = 1 independent, **< 1 repel (negative).**
- Your basket yardstick — **2.0 / 1.125 / 0.5** — and especially that **0.5 = negative** rule, is what you'll hold the AI to next class.
