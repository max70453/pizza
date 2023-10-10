<template lang="pug">
.header__wrap
  header.header
    .header__logo pizzashop
    nav.header__nav
      ul.header__menu 
        li.header__menu-item(v-for="item in navItems")
          g-link.header__nav-link(
            :to="item.link",
            @click="isActive=!isActive",
            :class="{'active-link': isActive}"
          ) {{ item.title }}
    .header__actions
      BaseBtn(:text="'Bход'", :classBtn="'btn--md'", :visible="loginVisible").header__button
      g-image(alt="cart image", src="~/images/cart.png", width="40" @click="activeClass").header__cart
      button(type="button" class="burger-button" :class="{'active': active}" title="Menu" @click="toggleActive")
        span.burger-bar.burger-bar--1
        span.burger-bar.burger-bar--2
        span.burger-bar.burger-bar--3
      .burger-menu(id="burger" :class="{'active': active}" v-show="active" )
        nav.header__nav-mobile()
          .header__logo pizzashop
          ul.header__menu-mobile
            li.header__menu-item(v-for="item in navItems")
              g-link.header__nav-link(
                :to="item.link",
                @click="isActive=!isActive",
                :class="{'active-link': isActive}"
              ) {{ item.title }}
    //- .burger-menu(id="burger" :class="{'active': active}")
      button(type="button" class="burger-button" title="Menu" @click="toggleActive")
        span.burger-bar.burger-bar--1
        span.burger-bar.burger-bar--2
        span.burger-bar.burger-bar--3
      nav.header__nav-mobile(v-show="active")
        ul.header__menu-mobile
          li.header__menu-item(v-for="item in navItems")
            g-link.header__nav-link(
              :to="item.link",
              @click="isActive=!isActive",
              :class="{'active-link': isActive}"
            ) {{ item.title }}


</template>

<script>
import BaseBtn from '~/components/BaseBtn.vue'

export default {
  components: {
    BaseBtn
  },
  props: {
  },
  data () {
    return {
      active: false,
      navItems: [
        {title: 'Главная', link: '/'},
        {title: 'Меню', link: '/'},
        {title: 'Акции', link: '/'},
        {title: 'Контакты', link: '/'},
      ],
      isActive: true,
      loginVisible: true,
    }
  },
  methods: {
    activeClass () {
      console.log('clicked');
    },
    toggleActive () {
      this.active = !this.active;
      if(this.active){
        document.body.style.overflow='hidden';
        this.$parent.$parent.$refs.overlay.style.display = 'block'
      }
      else{
        document.body.style.overflow='auto'
        this.$parent.$parent.$refs.overlay.style.display = 'none'
      }
      
    }
  }
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

.header__menu-mobile .header__nav-link
  color: #1F0700

.burger-menu
  position: absolute
  left: 0
  top: 0
  bottom: 0
  width: 65%
  height: 100vh
  padding: 0 40px
  background-color: rgba(237, 171, 0, 1)
  z-index: 999
  transform: translateX(-100%)
  transition: all 5s ease-in-out

.burger-menu.active 
  touch-action: none
  overflow: auto
  transform: translateX(0%)

.header__nav-mobile
  height: 100%
  
.header__nav-mobile .header__logo
  background: $color-background
  background-clip: text
  margin-bottom: 40px

.burger-menu.active .header__nav-mobile
  padding: 20px  0
  position: relative

.burger-button.active 

.burger-button 
  position: relative
  height: 45px
  width: 40px
  display: none
  z-index: 99
  border: 0
  border-radius: 0
  background-color: transparent
  pointer-events: all
  margin-left: 20px
  cursor: pointer
  transition: transform .6s cubic-bezier(.165, .84, .44, 1)
  @include max-w(768)
    display: block

.burger-bar 
  background-color: rgba(237, 171, 0, 1)
  position: absolute
  top: 50%
  right: 6px
  left: 6px
  height: 2px
  width: auto
  margin-top: -1px
  transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1)
  

.burger-bar--1 
  -webkit-transform: translateY(-6px)
  transform: translateY(-6px)
  top: 45%

.burger-bar--2 
  transform-origin: 100% 50%
  transform: scaleX(1)

.burger-button:hover .burger-bar--2 
  transform: scaleX(1)

.no-touchevents .burger-bar--2:hover 
  transform: scaleX(1)

.burger-bar--3 
  transform: translateY(6px)
  top: 55%

.burger-button.active 
    transform: rotate(-180deg)

.burger-button.active .burger-bar 
    // background-color: lighten(#1F0700, 10)

.burger-button.active .burger-bar--1 
    transform: rotate(45deg)
    top: 50%

.burger-button.active .burger-bar--2 
    opacity: 0

.burger-button.active .burger-bar--3 
    transform: rotate(-45deg)
    top: 50%

.header__wrap  
  padding-top: 4.7%
  margin-bottom: 8%

.header__logo
  font-family: $font-family-extra-bold
  font-size: 34px
  line-height: 109.5%
  background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
  background-clip: text
  color: transparent

.header
  display: flex
  justify-content: space-between
  align-items: center

.header__nav
  @include max-w(768)
    display: none

.header__menu 
  display: flex
  align-items: center
  margin: 0 -40px

.header__menu-item
  padding: 0 40px
  @include max-w(1024)
    padding: 10px

.header__nav-link
  font-size: 18px
  line-height: 19.6px
  color: #A3A3A3
  position: relative
  &:hover
    background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
    background-clip: text
    color: transparent

.active-link
  background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
  background-clip: text
  color: transparent

.active-link::before
  position: absolute
  display: block
  content: ""
  bottom: -7px
  left: 50%
  width: 6px
  height: 6px
  border-radius: 6px
  background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)

.header__actions
  display: flex
  align-items: center

.header__button
  margin-right: 26px
  @include max-w(510)
    display: none

.header__cart
  position: relative
  z-index: 999

</style>