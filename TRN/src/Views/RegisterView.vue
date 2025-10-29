<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const id = ref('')
const password = ref('')
const confirm = ref('')
const error = ref('')
const success = ref('')

function register() {
  if (!id.value || !password.value || !confirm.value) {
    error.value = '모든 필드를 입력해주세요.'
    success.value = ''
    return
  }
  if (password.value !== confirm.value) {
    error.value = '비밀번호가 일치하지 않습니다.'
    success.value = ''
    return
  }

  const users = JSON.parse(localStorage.getItem('trn.users') || '{}')

  if (users[id.value]) {
    error.value = '이미 존재하는 아이디입니다.'
    success.value = ''
    return
  }

  users[id.value] = password.value
  localStorage.setItem('trn.users', JSON.stringify(users))
  success.value = '회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.'
  error.value = ''
  setTimeout(() => router.push('/login'), 1500)
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-900">
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md w-[400px]">
      <h2 class="text-2xl font-bold mb-6 text-center text-govblue dark:text-govsky">회원가입</h2>
      <div class="space-y-4">
        <input v-model="id" type="text" placeholder="아이디" class="w-full border rounded-lg px-4 py-2 dark:bg-slate-700 dark:text-white" />
        <input v-model="password" type="password" placeholder="비밀번호" class="w-full border rounded-lg px-4 py-2 dark:bg-slate-700 dark:text-white" />
        <input v-model="confirm" type="password" placeholder="비밀번호 확인" class="w-full border rounded-lg px-4 py-2 dark:bg-slate-700 dark:text-white" />
        <button @click="register" class="w-full bg-govblue text-white py-2 rounded-lg hover:bg-blue-700 transition">회원가입</button>
        <p v-if="error" class="text-red-500 text-sm text-center mt-2">{{ error }}</p>
        <p v-if="success" class="text-green-500 text-sm text-center mt-2">{{ success }}</p>
      </div>
    </div>
  </div>
</template>
