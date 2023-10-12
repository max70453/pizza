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
          img: 'pizza3.jpg',
          alt: "Изображение пиццы"
        },
        {
          img: 'pizza4.jpg',
          alt: "Изображение пиццы"
        },
        {
          img: 'pizza5.jpg',
          alt: "Изображение пиццы"
        },
        {
          img: 'pizza6.jpg',
          alt: "Изображение пиццы"
        },
        {
          img: 'pizza7.jpg',
          alt: "Изображение пиццы"
        },
        {
          img: 'pizza8.jpg',
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

.swiper
  position: relative
  box-shadow: 0px 4px 33px 0px rgba(255, 78, 21, 0.29)
  border-radius: 46px
  height: 675px
  @include max-w(430)
    max-width: 243px
    max-height: 365px
  
.slick-slider
  width: 100%
  max-width: 450px
  border-radius: 46px

.slick-img
  border-radius: 46px
</style>