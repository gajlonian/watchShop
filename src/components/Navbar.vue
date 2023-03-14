import { mapState } from 'vuex';

<template>
    <nav class="navbar navbar-expand-md navbar-light container">
        <div class="container">
            <router-link class="navbar-brand" to="/">ShopE</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item mx-4">
                        <router-link class="nav-link" aria-current="page" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link class="nav-link" to="/watchs">WATCHS</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link class="nav-link" to="/accessories">ACCESSORIES</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link class="nav-link" to="/gift_finder">GIFT FINDER</router-link>
                    </li>
                </ul>
                <div class="lists">
                    <a href="#" @click.prevent="showShoppingCart">
                        <i href="#" class="fa fa-shopping-cart" style="font-size: 25px; color: rgba(0, 0, 0, 0.5)" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='rgba(0,0,0, .5)'"></i>
                    </a>
                    <div class="carts mt-1" :class="{ active: isActive }">
                        <div class="cartSms" v-if="this.$store.state.cart == 0">Empty</div>

                        <ul class="list-group px-2" v-for="product in cart" :key="product.id">
                            <li class="list-group-item m-0 d-flex justify-content-between">
                                <span class="d-block"><img :src="product.thumbnail" alt="" /></span>
                                <div class="my-auto">
                                    <h6 class="d-inline mx-2">: {{ product.price }}</h6>
                                    <span @click="removeProduct(product)">
                                        <i class="fas fa-trash"></i>
                                    </span>
                                </div>
                            </li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "Navbar",
    data() {
        return {
            isActive: false,
        };
    },

    methods: {
        showShoppingCart() {
            if (!this.isActive) {
                return (this.isActive = true);
            } else {
                return (this.isActive = false);
            }
        },
        ...mapActions(["removeProduct"]),
    },
    computed: {
        cart() {
            return this.$store.state.cart;
        },
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
    outline: none;
}
.navbar-brand {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
}
.carts {
    width: 200px;
    height: 0;
    background-color: rgb(55, 136, 138, 0.9);
    position: absolute;
    right: 13px;
    border-radius: 5px;
    z-index: 1000;
    overflow: hidden;
    transition: height 500ms ease;
    padding: 0;
}
.active {
    height: 400px;
}

img {
    width: 55px;
    height: 55px;
    border-radius: 50px;
}

.list-group-item {
    background-color: inherit;
    border: none;
}

.cartSms {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1.5rem;
    color: rgb(0, 0, 0, 0.8);
}
</style>
