# BUSS256 M6-R5 — Build Spec v1.3 Self-Check

**Status: DRAFT — INDEPENDENT ACCEPTANCE REQUIRED.** This is a self-check by the executing agent, which also authored the spec. It is not an independent verification.

*Recorded 2026-10-09.*

## A. Baseline Git and SHA evidence

| Item | Value |
|---|---|
| Repository | `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree` (linked worktree; main worktree at `…/ChatGPT/Lecture Materials` on `kmb689/deck-revision-2027s`) |
| Branch / HEAD | `buss256/2027-refresh` / `64b2cd8154241d0d626f2cd935db1167a1d8103c` |
| Upstream | Config is `origin` / `refs/heads/buss256/2027-refresh`, but no local remote-tracking ref is stored ("upstream … not stored as a remote-tracking branch"). Ahead/behind cannot be computed locally. Git state was not modified. |
| Pre-patch status | 9 protected untracked `work/` directories, plus the untracked M6-R5 records (build spec v1, v1.1, v1.2, the red-team record, the v1.2 targeted verification). Nothing staged. |
| Content spec v1.3 | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` ✓ (unchanged after the patch) |
| Blueprint v1.1 | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` ✓ (unchanged) |
| Build spec v1.2 | `55221b0683d3114542b4093a043381c27ae65257753555065b889a46641e4ec0` ✓ (unchanged) |

## B. Manifest rule verification

| Item | Value |
|---|---|
| Manifest | `~/Downloads/BUSS256_Session_Authority_Build_Manifest_LOCKED_v0.2.3.md`. It is not in the repository; it was found by filename search, then confirmed by hash. |
| SHA-256 | `d5734738e06afde34545c6c07b44c0b22e19ed3965f860869414131f77d37557` ✓ |
| Rule | §1 rule 3: "Deck bodies do **not** hard-code week/date/deadline/assessment percentage." Rule 2: S# and week/date are schedule-layer only. Rule 9: no historical dates or logistics by default. **Verified.** |

## C. TV-m1 to TV-m5 disposition

| ID | Disposition |
|---|---|
| TV-m1 | **APPLIED.** BS-I8. TABLE_FOCAL is exactly 20 pt bold, for S16_MATRIX value cells only; matrix header cells are TABLE, exactly 16 pt bold. Gate 7 part (3) checks per cell. No geometry or data change. |
| TV-m2 | **APPLIED WITH MODIFICATION.** Role CHART_LABEL is exactly 16 pt Arial for `S{nn}_XT_*` / `S{nn}_YT_*`. §6.2 adds a fail-closed inventory: unknown or unnamed shapes FAIL, with no default role or font (gate 7 part 1). |
| TV-m3 | **APPLIED.** BS-I9. 0 animations, 0 timing and 0 transitions deck-wide. REVEAL_ORDER is relabeled as pacing metadata on slides 6, 13, 14 and 24, and in §13. Gate 36 checks `p:timing`, animation and `p:transition` = 0, PDF = 29 pages, and all shapes present and not hidden. A residue scan for "on click", "Appear" and "(optional)" returns 0. |
| TV-m4 | **APPLIED (modified).** The §9.2 0.020 in minimum gap remains authoritative (it existed in v1.2). All 46 TIGHT boxes are retained and listed in §F. §16.1 defines MV ownership (an independent render reviewer; the professor has final authority), the artifact, pass criteria, evidence, failure format, and the STOP rule. No font size was changed. |
| TV-m5 | **APPLIED.** QA authority is the Blueprint §6.8 data. |

**TV-m5 correlations:**

| Panel | Data r | Coordinate r | \|Δ\| |
|---|---:|---:|---:|
| Strong positive | 0.9433887 | 0.9435445 | 0.0001558 |
| Near zero | 0.0718190 | 0.0718538 | 0.0000349 |
| Strong negative | −0.9442856 | −0.9444107 | 0.0001250 |
| Curved | 0.0000000 | 0.0000000 | 0 |

Every \|Δ\| is within the 0.002 tolerance (gate 22). Observations, points and labels are unchanged.

## D. F1 and F5 disposition

### F1 — Slide-1 schedule labels

**RESOLVED as an authorized exception** (`docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md`).

| Shape | Before | After |
|---|---|---|
| S01_META | "Seminar 5 · Week 4" | "UNDERSTAND · SUMMARIZE · PREPARE" |
| S01_COURSE | "BUSS256 · Spring 2027" | "BUSS256 · Introduction to Big Data Analytics and Interpretation" |

- IDs, geometry and roles are unchanged.
- Literal blueprint difference: 1. Authorized Slide-1 text exceptions: 2. Unauthorized drift: 0.
- **M6-R4A slide 1**, read from the actual production PPTX: it shows "SEMINAR 4" and "BUSS256 · Spring 2027".
- **M6-R1 slide 1:** "Seminar 2 — …" and "Spring 2027". This cross-deck pattern (CD-1) is recorded for the design-unification tranche; no other deck was modified.

### F5 — Slide-14 leader crossing table rules

**RESOLVED BY A BOUNDED PRODUCTION CORRECTION — PENDING INDEPENDENT ACCEPTANCE.**

**Old path (v1.2):** (8.000, 5.525) → (4.514, 5.525) → (4.514, 3.015).
- Its vertical run crossed **4 drawn row rules** at y 3.150, 3.700, 4.250 and 4.800.
- It also crossed the table's bottom edge at 5.350. That edge has no drawn outer border under §9.1, but the banded fill ends there.
- It ran through 4 rating cells (Mean, SD, Min, Max).

**Alternatives evaluated:**

| Route | Result |
|---|---|
| (i) Enter from above the table | Rejected: crosses the rating header cell and the 1.5 pt header rule |
| (ii) Run up the 0.070-in gap between the table's right edge (7.404) and S14_M1 (7.474), keeping callout positions | Rejected: 0.035 / 0.026 in clearances; it would hug the banded rows and separate M1 from its target cell |
| (iii) Any route from the lower callout to row 1 | Rejected: must cross S14_L1 or table rules, because L1 spans the whole channel between the table and the callouts |

**Adopted route:**
- The two callout **boxes swap vertical positions**:
  - S14_C2 group to (8.000, 2.050, 4.729, 1.650), level with its row-1 target;
  - S14_C1 group to (8.000, 3.900, 4.729, 2.500).
- Numbering, callout text, M1, M2, the table, and both targets are unchanged.

**New paths:**

| Leader | Path |
|---|---|
| S14_L2 | (8.000, 2.700) → (4.720, 2.700) → (4.621, 2.784), ending on M2's edge with a radial approach (distance to centre 0.140) |
| S14_L1 | (8.000, 4.100) → (7.754, 3.425), ending on M1's edge |

**Recomputed:**
- Drawn table borders crossed by L2: **0**. By L1: **0**.
- L1 × L2 intersection: none.
- L2 clearances: 0.081 below the header rule; 0.087 above the digit tops of "10" (x 7.077–7.324) and "8" (x 5.600–5.724).
- L1 to the C2 corner: 0.137.
- Full-slide collision scan: 0.
- The C1 text still fits (6 lines in 2.440).

**Remaining crossing (disclosed):** L2 passes through the interior of **one non-target cell**, featured × "Products with a value" (x 5.804–7.404), above its value. It terminates at the "2" marker inside the rating cell, so the reference stays unambiguous.

**For the reviewer:**
- The vertical order of the callout boxes is now 2 above 1.
- The swap moves slide-14 callout boxes. The tranche said "do not shift other slide content"; I treated the two callout boxes as part of the leader system under correction. **The reviewer must accept or reject this interpretation.** If it is rejected, F5 reverts to UNRESOLVED BLOCKER, with the v1.2 geometry in v1.2.
- Gates 18 and 38 are updated with the exact vertices.

## E. Slide-21 arithmetic evidence (build-only)

**Inputs:** Blueprint §6.4 values 44, 45, 46, 47, 48, 48, 49, 49, 50, 50, 50, 50, 51, 51, 52, 52, 53, 54, 55, 80. n = 20, including 80.

| Quantity | Value |
|---|---|
| mean | 51.2 |
| sample SD (ddof = 1) | 7.352765323 |
| lower bound | 29.141704 |
| upper bound | 73.258296 |
| z(80) | 3.916894 |
| max \|z\| of the other 19 values | 0.9792 |
| (population SD, for contrast only) | 7.166589 |

The 80 dot's left edge (11.195) lies beyond the upper threshold (10.028).

**Prior n = 10 objection:** RESOLVED — INCORRECT DATASET ASSUMPTION. The schematic is not the canonical 10-row table.

The metadata is added to §10, the slide-21 BUILD_METADATA line and gate 26. It is never on a slide or in notes; notes are identical to v1.2.

## F. Full TIGHT object inventory (46)

Spec-level model: needed height above 95% of the box height. Each still fits. All are nonblocking render risks owned by gates 11 and 37.

| # | Slide | Object | Lines | Need | Box h |
|---:|---:|---|---:|---:|---:|
| 1 | 2 | S02_Q | 2 | 0.940 | 0.950 |
| 2 | 5 | S05_CAPL | 2 | 0.720 | 0.720 |
| 3 | 6 | S06_FOOT | 2 | 0.793 | 0.800 |
| 4 | 7 | S07_DEF | 2 | 0.877 | 0.880 |
| 5 | 7 | S07_SIZE1 | 1 | 0.427 | 0.430 |
| 6 | 7 | S07_SIZE2 | 1 | 0.427 | 0.430 |
| 7 | 8 | S08_PTR | 1 | 0.390 | 0.400 |
| 8 | 9 | S09_HDR2 | 4 | 1.757 | 1.800 |
| 9 | 9 | S09_LIST2 | 5 | 2.227 | 2.250 |
| 10 | 11 | S11_KEY | 1 | 0.500 | 0.500 |
| 11 | 13 | S13_G1A | 2 | 0.793 | 0.800 |
| 12 | 13 | S13_G1B | 2 | 0.793 | 0.800 |
| 13 | 13 | S13_G2A | 1 | 0.427 | 0.430 |
| 14 | 13 | S13_G2B | 3 | 1.160 | 1.160 |
| 15 | 13 | S13_NART | 2 | 0.720 | 0.720 |
| 16 | 14 | S14_C2_T | 4 | 1.527 | 1.590 |
| 17 | 15 | S15_RULES | 7 | 2.960 | 3.000 |
| 18 | 15 | S15_CAP4 | 2 | 0.593 | 0.620 |
| 19 | 16 | S16_READ | 5 | 1.977 | 2.000 |
| 20 | 16 | S16_CAUT | 2 | 0.720 | 0.720 |
| 21 | 18 | S18_CAP | 1 | 0.390 | 0.400 |
| 22 | 18 | S18_OPTS | 3 | 1.327 | 1.350 |
| 23 | 18 | S18_KEY | 1 | 0.500 | 0.500 |
| 24 | 19 | S19_KEY | 1 | 0.500 | 0.500 |
| 25 | 21 | S21_DEF | 1 | 0.427 | 0.430 |
| 26 | 21 | S21_ROTT | 2 | 0.793 | 0.800 |
| 27 | 22 | S22_HEAD | 1 | 0.647 | 0.650 |
| 28 | 22 | S22_L_MAIN | 1 | 0.427 | 0.430 |
| 29 | 22 | S22_R_MAIN | 1 | 0.427 | 0.430 |
| 30 | 22 | S22_KEY | 1 | 0.500 | 0.500 |
| 31 | 23 | S23_KEY | 2 | 0.940 | 0.950 |
| 32 | 24 | S24_HDR_L | 1 | 0.463 | 0.470 |
| 33 | 24 | S24_DEF_L | 2 | 0.793 | 0.800 |
| 34 | 24 | S24_HDR_R | 1 | 0.463 | 0.470 |
| 35 | 24 | S24_MAPS | 2 | 0.793 | 0.800 |
| 36 | 24 | S24_MINI_CAP | 2 | 0.593 | 0.620 |
| 37 | 24 | S24_KEY | 1 | 0.500 | 0.500 |
| 38 | 26 | S26_KEY | 1 | 0.500 | 0.500 |
| 39 | 27 | S27_TEXT | 2 | 0.877 | 0.900 |
| 40 | 28 | S28_DIM | 4 | 1.527 | 1.530 |
| 41 | 28 | S28_MISS | 1 | 0.390 | 0.400 |
| 42 | 28 | S28_COST | 3 | 1.160 | 1.160 |
| 43 | 28 | S28_RC12T | 1 | 0.427 | 0.430 |
| 44 | 29 | S29_CAP | 1 | 0.390 | 0.400 |
| 45 | 29 | S29_CARD2_T | 4 | 1.610 | 1.620 |
| 46 | 29 | S29_PROMPT | 1 | 0.500 | 0.500 |

**Explicit narrow-gap review (no change made):**

| Slide | Gap | Detail | Status |
|---|---|---|---|
| 12 | 0.040 | S12_TR bottom 3.310 vs. the top of the $5 dot stack at 3.350. The 0.5 pt white dot outline, drawn half outside, reduces the effective gap to ≈ 0.0365. | ≥ the 0.020 rule ✓ |
| 16 | 0.030 | S16_READ bottom 6.100 vs. S16_CAUT top 6.130 (text-to-text); the CAUTION tag starts at 6.200 | Render-check |
| 21 | 0.020 | S21_DEF bottom 2.380 vs. the ±3 SD labels at 2.400 | Exactly at the §9.2 minimum; render-check |
| 10 | — | Dot clearance: fills 0.0104 apart (0.0954 − 0.085); white outlines ≈ 0.0035 apart | Not overlapping; render-check at 100% |
| 14 | — | L2 runs 0.081 / 0.087 between the header rule and the digits; L1 is 0.137 from the C2 corner; both end on marker edges | Render-check |

## G. 38-gate integrity

| Item | Result |
|---|---|
| Gates parsed from v1.3 §16 | **38**, numbered 1–38 contiguously |
| Classes | M 31 · HYBRID 3 (12, 31, 36) · MV 4 (11, 14, 35, 37) |
| Gates added or removed | 0 |
| Definitions updated | 5 (slide-1 strings and schedule regex), 7 (fail-closed inventory, CHART_LABEL, per-cell TABLE_FOCAL), 18 (L2 vertices, 0 border crossings, callout y), 22 (slide-15 r tolerance), 26 (slide-21 build-only recomputation), 36 (zero animation/timing/transition, 29 pages, all shapes present), 38 (L1/L2 endpoints) |
| MV gates | Executable only on a future build. §16.1 assigns them to an independent render reviewer. |

## H. Exact changed sections (v1.2 → v1.3)

| Section | Change |
|---|---|
| Header and status | Updated |
| §0.1 | New change log |
| §1 | Manifest and exception rows |
| §2 | Title; new BS-I7, BS-I8, BS-I9 |
| §4 | TABLE_FOCAL row; CHART_LABEL row |
| §6.1 | Transitions and animations rows |
| §6.2 | Fail-closed inventory |
| §9.2 | Tick-label role text |
| §10 | Slide-21 QA metadata |
| §11 Slide 1 | S01_META, S01_COURSE, QA line |
| §11 Slide 6 / 13 / 24 | REVEAL_ORDER label |
| §11 Slide 14 | C1/C2 group y values (6 rows), leader lines, REVEAL_ORDER, QA line |
| §11 Slide 15 | QA line |
| §11 Slide 21 | BUILD_METADATA line |
| §12 | Slide-14 row |
| §13 | Static note; slide-14 row |
| §16 | Gates 5, 7, 18, 22, 26, 36, 38; tally note; new §16.1 |
| §19 | Slide-15 correlation row; conformance statement |
| §20 | v1.3 integrity |
| Appendix C.15 | QA-authority note |

`diff` reports 41 hunks; all fall in the sections above.

**Unchanged:**
- Every other object row.
- Appendix T.
- All notes (verified identical to v1.2).
- Canonical data.
- 285 declared objects, 29 slides.

## I. Unauthorized drift count

| Measure | Count |
|---|---|
| UNAUTHORIZED_CONTENT_DRIFT | **0** |
| UNAUTHORIZED_BLUEPRINT_DRIFT | **0** |
| AUTHORIZED_SLIDE1_TEXT_EXCEPTIONS | **2** (1 literal blueprint string) |
| Slide-14 callout-box swap (F5) | A layout correction with no text or data change. It is not blueprint drift, because the blueprint does not specify callout placement. It still needs acceptance (§D). |

**Independent re-parse of v1.3** (new verifier, not the generator):

| Check | Result |
|---|---|
| Slides with object tables | 29 |
| Objects | 285 |
| Duplicate IDs | 0 |
| Title drift | 0 |
| Off-slide / safe-zone violations | 0 |
| Likely overflow | 0 |
| Role violations / unclassified | 0 |
| Secondary 18-pt objects | 14 |
| Primary below 20 / key below 24 | 0 |
| Dot overlaps | 0 |
| Predicted collisions | 0 |

## J. Remaining blockers and open items

| ID | Item | Status |
|---|---|---|
| F5 | Callout-swap interpretation | **Pending independent acceptance.** If rejected, F5 = UNRESOLVED BLOCKER. |
| F-N1 | Frozen speaker notes on slides 2 and 6 reference "Seminar 4" / "our seminars", an `S#`-type label (manifest §1 rule 2). Out of the Slide-1-only exception scope and not changed. | **OPEN — needs project-lead ruling** on whether rule 2 applies to student-visible notes |
| CD-1 | M6-R4A and M6-R1 production title slides carry seminar and semester labels | Deferred to the design-unification tranche |
| MV gates 11, 14, 35, 37 (and MV halves of 12, 31, 36) | Cannot be executed until a build exists | Future |

**Freeze recommendation:** none. Freeze is **not** recommended while F5 acceptance and F-N1 remain open.

## K. SHA-256 of new files

| File | SHA-256 |
|---|---|
| `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3.md` | `c063b691024b79c1229fb2f94a987e48e9bd62312fc1f573aeeadc48294c37cb` |
| `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` | `9e2e7c3f9156a6ab7dbec586451a86c97926922bb1db4f0d510c9a85a2073d32` |
| This self-check | Reported in the tranche response; a file cannot contain its own hash |

## L. Integrity

- No PPTX, PDF or PNG built. Content spec, blueprint, v1, v1.1 and v1.2: unchanged.
- Protected `work/` directories: untouched.
- No other deck modified.
- Assessment files read: 0. M6-R4B / `admission.csv` reads: 0. Web research: 0. The manifest was located on the local disk.
- Git: nothing staged, no commit, no push.
