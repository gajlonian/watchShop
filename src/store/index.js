import Vuex from "vuex";

// Recuperer les données dans le fichier products.json
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
            //check if product already exists in cart
            const index = state.cart.findIndex((p) => p.id === product.id)
            if(index !== -1) {
                state.cart[index].quantity++
            } else {
                state.cart.push(product);
            }
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
        // Ajout des données recuperer dans le data principale
        async fetchData({ commit }) {
            try {
                const data = await getProducts();
                commit("SET_DATA", data);
            } catch (error) {
                console.error(error);
            }
        },

        // Ajouter un produit dans le panier
        addToCart({ commit }, product) {
            commit("ADD_TO_CART", product);
        },

        // Effacer un produit du panier
        removeProduct({ commit }, product) {
            commit("REMOVE_PRODUCT", product);
        },
    },
    getters: {
        //getter le data principale
        getData: (state) => state.data,

        //getter le panier
        getCart: (state) => state.cart,

        //getter la total des quantités des produits
        getTotalQuantity: (state) => {
            let totalQuantity = 0
            state.cart.forEach((product) => {
                totalQuantity += product.quantity
            })
            return totalQuantity
        },

        //getter le total du prix des produits
        getTotalPrice: (state) => {
            let totalPrice = 0
            state.cart.forEach((product) => {
                totalPrice += product.price * product.quantity
            })
            return totalPrice
        },
    },
});
