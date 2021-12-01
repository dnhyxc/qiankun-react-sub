const { override, fixBabelImports } = require("customize-cra");
const path = require("path");
const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    // 微应用的包名，这里与主应用中注册的微应用名称一致
    config.output.library = `${name}-[name]`;
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    config.output.libraryTarget = "umd";
    // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
    config.output.jsonpFunction = `webpackJsonp_${name}`;

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },

  devServer: (configFunction) => {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      // 关闭主机检查，使微应用可以被 fetch
      config.disableHostCheck = true;
      // 配置跨域请求头，解决开发环境的跨域问题
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      // 配置 history 模式
      config.historyApiFallback = true;
      return config;
    };
  },
};

// module.exports = override(
//   fixBabelImports("import", {
//     libraryName: "antd",
//     libraryDirectory: "es",
//     style: "css",
//   })
// );
