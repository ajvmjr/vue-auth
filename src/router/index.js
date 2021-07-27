import Vue from 'vue'
import VueRouter from 'vue-router'
import { getStorage } from '@/utils/storage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/Login')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '@/pages/SignUp')
  },
  {
    path: '/authenticated',
    name: 'Authenticated',
    component: () => import(/*webpackChunkName: "authenticated" */ '@/pages/Authenticated'),
    beforeEnter: (to, from, next) => {
      const token = getStorage('token')
      if(token){
        next()
      } else {
        next({ name: 'Login' })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
