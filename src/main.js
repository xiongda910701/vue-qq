// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import '@/assets/style/reset.css'
import '@/assets/style/iconfont.css'

fastClick.attach(document.body);
Vue.config.productionTip = false;
import store from '@/store/index'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
