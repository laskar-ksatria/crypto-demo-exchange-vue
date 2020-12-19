<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                <ol class="breadcrumb float-sm-left">
                        <li class="breadcrumb-item active">Hi {{ getUsername }} ! </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentHeader',
    computed: {
        getUsername() {
            return this.$store.state.user.username
        }
    }
}
</script>

<style>

</style>