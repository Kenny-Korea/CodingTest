# 코딩테스트 연습

코딩 테스트 문제를 연습하고 해설을 볼 수 있는 웹 애플리케이션입니다.

## 주요 기능

- 📄 PDF 문제 뷰어
- 💻 코드 에디터 및 Syntax Highlighting
- 🔄 PDF 페이지와 코드 자동 동기화
- 📱 PWA 지원 (오프라인 사용 가능)
- 🎨 다크모드 지원 (준비 중)

## 기술 스택

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **PDF Viewer**: react-pdf
- **Code Highlighting**: Prism.js
- **PWA**: vite-plugin-pwa, Workbox
- **Deployment**: GitHub Pages

## 개발 환경 설정

### 필수 요구사항

- Node.js 20.x 이상
- npm

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## PWA 기능

이 애플리케이션은 PWA(Progressive Web App)로 구성되어 있어 다음과 같은 기능을 제공합니다:

- 📲 홈 화면에 추가 가능
- 🔌 오프라인 지원
- 🚀 빠른 로딩 속도
- 🔄 자동 업데이트

### PWA 설치 방법

1. 브라우저에서 사이트 접속
2. 주소창 또는 메뉴에서 "홈 화면에 추가" 선택
3. 앱처럼 사용 가능

## GitHub Pages 배포

### 초기 설정 (한 번만 실행)

1. GitHub 저장소의 Settings로 이동
2. 왼쪽 메뉴에서 "Pages" 선택
3. Source를 "GitHub Actions"로 설정

### 자동 배포

- `main` 브랜치에 push하면 자동으로 빌드 및 배포됩니다.
- GitHub Actions 워크플로우가 자동으로 실행됩니다.
- 배포 상태는 저장소의 "Actions" 탭에서 확인할 수 있습니다.

### 수동 배포

GitHub 저장소의 "Actions" 탭에서 "Deploy to GitHub Pages" 워크플로우를 수동으로 실행할 수 있습니다.

## 프로젝트 구조

```
CodingTest/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD
├── public/
│   ├── section01-10/         # 섹션별 문제 및 해설
│   ├── pwa-192x192.png       # PWA 아이콘
│   ├── pwa-512x512.png       # PWA 아이콘
│   └── icon.svg              # 파비콘
├── src/
│   ├── components/           # UI 컴포넌트
│   ├── data/                 # 데이터 파일
│   ├── lib/                  # 유틸리티 함수
│   ├── App.tsx               # 메인 앱 컴포넌트
│   ├── Section.tsx           # 섹션 뷰어 컴포넌트
│   └── main.tsx              # 진입점
├── vite.config.ts            # Vite 설정 (PWA 포함)
└── package.json

```

## 라이선스

MIT License
