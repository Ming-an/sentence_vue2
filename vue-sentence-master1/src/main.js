import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
// import {createPinia} from 'pinia'
// import { createApp } from 'vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

Vue.use(ElementUI) //使用elementUI
Vue.prototype.$axios=axios

Vue.prototype.$httpUrl='http://localhost:8080'  //将地址设置为全局
Vue.config.productionTip = false
// const app = createApp(App);
// const pinia = createPinia();

// Vue.use(pinia)
// app.use(router)
// app.mount('#app')


new Vue({
  router,
  // pinia,
  // axios,
  render: h => h(App)
}).$mount('#app')