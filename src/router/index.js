import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Hello from '@/components/Hello'
import huangshan from '@/components/huangshan'
import xuan from '@/components/xuan'
import ctry from '@/components/ctry'
import by from '@/components/by'
import main from '@/components/main'
// import denglu from '@/components/denglu'


Vue.use(Router)

export default new Router({
  routes: [
  // 首页
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  // 黄山
    {
    	path:'/huangshan',
    	name:"huangshan",
    	component:huangshan
    },
  // 筛选
    {
      path:'/xuan',
      name:"xuan",
      component:xuan
    },
  // 选择城市
    {
      path:'/ctry',
      name:"ctry",
      component:ctry
    },
  // 详情页
    {
      path:'/by',
      name:"by",
      component:by
    },
  // 个人中心页
    {
      path:'/main',
      name:"main",
      component:main
    },
  // 登录
    // {
    //   path:'/denglu',
    //   name:"denglu",
    //   component:denglu
    // }       
  ]
})
