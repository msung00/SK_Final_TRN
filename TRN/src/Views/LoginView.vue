<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { eventBus } from '@/eventBus'

const router = useRouter()
const id = ref('')
const password = ref('')
const error = ref('')

function login() {
  if (!id.value || !password.value) {
    error.value = '아이디와 비밀번호를 입력하세요.'
    return
  }

  const users = JSON.parse(localStorage.getItem('trn.users') || '{}')
  if (users[id.value] && users[id.value] === password.value) {
    localStorage.setItem('trn.username', id.value)
    eventBus.setUsername(id.value)
    alert(`${id.value}님, 로그인되었습니다.`)
    router.push('/')
  } else {
    error.value = '아이디 또는 비밀번호가 올바르지 않습니다.'
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-900">
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md w-[400px]">
      <h2 class="text-2xl font-bold mb-6 text-center text-govblue dark:text-govsky">로그인</h2>

      <div class="space-y-4">
        <input
          v-model="id"
          type="text"
          placeholder="아이디"
          class="w-full border rounded-lg px-4 py-2 dark:bg-slate-700 dark:text-white"
        />
        <input
          v-model="password"
          type="password"
          placeholder="비밀번호"
          class="w-full border rounded-lg px-4 py-2 dark:bg-slate-700 dark:text-white"
        />

        <button
          @click="login"
          class="w-full bg-govblue text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          로그인
        </button>

        <RouterLink
          to="/register"
          class="block text-center text-sm text-govblue hover:underline"
        >
          회원가입하기
        </RouterLink>

        <p v-if="error" class="text-red-500 text-sm text-center mt-2">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
