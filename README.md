# Star Matrix Dashboard

> **작성자**: ft.s.curs | **작성일**: 2025년 1월

## 📊 프로젝트 소개

Star Matrix Dashboard는 Apache ECharts를 활용한 데이터 시각화 대시보드입니다. 
Next.js 14와 React 18 기반으로 구축되었으며, 바 차트, 라인 차트, 파이 차트를 통해 데이터를 효과적으로 표시합니다.

## 🛠️ 기술 스택

### Core Framework
- **Next.js**: 14.2.15 (App Router)
- **React**: 18.3.1
- **TypeScript**: 5.8.2
- **Node.js**: 18.20.5

### 차트 라이브러리
- **Apache ECharts**: 5.6.0
- **echarts-for-react**: 3.0.2

### 스타일링
- **Tailwind CSS**: 3.4.1
- **PostCSS**: 8.5.4

### 패키지 매니저
- **pnpm**: 8.15.9

### 기타 도구
- **ESLint**: 9.28.0
- **Autoprefixer**: 10.4.21
- **SWR**: 2.3.3 (데이터 페칭)

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.20.5 이상
- pnpm 8.x 이상

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린팅 검사
pnpm lint
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 대시보드 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
│   ├── charts/           # 차트 컴포넌트
│   │   ├── BarChart.tsx  # 바 차트
│   │   ├── LineChart.tsx # 라인 차트
│   │   └── PieChart.tsx  # 파이 차트
│   └── ui/               # UI 컴포넌트
│       ├── KPIDisplay.tsx    # KPI 표시
│       └── DataTable.tsx     # 데이터 테이블
├── types/                # TypeScript 타입 정의
│   └── charts.ts         # 차트 관련 타입
└── utils/                # 유틸리티 함수
    └── chartOptions.ts   # 차트 설정 옵션
```

## 📊 차트 컴포넌트 사용법

### 바 차트
```tsx
import BarChart from '@/components/charts/BarChart';

<BarChart 
  data={{
    categories: ['A', 'B', 'C'],
    values: [10, 20, 30]
  }}
  height="400px"
/>
```

### 라인 차트
```tsx
import LineChart from '@/components/charts/LineChart';

<LineChart 
  data={{
    xAxis: ['Jan', 'Feb', 'Mar'],
    series: [100, 200, 150]
  }}
  height="400px"
/>
```

### 파이 차트
```tsx
import PieChart from '@/components/charts/PieChart';

<PieChart 
  data={[
    { value: 335, name: 'Category A' },
    { value: 310, name: 'Category B' }
  ]}
  height="400px"
/>
```

## 🎨 디자인 시스템

### 색상 팔레트
- **그레이 스케일**: #f0f0f0, #d9d9d9, #bdbdbd, #969696, #737373, #525252, #666666
- **배경**: 흰색 기반 미니멀 디자인
- **강조색**: 부드러운 회색톤

### 차트 스타일링
- **미니멀 디자인**: 불필요한 요소 제거
- **반응형**: 다양한 화면 크기 지원
- **부드러운 애니메이션**: ECharts 기본 애니메이션 활용

## 📚 마이그레이션 히스토리

### 2025년 1월 - 안정성 강화 마이그레이션
- **패키지 관리자**: Yarn → pnpm 8.15.9
- **Next.js**: 15.2.4 → 14.2.15 (안정성 우선)
- **React**: 19.1.0 → 18.3.1 (생태계 호환성)
- **의존성 정리**: deprecated 패키지 식별

## 🚀 배포

### Vercel 배포
프로젝트는 Vercel에 배포 설정이 완료되어 있습니다.

```bash
# Vercel CLI 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 환경 변수
현재 프로젝트는 추가 환경 변수가 필요하지 않습니다.

## 🔧 개발 가이드

### 새로운 차트 추가
1. `src/components/charts/` 디렉토리에 새 차트 컴포넌트 생성
2. `src/types/charts.ts`에 타입 정의 추가
3. `src/utils/chartOptions.ts`에 차트 옵션 추가

### 스타일 커스터마이징
- Tailwind CSS 클래스 사용
- `src/app/globals.css`에서 글로벌 스타일 수정
- 차트별 스타일은 `chartOptions.ts`에서 관리

## 📋 알려진 이슈

- ESLint 9와 Next.js 14 간 호환성 경고 (기능적 문제 없음)
- @types/echarts deprecated (ECharts 자체 타입 정의 사용 권장)

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새 기능 브랜치를 만듭니다 (`git checkout -b feature/new-feature`)
3. 변경사항을 커밋합니다 (`git commit -am 'Add new feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/new-feature`)
5. Pull Request를 생성합니다

## 📄 라이센스

이 프로젝트는 개인 학습 및 개발 목적으로 제작되었습니다.

---

**Star Matrix Dashboard** - 데이터를 아름답게 시각화하는 대시보드 솔루션
