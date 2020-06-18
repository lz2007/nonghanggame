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
      },
    },
  },
};
