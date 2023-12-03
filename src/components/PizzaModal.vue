<template lang="pug">

.modal-product__body 
  .product
    .product__row.flex
      .product__col-left
        h3.product__title {{ pizza.name }} 
        .product__pic 
          g-image.product__img(
            alt="product image" 
            :src="require(`!!assets-loader!@/images/${pizza.pic}`)" )
        p.product__descr  onionpotato, tomato, mushrooms, cheese, olives, meat
      .product__col-right
        span Добавить:
        vue-custom-scrollbar(
          class="scroll-area"  
          :settings="settings" 
          @ps-scroll-y="scrollHanle"
        )
          .modal__items
            .product__item-wrap(v-for="(item, index) in pizzaItems")
              .product__item.flex(@click="addIngredient($event, item)")
                .product__item-check
                  font-awesome-icon(
                    class="icon" 
                    :icon="`fa-regular ${iChecked}`"
                  )
                .product__item-pic 
                  g-image.product__item-img(:alt="item.text", :src="require(`!!assets-loader!@/images/${item.pic}`)")
                .product__item-text {{ item.text }}
                .product__item-price {{ item.price }} &#8381
        .flex.modal__actions
          button.btn.btn--md В корзину 
          .product__price {{ productPrice }} &#8381
  .modal__close-btn( @click="")
    font-awesome-icon(
      class="icon modal__close-icon" 
      :icon="`fa-solid ${iClose}`"
    )
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex';
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
	name: 'PizzaModal',
  components: {
    vueCustomScrollbar
  },
	data(){
		return{
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false,
      },
			itemActive: null,
			addItems: [],
			iChecked: 'fa-circle-check',
      iClose: 'fa-circle-xmark',
			productPrice: this.pizza.price
		}
	},
	mounted(){},
	props: ['pizza'],
	computed: {
		...mapGetters('products', {
      pizzaItems: 'getPizzaItems',
      newPizzaItems: 'getNewPizzaItems',
    }),
	},
	methods: {
    ...mapMutations('products', [
      'addPizzaItems',
      'removePizzaItems',
      'emptyNewPizzaItems',
  ]),
    scrollHanle(evt) {
      // console.log(evt)
    },
		addIngredient(event, item){
      const id = (element) => element.id === item.id;
      let el = this.newPizzaItems.findIndex(id);
      if(el !== -1){
        this.removePizzaItems(el);
        event.currentTarget.classList.remove('active');
        this.productPrice -= (item.price);
      }
      else{
        this.addPizzaItems(item);
        event.currentTarget.classList.add('active');
        this.productPrice += (item.price);
      }
		},
	}
}

</script>

<style lang="sass">
@import "~/assets/index.scss"

.mymodal
  position: relative
  overflow: visible

.scroll-area 
  position: relative
  margin: auto
  margin-bottom: 25px

.ps.scroll-area .ps__thumb-y
  background: #f96e07

.ps .ps__rail-y
  width: 0
  &:hover 
    background: transparent

.ps .ps__rail-y
  &:hover>.ps__thumb-y
    background: #f96e07
    width: 6px

.vm--overlay
  backdrop-filter: blur(5px)

.mymodal
  box-shadow: none
  box-shadow: 0px 4px 33px 0px rgba(255, 78, 21, 0.29)
  background: #210A01
  padding: 20px 40px
  border-radius: 20px

.modal
.modal-product
.modal-product__body 
  width: 100%
  height: 100%
  // position: relative
  text-align: center
	
.product
.product__title
  margin-bottom: 10px
.product__row
  justify-content: space-between
.product__col-left
  width: 100%
  max-width: 300px
.product__col-right
  width: 100%
  max-width: 400px

.product__col-right span
  display: block
  text-align: start
  margin-bottom: 20px
.product__pic 
  width: 85%
  margin: 0 auto
.product__img
  width: 100%
.product__item-img

.product__descr 
.product__item-wrap
    width: calc( 100% / 3)
    padding: 0 5px
    margin-bottom: 10px
    
.product__item
  flex-direction: column
  position: relative
  align-items: center
  background: white
  color: #210a01
  height: 160px
  border-radius: 8px
  padding: 5px 10px
  cursor: pointer
  touch-action: manipulation

.product__item.active
  outline: 1px solid red 
  box-shadow: 0px 0px 14px 4px rgba(255, 78, 21, 0.29)

.product__item-check
  display: none
  width: 25px
  height: 25px
  position: absolute
  top: 0
  right: 0

.product__item.active .product__item-check
  display: block

.product__item-pic 
  width: 80px
  height: 80px
.product__item-text 
  flex: 1 0 auto
  font-size: 14px
  line-height: 1

.product__item-price 
  font-family: "MullerMedium"
  font-size: 20px

.product__price
  color: #ff5924
  font-family: "MullerBold"
  font-size: 23px
  margin-right: 20px

.modal__items
  max-height: 250px
  display: flex
  flex-wrap: wrap
  margin: 0 -5px
  padding: 5px 20px 0 5px

.modal__actions
  align-items: center
  justify-content: space-between

.modal__close-btn
  width: 35px
  height: 35px
  position: absolute
  top: -10px
  right: -10px
  background: #210a01
  border-radius: 50%
  cursor: pointer

.modal__close-icon
  width: 100%
  height: 100%

</style>