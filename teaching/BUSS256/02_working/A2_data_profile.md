# A2 Data Profile — per-group slice viability · PHASE E STAGE 1 (PROFILE ONLY)

*Change log: Jun 18, 2026 — created. Profiling summary for the A2 per-group data slices. **No CSVs cut.**
Authority: P-2 (Scheme 1 — one category per group; within-slice dummy for G4), the G1–G8 gates, GRADING_POLICY §D
(unique inputs per group). Profiled on the real data (latin-1; Jan-2013 collection date).*

---

## ⚠ SOURCE DISCREPANCY — flagged, not silently resolved (per charter)
Your instruction said *"load `07192013Apps.csv`."* That file is the **M-2 regression *rehearsal* dataset** —
**5 categories × 300 rows** (Business, Finance, Games, Health, Utilities; the file with the 5 dummy columns).
It is **not** the A2 group-slice source.

**The actual A2 slices come from a different, dedicated dataset** that P-2 names: `A2/BUSS256_Group_Assignment_
Datasets/Paid*.csv` — **8 per-category files, 299 rows each, 17 columns**, a *different schema* from the
rehearsal file. **The slices already exist as files** (Books, Business, Education, Finance, Games, Medical,
Music, Productivity), so "cutting" = **select / copy / rename + verify**, not partition `07192013Apps.csv`.

I profiled the **correct source (the 8 `Paid*.csv`)**. If you intended the 5-category rehearsal file instead,
say so — but it only yields 5 slices (short of 7–8 groups) and lacks the richer A2 schema, so the `Paid*.csv`
folder is almost certainly right. *(Both files are dated-historical July-2013 per F-13.)*

---

## 1. Dataset structure + the A2 variables each gate needs
**`Paid<Category>.csv`** (17 columns, 299 data rows each):
`AppId, Rank, Name, ReleaseDate, Category, Price, Seller, Developer, Screenshot, Size, StarsAllVersions,
RatingsAllVersions, StarsCurrentVersion, RatingsCurrentVersion, Version, UpdatedDate, TopInAppPurchases`

| A2 pipeline need | Column(s) | State |
|---|---|---|
| **Sales = −log(Rank)** (outcome) | `Rank` | **1–299, no zeros, no missing** in every slice → `−log(Rank)` is always defined ✓ |
| **≥1 log-normalized var** (`log(x+1)`) | `RatingsAllVersions` (count) | right-skewed counts (some 0s; `log(x+1)` handles them) ✓ |
| **Price predictor** | `Price` | numeric; a few **blanks** (missing) per slice — cleaning need, see §5 |
| **Other predictors (≥5, G3)** | `Screenshot`, `StarsAllVersions`/`StarsCurrentVersion`, `RatingsCurrentVersion`, `Size` | present; ≥5 predictors easily available ✓ |
| **Within-slice dummy + baseline (G4)** | `ReleaseDate` (year bins), `Price` (tiers), or `TopInAppPurchases`>0 | viable — see §4 note |
| **New variable (G5)** e.g. App Age | `ReleaseDate` (ISO-8601 `2009-05-11T10:26:53Z`) − collection date (1 Jan 2013) | **parseable** → App Age works ✓ |
| **Outlier handling (G6)** | `Price`, `RatingsAllVersions` | ample outliers (see §2) ✓ |

*(Note: this schema differs from the rehearsal file — there `Rating_Num`/`Rating_Score`; here
`RatingsAllVersions`/`StarsAllVersions`. The M-2 lab teaches the same pipeline on the rehearsal file; students
re-apply it to their A2 slice's column names — an intended transfer step.)*

## 2. Per-category health read (all 8 slices)
| Slice | Rows | Price med | Price max | Price miss | Rank | Ratings med | Ratings **max** | Stars miss | TopIAP>0 |
|---|---|---|---|---|---|---|---|---|---|
| **Books** | 299 | 1.99 | 39.99 | 10 | 1–299 | 87 | 31,660 | 0 | 24 |
| **Business** | 299 | 2.99 | 29.99 | 2 | 1–299 | 119 | 11,354 | 0 | 41 |
| **Education** | 299 | 1.99 | **189.99** | 5 | 1–299 | 141 | 36,606 | 0 | 17 |
| **Finance** | 299 | 1.99 | 29.99 | 6 | 1–299 | 122 | 9,725 | 0 | 26 |
| **Games** | 299 | **0.99** | 8.99 | 8 | 1–299 | **5,936** | **818,330** | 1 | **168** |
| **Medical** | 299 | 2.99 | 99.99 | 8 | 1–299 | 52 | 5,524 | 1 | 17 |
| **Music** | 299 | 1.99 | 24.99 | 12 | 1–299 | 189 | 56,013 | 1 | 43 |
| **Productivity** | 299 | 2.99 | 19.99 | 14 | 1–299 | 266 | 49,024 | 1 | 27 |

**Universal positives:** every slice has 299 rows (≫100), a clean 1–299 `Rank` (no zeros/missing → `−log(Rank)`
always works), parseable ISO dates (App Age G5), strong right-skew in ratings (motivates `log(x+1)`), and price
variation. **No slice is too small or degenerate.**

## 3. Flags (none gate-breaking, but worth your eyes)
- **Games is the comparability outlier.** Cheapest prices (0.99–8.99, little price spread), hugely popular
  (ratings median 5,936; **max 818,330** vs ≤56K elsewhere), and 56% have in-app purchases (168/299). It's
  *viable and pedagogically rich* (best skew for log-transform, best dummy split), but a Games group works a
  **noticeably different** dataset than the others. → bears on the N=7 choice (§4).
- **Thin `TopInAppPurchases>0` dummy for Education & Medical** (17/299 ≈ 6%). Usable but imbalanced; for those
  slices recommend the **release-year-bins or price-tier** dummy for G4 instead (G4 explicitly allows all three).
- **Price missing values: 2–14 per slice** (0.7%–4.7%) — *intended* cleaning work (G1/G6), not a break.
- **Medical** has the smallest ratings spread (max 5,524) — least dramatic skew, so the least "showy" for the
  log-transform lesson, but still fine.

## 4. Proposed slices for 7–8 groups (your N decision)
**All 8 slices are viable**, so:
- **N = 8 (recommended if you have 8 groups):** assign **all 8** categories one-to-one — Books, Business,
  Education, Finance, Games, Medical, Music, Productivity. Each group gets a distinct real market; Games is the
  one "different-feeling" slice (flag it to that group as a feature, not a bug — in-app-purchase economics).
- **N = 7:** drop **one** category. Two defensible options:
  - **(a) Drop Games (recommended for max comparability):** the remaining 7 (Books, Business, Education,
    Finance, Medical, Music, Productivity) are tightly comparable — price medians 1.99–2.99, similar rating
    skews, similar structure. No group gets an oddball dataset.
  - **(b) Keep Games, drop Medical:** if you *want* the in-app-purchase richness in play; Medical is the least
    skewed/most modest slice, so dropping it costs least. (Slightly less comparable than (a) because Games stays.)
- **No splitting needed** at N=7–8 (each group keeps a full 299-row category). P-2's "split one category by
  median ReleaseDate" only applies at **N=9** (would make ~150-row halves — the §5 thin-slice risk). Not relevant here.

*Default G4 dummy recommendation (for the brief):* **release-year bins** (every slice spans ~2008–2012, ISO
dates parse cleanly) or **price tier** — both work in all 8; `TopInAppPurchases>0` only where the split is
healthy (great for Games/Business/Music, thin for Education/Medical).

## 5. Data-quality issues students will hit (intended Wk-5 work) — none break a gate
- **Price blanks (2–14/slice)** → impute or drop; needed for a clean regression (G1) and is itself a G6-style decision.
- **Ratings right-skew + big outliers** (esp. Games 818K) → exactly why the pipeline applies `log(x+1)` (G2) and
  why G6 outlier handling has something to bite on. Intended.
- **ReleaseDate is ISO-8601 with a time/Z suffix** → students must parse it (take the date/year) to build
  **App Age (G5)** and **release-year bins (G4)**. A real parsing step, not a break.
- **A handful of `StarsAllVersions` blanks** (0–1/slice, apps with no ratings) → trivial.
- **Gate check:** every required gate (G1 clean · G2 −log(Rank)+log var · G3 ≥5 predictors · G4 within-slice
  dummy · G5 App Age · G6 outliers · G7 summary/corr tables · G8 naming) is **satisfiable on all 8 slices**.
  Nothing observed would fail a gate outright.

---

## What I need from you before Stage 2 (the actual cut)
1. **Confirm the source:** the **8 `Paid*.csv`** files (not the 5-category rehearsal `07192013Apps.csv`)?
2. **Confirm N (7 or 8)** and, if 7, which option — **(a) drop Games** *(recommended)* or **(b) drop Medical**.
3. On confirmation I'll **copy/rename** the chosen slices to neutral per-group files (e.g.,
   `BUSS256_A2_G01_<Category>.csv` …) in `03_final/production/` and run the **per-slice G1–G8 readiness check**
   (a script that confirms, for each cut file: `−log(Rank)` defined, a log-able count, ≥5 usable predictors, a
   viable baseline dummy, App-Age computable, ≥1 outlier to handle, summary/corr computable). **No cut until you confirm.**
