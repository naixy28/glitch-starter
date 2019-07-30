import Axios from 'axios'
// import { JK } from '@ruguoapp/jike-js-sdk'
// import { IS_BETA, IS_DEV, IS_APP } from './constant'

const commonErrorHandler = e => {
  if (e.response) {
    throw e
    // const res = e.response

    // switch (res.status) {
    //   case 400:
    //   case 401:
    //   case 422:
    //     if (IS_APP) {
    //       JK.toast(res.data.error, 2000, 'error')
    //     } else {
    //       Toast(res.data.error, 2000, 'error')
    //       console.warn(`[network]${res.data.error}`)
    //     }
    //     break
    //   default:
    //     throw e
    // }
  }
}

// const HOST = `https://activity${IS_BETA ? '-beta' : ''}.jike.ruguoapp.com/1.0/milk-tea-battle/`
// const host = IS_DEV ? '/api' : HOST

// const http = wrapAuth(
//   Axios.create({
//     baseURL: host,
//   }),
// )
// http.defaults.headers.common['platform'] = IS_APP || IS_DEV ? 'app' : 'web'
// const configClient = Axios.create({ baseURL: 'https://app.jike.ruguoapp.com/1.0/configs/get' })

const host = 'https://4247092b.ngrok.io/'
const http = Axios.create({
  baseURL: host,
})

http.interceptors.response.use(response => response, commonErrorHandler)

export default {
  createTarget(name) {
    return http.post('/target/create', {
      name,
    })
  },
  fetchTarget(name) {
    return http.post('/target/detail')
  },
  // Resp Body
  //     name: string
  //     gender?: 'Female' | 'Male'
  //     birthday?: Date
  //     city?: string
  //     ...
  // }
  updateTarget(obj) {
    return http.post('/target/updateProfile', {
      ...obj,
    })
  },
  // Resp Body
  // { enabledExternals: ('Weibo' | 'Douban' | 'NeteaseMusic')[] }
  bind(identifier) {
    return http.post('/target/bindExternal', {
      identifier,
    })
  },
  // Resp Body
  // { data: Update[] }
  fetchList() {
    return http.post('/update/list')
  }
}
