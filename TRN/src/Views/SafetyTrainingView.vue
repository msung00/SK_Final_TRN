<script setup>
import { ref } from 'vue'

const safetyCourses = ref([
  { id: 1, title: '산업안전보건 기본교육', duration: '2일', location: '서울', date: '2025-11-02 ~ 2025-11-03' },
  { id: 2, title: '위험성 평가 실무', duration: '3일', location: '대전', date: '2025-11-06 ~ 2025-11-08' },
  { id: 3, title: '화재 예방 및 응급조치', duration: '1일', location: '부산', date: '2025-11-10' },
])

function applySafety(course) {
  alert(`"${course.title}" 교육 신청이 완료되었습니다.`)
}
</script>

<template>
  <div class="bg-white dark:bg-slate-800 p-10 rounded-xl shadow mt-10 max-w-5xl mx-auto">
    <h1 class="text-3xl font-extrabold text-govblue dark:text-govsky mb-6">산업안전보건교육</h1>
    <p class="text-slate-700 dark:text-slate-300 mb-8">
      근로자의 안전의식 향상과 산업재해 예방을 위한 필수 안전보건 교육 과정을 제공합니다.
    </p>

    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-govblue text-white">
          <th class="p-3 rounded-tl-lg">교육명</th>
          <th class="p-3">교육기간</th>
          <th class="p-3">지역</th>
          <th class="p-3">일정</th>
          <th class="p-3 rounded-tr-lg text-center">신청</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="course in safetyCourses"
          :key="course.id"
          class="border-b hover:bg-slate-50 dark:hover:bg-slate-700 transition"
        >
          <td class="p-3 font-semibold">{{ course.title }}</td>
          <td class="p-3">{{ course.duration }}</td>
          <td class="p-3">{{ course.location }}</td>
          <td class="p-3">{{ course.date }}</td>
          <td class="p-3 text-center">
            <button
              @click="applySafety(course)"
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
