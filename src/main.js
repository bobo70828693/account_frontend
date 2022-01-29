import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import ElementUI from 'element-ui';
import VueLoading from 'vue-loading-overlay';
import store from './stores/index';

import './helpers/axios';

import 'vue-loading-overlay/dist/vue-loading.css'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/main.scss'
import './assets/scss/navBar.scss'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueLoading, {
  canCancel: false,
  color: '#234375',
  loader: 'bars', //spinner/dots/bars
  width: 90,
  height: 50,
  backgroundColor: '#8594AB',
  isFullPage: true,
  opacity: 0.8
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
