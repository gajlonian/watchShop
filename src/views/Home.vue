<template>
    <div>
        <div class="container d-flex">
            <div class="body my-auto">
                <h1>ShopE</h1>
                <p>
                    Are you looking for a quality and stylish watch? You are in the right place! Our website offers you a wide variety of watches from the biggest brands at unbeatable prices. With our attentive and helpful customer service, you can be sure that your watch will be delivered on time and in perfect condition. So, what are you waiting for? Find your perfect watch today on our website and start enjoying your new look!
                </p>

                <router-link to="/watchs">
                    <button class="btn body__btn">BUY NOW</button>
                </router-link>
            </div>
            <div>
                <img class="body__img" src="../assets/img/smartwatch-screen-digital-device.jpg" alt="close-up-man-wearing-smart-watch-against-white-background" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import "@/assets/styles/responsives.scss";


.body {
    font-size: 1.1rem;

    h1 {
        font-size: 3.5rem;
        /*padding-bottom: 10px;*/
        width: 300px;
        border-radius: 10px;
    }

    &__btn {
        background-color: $btn-primary;
        color: $bg-primary;
        padding: 15px 25px;
        margin-top: 20px;
        font-size: 1.3rem;

        &:hover {
            background-color: darken($btn-primary, 5);
        }
    }

    &__img {
        width: 400px;
    }
}

    @media #{$small-up} {
        .body {
            h1 {
                font-size: 3rem;
                padding-bottom: 5px;
                margin: 0;
            }

            &__btn {
                font-size: 1rem;
                padding: 10px 20px;
                margin-top: 0;
            }

            &__img {
                width: 150px;
                padding-right: 16px;
            }
        }

        .container {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
        }
    }
</style>
