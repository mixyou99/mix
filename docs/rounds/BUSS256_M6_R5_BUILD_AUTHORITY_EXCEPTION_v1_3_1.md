# BUSS256 M6-R5 — Build Authority Exception, Supplement v1.3.1

**Status: DRAFT — INDEPENDENT TARGETED VERIFICATION REQUIRED**

*Recorded 2026-10-10. This record supplements `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md`, which remains unchanged. It documents the project-lead decisions applied in build spec v1.3.1. It does not edit the content spec, the blueprint, the locked manifest, or any earlier build spec or record.*

## 1. Authority hash lineage (E)

| # | Artifact | Path | SHA-256 | State |
|---|---|---|---|---|
| 1 | Locked manifest v0.2.3 | `~/Downloads/BUSS256_Session_Authority_Build_Manifest_LOCKED_v0.2.3.md` (outside the repository) | `d5734738e06afde34545c6c07b44c0b22e19ed3965f860869414131f77d37557` | Unchanged |
| 2 | Content spec v1.3 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_CONTENT_SPEC_v1_3.md` | `5a74b3f12748eb8d0099c1d11125ae883ad20f49f44d33b39238d819f9a5b042` | Unchanged |
| 3 | Production blueprint v1.1 (frozen) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PRODUCTION_BLUEPRINT_v1_1.md` | `75e686d257574239f917bfef3ad65dea3d3f05ac40456ed1ae4886c88f7e1530` | Unchanged |
| 4 | Build spec v1.2 | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_2.md` | `55221b0683d3114542b4093a043381c27ae65257753555065b889a46641e4ec0` | Preserved |
| 5 | Build spec v1.3 (canonical input) | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3.md` | `c063b691024b79c1229fb2f94a987e48e9bd62312fc1f573aeeadc48294c37cb` | Preserved |
| 6 | v1.3 authority exception (Slide 1) | `docs/rounds/BUSS256_M6_R5_BUILD_AUTHORITY_EXCEPTION.md` | `9e2e7c3f9156a6ab7dbec586451a86c97926922bb1db4f0d510c9a85a2073d32` | Preserved |
| 7 | v1.3 self-check | `docs/rounds/BUSS256_M6_R5_BUILD_SPEC_v1_3_SELF_CHECK.md` | `819e2c55c90e915e69d097486ba02a93798b7b3d1c3355e48a6a8980d10f90bd` | Preserved |
| 8 | **Build spec v1.3.1 (this patch)** | `teaching/BUSS256/02_working/M6_R5/BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_1.md` | `ac44fb1bc9ba565a9ca25c8022072ab3324a917aefc53c493a5455d29c4bb48d` | DRAFT |

Base for v1.3.1 = artifact 5 (verified by hash before patching). The Downloads file `BUSS256_M6_R5_PPTX_BUILD_SPEC_v1_3_CANDIDATE.md` is **not** an authority and was not used.

## 2. Authorization

| Item | Value |
|---|---|
| Source | Project-lead tranche "BUSS256 M6-R5 — v1.3.1 FINAL BOUNDED PATCH" (2026-10-10). Decisions marked final. The professor retains final authority. |
| Scope | Exactly items A, B and C below. Nothing else in v1.3 is changed. |

## 3. A. Slide-14 geometry correction (bounded implementation correction)

**Decision:** adopt alternative B; reject the v1.3 callout swap. Callout 1 on top, callout 2 below. This is a geometry-only correction. No text, data, numbering or teaching sequence changes.

| Object | v1.3 (rejected) | v1.3.1 | Equal to v1.2 |
|---|---|---|---|
| S14_C1 (x, y, w, h) | 8.000, 3.900, 4.729, 2.500 | 8.000, **2.050**, 4.729, 2.500 | Yes |
| S14_C1_M | 8.080, 3.980 | 8.080, 2.130 | Yes |
| S14_C1_T | 8.420, 3.930 | 8.420, 2.080 | Yes |
| S14_C2 (x, y, w, h) | 8.000, 2.050, 4.729, 1.650 | 8.000, **4.700**, 4.729, 1.650 | Yes |
| S14_C2_M | 8.080, 2.130 | 8.080, 4.780 | Yes |
| S14_C2_T | 8.420, 2.080 | 8.420, 4.730 | Yes |
| S14_M1 | 7.474, 3.285 | **7.600**, 3.285 | No (new x) |
| S14_M2 | 4.374, 2.735 | 4.374, 2.735 | Yes (unchanged) |
| S14_L1 | (8.000, 4.100) → (7.754, 3.425) | (8.000, 3.425) → (7.880, 3.425) | No (new path) |
| S14_L2 | (8.000, 2.700) → (4.720, 2.700) → (4.621, 2.784) | (8.000, 5.000) → (7.502, 5.000) → (7.502, 2.700) → (4.720, 2.700) → (4.621, 2.784) | No (new path) |

**Unchanged:** S14_TABLE and its cells; callout wording; the M2 target cell (rating × "Products with a value"); speaker note; slide title, labels and position cue; all other slides.

**Geometric safety:** every required condition passed when recomputed independently from the written v1.3.1 file. Details are in the self-check record §2. Summary:
- 0 drawn-rule crossings;
- L1 and L2 do not intersect;
- no callout-box or marker-interior penetration;
- both leaders attach at the marker edge;
- M2 lies inside its target cell;
- the vertical run clears the table edge and M1 by 0.0893 in each side (stroke edge to bounding edge).

**Gate definitions updated:** 17, 18, 38, and the §16.1 gate-37 row. The gate count stays at 38.

## 4. B. Slide-2 note exception (NX-2)

| Field | Value |
|---|---|
| Frozen source | Blueprint v1.1, Slide 2 SPEAKER_NOTES (blueprint line 110) |
| Original | "This is the order of the analysis workflow, not the order of our seminars. You chose techniques in Seminar 4; today asks what must be true of the data first." |
| Replacement | "This is the order of the analysis workflow, not the order of our class sessions. The earlier analytics-technique lecture focused on choosing methods; today asks what must be true of the data first." |
| Rationale | Removes the seminar-number reference (schedule-layer; locked manifest §1 rules 2 and 3) while keeping the cross-lecture teaching reference. Notes are assumed student-visible. |
| Nature | Schedule-independent rewording of an existing reference. No new content. |
| Literal blueprint identity | **Not claimed.** v1.3.1 labels this note "authorized note exception NX-2; NOT blueprint-verbatim". |

## 5. C. Slide-6 note exception (NX-6)

| Field | Value |
|---|---|
| Frozen source | Blueprint v1.1, Slide 6 SPEAKER_NOTES (blueprint line 197) |
| Original | "Recall from Seminar 4 that category codes need interpretation; today we name the types." |
| Replacement | "Recall from the earlier analytics-technique lecture that category codes need interpretation; today we name the types." |
| Rationale | As for NX-2 |
| Nature | Schedule-independent rewording. No new content. |
| Literal blueprint identity | **Not claimed** (labelled NX-6 in v1.3.1) |

**Corrected reference:** an earlier directive called the first note "slide 3". The note is on **slide 2**, confirmed by the project lead.

**Enforcement:** gate 34 (NOTES_PRESENCE) now requires:
- slides 2 and 6 equal the NX strings;
- 0 whole-word matches for `seminar` in any notes body.

All other notes stay blueprint-verbatim (27 notes bodies checked unchanged).

## 6. D. Preserved Slide-1 exceptions

The v1.3 exception (artifact 6) is carried unchanged:

| Shape | Blueprint / v1.2 string | v1.3 and v1.3.1 string |
|---|---|---|
| S01_META | "Seminar 5 · Week 4" (literal blueprint string) | "UNDERSTAND · SUMMARIZE · PREPARE" |
| S01_COURSE | "BUSS256 · Spring 2027" (spec rendering of the blueprint's "course line") | "BUSS256 · Introduction to Big Data Analytics and Interpretation" |

Gate 5 is unchanged.

## 7. F. Authorized versus unauthorized drift

| Category | Count | Items |
|---|---|---|
| Authorized blueprint text deviations | **4** | S01_META, S01_COURSE (v1.3), NX-2, NX-6 (v1.3.1) |
| of which literal blueprint strings no longer reproduced | 3 | "Seminar 5 · Week 4"; slide-2 note; slide-6 note |
| Authorized implementation corrections (geometry only) | 1 | Slide 14 (alternative B) |
| UNAUTHORIZED_BLUEPRINT_DRIFT | **0** | — |
| UNAUTHORIZED_CONTENT_DRIFT | **0** | Content spec v1.3 contains no speaker notes. All visible slide text is unchanged from v1.3. |

## 8. Integrity

- Content spec v1.3, blueprint v1.1 and the locked manifest are unchanged (hashes in §1).
- Build specs v1, v1.1, v1.2 and v1.3, the v1.3 exception, the v1.3 self-check, the red-team record and the v1.2 verification record are all unmodified.
- No PPTX, PDF or PNG was built. Assessment reads: 0. M6-R4B reads: 0. `admission.csv` reads: 0. Web research: 0.
- The nine untracked `work/` directories were not touched.
- Git: nothing staged, committed or pushed.
