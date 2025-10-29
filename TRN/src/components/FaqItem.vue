<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: String,
})
const open = ref(false)
</script>

<template>
  <div class="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
    <button
      @click="open = !open"
      class="w-full flex justify-between items-center px-4 py-3 bg-slate-50 dark:bg-slate-800 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
    >
      <span>{{ props.question }}</span>
      <span class="text-lg">{{ open ? '−' : '+' }}</span>
    </button>
    <div v-if="open" class="p-4 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border-t dark:border-slate-700">
      <slot />
    </div>
  </div>
</template>
