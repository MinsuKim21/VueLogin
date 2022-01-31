import Vue from "vue";
import Router from 'vue-router';
import { component } from "vue/types/umd";
import Home from  './components/home.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: Process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'Home',
            component: () => import ('./components/home.vue')
        },
        {
            path:'/loginForm',
            name: 'loginForm',
            component: () => import ('./components/loginInput.vue')
        }
    ]
})