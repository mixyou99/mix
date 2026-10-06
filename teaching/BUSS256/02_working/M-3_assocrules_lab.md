# M-3 — Hand-Compute → AI-Verify Association-Rules Lab (DRAFT)

*Change log: Jun 18, 2026 — created (Stage 2-A). In-class **ungraded formative** lab. Draft for professor
review. Spine: hand-first → AI-verify. Volatile values → `_currency/assocrules_llm.md`.*

> **Ungraded, in-class.** No points — practice. You compute support/confidence/lift **by hand** first (your
> yardstick), then direct a local AI to run the analysis at scale, then **check the AI against your own
> arithmetic.**
>
> **Code status.** The **hand-compute (Part A)** and the **classical `arules` numbers (Part B)** are real —
> verified by an equivalent computation on the actual data. The **AI-call code (`ellmer` chat)** was
> **validated on the instructor's machine** (`qwen2.5-coder`) — run it on yours with Ollama. **Finding:** the
> model writes the `apriori` code reliably, so **its slips are *interpretive*** — especially reading a
> **lift < 1** rule as merely "weak" instead of **negative**. That interpretation is what you hunt for.

**Data.** Hand-compute on a tiny **6-transaction basket** (below). Scale AI run on **`mba.csv`** (1,139
shopping baskets). *(Load files with `_shared_library/snippets/setwd_load_data.md` — same on macOS/Windows.
For the AI step, Ollama must be running with the code model — see `M-1_ollama_setup_guide.md`.)*

---

## Part A — HAND-FIRST: compute the three measures (your yardstick)

**The basket** (6 shopping trips):

| Trip | Items |
|---|---|
| T1 | bread, milk |
| T2 | bread, milk, eggs |
| T3 | beer, diapers |
| T4 | beer, diapers, bread |
| T5 | milk, eggs |
| T6 | bread, milk, beer, diapers |

**The three measures** (this is the whole toolkit — they're just fractions):
- **Support**(items) = (# trips containing all those items) ÷ (total trips). *How common is this combo?*
- **Confidence**(LHS → RHS) = Support(LHS and RHS together) ÷ Support(LHS). *When LHS is bought, how often is RHS too?*
- **Lift**(LHS → RHS) = Confidence ÷ Support(RHS). **> 1 = positive (bought together more than chance); = 1 = independent; < 1 = negative (bought together *less* than chance).**

**Compute these three rules by hand** (write your answers, then check Part-A of the solution):
1. `{diapers} → {beer}`
2. `{bread} → {milk}`
3. `{milk} → {beer}`

*(N = 6. Hint: count trips, then divide. Pay attention to which rule has lift below 1 — that one matters.)*
These hand answers are your **yardstick** for the rest of the lab.

## Part B — CLASSICAL: run apriori at scale (mba.csv)
```r
library(arules)
mba <- read.transactions("mba.csv", sep = ",")     # each row = one basket
summary(mba)
itemFrequencyPlot(mba, topN = 15)                  # the 15 most-bought items

# These baskets are dense (~14 items each), so we use a higher support floor than the groceries demo:
rules <- apriori(mba, parameter = list(support = 0.05, confidence = 0.25, minlen = 2))
inspect(sort(rules, by = "lift")[1:8])             # the 8 strongest rules by lift
```
*Expected (real):* the top rule is about **`{paper towels, pasta} → {eggs, ice cream}` with lift ≈ 2.0**
(support ≈ 0.055, confidence ≈ 0.34), and the next several also sit around lift ≈ 1.9–2.0. Note the *type*
of result: in this data the strong rules are **multi-item bundles**, not single items.

## Part C — AI STEP: direct the model to build AND interpret
*The code model is validated to write the `apriori` pipeline well — so the interesting part is the
**interpretation**. (In testing it skipped interpretation unless asked, so we ask for it explicitly.)*
```r
library(ellmer)
chat <- chat_ollama(model = MODEL,       # MODEL = code model qwen2.5-coder → _currency/assocrules_llm.md   # validated (M-2); run on a machine with Ollama
  system_prompt = "You are an R tutor for beginners. Reply in English only. Concise runnable base-R + one line. Use the arules package. Do not confuse support with confidence.")

# Ask for BOTH the pipeline AND an interpretation of the top rules        # run on a machine with Ollama
chat$chat("Using the transactions object mba (from read.transactions), write R with the arules package to
find rules with support >= 0.05 and confidence >= 0.25, at least 2 items, show the top rules by lift, AND
interpret the top 3 rules for a store manager — including any rule whose lift is below 1.")
```

## Part D — VERIFY: check the AI's INTERPRETATION against your yardstick
The code model usually gets the `apriori` *code* right — so the real catch is in how it **interprets** the
rules. **Lead with the interpretive checks**, then the code checks:

| Check (interpretive — **primary**) | What to look for |
|---|---|
| **lift < 1 read as NEGATIVE?** | If a rule's **lift is below 1**, did the AI call it a **negative** association (the items *repel*) — or did it wrongly call it "weak" / "less likely but possible"? **This is the #1 catch.** Your basket's `{milk} => {beer}` (lift **0.5**) is the built-in trap — and it's *exactly* the rule the model misread in testing. |
| **lift, not confidence?** | Did it judge a rule's *strength* by **lift** — or lean on **confidence**? (A high-confidence rule can be useless if its lift ≈ 1.) |
| **support ↔ confidence** | Did it call the confidence number "support," or vice versa? (The classic mix-up.) |
| **rule direction** | Did it flip LHS → RHS? (confidence is not symmetric; lift is.) |

| Check (code — **secondary**, less common) | What to look for |
|---|---|
| **parameters** | support ≥ 0.05, confidence ≥ 0.25, `minlen = 2`? (Too-high support → *zero* rules.) |
| **hallucinated functions** | any made-up or misused `arules` function? |

Then **hand-check one rule** (support, confidence, lift) against the data and confirm the AI's numbers.
Write one line: *did the AI read **lift** correctly — especially any rule with lift below 1?*

## Part E — DECIDE: from verified rules to a merchandising action
Using only the rules you **verified**, write 2–3 sentences: which item bundle should the store act on, and
how (place together? bundle promo? "customers also bought"?). Justify it with the **lift** (a high-lift,
sensible rule is actionable; a **lift < 1** rule is the opposite of a cross-sell — those items repel).

## Reflection (1–2 sentences)
Where did the AI get a measure or an interpretation wrong, and how did your by-hand computation catch it?

---
*Companion: `M-3_assocrules_lab_SOLUTION.md`. Setup: `M-1_ollama_setup_guide.md`. Tools:
`_currency/assocrules_llm.md`.*
