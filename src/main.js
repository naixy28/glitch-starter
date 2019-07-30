import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
  faCog,
  faBars,
  faIdBadge,
  faSearchPlus,
  faCalendarAlt,
  faRocket,
  faMars,
  faVenus,
  faPencilAlt,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { ser } from './utils/plugins'

const padLeft = (str, max) => {
  str = str.toString()
  return str.length < max ? padLeft('0' + str, max) : str
}

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

library.add(faSpinner, faCog, faBars, faIdBadge,
  faSearchPlus,
  faCalendarAlt,
  faRocket,
  faMars,
  faVenus,
  faChevronLeft,
  faPencilAlt)

Vue.component('fa', FontAwesomeIcon)
Vue.filter('formatTime', time => {
  const t = new Date(time)

  return `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日 ${padLeft(t.getHours(), 2)}:${padLeft(t.getMinutes(), 2)}`
})

Vue.use(ser)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
