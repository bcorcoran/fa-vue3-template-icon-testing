import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FaTesting',
      component: () => import('@/components/FaTesting.vue')
    }
  ]
})

export default router
