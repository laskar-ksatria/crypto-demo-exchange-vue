<template>
    <div class="hold-transition login-page home-login">
        <div class="login-box">
            <div class="login-logo">
                <a href="#" style="color: #fff76a"><b>Cryptocurrency </b>Exchange</a>
            </div>
            <!-- /.login-logo -->
            <div class="card card-box">
                <div class="card-body login-card-body card-login">
                <p class="login-box-msg" style="color: white">Sign in to start your session</p>

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

                <Button title="Sign In" :onClick="sendLogin" :loading="loading" />

                <!-- /.social-auth-links -->

                <p class="mb-1">
                    
                </p>
                <p class="mb-0">
                    <router-link to="/signup">
                        <a href="# disable" style="color:white" class="text-center">Register new account</a>
                    </router-link>
                </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>


<script>
import { F_LOGIN } from '../store/utils';
import Button from '../components/modules/Button.vue';

export default {
    name: 'Login',
    data() {
        return {
            username: "",
            password: "",
            loading: false,
        }
    },
    components: {
        Button
    },
    methods: {
        sendLogin() {
            this.loading = true
            setTimeout(() => {
                F_LOGIN({username: this.username, password: this.password})
                .then((result) => {
                    let { message, user, token } = result;
                    localStorage.setItem('cryptotoken', `Bearer ${token}`)
                    this.$awn.success(message, {labels: {success: "Welcome..   :)"}})
                    this.$store.dispatch("isLoginSet", true);
                    this.loading = false
                    this.$router.push('/dashboard')
                })
                .catch((message) => {
                    this.$awn.alert(message, {labels: {alert: "Oops!"}})
                    this.loading = false;
                })
            }, 1000)
        }
    },    
}
</script>








<style scoped>
.home-login {
    background-image: url('../assets/img/btc5.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.card-box {
    background: transparent;
}

.card-login {
  background:#080033;
  box-shadow: 1px 1px 10px #363636;
}

</style>