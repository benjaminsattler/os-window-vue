/* eslint-disable import/extensions */
import OsWindowVue from './lib/os-window-vue.js';

export function install(Vue) {
  Vue.component('os-window-vue', OsWindowVue);
  Vue.config.ignoredElements.push('os-window');
}

export default OsWindowVue;
