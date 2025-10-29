<script setup>
import { ref } from 'vue'

const newsList = ref([
  { id: 1, title: '2025년도 직업능력개발훈련 공고', date: '2025-10-15', desc: '고용노동부 고시 제2025-32호에 따른 훈련지원사업 공고입니다.' },
  { id: 2, title: '사이버연수원 신규 과정 개설', date: '2025-09-20', desc: 'AI, 보안, 데이터 분야 총 15개 신규 교육과정이 개설되었습니다.' },
  { id: 3, title: '지니 포털 ISMS-P 인증 완료', date: '2025-08-03', desc: '개인정보보호 관리체계(ISMS-P) 인증을 획득했습니다.' },
])
</script>

<template>
  <div class="p-10 bg-sky-50 dark:bg-slate-900 dark:text-slate-100 min-h-screen">
    <h1 class="text-3xl font-extrabold mb-8 text-govblue dark:text-govsky">공지사항 및 보도자료</h1>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="news in newsList"
        :key="news.id"
        class="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all overflow-hidden"
      >
        <div class="p-5">
          <p class="text-slate-400 text-sm mb-2">{{ news.date }}</p>
          <h3 class="font-bold text-lg text-govblue dark:text-govsky mb-1">{{ news.title }}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm">{{ news.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
