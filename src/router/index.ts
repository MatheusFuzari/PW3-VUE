import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TokenView from '../views/TokenView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/token',
      name: 'token',
      component: TokenView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    }
  ]
})

export default router
