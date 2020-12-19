<template>
  <div class="content-wrapper">
      <content-header />
      <section class="content">
        <router-view></router-view>
      </section>
  </div>
</template>

<script>
import ContentHeader from './modules/ContenHeader.vue'

export default {
    name: 'MainContent',
    components: {
        ContentHeader
    }
}
</script>

<style>

</style>