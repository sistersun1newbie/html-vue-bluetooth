// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import * as util from './util/comment.js'
import VueCordova from 'vue-cordova'
import loadCordova from './packageTools/loadCordovaJS.js'
// loadCordova()
Vue.use(VueCordova)
animate
ElementUI
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.prototype.log = console.log.bind(console)
Vue.prototype.util = util
