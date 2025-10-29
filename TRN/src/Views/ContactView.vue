<script setup>
import FaqItem from '@/components/FaqItem.vue'
</script>

<template>
  <div class="p-10 min-h-screen bg-gradient-to-b from-white to-sky-50">
    <h1 class="text-3xl font-extrabold mb-6 text-govblue">고객센터</h1>

    <div class="grid md:grid-cols-2 gap-10">
      <!-- FAQ -->
      <div class="space-y-4">
        <FaqItem question="회원가입을 해야 신청이 가능한가요?">
          네, 교육 과정 신청 및 훈련 기록 관리를 위해 회원가입이 필요합니다.
        </FaqItem>
        <FaqItem question="훈련비는 결제 후 환불이 가능한가요?">
          개강 전까지는 100% 환불 가능하며, 개강 이후에는 환불규정에 따라 처리됩니다.
        </FaqItem>
        <FaqItem question="문의는 어디로 해야 하나요?">
          고객센터 대표번호 또는 아래 지도 방문을 통해 문의하실 수 있습니다.
        </FaqItem>
      </div>

      <!-- 지도 + 연락처 -->
      <div class="bg-white border rounded-xl shadow-sm overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=서울특별시%20중구%20충무로5가%2073-1&t=&z=16&ie=UTF8&iwloc=&output=embed"
          class="w-full h-[300px]"
        ></iframe>
        <div class="p-5 text-slate-700">
          <h2 class="font-semibold text-lg text-govblue mb-2">연락처</h2>
          <p>대표전화: 1234-1234<br />이메일: genie@naver.com<br />주소: 서울특별시 중구 충무로5가 73-1</p>
        </div>
      </div>
    </div>
  </div>
</template>
