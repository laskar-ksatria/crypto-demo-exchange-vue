<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="#" class="brand-link">
      <img src="../../assets/img/Daco_531158.png" alt="AdminLTE Logo" class="brand-image"
           style="opacity: .8">
      <span class="brand-text font-weight-light" style="margin-left: 3px; font-weight: bold">Demo Balance</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../assets/img/wallet2.png" alt="crypto Image">
        </div>
        <div class="info saldo" style="margin-left: 10px; font-weight: 600;font-size: 18px;">
            <a href="#" class="d-block" style="color: orange;">
              {{ getBalance }}
            </a>
        </div>
      </div>
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">
                <i class="fas fa-chart-line"></i>
                <p style="margin-left: 10px;">Trade</p>
              </router-link>
            </li>
            <li class="nav-item">
                <i class="fas fa-wallet"></i>
                <p style="margin-left: 10px;">Transfer <span style="color: orange;">(Coming soon)</span></p>
            </li>
            <li class="nav-item">
                <i class="fas fa-history"></i>
                <p style="margin-left: 10px;">History <span style="color: orange;">(Coming soon)</span></p>
            </li>
            <li class="nav-item" @click="logout">
              <a href="#" class="nav-link">
                <i class="fas fa-sign-out-alt"></i>
                <p style="margin-left: 10px;">Sign Out</p>
              </a>
            </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import formatCurreny from 'format-currency'

export default {
  name: 'SideBar',
  methods: {
    logout() {
      localStorage.removeItem('cryptotoken')
      this.$store.dispatch('isLoginSet', false)
      this.$router.push('/')
    },
  },

  computed: {
    getBalance() {
      let balance = this.$store.state.balance
      return formatCurreny(balance, { format: '%s%v', symbol: '$ ', locale: 'de-DE' })
    }
  }
}
</script>

<style>
.side-link {
  margin-left: 10px;
}
</style>