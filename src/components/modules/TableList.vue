<template>
    <tr>
        <td>{{ count + 1 + "." }}</td>
        <td>{{ item.pair + "/USD" }}</td>
        <td :class="[orderColor]">{{ item.order_type.toUpperCase() }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ "$ " + formatPrice }}</td>
        <td :class="[gainText]">$ {{ checkedGain }}</td>
        <td @click="closeOrder" style="width: 20%; cursor: pointer;"><span style="cursor: pointer; width: 50%; height: 60%;" class="badge bg-warning">Close</span></td>
    </tr>
</template>

<script>
import { F_CLOSE_ORDER } from '../../store/utils';
import formatCurrent from 'format-currency'

export default {
    name: 'TableList',
    props: ['item', "count"],
    data() {
        return {
            gainText: "neutral",
            orderColor: "",
            gainLoss: null,
            formatPrice: ""
        }
    },
    methods: {
        closeOrder() {
            if (this.gainLoss) {
                F_CLOSE_ORDER(this.item._id, {gainLoss: this.gainLoss},this.$store.state.myorders)
                .then(data => {
                    let { message, orders, balance } = data;
                    this.$store.dispatch("orderSet", orders)
                    this.$store.dispatch("balanceSet", balance)
                    this.$awn.success(message, {labels: {success: "Success"}, durations: {global: 1000}})
                })
                .catch(err => {
                    this.$awn.alert(err, {labels: {success: "Oops!"}})
                })
            }
        }
    },
    created() {
        // if (this.item.order_type === 'buy') {
        //     this.orderColor = "buy-color"
        // }else {
        //     this.orderColor = "sell-color"
        // }
        // let formatPrice2 = formatCurrent(this.item.price)
        // this.formatPrice = formatPrice2 
    },
    computed: {
        checkedGain() {
            let price = this.$store.state.all_prices[this.item.pair].USD.PRICE
            let totalLast = this.item.amount * this.item.price
            let totalCurrent = (this.item.amount * price) - (this.item.amount * this.item.price) 
            let summary = totalCurrent
            let newSum;
           if (this.item.order_type === 'buy') {
                if (summary < 0) {
                    this.gainText = "loss-text"
                    
                }else if (summary > 0) {
                    this.gainText = 'gain-text'
                }
                newSum = summary
           }else {
               if (summary < 0) {
                    this.gainText = "gain-text"
                    
                }else if (summary > 0) {
                    this.gainText = 'loss-text'
                    
                }
                newSum = 0 - summary
           }
           this.gainLoss = newSum
           let formating = formatCurrent(newSum)
            return formating
        }
    }
}
</script>

<style>
.loss-text {
    background: red;
    color: yellow;
    font-weight: 500;
    width: 10%;
}
.gain-text {
    background: #28a745;
    color: rgb(255, 255, 255);
    font-weight: 500;
    width: 10%;
}

.neutral {
    background: #f9fafa;
    color: rgb(0, 0, 0);
    font-weight: 500;
    width: 10%;
}

.buy-color {
    color: green;
}

.sell-color {
    color: red;
}

</style>