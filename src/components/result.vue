<template>
  <div class="content">
    <div class="result">
      <div class="diloa">
        <div class="title"></div>
        <div class="icon"></div>
        <div class="result-data">
          <span class="">本次得分：</span>
          <span class="Num">{{ grade }}</span>
        </div>
        <div class="result-share" @click="share"></div>
        <div class="result-prize"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import wx from "weixin-js-sdk";
import { appId } from "../common/js/common";

console.log(appId);

export default {
  name: "login",
  data() {
    return {
      grade: 0,
    };
  },
  methods: {
    share() {
      wx.ready(function() {
        // 获取"分享给朋友"按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage({
          title: "#分享标题", // 分享标题
          desc: "#分享描述", // 分享描述
          link: window.location.href,
          imgUrl: "#分享图标", // 分享图标
          type: "link", // 分享类型,music、video或link，不填默认为link
          success: function() {
            // 设置成功
            this.$toast("分享成功");
          },
          fail: function() {
            this.$toast("分享给朋友失败");
          },
        });
      });
    },
  },
  created() {
    const userData = this.$store.state.userData;
    const config = {
      headers: {
        token: userData.token,
      },
    };
    this.grade = this.$route.query.grade;

    axios
      .post(
        "/devf/activity/result",
        {
          activityId: userData.activityId,
          score: this.grade,
          status: this.grade == 100 ? 1 : 0,
          userId: userData.userId,
        },
        config
      )
      .then(function(response) {
        console.log(response);
        if (response.data.code == 0) {
        } else {
          this.$toast(response.data.msg);
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/devf/wx/getWxSignValue?url=${window.location.href}`, config)
      .then(function(response) {
        console.log(response);
        let data = response.data;

        if (data.code == 0) {
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端this.$toast出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId, // 必填，公众号的唯一标识
            timestamp: data.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
            signature: data.data.signature, // 必填，签名，见附录1
            jsApiList: ["onMenuShareAppMessage"], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    wx.error(function() {
      console.log("wx 配置失败");
    });
  },
};
</script>

<style scoped>
.content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: url(../assets/bg.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.result {
  position: relative;
  background: rgba(51, 51, 51, 0.57);
  width: 100%;
  height: 100%;
  display: table;
  display: flex;
  align-items: center; /*定义父元素的元素垂直居中*/
  justify-content: center; /*定义子元素的里的元素水平居中*/
}

.diloa {
  width: 90%;
  height: 420px;
  background: url(../assets/1.png) no-repeat;
  background-size: 100% 100%;
}

.title {
  width: 60%;
  height: 30px;
  margin: auto;
  background: url(../assets/2.png) no-repeat;
  background-size: contain;
  margin-top: 66px;
}

.icon {
  margin: auto;
  background: url(../assets/3.png) no-repeat;
  background-size: contain;
  width: 58%;
  height: 150px;
}

.result-data {
  text-align: center;
  margin-top: 10px;
  color: #69b0aa;
  font-weight: bold;
}

.Num {
  color: #ff8043;
}

.result-share {
  margin: auto;
  background: url(../assets/4.png) no-repeat;
  background-size: contain;
  width: 74%;
  height: 80px;
}

.result-prize {
  margin: auto;
  background: url(../assets/5.png) no-repeat;
  background-size: contain;
  width: 74%;
  height: 80px;
  margin-top: -20px;
}
</style>
