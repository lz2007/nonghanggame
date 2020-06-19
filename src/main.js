import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/reset.css";
import "./assets/style/main.css";
import { Toast } from "vant";

Vue.prototype.$toast = Toast;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
