const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false
  // devServer: {  
  //   proxy: {  
  //     '/user': { // 注意这里匹配的是前端请求的路径部分  
  //       target: 'http://localhost:8080', // 后端服务器的地址  
  //       changeOrigin: true, // 如果接口跨域，需要进行这个参数配置  
  //       ws: true,
  //       pathRewrite: {  
  //         '^/user': '' // 路径重写，将/user开头的请求重写为实际请求的URL  
  //       }  
  //     }  
  //   } 
  // } 
})
