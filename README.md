# Word Revision Builder Mac

macOS-friendly version of Word Revision Builder.

This version does not use Microsoft Word COM automation because `Microsoft.Office.Interop.Word.Application.CompareDocuments` is Windows-only. Instead, it compares DOCX package XML directly and writes insertion/deletion revision markup into a new DOCX.

## Run

```bash
cd WordRevisionBuilderMac
python3 app.py
```

The app opens a local browser page, usually at:

```text
http://127.0.0.1:8765
```

Choose each DOCX in Finder or drag and drop the files into the browser page.

Output location:

- Finder-selected files can save results beside the original document or on Desktop.
- Output files are placed in a newly created folder named like `[original]_WordRevisionBuild_YYYYMMDD_HHMMSS`.
- Dragged files save results to Desktop because browsers do not expose the original folder path.
- Date fields use a calendar picker plus 00-23 hour selectors.

## Output

The app creates:

- `[original]_Tracked.docx`
- `[original]_RevisionReport.json`
- `[original]_RevisionReport.csv`
- `[original]_ExecutionLog.txt`

## Important Differences From Windows Version

- The Windows version uses Microsoft Word's comparison engine.
- The Mac version uses direct DOCX XML block comparison.
- Insertions and deletions are generated for changed document body blocks.
- Detailed Word-level behavior for tables, headers, footers, footnotes, endnotes, comments, formatting-only revisions, and moves is best-effort or limited.
- Character-level mode creates inline insert/delete revisions for changed characters in matched paragraphs and preserves the original run style where possible.
- Simulation timestamps are never written into DOCX revision metadata or file modification times. They appear only in JSON/CSV as `SIMULATED`.
- Simulation timestamps are assigned in revision sequence order and strictly increase by at least the configured minimum interval.
