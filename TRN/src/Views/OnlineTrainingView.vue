<template>
  <div class="p-10">
    <h1 class="text-3xl font-extrabold mb-6 text-govblue">사이버연수원</h1>
    <p class="text-slate-700 mb-4">
      시간과 장소의 제약 없이 학습 가능한 온라인 교육 플랫폼입니다.  
      아래 과정들은 정보보안, 인공지능, 직무능력 향상 등 다양한 분야를 포함합니다.
    </p>

    <table class="w-full text-left border-collapse text-sm">
      <thead>
        <tr class="bg-govblue text-white">
          <th class="p-3 rounded-tl-lg">번호</th>
          <th class="p-3">과정명</th>
          <th class="p-3">과정유형</th>
          <th class="p-3">교육기간</th>
          <th class="p-3">지역</th>
          <th class="p-3">정원</th>
          <th class="p-3 rounded-tr-lg text-center">신청</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, i) in courses" :key="course.id" class="border-b hover:bg-slate-50 transition">
          <td class="p-3 text-center">{{ i + 1 }}</td>
          <td class="p-3 font-semibold">{{ course.name }}</td>
          <td class="p-3">{{ course.type }}</td>
          <td class="p-3">{{ course.period }}</td>
          <td class="p-3">{{ course.location }}</td>
          <td class="p-3 text-center">{{ course.capacity }}</td>
          <td class="p-3 text-center">
            <button
              class="bg-govblue text-white px-4 py-1 rounded hover:bg-blue-700 text-xs"
              @click="apply(course.name)"
            >
              {{ course.apply ? '신청 완료' : '신청' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const courses = ref([
  { id: 1, name: '정보보안 기초', type: 'IT 보안', period: '상시 수강', location: '온라인', capacity: 100, apply: false },
  { id: 2, name: 'AI 기초 과정', type: '인공지능', period: '2025-11-01 ~ 2025-12-31', location: '온라인', capacity: 120, apply: false },
  { id: 3, name: '데이터 분석 실무', type: '데이터', period: '2025-12-01 ~ 2026-01-15', location: '서울', capacity: 40, apply: false },
  { id: 4, name: '웹 서비스 보안', type: '정보보호', period: '2025-11-15 ~ 2025-12-15', location: '부산', capacity: 30, apply: false },
  { id: 5, name: '산업안전관리 교육', type: '산업안전', period: '2025-10-01 ~ 2025-10-30', location: '대전', capacity: 60, apply: false },
  { id: 6, name: 'AI 모델 이해 및 응용', type: 'AI', period: '2025-11-20 ~ 2026-01-10', location: '광주', capacity: 50, apply: false },
  { id: 7, name: '클라우드 서비스 개론', type: '클라우드', period: '2025-09-15 ~ 2025-11-30', location: '인천', capacity: 80, apply: false },
  { id: 8, name: 'ISMS-P 실무 이해', type: '정보보호', period: '2025-11-05 ~ 2025-12-05', location: '서울', capacity: 50, apply: false },
  { id: 9, name: '개인정보보호 관리체계', type: '법정의무', period: '상시', location: '온라인', capacity: 200, apply: false },
  { id: 10, name: 'RPA 업무 자동화', type: '업무혁신', period: '2025-10-15 ~ 2025-12-01', location: '부산', capacity: 35, apply: false },
  { id: 11, name: 'React 프론트엔드 실습', type: '개발', period: '2025-12-10 ~ 2026-01-25', location: '대전', capacity: 45, apply: false },
  { id: 12, name: '산업기술 보안관리', type: '보안', period: '2025-09-20 ~ 2025-10-20', location: '서울', capacity: 50, apply: false },
  { id: 13, name: 'AI 윤리와 개인정보보호', type: 'AI/법정의무', period: '상시', location: '온라인', capacity: 120, apply: false },
  { id: 14, name: '네트워크 구축 실무', type: 'IT', period: '2025-11-11 ~ 2025-12-21', location: '부산', capacity: 25, apply: false },
  { id: 15, name: '디지털 전환 역량 강화', type: '경영혁신', period: '2025-10-05 ~ 2025-11-25', location: '서울', capacity: 60, apply: false },
])

const apply = (name) => {
  alert(`'${name}' 과정에 신청이 완료되었습니다.`)
}
</script>

<style scoped>
table th, table td { border-right: 1px solid #e2e8f0; }
table th:last-child, table td:last-child { border-right: none; }
</style>
