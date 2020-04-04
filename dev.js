import Vue from 'vue';
import OsWindowVue, { install } from '.';

Vue.config.productionTip = false;

Vue.use(install);

new Vue({
  render: (h) => h(OsWindowVue),
}).$mount('#app');
