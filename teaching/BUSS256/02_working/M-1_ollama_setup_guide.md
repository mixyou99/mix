# M-1 — Pre-Class Setup: Run a Local AI Model on Your Laptop (DRAFT)

*Change log: Jun 18, 2026 — created (Stage 2-A). Student-facing **ungraded** pre-class setup activity.
Draft for professor review. Volatile values (model/package versions) live in
`_currency/tm_llm_tools.md`; the "Current values" box below is synced from it each term.*

> **This is ungraded prep — like the Week 2–3 warm-ups.** Do it **before** the text-mining class so
> installing doesn't eat our class time. Budget ~20–30 minutes. If you get stuck, see the
> troubleshooting section, then post on the LMS or come to office hours **before** class.

**Why:** in this module you'll run a small AI language model **on your own laptop** — no accounts, no
cost, and (after the one-time download) no internet needed. It stays private on your machine. You'll
drive it from R, alongside the classical text-mining tools.

---

## ⓘ Current values (synced from `_currency/tm_llm_tools.md` — instructor updates each term)
- **Model to download (M-1 text mining):** `llama3.2`  (small fallback if your laptop is tight on memory: `llama3.2:1b`)
- **Regression module (M-2) code model:** `qwen2.5-coder` — pull before Weeks 10–11 (see **Part 2b**).
- **R packages:** `mall`, `ellmer`, `tidytext`, `tidyverse`
- *(Exact version numbers and alternates are in the currency files.)*

---

## Part 1 — Install Ollama (the program that runs the model)

**macOS**
1. Go to **https://ollama.com/download/mac** and download the file.
2. Open it and drag the **Ollama** icon into your **Applications** folder.
3. Open **Ollama** once (from Applications) so it can finish setting up. You'll see a small llama icon in
   the menu bar — that means it's running.

**Windows**
1. Go to **https://ollama.com/download/windows** and download **OllamaSetup.exe**.
2. Run it. (No administrator rights needed.) When it finishes, Ollama runs in the system tray.

**Check it installed (both):** open **Terminal** (macOS) or **Command Prompt / PowerShell** (Windows) and type:
```
ollama --version
```
If it prints a version number, you're good.

## Part 2 — Download the model (one time, needs internet, ~2 GB)
In the same Terminal/Command Prompt:
```
ollama pull llama3.2
```
Wait for it to finish (it's a ~2 GB download — do this on good wifi, not in class). Then test it:
```
ollama run llama3.2
```
Type a question like `Say hello in one sentence.` and press Enter. To leave, type `/bye`.

## Part 2b — (Regression module, M-2 only) one extra model
*For the M-1 text-mining work you only need `llama3.2` above. When we reach the **regression module (Weeks
10–11)**, you'll also pull a small **code** model — it writes R code much better than the text model. Same
Terminal / Command Prompt, same command on macOS and Windows:*
```
ollama pull qwen2.5-coder
```
*This one is bigger (~4.4 GB) and uses more memory. **Low-RAM caveat:** on an 8 GB laptop, close other apps
when you use it; if it's still too slow, tell me and we'll switch to a smaller code model. **You don't need
this for M-1** — pull it before the regression module.*

## Part 3 — Install the R packages
Open **R** or **RStudio** and run:
```r
install.packages(c("mall", "ellmer", "tidytext", "tidyverse"))
```
(If asked to restart R or compile, say yes / allow it. Install can take a few minutes.)

## Part 4 — Confirm R can talk to the model (the "it works" check)
With the **Ollama app running**, run this in R. It should print a sentiment for each tiny example:
```r
library(mall)
library(ellmer)

chat <- chat_ollama(model = "llama3.2")   # connects to Ollama on your laptop
llm_use(chat)

data.frame(text = c("The room was spotless and the staff were lovely.",
                    "Tiny room, broken shower, never coming back.")) |>
  llm_sentiment(text)
```
*Status: this snippet uses the current `mall` + `ellmer` + Ollama interface (verified against the package
docs, Jun 2026) but was **not executed during drafting** — please run it once yourself; that's the point
of this check.* If you see a `.sentiment` column with `positive` / `negative`, **you're ready for class.**

---

## "It didn't work" — troubleshooting

| Symptom | Fix |
|---|---|
| `ollama: command not found` | Close and reopen Terminal/Command Prompt. On macOS, make sure you opened the Ollama app once. On Windows, restart the machine if it was just installed. |
| Model download is stuck or very slow | It's a ~2 GB download and needs internet — re-run `ollama pull llama3.2` on a stronger connection. |
| R error: **connection refused** / can't reach the model | The **Ollama app must be running** (look for the menu-bar/tray icon). If not, open it. Advanced: run `ollama serve` in a terminal. R connects to `http://localhost:11434` by default. |
| R error: **model not found** | You haven't downloaded it yet — run `ollama pull llama3.2`. Check what you have with `ollama list`. |
| Laptop is slow / runs out of memory | Use the smaller model: `ollama pull llama3.2:1b`, and in R set `chat_ollama(model = "llama3.2:1b")`. |
| `install.packages` fails | Update R to the latest version, then install the packages **one at a time** to see which one fails; post the error on the LMS. |

**Bring it working to class.** If anything above didn't work after trying the fixes, message me on the
LMS before class with a screenshot of the error.
