#!/usr/bin/env python3
"""
gate_exhibit.py — Exhibit 세트 게이트 모음 (E-G3 ~ E-G9)

`gate_v1c.py` 와 같은 규율을 따른다.
  · `<w:t>` 실물에서 읽는다. 보고된 수치를 믿지 않는다.
  · 오탐이 나면 **검사식을 고치지 산출물을 고치지 않는다** (G2′).
  · 오탐 정정 이력은 지우지 말고 주석으로 남긴다.

docx 를 1순위로 읽는다. 표 구조(E-G9)는 docx 에서만 정확히 셀 수 있다.
PDF 는 `--from pdf` 로 보조 확인용으로만 쓴다.

사용:
    python3 gate_exhibit.py EXHIBITS_KR.docx
    python3 gate_exhibit.py EXHIBITS_KR.docx --pair EXHIBITS_EN.docx   # E-G9 동반
    python3 gate_exhibit.py EXHIBITS_KR.pdf --from pdf                 # 보조
    python3 gate_exhibit.py ... --reasons reasons_KR.tsv               # E-G8 사유표
    python3 gate_exhibit.py ... --required required_AE.txt             # E-G7R 목록 교체

──────────────────────────────────────────────────────────────────────────
검사식 예외 이력
  (2026-09-08 등록) 부호 판정 — `COVID-19` 의 U+002D 와 `t−1` 의 U+2212 가
  음수 부호로 읽혀 `-19`·`−1` 이 데이터 값처럼 잡혔다. 산출물의 문자를 바꾸지
  않고 **토크나이저를 문맥 인식으로 고쳤다**: 부호는 앞 문자가 줄머리·공백·
  여는 괄호일 때만 인정한다. KR 실측 158건 불변, 미해명 0건 유지.
  ⚠ B·C·D 에서는 음수 계수가 실데이터이므로 이 규칙을 절대 되돌리지 말 것.
──────────────────────────────────────────────────────────────────────────
"""
import re, sys, os, zipfile, html, argparse, collections

SEP = "\x1f"          # 런 구분자 — 셀 경계 소실로 인한 허위 토큰 방지 (gate_v1c 규약 승계)

# ══════════════════════════════════════════════════════════════════════
# 0 · 입력
# ══════════════════════════════════════════════════════════════════════

def docx_runs(path):
    xml = zipfile.ZipFile(path).read("word/document.xml").decode("utf-8")
    runs = re.findall(r"<w:t(?:\s[^>]*)?>(.*?)</w:t>", xml, re.S)
    return SEP.join(html.unescape(r) for r in runs)


def docx_xml(path):
    return zipfile.ZipFile(path).read("word/document.xml").decode("utf-8")


def pdf_text(path):
    import subprocess
    return subprocess.run(["pdftotext", "-layout", path, "-"],
                          capture_output=True, text=True, check=True).stdout


def load(path, mode):
    if mode == "pdf":
        return pdf_text(path).replace("\x0c", "\n")
    raw = docx_runs(path)
    # 내용 비교용: 구분자를 공백으로. 경계가 필요한 검사는 raw 를 따로 쓴다.
    return raw.replace(SEP, " ")


# ══════════════════════════════════════════════════════════════════════
# 1 · 토크나이저 — 부호는 문맥으로만 판정한다
# ══════════════════════════════════════════════════════════════════════

NUM_RE = re.compile(r"\d[\d,]*(?:\.\d+)?")
SIGNS = "\u2212-"


def find_tokens(line):
    """(토큰, 시작, 끝). 부호는 앞 문자가 줄머리·공백·여는 괄호일 때만 붙인다."""
    out = []
    for m in NUM_RE.finditer(line):
        s, e, tok = m.start(), m.end(), m.group()
        if s > 0 and line[s - 1] in SIGNS:
            before = line[s - 2] if s >= 2 else ""
            if before == "" or before.isspace() or before in "([":
                tok, s = line[s - 1] + tok, s - 1
        out.append((tok, s, e))
    return out


def norm(tok):
    return tok.replace(",", "").replace("\u2212", "-").rstrip(".")


# ══════════════════════════════════════════════════════════════════════
# 2 · 하드 팩트표 화이트리스트  (B·C·D 확장 지점)
# ══════════════════════════════════════════════════════════════════════

WHITELIST = {
    "461516": "수집 리뷰", "35465": "패널 구성", "26734": "최종 분석 표본",
    "865": "모텔 수 (서론·4.1·4.1.1·5.1)", "856": "모텔 수 (초록·회귀표 그룹수)",
    "40": "관측 기간 40주", "2021": "수집 기간 연도", "14": "리뷰 작성 조건 14일",
    "16.806": "표1 리뷰수 평균", "16.436": "표1 리뷰수 SD", "149": "표1 리뷰수 최대",
    "9.118": "표1 답변수 평균", "13.544": "표1 답변수 SD", "285": "표1 답변수 최대",
    "0.836": "표1 답변속도 평균", "0.257": "표1 답변속도 SD", "0.005": "표1 답변속도 최소",
    "0.451": "표1 고객평점하락 평균", "0.498": "표1 고객평점하락 SD",
    "3301.352": "표1 누적리뷰수 평균", "3092.939": "표1 누적리뷰수 SD", "19552": "표1 누적리뷰수 최대",
    "6791.309": "표1 코로나확진자 평균", "4313.618": "표1 코로나확진자 SD",
    "2630": "표1 코로나확진자 최소", "16934": "표1 코로나확진자 최대",
    "14688": "표2 하락없음 도수", "54.94": "표2 하락없음 비율",
    "12046": "표2 하락존재 도수", "45.06": "표2 하락존재 비율", "100": "표2 합계 비율",
    "0.603": "표3 r(리뷰수,답변수)", "-0.150": "표3 r(리뷰수,답변속도)", "-0.233": "표3 r(답변수,답변속도)",
    "0.033": "표3 r(리뷰수,하락)", "0.069": "표3 r(답변수,하락)", "-0.021": "표3 r(답변속도,하락)",
    "0.599": "표3 r(리뷰수,누적)", "0.351": "표3 r(답변수,누적)", "-0.120": "표3 r(답변속도,누적)",
    "0.048": "표3 r(하락,누적)", "-0.305": "표3 r(리뷰수,코로나)", "-0.190": "표3 r(답변수,코로나)",
    "-0.031": "표3 r(답변속도,코로나)", "0.002": "표3 r(하락,코로나)", "0.066": "표3 r(누적,코로나)",
    "1.0": "표3 대각", "1.49": "VIF 답변수", "1.31": "VIF 답변속도",
    "1.11": "VIF 고객평점하락", "1.08": "VIF 누적리뷰수", "1.03": "VIF 코로나확진자",
    # 한 자리 값 — 표 본문 행에서만 이 항목으로 매칭된다
    "0": "표1 최소값", "1": "표1 최대값", "2": "표1 누적리뷰수 최소값",
}

T1_VARS = ("리뷰수", "답변수", "답변속도", "고객평점하락", "누적리뷰수", "코로나확진자")
T_ROW = re.compile(r"^\s*(" + "|".join(T1_VARS) + r"|고객평점|누적리뷰|코로나확)\s+[−\-\d]")
T2_ROW = re.compile(r"^\s*(14,688|12,046)")


def line_role(ln):
    if T2_ROW.match(ln):
        return "표2"
    if T_ROW.match(ln):
        return "표1" if ("−" not in ln and ln.count(".") >= 2) else "표3"
    return None


def _ctx(pat):
    return lambda ctx: re.search(pat, ctx) is not None


REASONS = [
    ("서지 — 권(호)·연도·페이지·DOI", _ctx(r"경영정보학연구|DOI|pp\.|isr\.2022|Journal|Vol")),
    ("원고 도판 번호", _ctx(r"그림|Figure")),
    ("유의수준 범례", _ctx(r"p\s*<")),
    ("원고 절 번호", _ctx(r"4\.1\.1|4\.1은|5\.3|본문 4\.1|§\d|§ ?\d")),
    ("원고 표 번호", _ctx(r"표 \d|<표|Table \d")),
    ("시차 표기 (t−1 · t−2)", _ctx(r"t[−\-]\d")),
    ("모형 계수 첨자", _ctx(r"[βb]\d|=\s*[βb]\d")),
    ("이변량 코딩값 (0/1)", _ctx(r"이변량|경우 1|경우 0|=0\)|=1\)|0/1|binary")),
    ("질병명 표기", _ctx(r"코로나19|COVID-19")),
    ("선행연구 인용 연도", _ctx(r"et al\.")),
    ("표 3 원문 행·열 번호", _ctx(r"\(\d\)|행·열 번호|column numbers")),
    ("역수 정의식의 상수 +1", _ctx(r"평균 일수 \+ 1|÷ \(부정적|average number of days")),
    ("별점 척도 1–5", _ctx(r"별점|star rating")),
    ("날짜 구성요소", _ctx(r"2021-")),
]


# ══════════════════════════════════════════════════════════════════════
# 3 · 게이트
# ══════════════════════════════════════════════════════════════════════

# ⚠ 오탐 정정 (2026-09-08): `\*\*` 단독 매칭은 **오탐**이다. 유의수준 범례
#    `*** p<0.001 · ** p<0.01 · * p<0.05` 의 별표가 걸린다. 이는 원고 범례이지
#    마크다운 잔존이 아니다. **산출물을 고치지 않고 검사식을 좁힌다** (G2′).
#    → 굵게 마커는 **짝을 이루고 내용을 감싼** 형태(`**텍스트**`)만 위반으로 본다.
#    B·C·D 는 표마다 범례가 붙으므로 이 예외가 없으면 매 라운드 FAIL 이 난다.
STAR_LEGEND = re.compile(r"\*{1,3}\s*p\s*<")
BOLD_LEFTOVER = re.compile(r"\*\*(?=\S)[^*\n]{1,80}?\*\*")


def g_literals(text):
    """리터럴·이스케이프 잔존 — 렌더러 결함의 직접 증상."""
    masked = STAR_LEGEND.sub(" ", text)          # 범례 별표를 먼저 가린다
    bad = {
        "<sub>/<sup> 리터럴": len(re.findall(r"</?su[bp]>", text)),
        "백슬래시": text.count("\\"),
        "마크다운 굵게 마커(짝)": len(BOLD_LEFTOVER.findall(masked)),
        "유니코드 첨자·위첨자": sum(text.count(c) for c in "₀₁₂₃₄₅₆₇₈₉ᵢₜⱼ⁰¹²³"),
    }
    hits = {k: v for k, v in bad.items() if v}
    return (not hits), [f"{k} × {v}" for k, v in hits.items()]


def g_images(path, mode):
    """E-G5 · 이미지 0."""
    if mode == "pdf":
        return None, ["docx 필요 — PDF 모드에서는 판정하지 않음"]
    names = [n for n in zipfile.ZipFile(path).namelist() if n.startswith("word/media/")]
    return (not names), [f"word/media 항목 {len(names)}건: {names[:5]}"] if names else []


def g_pre_disclosure(text):
    """E-G3 · 표 1·2·3 주변 사전 고지 없음.

    ⚠ 오탐 주의: '해소하지 않는다' 는 사전 고지가 아니라 그 반대의 선언이므로 제외한다.
    """
    ban = [r"부호가 뒤집", r"모순이다", r"오류이다", r"주의해서 보", r"→\s*반전",
           r"sign is reversed", r"contradicts", r"note the discrepancy"]
    allow = [r"해소하지 않는다", r"does not resolve"]
    masked = text
    for a in allow:
        masked = re.sub(a, " ", masked)
    hits = [p for p in ban if re.search(p, masked)]
    return (not hits), [f"판정 문구 /{p}/" for p in hits]


def g_table3_numbers(text):
    """E-G4 · 표 3 원문 번호 1,3,4,5,6,7 유지 + 2번 결번."""
    nums = re.findall(r"\((\d)\)", text)
    got = sorted(set(nums))
    want = ["1", "3", "4", "5", "6", "7"]
    ok = got == want
    return ok, [] if ok else [f"기대 {want} · 실측 {got} (2번 결번이 보여야 한다)"]


def g_token_census(text):
    """E-G7 · 인쇄된 숫자 토큰 전건에 사유가 붙는가. 합격선 = 미해명 0."""
    occ = []
    for ln in text.split("\n"):
        role = line_role(ln)
        for tok, s, e in find_tokens(ln):
            occ.append((norm(tok), ln[max(0, s - 45):e + 45].strip(), role))

    hit, unexplained, reasoned = collections.Counter(), [], collections.Counter()
    for n, ctx, role in occ:
        strong = len(n.lstrip("-").replace(".", "")) >= 2
        if (role or strong) and n in WHITELIST:
            hit[n] += 1
            continue
        r = next((name for name, f in REASONS if f(ctx)), None)
        if r:
            reasoned[r] += 1
        elif n in WHITELIST:
            hit[n] += 1
        else:
            unexplained.append((n, ctx))

    det = [f"총 출현 {len(occ)}건 · 팩트표 적중 {sum(hit.values())}건({len(hit)}종) · "
           f"사유 부여 {sum(reasoned.values())}건"]
    det += [f"미해명 `{n}` — {re.sub(r'\\s+', ' ', c)[:70]}" for n, c in unexplained]
    return (not unexplained), det, hit


def g_required(hit, required):
    """E-G7R · 역검사 — 실려야 할 팩트표 값이 전부 인쇄됐는가."""
    missing = sorted(v for v in required if v not in hit)
    return (not missing), [f"누락 {len(missing)}종: {missing}"] if missing else \
        [f"필수 {len(required)}종 전부 등장"]


COUNT_WORDS = (r"(하나|둘|셋|넷|다섯|여섯|일곱|여덟|아홉|열)|"
               r"(한|두|세|네|다섯|여섯|일곱|여덟|아홉|열)\s*(개|가지|곳|명|표|종|표기)|"
               r"모두\s*\d|양쪽|둘\s*다|"
               r"\b(one|two|three|four|five|six|seven|eight|nine|ten|both|all)\b")


def g_count_words(text, reasons_path):
    """E-G8 · 수사 전수 스캔.

    스크립트는 **셈을 판정하지 않는다.** 후보를 전건 뽑아 사유표를 요구한다.
    사유가 비어 있으면 FAIL — '맞음' 이 아니라 실제 셈을 숫자로 적어야 한다.
    오탐(열람·행·열)은 `수사 아님` 으로 남긴다. 패턴을 좁혀 없애지 말 것.
    """
    found = []
    for i, ln in enumerate(text.split("\n"), 1):
        for m in re.finditer(COUNT_WORDS, ln):
            found.append((i, m.group(), re.sub(r"\s+", " ", ln[max(0, m.start() - 35):m.end() + 35]).strip()))

    if not reasons_path or not os.path.exists(reasons_path):
        out = "\n".join(f"{i}\t{w}\t\t{c}" for i, w, c in found)
        return None, [f"후보 {len(found)}건. 사유표가 없다 — 아래를 TSV(행\\t표현\\t사유\\t문맥)로 저장하고 "
                      f"사유 열을 채운 뒤 --reasons 로 재실행할 것.", out]

    # 사유는 판정 토큰으로 시작해야 한다. 자유 서술만으로는 통과시키지 않는다.
    #   일치:    실제 셈과 맞음 — 뒤에 셈을 숫자로 적을 것
    #   수사 아님: 오탐(열람·행·열 등)
    #   오류:    셈이 틀림 → 그 자체로 FAIL
    filled, blank, bad, malformed = 0, [], [], []
    for ln in open(reasons_path, encoding="utf-8"):
        parts = ln.rstrip("\n").split("\t")
        if len(parts) < 3:
            continue
        filled += 1
        r = parts[2].strip()
        if not r:
            blank.append(parts[1])
        elif r.startswith("오류:"):
            bad.append(f"{parts[1]} — {r}")
        elif not r.startswith(("일치:", "수사 아님")):
            malformed.append(parts[1])
    ok = filled >= len(found) and not blank and not bad and not malformed
    det = [f"후보 {len(found)}건 · 사유표 {filled}행 · 미기재 {len(blank)}건 · 오류 {len(bad)}건"]
    det += [f"오류: {b}" for b in bad]
    if blank:
        det.append(f"사유 미기재: {blank[:10]}")
    if malformed:
        det.append(f"판정 토큰 없음(일치:/수사 아님/오류: 로 시작할 것): {malformed[:10]}")
    if filled < len(found):
        det.append("사유표가 후보보다 적다 — 재생성 필요")
    return ok, det


def g_parity(a_path, b_path, mode):
    """E-G9 · KR/EN 등가. 불일치는 사람이 판정한다 — 자동 정렬 금지."""
    if mode == "pdf":
        return None, ["docx 필요 — 표 구조는 PDF에서 정확히 셀 수 없다"]
    out, vals = [], {}
    for tag, p in (("KR", a_path), ("EN", b_path)):
        xml = docx_xml(p)
        txt = docx_runs(p).replace(SEP, " ")
        vals[tag] = {
            "표 개수": len(re.findall(r"<w:tbl[ >]", xml)),
            "행 합계": len(re.findall(r"<w:tr[ >]", xml)),
            "셀 합계": len(re.findall(r"<w:tc[ >]", xml)),
            "⚠ 블록": txt.count("⚠"),
            "원문 병치 인용": len(re.findall(r"표 1[:：]|본문 4\.1\.1[:：]|Table 1[:：]|§4\.1\.1[:：]", txt)),
        }
    diffs = [k for k in vals["KR"] if vals["KR"][k] != vals["EN"][k]]
    for k in vals["KR"]:
        mark = "≠" if k in diffs else "="
        out.append(f"{mark} {k}: KR {vals['KR'][k]} · EN {vals['EN'][k]}")
    return (not diffs), out


# ══════════════════════════════════════════════════════════════════════
# 4 · 실행
# ══════════════════════════════════════════════════════════════════════

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("target")
    ap.add_argument("--pair", help="등가 검사(E-G9) 대상 — 반대 언어판")
    ap.add_argument("--from", dest="mode", choices=["docx", "pdf"], default="docx")
    ap.add_argument("--reasons", help="E-G8 사유표 TSV")
    ap.add_argument("--required", help="E-G7R 필수 값 목록 (한 줄에 하나)")
    a = ap.parse_args()

    text = load(a.target, a.mode)
    required = ([l.strip() for l in open(a.required, encoding="utf-8") if l.strip()]
                if a.required else list(WHITELIST))

    print(f"# gate_exhibit — {os.path.basename(a.target)}  (from {a.mode})\n")

    results = []
    def run(gid, name, res):
        ok, det = res[0], res[1]
        mark = {True: "PASS", False: "FAIL", None: "SKIP"}[ok]
        print(f"[{mark}] {gid} · {name}")
        for d in det:
            for line in str(d).split("\n"):
                if line.strip():
                    print(f"        {line}")
        results.append((gid, ok))
        return res

    run("E-G0", "리터럴·이스케이프 잔존", g_literals(text))
    run("E-G5", "이미지 0", g_images(a.target, a.mode))
    run("E-G3", "표 주변 사전 고지 없음", g_pre_disclosure(text))
    run("E-G4", "표 3 원문 번호 · 2번 결번", g_table3_numbers(text))
    census = run("E-G7", "숫자 토큰 전수 대조", g_token_census(text))
    run("E-G7R", "팩트표 필수 값 역검사", g_required(census[2], required))
    run("E-G8", "수사 전수 스캔", g_count_words(text, a.reasons))
    if a.pair:
        run("E-G9", "KR/EN 등가", g_parity(a.target, a.pair, a.mode))

    failed = [g for g, ok in results if ok is False]
    skipped = [g for g, ok in results if ok is None]
    print(f"\n종합: {len(results)}게이트 · 실패 {len(failed)}{' ' + str(failed) if failed else ''}"
          f"{' · 보류 ' + str(skipped) if skipped else ''}")
    print("판정: " + ("PASS" if not failed and not skipped else
                      "FAIL — 부분 성공을 남기지 말고 전건 롤백" if failed else "미완 — 보류 게이트 해소 필요"))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
