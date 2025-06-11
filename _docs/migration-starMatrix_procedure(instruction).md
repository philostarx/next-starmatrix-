# Next.js 스타 매트릭스 마이그레이션 작업 절차서(지시사항)

## 1. 프로젝트 구조

### 경로

현재 위치: /Users/macmini-2018/CusorAI_ide/Nodejs/next-starmatrix-app/

### 기존 구조

/_docs/star-matrix/
├── css
│   └── styles.css
├── index.html
├── js
│   ├── chartOptions.js
│   ├── data.js
│   └── main.js
└── lib

### 목표 구조

/next-starmatrix-app/
├── public/
│   └── data/          # 차트 데이터 파일
├── src/
│   ├── app/           # App Router 구조
│   │   ├── page.tsx   # 메인 대시보드 페이지
│   │   └── layout.tsx # 레이아웃 컴포넌트
│   ├── components/
│   │   └── charts/    # echart 기반 차트 컴포넌트
│   │       ├── BarChart.tsx
│   │       ├── LineChart.tsx
│   │       └── PieChart.tsx
│   ├── styles/
│   │   └── globals.css # Tailwind CSS 포함
│   └── utils/
│       └── chartOptions.ts # echart 옵션 설정
├── package.json
├── next.config.js
├── tailwind.config.js
├── .eslintrc.json
└── tsconfig.json

## 2. 작업 단계

### 2.1 초기 설정

- [X] Next.js 프로젝트 생성

  ```bash
  yarn create next-app next-starmatrix-app --no-git
  ```

  - TypeScript: Yes
  - ESLint: Yes
  - Tailwind CSS: Yes
  - src/ directory: Yes
  - App Router: Yes
  - Turbopack: Yes
  - Import alias: Yes
- [X] 필요한 패키지 설치

  ```bash
  yarn add echarts echarts-for-react axios swr
  yarn add -D @types/node @types/react typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-tailwindcss
  ```
- [X] ESLint 설정 (.eslintrc.json)

  ```json
  {
    "plugins": ["tailwindcss"],
    "extends": ["plugin:tailwindcss/recommended"]
  }
  ```

### 2.2 파일 이동 및 구성

- [ ] 데이터 파일 변환: `/_docs/star-matrix/js/data.js` → `/public/data/chartData.json`
- [ ] CSS 파일 마이그레이션: `/_docs/star-matrix/css/styles.css` → `/src/styles/globals.css`
- [ ] 차트 옵션 파일 변환: `/_docs/star-matrix/js/chartOptions.js` → `/src/utils/chartOptions.ts`
- [ ] 필요한 폴더 구조 세팅

### 2.3 TypeScript 타입 정의

- [ ] `/src/types/charts.ts` 파일 생성 및 다음 인터페이스 정의:

  - `ChartData` - 차트 데이터 구조를 정의하는 인터페이스
  - `ChartOptions` - ECharts 옵션 타입 정의
  - `ChartComponentProps` - 차트 컴포넌트 props 인터페이스
- [ ] 예시 타입 정의:

  ```typescript
  // 차트 데이터 인터페이스
  export interface ChartData {
    categories: string[];
    series: {
      name: string;
      data: number[];
    }[];
  }

  // 차트 옵션 타입
  export type ChartOptions = echarts.EChartsOption;

  // 차트 컴포넌트 props 인터페이스
  export interface ChartComponentProps {
    data: ChartData;
    options?: ChartOptions;
    height?: string | number;
    width?: string | number;
    className?: string;
  }
  ```

### 2.4 컴포넌트 생성

- [ ] `/src/components/charts/BarChart.tsx`
- [ ] `/src/components/charts/LineChart.tsx`
- [ ] `/src/components/charts/PieChart.tsx`
- [ ] `/src/components/ui/KPIDisplay.tsx`
- [ ] `/src/components/ui/DataTable.tsx`
- [ ] `/src/app/page.tsx`
- [ ] `/src/app/layout.tsx`

### 2.5 스타일 마이그레이션

- [ ] 기존 CSS를 Tailwind 클래스로 변환
- [ ] 반응형 디자인 유지 및 개선
- [ ] 다크 모드 지원 추가(선택 사항)
- [ ] 공통 스타일 컴포넌트화

### 2.6 데이터 처리

- [ ] JSON 형식으로 차트 데이터 구조화
- [ ] 정적 데이터 로딩 구현
- [ ] SWR을 활용한 데이터 페칭 로직 구현(필요시)
- [ ] 각 데이터 타입에 맞는 인터페이스 적용

### 2.7 최적화 및 테스트

- [ ] 컴포넌트 렌더링 최적화(메모이제이션 적용)
- [ ] 이미지/자산 최적화
- [ ] 반응형 레이아웃 테스트(모바일, 태블릿, 데스크톱)
- [ ] 크로스 브라우저 호환성 테스트
- [ ] 접근성(a11y) 개선 및 테스트

## 3. 주의사항

1. 컴포넌트 변환 시 기존 ECharts 옵션 유지
2. 반응형 디자인 깨지지 않도록 주의
3. TypeScript 타입 정의를 철저히 하여 타입 안정성 확보
4. 성능 최적화 고려(불필요한 리렌더링 방지)
5. 모든 파일에서 프로젝트 이름 일관성 유지(next-starmatrix-app)

## 4. 예상 소요 시간

- 초기 설정: 30분
- 파일 이동 및 구성: 30분
- TypeScript 타입 정의: 30분
- 컴포넌트 생성: 2시간
- 스타일 마이그레이션: 1시간
- 데이터 처리: 1시간
- 최적화 및 테스트: 1시간
  총 예상 시간: 6시간 30분

## 5. 백업

작업 전 반드시 기존 코드 백업
