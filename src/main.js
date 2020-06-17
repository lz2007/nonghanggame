import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import App from "./App.vue";
import router from './router';
import "./assets/style/reset.css";
import "./assets/style/main.css";
import { Toast } from 'vant';


Vue.use(Vuex);
Vue.prototype.$toast = Toast;

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    phone: '',
    token:''
  },
  mutations: {
    setToken(state,token){
      state.token = token;
    },
    setPhone(state, phone) {
      state.phone = phone;
    },
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
