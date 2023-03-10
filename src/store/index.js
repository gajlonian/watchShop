import Vuex from 'vuex'

async function getProducts () {
    const res = await fetch('products.json')
    if(res.ok) {
        return res.json()
    }
    throw new Error('404 NOT FOUND')
}

export default new Vuex.Store({
    state: {
        data: [],
        cart: []
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data
        },
        ADD_TO_CART(state, product) {
            state.cart.push(product)
            console.log(state.cart)
        }
    },
    actions: {
        async fetchData({ commit }) {
            try {
                const data = await getProducts()
                commit("SET_DATA", data)
            } catch (error) {
                console.error(error)
            }

        },
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product)
        }
    },
    getters: {
        getData: state => state.data,
        getCart: state => state.cart
    }
})