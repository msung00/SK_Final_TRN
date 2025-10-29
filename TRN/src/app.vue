<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const images = [
  '/src/images/main1.jpg',
  '/src/images/main2.jpg',
  '/src/images/main3.jpg'
]

const current = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, 4000)
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- 상단 슬라이드 -->
    <section class="relative w-full h-[85vh] overflow-hidden">
      <transition name="fade" mode="out-in">
        <img
          :key="current"
          :src="images[current]"
          alt="슬라이드 이미지"
          class="absolute w-full h-full object-cover transition duration-700"
        />
      </transition>

      <!-- 중앙 텍스트 -->
      <div class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-3 leading-snug">
          조직의 발전을 위해<br />개인의 역량 향상을 지원합니다.
        </h1>
        <p class="text-lg md:text-xl opacity-90">
          한국HRD훈련지원센터는 훈련생 여러분의 성장을 응원합니다.
        </p>
      </div>
    </section>

    <!-- 서비스 소개 -->
    <section class="grid grid-cols-1 md:grid-cols-3 text-center mt-14 mb-20 gap-8 px-8">
      <div class="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2 text-govblue">사업주훈련</h3>
        <p class="text-slate-600">기업 맞춤형 직업능력 개발훈련 과정 안내</p>
      </div>

      <div class="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2 text-govblue">산업안전보건교육</h3>
        <p class="text-slate-600">근로자 안전 및 보건 인식 향상 교육 지원</p>
      </div>

      <div class="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2 text-govblue">사이버연수원</h3>
        <p class="text-slate-600">언제 어디서나 가능한 온라인 학습 플랫폼</p>
      </div>
    </section>

    <!-- 하단 푸터 -->
    <footer class="bg-slate-900 text-slate-300 mt-auto py-10 text-center">
      <div class="flex flex-wrap justify-center gap-6 mb-4 text-sm">
        <a href="#" class="hover:text-white">사업주 직업능력개발훈련 안내</a>
        <a href="#" class="hover:text-white">이용약관</a>
        <a href="#" class="hover:text-white">개인정보처리방침</a>
      </div>

      <div class="max-w-4xl mx-auto text-sm leading-6">
        <p class="font-semibold text-white mb-2">한국HRD훈련지원센터</p>
        <p>
          대표자: 손민성 | 사업자등록번호: 123-45-6789 | 통신판매업신고번호: 제2025-지니-0001호  
          <br />TEL: 1234-1234 | Email: genie@naver.com | 개인정보보호책임자: 손민성
        </p>
        <p class="mt-3">주소: 서울특별시 서대문구 어쩌고</p>
        <p class="mt-3 opacity-75">
          본 사이트의 콘텐츠는 저작권법의 보호를 받으며 무단 복제 및 배포를 금합니다.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
