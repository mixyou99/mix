# Spoken Script — W15-1: Finding structure, and catching the AI

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 3 of 4). Spoken companion to
`M-1_note_W15-1_structure_verify.md`. Drafts only. Spoken register §5; beginner-casual. Live-demo code =
validated code from note/lab. Real run: `llm_classify` was **noisy** (e.g., ID10 → "value", ID25 →
"staff") — use as the teaching beat; treat numbers as "our run," not eternal (`_currency`).*

---

**[1] Open — raise the stakes**
- "Last class we asked: are guests happy? Today we ask the better question a manager actually cares about: happy or unhappy *about what*? Cleanliness? Room size? Staff? And today you're going to catch the AI being confidently wrong — which, weirdly, is the best thing that can happen in this class."

**[2] Two ways to find the themes [click]**
- "There are two ways to sort reviews into topics. Way one, the classical way: let the *data* group itself. There's a method called a topic model — the name is LDA, don't worry about it — and the idea is just: words that keep showing up together probably belong to the same theme. You tell it 'find me 3 themes,' it hands back three bundles of words, and *you* name them."
- [run the light LDA from the note] "See — one bundle is all about size and space, one's about cleanliness, one's about location and breakfast. The computer found the bundles; I had to *read* them to name them. Keep that — the classical way makes you do the interpreting."

**[3] Way two — just tell the AI your categories [click]**
- "Way two: skip the guessing and tell the AI the exact boxes you care about. 'Sort each review into: cleanliness, room size, staff, location, or value.' One command — `llm_classify` — and it labels every review. [run it on the 25-sample]"
- "Feels like magic, right? It just... did it. So here's the question that should be forming in your head by now: should we trust it?"
- [expect, hopefully: "NO / check it!"] → "Listen to you. Two weeks ago you'd have said 'sure.' Now you say 'check it.' Good. Let's check it."

**[4] Catch it red-handed [click to the misclassifications]**
- "Watch. Real results from the run. Three the AI got wrong:"
- "**ID 25:** 'Room was comfortable, well lighted, well maintained by housekeeping *staff*.' The AI filed it under **staff**. But read it — it's a review *about the room*. The AI saw the word 'staff' and grabbed it. It anchored on a word instead of understanding the sentence."
- "**ID 10:** 'Our rooms were not ready, promised later.' The AI called it **value** — like it's about price. It's not. It's a service failure. Wrong box."
- "**ID 1:** the restaurant complaint — AI filed it under **cleanliness**. There's nothing about cleanliness in it. It basically guessed."
- [ask the room: "what do these mistakes have in common?"] → "It grabs a surface word and misses the real subject. It *sounded* confident every time. And it was wrong every time."

**[5] So how do professionals trust it? The gold standard [click]**
- "Here's the trick real analysts use, and it's the heart of today. You don't trust the AI on all 575 reviews. You take a small batch — say 20 — and you, the human, label them yourself first. Carefully. That's your *gold standard* — your answer key."
- "Then you run the AI on those same 20 and see how often it matches your key. [run the Verify #2 compare from the note] If it matches 19 out of 20, great, you can probably trust it on the rest. If it matches 12 out of 20 — like we just saw with sentiment — you do not let it loose on thousands of reviews unsupervised."
- "That's it. That's the professional move: **build a small answer key by hand, grade the AI against it, then decide.** You don't trust it because it sounds sure. You trust it because you *tested* it."

**[6] One more gotcha — it doesn't even agree with itself [click]**
- "Last thing, and it surprises everyone. This AI is a bit random. Run it twice on the same review, you can get two different answers. So we also check *reliability* — just run it a couple of times and see if it's stable. [run the repeat-run check]"
- "And a trap built right in: the software *remembers* its last answer to save time — it 'caches' it. So if you just re-run, it hands you the saved answer and looks perfectly stable — a lie. [show the `.cache = \"\"` line] We turn that off so the test is honest. If anyone ever shows you '100% stable,' first question: did you turn off the cache?"

**[7] Beginner reactions**
- [if someone says "if it's this wrong, the AI is useless"] → "Not useless — *unsupervised* it's risky. The exact same tool, checked against your gold standard, is genuinely useful and fast. The skill isn't 'use AI' or 'don't' — it's 'verify, then use.'"
- [if someone says "hand-labeling 20 is a lot of work"] → "Twenty, once, to safely automate hundreds? Best trade you'll ever make. And it's the part only a human can do."
- [if someone's classify output has a category you didn't list] → "Yep, it'll occasionally invent one. Check that every label is one you actually defined — another reason we verify."

**[8] Close + hook**
- "Recap: the data can group itself (and you name the themes), or you can hand the AI your boxes (and check that it used them right). Either way, the trust comes from a small gold standard you built by hand — and from remembering the AI is a little random, cache off."
- "Next class is the payoff: we turn all this into one clear recommendation for the hotel — and I'll show you when this whole AI dance is overkill and the simple word-count was enough all along. See you then."
