<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const images = ['/src/images/main1.jpg', '/src/images/main2.jpg', '/src/images/main3.jpg']
const current = ref(0)
let interval

onMounted(() => (interval = setInterval(() => (current.value = (current.value + 1) % images.length), 4000)))
onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <section class="relative w-full h-[80vh] overflow-hidden">
    <transition name="fade" mode="out-in">
      <img :key="current" :src="images[current]" class="absolute w-full h-full object-cover" />
    </transition>
    <div class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
      <h2 class="text-4xl font-bold mb-2">조직의 발전을 위해 개인의 역량 향상을 지원합니다.</h2>
      <p class="text-lg">한국HRD훈련지원센터는 교육과 성장의 가치를 실현합니다.</p>
    </div>
  </section>

  <section class="mt-14 grid grid-cols-1 md:grid-cols-3 text-center gap-6 px-8">
    <RouterLink to="/training" class="bg-white border p-6 rounded-xl hover:shadow-lg transition">
      <h3 class="text-xl font-bold text-govblue mb-2">사업주훈련</h3>
      <p>기업 맞춤형 직업능력 개발훈련</p>
    </RouterLink>
    <RouterLink to="/training" class="bg-white border p-6 rounded-xl hover:shadow-lg transition">
      <h3 class="text-xl font-bold text-govblue mb-2">산업안전보건교육</h3>
      <p>근로자 안전의식 향상 교육</p>
    </RouterLink>
    <RouterLink to="/training" class="bg-white border p-6 rounded-xl hover:shadow-lg transition">
      <h3 class="text-xl font-bold text-govblue mb-2">사이버연수원</h3>
      <p>언제 어디서나 온라인 학습</p>
    </RouterLink>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.8s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
