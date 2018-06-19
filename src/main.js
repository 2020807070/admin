import Vue from 'vue'//框架
import App from './App'//入口
import router from './router'//路由
import store from './store/store.js'//Store
import Vuex from 'vuex'//Vuex

import cookie from './plugins/cookie'//引入Loading插件
import ElementUI from 'element-ui';//引入Ele Ui
import 'element-ui/lib/theme-chalk/index.css';
// import "../node_modules/element-ui/lib/theme-chalk/index.css";//引入样式
Vue.use(Vuex)//挂载Vuex
Vue.use(ElementUI)//挂载Ele
import fetch from './plugins/fetch'//引入Loading插件
Vue.use(fetch, {
  beforEach() {
    console.log("请求前")
  },
  afterEach() {
    console.log("请求后")
  },
  catchEach() {
    console.log("请求出错")
  }
})
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
new Vue({
  el: '#app',
  router,
  store,//挂载
  components: { App },
  template: '<App/>'
})
