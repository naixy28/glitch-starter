import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Create from './views/Create.vue'
import Bind from './views/Bind.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'create',
      component: Create,
    },
    {
      path: '/bind',
      name: 'bind',
      component: Bind,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
  ]
})
