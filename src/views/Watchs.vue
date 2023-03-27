<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="product in this.getData" :key="product.id">
                <div class="card">
                    <div class="card-body">
                        <img :src="product.url" alt="smartwatch" class="card-img" />
                        <hr />
                        <h6 class="card-title">{{ product.title }}</h6>
                        <p class="card-text">{{ product.description }}</p>
                        <p class="card-text">
                            Prices: <span>{{ product.price }} $</span>
                        </p>
                        <button class="btn btn-outline-success btn-md" @click.prevent="addToCart(product)">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        // getter le data
        ...mapGetters(["getData"]),
    },

    mounted() {
        // Montage du data dans la page
        this.$store.dispatch("fetchData").then(() => {
            return this.getData;
        });
    },

    methods: {
        // Ajout d'un produit dans le panier
        addToCart(product) {
            this.$store.dispatch("addToCart", product);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/responsives.scss";
.card {
    background-color: $bg-primary;
    width: 100%;
    border: none;
    transition: transform 250ms ease, background-color 100ms ease-in-out;

    @media #{$small-up} {
        .btn {
            font-size: 12px;
            padding: 4px 8px;
        }
    }

    @media #{$medium-up} {
        &:hover {
            transform: scale(1.1);
            background-color: rgb($bg-secondary, 0.1);
        }
        .btn {
            font-size: 14px;
            padding: 6px 12px;
        }
    }
}
</style>
