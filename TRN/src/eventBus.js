import { reactive } from 'vue'

export const eventBus = reactive({
  username: localStorage.getItem('trn.username') || null,
  setUsername(name) {
    this.username = name
  },
  clear() {
    this.username = null
  },
})
