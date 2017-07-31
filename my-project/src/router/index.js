import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import denglu from '@/components/denglu'

// import axios from 'axios'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'denglu',
      component: denglu
    }
  ]
})
