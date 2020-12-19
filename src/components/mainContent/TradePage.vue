<template>
<div class="container-fluid">
    <div class="row">
      <PriceCard v-for="(item,index) in cryptoList" :key="index" :item="item" />
    </div>

    <order-table />
               
</div>
</template>

<script>
import { D_CRYPTO } from '../../store/defaultData'
import PriceCard from '../modules/PriceCard'
import Table from '../modules/OrderTable'
import OrderTable from '../modules/OrderTable.vue'

export default {
  name: 'TradePage',
  data() {
    return {
      cryptoList: null
    }
  },
  created() {
    this.cryptoList = D_CRYPTO
  },
  components: {
    PriceCard,
    OrderTable
  }
}
</script>
    OrderTable

<style>

</style>