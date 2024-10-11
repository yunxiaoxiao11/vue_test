const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''},
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中的host值
      },
      '/2api2': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/2api2': ''},
        ws: true, // 用于支持websocket
        changeOrigin: true
      }
    }
  }
})
