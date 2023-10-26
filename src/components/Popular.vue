<template lang="pug">
section.popular
	.popular__banner
		.popular__banner-text Популярное
	.popular__row.flex.flex--center
		.popular__card(v-for="pizza in popular")
			pizza-card(:pizza="pizza")
</template>
  
  <static-query>
  query {
    metadata {
      siteName
    }
  }
  </static-query>
  
  <script>
  import PizzaCard from "~/components/PizzaCard.vue";
  
  export default{
		name: 'Popular',
    components: {
      PizzaCard,
    },
    data() {
      return {
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
      };
    },
    computed:  {
      popular(){
        return this.pizzas.slice(0, 4);
      }
    },
    methods: {
    },
    mounted() { 
    },
    created() {
    },
    destroyed() {
    },
  }
  </script>
  
  <style lang="sass">
  @import "~/assets/index.scss"
  
.popular__banner
  width: 100%
  height: 286px
  position: relative
  border-radius: 34px
  background: url('../images/pizza-bg2.jpg') no-repeat center
  background-size: cover
  margin-bottom: 10%
  @include max-w(1024)
    height: 170px
  @include max-w(480)
    height: 120px

.popular__banner-text
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  text-transform: uppercase
  font-family: "MullerMedium",
  font-size: 43px
  line-height: 47px
  text-shadow: 0px 11.590511322021484px 10.226922035217285px rgba(14, 4, 4, 0.38)
  @include max-w(480)
    font-size: 27px

.popular__row
  flex-wrap: wrap
  margin: 0 -11px

.popular__card 
  width: 25%
  padding: 0 11px
  margin-bottom: 10%
  @include max-w(1100)
    width: calc( 100% / 3 )
  @include max-w(900)
    width: 50%
    margin-bottom: 15%
  
  </style>
  