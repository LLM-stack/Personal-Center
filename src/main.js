// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/pages/index'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import url from './public'

global.url = url

Vue.use(MuseUI)

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index }
})
