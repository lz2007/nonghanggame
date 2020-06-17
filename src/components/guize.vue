<template>
  <div class="content">
    <div class="login">
        <div class="start" @click="start"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
   
    start() {
       this.$router.push({
        path: "/game",
      });
    },
  
  },
  mounted() {

  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: url(../assets/guize.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.login {
  width: 70%;
  margin: auto;
  left: 16%;
  bottom: -10px;
  position: absolute;
  /* transform: translateY(155%); */
}

.input {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  box-sizing: border-box;
  border: 3px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(180deg, #fff, #fff),
    linear-gradient(90deg, #6ea7af, #85c461);
  border-radius: 50px;
}

.code {
  display: flex;
  width: 100%;
  margin-top: 15px;
}

.v-code {
  flex-basis: 60%;
}

.v-code2 {
  flex-basis: 46%;
  margin-left: 4%;
}

.get-code {
  width: 100%;
  border: 1px solid transparent;
  outline: none;
  height: 50px;
  line-height: 50px;
  background: url(../assets/code.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  color: #fff;
}

.start {
  width: 100%;
  background: url(../assets/jinru.png) no-repeat;
  background-size: contain;
  height: 100px;
  margin-top: 15%;
}

input[type="text"]:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: #b6e9e3;
}

::-moz-placeholder {
  color: #b6e9e3;
}

:-ms-input-placeholder {
  color: #b6e9e3;
}

@media screen and (min-width: 320px) and (max-width: 359px) {
  .login {
    bottom: -5%;
  }
}
</style>
