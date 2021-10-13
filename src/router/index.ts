import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppMain from '../components/app-main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AppMain',
    component: AppMain,
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../module/About.vue')
    }],
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
