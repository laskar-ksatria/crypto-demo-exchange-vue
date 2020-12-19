<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link"></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link"></a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item" @click="logout">
                <a class="nav-link span-logout" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                    Sign Out
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
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
    .span-logout {
        margin-left: 100px;
        color: 'red';
    }
</style>