import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAWN from "vue-awesome-notifications"
// import VueSocketIO from 'vue-socket.io'
import VueSocketIOExt from 'vue-socket.io-extended';
import Io from 'socket.io-client'
import './style.css'
import { baseURL } from './store/utils'

const socket = Io(baseURL)

Vue.config.productionTip = false
Vue.use(VueSocketIOExt, socket)
Vue.use(VueAWN, {position: 'top-right',durations: {global: 2000}})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
