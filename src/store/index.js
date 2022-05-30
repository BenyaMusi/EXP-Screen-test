import { createStore } from 'vuex'

export default createStore({
    state: {
        stateLogin: false,
    },
    getters: {
        confirmLogin: (state) => {
            return state.stateLogin
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})