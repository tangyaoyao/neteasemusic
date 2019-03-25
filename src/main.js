import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

const { BrowserWindow, webContents } = require('electron').remote
const Eapp = require('electron').remote.app
// const ipcRenderer = require('electron').ipcRenderer

Vue.prototype.$axios = axios
Vue.prototype.$BrowserWindow = BrowserWindow
Vue.prototype.$Eapp = Eapp
// Vue.prototype.$ipcRenderer = ipcRenderer


Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
