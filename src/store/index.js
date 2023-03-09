import Vuex from 'vuex'

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
        fetchData({ commit }) {
            fetch('products.json')
                .then(res => res.json())
                .then(data => {
                    commit('SET_DATA', data)
                })
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