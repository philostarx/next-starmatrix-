# 스타 매트릭스 대시보드 Vercel 배포 절차서

**작성자**: 지대리
**날짜**: 2025-04-01

---

## 1. 배포 준비

- [X] 개발 서버 실행 및 최종 확인

```bash
yarn dev      # 개발 서버 실행
```

- [X] 빌드 테스트

```bash
yarn build    # 빌드 확인
yarn start    # 프로덕션 서버 실행
```

- [X] 환경 변수 설정 파일 작성
  - `.env.local` (개발용)
  - `.env.production` (배포용)

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

- [ ] 설정 파일 점검

  - `next.config.js`, `tailwind.config.js`, `postcss.config.mjs`
- [ ] 타입 오류 검사

```bash
yarn tsc --noEmit
```

---

## 2. Vercel 배포 방법

### 2.1 GitHub 연동 배포

- [ ] GitHub 저장소 연결 및 푸시

```bash
git add .
git commit -m "deploy: init starmatrix dashboard"
git push origin main
```

- [ ] Vercel 대시보드 접속 및 New Project 생성
- [ ] GitHub 저장소 선택 및 Framework: **Next.js** 선택
- [ ] 환경 변수 `.env.production` 입력
- [ ] Deploy 버튼 클릭

### 2.2 Vercel CLI 배포 (선택)

- [ ] Vercel CLI 설치 및 로그인

```bash
yarn global add vercel
vercel login
```

- [ ] 프로덕션 배포 실행

```bash
vercel --prod
```

---

## 3. 배포 후 설정

- [ ] Vercel 대시보드 환경 변수 추가 (`NEXT_PUBLIC_API_URL`, 인증 키 등)
- [ ] 도메인 연결 및 SSL 인증서 확인
- [ ] 팀 접근 권한 설정 (필요시)

---

## 4. 기능 및 성능 검증

- [ ] 메인 대시보드(`/`) 기능 테스트
- [ ] KPI, 차트, 테이블 정상 렌더링 확인
- [ ] Lighthouse 또는 Web Vitals 성능 확인
- [ ] 다양한 기기(모바일/태블릿/PC)에서 반응형 테스트
- [ ] HTTPS 작동 및 민감 정보 노출 여부 점검

---

## 5. 배포 유지보수

- [ ] GitHub 연동 자동 배포 확인 (PR 기반 프리뷰 포함)
- [ ] 정기 패키지 업데이트

```bash
yarn upgrade-interactive --latest
```

- [ ] 롤백 시나리오 점검
  - Vercel > Deployments → 이전 버전 Promote to Production

---

## 6. 부록: 프로젝트 구조 (요약)

```
/next-starmatrix-app/
├── public/data/chartData.json
├── src/
│   ├── app/            # page.tsx, layout.tsx, globals.css
│   ├── components/     # charts/, ui/
│   ├── types/          # charts.ts
│   └── utils/          # chartOptions.ts
├── tailwind.config.js
├── postcss.config.mjs
├── next.config.js
└── package.json
```

---

**비고**: 본 문서는 스타 매트릭스 대시보드 마이그레이션 작업 결과(`2025년 3월`) 기준으로 작성되었습니다.
