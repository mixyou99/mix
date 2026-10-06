# A2 Slice Readiness — G1–G8 check · PHASE E STAGE 2

*Change log: Jun 18, 2026 — created. Verification record for the 8 A2 per-group slice files. **The slice data is
NOT modified or pre-cleaned** — Price blanks, ISO-date parsing, and outliers are *intended* Wk-5 student work
(G1/G5/G6). This check only verifies that each slice can SUPPORT the gates. Source: the 8
`A2/BUSS256_Group_Assignment_Datasets/Paid*.csv` (confirmed). Files copied byte-identical (md5-verified).*

---

## (a) The 8 slice files (naming confirmed) — in `03_final/production/`
**Naming: `BUSS256_A2_<Category>.csv`** — category kept in the filename so *you* can track them; **groups are
assigned by you at handout** (map Category→Group when teams form — the data doesn't bake in a group number).

| File | Source | Copy integrity |
|---|---|---|
| `BUSS256_A2_Books.csv` | PaidBooks.csv | md5 identical ✓ |
| `BUSS256_A2_Business.csv` | PaidBusiness.csv | md5 identical ✓ |
| `BUSS256_A2_Education.csv` | PaidEducation.csv | md5 identical ✓ |
| `BUSS256_A2_Finance.csv` | PaidFinance.csv | md5 identical ✓ |
| `BUSS256_A2_Games.csv` | PaidGames.csv | md5 identical ✓ |
| `BUSS256_A2_Medical.csv` | PaidMedical.csv | md5 identical ✓ |
| `BUSS256_A2_Music.csv` | PaidMusic.csv | md5 identical ✓ |
| `BUSS256_A2_Productivity.csv` | PaidProductivity.csv | md5 identical ✓ |

*(Each 299 rows × 17 cols. **N=8 default** = all 8 one-to-one. **N=7 fallback** = drop `BUSS256_A2_Games.csv`.)*

## (b) Per-slice G1–G8 readiness — ALL 8 PASS
| Slice | G1 | G2 | G3 | G4 | G5 | G6 | G7 | G8 |
|---|----|----|----|----|----|----|----|----|
| Books | P | P | P | P | P | P | P | P |
| Business | P | P | P | P | P | P | P | P |
| Education | P | P | P | P | P | P | P | P |
| Finance | P | P | P | P | P | P | P | P |
| **Games** | P | P | **P\*** | P | P | P | P | P |
| Medical | P | P | P | P | P | P | P | P |
| Music | P | P | P | P | P | P | P | P |
| Productivity | P | P | P | P | P | P | P | P |

What each gate was verified against:
- **G1 (cleanable):** 299 rows, all 17 columns present, key-field missingness manageable (Price blanks 0.7–4.7%).
- **G2 (transforms):** `Rank` is 1–299 with **no zeros/missing in any slice → `−log(Rank)` always defined**; `RatingsAllVersions` is a non-negative count → `log(x+1)` works (zeros included).
- **G3 (≥5 predictors w/ variation):** every slice has **≥6 usable predictors** (Price, Size, RatingsAllVersions, RatingsCurrentVersion, StarsAllVersions, StarsCurrentVersion). **\*Games note:** an early strict cutoff flagged Games, but on inspection Games has **6 usable predictors** (Price has 9 distinct price points — regression-usable; Size 295, Ratings 293 distinct). It **passes**; it simply has the *least price spread* of the eight (ties to the comparability note in (d)). `Screenshot` is low-variation (4–6 distinct) in **every** slice — a weak predictor everywhere, not a Games-specific issue.
- **G4 (within-slice dummy + baseline):** at least one viable option per slice — see (c).
- **G5 (new var / App Age):** `ReleaseDate` is **ISO-8601** (`2009-05-11T10:26:53Z`), parses cleanly → App Age = (1 Jan 2013 − ReleaseDate) is computable in every slice.
- **G6 (≥1 real outlier):** every slice has a heavy right-tail to handle — Price outliers (Education max 189.99, Medical 99.99) and/or Ratings outliers (Games max **818,330**; Music 56,013; Productivity 49,024).
- **G7 (summary + correlation):** ≥6 numeric variables with variation → both tables computable.
- **G8 (naming/format/interpretation):** well-formed; the brief's `BUSS256_A2_GXX.docx/.r/.csv` naming is feasible.

*(No FLAGs remain — the lone Games G3 flag was a threshold artifact, corrected to PASS above.)*

## (c) Recommended within-slice dummy (G4) per slice
**Default everywhere: release-year bins** (all slices span ~2008–2012, ISO dates parse) **or price tier.**
`TopInAppPurchases>0` is only healthy where the split isn't lopsided:

| Slice | IAP>0 share | Recommended G4 dummy |
|---|---|---|
| **Games** | **56%** | **`TopInAppPurchases>0`** (healthy split) — *or* release-year bins |
| Music | 14% | release-year bins **or** price tier (IAP too thin) |
| Business | 14% | release-year bins **or** price tier |
| Productivity | 9% | release-year bins **or** price tier |
| Finance | 9% | release-year bins **or** price tier |
| Books | 8% | release-year bins **or** price tier |
| Education | 6% | release-year bins **or** price tier (IAP thinnest) |
| Medical | 6% | release-year bins **or** price tier |

*(G4 explicitly allows all three; the student must **justify the baseline** — that justification is where G4
shades into the scored judgment ceiling per P-2 §0.)*

## (d) Independence + comparability
- **Independence: CONFIRMED — zero shared `AppId` across any pair of the 8 categories.** They are genuinely
  disjoint markets, so no two groups share rows. (Trivially true since they're different categories, but verified.)
- **Comparability:** 7 of 8 are tightly comparable (price medians 1.99–2.99, similar skews, similar structure).
  **Games is the outlier** — cheapest prices (least price variation), hugely popular (ratings max 818K vs ≤56K),
  IAP-heavy (56%). **If N=8 keeps Games**, tell that group its data is *different by design* — the in-app-purchase
  economics and extreme popularity skew are a **feature to analyze**, not a defect. **If N=7, drop Games**
  (confirmed) and the remaining 7 are highly comparable.

## (e) Data is NOT pre-cleaned — intended student work
Explicitly: I did **not** touch the data. The **Price blanks** (impute/drop — G1/G6), the **ISO `ReleaseDate`
parsing** (for App Age — G5), and the **rating/price outliers** (G6) are all left in place because *cleaning
them is the Wk-5 skill A2 assesses.* The readiness check confirms each gate is **reachable**; the student does
the reaching.

---

## Status
8 slices prepared and verified gate-ready in `03_final/production/`. **N=8 default (all 8); N=7 fallback drops
Games.** Awaiting your final roster (group count) to confirm which set ships. **Phase F (final sweep)** is the
last step.
