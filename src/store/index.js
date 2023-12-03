import Vue from 'vue'
import Vuex from 'vuex'
import sales from './modules/sales'
import products from './modules/products'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        sales,
        products,
    },
});
