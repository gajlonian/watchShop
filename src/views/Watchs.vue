<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.id">
        <div class="card">
          <div class="card-body">
            <img :src="product.url" alt="smartwatch" class="card-img"> <hr>
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Prices: <span>50 $</span></p>
            <button class="btn btn-outline-success" @click="addToCart(product)">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  import { mapGetters, mapActions } from 'vuex';
    export default { 
      data () {
        return {
          products: []
        }
      },

      computed: {
        ...mapGetters(["getData"]),
        data () {
          return {
            products : [],
          }
        },
      },
      
      created() {
        this.$store.dispatch('fetchData')
          .then(() => {
            this.products = this.getData
          })
      },
      methods : {
        addToCart(product) {
          this.$store.dispatch('addToCart', product);
        }
      }
    }
</script>

<style scoped>
   .card {
    background-color: #d3d3d3;
    border: none;
    transition: transform 300ms ease, background-color 100ms ease-in-out;
   }
   .card:hover {
      transform: scale(1.1);
      background-color: rgb(55, 136, 138, .1);
   }
</style>