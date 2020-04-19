/* eslint-disable import/extensions */
import OsWindowVue from './lib/OsWindowVue.js';

function install(Vue) {
  Vue.component('OsWindowVue', OsWindowVue);
}

export { install };
export default OsWindowVue;
