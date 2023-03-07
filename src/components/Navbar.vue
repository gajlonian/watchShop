<template>
    <nav class="navbar navbar-expand-md navbar-light container">
        <div class="container">
            <router-link class="navbar-brand" to="/">ShopE</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation">
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
                        <i href="#" class="fa fa-shopping-cart" style="font-size:25px; color:rgba(0,0,0, .5)" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='rgba(0,0,0, .5)'"></i>
                    </a>
                    <div class="carts mt-1" :class="{ active: isActive }">
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: "Navbar",
    data () {
        return {
            isActive: false
        }
    },

    methods: {
        showShoppingCart () {
            if(!this.isActive) {
                return this.isActive = true
            } else {
                return this.isActive = false
            }
        }
    }
};
</script>

<style scoped>
    a {
        text-decoration: none;
        outline: none;
    }
    .navbar-brand {
        color: rgba(0, 0, 0, .5);
        font-weight: 500;
    }
    .carts {
        width: 200px;
        height: 0;
        background-color: #474554;
        opacity: .9;
        position: absolute;
        right: 13px;
        border-radius: 5px;
        z-index: 1000;
        overflow: hidden;
        transition: height 400ms ease;
    }
    .active {
        display: block;
        height: 450px;
    }
</style>
