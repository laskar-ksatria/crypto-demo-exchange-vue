<template>
    <div class="hold-transition login-page home-signup">
        <div class="login-box">
            <div class="login-logo">
                <a href="#" style="color: yellow"><b>Cryptocurrency </b>Exchange</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body card-signup">
                <p class="login-box-msg" style="color: white">Register new account</p>

                <form>
                    <div class="input-group mb-3">
                        <input v-model="username" type="text" class="form-control" placeholder="Username">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input v-model="password" type="password" class="form-control" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                </form>
                
                <Button title="Sign Up" :loading="loading" :onClick="sendSignUp" />

                <!-- /.social-auth-links -->

                <p class="mb-1">
                    
                </p>
                <p class="mb-0">
                    <router-link to="/">
                      <a href="# disable" style="color: white" class="text-center">Already have account?</a>
                    </router-link>
                </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>


<script>
import Button from '../components/modules/Button.vue';
import { F_REGISTER } from '../store/utils'

export default {
  name: 'Signup',
  data() {
    return {
      username: "",
      password: "",
      loading: false
    }
  },
  components: {
      Button
  },
  methods: {
      sendSignUp() {
          this.loading = true
          setTimeout(() => {
              F_REGISTER({username: this.username, password: this.password})
                .then(message => {
                    this.$awn.success(message, {labels: {success: "Account created"},})
                    setTimeout(() => {
                        this.$router.push('/')
                        this.loading = false;
                    }, 1500)
                })
                .catch(message => {
                    this.$awn.alert(message, {labels: {alerts: "Oops!"}})
                    this.loading = false;
                })
          }, 2000)
      }
  }
}
</script>

<style scoped>
.home-signup {
    background-image: url('../assets/img/btc5.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.card-signup {
  background:#080033;
  box-shadow: 1px 1px 10px #363636;
}

</style>