<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="header-dashboard">
        <div>
            <img src="../assets/img/Daco_4824927.png" width="40" />
            <span class="header-text">Crypto Exchange</span>
        </div>
        <div>
             <button @click="logout" type="button" class="btn btn-block btn-warning btn-sm btn-flat">Logout</button>
        </div>
    </div>
  </nav>
</template>

<script>


export default {
    name: 'Header',
    methods: {
      logout() {
        localStorage.removeItem('cryptotoken')
        this.$store.dispatch('isLoginSet', false)
        this.$router.push('/')
      }
    }
}
</script>

<style>
.header-dashboard {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px 0 10px;
}

.header-text {
  margin-left: 20px;
  font-weight: 400;
}
</style>