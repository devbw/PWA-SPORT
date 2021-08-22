import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'NewHome',
    component: () => import('../views/NewHome.vue')
  },
  {
    path: '/home-training',
    name: 'HomeTrainings',
    component: () => import('../views/HomeTrainings.vue')
  },
  {
    path: '/custom-training',
    name: 'CustomTraining',
    component: () => import('../views/CustomTraining.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
