<template>
    <div>
        <div class="container main">
            <div>
                <img class="img__home" src="../assets/img/smartwatch-screen-digital-device.jpg" alt="close-up-man-wearing-smart-watch-against-white-background" />
            </div>
            <div class="contents my-auto">
                <h1>ShopE</h1>
                <p>
                    Are you looking for a quality and stylish watch? You are in the right place! Our website offers you a wide variety of watches from the biggest brands at unbeatable prices. With our attentive and helpful customer service, you can be sure that your watch will be delivered on time and in perfect condition. So, what are you waiting for? Find your perfect watch today on our website and start enjoying your new look!
                </p>

                <router-link to="/watchs">
                    <button class="btn">BUY NOW</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row-reverse;
    padding-bottom: 60px;
    position: sticky;
}
.img__home {
    width: 500px;
    /*height: 550px;*/
    position: relative;
    left: 65px;
}

.contents {
    font-size: 1.1rem;
}
h1 {
    font-size: 4rem;
    padding-bottom: 20px;
    width: 300px;
    border-radius: 10px;
}

button {
    background-color: #068488;
    color: #d3d3d3;
    padding: 15px 25px;
    margin-top: 20px;
    font-size: 1.3rem;
}
button:hover {
    background-color: #008B69;
    color: #d3d3d3;
}

</style>
