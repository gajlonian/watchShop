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
            <button class="btn btn-outline-success">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
    export default {   
        name: "Watchs",
        data () {
          return {
            products: []
          }
        },
        created () {
          async function getProducts () {
            const res = await fetch('products.json') 
            if(res.ok) {
              return res.json()
            }
            throw new Error("404 NOT FOUND")
          }
          getProducts().then((json) => {this.products = json})
          /*fetch('products.json') 
            .then((res )=> res.json())
            .then((json) => {this.products = json})*/
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