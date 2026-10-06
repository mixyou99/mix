# Lecture Note — W14-1: Text Mining Foundations (the verification yardstick)

*Change log: Jun 18, 2026 — created (Stage 2-B, note 1 of 4). Lecture-note DRAFT for professor review.
Spoken script comes in part 2. Markdown only (Production Policy).*

**Source-file map (production):** modernizes the classical-foundations portion of
`Seminar 12_Text Mining/Seminar 12_Text_Mining_Lecture.pdf/.pptx`; migrates `…/Seminar 12_Text_Mining_R_Code.r`
(`tm`/`gsub`) to **tidytext**. Pairs with `M-1_compare_verify_lab.md`. OS-dependent steps reference
`M-1_ollama_setup_guide.md` and `_shared_library/snippets/setwd_load_data.md` (not re-solved here).
**Model note:** no LLM in this session.

*(Note format follows STYLE_STANDARDS §6. Plain language, one idea per sentence; terms defined on first use.)*

---

## Learning objectives
By the end of this session you can:
1. Turn a pile of raw text into a tidy table of words you can count. → **algorithm literacy** (you see exactly how the method produces its output).
2. Read what a set of documents is "about" from word frequency, and explain why the most frequent words aren't always the most informative. → **data literacy**.
3. Use **TF-IDF** to surface the words that actually distinguish documents. → **algorithm + data literacy**.
4. Explain why this transparent, hand-checkable analysis is the **yardstick** we will measure an AI against next session. → **verification**.

## The big idea (study-from explanation)
Think of this whole module like learning to read a meter before you trust a smart sensor. Soon we'll let an AI read thousands of customer reviews for us. But you can only trust a tool whose answers you can check — and to check it, you need a simple method you fully understand. That method is classical text mining, and today we build it. It is not the "old way we're replacing"; it is the **ruler** we'll hold the AI up against.

A computer can't analyze a paragraph directly. We first turn text into data. The core move is **tokenization**: splitting text into individual words (called *tokens*). Once each word is a row in a table, counting becomes easy.

Two cleaning steps make the counts meaningful. **Stop words** — extremely common words like "the," "and," "was" — carry almost no topic information, so we remove them. And we lower-case everything so "Room" and "room" count as the same word.

Now we can count. But raw frequency has a trap: a word can be frequent simply because it's common *everywhere*, not because it matters. In hotel reviews, "room" appears in almost every review — true, but not insightful. **TF-IDF** (term frequency–inverse document frequency) fixes this. It rewards a word for appearing often *in a given review* (term frequency) but penalizes it for appearing in *many* reviews (that's the "inverse document frequency" part). The result: words that are distinctive to particular reviews float to the top, and ubiquitous words get damped down. You don't need the formula memorized; you need the intuition — **TF-IDF = "frequent here, but not everywhere."**

## Worked example (our real corpus)
We use `room_review.csv`: 575 real hotel-room reviews (a historical snapshot). *(Set your working directory and load the file using `_shared_library/snippets/setwd_load_data.md` — same code on macOS and Windows.)*

```r
library(tidyverse)
library(tidytext)

reviews <- read_csv("room_review.csv")        # columns: ID, Comments

# Tokenize + remove stop words
tidy <- reviews |>
  unnest_tokens(word, Comments) |>            # one word per row, lower-cased
  anti_join(stop_words, by = "word")          # drop "the", "and", ...

# What are these reviews about? (raw frequency)
tidy |> count(word, sort = TRUE) |> slice_head(n = 15)
```
On our corpus the top words are: **room, clean, small, rooms, hotel, bathroom, bed, good, comfortable, london, great, floor, breakfast, service, staff.** Read that like a human: guests are overwhelmingly talking about the **room itself — its cleanliness and its size.**

Now the more informative view:
```r
tidy |>
  count(ID, word) |>
  bind_tf_idf(word, ID, n) |>                 # adds tf, idf, tf_idf columns
  arrange(desc(tf_idf)) |>
  slice_head(n = 15)
```
TF-IDF keeps the same themes but pushes the *evaluative* words up — **clean, small, comfortable, large** — and damps the everywhere-word "room." That shift, from "what's mentioned" to "what distinguishes," is the point.

Write down your one-sentence read now: *"These reviews are mostly about ____."* You'll test it against the AI next session.

## When / how to use it
- **Frequency** answers "what is this corpus mostly about?" — a fast first look.
- **TF-IDF** answers "what makes these documents *different* from each other?" — better for finding themes, distinctive complaints, or signature vocabulary.
- Use this transparent pass **first, always** — before any AI — because it is reproducible and you can trace every number by hand.

## Common mistakes / how to verify
- **Trusting raw frequency alone.** "Room" tops the list but tells you little; check TF-IDF before concluding what matters.
- **Forgetting to remove stop words**, so "the/and/was" dominate. Verify by eyeballing your top-15 list — if it's full of glue words, the `anti_join` didn't run.
- **Tokenizer surprises.** Punctuation, numbers written oddly (our reviews contain "23,30 hours"), and contractions can split in ways you don't expect. Verify by inspecting a few tokenized rows: `tidy |> filter(ID == 1)`.
- The verification habit starts here: **read a couple of raw reviews and confirm the top terms actually reflect them.**

## Key takeaways
- Tokenize → remove stop words → count: that's the transparent core of text mining.
- Raw frequency = "what's mentioned"; **TF-IDF = "what's distinctive."**
- This classical pass is fully hand-checkable — which is exactly why it will be our **yardstick** for the AI. Next session, the AI reads the same reviews, and you check it against what you found today.
