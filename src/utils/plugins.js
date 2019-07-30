import service from './service'
import { Toast } from 'kaku-ui'

export const ser = {
  install(Vue) {
    Vue.prototype.$service = service
    Vue.prototype.$toast = Toast
  },
}
