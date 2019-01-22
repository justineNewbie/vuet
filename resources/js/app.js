
require('./bootstrap');

window.Vue = require('vue');

import {routes} from './routes.js'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'vuesax/dist/vuesax.css'

Vue.use(VueSidebarMenu)
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuesax)

Vue.component('main-app', require('./components/MainApp.vue').default);

const router = new VueRouter({
    routes,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router
});