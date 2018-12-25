// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/reset.css'
import '@/assets/css/animate.css'
import '@/assets/css/font.css'
import '@/assets/css/vant.css'

import Vant from 'vant';
import 'vant/lib/index.css';

// import 'prismjs'
// import 'prismjs/themes/prism.css'
// import Prism from 'vue-prism-component'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.use(Vant);

// Vue.component('Prism',Prism)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
