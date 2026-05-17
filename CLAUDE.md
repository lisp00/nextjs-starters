# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16.2.6 기반의 최신 App Router 프로젝트입니다. shadcn/ui 컴포넌트, Tailwind CSS v4, TypeScript를 활용하여 구축되었습니다.

## 개발 환경 설정

### 주요 의존성
- **Next.js**: 16.2.6 (App Router 기반)
- **React**: 19.2.4
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x (PostCSS 통합)
- **shadcn/ui**: 4.7.0 (Radix UI + CVA 기반)
- **ESLint**: 9.x (Next.js 규칙 포함)

### 패키지 관리
npm을 사용합니다. 타이핑 선언과 IDE 지원을 위해 `@types/node`, `@types/react`, `@types/react-dom`이 포함되어 있습니다.

## 자주 사용하는 명령어

```bash
# 개발 서버 시작 (포트 3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# ESLint 실행 (린트 체크)
npm run lint
```

## 프로젝트 구조

```
/app                   # Next.js App Router 페이지 및 레이아웃
  /layout.tsx          # Root 레이아웃 (모든 페이지 공통)
  /page.tsx            # 홈페이지
  /globals.css         # 전역 스타일 (Tailwind 임포트)

/components            # React 컴포넌트
  /ui                  # shadcn/ui 컴포넌트 (자동 생성)

/lib                   # 유틸리티 함수
  /utils.ts            # Tailwind CSS className 병합 유틸리티 (cn 함수)

/public                # 정적 자산

/next-env.d.ts         # Next.js 타입 정의 파일 (자동 생성)
next.config.ts         # Next.js 설정
tsconfig.json          # TypeScript 설정
postcss.config.mjs     # PostCSS 설정 (Tailwind CSS)
components.json        # shadcn/ui 설정 파일
eslint.config.mjs      # ESLint 설정 (Flat Config)
```

## 타입 경로 설정

`tsconfig.json`의 `paths` 설정으로 `@/*` 별칭이 활성화되어 있습니다:
```typescript
// 절대 경로로 임포트 가능
import { cn } from '@/lib/utils'
import Button from '@/components/ui/button'
```

## shadcn/ui 컴포넌트 설치

shadcn 명령줄 도구를 사용하여 컴포넌트를 추가합니다:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

설치된 컴포넌트는 `/components/ui` 디렉토리에 저장되며, TypeScript로 완전히 타이핑되어 있습니다.

## 핵심 개발 패턴

### 라우팅
- App Router 기반의 파일 시스템 라우팅
- 페이지는 `/app` 디렉토리 내 `page.tsx` 파일
- 레이아웃은 `layout.tsx`로 정의

### 스타일링
- Tailwind CSS v4 사용 (PostCSS 통합)
- 조건부 className 병합 시 `cn()` 함수 사용:
  ```typescript
  import { cn } from '@/lib/utils'
  
  <button className={cn("px-4 py-2", isActive && "bg-blue-500")} />
  ```

### 컴포넌트
- shadcn/ui 컴포넌트는 `/components/ui`에 위치
- 커스텀 컴포넌트는 `/components`에 생성
- 모든 컴포넌트는 TypeScript로 작성
- 단순하고 재사용 가능한 설계 유지

### 유틸리티
- 비즈니스 로직 함수는 `/lib`에 정리
- TypeScript 타입 정의 필수

## ESLint 및 타입 체크

ESLint 설정은 Next.js 공식 규칙(`eslint-config-next`)을 사용합니다:
- Core Web Vitals 규칙
- TypeScript 규칙 (strict mode)
- 자동 생성되는 `.next` 디렉토리는 무시됨

`npm run lint`로 코드 검사를 수행합니다.

## Next.js v16 주요 특징

- **React 19 호환성**: 최신 React 기능 사용 가능
- **App Router**: 파일 시스템 기반 라우팅
- **서버 컴포넌트**: 기본 동작 (클라이언트 컴포넌트는 'use client' 필요)
- **자동 타입 생성**: `.next/types`에 자동 타입 정의 생성

AGENTS.md를 참고하여 `node_modules/next/dist/docs/`의 최신 문서를 확인하세요.

## 배포

Vercel Platform이 권장되는 배포 대상입니다:
```bash
npm run build
npm start
```

프로덕션 환경에서는 빌드된 `.next` 디렉토리가 필요합니다.
