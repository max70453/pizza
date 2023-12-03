<template lang="pug">
.card.flex
	.card__descr
		.card__pic
			g-image.card__img(
        :alt="pizza.name", 
        :src="require(`!!assets-loader?width=159&height=157!@/images/${pizza.pic}`)")
		h3.card__text-main.card__title {{ pizza.name }}
		p.card__text {{ pizza.ingr }}
	.card__actions
		.card__row.flex
			.card__radio-btn(v-for="s in size" :key="s")
				input.card__size-btn(
					type="radio"  
					:value="s" 
					:id="pizza.name + s" 
					:name="pizza.name"
					:checked="s === '28' ? true : false" )
				label.flex.flex--center(:for="pizza.name + s") {{ s }}
		a.btn.card__btn-add.card__btn(
			href="#" 
			:class="['btn--md', 'btn-outline']" 
			@click="showModal(pizza)"
			) +Добавить
		.card__row.flex 
			.card__text-main.card__price {{ pizza.price }} &#8381
			.card__counter.flex
				.card__counter-btn.minus(
					:class="{'counter-active': !countBtn}"
					@click="changeAmount(false)"
				) 
				.card__counter-num {{ pizzaCount }}
				.card__counter-btn.plus(
					:class="{'counter-active': countBtn}"
					@click="changeAmount(true)"
				) 
		base-btn.card__btn-order.card__btn(:text="'Заказать'", :classBtn="'btn--md'")

</template>
	
<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>

<script>
import BaseBtn from "~/components/BaseBtn.vue";
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import PizzaModal from '~/components/PizzaModal.vue'
export default{
	name: 'PizzaCard',
	components: {
		BaseBtn,
	},
	props:{
		pizza: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			size: ['22', '28', '33'],
			countBtn: true,
			pizzaCount: 1,
		};
	},
	computed:  {
		...mapGetters('products', [
      'getNewPizzaItems',
		]),
	},
	methods: {
    ...mapMutations('products', [
      'emptyNewPizzaItems',
  ]),
		showModal (pizza) {
      this.$modal.show(
				PizzaModal,
				{ pizza: pizza },
				{
					width: 900,
					height: 400,
					adaptive: true,
					classes: 'mymodal',
				},
        {
          'closed': this.hideModal
        }
			);
    },
    hideModal () {
			// this.$modal.hide('example');
      this.emptyNewPizzaItems();
      console.log('newPizzaItems', this.getNewPizzaItems);
		},
		changeAmount(action){
			if(action){
				this.pizzaCount++;
			}
			else if(this.pizzaCount != 1){
				this.pizzaCount--;
			}
			this.countBtn = action;
		},
		
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
	
.card
	height: 470px
	flex-direction: column
	justify-content: space-between
	border-radius: 29.531px
	background: #210A01
	padding: 8% 10%
	@include max-w(430)
		height: 340px

.card__descr
	position: relative
	padding-top: 30%
	text-align: center

.card__pic
	width: 100%
	position: absolute
	top: -80px
	text-align: -webkit-center
	text-align: -moz-center
	@include max-w(430)
		top: -50px

.card__img 
	@include max-w(430)
		width: 97px
		height: 96px

.card__text-main
	font-family: "MullerMedium"
	font-size: 24px
	line-height: 109%
	overflow-wrap: normal
	@include max-w(769)
		font-size: 15px

.card__title
	margin-bottom: 20px

.card__text
	color: #A3A3A3
	font-family: "Muller"
	font-size: 15px
	line-height: 113%
	margin-bottom: 20px
	@include max-w(430)
		font-size: 9px

.card__actions
	padding: 0 20px
	@include max-w(430)
		padding: 0
	@include max-w(769)
		// padding: 20px

.card__row
	justify-content: space-between
	margin-bottom: 20px 
	align-items: center

.card__radio-btn
.card__size-btn
	display: none
	&:checked + label
		background: linear-gradient(262deg, #FF5924 12.12%, #FFA229 86.72%)
		color: $color-text-accent
		border: none
		
.card__radio-btn label
	width: 40px
	height: 40px
	border-radius: 50%
	font-family: "Muller"
	
	border: 1.5px solid #A3A3A3
	color: #A3A3A3
	cursor: pointer
	@include max-w(430)
		width: 24.5px
		height: 24.5px
		font-size: 9px

.card__btn:not(:last-child)
	margin-bottom: 20px

.card__text-main.card__price
.card__counter 
	width: 43%
	justify-content: space-between
	align-items: center

.card__counter-btn
	border: 1px solid #A3A3A3
	width: 24px
	height: 24px
	border-radius: 100%
	position: relative
	cursor: pointer
	display: inline-block
	vertical-align: middle	
	@include max-w(430)
		width: 14px 
		height: 14px

.card__counter-btn::before,
.card__counter-btn::after
	content:''
	position: absolute
	top:0
	left:0
	right:0
	bottom:0

.card__counter-btn.plus::before,
.card__counter-btn.plus::after,
.card__counter-btn.minus:before
	background: #A3A3A3

.card__counter-btn.plus::before
	width: 9%
	margin: 32% auto

.card__counter-btn.plus::after
	margin: auto 32%
	height: 9%

.card__counter-btn.minus:before
	margin: auto 32%
	height: 9%

.card__counter-num
	font-family: "Muller"
	font-size: 22px 
	line-height: 1
	color: #A3A3A3
	@include max-w(430)
		font-size: 14px

.counter-active
	background: linear-gradient(262deg, #FF5924 12.12%, #FFA229 86.72%)
	border: 1px solid #ff8429

.counter-active.card__counter-btn.plus::before,
.counter-active.card__counter-btn.plus::after,
.counter-active.card__counter-btn.minus:before
	background: $color-text-accent

.card__btn-order




	
	</style>
      