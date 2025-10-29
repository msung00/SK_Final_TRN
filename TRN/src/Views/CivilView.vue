<script setup>
import { ref } from 'vue'

const complaintList = ref([
  { id: 1, title: '민원 신청 안내', content: '전자 민원 신청 절차 및 처리기간을 확인할 수 있습니다.' },
  { id: 2, title: '증명서 발급', content: '각종 증명서(교육이수, 자격인증 등)를 온라인으로 발급받을 수 있습니다.' },
  { id: 3, title: '불편 신고', content: '홈페이지 이용 불편이나 정보 오류를 신고할 수 있습니다.' },
  { id: 4, title: '정책 건의', content: '서비스 개선을 위한 정책 제안을 제출할 수 있습니다.' },
])

function apply(type) {
  alert(`${type} 신청 페이지로 이동합니다.`)
}
</script>

<template>
  <div class="bg-white dark:bg-slate-800 rounded-xl shadow p-10 mx-auto max-w-5xl mt-10">
    <h1 class="text-3xl font-extrabold mb-6 text-govblue dark:text-govsky">민원 안내</h1>
    <p class="text-slate-700 dark:text-slate-300 mb-8">
      TRN 기관은 국민의 의견을 소중히 여기며, 민원 접수 및 증명서 발급 서비스를 제공합니다.
    </p>

    <div class="grid md:grid-cols-2 gap-6">
      <div
        v-for="item in complaintList"
        :key="item.id"
        class="border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition bg-slate-50 dark:bg-slate-900"
      >
        <h2 class="text-xl font-bold text-govblue dark:text-govsky mb-2">{{ item.title }}</h2>
        <p class="text-slate-600 dark:text-slate-300 mb-4">{{ item.content }}</p>
        <button
          @click="apply(item.title)"
          class="bg-govblue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          신청하기
        </button>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-4 border-l-4 border-govblue pl-3">자주 묻는 민원 FAQ</h2>
      <ul class="space-y-3 text-slate-700 dark:text-slate-300">
        <li>• 민원 처리 기간은 신청 후 평균 3~5일 이내입니다.</li>
        <li>• 증명서 발급은 로그인 후 가능합니다.</li>
        <li>• 정책 건의는 내부 검토 후 답변까지 최대 7일이 소요됩니다.</li>
        <li>• 접수 내역은 ‘마이페이지’에서 확인할 수 있습니다.</li>
      </ul>
    </div>
  </div>
</template>
