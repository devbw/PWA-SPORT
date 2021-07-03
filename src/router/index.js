import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
