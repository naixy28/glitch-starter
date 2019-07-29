import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { ser } from './utils/plugins'

var head = document.getElementsByTagName('head').item(0)
var script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', 'https://cdn.bootcss.com/vConsole/3.3.2/vconsole.min.js')
head.appendChild(script)
var oldFun = window.onload
window.onload = oldFun
  ? function() {
    oldFun()
    new VConsole() // eslint-disable-line
  }
  : function() {
    new VConsole() // eslint-disable-line
  }

library.add(faSpinner)

Vue.component('fa', FontAwesomeIcon)

Vue.use(ser)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
