<template>
  <div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <Navbar />
      <SideBar />
      <Loading v-if="isLoading" />
      <MainContent v-if="!isLoading" />
    </div>  
  </div>
</template>

<script>
import Socket from 'socket.io-client'
import Navbar from '../components/modules/Navbar.vue'
import SideBar from '../components/modules/SideBar.vue'
import MainContent from '../components/MainContent.vue'
import Loading from '../components/mainContent/Loading.vue'
import { F_READ_ME, F_READ_MY_ORDER, F_GET_PRICES, baseURL } from '../store/utils'

let Io = Socket(baseURL)

export default {
  name: 'Dashboard',
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    SideBar,
    Navbar,
    MainContent,
    Loading
  },
  created() {
    Io.on('realtime-price', data => {
      this.$store.dispatch('currentPriceSet', data)
    })
  },
  mounted() {
    if (localStorage.getItem('cryptotoken')) {
      this.isLoading = true
      setTimeout(() => {
        F_READ_ME()
        .then(user => {
          this.$store.dispatch("userSet", user)
          F_READ_MY_ORDER()
            .then(myOrder => {
              if (myOrder.length > 0) {
                this.$store.dispatch('orderSet', myOrder)
              }
              F_GET_PRICES()
                .then(prices => {
                  let { RAW } = prices;
                  this.$store.dispatch('priceSet', RAW)
                  this.isLoading = false
                })
            })
        })
        .catch(message => {
          this.$awn.alert(message, {labels: {alert: "Oops!"}})
          this.isLoading = false;
        })
      }, 2500)
    }else {
      this.$awn.alert("Your session has ended", {labels: {alert: "Oops!"}})
        this.$router.push("/")
    }
  }
}
</script>

