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

      <div class="start" @click="start"></div>

      <div class="guize" @click="checkGuize">
        *点击查看 <span>领奖规则*</span>
      </div>

      <transition name="fade">
        <div class="mask" v-show="ifMask">
          <div class="diloa">
            <div class="text">
              <div class="text1">1.</div>
              <div class="text2">
                活动时间：2020年6月25日-6月26日，请在活动时间内进行领取，活动结束后不可进行领取，视为放弃领取该奖品。
              </div>
            </div>
            <div class="text">
              <div class="text1">2.</div>
              <div class="text2">
                活动奖品仅限湖南地区手机号码进行领奖，须输入手机号、验证码、进入掌银页面领取，须符合在微信参与活动的手机号码。
              </div>
            </div>
            <div class="text">
              <div class="text1">3.</div>
              <div class="text2">
                奖品设置：您将有机会获得以下奖品，5元话费券、爱奇艺视频会员月卡、腾讯视频会员月卡、50元京东E卡、500元京东E卡、1000元苏宁卡。
              </div>
            </div>
            <div class="text">
              <div class="text1">4.</div>
              <div class="text2">
                每个用户只有1次领取奖品机会。
              </div>
            </div>
            <div class="text">
              <div class="text1">5.</div>
              <div class="text2">
                活动奖品数量有限，先到先得；奖品派发完毕，则活动结束。
              </div>
            </div>
            <div class="text">
              <div class="text1">6.</div>
              <div class="text2">
                活动最终解释权归湖南农行所有。
              </div>
            </div>
            <div class="btn" @click="checkGuize">
              我知道了
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { code } from "../../common/js/common";
import { send, check } from "../../common/js/api";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      countdown: 60,
      validateCode: "",
      codeStatus: "获取验证码",
      ifMask: false,
    };
  },
  methods: {
    async sendPhone() {
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$toast("手机号码有误，请重填");
        return false;
      }
      if (!this.phone) {
        this.$toast("请输入手机号码");
        return;
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
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$toast("手机号码有误，请重填");
        return false;
      }
      if (!this.phone) {
        this.$toast("请输入手机号码");
        return;
      }
      if (!this.validateCode) {
        this.$toast("请输入验证码");
        return;
      }

      check(this.phone, this.validateCode).then((result) => {
        console.log(result);
        if (result.data.code == code) {
          this.$store.commit("setToken", result.data.data);
          console.log(result.data.data);
          console.log(this.$store.state.token);

          this.$router.replace({
            path: "/zhangyin/toprize",
          });
        } else {
          this.$toast(result.data.msg);
        }
      });
    },

    checkGuize() {
      this.ifMask = !this.ifMask;
    },
    destroyed() {
      clearTimeout(this.timer);
    },
  },
  mounted() {},
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

.mask {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.57);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /*定义父元素的元素垂直居中*/
  justify-content: center; /*定义子元素的里的元素水平居中*/
}

.diloa {
  width: 100%;
  height: 490px;
  background: url(../../assets/ljt2.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  position: relative;
}

.text:first-child {
  margin-top: 60px;
}

.text {
  color: #6a6a6a;
  font-size: 16px;
  width: 270px;
  word-break: break-all;
  margin: auto;
  line-height: 20px;
  text-align: justify;
  display: inline-grid;
  grid-template-columns: 20px 240px;
  grid-template-rows: auto auto;
}

.btn {
  width: 70%;
  margin: auto;
  height: 50px;
  background: url(../../assets/anniu.png) no-repeat;
  background-size: contain;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  bottom: 25px;
  left: 15%;
}

.content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: url(../../assets/bg2.png) no-repeat;
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
  height: 52px;
  line-height: 46px;
  background: url(../../assets/code.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  color: #fff;
}

.start {
  width: 100%;
  background: url(../../assets/yifenqian.png) no-repeat;
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

.guize {
  color: #6ea7af;
  position: relative;
  width: 150px;
  margin: auto;
}

.guize span {
  font-weight: bold;
}

.guize::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 1px;
  background: #6ea7af;
}
</style>
