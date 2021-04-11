import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import {store} from './store';
import jQuery from 'jquery';
import ScrollLoader from 'vue-scroll-loader'
window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/app.css';
import router from './routers';
import VueRouter from 'vue-router';


Vue.use(VueRouter);
Vue.use(axios);
Vue.use(ScrollLoader)

Vue.config.productionTip = false;

export const bus = new Vue();


Vue.component('header-items', require('./components/Header/Header.vue').default);
Vue.component('game-item', require('./components/cardGame.vue').default);
Vue.component('game-list', require('./components/GameList.vue').default);
Vue.component('game-details', require('./Views/GameDetails.vue').default);
Vue.component('search-result', require('./Views/Search.vue').default);
new Vue({
  router,
  store,

  render: h => h(App),
}).$mount('#app')
