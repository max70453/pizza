const state = () => ({
  pizzas:[
      {
        id: 1,
        name: 'Жюльен',
        pic: 'pizza1.png',
        ingr: " onionpotato, tomato, mushrooms, cheese, olives, meat",
        price: 735,
      },
      {
        id: 2,
        name: 'Мексиканская',
        pic: 'pizza2.png',
        ingr: " onion, potato, tomato, mushrooms, cheese, olives, meat",
        price: 735,
      },
      {
        id: 3,
        name: 'Мясная',
        pic: 'pizza3.png',
        ingr: " onion, potato, tomato, mushrooms, cheese, olives, meat",

        price: 735,
      },
      {
        id: 4,
        name: 'Пепперони Cheese',
        pic: 'pizza4.png',
        ingr: " onion, potato, tomato, mushrooms, cheese, olives, meat",

        price: 735,
      },
      {
        id: 5,
        name: 'Гавайская',
        pic: 'pizza5.png',
        ingr: " onion, potato, tomato, mushrooms, cheese, olives, meat",

        price: 735,
      },
      {
        id: 6,
        name: 'Маргарита',
        pic: 'pizza6.png',
        ingr: " onion, potato, tomato, mushrooms, cheese, olives, meat",

        price: 735,
      },
      {
        id: 7,
        name: '4 сыра',
        pic: 'pizza7.png',
        ingr: " onion, potato, tomato, mushrooms, cheese, olives, meat",

        price: 735,
      },
      {
        id: 8,
        name: 'Тоскана',
        pic: 'pizza8.png',
        ingr: " onion, potato, tomato, mushrooms, cheese, olives, meat",

        price: 735,
      }
  ],
  pizzaItems: [
    {
        id: 1,
        pic: 'cheese2.jpg',
        text: 'Моцарелла',
        price: 50,
    },
    {
      id: 2,
        pic: 'pepper0.jpg',
        text: 'Болгарский перец',
        price: 50,
    },
    {
      id: 3,
        pic: 'mushroom3.jpg',
        text: 'Грибы',
        price: 50,
    },
    {
      id: 4,
        pic: 'cucumber.jpg',
        text: 'Маринованные огурцы',
        price: 50,
    },
    {
      id: 5,
        pic: 'tomato.jpg',
        text: 'Помидоры',
        price: 50,
    },
    {
      id: 6,
        pic: 'onion.jpg',
        text: 'Красный лук',
        price: 50,
    },

  ],
  newPizzaItems: [],
})

const getters = {
    getPizzas: state => {
        return state.pizzas
    },
    getNewPizzaItems: state => {
      return state.newPizzaItems;
  },
    getPopular: state => {
        return state.pizzas.slice(0, 4);
    },
    getPizzaItems: state => {
        return state.pizzaItems;
    },
    // getPizzaById: state => id => {
    //   return state.pizzas.find(pizza => pizza.id === id);
    // }
}

const actions = {
}

const mutations = {
  addPizzaItems(state, item) {
    state.newPizzaItems.push(item);
    console.log('newPizzaItems', state.newPizzaItems);
  },
  removePizzaItems(state, index) {
    state.newPizzaItems.splice(index, 1);
    console.log('newPizzaItems', state.newPizzaItems);
  },
  emptyNewPizzaItems(state){
    state.newPizzaItems = [];
  }
 
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}