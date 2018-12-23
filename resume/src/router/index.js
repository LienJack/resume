import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resume from '@/view/resume/index'
import slide from '@/components/slideMenu/index'
import comGroup from '@/view/comGroup/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resume
    },{
      path: '/slide',
      component: slide
    },{
      path: '/comGroup',
      component: comGroup,
      children: [],
    }
  ]
})
