<template>
<div class="content-wrapper">
    <section class="content">
        <div class="container-fluid">
            <div class="loading-page">
               <div class="loading-content">
                   <semipolar-spinner
                        :animation-duration="2000"
                        :size="90"
                        color="#ff1d5e"
                     />
               </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { SemipolarSpinner } from 'epic-spinners'

export default {
    name: 'LoadingDashboard',
    components: {
        SemipolarSpinner
    }
}
</script>

<style>
.loading-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading-content {
    margin-top: 200px;
}
</style>