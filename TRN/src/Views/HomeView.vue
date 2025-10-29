<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const images = ['/src/images/main1.jpg', '/src/images/main2.jpg', '/src/images/main3.jpg']
const current = ref(0)
let interval
onMounted(() => (interval = setInterval(() => (current.value = (current.value + 1) % images.length), 4000)))
onBeforeUnmount(() => clearInterval(interval))

const newsList = [
  { id: 1, title: '2025년도 직업능력개발훈련 공고', date: '2025-10-15', desc: '고용노동부 고시 제2025-32호에 따라 훈련지원사업 공고가 게시되었습니다.' },
  { id: 2, title: '사이버연수원 신규 과정 오픈', date: '2025-09-12', desc: 'AI·보안·데이터 분야 총 15개 신규 교육과정이 개설되었습니다.' },
  { id: 3, title: 'TRN 포털 ISMS-P 인증 완료', date: '2025-08-03', desc: '개인정보보호 관리체계 인증을 취득했습니다.' },
]
</script>

<template>
  <section class="relative w-full h-[80vh] overflow-hidden">
    <transition name="fade" mode="out-in">
      <img :key="current" :src="images[current]" class="absolute w-full h-full object-cover" />
    </transition>
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center items-center text-white text-center px-6">
      <h1 class="text-5xl font-extrabold tracking-tight mb-2 animate-fade-in"> TRN 포털</h1>
      <p class="text-lg opacity-90 animate-slide-up">국민과 함께하는 디지털 교육 플랫폼</p>
    </div>
  </section>

  <section class="mt-16 px-8">
    <h2 class="text-2xl font-bold mb-6 border-l-4 border-govblue pl-3">주요 서비스</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <RouterLink to="/training/employer" class="bg-white border rounded-xl p-6 hover:scale-105 hover:shadow-xl transition-all">
        <h3 class="text-xl font-bold text-govblue mb-2">사업주훈련</h3>
        <p class="text-slate-600">기업 맞춤형 직무능력 개발훈련</p>
      </RouterLink>
      <RouterLink to="/training/safety" class="bg-white border rounded-xl p-6 hover:scale-105 hover:shadow-xl transition-all">
        <h3 class="text-xl font-bold text-govblue mb-2">산업안전보건교육</h3>
        <p class="text-slate-600">근로자 안전보건 의식 향상</p>
      </RouterLink>
      <RouterLink to="/training/online" class="bg-white border rounded-xl p-6 hover:scale-105 hover:shadow-xl transition-all">
        <h3 class="text-xl font-bold text-govblue mb-2">사이버연수원</h3>
        <p class="text-slate-600">언제 어디서나 온라인 학습</p>
      </RouterLink>
    </div>
  </section>

  <section class="mt-20 bg-sky-50 py-12 px-8 rounded-t-2xl">
    <h2 class="text-2xl font-bold mb-6 border-l-4 border-govblue pl-3">공지 및 보도자료</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div v-for="news in newsList" :key="news.id" class="bg-white border p-5 rounded-xl hover:shadow-lg transition">
        <h3 class="text-lg font-semibold mb-1">{{ news.title }}</h3>
        <p class="text-sm text-slate-500 mb-2">{{ news.date }}</p>
        <p class="text-slate-700">{{ news.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.8s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.animate-fade-in { animation: fade-in 1s ease-in-out; }
.animate-slide-up { animation: slide-up 1s ease-in-out; }
</style>
