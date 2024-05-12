import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/show/:episodeId',
      name: 'Show',
      alias: ['/tvshow/:episodeId', '/tv-show/:episodeId'],
      component: () => import('../views/Show/Show.vue')
    },

    {
      path: '/user/:userName',
      name: 'Edit Profile',
      alias: ['/profile/:userName'],
      component: () => import('../views/UserProfile/UserProfile.vue')
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
