# CLAUDE.md

## 프로젝트 개요

Next.js 16.2.6 + React 19 App Router 프로젝트입니다.
Next.js API 최신 문서는 `node_modules/next/dist/docs/`를 참조하세요 (AGENTS.md 적용 중).

## 자주 사용하는 명령어

```bash
npm run dev       # 개발 서버 (포트 3000)
npm run build     # 프로덕션 빌드
npm run lint      # ESLint 실행
npx tsc --noEmit  # TypeScript 타입 체크
```

## 자동화 도구

Write/Edit 실행 시 PostToolUse 훅으로 **Prettier가 자동 포맷팅**됩니다.
별도 `npm run format` 명령은 없습니다.

## 프로젝트 구조

```
app/              # Next.js App Router (layout.tsx, page.tsx, globals.css)
components/ui/    # shadcn 컴포넌트
lib/utils.ts      # cn() 유틸리티 (Tailwind className 병합)
.claude/
  settings.json   # PostToolUse Prettier 훅, Slack 알림 훅
  agents/         # code-quality-reviewer, code-review-specialist
```

## shadcn 컴포넌트 추가

```bash
# 올바른 명령어 (shadcn-ui@latest 아님)
npx shadcn@latest add button
npx shadcn@latest add card
```

- components.json style: `radix-nova`
- 설치 경로: `/components/ui`

## 핵심 개발 패턴

### 경로 별칭

`tsconfig.json`에 `@/*` → 프로젝트 루트 매핑 설정. 항상 절대 경로로 임포트합니다:

```typescript
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

### 스타일링

- Tailwind CSS v4 + `tw-animate-css` (애니메이션 유틸리티) 사용 가능
- 조건부 클래스는 `cn()` 함수 사용

### TypeScript 엄격 규칙

`strict: true` 외 추가 규칙 적용 중:

- `noUnusedLocals` / `noUnusedParameters`: 미사용 변수·파라미터 금지
- `exactOptionalPropertyTypes`: 옵셔널 속성에 `undefined` 명시 불가

## 서브 에이전트

`.claude/agents/`에 두 전문 에이전트 등록:

- **code-quality-reviewer**: 코드 작성 완료 후 품질 검토
- **code-review-specialist**: 구현 완료 후 전문 리뷰
