import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Login from "./components/common/logninAndOut/login.vue"
import Home from "./components/common/home.vue"
import PhoneLogin from "./components/common/logninAndOut/phoneLogin.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'*', redirect:'/'},
    { path: '/',name: 'home',component: Home },
    { path:'/login', name:'login', component:Login,
      // children:[{
      //   path: '/login/phoneLogin', name: 'phoneLogin', component: PhoneLogin
      // }]
    },
    { path: '/login/phoneLogin', name: 'phoneLogin', component: PhoneLogin}
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
