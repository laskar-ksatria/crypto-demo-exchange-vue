<template>
    <div class="modal fade" :id="itemId">
        <div class="modal-dialog modal-sm" >
          <div class="modal-content bg-light" style="border-radius: 0px;">
            

            <div class="modal-header">
              <h6 v-if="!loading" class="modal-title" style="margin-left: 30px;text-align:center; color: #007bff; font-weight: 600; font-size: 18px;">Order {{ itemId }} at $ {{ checkPrice }} ?</h6>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">


                <div class="loading-modal" v-if="loading">
                    <FingerprintSpinner
                        :animation-duration="700"
                        :size="60"
                        color="#ff1d5e"
                    />
                </div>

                <div class="form-group" v-if="!loading">
                    <input v-model="amount" type="number" class="form-control" placeholder="Enter amount">
                </div>

            </div>
            <div class="modal-footer justify-content-between">
                <button v-if="!loading" @click="sellOrder" style="width: 20%" type="button" class="btn-flat btn-danger">Sell</button>
                <button v-if="!loading" @click="buyOrder" style="width: 20%" type="button" class="btn-flat btn-success">Buy</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import formatCurrency from 'format-currency';
import { F_CREATE_ORDER } from '../../store/utils';
import { FingerprintSpinner } from 'epic-spinners'

export default {
    name: 'Modal',
    data() {
        return {
            modalPrice: null,
            amount: null,
            loading: false
        }
    },
    components: {
        FingerprintSpinner
    },
    props: ['itemId', "price"],
    methods: {
        sendOrder(type) {
            if (this.amount) {
                if (this.amount === 0 || this.amount < 0) {
                    this.$awn.alert("Amount must be larger than 0", {labels: {success: "Oops!"}})
                }else {
                    this.loading = true
                    setTimeout(() => {
                        F_CREATE_ORDER({pair: this.itemId, amount: this.amount, price: this.price, order_type: type})
                        .then(data => {
                            this.$router.push('/dashboard')
                            let { message, balance, orders } = data;
                            this.$awn.success(message, {labels: {success: "Order successed"}, durations: {global: 1000}})
                            this.$store.dispatch("balanceSet", balance)
                            this.$store.dispatch("orderSet", orders)
                            this.amount = null
                            this.loading = false
                        })
                        .catch(err => {
                            this.loading = false
                            this.$awn.alert(err, {labels: {success: "Order has failed"}})
                        })
                    }, 2000)
                }
            }else {
                this.$awn.alert("Please fill amount..", {labels: {success: "Oops!"}})
            }
        },
        buyOrder() {
            this.sendOrder("buy")
        },
        sellOrder() {
            this.sendOrder("sell")
        }
    },
    created() {
    },
    computed: {
        checkPrice() {
            let formating = formatCurrency(this.price)
            this.modalPrice = this.price
            return formating
        }
    }
}
</script>

<style>
.loading-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
}
</style>