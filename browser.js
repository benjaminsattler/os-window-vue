/* eslint-disable import/extensions */
import OsWindowVue, { install } from './main.js';

if (typeof window !== 'undefined') {
  window.OsWindowVue = OsWindowVue;

  if ('Vue' in window) {
    window.Vue.use(install);
  }
}
