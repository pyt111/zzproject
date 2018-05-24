// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store';
import router from './router'
// import 'babel-polyfill' //ie兼容必备
// import 'fetch-polyfill' //手机浏览器兼容
import 'lib-flexible/flexible.js';
import './ui';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
