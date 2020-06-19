import axios from "axios";
import router from "../../router";
import store from "../../store";
let instance = axios.create();
import { Toast } from "vant";
console.log(store);

// http response 拦截器
instance.interceptors.response.use(
  (response) => {
    //拦截响应，做统一处理
    if (response.data.code) {
      console.log(response);

      switch (response.data.code) {
        case "0101":
        case "0100":
          store.commit("setToken", "");
          router.replace({
            path: "/login",
          });
      }
    }
    return response;
  },
  //接口错误状态处理，也就是说无响应时的处理
  (error) => {
    Toast("错误码:" + error.response.status);
    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  }
);

// 发送验证码
export function send(phone) {
  const url = "/api/abc/sms/send/";

  return axios.post(url, {
    phone,
  });
}

// 校验验证码 参数phone，validateCode
export function check(phone, validateCode) {
  const url = "/api/abc/sms/check/";

  return axios.post(url, {
    phone,
    validateCode,
  });
}

// 抽奖接口 /api/abc/business/prize/draw

export function draw(grade, JWT_TOKEN) {
  const url = "/api/abc/business/prize/draw";
  const config = {
    headers: {
      JWT_TOKEN,
    },
  };
  return instance.post(
    url,
    {
      grade,
    },
    config
  );
}

// 检查当日玩游戏次数
// url: /business/user/check
// 返回参数：
//   data.todayTotalNumber (当日可玩次数)
//   data.todayPlayedNumber (当日已玩次数)

export function userCheck(JWT_TOKEN) {
  const url = "/api/abc/business/user/check";
  const config = {
    headers: {
      JWT_TOKEN,
    },
  };
  return instance.post(url, {}, config);
}

// 进入游戏时调用
// url: /business/user/played
// 不需关注返回结果
export function played(JWT_TOKEN) {
  const url = "/api/abc/business/user/played";
  const config = {
    headers: {
      JWT_TOKEN,
    },
  };
  return instance.post(url, {}, config);
}

// 获取微信签名（微信分享参数）
// url: /wechat/sign
// 返回参数
//  url
//  jsapiTicket
//  nonceStr
//  timestamp
//  signature
//  appId

export function sign(JWT_TOKEN) {
  const url = "/api/abc/wechat/sign";
  const config = {
    headers: {
      JWT_TOKEN,
    },
  };
  return instance.post(url, {}, config);
}

// 分享成功后调用
// url: /business/user/shared
// 不需关注返回结果

export function shared(JWT_TOKEN) {
  const url = "/api/abc/business/user/shared";
  const config = {
    headers: {
      JWT_TOKEN,
    },
  };
  return instance.post(url, {}, config);
}

// 兑奖接口
export function cash(JWT_TOKEN) {
  const url = "/api/abc/exchange/cash ";
  const config = {
    headers: {
      JWT_TOKEN,
    },
  };
  return instance.post(url, {}, config);
}
