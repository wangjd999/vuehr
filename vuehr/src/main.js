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

Vue.config.productionTip = false

//Vue对象使用Element-ui
Vue.use(Element);
//定义$axios（可以不写，在组件中直接使用axios）
Vue.prototype.$axios= axios;
//Vue对象使用axios
Vue.use(axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
