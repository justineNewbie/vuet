
require('./bootstrap');

window.Vue = require('vue');

import {routes} from './routes.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.component('main-app', require('./components/MainApp.vue').default);

const router = new VueRouter({
    routes,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router,
});
