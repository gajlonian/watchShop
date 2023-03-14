import Vuex from "vuex";

async function getProducts() {
    const res = await fetch("products.json");
    if (res.ok) {
        return res.json();
    }
    throw new Error("404 NOT FOUND");
}

export default new Vuex.Store({
    state: {
        data: [],
        cart: [],
    },
    mutations: {
        // add data to state
        SET_DATA(state, data) {
            state.data = data;
        },

        // add product to shopping cart
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        },

        // remove product to shopping cart
        REMOVE_PRODUCT(state, product) {
            const index = state.cart.findIndex((p) => p.id === product.id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },
    },
    actions: {
        async fetchData({ commit }) {
            try {
                const data = await getProducts();
                commit("SET_DATA", data);
            } catch (error) {
                console.error(error);
            }
        },

        addToCart({ commit }, product) {
            commit("ADD_TO_CART", product);
        },

        removeProduct({ commit }, product) {
            commit("REMOVE_PRODUCT", product);
        },
    },
    getters: {
        getData: (state) => state.data,
        getCart: (state) => state.cart,
    },
});
