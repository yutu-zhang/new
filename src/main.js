import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "./utils/request"
import {gets,posts} from "./utils/api"

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// elment ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI)

Vue.prototype.$http = http
Vue.prototype.$gets = gets
Vue.prototype.$posts = posts

// 引入axios
import axios from 'axios'
// 将axios定义在原型上
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
