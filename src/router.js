import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/login.vue";
import Login2 from "./components/zhangyin/login.vue";
import Game from "./components/game.vue";
import Result from "./components/result.vue";
import Guize from "./components/guize.vue";
import Toprize from "./components/toprize.vue";
import Toprize2 from "./components/zhangyin/toprize.vue";

Vue.use(VueRouter);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/game",
    component: Game,
  },
  {
    path: "/result",
    component: Result,
  },
  {
    path: "/guize",
    component: Guize,
  },
  {
    path: "/toprize",
    component: Toprize,
  },
  // 掌银页面
  {
    path: "/zhangyin/login",
    component: Login2,
  },
  {
    path: "/zhangyin/toprize",
    component: Toprize2,
  },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  // mode: "history",
  routes, // (缩写) 相当于 routes: routes
});

export default router;
