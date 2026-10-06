# Lecture Note — W9-2: apriori at scale, and catching the AI's interpretation

*Change log: Jun 18, 2026 — created (Stage 2-B, note 2 of 2). Lecture-note DRAFT for professor review.
Markdown only (Production Policy).*

**Source-file map (production):** modernizes the R-exercise portion of `Seminar 7_Association Rules`
(`Seminar 7_R_Exercise_Code.r`); adds the AI-orchestration + interpretation-verify layer. Scale data =
**`mba.csv`** (lecture demo = `groceries.csv`). Pairs with `M-3_assocrules_lab.md` Parts B–E. Load files with
`_shared_library/snippets/setwd_load_data.md` (same on macOS/Windows). AI step → `_currency/assocrules_llm.md`
(code model); Ollama-running cues → `M-1_ollama_setup_guide.md`. **Model note:** AI behavior is a *pattern to
verify*, not a fixed output.

---

## Learning objectives
By the end of this session you can:
1. Run the classical **`apriori`** pipeline on a real transaction dataset and read the **top rules by lift**. → **algorithm + data literacy**.
2. **Direct an AI** to write the pipeline *and interpret* the rules. → orchestration.
3. **Verify the AI's interpretation** against your hand-computed measures — catching the lift-below-1 misread. → **verification** (the core).
4. Turn the **verified** rules into a merchandising decision. → **data literacy**.

## The big idea (study-from explanation)
Last class you found rules by hand on six baskets. Real stores have thousands. The **`apriori`** algorithm does the same counting across a whole dataset and hands back every rule that clears the thresholds *you* set — a minimum **support** (ignore combos too rare to matter) and a minimum **confidence**. You don't need its inner machinery; you need to *set the thresholds, sort by lift, and read the top rules.*

The R is short and standard — the `arules` package does the heavy lifting:
```r
library(arules)
mba <- read.transactions("mba.csv", sep = ",")        # each row = one basket
itemFrequencyPlot(mba, topN = 15)                      # the 15 most-bought items
rules <- apriori(mba, parameter = list(support = 0.05, confidence = 0.25, minlen = 2))
inspect(sort(rules, by = "lift")[1:8])                 # the 8 strongest rules by lift
```
*(These baskets are dense — about 14 items each — so we use a higher support floor, 0.05, than the small `groceries` demo's 0.006. Set support too high and you get **zero** rules; too low and you drown in them.)*

## Worked example (real — mba.csv)
On the 1,139 baskets, the strongest rules by lift come out as **multi-item bundles**, all around lift ≈ 2.0. The top one:

> **`{paper towels, pasta} → {eggs, ice cream}`** — support ≈ 0.055, confidence ≈ 0.34, **lift ≈ 2.0.**

Read it: these four items land in the same basket about **twice as often as chance** would predict. That's a real, actionable pattern. Notice the *shape* of the result — at scale, the interesting rules are combinations, not single items.

## Directing the AI — and where it actually slips
Here's the twist that makes this module different. We tested the local **code** model on this exact task, and the surprise was: **it writes the `apriori` code almost perfectly.** The call is *formulaic* — one standard function with a few parameters — so a small model handles it reliably. (That's the mirror image of regression, where the free-form code had lots of errors. Fewer choices, fewer mistakes.)

So the code isn't where you catch it. **The interpretation is.** And there's one more wrinkle: in testing, the AI *skipped* interpreting the rules unless we explicitly asked — so we ask for both:
```r
chat$chat("...write the apriori pipeline..., show the top rules by lift, AND interpret the top 3 rules for a
store manager — including any rule whose lift is below 1.")     # run on a machine with Ollama
```

## Verify the AI's interpretation (the real catch)
Now the heart of the lab. The AI is probabilistic, so don't memorize one mistake — verify by **type**, and lead with the **interpretive** checks:
- **Did it read lift < 1 as NEGATIVE?** This is the #1 catch. In our test run, when the AI met a rule with lift below 1, it called it *"low confidence — buying them together is possible but less likely than the other rules."* That's **wrong**: lift below 1 doesn't mean "weak positive," it means the items **repel.** Remember your yardstick — the basket's **`{milk} → {beer}` at lift 0.5** is exactly the kind of rule the AI fumbled. Hold the AI to what *you* computed.
- **Did it judge strength by lift, or lean on confidence?** The AI reached for the confidence number. A rule can have high confidence and a useless lift ≈ 1. Make it read the **lift.**
- **Support ↔ confidence?** Did it call one number by the other's name?
- *(Secondary — code checks, rarely the problem here:* right thresholds, `minlen = 2`, no made-up `arules` functions.)*

The move: pick one rule the AI surfaced, **re-compute its three measures by hand** (or on a subset), and check the AI's *words* against your *numbers*. Your by-hand yardstick is what turns "the AI sounded confident" into "the AI is wrong about this one."

## From verified rules to a decision
Use only what you verified. From the mba rules, the strong, sensible bundle — `{paper towels, pasta}` with `{eggs, ice cream}`, lift ≈ 2.0 — is worth acting on: place them near each other, bundle them, or add a "customers also bought" prompt. And the discipline cuts both ways: a rule with **lift < 1** is the *opposite* of a cross-sell — never co-locate items that repel. A good recommendation names the bundle, **cites the lift**, and says why.

## When / how to use it
- Set **support/confidence thresholds**, sort by **lift**, read the **top rules** — that's the workflow.
- Let the AI **write and interpret**, but **verify its interpretation** against your own measures before you act.
- Recommend **high-lift, sensible** rules; keep **lift < 1** pairs apart.

## Common mistakes / how to verify
- **Accepting the AI's read of a lift < 1 rule.** It tends to call it "weak" — it's **negative.** Catch it with your hand-computed lift.
- **Letting confidence stand in for lift.** High confidence + lift ≈ 1 = not actionable. Read the lift.
- **Acting on a rule you didn't verify.** Re-compute one rule's three numbers before you recommend anything.
- **Setting support so high you get zero rules** (or so low you get thousands) — tune it.

## Key takeaways
- `apriori` finds rules at scale; you **set thresholds, sort by lift, read the top rules.**
- The AI writes this **code reliably** — so the catch is its **interpretation**, especially reading **lift < 1** as "weak" instead of **negative** (your `{milk} → {beer}` = 0.5 trap).
- Verify by re-computing a rule by hand; recommend only **verified, high-lift** bundles.
- Same course lesson, every module: **the machine executes; you direct, verify, and decide.**
