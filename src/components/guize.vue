<template>
  <div class="content">
    <div class="guize">
      <div class="tit">
        活动时间：2020年6月25日-6月26日
      </div>
      <div class="text-box">
        <div class="text">
          <div>1.</div>
          <div>
            每个用户每天有1次初始机会参与游戏，分享后可额外获得1次机会，每人每天最多分享3次。
          </div>
        </div>
        <div class="text">
          <div>2.</div>
          <div>游戏开始后，页面显示上下两张图片，图片设置不同的茬点。</div>
        </div>
        <div class="text">
          <div>3.</div>
          <div>
            游戏共分为三关。第一关限时15s，共有3处不同；第二关，限时30s，共有5处不同；第三关限时45s，共有7处不同。
          </div>
        </div>
        <div class="text">
          <div>4.</div>
          <div>
            参与者通过点击手机屏幕，圈出两图中的不同之处，完成一关，即可获得一次抽奖机会。
          </div>
        </div>
        <div class="text">
          <div>5.</div>
          <div>每个人只能领一次奖,奖品数量有限，先到先得。</div>
        </div>
        <div class="text">
          <div>6.</div>
          <div>
            奖品设置：您将有机会获得以下奖品，5元话费券、爱奇艺视频会员月卡、腾讯视频会员月卡、50元京东E卡、500元京东E卡、1000元苏宁卡。
          </div>
        </div>
      </div>
    </div>
    <div class="login">
      <div class="start" @click="start"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    start() {
      this.$router.push({
        path: "/game",
      });
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

.content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: url(../assets/bg2.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.guize {
    content: "";
    background: url(/img/guizeBg.013b6065.png) no-repeat;
    background-size: 100% 100%;
    width: 96%;
    height: 340px;
    left: 2%;
    bottom: 85px;
    position: absolute;
}

.tit {
  background: #ff8043;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  width: 256px;
  line-height: 25px;
  margin: auto;
  margin-top: 38px;
  margin-bottom: 10px;
}

.text {
     color: #5daea5;
    font-size: 14px;
    width: 300px;
    word-break: break-all;
    margin: auto;
    line-height: 16px;
    font-weight: bold;
    text-align: justify;
    display: inline-grid;
    grid-template-columns: 20px 280px;
    grid-template-rows: auto auto;
}

.text-box {
  width: 300px;
  margin: auto;
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
