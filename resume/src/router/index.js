import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import resume from '@/view/resume/index'
// import slide from '@/components/slideMenu/index'
// import comGroup from '@/view/comGroup/index'
// // base
// import baseCom from '@/view/comGroup/page/base/index'
// import buttonPage from '@/view/comGroup/page/base/buttonPage'
// import cellPage from '@/view/comGroup/page/base/cellPage'
// import iconPage from '@/view/comGroup/page/base/iconPage'
// import popupPage from '@/view/comGroup/page/base/popupPage'

// // form
// import formCom from '@/view/comGroup/page/form/index'
// import checkbox from '@/view/comGroup/page/form/checkbox'
// import collapse from '@/view/comGroup/page/form/collapse'
// import field from '@/view/comGroup/page/form/field'
// import picker from '@/view/comGroup/page/form/picker'
// import radioPage from '@/view/comGroup/page/form/radio'
// import slider from '@/view/comGroup/page/form/slider'
// import switchPage from '@/view/comGroup/page/form/switchPage'

// knowledge
// import knowledgeIndex from '@/view/knowledge/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      // component: resume
      component:()=> import('@/view/resume/index')
    },{
      path: '/slide',
      // component: slide
      component:()=> import('@/components/slideMenu/index')
    },
    // componets
    {
      path: '/comGroup',
      // component: comGroup,
      component:()=> import('@/view/comGroup/index')
    },

    // baseCom
    {
      path: '/baseCom',
      // component: baseCom,
      component:()=> import('@/view/comGroup/page/base/index'),
      children:[
        {
          path:'button',
          // component: buttonPage
          component:()=> import('@/view/comGroup/page/base/buttonPage'),
        },
        {
          path:'cell',
          // component: cellPage
          component:()=> import('@/view/comGroup/page/base/cellPage'),
        },
        {
          path:'icon',
          // component: iconPage
          component:()=> import('@/view/comGroup/page/base/iconPage'),
        },
        {
          path:'popup',
          // component: popupPage
          component:()=> import('@/view/comGroup/page/base/popupPage'),
        }
      ]
    },
    // formCom
    {
      path: '/formCom',
      // component: formCom,
      component:()=> import('@/view/comGroup/page/form/index'),
      children:[
        {
          path:'checkbox',
          // component: checkbox
          component:()=> import('@/view/comGroup/page/form/checkbox'),
        },
        {
          path:'collapse',
          component:()=> import('@/view/comGroup/page/form/checkbox'),
        },
        {
          path:'field',
          // component: field
          component:()=> import('@/view/comGroup/page/form/field'),
        },
        {
          path:'picker',
          // component: picker
          component:()=> import('@/view/comGroup/page/form/picker'),
        },
        {
          path:'radio',
          // component: radioPage
          component:()=> import('@/view/comGroup/page/form/radio'),
        },
        {
          path:'slider',
          // component: slider
          component:()=> import('@/view/comGroup/page/form/slider'),
        },
        {
          path:'switch',
          // component: switchPage
          component:()=> import('@/view/comGroup/page/form/switchPage'),
        }
      ]
    },
    {
      path: '/knowledge',
      // component: knowledgeIndex,
      component:()=> import('@/view/knowledge/index'),
      children:[
        {
          path: 'index',
          component:()=> import('@/view/knowledge/article/index')
        },
        {
          path: 'article/:title',
          component:()=> import('@/view/knowledge/article/aritcle')
        }
      ]
    }

  ]
})
