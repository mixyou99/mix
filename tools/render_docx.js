// render_docx.js — 렌더러 구동기. **렌더러가 아니다.**
//
// render_shared.js / render_cases.js 는 buildDocx 를 export 하는 모듈이라
// CLI 진입점이 없다. 이 파일은 그 export 를 부르기만 한다. 렌더 규칙은
// 한 줄도 여기 두지 않는다 — 규칙을 바꿔야 하면 렌더러를 고칠 것.
//
// 사용:
//   node tools/render_docx.js <렌더러.js> <입력.md> <출력.docx>
//
// 렌더러 선택 (2026-09-09 실측):
//   **render_shared.js 를 쓴다.** 두 렌더러는 이 케이스 파일들에서 표·행·셀·문단
//   구조가 동일하지만, render_cases.js 는 EXHIBITS_KR.md L5 의 `***`(굵게+이탤릭
//   닫기)에서 리터럴 `**` 를 산출물로 흘린다. render_shared.js 는 흘리지 않는다.
//   E-G0 는 이것을 잡지 못한다 — 유의수준 범례 오탐을 피하려고 `**` 단독 매칭을
//   이미 좁혀 두었기 때문이다. 게이트가 못 잡는다고 옳은 산출물이 되는 것은 아니다.
//
// 의존: docx 9.7.1 (렌더러 헤더가 고정한 버전).
const path = require('path');
const [, , rendererPath, mdPath, outPath] = process.argv;
if (!rendererPath || !mdPath || !outPath) {
  console.error('사용: node tools/render_docx.js <렌더러.js> <입력.md> <출력.docx>');
  process.exit(2);
}
const { buildDocx } = require(path.resolve(rendererPath));
buildDocx({ mdPath: path.resolve(mdPath), outPath: path.resolve(outPath) })
  .then(() => console.log('OK  ' + outPath))
  .catch(e => { console.error('FAIL ' + outPath + '\n' + ((e && e.stack) || e)); process.exit(1); });
