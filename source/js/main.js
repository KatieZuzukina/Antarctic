import {iosVhFix} from './utils/ios-vh-fix';
import {initOpenMenu} from './modules/modals/burger.js';
import {initMap} from './modules/modals/map';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  initOpenMenu();

  window.addEventListener('load', () => {
    initMap();
  });
});
