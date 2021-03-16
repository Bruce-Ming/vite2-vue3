import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/About.vue'),
  },
  {
    path: '/todo',
    component: () =>
      import(/* webpackChunkName: "todo" */ '../components/TodoCom.vue'),
  },
  {
    path: '/baidu',
    component: () =>
      import(/* webpackChunkName: "todo" */ '../components/Baidu.vue'),
  },
  
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../components/NotFound.vue'),
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
export default router
