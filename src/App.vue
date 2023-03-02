<template>
    <div id="container">
        <div>
            <Navbar />
        </div>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
import "./assets/font-awesome/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar.vue";

export default {
    components: {
        Navbar,
    },
};
</script>

<style>
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .6);
    background-color: #d3d3d3;
  }

</style>
