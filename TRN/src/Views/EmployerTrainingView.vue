<script setup>
import { ref } from 'vue'

const courseList = ref([
  { id: 1, title: '직무능력향상 훈련', duration: '2주 과정', location: '서울', date: '2025-11-05 ~ 2025-11-19' },
  { id: 2, title: 'AI 기반 생산성 향상 훈련', duration: '1주 과정', location: '부산', date: '2025-11-10 ~ 2025-11-17' },
  { id: 3, title: '스마트제조 공정개선 교육', duration: '3일 과정', location: '대전', date: '2025-11-07 ~ 2025-11-09' },
])

function apply(course) {
  alert(`"${course.title}" 과정 신청이 완료되었습니다.`)
}
</script>

<template>
  <div class="bg-white dark:bg-slate-800 p-10 rounded-xl shadow mt-10 max-w-5xl mx-auto">
    <h1 class="text-3xl font-extrabold text-govblue dark:text-govsky mb-6">사업주 훈련</h1>
    <p class="text-slate-700 dark:text-slate-300 mb-8">
      재직자 직무능력 향상 및 산업 경쟁력 강화를 위한 사업주 훈련 과정을 확인하고 신청할 수 있습니다.
    </p>

    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-govblue text-white">
          <th class="p-3 rounded-tl-lg">과정명</th>
          <th class="p-3">훈련기간</th>
          <th class="p-3">지역</th>
          <th class="p-3">일정</th>
          <th class="p-3 rounded-tr-lg text-center">신청</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="course in courseList"
          :key="course.id"
          class="border-b hover:bg-slate-50 dark:hover:bg-slate-700 transition"
        >
          <td class="p-3 font-semibold">{{ course.title }}</td>
          <td class="p-3">{{ course.duration }}</td>
          <td class="p-3">{{ course.location }}</td>
          <td class="p-3">{{ course.date }}</td>
          <td class="p-3 text-center">
            <button
              @click="apply(course)"
              class="bg-govblue text-white px-4 py-1 rounded hover:bg-blue-700 text-sm transition"
            >
              신청하기
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
