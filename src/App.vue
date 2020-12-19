<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    if (localStorage.getItem('cryptotoken')) {
      this.$store.dispatch('isLoginSet', true)
      this.$router.push('/dashboard')
    }else {
      this.$store.dispatch('isLoginSet', false)
    }
  },
  computed: {
    checkIsLogin() {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>