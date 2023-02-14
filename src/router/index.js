import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/home', // 布局页
      name: 'home',
      component: () => import('../views/home/index.vue'),
      children: [
        {
          path: '/index', // 首页
          name: 'index',
          component: () => import('../views/home/index/index.vue')
        },
        {
          path: '/stats',// 数据管理
          name: 'stats',
          component: () => import('../views/home/stats/index.vue')
        },
        {
          path: '/xms', // 信息管理
          name: 'xms',
          component: () => import('../views/home/xms/index.vue'),
          children: [
            {
              path: '/xms/list',// 信息列表
              name: 'xmsList',
              component: () => import('../views/home/xms/list.vue')
            }
          ]
        },

      ]
    },
    
  ]
})
