import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppMain from '../components/app-main.vue'
import Home from '../module/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AppMain',
    component: AppMain,
    redirect: '/home',
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../module/About.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../module/Home.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import(/* webpackChunkName: "project" */ '../module/Projects.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "contact" */ '../module/Contact.vue')
    },
    {
      path : '*',
      component: Home,
    }],
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
