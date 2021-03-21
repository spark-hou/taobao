import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './base/common.styl';
import './plugins/element';
import http from './plugins/axios';
import url from './base/url';
import store from './store';
import './components/index';

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$url = url;
Vue.prototype.$path = process.env.BASE_URL;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
