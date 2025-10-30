<h1 align="center">🏛️ TRN 교육훈련 포털</h1>

<p align="center">
  <b>Training & Regulation Network Portal</b><br>
  Vue.js + TailwindCSS 기반 교육육 훈련·민원 포털<br>
  <i>ISMS-P 인증 구조를 반영한 정보보호 중심형 웹 서비스</i>
</p>

---

<p align="center">
  <img width="1900" height="871" alt="TRN" src="https://github.com/user-attachments/assets/e195c5ba-fe71-4f2b-9013-6e3aab209266" />
  <br>
  <em>TRN 공공기관 포털 로고</em>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-42B883?style=for-the-badge&logo=vue.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>
</p>

---

## 🌟 프로젝트 개요

> TRN 공공기관 포털은 **교육훈련, 민원, 정보공개, 보안정책**을 통합 제공하는  
> **Vue 3 + TailwindCSS 기반 ISMS-P 인증 대응형 공공서비스 플랫폼**입니다.  
> 실제 정부 산하기관 UX를 모티브로, 접근성·보안성·사용성을 모두 고려했습니다.

---

## 🚀 주요 기능

### 🔐 로그인 / 회원가입 / 세션 유지
- 실시간 반응형 로그인 상태 관리 (`eventBus` 기반)
- 새로고침 후에도 자동 로그인 유지 (`localStorage`)
- 로그인 즉시 사용자명 표시 (`홍길동 님`)
- 로그아웃 즉시 반영 및 세션 초기화

---

### 🏫 훈련 및 교육 관리
| 구분 | 주요 기능 |
|------|------------|
| **사업주 훈련** | 재직자 직무능력 향상 과정, 신청 버튼 활성화 |
| **산업안전보건교육** | 근로자 안전보건 교육 과정, 신청 시 팝업 |
| **사이버 연수원** | 온라인 교육 시스템 (확장 예정) |

---

### 🧾 민원 서비스 (CivilView)
- 전자민원 신청, 증명서 발급, 불편신고, 정책건의 기능 포함  
- 자주 묻는 질문(FAQ) 섹션  
- “신청하기” 클릭 시 즉시 응답 팝업 표시  

---

### 🗺️ 기관 및 고객 지원
- **공지·보도**: 최신 공지 및 보도자료  
- **기관소개**: 조직도, 비전, 담당자 정보  
- **오시는 길**: Google Maps 기반 위치 표시  
  → `서울특별시 서대문구 어쩌고` 좌표 반영  
- **고객센터**: FAQ + 지도 + 문의 처리 안내  

---

### 🌙 사용자 경험 (UX)
- 다크모드 / 라이트모드 토글  
- govblue·govsky 공공기관 전용 컬러 팔레트  
- 부드러운 Hover & Transition 효과  
- 모바일 대응(선택적), 반응형 카드형 레이아웃  

---

## 🛠️ 기술 스택

| 영역 | 기술 |
|------|------|
| **Frontend** | Vue 3, TailwindCSS, Vite |
| **상태관리** | eventBus (Vue reactive 기반) |
| **라우팅** | Vue Router |
| **디자인 가이드** | 공공기관 웹 접근성 지침 준수 (WA 인증 구조 참고) |

---

```프로젝트 구조
📦 trn-portal/
├── 📁 src/
│   ├── 📁 assets/
│   │   └── tailwind.css
│   ├── 📁 images/
│   │   ├── genie.png
│   │   ├── lamp.png
│   │   ├── 조직도.png
│   │   └── portal.png
│   ├── 📁 router/
│   │   └── index.js
│   ├── 📁 views/
│   │   ├── HomeView.vue
│   │   ├── LoginView.vue
│   │   ├── RegisterView.vue
│   │   ├── CivilView.vue
│   │   ├── EmployerTrainingView.vue
│   │   ├── SafetyTrainingView.vue
│   │   ├── OnlineTrainingView.vue
│   │   ├── NewsView.vue
│   │   ├── AboutView.vue
│   │   ├── MapView.vue
│   │   └── ContactView.vue
│   ├── 📜 App.vue
│   ├── 📜 eventBus.js
│   └── 📜 main.js
├── 📜 index.html
├── 📜 package.json
├── 📜 tailwind.config.js
├── 📜 postcss.config.js
└── 📜 vite.config.js
