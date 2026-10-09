# BUSS256 M6-R5 — Source Authority Resolution

*Recorded 2026-10-09. Records the project-lead-locked decisions that followed the M6-R5 authority gate (verdict PASS-WITH-SCOPE-RESTRICTIONS). Governance only: no deck was built, no source mutated, nothing staged or committed.*

## 1. Precheck

- Worktree: `/Users/gunwoonglee/Documents/ChatGPT/BUSS256_2027_Worktree`
- Branch: `buss256/2027-refresh`
- HEAD at the gate audit: `00f29ff6b0b71b0358e5f1f10039a1fb1e76508a`
- Staged files: 0

## 2. Next lecture identity (LOCKED by project lead)

| Field | Value |
|---|---|
| Module | **M6-R5** (sequential label following M6-R4A) |
| Week | **Wk 4** |
| Seminar | **Seminar 5** |
| Topic | **Data Management I** |
| Governing evidence | `teaching/BUSS256/02_working/M-6_foundations_blueprint.md` §2 row D ("Wk 4: Data Management I"); `teaching/BUSS256/02_working/01_audit_report.md` §"Seminar 5 — Data Management I & II (Wk 4–5)" (names `Seminar 5_Lecture_Data_Management I_Updated.pdf`; F-13, F-14). The Seminar n = Wk n−1 pattern matches M6-R3 (Seminar 3 / Wk 2) and M6-R4A (Seminar 4 / Wk 3). |
| Note | No standalone Data Management II lecture exists. Wk 5 is the airbnb exercise plus A1, an in-class assessment. Both are outside this lecture's scope. |

## 3. Source authority

Source root: `/Volumes/Mixyou/Teaching_2025/Fall/BUSS256_BigData/Seminar 5_Data Management/`. The Teaching_2025 tree was relocated from Downloads to this volume; per `BUSS256_M6_R1_PASS2_1_CLOSURE_REPORT.md`, the professor confirmed the move.

**LOCAL_COMPUTED_DROPBOX_CONTENT_HASH:** computed locally using Dropbox's published content-hash algorithm; not a value reported by Dropbox. The local implementation reproduced the registered 0a Dropbox values for N16 and N12 exactly. N12 is a multi-block file. These Seminar 5 lecture files are not in the 0a source-identity register.

| Role | File | Size (bytes) | Modified | MD5 | SHA-256 | LOCAL_COMPUTED_DROPBOX_CONTENT_HASH |
|---|---|---:|---|---|---|---|
| **Distributed canonical** | `Seminar 5_Lecture_Data_Management I_Updated.pdf` (38 pages, 720 × 540 pt, 4:3) | 1666463 | 2025-10-21 19:24:53 | `f7b80f86c47424f7ec9e7544dfebb6ad` | `f63b458e02df427fc76f49e0a5af7f49285cb16d03cd96bcdbb23ec304fe59ee` | `d9ed2ce121dc3d68d3342edb6dbf2a89cad27795e004ddb2fa4f45c3bcff3929` |
| **Editable source** | `Seminar 5_Lecture_Data_Management I_Updated.pptx` (40 slides, 9144000 × 6858000 EMU, 4:3) | 2696053 | 2025-10-21 19:24:53 | `06fa49b0ac602bd5f072f17f69a516bc` | `5d0ba636a3563341d871f8c18a85aec4e8235046a89bc6a178d0e4c454680ff5` | `4e299fac46fea4cab99e024f53a3d7d355149862dffc6de7310ddb2c21569c78` |
| Superseded (metadata only; contents not compared) | `Seminar 5_Lecture_Data_Management I.pdf` (37 pages) | 1679554 | 2025-09-28 16:39:04 | `f01104dd65ea3282d75532c6b5a35d20` | `ecfdee9fda73b6bc90d88b8159e292448b83f5dfed0109eb68b07a8fd5325899` | `38662d5f6bfcadb1efb8cc3f6db07ae947a55b22f5405a5285b565e795c8768b` |
| Superseded (metadata only) | `Seminar 5_Lecture_Data_Management I.pptx` | 2549310 | 2025-09-28 16:38:48 | `d84b3d642e3be556fb1743e1c258ba30` | `d40eb405170cd03bd405631b50f7ff807b4927bc7d5a3c88ef3ff0b70138d910` | `2b0d7d26c6b0a309b5b9dd57c952cf418f231764baa95b807542c6c45a653e58` |
| Instructor-only (not opened) | `Seminar 5_Lecture_Data_Management I_InClass.pptx` | 2696002 | 2025-10-21 19:24:57 | `f97d8c0dc7935bd6b2b7362d6c579706` | `f248625d33d0020058aca99cabc5e45c7b88db1d846bbef62c5ed673e68b787b` | `256aad70490cc58ef5a63c499ca66eabd92385c3e926d83bb55b5a77d9b185fa` |
| Instructor-only (not opened) | `Seminar 5_Lecture_Data_Management I_InClass2.pptx` | 2608888 | 2025-10-21 19:24:53 | `a2265f5f586a55f3c54d4cdc02f4fa6f` | `ab71f06a9c0e2178199dfd08f7df59142bc2c535743cdb4594f350d7c91ff14d` | `df2e932acb24d708e09fd31dd53cfa695eda6e1b5acf51d76c6436fb54354ab4` |

- **Pairing evidence:** the `_Updated` PDF and PPTX share a timestamp, and the headings of PDF pages 1–38 match PPTX slides 3–40 in order. The PDF omits PPTX slides 1–2.
- **Hash discipline:** MD5, SHA-256, and LOCAL_COMPUTED_DROPBOX_CONTENT_HASH are each compared only within the same algorithm.

## 4. Safe lecture scope (LOCKED)

**Safe lecture authority: PPTX slides 3–37 and 40 (36 slides).** These correspond to PDF pages 1–35 and 38.

| Excluded PPTX slide | PDF page | Reason |
|---|---|---|
| 1 | — (not in PDF) | 2025 course schedule; term-specific logistics. |
| 2 | — (not in PDF) | 2025 in-class assignment score statistics. This is assessment-result data. During the gate audit it was seen only as minimal keyword context; it is not lecture content. |
| 38 | 36 | "Sample Questions". Assessment status unresolved; not read. |
| 39 | 37 | Image-only slide immediately after "Sample Questions". Status unresolved; not read. |

Also excluded from lecture authority:
- all InClass variants;
- all `Exercise/` contents;
- the scripts;
- exam and review files;
- `admission.csv`;
- the held import/export exercise;
- the held functions exercise;
- package material.

## 5. R4B and assessment boundary

- **M6-R4B = HOLD** (`docs/rounds/BUSS256_M6_R4B_HOLD_LEDGER.md`).
- The M-6 blueprint row D lists "import/export" and "descriptive-stats functions" for Wk 4. **The canonical lecture contains neither.** It has no R code, no import/export instruction, and no `admission.csv` reference. Those Wk 4 components therefore remain with the separately governed exercise track. The 2027 lecture is independently teachable without them.
- **HANDOFF-ASSESS-01 = DEFERRED.** Data Management I is likely assessment-relevant: the blueprint calls the M-6 ↔ midterm link "the tightest dependency in the course", and F-13 says the App Store dataset recurs in exams. So no substantive historical lecture skill may be removed without safe lecture or curriculum justification. Assessment alignment is reserved for an explicitly authorized check before assessment freeze.

## 6. Gate-audit exposure record

During the gate audit, an assessment-flag screen surfaced minimal keyword context:
- on PPTX slide 2: score-statistic labels and a class mean;
- on slide 38: the "Sample Questions" heading and about one line of context.

No item, answer, or protected-file content was read. The 11 protected assessment-sensitive files were not opened.

## 7. Integrity

- Source mutations: 0. The `_Updated` pair was read from scratchpad copies whose SHA-256 values match the source.
- Protected assessment files read: 0. Excluded slides re-read in this tranche: 0.
- M6-R4B contents read: 0.
- Web browsing: 0.
- Git staged: 0. Commit: 0. Push: 0.
