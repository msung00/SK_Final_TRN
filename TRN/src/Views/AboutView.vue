<template>
  <div class="p-10 bg-gradient-to-b from-white to-sky-50 min-h-screen">
    <h1 class="text-3xl font-extrabold mb-6 text-govblue">기관 소개</h1>

    <section class="grid md:grid-cols-2 gap-8 items-center mb-10">
      <img src="/src/images/조직도.png" class="rounded-xl shadow" alt="조직도" />
      <div>
        <h2 class="text-xl font-semibold mb-3">TRN 기관 포털의 비전</h2>
        <p class="text-slate-600 mb-4">
          “국민과 함께하는 디지털 신뢰행정”을 목표로, 교육·보안·행정 서비스를 통합 제공하는 포털입니다.
        </p>
        <ul class="list-disc pl-6 space-y-2 text-slate-700">
          <li>투명하고 신속한 공공행정 서비스</li>
          <li>ISMS-P 기반 개인정보보호 체계 구축</li>
          <li>AI·데이터 기반 행정 효율화</li>
          <li>국민 참여형 디지털 행정 구현</li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold border-l-4 border-govblue pl-3 mb-4">주요 업무</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="font-semibold text-govblue mb-2">정보보호 관리</h3>
          <p class="text-slate-600 text-sm">ISMS-P, 개인정보보호 관련 인증 및 컨설팅</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="font-semibold text-govblue mb-2">교육 운영</h3>
          <p class="text-slate-600 text-sm">사이버 교육 및 오프라인 직무훈련 지원</p>
        </div>
        <div class="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="font-semibold text-govblue mb-2">정책 기획</h3>
          <p class="text-slate-600 text-sm">공공데이터 활용, 행정정보 통합 기획 및 운영</p>
        </div>
      </div>
    </section>
  </div>
</template>
