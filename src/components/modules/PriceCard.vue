<template>
    <div class="col-lg-3 col-6">
        <div :class="[type, backColor]">
            <div :class="[gainText]">
                <h5 style="font-weight: bold">{{ item.title }}</h5>
                <p style="font-weight: 300; font-size: 24px;">
                   $ {{ getPrice }}
                </p>
            </div>
            <div class="icon" style="margin-bottom:12px;">
                <i :class="[icon_crypto]"></i>
            </div>
            <a href="#" style="color: blue;" @click="setSendPrice" class="small-box-footer" data-toggle="modal" :data-target="'#' + item.name">Click here to order <i style="margin-left: 15px" class="fas fa-arrow-circle-right"></i></a>
        </div>

        <Modal :itemId="item.name" :price="sendPrice" />

    </div>
</template>

<script>
import formatCurrency from 'format-currency'
import Modal from './Modal.vue'

export default {
    name: "PriceCard",
    components: {
        Modal
    },
    data() {
        return {
            type: "small-box",
            backColor: "bg-light",
            gainText: "inner neutral",
            icon_crypto: "",
            crypto_data: "",
            current_price: "",
            isPlus: "unknown",
            sendPrice: null,
        }
    },
    props: ['item'],
    methods: {
        setSendPrice() {
            this.sendPrice = this.current_price 
        }
    },
    created() {
        let { icon } = this.item
        this.icon_crypto = icon
    },
    computed: {
        getPrice() {
            let all_prices = this.$store.state.all_prices;
            if (Number(all_prices[this.item.name].USD.PRICE) !== NaN) {
                if (this.current_price < all_prices[this.item.name].USD.PRICE) {
                    this.backColor = "bg-danger"
                    this.gainText = "inner minus-price"
                }else if (this.current_price > all_prices[this.item.name].USD.PRICE) {
                    this.backColor = "bg-success"
                    this.gainText = "inner plus-price"
                }
            }
            this.current_price = all_prices[this.item.name].USD.PRICE
            this.crypto_data = all_prices[this.item.name].USD
            let price = formatCurrency(all_prices[this.item.name].USD.PRICE)
            return price
        }
    }
}
</script>

<style>
.minus-price {
    color: yellow;
}
.plus-price {
    color: #ffffff;
}
.neutral {
    color: black;
}
</style>