import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'NewHome',
    component: () => import('../views/NewHome.vue')
  },
  {
    path: '/trainings',
    name: 'Trainings',
    component: () => import('../views/Trainings.vue')
  },
  {
    path: '/random-training',
    name: 'RandomTrain',
    component: () => import('../views/RandomTrain.vue')
  },
  {
    path: '/soft-training',
    name: 'SoftTrain',
    component: () => import('../views/SoftTrain.vue')
  },
  {
    path: '/middle-training',
    name: 'MiddleTrain',
    component: () => import('../views/MiddleTrain.vue')
  },
  {
    path: '/hard-training',
    name: 'HardTrain',
    component: () => import('../views/HardTrain.vue')
  },
  {
    path: '/home-training',
    name: 'HomeTrainings',
    component: () => import('../views/HomeTrainings.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
