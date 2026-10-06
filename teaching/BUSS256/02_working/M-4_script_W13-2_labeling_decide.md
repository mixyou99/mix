# Spoken Script — W13-2: Naming the groups, and the AI that called a band a sports team

*Change log: Jun 18, 2026 — created (Stage 2-B part 2, script 4 of 4). Spoken companion to
`M-4_note_W13-2_labeling_decide.md`. Drafts only. Spoken register §5; locked playful tone; English. Live
code = validated lab code. AI step = code model (`_currency/clustering_llm.md`); OS cues →
`M-1_ollama_setup_guide.md`. NEUTRAL labels only. **Guard:** "let's see," then verify by type.*

---

**[1] Open — the hook**
- "Last clustering class, and it's the most *human* part of the whole thing. A cluster is just 'group number 3' until somebody gives it a meaning. Today you learn to name a group from its data — and you watch the AI confidently name a marching band a *sports team.* This is also, not coincidentally, exactly what the final exam asks. Let's go."

**[2] What makes a good label [click]**
- "A cluster center is the *average profile* of the group — which interests are high, which are low. Naming it means reading that profile and giving it a short, honest name. 'Group 3' means nothing to a marketer; 'the shopping-and-fashion segment' is something they can *act* on."
- "And the one rule: **the name has to be defensible from the numbers.** Call a group 'sports-focused'? Its center had better be high on basketball, football, soccer. If you can't point to the high numbers behind the name — the name's fiction. We use plain, **neutral, descriptive** labels — what the data actually shows."

**[3] Do it by hand first — read the centers [click, read on the board]**
- "Let's read our five real groups off their centers. [put them up] Group with church, god, jesus high — call it **faith and social.** Abercrombie, Hollister, shopping high — **appearance and shopping.** Marching, band, music high — that's **music and band.** A group high on kissed, drugs, drunk — neutrally, **at-risk or disengaged.** And the big group with nothing strongly high — the **low-engagement majority.** [point each time] See how every name points straight back to specific high numbers? That's the whole game. *That's* a defensible label."

**[4] CENTERPIECE — hand it to the AI [run live]**
- "Now the AI's turn. I'll give it the same centers you just read, and ask it to name the groups. It has the exact numbers you have. Let's see what it does."
- [run live — paste the centers, ask for labels]
- [read its answer] "Okay. Find the group that's high on **marching** and **band.** What did the AI call it? [point] ...In our testing: **'Sports Enthusiast.'** [pause — let it land] Marching *band.* Is that... sports?"
- [expect: "No! It's music!"] "It's **music!** A marching band is a music group! The AI read the *same centers you read* — marching, band, right there — and confidently called it a sports cluster. It also looked at a Hollister-and-Abercrombie group and called it 'E-commerce Savvy' — that's a *fashion* group, not an online-shopping one. The names *sound* professional. They're just... wrong."
- "And it gets better. In another run, it didn't even read the centers — it just *invented* a tidy list of names. 'Reading Fanatic,' 'Artisan,' stuff with **zero connection** to the actual data — while its own code literally said 'inspect the centroids.' It said to look at the numbers, and then didn't. Pure confident fiction."
- "So the move — same both times — is the easiest thing in the world and the most important: **read the group's real high interests, and ask, 'does this name fit?'** Marching and band high? Then 'Sports Enthusiast' is wrong, no matter how sure it sounds. You hold the AI to the centers."
- [stochastic pivot] "[If this run's labels are actually fine — read one aloud and confirm against the centers: 'Check it — high on band, called it music. Good, this run nailed it. But you only *know* that because you read the centers yourself. In testing it called this same kind of group a sports team. Always check.']"

**[5] From verified labels to a decision [click]**
- "Naming's not the end — *deciding* is. Take the labels you **verified.** The appearance-and-shopping segment — high on fashion brands and the mall? Natural target for a clothing campaign on social. The music-and-band segment? Event and concert promotions. Name the segment, **cite its high center values**, pick a concrete message and channel. And never, ever, build a campaign on a label you didn't check — or you might market sneakers to a marching band."

**[6] The course thesis [click]**
- "Step all the way back. Across this module, the AI wrote the clustering code *beautifully* — standardized, seeded, all of it. Did the labor. And then it picked a K that wasn't there and called a band a sports team. Every decision that *mattered* — how many groups, what they mean, what to do — that was **you**, reading the real numbers. Same lesson as every module: **the machine executes; you direct, you verify, you decide.** That's the job AI can't take — because the AI's the part that needs checking."

**[7] Beginner reactions**
- [if "the AI's labels sounded totally reasonable to me"] → "That's the whole trap — they *always* sound reasonable. 'Sports Enthusiast' is a perfectly nice phrase. It's just attached to a band. Reasonable-sounding and correct are different things, and only the centers tell them apart."
- [if "isn't naming kind of subjective anyway?"] → "The name's a judgment, but it's not a free-for-all — it has to fit the numbers. 'Music' and 'sports' aren't both fine for a marching band. Subjective within the data's limits, not unlimited."
- [if "this felt easier than regression"] → "The mechanics were — but notice the lesson got *sharper*: the AI can be flawless on the code and still hand you a backwards conclusion with a straight face. That's the scariest kind of wrong, and now you catch it."

**[8] Close + recap**
- "Recap: name a cluster from its **centers**, and the name must be **justified by the data** — neutral and honest. The AI's great at the code and bad at the names — it misreads centers and invents labels. You catch it by **reading the real centers**, which is exactly what the final exam wants."
- "That's clustering — find the groups, read what they mean, catch an AI calling a band a sports team, and turn it into a real decision. You can do all of that now. Go be the person who reads the centers. Nicely done, all of you."
