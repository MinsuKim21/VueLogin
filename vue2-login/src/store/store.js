import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

});

//main.js
import store from '@/store';

new Vue({
  render: h => h(App),
  store,	//store 전달
}).$mount('#app');