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

  (2026-09-09 등록 · 09-09 재등록) 미해명 토큰 보고줄 — E-G7 상세줄이 문맥을
  `re.sub(r'\\s+', ...)` 로 눌렀다. 결함이 둘 겹쳐 있었다. ① 원시문자열 안의 `\\s` 는
  공백류가 아니라 **역슬래시+s** 라 실제로는 아무것도 눌리지 않았다. ② f-string 표현부의
  역슬래시는 Python 3.12 미만에서 SyntaxError 라 **파일 전체가 임포트되지 않았다**(3.11 실측).
  문맥 압축용 `WS_RE` 를 모듈 상수로 올려 둘을 함께 없앴다. 판정 로직·합격선은 불변이다.
  ⚠ 이 줄은 미해명이 있을 때만 실행되므로 미해명 0인 판에서는 드러나지 않는다.
  ⚠ 재등록 사유 — 2026-09-09 반입본에서 이 수리가 되돌아와 있었다(원래 형태로 복귀).
     같은 자리에서 두 번 났으므로 지우지 말 것. 아래 필수목록 파서 정정은 반입본 것이다.

  (2026-09-09 등록) E-G9 오탐 2건 — 실물이 아니라 검사식이 틀렸다(G2′).
  ① ⚠ 개수를 `txt.count("⚠")` 로 셌다. 표 셀의 `(⚠ 아래)`·`(see ⚠ below)`·`위 ⚠ 참조`
     같은 **인라인 포인터까지 블록으로 세어** KR/EN 이 갈렸다. E-G9 가 요구하는 것은
     "⚠ **블록** 수"이므로 **문단 첫 글자가 ⚠ 인 것만** 센다. 포인터는 표 셀 안에 있어
     문단이 ⚠ 로 시작하지 않으므로 자연히 빠진다.
  ② 병치 인용 라벨을 `표 1[:：]|본문 4\.1\.1[:：]|Table 1[:：]|§4\.1\.1[:：]` 로 셌다.
     인용 대상 바로 뒤에 콜론이 오는 형태만 잡혀서, 사이에 서술어가 낀 실제 라벨
     (`표 1 설명:` · `Table 1 note:` · `§4.1.1 body:` · `4.1.1 본문:`)이 통째로 빠졌다.
     KR·EN 이 서술어를 다르게 쓰므로 언어별로 누락 수가 달라져 등가 판정이 갈렸다.
     **인용 대상 + 선택적 서술어 + 콜론** 으로 정규화한다.
  ⚠ 둘 다 판정 기준(불일치 0)은 그대로다. 자동 정렬은 여전히 하지 않는다.

  (2026-09-09 등록) E-G7R 오탐 — `필수 0·1·2 누락` 은 실물이 아니라 검사식 결함이다.
  세 겹이었다.
  ① docx 모드의 `load()` 가 런을 전부 공백으로 이어 붙여 **문서 전체가 한 줄**이 됐다.
     `line_role`(표 행을 알아보는 장치)이 docx 경로에서 한 번도 동작하지 않았다.
     PDF 경로에만 줄이 있었으므로 이 결함은 docx 로 돌릴 때만 난다.
  ② `T_ROW` 가 **변수명이 줄머리에 오는 옛 열 구성**을 전제했다. D-5 가 역할 열을
     앞에 되살리고 D-8 이 행 번호를 붙이면서 표1·표3 행이 둘 다 안 잡히게 됐다.
     지시된 산출물이 옳고 검사식이 낡은 것이다.
  ③ 그 결과 표1 최소·최대의 한 자리 값(0·1·2)이 데이터가 아니라 사유 쪽으로 분류돼
     `hit` 에 들어가지 못했다. D-5 가 설명 열을 되살리면서 `경우 1, 아닐 경우 0` 이
     같은 행에 들어와 문맥 사유가 먼저 걸린 탓이다.
  → docx 를 **표 행 단위 · 문단 단위로 줄을 나눠** 읽고(`docx_lines`), `line_role` 의
     변수명 매칭을 줄머리 고정에서 **줄 안 어디든**으로 푼다. 표1/표3 구분 규칙
     (음수 부호 없음 + 소수 둘 이상 = 표1)은 그대로 둔다.
  ⚠ 셀은 공백으로 잇는다 — SEP 규약과 같은 목적(셀 경계 소실로 인한 허위 토큰 방지)이다.

  (2026-09-09 등록) E-G7 미해명 2건 — D-2 가 지시대로 넣은 문자열이 사유 목록에 없었다.
  ① `4.1` — D-2 의 새 라벨 `패널 구성 (4.1)`. '원고 절 번호' 사유가 이미 있는데
     정규식이 `4.1은`·`본문 4.1` 같은 옛 형태만 알아 **괄호 형태를 놓쳤다.**
     EN 은 `(§4.1)` 이라 `§ ?\d` 로 이미 걸렸다 — KR 만 빠지던 언어 비대칭 결함이다.
  ② `8,731` — D-2 의 ⚠ 한 줄이 요구하는 값. 팩트표에 없는 것이 맞다.
     35,465 − 26,734 의 **차**를 명시한 것이라 데이터 값이 아니라 사유가 붙어야 할 값이다.
     그런 범주가 없어 새로 만들었다. **문맥을 D-2 문장으로 좁혀 둔다** — 넓히면
     아무 숫자나 "차"라고 주장해 빠져나간다.
  ⚠ 둘 다 화이트리스트는 건드리지 않았다. 팩트표 데이터 값은 그대로 55종이다.

  (2026-09-09 등록) E-G7 EN 미해명 4건 — 사유 정규식이 **한국어 전용**이었다.
  `(4, 5, 6)`(회귀표 번호)와 `1–5 stars`(별점 척도)는 KR 쪽 `표 \d`·`별점` 에만 걸려
  EN 에서 통째로 빠졌다. 범주는 이미 옳고 표현만 KR 이었다 — 두 패턴에 EN 형태를 더한다.
  ⚠ EN 판을 E-G7 에 걸어 본 것이 이번이 처음이라 그때까지 드러나지 않았다.
     KR 만 돌리면 언어 비대칭 결함은 영원히 안 보인다. P-1 이 두 판을 다 재측정하라는
     이유가 이것이다.

  (2026-09-09 등록 · 계속) EN 을 돌리자 같은 **KR 전용** 결함이 넷 더 나왔다.
  ③ `T1_VARS` 가 한국어 변수명뿐이라 **EN 표 행이 line_role 에 하나도 안 잡혔다.**
     그 탓에 표1 최소값 `2`(누적리뷰수)가 데이터로 인정되지 못해 E-G7R 이 EN 에서만
     `누락 1종` 을 냈다. EN 변수명을 T1_VARS 에 더한다.
  ④ '원고 절 번호' 가 `Section 4.1` 을 몰랐다 (KR `4.1은`·`본문 4.1` 만 알았다).
  ⑤ '표 3 원문 행·열 번호' 가 `Row/column indices` 를 몰랐다 (KR `행·열 번호` 만).
  ⑥ D-2 차 사유의 문맥이 `removed 8,731\s+\n?observations` 로 지나치게 길어 문맥창
     (±45자)을 넘겼다. `removed 8,731` 로 줄인다.
  ⚠ 넷 다 범주는 이미 옳고 표현만 KR 이었다. 판정 기준·화이트리스트는 불변이다.

  (2026-09-09 등록) B·C·D 저작에서 나온 오탐 2건.
  ⑦ E-G0 — 원고의 **교호항 곱셈 기호**(`답변수 *답변속도`)를 마커 누출로 셌다. 원문이 그렇게
     인쇄하고 S2-1′ 가 원문 표기 그대로를 요구하므로 산출물을 고칠 수 없다. **변수명이 바로 뒤에
     붙은 `*` 만** 내용으로 인정한다(`INTERACTION_STAR`). 실측 누출은 글자 뒤에 붙고 변수명이
     따라오지 않으므로 탐지력은 줄지 않는다.
  ⑧ E-G7 — `모형 3`·`모형 4` 의 번호가 미해명으로 남았다. '원고 표 번호' 사유가 이미 있는데
     표만 알고 모형을 몰랐다. 같은 구조 참조이므로 사유명을 '원고 표·모형 번호' 로 넓혔다.
  ⑨ E-G7 — 별지 F 의 문항 번호(`F-3`·`F-4`…)가 미해명으로 남았다. 원고 값이 아니라
     우리 문서의 구조 번호이므로 '별지 문항 번호' 사유를 새로 만들었다. `F-\d` 로 좁혀 둔다.
  ⑩ 별지 F 를 Exhibit 표로 취급했다 — E-G4·E-G7R 이 **구조상 통과 불가**였다.
     E-G4 는 표 3 의 행·열 번호를 보는데 별지에는 **원고 표가 0개**다(E-G9 실측).
     E-G7R 은 팩트표 필수 값이 인쇄됐는지 보는데, 별지가 그 79종을 실으면 **그것이 정답 유출**이다
     (CASE_LOG 의 'Exhibit F 정답유출 정정' 이 같은 사고다). 검사가 틀린 것을 요구하고 있었다.
     → `--kind supplement` 를 둔다. 별지에서는
        · E-G4 대신 **E-G4S**(원고 표 0개)를 본다 — 별지가 표를 실으면 그것이 결함이다
        · E-G7R 은 **적용 대상이 아님**을 찍고 셈에서 뺀다 (통과로 세지 않는다)
     ⚠ 기본값은 `exhibit` 이다. Exhibit A–E 는 종전 그대로 8게이트 전부 받는다.
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


def docx_lines(path):
    """표는 **행 하나가 한 줄**, 그 밖은 문단 하나가 한 줄. `line_role` 이 표 행을
    알아보려면 줄 경계가 있어야 한다 — docx 를 통째로 한 줄로 읽던 결함 정정."""
    xml = docx_xml(path)
    spans, out = [], []
    for tm in re.finditer(r"<w:tbl>.*?</w:tbl>", xml, re.S):
        spans.append(tm.span())
        for rm in re.finditer(r"<w:tr[ >].*?</w:tr>", tm.group(), re.S):
            cells = [" ".join(html.unescape(t) for t in
                              re.findall(r"<w:t(?:\s[^>]*)?>(.*?)</w:t>", cm.group(), re.S))
                     for cm in re.finditer(r"<w:tc>.*?</w:tc>", rm.group(), re.S)]
            out.append((tm.start() + rm.start(), " ".join(c for c in cells if c).strip()))
    for pm in re.finditer(r"<w:p[ >].*?</w:p>", xml, re.S):
        if any(a <= pm.start() < b for a, b in spans):
            continue
        runs = re.findall(r"<w:t(?:\s[^>]*)?>(.*?)</w:t>", pm.group(), re.S)
        out.append((pm.start(), "".join(html.unescape(r) for r in runs).strip()))
    return [t for _, t in sorted(out) if t]


def docx_paragraphs(path):
    """문단별 텍스트. ⚠ 블록 판정용 — 인라인 포인터를 블록으로 세지 않기 위해 필요하다."""
    xml = docx_xml(path)
    out = []
    for pm in re.finditer(r"<w:p[ >].*?</w:p>", xml, re.S):
        runs = re.findall(r"<w:t(?:\s[^>]*)?>(.*?)</w:t>", pm.group(), re.S)
        out.append("".join(html.unescape(r) for r in runs).strip())
    return out


# 병치 인용 라벨 — 인용 대상 + 선택적 서술어 + 콜론.
# 서술어(설명·본문·note·body)가 낀 형태를 놓치던 결함 정정 (위 이력 ②).
JUXTA_RE = re.compile(
    r"(?:표\s*1|Table\s*1|§?\s*4\.1\.1)"
    r"(?:\s*(?:설명|본문|주석|note|body))?"
    r"\s*[:：]"
)


def pdf_text(path):
    import subprocess
    return subprocess.run(["pdftotext", "-layout", path, "-"],
                          capture_output=True, text=True, check=True).stdout


def load(path, mode):
    if mode == "pdf":
        return pdf_text(path).replace("\x0c", "\n")
    # 표 행·문단 단위로 줄을 나눠 돌려준다. 통째로 한 줄로 주면 line_role 이 죽는다.
    return "\n".join(docx_lines(path))


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


WS_RE = re.compile(r"\s+")      # 보고줄용 문맥 압축 — 개행·연속공백을 한 칸으로


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


# ── B·C·D 확장 (2026-09-09 승인) ──────────────────────────────────────────
# 팩트표 §3(회귀 결과)에서 옮겼다. 회귀계수·SE·Adj R²·그룹수.
# ⚠ A·E 항목을 덮지 않는다 — 값이 겹치는 넷은 설명을 **병합**했다(아래 주석).
#   0.005 · 0.033 · 26734 · 856 이 그 넷이다. 덮어쓰면 A·E 센서스의 팩트표 위치가 사라진다.
# ⚠ 부호는 원문 그대로다. 음수 계수가 실데이터이므로 부호 문맥 판정 규칙을 되돌리지 말 것.
WHITELIST.update({
    "0.006": "표 4 모형 1 고객평점하락 SE",
    "0.007": "표 5 모형 2 답변수 × 답변속도 SE",
    "0.010": "표 4 모형 1 답변수 (적극성) SE",
    "0.011": "표 4 모형 1 답변속도 (적시성) SE",
    "0.012": "표 6 모형 3·4 답변속도 SE",
    "-0.013": "표 6 모형 3·4 고객평점하락 × 답변속도 계수",
    "0.013": "표 6 모형 3·4 고객평점하락 SE",
    "0.020": "표 6 모형 3·4 고객평점하락 × 답변수 계수 · 표 4 모형 1 코로나확진자 SE",
    "-0.027": "표 5 모형 2 답변속도 계수",
    "0.027": "표 5 모형 2 답변수 × 답변속도 계수",
    "0.032": "표 4 모형 1 답변속도 (적시성) 계수",
    "0.039": "표 6 모형 3·4 답변속도 계수",
    "-0.046": "표 4 모형 1 고객평점하락 계수",
    "-0.047": "표 5 모형 2 고객평점하락 계수",
    "0.047": "표 4 모형 1 누적리뷰수 SE",
    "-0.049": "표 6 모형 3·4 고객평점하락 계수",
    "-0.081": "표 6 모형 3·4 고객평점하락 계수",
    "0.129": "표 6 모형 3·4 누적리뷰수 계수",
    "0.130": "표 4 모형 1 누적리뷰수 계수",
    "0.131": "표 5 모형 2 누적리뷰수 계수",
    "0.133": "표 6 모형 3·4 답변수 계수",
    "0.139": "표 4 모형 1 답변수 (적극성) 계수",
    "0.149": "표 5 모형 2 답변수 계수",
    "0.346": "표 4 모형 1 상수항 SE",
    "0.479": "표 4 모형 1 Adj R² 0.479",
    "0.480": "표 5 모형 2 Adj R² 0.480",
    "-0.663": "표 5 모형 2 코로나확진자 계수",
    "-0.665": "표 4 모형 1 코로나확진자 계수",
    "7.098": "표 5 모형 2 상수항 계수",
    "7.142": "표 6 모형 3·4 상수항 계수",
    "7.143": "표 4 모형 1 상수항 계수",
})
# 값이 겹치는 넷 — 기존 설명 뒤에 B·C·D 쪽 위치를 덧붙인다(덮어쓰지 않는다).
for _v, _add in {
    "0.005": "표 6 모형 3·4 고객평점하락 × 답변수 SE",
    "0.033": "표 6 모형 3·4 답변속도 계수",
    "26734": "회귀표 관측치 26,734",
    "856": "회귀표 그룹수 856",
}.items():
    WHITELIST[_v] = WHITELIST[_v] + " / " + _add
# ── B·C·D 확장 끝 ────────────────────────────────────────────────────────

T1_VARS = ("리뷰수", "답변수", "답변속도", "고객평점하락", "누적리뷰수", "코로나확진자")
# EN 판 변수명 — 없으면 EN 표 행이 line_role 에 하나도 안 잡힌다(위 이력 ③).
T1_VARS_EN = ("review_count", "reply_count", "reply_speed", "rating_decline",
              "cumulative_reviews", "COVID_cases")

INTERACTION_STAR = re.compile(r"(?<=\s)\*(?=(?:" + "|".join(T1_VARS + T1_VARS_EN) + "))")
# 줄머리 고정을 푼다 — D-5 가 역할 열을, D-8 이 행 번호를 앞에 붙여 변수명이 더는 줄머리가 아니다.
# 대신 표 행임을 **구조로** 확인한다(아래 line_role). 변수명만으로 잡으면 산문까지 표 행이 된다.
T_ROW  = re.compile("|".join(T1_VARS + T1_VARS_EN) + r"|고객평점|누적리뷰|코로나확")
T1_N   = "26,734"                       # 표1은 전 행에 N 열이 있다
T3_IDX = re.compile(r"\(\d\)")           # 표3은 행 번호가 붙는다 (D-8)
DECIMAL = re.compile(r"\d\.\d")
T2_ROW = re.compile(r"^\s*(14,688|12,046)")


def line_role(ln):
    """표 행만 표 행으로 판정한다. 변수명이 나온다고 표 행인 것은 아니다."""
    if T2_ROW.search(ln):
        return "표2"
    if not T_ROW.search(ln):
        return None
    if T1_N in ln:                                  # 표1 — N 열이 전 행에 인쇄된다
        return "표1"
    if T3_IDX.search(ln) and DECIMAL.search(ln):    # 표3 — 행 번호 + 상관계수
        return "표3"
    return None


def _ctx(pat):
    return lambda ctx: re.search(pat, ctx) is not None


REASONS = [
    ("서지 — 권(호)·연도·페이지·DOI", _ctx(r"경영정보학연구|DOI|pp\.|isr\.2022|Journal|Vol")),
    ("원고 도판 번호", _ctx(r"그림|Figure")),
    ("유의수준 범례", _ctx(r"p\s*<")),
    # 괄호 형태 `(4.1)`·`(4.1.1 …)` 추가 — D-2 라벨. EN 은 `(§4.1)` 이라 이미 걸렸다.
    ("원고 절 번호", _ctx(r"4\.1\.1|4\.1은|5\.3|본문 4\.1|§\d|§ ?\d|\(4\.1[.\d]*|[Ss]ection 4\.1")),
    # 팩트표 두 값의 차를 명시한 것 — D-2 ⚠ (35,465 − 26,734 = 8,731).
    # 문맥은 D-2 문장으로 좁혀 둔다. 일반화하면 검사가 무력해진다.
    ("팩트표 값의 차 (D-2 ⚠)", _ctx(r"줄어든 규칙은 원고에 없다|removed 8,731|8,731\s*개가 줄어든")),
    # `모형 1`~`모형 4` 추가 — 원고의 모형 번호는 표 번호와 같은 구조 참조다 (B·C·D 저작).
    ("원고 표·모형 번호", _ctx(r"표 \d|<표|[Tt]ables? \d|[Tt]ables? \(\d|모형 \d|[Mm]odels? \d")),
    # 별지 F 의 문항 번호 (F-1 ~ F-6). 원고 값이 아니라 우리 문서의 구조 번호다.
    ("별지 문항 번호", _ctx(r"F-\d")),
    ("시차 표기 (t−1 · t−2)", _ctx(r"t[−\-]\d")),
    ("모형 계수 첨자", _ctx(r"[βb]\d|=\s*[βb]\d")),
    ("이변량 코딩값 (0/1)", _ctx(r"이변량|경우 1|경우 0|=0\)|=1\)|0/1|binary")),
    ("질병명 표기", _ctx(r"코로나19|COVID-19")),
    ("선행연구 인용 연도", _ctx(r"et al\.")),
    ("표 3 원문 행·열 번호", _ctx(r"\(\d\)|행·열 번호|column numbers|[Rr]ow/column indices")),
    ("역수 정의식의 상수 +1", _ctx(r"평균 일수 \+ 1|÷ \(부정적|average number of days")),
    ("별점 척도 1–5", _ctx(r"별점|star rating|stars")),
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
#
# ⚠ 보강 (2026-09-09): 위 좁히기가 **너무 좁았다.** 짝 매칭은 홑으로 샌 마커를
#    구조상 잡지 못한다 — 샌 것은 짝이 없기 때문이다. render_cases.js 의 평면
#    정규식 파서가 `***`(굵게+이탤릭 닫기)를 처리하지 못해 리터럴 `**` 런 하나가
#    산출물로 샜고, 짝 검사는 그것을 통과시켰다.
#    → **범례를 가린 뒤 남은 `*` 를 전부 위반으로 센다. 합격선 0.**
#       마크다운 마커는 렌더 후 남을 이유가 없다. 범례 예외는 그대로 유지한다.
#
# ⚠ 확장 (2026-09-09 승인): 계수에 붙은 유의성 별표(`+0.139***`)도 **내용**이지 마커가
#    아니다. D-3 이 범례를 회귀표 하단으로 보냈으므로 B·C·D 는 회귀표를 담는다.
#    이 마스크가 없으면 B·C·D 가 매 라운드 FAIL 한다(본문 실측 KR 68 · EN 68).
#    누출 탐지력은 줄지 않는다 — 이식 전 누출(KR 2 · EN 6)이 이 마스크를 더해도
#    그대로 잡히는 것을 실측으로 확인했다.
# ⚠ 잔존 사각지대 (2026-09-09): 숫자 바로 뒤에 떨어지는 누출은 이 마스크가 가린다.
#    실측상 누출은 한글·영문 글자 뒤에 붙지만 그것은 관찰이지 보장이 아니다.
#    마스킹 개수를 함께 출력하는 이유가 이것이다.
STAR_LEGEND = re.compile(r"\*{1,3}\s*p\s*<")
COEF_STAR   = re.compile(r"(?<=\d)\*{1,3}")      # 계수 유의성 별표 — 내용이다
# ⚠ 확장 (2026-09-09): 원고의 **교호항 곱셈 기호**도 내용이다. 원문이 `답변수 *답변속도`
#    처럼 앞만 띄고 `*` 를 쓴다(표 5·표 6). S2-1′ 가 원문 표기 그대로를 요구하므로
#    산출물을 고칠 수 없고, 고치면 원문 전재가 아니다 → 검사식이 인정한다(G2′).
#    **변수명이 바로 뒤에 붙은 것만** 인정한다. 실측된 마커 누출(`제외한다.**`·`seminar.**`)은
#    글자 뒤에 붙고 변수명이 따라오지 않으므로 이 마스크에 걸리지 않는다.
#    실제 정의는 T1_VARS 바로 뒤에 있다 — 변수명 목록이 있어야 만들 수 있기 때문이다.
BOLD_LEFTOVER = re.compile(r"\*\*(?=\S)[^*\n]{1,80}?\*\*")   # 진단용 — 판정은 아래 전수 셈이 한다


def g_literals(text):
    """리터럴·이스케이프 잔존 — 렌더러 결함의 직접 증상."""
    legend_masked = STAR_LEGEND.sub(" ", text)   # ① 유의수준 범례
    masked = COEF_STAR.sub("", legend_masked)    # ② 계수에 붙은 유의성 별표
    masked = INTERACTION_STAR.sub("", masked)    # ③ 원고의 교호항 곱셈 기호
    stars = masked.count("*")                    # 남은 별표는 전부 위반 (합격선 0)
    n_content = text.count("*") - stars          # 가린 개수 — 버리지 않고 함께 찍는다
    bad = {
        "<sub>/<sup> 리터럴": len(re.findall(r"</?su[bp]>", text)),
        "백슬래시": text.count("\\"),
        "마크다운 별표 잔존": stars,
        "유니코드 첨자·위첨자": sum(text.count(c) for c in "₀₁₂₃₄₅₆₇₈₉ᵢₜⱼ⁰¹²³"),
    }
    hits = {k: v for k, v in bad.items() if v}
    det = [f"내용 별표 {n_content}건(마스킹) · 잔존 마커 {stars}건"]
    det += [f"{k} × {v}" for k, v in hits.items()]
    if stars:                                    # 어디서 샜는지 보여 준다
        paired = len(BOLD_LEFTOVER.findall(masked))
        det.append(f"  그중 짝을 이룬 `**…**` {paired}건 — 나머지는 홑으로 샌 것이다")
        for mm in list(re.finditer(r"\*+", masked))[:8]:
            det.append(f"  `{mm.group()}` — {WS_RE.sub(' ', masked[max(0, mm.start() - 40):mm.end() + 40])}")
    return (not hits), det


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


def g_supplement_no_tables(path, mode):
    """E-G4S · 별지에는 원고 표가 없어야 한다. 표를 실으면 정답 유출 쪽으로 기운다."""
    if mode == "pdf":
        return None, ["docx 필요 — 표 구조는 PDF 에서 정확히 셀 수 없다"]
    n = len(re.findall(r"<w:tbl[ >]", docx_xml(path)))
    return (n == 0), [f"원고 표 {n}개" + ("" if n == 0 else " — 별지는 문제만 싣는다")]


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
    det += [f"미해명 `{n}` — {WS_RE.sub(' ', c)[:70]}" for n, c in unexplained]
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
            "⚠ 블록": sum(1 for q in docx_paragraphs(p) if q.startswith("⚠")),
            "원문 병치 인용": len(JUXTA_RE.findall(txt)),
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
    ap.add_argument("--kind", choices=["exhibit", "supplement"], default="exhibit",
                    help="supplement = 별지 F (문제만). E-G4 대신 E-G4S, E-G7R 미적용")
    a = ap.parse_args()

    text = load(a.target, a.mode)
    # ⚠ 결함 정정 (2026-09-09): 주석·빈 줄을 값으로 읽어 "누락 29종"을 보고했다.
    #    목록 파일은 사람이 읽는 문서이기도 하므로 주석을 허용하고, 값만 취한다.
    if a.required:
        required = []
        for l in open(a.required, encoding="utf-8"):
            l = l.split("#", 1)[0].strip()
            if l:
                required.append(l)
    else:
        required = list(WHITELIST)

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
    if a.kind == "supplement":
        run("E-G4S", "별지에 원고 표 없음", g_supplement_no_tables(a.target, a.mode))
    else:
        run("E-G4", "표 3 원문 번호 · 2번 결번", g_table3_numbers(text))
    census = run("E-G7", "숫자 토큰 전수 대조", g_token_census(text))
    if a.kind == "supplement":
        # 별지가 팩트표 필수 값을 다 실으면 그것이 정답 유출이다. 셈에서 뺀다.
        print("[ N/A] E-G7R · 팩트표 필수 값 역검사")
        print("        별지는 문제만 싣는다 — 필수 값 역검사는 적용 대상이 아니다")
    else:
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
