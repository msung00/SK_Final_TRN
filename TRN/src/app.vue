<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { eventBus } from '@/eventBus' 
import trnLogo from '@/images/genie.png'

const dark = ref(false)
const showTop = ref(false)
const username = ref(eventBus.username)
const router = useRouter()


watch(
  () => eventBus.username,
  (newVal) => {
    username.value = newVal
  }
)

onMounted(() => {
  const saved = localStorage.getItem('trn.dark') === '1'
  setDark(saved)
  window.addEventListener('scroll', () => {
    showTop.value = window.scrollY > 200
  })
})

function toggleDark() {
  setDark(!dark.value)
}
function setDark(v) {
  dark.value = v
  document.documentElement.classList.toggle('dark', v)
  localStorage.setItem('trn.dark', v ? '1' : '0')
}
function scrollTopSmooth() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function logout() {
  localStorage.removeItem('trn.username')
  eventBus.clear() 
  router.push('/')
}
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-slate-100 transition-colors"
  >
    <!-- 헤더 -->
    <header
      class="bg-govblue text-white px-8 py-4 flex justify-between items-center shadow-lg"
    >
      <!-- 로고 -->
      <RouterLink to="/" class="flex items-center gap-2 hover:opacity-90">
        <img :src="trnLogo" alt="TRN 로고" class="w-8 h-8 object-contain" />
        <h1 class="text-2xl font-bold tracking-tight">TRN 교육훈련 포털</h1>
      </RouterLink>

      <!-- 메뉴 -->
      <nav class="hidden md:flex gap-6 text-sm font-semibold">
        <RouterLink to="/" class="hover:text-govsky">홈</RouterLink>
        <RouterLink to="/training/employer" class="hover:text-govsky">사업주훈련</RouterLink>
        <RouterLink to="/training/safety" class="hover:text-govsky">산업안전보건교육</RouterLink>
        <RouterLink to="/training/online" class="hover:text-govsky">사이버연수원</RouterLink>
        <RouterLink to="/news" class="hover:text-govsky">공지·보도</RouterLink>
        <RouterLink to="/about" class="hover:text-govsky">기관소개</RouterLink>
        <RouterLink to="/map" class="hover:text-govsky">오시는 길</RouterLink>
        <RouterLink to="/contact" class="hover:text-govsky">고객센터</RouterLink>
      </nav>

      <!-- 로그인 / 로그아웃 / 회원가입 -->
      <div class="flex items-center gap-3">
        <template v-if="username">
          <span class="text-sm font-semibold">{{ username }} 님</span>
          <button
            @click="logout"
            class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg text-sm"
          >
            로그아웃
          </button>
        </template>

        <template v-else>
          <RouterLink
            to="/login"
            class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg text-sm font-semibold"
          >
            로그인
          </RouterLink>
          <RouterLink
            to="/register"
            class="bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg text-sm font-semibold"
          >
            회원가입
          </RouterLink>
        </template>

        <button
          @click="toggleDark"
          class="rounded-lg bg-white/15 hover:bg-white/25 px-3 py-1.5 text-sm transition"
        >
          {{ dark ? '라이트' : '다크' }}
        </button>
      </div>
    </header>

    <!-- 메인 콘텐츠 -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- 푸터 -->
    <footer
      class="bg-slate-900 text-slate-300 py-10 text-center text-sm mt-16 border-t border-slate-800"
    >
      <div class="flex flex-wrap justify-center gap-6 mb-4 text-sm">
        <RouterLink to="/training/employer" class="hover:text-white">사업주훈련</RouterLink>
        <RouterLink to="/training/safety" class="hover:text-white">산업안전보건교육</RouterLink>
        <RouterLink to="/training/online" class="hover:text-white">사이버연수원</RouterLink>
        <RouterLink to="/contact" class="hover:text-white">고객센터</RouterLink>
      </div>
      <p class="font-semibold text-white mb-2">TRN 기관 포털</p>
      <p>
        대표자: 손민성 | 사업자등록번호: 123-45-6789 |
        신고번호: 제2025-TRN-0001호 <br />TEL: 1234-1234 | Email:
        trn@naver.com | 개인정보보호책임자: 손민성
      </p>
      <p class="mt-3">주소: 서울특별시 서대문구 어쩌고</p>
    </footer>

    <!-- 위로 가기 버튼 -->
    <button
      v-if="showTop"
      @click="scrollTopSmooth"
      class="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-govblue text-white w-12 h-12 hover:bg-blue-700"
    >
      ↑
    </button>
  </div>
</template>

<style>
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
