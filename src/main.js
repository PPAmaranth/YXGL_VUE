// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import axios from 'axios'
import jq from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueDND from 'awe-dnd'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$jq = jq
Vue.use(VueDND)
Vue.use(Vuex)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
