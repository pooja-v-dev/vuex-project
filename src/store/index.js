import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0
    },
    mutations: {
        remove(state) {
            state.counter--
        },
        add(state) {
            state.counter++
        },
    },
    actions: {},
    modules: {}
})