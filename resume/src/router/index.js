import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resume from '@/view/resume/index'
import slide from '@/components/slideMenu/index'
import comGroup from '@/view/comGroup/index'
// base
import baseCom from '@/view/comGroup/page/base/index'
import buttonPage from '@/view/comGroup/page/base/buttonPage'
import cellPage from '@/view/comGroup/page/base/cellPage'
import iconPage from '@/view/comGroup/page/base/iconPage'
import popupPage from '@/view/comGroup/page/base/popupPage'

// form
import formCom from '@/view/comGroup/page/form/index'
import checkbox from '@/view/comGroup/page/form/checkbox'
import collapse from '@/view/comGroup/page/form/collapse'
import field from '@/view/comGroup/page/form/field'
import picker from '@/view/comGroup/page/form/picker'
import radioPage from '@/view/comGroup/page/form/radio'
import slider from '@/view/comGroup/page/form/slider'
import switchPage from '@/view/comGroup/page/form/switchPage'
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
    },
    {
      path: '/baseCom',
      component: baseCom,
      children:[
        {
          path:'button',
          component: buttonPage
        },
        {
          path:'cell',
          component: cellPage
        },
        {
          path:'icon',
          component: iconPage
        },
        {
          path:'popup',
          component: popupPage
        }
      ]
    },{
      path: '/formCom',
      component: formCom,
      children:[
        {
          path:'checkbox',
          component: checkbox
        },
        {
          path:'collapse',
          component: collapse
        },
        {
          path:'field',
          component: field
        },
        {
          path:'picker',
          component: picker
        },
        {
          path:'radio',
          component: radioPage
        },
        {
          path:'slider',
          component: slider
        },
        {
          path:'switch',
          component: switchPage
        }
      ]
    }

  ]
})
