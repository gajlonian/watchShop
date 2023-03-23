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
                <cart />
            </div>
        </div>
    </nav>
</template>

<script>
import Cart from './Cart.vue'
export default {
    name: "Navbar",
    components: {
        Cart
    }
};
</script>

<style lang="scss" scoped>
/*a {
    text-decoration: none;
    outline: none;
}*/
.navbar-brand {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
}

</style>
