<template>
   <div class="card-body table-responsive p-0">
    <table class="table table-hover text-nowrap" style="margin-top: 30px; text-align: center; width: 100%; overflos: hidden;">
        <thead class="bg-dark">
            <tr>
                <th>No.</th>
                <th>Pair</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Gain/Loss</th>
                <th style="width: 40px">Action</th>
            </tr>
        </thead>
        <tbody>
            <TableList v-for="(item, index) in getMyOrders" :count="index" :key="index" :item="item" />
        </tbody>
    </table>
    </div>
</template>

<script>
import TableList from './TableList'

export default {
    name: 'OrderTable',
    computed: {
        getMyOrders() {
            return this.$store.state.myorders;
        }
    },
    components: {
        TableList
    }
}
</script>

<style>

</style>