<template>
  <div class="game">
    <div class="head">
      <div class="tuichu" @click="tuichu"></div>
      <div class="time">
        <div class="count-down">
          <span class="count">{{ gameTime }}</span>
          <span class="unit">s</span>
        </div>
      </div>
      <div class="level" :class="['level' + gameLevel]"></div>
    </div>

    <div class="games">
      <div class="cardOne" :class="['cardOne' + gameLevel]">
        <div class="points" v-show="gameLevel == 1">
          <div
            class="point point11"
            data-index="0"
            @click.once="pointClick"
          ></div>
          <div
            class="point point12"
            data-index="1"
            @click.once="pointClick"
          ></div>
          <div
            class="point point13"
            data-index="2"
            @click.once="pointClick"
          ></div>
        </div>
        <div class="points" v-show="gameLevel == 2">
          <div
            class="point point21"
            data-index="0"
            @click.once="pointClick"
          ></div>
          <div
            class="point point22"
            data-index="1"
            @click.once="pointClick"
          ></div>
          <div
            class="point point23"
            data-index="2"
            @click.once="pointClick"
          ></div>
          <div
            class="point point24"
            data-index="3"
            @click.once="pointClick"
          ></div>
          <div
            class="point point24 point244"
            data-index="3"
            @click.once="pointClick"
          ></div>
          <div
            class="point point25"
            data-index="4"
            @click.once="pointClick"
          ></div>
        </div>
        <div class="points" v-show="gameLevel == 3">
          <div
            class="point point31"
            data-index="0"
            @click.once="pointClick"
          ></div>
          <div
            class="point point32"
            data-index="1"
            @click.once="pointClick"
          ></div>
          <div
            class="point point33"
            data-index="2"
            @click.once="pointClick"
          ></div>
          <div
            class="point point34"
            data-index="3"
            @click.once="pointClick"
          ></div>
          <div
            class="point point35"
            data-index="4"
            @click.once="pointClick"
          ></div>
          <div
            class="point point36"
            data-index="5"
            @click.once="pointClick"
          ></div>
          <div
            class="point point37"
            data-index="6"
            @click.once="pointClick"
          ></div>
        </div>
      </div>
      <div class="cardTwo" :class="['cardTwo' + gameLevel]">
        <div class="points" v-show="gameLevel == 1">
          <div
            class="point point11"
            data-index="0"
            @click.once="pointClick"
          ></div>
          <div
            class="point point12"
            data-index="1"
            @click.once="pointClick"
          ></div>
          <div
            class="point point13"
            data-index="2"
            @click.once="pointClick"
          ></div>
        </div>
        <div class="points" v-show="gameLevel == 2">
          <div
            class="point point21"
            data-index="0"
            @click.once="pointClick"
          ></div>
          <div
            class="point point22"
            data-index="1"
            @click.once="pointClick"
          ></div>
          <div
            class="point point23"
            data-index="2"
            @click.once="pointClick"
          ></div>
          <div
            class="point point24"
            data-index="3"
            @click.once="pointClick"
          ></div>
          <div
            class="point point24 point244"
            data-index="3"
            @click.once="pointClick"
          ></div>
          <div
            class="point point25"
            data-index="4"
            @click.once="pointClick"
          ></div>
        </div>
        <div class="points" v-show="gameLevel == 3">
          <div
            class="point point31"
            data-index="0"
            @click.once="pointClick"
          ></div>
          <div
            class="point point32"
            data-index="1"
            @click.once="pointClick"
          ></div>
          <div
            class="point point33"
            data-index="2"
            @click.once="pointClick"
          ></div>
          <div
            class="point point34"
            data-index="3"
            @click.once="pointClick"
          ></div>
          <div
            class="point point35"
            data-index="4"
            @click.once="pointClick"
          ></div>
          <div
            class="point point36"
            data-index="5"
            @click.once="pointClick"
          ></div>
          <div
            class="point point37"
            data-index="6"
            @click.once="pointClick"
          ></div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="select-content" :style="{ width: selectW }">
        <div
          class="select"
          v-for="(item, i) in selectNum"
          :key="i"
          :class="[item ? 'active' : '']"
        ></div>
      </div>
    </div>

    <transition name="fade">
      <div class="mask" v-show="showTits">
        <div class="diloa">
          <div class="tit-text">
            本关共有 <span class="titClolr">{{ selectNum.length }}处</span> 不同
          </div>
          <div class="tit-text">
            请在两图中 （任一图中即可）
          </div>
          <div class="tit-text">
            点击圈出不同之处，限时<span class="titClolr">{{
              setGameTime
            }}</span>
            秒。
          </div>
          <!-- <div class="tit-text pad30">
          每人每天仅有<span class="titClolr">1</span>次游戏机会
        </div> -->

          <div class="btn" @click="start" style="margin-top: 50px;">
            我知道了
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="mask" v-show="showFailTits">
        <div class="failTits" @click="hideFailTits">
          <div class="failTitsBg"></div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask successTits" v-show="showSuccessTits">
        <div class="diloaSuccess">
          <div class="diloaSuccess-text diloaSuccess-name">
            {{ phone }}
          </div>
          <div class="diloaSuccess-text diloaSuccess-dec">
            眼疾手快就是你 收下这份<span class="titClolr">粽</span>意礼
          </div>
          <div
            class="diloaSuccess-img"
            :class="['diloaSuccess-img' + gameLevel]"
          ></div>
          <div class="diloaSuccess-text diloaSuccess-dec2">
            试试手气，看看能否抱走以上奖品
          </div>
          <div class="diloaSuccess-text diloaSuccess-dec2">
            （您只有1次机会抽奖，请三思哦）
          </div>

          <div
            class="btn btn-bg2"
            :style="{ margin: gameLevel != 3 ? '12px auto' : '46px auto' }"
            @click="quchoujian"
          >
            <span v-show="gameLevel != 3">不玩了，立刻抽奖</span>
            <span v-show="gameLevel == 3">立刻抽奖</span>
          </div>
          <div class="btn" @click="nextTits" v-show="gameLevel != 3">
            没玩够，继续闯关
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { draw, userCheck, played, sign, shared } from "../common/js/api";
import { code } from "../common/js/common";
import wx from "weixin-js-sdk";

export default {
  name: "game",
  data() {
    return {
      gameTime: "15.00", // 游戏时间
      gameLevel: 1, // 游戏关卡
      selectNum: ["", "", ""], //底部list
      showTits: true, // 开始提示
      showFailTits: false, // 游戏失败
      showSuccessTits: false, // 创关成功
      todayTotalNumber: 0, // (当日可玩次数)
      todayPlayedNumber: 0, //(当日已玩次数)
    };
  },
  computed: {
    selectW: function() {
      let w = "50%";
      if (this.gameLevel == 1) {
        w = "50%";
      }
      if (this.gameLevel == 2) {
        w = "90%";
      }
      if (this.gameLevel == 3) {
        w = "98%";
      }

      return w;
    },
    setGameTime: function() {
      let w = "15";
      if (this.gameLevel == 1) {
        w = "15";
      }
      if (this.gameLevel == 2) {
        w = "30";
      }
      if (this.gameLevel == 3) {
        w = "45";
      }

      return w;
    },
    token() {
      return this.$store.state.token;
    },
    phone() {
      return this.$store.state.phone;
    },
  },
  methods: {
    // 推出
    tuichu() {
      this.$router.replace({
        path: "/login",
      });
    },
    //倒计时
    changeTimeStamp(timeStamp) {
      var distancetime =
        new Date(timeStamp * 1000).getTime() - new Date().getTime();

      if (distancetime > 0) {
        //如果大于0.说明尚未到达截止时间
        var ms = Math.floor(distancetime % 1000);
        var sec = Math.floor((distancetime / 1000) % 60);
        var min = Math.floor((distancetime / 1000 / 60) % 60);
        var hour = Math.floor((distancetime / 1000 / 60 / 60) % 24);
        if (ms < 10) {
          ms = "0" + ms;
        }
        if (sec < 10) {
          sec = "0" + sec;
        }
        if (min < 10) {
          min = "0" + min;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }

        return sec + "." + String(ms).substr(0, 2);
      } else {
        //若否，就是已经到截止时间了
        return "00.00";
      }
    },
    // 游戏点击
    pointClick(e) {
      // 时间耗尽
      if (this.gameTime == "00.00") {
        return;
      }

      let className = e.target.classList[1];

      let point = document.querySelectorAll("." + className);
      for (let index = 0; index < point.length; index++) {
        const element = point[index];
        element.style.opacity = 1;
      }

      let hasClassName = this.selectNum.find((value) => value == className);
      console.log(hasClassName);

      if (!hasClassName) {
        for (let index = 0; index < this.selectNum.length; index++) {
          const selectNum = this.selectNum[index];
          if (!selectNum) {
            this.$set(this.selectNum, index, className);
            break;
          }
        }
      }

      console.log(this.selectNum);

      let ifWin = this.selectNum.find((value) => value == "");
      // 下一关
      if (ifWin == undefined) {
        if (this.gameLevel == 3) {
          clearInterval(this.interval);
          this.showSuccessTits = true;
          this.setTime();
          return;
        }
        console.log("下一关");
        clearInterval(this.interval);
        this.showSuccessTits = true;
      }
    },

    async hideFailTits() {},
    // 开始游戏
    start() {
      if (this.isPlayEnd()) {
        return;
      }
      this.showTits = false;
      this.setTime();
      this.nextLevel(this.gameLevel);
    },
    // 设置底部list
    setSelectNum() {
      for (let index = 0; index < this.selectNum.length; index++) {
        this.selectNum[index] = "";
      }

      if (this.gameLevel == 2 || this.gameLevel == 3) {
        if (this.gameLevel == 2 && this.selectNum.length != 5) {
          this.selectNum.push("");
          this.selectNum.push("");
        }

        if (this.gameLevel == 3 && this.selectNum.length != 7) {
          this.selectNum.push("");
          this.selectNum.push("");
        }
      }
    },
    // 设置开始时间
    setTime() {
      if (this.gameLevel == 1) {
        this.gameTime = "15.00";
      }
      if (this.gameLevel == 2) {
        this.gameTime = "30.00";
      }
      if (this.gameLevel == 3) {
        this.gameTime = "45.00";
      }
    },
    // 计算分数
    getGrade(isSuccess) {
      let grade = 0;
      if (this.gameLevel == 1) {
        if (isSuccess) {
          grade = 60;
        } else {
          grade = 0;
        }
      }
      if (this.gameLevel == 2) {
        if (isSuccess) {
          grade = 80;
        } else {
          grade = 60;
        }
      }
      if (this.gameLevel == 3) {
        if (isSuccess) {
          grade = 100;
        } else {
          grade = 80;
        }
      }
      return grade;
    },
    // 下一关开始提示
    nextTits() {
      this.showSuccessTits = false;
      this.showTits = true;
      this.gameLevel = this.gameLevel + 1;
      this.setTime();
      if (this.gameLevel == 2 || this.gameLevel == 3) {
        for (let index = 0; index < this.selectNum.length; index++) {
          this.selectNum[index] = "";
        }
        this.selectNum.push("");
        this.selectNum.push("");
      }
    },
    // 下一关
    nextLevel(level = 1) {
      // 第一关
      let times = 0;
      if (level == 1) {
        times = 15;
      }
      if (level == 2) {
        times = 30;
      }
      if (level == 3) {
        times = 45;
      }

      setTimeout(() => {
        clearInterval(this.interval);
        let TimeStamp = Date.parse(new Date()) / 1000 + times;
        this.interval = setInterval(() => {
          TimeStamp = TimeStamp - 0.001;
          this.gameTime = this.changeTimeStamp(TimeStamp);
          if (this.changeTimeStamp(TimeStamp) == "00.00") {
            clearInterval(this.interval);
            console.log("倒计时用完");
            this.showFailTits = true;
          }
        }, 1);
      }, 500);
    },
    //抽奖
    async quchoujian() {
      const data = await draw(this.gameLevel, this.token);
      console.log(data);

      if (data.data.code == code) {
        this.$router.push({
          path: "/toprize",
          query: {
            money: data.data.data.money,
            channl: data.data.data.channl,
            valid: data.data.data.valid,
          },
        });
      } else {
        this.$toast(data.data.msg);
      }
    },
    async userCheck() {
      // 检查当日玩游戏次数
      const result = await userCheck(this.token);
      console.log(result);
      //   data.todayTotalNumber (当日可玩次数)
      //   data.todayPlayedNumber (当日已玩次数)
      if (result.data.code == code) {
        console.log(result.data.data.todayPlayedNumber);
        this.todayTotalNumber = result.data.data.todayTotalNumber;
        this.todayPlayedNumber = result.data.data.todayPlayedNumber;
        // 有机会玩才调用played
        if (!this.isPlayEnd()) {
          this.played();
        }
      } else {
        this.$toast(result.data.msg);
      }
    },
    // 进入游戏时调用
    async played() {
      const playedResult = await played(this.token);
      console.log(playedResult);
    },

    // 判断游戏机会是否用完
    isPlayEnd() {
      let flab = false;

      if (
        this.todayTotalNumber > this.todayPlayedNumber &&
        this.todayPlayedNumber <= 3
      ) {
        //这种情况才可以玩游戏
        flab = false;
      } else {
        flab = true;
      }

      if (flab) {
        this.$toast("今日游戏机会已用完");
      }

      return flab;
    },

    //分享
    async wxShared() {
      const token = this.token;
      const result = await sign(this.token);
      const that = this;
      console.log(result.data.data);

      if (wx) {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端this.$toast出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: result.data.data.appId, // 必填，公众号的唯一标识
          timestamp: result.data.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.data.data.nonceStr, // 必填，生成签名的随机串
          signature: result.data.data.signature, // 必填，签名
          jsApiList: ["updateAppMessageShareData"], // 必填，需要使用的JS接口列表
        });

        wx.ready(function() {
          //需在用户可能点击分享按钮前就先调用
          wx.updateAppMessageShareData({
            title: "快来找不同，好礼粽不停", // 分享标题
            desc:
              "视频会员卡、500元京东E卡、1000元苏宁卡等你来拿~头图画面：用龙舟的头", // 分享描述
            link: window.location.origin, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: "", // 分享图标
            success: function() {
              // 设置成功
              shared(that.token).then((result) => {
                that.setSelectNum();
                that.setTime();
                that.showFailTits = false;
                that.showTits = true;
                that.userCheck();
              });
            },
            fail: function() {
              this.$toast("分享失败");
            },
          });
        });

        wx.error(function(res) {
          console.log(res);
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
      }
    },
  },
  mounted() {
    this.userCheck();
    this.wxShared();
  },
  created() {
    this.setSelectNum();
    this.setTime();
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
@import "base.css";
@import "screen320.css";
@import "screen375.css";
@import "screen768.css";
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
  background: rgba(51, 51, 51, 0.57);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /*定义父元素的元素垂直居中*/
  justify-content: center; /*定义子元素的里的元素水平居中*/
  color: #fff;
  font-size: 60px;
}

.failTits {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /*定义子元素的里的元素水平居中*/
}

.failTitsBg {
  width: 96%;
  height: 500px;
  background: url(../assets/fail.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 30px;
}

.diloa {
  width: 100%;
  height: 270px;
  background: url(../assets/tits.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 90px;
}

.diloaSuccess {
  width: 100%;
  height: 460px;
  background: url(../assets/1.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 47px;
  font-weight: bold;
  font-size: 16px;
  color: #69b0aa;
}

.tit-text {
  color: #69b0aa;
  font-size: 16px;
  font-weight: bold;
  line-height: 34px;
}

.titClolr {
  color: #ff8043;
}

.pad30 {
  padding: 30px;
}

.diloaSuccess-text {
  line-height: 30px;
}

.diloaSuccess-img {
  width: 64%;
  height: 168px;
  background-image: url(../assets/1/tit.jpg);
  background-repeat: no-repeat;
  margin: auto;
  background-size: contain;
  margin-top: 10px;
  margin-bottom: 10px;
}

.diloaSuccess-img1 {
  background-image: url(../assets/1/tit.jpg);
}
.diloaSuccess-img2 {
  background-image: url(../assets/2/tit.jpg);
}
.diloaSuccess-img3 {
  background-image: url(../assets/3/tit.jpg);
}

.btn {
  width: 70%;
  margin: auto;
  height: 50px;
  background: url(../assets/anniu.png) no-repeat;
  background-size: contain;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
  color: #fff;
}

.btn-bg2 {
  background-image: url(../assets/anniu2.png);
}

.game {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: url(../assets/gameBg.png) no-repeat;
  background-size: 100% 100%;
}

.head {
  position: relative;
  width: 100%;
  height: 100px;
  background: url(../assets/head.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
}

.tuichu {
  flex: 1;
  background: url(../assets/tuichu.png) no-repeat;
  background-size: contain;
  margin-top: 22px;
  margin-left: 10px;
}

.time {
  flex: 3;
  background: url(../assets/time.png) no-repeat;
  background-size: contain;
  margin-top: 18px;
  margin-left: 10px;
  margin-right: 0px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.count-down {
  font-weight: 800;
  color: #ffb08a;
  margin-bottom: 20px;
  /* background-image: -webkit-linear-gradient(92deg, #ffb08a, #fb641b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}

.count {
  font-size: 36px;
}

.unit {
  font-size: 30px;
}

.level {
  background: url(../assets/diyiguan.png) no-repeat;
  flex: 1;
  background-size: contain;
  margin-top: 22px;
  margin-right: 10px;
}

.level1 {
  background-image: url(../assets/diyiguan.png);
}
.level2 {
  background-image: url(../assets/dierguan.png);
}
.level3 {
  background-image: url(../assets/disanguan.png);
}

.games {
  width: 100%;
  margin: auto;
}

.footer {
  width: 346px;
  margin: auto;
  height: 50px;
  left: 0;
  position: relative;
  bottom: 0px;
  background: url(../assets/footer.png) no-repeat;
  background-size: 100%;
}

.select-content {
  width: 50%;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

.select {
  flex-basis: 40px;
  margin-left: 10px;
  margin-top: 3px;
  background: url(../assets/unSelect.png) no-repeat;
  background-size: 80%;
}

.select:last-child {
  margin-right: 10px;
}

.select.active {
  background-image: url(../assets/select.png);
}
</style>
