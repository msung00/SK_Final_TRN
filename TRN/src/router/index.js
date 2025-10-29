import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TrainingView from '@/views/TrainingView.vue'
import PolicyView from '@/views/PolicyView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/training', name: 'training', component: TrainingView },
    { path: '/policy', name: 'policy', component: PolicyView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
