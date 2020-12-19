import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import TradePage from '../components/mainContent/TradePage.vue'
import HistoryPage from '../components/mainContent/HistoryPage.vue'
import Dashboard from '../views/Dashboard.vue'
import TransferPage from '../components/mainContent/TransferBalance.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('cryptotoken')) {
        next()
      }else {
        next({name: 'Dashboard'})
      }
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
    beforeEnter: (to, from, next) => {
      if(!localStorage.getItem('cryptotoken')) {
        next()
      }else {
        next({name: 'Dashboard'})
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('cryptotoken')) {
        next()
      }else {
        next({name: 'Login'})
      }
    },
    children: [
      {
        path: '',
        component: TradePage
      },
      {
        path: 'historytrade',
        component: HistoryPage
      },
      {
        path: 'transfer',
        component: TransferPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
