<template>
    <div class="social-auth-links text-center mb-3" style="height: 90px">
        <p>- - -</p>
        <a href="#" style="color: black;" v-if="!loading" @click="onClick" class="btn btn-block btn-warning">
            {{ title }}
        </a>
        <a href="#" v-if="loading" class="btn btn-block btn-warning" style="display: flex; justify-content: center; align-items: 'center">
            <pixel-spinner
                :animation-duration="2000"
                :size="30"
                color="#ff1d5e"
            />
        </a>
    </div>
</template>

<script>
import { PixelSpinner } from 'epic-spinners'

export default {
    name: 'Button',
    components: {
        PixelSpinner
    },
    props: {
        title: String,
        onClick: Function,
        loading: Boolean,
    },
}
</script>

<style>

</style>