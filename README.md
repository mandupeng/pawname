# 강아지 이름 추천기

크기·성별·성격을 고르면 어울리는 강아지 이름을 재미로 추천해주는 웹 서비스.

- 스택: Next.js 16 + `@pmd/ui` (디자인) + `@pmd/core` (AdSense 설정)
- **수익화: 광고 (AdSense)** — `pmd.config.json`의 `monetization: "ads"`
- 로직: `lib/dogNames/pool.ts`(큐레이션된 이름 목록) + `lib/dogNames/recommend.ts`(필터+랜덤 추천)

## 광고 활성화 (사람이 직접 할 일)

`pmd-core/BACKLOG.md`의 "수익화 > ads 모드" 참고. 요약:

1. AdSense 계정 생성 + 이 사이트 등록·심사 통과
2. 승인 후 `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-...` 를 Vercel 프로젝트 env에 등록
3. 광고 단위(슬롯) 2개 생성 (`result`, `footer`) → `NEXT_PUBLIC_ADSENSE_SLOTS={"result":"...","footer":"..."}` env로 등록

심사 통과 전까지는 광고 없이 정상 작동 (`AdSlot`이 빈 화면을 렌더).

## 로컬 실행

```
npm install
npm run dev
```
