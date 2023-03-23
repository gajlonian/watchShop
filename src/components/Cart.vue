<template>
    <div class="shoppingCart">
        <a href="#" @click.prevent="showShoppingCart">
            <i href="#" class="fa fa-shopping-cart" style="font-size: 25px; color: rgba(0, 0, 0, 0.5)" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='rgba(0,0,0, .5)'"></i>
        </a>

        <div class="content mt-1" :class="{ active: isActive }">
            <div class="content__empty" v-if="this.$store.state.cart == 0">Empty</div>
            <ul class="list-group pt-2 content__list" v-for="product in cart" :key="product.id">
                <li class="list-group-item py-0 d-flex justify-content-between">
                    <span class="d-block"><img :src="product.thumbnail" alt="" /></span>
                    <div class="my-auto">
                        <h6 class="d-inline mx-2">{{ product.price }}$</h6>

                        <span @click="removeProduct(product)">
                            <i class="fas fa-trash"></i>
                        </span>
                    </div>
                </li>
                <div class="article">
                    <p class="px-3 lh-base article__quantity">
                        Quantity : <span>{{ product.quantity }}</span
                        ><br />
                        <span class="bg-dark article__btnAction" @click="removeQuantity(product)">
                            <i class="fas fa-minus text-white"></i>
                        </span> <span> </span>
                        <span class="bg-dark article__btnAction" @click="addQuantity(product)">
                            <i class="fas fa-plus text-white"></i>
                        </span>
                    </p>
                </div>
                <hr class="my-0 py-0" />
            </ul>
            <footer class="px-3 pt-2 article__footer">
                <p class="mb-0">Total article : {{ getTotalQuantity }}</p>
                <div class="total__price d-flex justify-content-between">
                    <h5>Total</h5>
                    <h5>{{ getTotalPrice }}$</h5>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Cart",
    data() {
        return {
            isActive: false,
        };
    },

    methods: {
        //remove product
        ...mapActions(["removeProduct"]),

        //show or hide shopping cart
        showShoppingCart() {
            if (!this.isActive) {
                return (this.isActive = true);
            } else {
                return (this.isActive = false);
            }
        },

        //remove a quantity from the product
        removeQuantity(product) {
            if (product.quantity > 1) {
                product.quantity--;
            } else {
                this.removeProduct(product);
            }
        },

        //add a quantity of the product
        addQuantity(product) {
            product.quantity++;
        },
    },
    computed: {
        //cart items
        cart() {
            return this.$store.state.cart;
        },

        // displays the quantity of product
        ...mapGetters(["getTotalQuantity"]),

        // displays the sum price of the product
        ...mapGetters(["getTotalPrice"]),
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.content {
    color: rgb(0, 0, 0, 0.8);
    width: 200px;
    height: 0;
    background-color: rgba($bg-secondary, .9);
    position: absolute;
    right: 13px;
    border-radius: 5px;
    z-index: 1000;
    overflow: hidden;
    transition: height 500ms ease;
    padding: 0;
    font-size: 0.8rem;

    //Message: "Empty" si le panier est vide
    &__empty {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 1.5rem;
    }

    //Listes des produits dans le panier (prix, img, ...)
    &__list {
        //thumbnail de l'article
        img {
            width: 55px;
            height: 55px;
            border-radius: $border-round;
        }

        li {
            background-color: inherit;
            border: none;
        }
    }

}

// Si le panier est active (ouvert)
.active {
    height: 300px;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer et Edge */
    overflow: -moz-scrollbars-none; /* Firefox */

    &::-webkit-scrollbar {
        width: 0px;
        background-color: $bg-scrollbar;
    }

    &::-webkit-scrollbar-corner {
        background-color: $bg-scrollbar;
    }
}

.article {

    &__btnAction {
        padding: 5px;
        border-radius: $border-round;
        font-size: 0.6rem;
    }
}
</style>
