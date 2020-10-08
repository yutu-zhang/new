import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 城市
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/login')
  },
  // 详情页
  {
    path: '/detail',
    name: 'detail',
    component: ()=> import('../views/detail')
  },
  // 主页
  {
    path: '/homes',
    name: 'homes',
    component: ()=> import('../views/homepage/homes'),
    redirect:"/homes/index",
    children:[
      // 外卖
      {
        path: 'index',
        name: 'index',
        component: ()=> import('../views/homepage/index')
      },
      // 搜索
      {
        path: 'search',
        name: 'search',
        component: ()=> import('../views/homepage/search')
      },
      // 订单
      {
        path: 'older',
        name: 'older',
        component: ()=> import('../views/homepage/older')
      },
      // 我的
      {
        path: 'mine',
        name: 'mine',
        component: ()=> import('../views/homepage/mine')
      },
    ]
  },



]

const router = new VueRouter({
  routes
})

export default router
