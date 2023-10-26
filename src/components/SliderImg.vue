<template lang="pug">
VueSlickCarousel(v-bind="settings")
	.myslide(v-for="sale in sales" :key="sale.img")
		g-image.slick-img( fit="cover" :alt="sale.alt", :src="require(`!!assets-loader?width=450&height=680!@/images/${sale.img}`)")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default{
	name: "Slider-Img",
	components:{
		VueSlickCarousel,
	},
	data(){
		return{
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
      ],
			settings:{
        "arrows": false,
        "dots": true,
        "infinite": true,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 1000,
        "autoplaySpeed": 3000,
        "fade": true
      },
		}
	}
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

.slick-dots
  bottom: -35px

.slick-dots:not(#_) 
  button:before 
    color: #98350cfa
    opacity: 1
    font-size: 10px

  .slick-active button:before 
    font-size: 15px
    color: #FF5924

.slick-dots li 
  width: 25px


  
.slick-slider
  width: 100%
  max-width: 450px
  border-radius: 46px

.slick-img
  border-radius: 46px
</style>