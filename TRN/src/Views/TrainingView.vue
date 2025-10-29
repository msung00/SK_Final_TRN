<script setup>
const trainings = [
  { id: 1, name: '사업주 위탁 직무능력훈련', period: '2025-03-01 ~ 2025-03-30', location: '서울' },
  { id: 2, name: '산업안전보건 특별교육', period: '2025-04-05 ~ 2025-04-15', location: '부산' },
  { id: 3, name: '온라인 사이버 보안 인식교육', period: '2025-05-10 ~ 2025-05-20', location: '온라인' },
  { id: 4, name: '공공기관 맞춤형 리더십 프로그램', period: '2025-06-01 ~ 2025-06-25', location: '대전' },
  { id: 5, name: 'AI기반 데이터분석 입문과정', period: '2025-07-10 ~ 2025-07-30', location: '광주' }
]
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-extrabold mb-6">교육과정 안내</h1>
    <p class="text-slate-700 mb-4">현재 진행 중인 교육과정 목록입니다.</p>

    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-govblue text-white">
          <th class="p-3 rounded-tl-lg">과정명</th>
          <th class="p-3">교육기간</th>
          <th class="p-3">지역</th>
          <th class="p-3 rounded-tr-lg text-center">상세보기</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in trainings" :key="t.id" class="border-b hover:bg-slate-50 transition">
          <td class="p-3 font-semibold">{{ t.name }}</td>
          <td class="p-3">{{ t.period }}</td>
          <td class="p-3">{{ t.location }}</td>
          <td class="p-3 text-center">
            <button class="bg-govblue text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
              보기
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
