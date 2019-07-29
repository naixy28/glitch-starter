import service from './service'

export const ser = {
  install(Vue) {
    Vue.prototype.$service = service
  },
}
