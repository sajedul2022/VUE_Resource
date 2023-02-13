import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CSSWork from '../App1.vue'
import Method from '../components/Mymethods.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/app',
      name: 'CSSWork',
      component: CSSWork
    },
    {
      path: '/method',
      name: 'method',
      component: Method
    },
  ]
})

export default router
