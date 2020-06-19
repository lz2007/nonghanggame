<template>
  <div class="content">
    <div class="login">
      <div class="phone">
        <input
          class="input"
          type="text"
          placeholder="请输入手机号"
          v-model="phone"
        />
      </div>

      <div class="code">
        <div class="v-code">
          <input
            class="input"
            type="text"
            placeholder="请输入验证码"
            v-model="validateCode"
          />
        </div>
        <div class="v-code2">
          <button class="get-code" ref="getCode" @click="sendPhone">
            {{ codeStatus }}
          </button>
        </div>
      </div>

      <transition name="fade">
        <div class="start" @click="start"></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { code } from "../common/js/common";
import { send, check,userCheck } from "../common/js/api";

export default {
  name: "login",
  data() {
    return {
      phone: "",
      countdown: 60,
      validateCode: "",
      codeStatus: "获取验证码",
      timer: "",
    };
  },
  methods: {
    async sendPhone() {
      if (!this.phone) {
        this.$toast("请输入手机号码");
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$toast("手机号码有误，请重填");
        return false;
      }
      if (this.countdown == 60) {
        const result = await send(this.phone);
        console.log(result);
        if (result.data.code == code) {
          this.settime();
        } else {
          this.$toast("发送失败：" + result.data.code);
        }
      }
    },
    settime() {
      if (this.countdown == 0) {
        this.$refs.getCode.removeAttribute("disabled");
        this.codeStatus = "获取验证码";
        this.countdown = 60;
      } else {
        this.$refs.getCode.setAttribute("disabled", true);
        this.codeStatus = "重新发送(" + this.countdown + ")";
        this.countdown--;
        this.timer = setTimeout(() => {
          this.settime();
        }, 1000);
      }
    },

    start() {
      if (!this.phone) {
        this.$toast("请输入手机号码");
        return;
      }

      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$toast("手机号码有误，请重填");
        return false;
      }

      if (!this.validateCode) {
        this.$toast("请输入验证码");
        return;
      }

      check(this.phone, this.validateCode).then((result) => {
        console.log(result);
        if (result.data.code == code) {
          this.$store.commit("setToken", result.data.data);
          this.$store.commit("setPhone", this.phone);
          console.log(result.data.data);
          console.log(this.$store.state.token);

          this.$router.replace({
            path: "/guize",
          });
        } else {
          this.$toast(result.data.msg);
        }
      });
    },
    //获取地址栏的参数
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
  },
  mounted() {
    console.log(this.$store.state.token);
    const token = this.$store.state.token;
    // 已经登录过了
    if (token) {
      this.$router.replace({
        path: "/guize",
      });
    }
  },
  destroyed() {
    clearTimeout(this.timer);
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
  background: url(../assets/bg2.png) no-repeat;
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
  bottom: 8%;
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
  color: #6ea7af;
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
  height: 52px;
  line-height: 46px;
  background: url(../assets/code.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  color: #fff;
}

.start {
  width: 100%;
  background: url(../assets/find.png) no-repeat;
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
    bottom: 2%;
  }
}
</style>
