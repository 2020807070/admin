import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: resolve => require(['../views/Home'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../views/Home/children/table.vue'], resolve)
        },
        {
          path: '/table',
          component: resolve => require(['../views/Home/children/table.vue'], resolve)
        },
        {
          path: '/set',
          component: resolve => require(['../views/Home/children/set.vue'], resolve)
        },
        {
          path: '/music',
          component: resolve => require(['../views/Home/children/music.vue'], resolve)
        },
        {
          path: '/map',
          component: resolve => require(['../views/Home/children/map.vue'], resolve)
        },
        {
          path: '/gg',
          component: resolve => require(['../views/Home/children/gg.vue'], resolve)
        },
        {
          path: '/fl',
          component: resolve => require(['../views/Home/children/fl.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/Login'], resolve)
    },
    {
      path: '/test',
      component: resolve => require(['../views/Test'], resolve)
    }
  ]
})
