# BUSS256 M6-R1 — Pass 1 Report

*Change log: Oct 6, 2026 — created. Content-first pass on the Seminar 2 / Data Science foundations deck. No PPTX built; nothing staged or committed.*

## Baseline and identity

- **N12 exact path:** `/Users/gunwoonglee/Downloads/Teaching_2025/Fall/BUSS256_BigData/Seminar 2_Data Science/Seminar 2_Lecture_Data Science_InClass_25F_2.ppt`
- **Identity evidence used:** 0a `SOURCE_IDENTITY_PROPOSAL.md` row N12 (Gate 3 PASS; "REGISTER — M6-R1 editable baseline by professor decision") and `M6_R1_BASELINE_EVIDENCE.md` (53 slides). Re-measured before reading: size 4,674,560 bytes = register; MD5 `992a2cf05bc63ed4419e9266055918f8` = register; Dropbox content_hash `4f572f1fe3619d7b38385c6fe5314cd8630c787a0510cd7e69691117af608026` = register. (The register's hash column is the Dropbox content_hash, not plain SHA-256.)
- **Extraction:** no LibreOffice/python-pptx on this Mac. Used the 0a run's LibreOffice conversion of N12 (copied to `work/m6_r1_extract/N12_converted_by_0a.pptx`), parsed with the Python standard library, and cross-checked every extracted paragraph against the bytes of the original `.ppt` (309 of 314 matched directly; 5 had split strings, token-level match 14/16). Image-only slides were inspected by viewing the extracted media. Limits: notes, animations and layout not reviewed; the extraction is a LibreOffice conversion, not a native PowerPoint parse.
- **Slide count inspected:** 53 (51 adjudicated).
- **#18 / #19 excluded:** yes (Name Tag Sample; Getting to Know Each Other).

## Counts

| Disposition | Count |
|---|---:|
| KEEP | 18 |
| KEEP-BUT-DATE | 5 |
| REVISE | 14 |
| MERGE | 12 |
| DELETE | 2 |
| ADD | 0 |
| **Total adjudicated** | **51** |

Resulting 2027 sequence: 37 slides. **External verification queue: 12 items** (VX01–VX12; includes all five F-6 YouTube IDs, with the two display-vs-target mismatches recorded and not repaired).

## Items for ChatGPT adjudication

1. **Governed timing inconsistency:** the W1 note/script say AI starts "after the midterm" and also name Week 7 (M-5) as the first use, but Week 7 precedes the Week 8 midterm. The Seminar 2 text avoids a date.
2. **Roadmap F-7 vs. blueprint:** the roadmap's "AI-assisted analytics workflow slide at Seminar 2" was not added, because the approved blueprint makes M-6 AI-tool-free and W1-X keeps AI collaboration later.
3. **R review slide (N12 #53)** was deleted from this deck; whether it moves to Seminar 3 is open.
4. **Seminar 3 reading filename** mismatch (`Seminar 3_R.pdf` in N12 vs. `Seminar 3_R Tutorial_DataFrame.pdf` in the currency spec).
5. **Dropped claim:** N12 #24 "Lack of people or companies who can manage Big Data" (unsupported).

## Files created

- `teaching/BUSS256/02_working/M6_R1/BUSS256_M6_R1_CONTENT_SPEC_v1.md`
- `teaching/BUSS256/02_working/M6_R1/BUSS256_M6_R1_EXTERNAL_VERIFY_QUEUE_v1.md`
- `docs/rounds/BUSS256_M6_R1_PASS1_REPORT.md`
- Temporary extraction material under `work/m6_r1_extract/` (converted copy, `n12_slides.json`, extracted media).

## Attestation

- Original source mutations = 0 (N12 and the 2025 tree read only; no files written beside the source).
- Assessment mutations = 0.
- Git staged = 0.
- Commit = 0.
- Push = 0.
- Original KMB689 worktree not modified.
