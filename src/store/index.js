import { createStore } from 'vuex'
import StudentDB from "../store/webStorage.js"

const studentDb = new StudentDB("ArrayStorage")

const state = {
    forms : studentDb.get()
}

const mutations = {
    ADD_STUDENT: (state, name) => {
        state.forms.push(name)
        studentDb.set(name)
    },
    REMOVE_STUDENT : (state, name) => {
        let index = state.forms.indexOf(name)
        state.forms.splice(index, 1)
        studentDb.remove(name)
    }
}

/*const getters = {
    myForm : state => state.forms
}
*/
const store = createStore({
    state: state,
    mutations: mutations,
    //getters: getters,
    strict: true
})

export default store