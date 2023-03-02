<template>
    <nav class="navbar navbar-expand-md navbar-light container">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">ShopE</a>
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
                <div>
                    <a href="#">
                        <i href="#" class="fa fa-shopping-cart" style="font-size:25px; color:rgba(0,0,0, .5)" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='rgba(0,0,0, .5)'"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: "Navbar"
};
</script>

<style scoped>
    a {
        text-decoration: none;
        outline: none;
    }
</style>
