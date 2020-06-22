// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        bypassOnDebug: true,
      })
      .end();
  },
  devServer: {
    host: "192.168.0.7",
    proxy: {
      "/": {
        target: "http://120.79.31.26/", //API服务器的地址
        changeOrigin: true,
      },
      "/": {
        target: "https://pai.zt31.cn/", //第三方对接快E通API服务器的地址
        changeOrigin: true,
      },
    },
  },
};
