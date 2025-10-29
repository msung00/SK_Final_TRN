import { createRouter, createWebHistory } from 'vue-router'

// === 메인 페이지 ===
import HomeView from '@/views/HomeView.vue'

// === 로그인 / 회원가입 ===
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

// === 훈련 관련 ===
import EmployerTrainingView from '@/views/EmployerTrainingView.vue'
import SafetyTrainingView from '@/views/SafetyTrainingView.vue'
import OnlineTrainingView from '@/views/OnlineTrainingView.vue'

// === 기타 페이지 ===
import NewsView from '@/views/NewsView.vue'
import AboutView from '@/views/AboutView.vue'
import MapView from '@/views/MapView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 기본 홈
    { path: '/', name: 'home', component: HomeView },

    // 로그인 & 회원가입
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },

    // 훈련 관련
    { path: '/training/employer', name: 'employer', component: EmployerTrainingView },
    { path: '/training/safety', name: 'safety', component: SafetyTrainingView },
    { path: '/training/online', name: 'online', component: OnlineTrainingView },

    // 공공 포털 정보 메뉴
    { path: '/news', name: 'news', component: NewsView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/map', name: 'map', component: MapView },
    { path: '/contact', name: 'contact', component: ContactView },

    // 예외 처리 (없는 경로 → 홈으로)
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
