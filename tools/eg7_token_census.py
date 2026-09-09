#!/usr/bin/env python3
# E-G7 재도출 — 렌더된 Exhibit에서 숫자 토큰을 전수 추출해 하드 팩트표 화이트리스트와 대조한다.
# 손으로 만든 목록을 쓰지 않는다. 입력은 실자산 PDF 하나뿐이다.
#
# 사용:  python3 eg7_token_census.py <EXHIBITS.pdf> > EG7_census.md
#
# 주의: pdftotext -layout 은 열 경계를 공백으로 보존하므로 셀 병합 팬텀 토큰이 생기지 않는다.
#       docx 경로로 돌릴 때는 <w:t> 런을 \x1f 로 이어붙인 뒤 같은 정규식을 적용할 것.

import re, sys, subprocess, collections, os

# 숫자 본체만 먼저 잡고, 부호는 문맥으로 판정한다.
# 부호가 되려면 앞 문자가 줄머리·공백·여는 괄호여야 한다.
#   "−0.150" → 음수값        "t−1" → 시차 표기(부호 아님)      "COVID-19" → 복합어(부호 아님)
NUM_RE = re.compile(r'\d[\d,]*(?:\.\d+)?')
SIGNS = '\u2212-'


def find_tokens(ln):
    """(토큰문자열, 시작, 끝) 목록. 부호는 문맥 판정으로만 붙인다."""
    out = []
    for m in NUM_RE.finditer(ln):
        s, e = m.span()
        tok = m.group()
        if s > 0 and ln[s - 1] in SIGNS:
            before = ln[s - 2] if s >= 2 else ''
            if before == '' or before.isspace() or before in '([':
                tok = ln[s - 1] + tok
                s = s - 1
        out.append((tok, s, e))
    return out


TOKEN_RE = NUM_RE  # 보고용 표시

# ---- 하드 팩트표 화이트리스트 (ReviewResponsePlaybook_hardfacts.md 에서만 옮김) ----
WHITELIST = {
    # 1 · 데이터
    '461516': '수집 리뷰 461,516',
    '35465':  '패널 구성 35,465',
    '26734':  '최종 분석 표본 26,734 (= 표1 N = 표2 합계)',
    '865':    '모텔 수 (서론·4.1·4.1.1·5.1)',
    '856':    '모텔 수 (초록·회귀표 그룹수)',
    '40':     '관측 기간 40주',
    '2021':   '수집 기간 연도',
    '14':     '리뷰 작성 조건 14일 이내',
    # 2 · 표 1 기술통계
    '16.806': '표1 리뷰수 평균', '16.436': '표1 리뷰수 SD', '149': '표1 리뷰수 최대',
    '9.118': '표1 답변수 평균', '13.544': '표1 답변수 SD', '285': '표1 답변수 최대',
    '0.836': '표1 답변속도 평균', '0.257': '표1 답변속도 SD', '0.005': '표1 답변속도 최소',
    '0.451': '표1 고객평점하락 평균', '0.498': '표1 고객평점하락 SD',
    '3301.352': '표1 누적리뷰수 평균', '3092.939': '표1 누적리뷰수 SD', '19552': '표1 누적리뷰수 최대',
    '6791.309': '표1 코로나확진자 평균', '4313.618': '표1 코로나확진자 SD',
    '2630': '표1 코로나확진자 최소', '16934': '표1 코로나확진자 최대',
    # 3 · 표 2 도수분포
    '14688': '표2 하락없음 도수', '54.94': '표2 하락없음 비율',
    '12046': '표2 하락존재 도수', '45.06': '표2 하락존재 비율', '100': '표2 합계 비율',
    # 4 · 표 3 상관 · VIF
    '0.603': '표3 r(리뷰수,답변수)', '-0.150': '표3 r(리뷰수,답변속도)', '-0.233': '표3 r(답변수,답변속도)',
    '0.033': '표3 r(리뷰수,고객평점하락)', '0.069': '표3 r(답변수,고객평점하락)', '-0.021': '표3 r(답변속도,고객평점하락)',
    '0.599': '표3 r(리뷰수,누적리뷰수)', '0.351': '표3 r(답변수,누적리뷰수)', '-0.120': '표3 r(답변속도,누적리뷰수)',
    '0.048': '표3 r(고객평점하락,누적리뷰수)',
    '-0.305': '표3 r(리뷰수,코로나)', '-0.190': '표3 r(답변수,코로나)', '-0.031': '표3 r(답변속도,코로나)',
    '0.002': '표3 r(고객평점하락,코로나)', '0.066': '표3 r(누적리뷰수,코로나)',
    '1.0': '표3 대각 1.0',
    # 표 1 최소·최대 중 한 자리 값 — 라인 역할 판정으로만 이 항목에 매칭된다
    '0': '표1 최소값 (리뷰수·답변수·고객평점하락)',
    '1': '표1 최대값 (답변속도·고객평점하락)',
    '2': '표1 누적리뷰수 최소값',
    '1.49': 'VIF 답변수 (최대)', '1.31': 'VIF 답변속도', '1.11': 'VIF 고객평점하락',
    '1.08': 'VIF 누적리뷰수', '1.03': 'VIF 코로나확진자',
}

# ---- 화이트리스트 밖 토큰의 허용 사유 (문맥 정규식 → 사유) ----
# 각 항목은 (사유, 문맥판정함수)
def _ctx(pat):
    return lambda tok, ctx: re.search(pat, ctx) is not None

REASONS = [
    ('서지 — 권(호)·발행연도·페이지·DOI',
     _ctx(r'경영정보학연구|DOI|pp\.|isr\.2022')),
    ('원고 도판 번호 (그림 2·그림 3)',
     _ctx(r'그림')),
    ('유의수준 범례 (p 값)',
     _ctx(r'p<')),
    ('원고 절 번호',
     _ctx(r'4\.1\.1|4\.1은|원고 5\.3|본문 4\.1|§\d')),
    ('원고 표 번호',
     _ctx(r'표 \d|<표')),
    ('시차 표기 (t−1 · t−2)',
     _ctx(r't[−-]\d')),
    ('모형 계수 첨자 (b0·b1·b2·b3)',
     _ctx(r'\bb\d|= b\d')),
    ('이변량 코딩값 (0/1)',
     _ctx(r'이변량|경우 1|경우 0|=0\)|=1\)|0/1')),
    ('질병명 표기 (코로나19)',
     _ctx(r'코로나19')),
    ('선행연구 인용 연도',
     _ctx(r'et al\.')),
    ('표 3 원문 행·열 번호',
     _ctx(r'\(\d\)|행·열 번호')),
    ('역수 정의식의 상수 +1',
     _ctx(r'평균 일수 \+ 1|÷ \(부정적')),
    ('별점 척도 1–5',
     _ctx(r'별점')),
    ('날짜 구성요소',
     _ctx(r'2021-')),
]


# ---- 라인 역할 판정: 표 본문 행이면 그 안의 토큰은 데이터 값으로만 해석한다 ----
T1_VARS = ('리뷰수', '답변수', '답변속도', '고객평점하락', '누적리뷰수', '코로나확진자')
T1_ROW = re.compile(r'^\s*(' + '|'.join(T1_VARS) + r')\s+[\d,]')
T2_ROW = re.compile(r'^\s*14,688|^\s*12,046')
T3_ROW = re.compile(r'^\s*(' + '|'.join(T1_VARS) + r'|고객평점|누적리뷰|코로나확)\s+[−\d]')


def line_role(ln):
    if T1_ROW.match(ln):
        return '표1' if ln.count('.') >= 2 and '−' not in ln else '표3'
    if T2_ROW.match(ln):
        return '표2'
    if T3_ROW.match(ln):
        return '표3'
    return None


def norm(tok):
    t = tok.replace(',', '').replace('−', '-').rstrip('.')
    return t


def main(pdf):
    txt = subprocess.run(['pdftotext', '-layout', pdf, '-'],
                         capture_output=True, text=True, check=True).stdout
    lines = txt.replace('\x0c', '\n').split('\n')

    occ = []
    for ln in lines:
        role = line_role(ln)
        for tok, s, e in find_tokens(ln):
            occ.append((tok, ln[max(0, s - 40):e + 40].strip(), role))

    hit, other = [], []
    for tok, ctx, role in occ:
        n = norm(tok)
        strong = len(n.lstrip('-').replace('.', '')) >= 2
        if (role or strong) and n in WHITELIST:   # 표 본문 행 또는 3자리 이상 — 데이터 값으로 확정
            hit.append((tok, n, ctx))
            continue
        reason = next((r for r, f in REASONS if f(tok, ctx)), None)
        if reason:                            # 표기·서지·번호 등 비데이터 용법
            other.append((tok, n, ctx, reason))
        elif n in WHITELIST:                  # 산문 안의 데이터 값
            hit.append((tok, n, ctx))
        else:
            other.append((tok, n, ctx, None))

    print('# E-G7 재도출 — 숫자 토큰 전수 대조\n')
    print(f'- 입력 실자산: `{os.path.basename(pdf)}`')
    print(f'- 추출 경로: `pdftotext -layout` → 숫자 `{NUM_RE.pattern}` + 문맥 부호 판정')
    print(f'- **총 숫자 토큰 출현 {len(occ)}건** · 정규화 후 서로 다른 값 {len({norm(t) for t, _, _ in occ})}종\n')

    print('## 1 · 화이트리스트 적중\n')
    print(f'출현 {len(hit)}건 · 값 {len({n for _, n, _ in hit})}종. 모두 하드 팩트표에 존재하며 값이 일치한다.\n')
    print('| 정규화 값 | 출현 | 팩트표 위치 |')
    print('|---|---|---|')
    c = collections.Counter(n for _, n, _ in hit)
    for n, k in sorted(c.items(), key=lambda x: -x[1]):
        print(f'| `{n}` | {k} | {WHITELIST[n]} |')

    unused = sorted(set(WHITELIST) - set(c))
    print(f'\n팩트표에 있으나 이 Exhibit에 인쇄되지 않은 값 {len(unused)}종: '
          + (', '.join(f'`{u}`' for u in unused) if unused else '없음'))

    print('\n## 2 · 화이트리스트 밖 토큰 — 사유\n')
    print(f'출현 {len(other)}건. 아래에서 사유가 붙지 않은 토큰이 하나라도 남으면 E-G7 실패다.\n')
    print('| 토큰 | 출현 | 사유 | 대표 문맥 |')
    print('|---|---|---|---|')
    grouped = collections.defaultdict(list)
    for tok, n, ctx, reason in other:
        grouped[(n, reason)].append(ctx)
    unresolved = 0
    for (n, reason), ctxs in sorted(grouped.items(), key=lambda x: (x[0][1] is not None, x[0][0])):
        if reason is None:
            unresolved += len(ctxs)
        r = reason or '**미해명 — 조사 필요**'
        ex = re.sub(r'\s+', ' ', ctxs[0])[:60]
        print(f'| `{n}` | {len(ctxs)} | {r} | {ex} |')

    print(f'\n**미해명 토큰 {unresolved}건.**')
    print('\n판정: ' + ('**E-G7 PASS**' if unresolved == 0 else '**E-G7 FAIL**'))


if __name__ == '__main__':
    main(sys.argv[1])
