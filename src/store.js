import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    phone: "",
    token: "",
  },
  mutations: {
    setToken(state, token) {
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

export default store;
