import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    balance: null,
    isLogin: false,
    myorders: null,
    all_prices: null,
  },
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value
    },
    setUser(state, value) {
      state.user = value
    },
    setBalance(state, value) {
      state.balance = value;
    },
    setOrders(state, value) {
      state.myorders = value;
    },
    setPrices(state, value) {
      state.all_prices = value
    },
    setCurrentPrice(state, value) {
      let { PRICE, FROMSYMBOL } = value;
      state.all_prices[FROMSYMBOL].USD.PRICE = PRICE
    }
  },
  actions: {
    isLoginSet({commit}, value) {
      commit("setIsLogin", value);
    },
    userSet({commit}, value) {
      let { demo_balance } = value
      commit("setUser", value);
      commit('setBalance', demo_balance)
    },
    orderSet({commit}, value) {
      commit('setOrders', value)
    },
    priceSet({commit}, value) {
      commit('setPrices', value)
    },
    currentPriceSet({commit}, value) {
      commit('setCurrentPrice', value)
    },
    balanceSet({commit}, value) {
      commit('setBalance', value)
    }
  },
  modules: {
  }
})
