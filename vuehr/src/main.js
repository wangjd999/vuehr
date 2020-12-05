// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Element-ui
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
//引入axios
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false

//Vue对象使用Element-ui
Vue.use(Element);
//定义$axios（可以不写，在组件中直接使用axios）
Vue.prototype.$axios= axios;
//Vue对象使用axios
Vue.use(axios);
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
Vue.prototype.$qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
