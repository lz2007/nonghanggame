<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>
