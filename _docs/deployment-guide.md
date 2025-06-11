# Next.js 마케팅 대시보드 배포 절차서

**작성자**: ft.claude  
**날짜**: 2025-03-30

## 1. 배포 준비

1. **프로젝트 최종 점검**
   ```bash
   # 개발 서버에서 최종 테스트
   yarn dev
   
   # 빌드 테스트
   yarn build
   ```

2. **환경 변수 설정**
   - `.env.local` 파일 생성 및 설정 (개발 환경)
   - `.env.production` 파일 생성 및 설정 (배포 환경)
   
   예시:
   ```
   # .env.production
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

3. **빌드 최적화 설정**
   - `next.config.js` 파일 설정
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'standalone', // 독립 실행형 출력
     poweredByHeader: false, // 'X-Powered-By' 헤더 제거
     reactStrictMode: true,
     swcMinify: true, // SWC 최적화 사용
   }
   
   module.exports = nextConfig
   ```

4. **정적 분석 및 오류 수정**
   - 빌드 과정에서 발생하는 경고나 오류 수정
   - TypeScript 타입 체크

## 2. Vercel 배포 준비

1. **Vercel CLI 설치** (선택사항)
   ```bash
   yarn global add vercel
   ```

2. **프로젝트 루트에 vercel.json 설정** (필요한 경우)
   ```json
   {
     "buildCommand": "yarn build",
     "devCommand": "yarn dev",
     "installCommand": "yarn install",
     "framework": "nextjs",
     "outputDirectory": ".next"
   }
   ```

3. **최종 코드 커밋**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

## 3. Vercel 배포 방법

### 방법 1: GitHub 연동 배포

1. **GitHub 저장소에 프로젝트 푸시**
   ```bash
   git push origin main
   ```

2. **Vercel 대시보드 접속**
   - [vercel.com](https://vercel.com)에 로그인
   - "New Project" 버튼 클릭

3. **GitHub 저장소 연결**
   - "Import Git Repository" 선택
   - GitHub 계정 연결 (필요한 경우)
   - 저장소 목록에서 프로젝트 선택

4. **프로젝트 설정**
   - Framework Preset: "Next.js" 선택
   - Build and Output Settings 확인
   - Environment Variables 추가 (필요한 경우)

5. **Deploy 버튼 클릭**
   - 배포 진행 상황 모니터링
   - 배포 완료 후 제공된 URL로 접속 테스트

### 방법 2: Vercel CLI 사용

1. **Vercel 로그인**
   ```bash
   vercel login
   ```

2. **프로젝트 폴더에서 배포**
   ```bash
   # 기본 배포 (안내에 따라 설정)
   vercel
   
   # 프로덕션 배포
   vercel --prod
   ```

3. **배포 설정 확인**
   - 프로젝트 이름
   - 배포 지역 선택
   - 환경 변수 설정

## 4. 배포 후 설정

1. **환경 변수 설정**
   - Vercel 대시보드 > 프로젝트 선택
   - "Settings" > "Environment Variables" 클릭
   - 필요한 환경 변수 추가:
     - API 엔드포인트
     - 인증 키
     - 기타 서비스 연결 정보

2. **도메인 설정**
   - Vercel 대시보드 > 프로젝트 선택
   - "Settings" > "Domains" 클릭
   - 커스텀 도메인 추가:
     - 도메인 입력
     - DNS 설정 안내에 따라 설정
     - SSL 인증서 자동 발급 확인

3. **팀 접근 권한 설정** (팀 프로젝트인 경우)
   - "Settings" > "Team" 클릭
   - 팀원 초대 및 권한 설정

## 5. 지속적 배포 설정

1. **자동 배포 설정**
   - Vercel은 기본적으로 GitHub 저장소와 연결된 경우 자동 배포 지원
   - "Settings" > "Git" 에서 설정 확인

2. **브랜치 배포 설정**
   - 개발(dev), 스테이징(staging), 프로덕션(main) 브랜치 설정
   - 각 브랜치별 환경 변수 설정

3. **프리뷰 배포** (Pull Request 기반)
   - Pull Request가 생성될 때마다 자동으로 프리뷰 환경 생성
   - 코드 리뷰 시 실제 동작 확인 가능

## 6. 성능 모니터링 및 분석

1. **Vercel Analytics 활성화**
   - Vercel 대시보드 > 프로젝트 선택
   - "Analytics" 탭 클릭
   - 설정 활성화

2. **Web Vitals 모니터링**
   - Core Web Vitals 지표 확인
   - 페이지별 성능 분석
   - 성능 개선 포인트 파악

3. **사용자 행동 분석** (추가 설정 필요)
   - Google Analytics 등 외부 분석 도구 연동
   - 코드에 분석 스크립트 추가

## 7. 배포 후 검증

1. **기능 테스트**
   - 모든 페이지 및 기능이 예상대로 작동하는지 확인
   - 다양한 기기 및 브라우저에서 테스트

2. **성능 테스트**
   - 페이지 로드 시간 확인
   - Lighthouse 점수 확인
   - Core Web Vitals 지표 확인

3. **보안 검사**
   - HTTPS 작동 확인
   - 환경 변수가 클라이언트에 노출되지 않는지 확인
   - 민감한 정보 보호 상태 확인

## 8. 배포 롤백 계획

1. **롤백 방법**
   - Vercel 대시보드 > 프로젝트 > "Deployments" 탭
   - 이전 배포 버전 선택
   - "Promote to Production" 클릭

2. **문제 발생 시 대응 절차**
   - 이슈 파악 및 기록
   - 팀에 알림
   - 롤백 여부 결정
   - 롤백 실행 (필요한 경우)

## 9. 운영 및 유지보수

1. **정기적인 업데이트**
   - 패키지 업데이트
   ```bash
   yarn upgrade-interactive --latest
   ```
   - 보안 취약점 모니터링

2. **모니터링 설정**
   - Vercel Status 알림 설정
   - 장애 알림 설정

3. **백업 전략**
   - 코드 저장소 백업
   - 데이터 백업 (필요한 경우)

## 10. Vercel 배포의 장점

1. **Next.js와의 완벽한 통합**
   - Next.js를 개발한 Vercel에서 최적화된 배포 환경 제공
   - 모든 Next.js 기능(SSR, ISR, API Routes 등) 지원

2. **글로벌 CDN**
   - 전 세계 엣지 네트워크를 통한 컨텐츠 제공
   - 사용자와 가까운 위치에서 콘텐츠 제공

3. **자동 HTTPS**
   - 모든 도메인에 대한 SSL 인증서 자동 발급 및 갱신
   - 보안 연결 보장

4. **서버리스 함수**
   - API 라우트가 서버리스 함수로 자동 변환
   - 확장성과 비용 효율성 확보

5. **지속적 배포**
   - GitHub/GitLab 연동을 통한 자동 배포
   - 브랜치 기반 환경 분리

## 11. Vercel 프로 팁

1. **커스텀 도메인 와일드카드 설정**
   - `*.example.com` 형태의 와일드카드 도메인 설정 가능
   - 하위 도메인별로 다른 배포 환경 연결 가능

2. **팀 협업 최적화**
   - 코멘트 기능으로 프리뷰 배포에 직접 피드백
   - 배포 접근 권한 세분화

3. **비용 최적화**
   - 함수 호출 모니터링 및 최적화
   - 대용량 정적 파일은 별도 스토리지 서비스 활용

4. **A/B 테스트 구현**
   - 프리뷰 배포를 활용한 A/B 테스트
   - 트래픽 분배 설정

## 12. 트러블슈팅

1. **빌드 실패 시 대응**
   - 빌드 로그 확인
   - 로컬 환경에서 빌드 테스트
   - 필요한 환경 변수 확인

2. **성능 문제 해결**
   - 이미지 최적화 설정 확인
   - 불필요한 JavaScript 제거
   - 서드파티 스크립트 지연 로딩

3. **API 타임아웃 해결**
   - 서버리스 함수 제한 시간 확인
   - 장시간 작업은 백그라운드 작업으로 분리
   - 캐싱 전략 활용