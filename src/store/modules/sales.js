const state = () => ({
    sales: [
        {
            img: 'pizza3-promo.jpg',
            alt: "Изображение пиццы"
        },
        {
            img: 'pizza4-promo.jpg',
            alt: "Изображение пиццы"
        },
        {
            img: 'pizza5-promo.jpg',
            alt: "Изображение пиццы"
        },
        {
            img: 'pizza6-promo.jpg',
            alt: "Изображение пиццы"
        },
        {
            img: 'pizza7-promo.jpg',
            alt: "Изображение пиццы"
        },
        {
            img: 'pizza8-promo.jpg',
            alt: "Изображение пиццы"
        },
    ]
})

const getters = {
    getSales: state => {
        return state.sales
    },
}

const actions = {
}

const mutations = {
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}