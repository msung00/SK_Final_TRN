<template>
  <div class="p-10 min-h-screen bg-gradient-to-b from-white to-sky-50 dark:from-slate-900 dark:to-slate-800">
    <h1 class="text-3xl font-extrabold mb-6 text-govblue dark:text-govsky">오시는 길</h1>
    <p class="text-slate-600 dark:text-slate-300 mb-4">
      TRN기관 포털 본원은 서울특별시 중구 충무로5가 73-1에 위치하고 있습니다.
    </p>

    <div class="rounded-xl overflow-hidden border mb-6">
      <iframe
        src="https://maps.google.com/maps?q=서울특별시%20중구%20충무로5가%2073-1&t=&z=16&ie=UTF8&iwloc=&output=embed"
        class="w-full h-[480px]"
        loading="lazy"
      ></iframe>
    </div>

    <div class="bg-white dark:bg-slate-800 border rounded-xl p-6 shadow-sm max-w-2xl">
      <h2 class="font-semibold text-lg mb-2 text-govblue dark:text-govsky">연락처 안내</h2>
      <p class="text-slate-700 dark:text-slate-300">
        📍 주소: 서울특별시 중구 충무로5가 73-1<br />
        ☎ 전화번호: 1234-1234<br />
        ✉ 이메일: genie@naver.com<br />
        🕒 운영시간: 평일 09:00 ~ 18:00
      </p>
    </div>
  </div>
</template>
