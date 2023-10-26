<template lang="pug">
.header__wrap
  header.header
    .flex.header__contacts
      a.header__phone(href="tel:+79495551111") +7(949)555-11-11
      a.header__phone(href="tel:+79495551111") +7(949)555-11-11
    .flex.header__content
      g-link.header__logo(to="/") pizzashop
      nav.header__nav
        ul.flex.flex--center.header__menu
          li.header__menu-item(v-for="item in navItems")
            g-link.header__nav-link(
              :to="item.link",
            ) {{ item.title }}
      .flex.flex--center.header__actions
        BaseBtn(:text="'Bход'", :classBtn="'btn--md'", :visible="loginVisible").header__button
        g-image(alt="cart image", src="~/images/cart.png", width="40" @click="activeClass").header__cart
        button(type="button" class="burger-button" :class="{'active-nav': active}" title="Menu" @click="toggleActive")
          span.burger-bar.burger-bar--1
          span.burger-bar.burger-bar--2
          span.burger-bar.burger-bar--3
        .flex.burger-menu(id="burger" :class="{'active-nav': active}" )
          nav.header__nav-mobile()
            .header__logo pizzashop
            ul.header__menu-mobile
              li.header__menu-item(v-for="item in navItems")
                g-link.header__nav-link(
                  exact
                  :to="item.link",
                ) {{ item.title }}
          .burger-menu__bottom
            .flex.flex--center.header__contacts
              a.header__phone(href="tel:+79495551111") +7(949)555-11-11
              a.header__phone(href="tel:+79495551111") +7(949)555-11-11
            .header__socials
              a.header__social-link(href="https://web.telegram.org/" target="_blank")
                <font-awesome-icon class="fa-2x" :icon="['fab', 'telegram']" />
              a.header__social-link(href="https://www.whatsapp.com/" target="_blank")
                <font-awesome-icon class="fa-2x" :icon="['fab', 'whatsapp']" />
              a.header__social-link(href="https://vk.com/" target="_blank")
                <font-awesome-icon class="fa-2x" :icon="['fab', 'vk']" />


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
    width: {
      type: Number,
      required: true
    },
  },
  data () {
    return {
      iTwitter: 'fab-twitter',
      activeFlag: false,
      navItems: [
        {title: 'Главная', link: '/'},
        {title: 'Меню', link: '/menu/'},
        {title: 'Акции', link: '/promo/'},
        {title: 'Контакты', link: '/contacts/'},
      ],
      loginVisible: true,
    }
  },
  methods: {
    activeClass () {
      console.log('clicked');
    },
    toggleActive () {
      this.activeFlag = !this.activeFlag;
      this.active;
      console.log(this.active);
      console.log('this.width', this.width);
      if(this.width > 768){
        this.active = false;
      }
      if(this.active){
        document.body.style.overflow='hidden';
        this.$parent.$refs.overlay.style.display = 'block'
      }
      else{
        document.body.style.overflow='auto'
        this.$parent.$refs.overlay.style.display = 'none'
      }
      
    }
  },
  computed:{
    active(){
      if(this.width > 768){
        this.$parent.$refs.overlay.style.display = 'none'
        return this.activeFlag = false;
        
      }
      return this.activeFlag;
    }
  },
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

.fa-telegram
  color: #229ED9

.fa-vk
  color: #4C75A3

.fa-whatsapp
  color: #25D366

.active--exact
  background: linear-gradient(262deg, #FF6432 12.12%, #FFA228 86.72%)
  background-clip: text
  -webkit-text-fill-color: transparent
  color: transparent

.active--exact:not(.header__logo)::before
  position: absolute
  display: block
  content: ""
  bottom: -7px
  left: 50%
  width: 6px
  height: 6px
  border-radius: 6px
  background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
  

.header__menu-mobile .header__nav-link
  color: #1F0700
  font-size: 20px
  &:hover
    color: $color-text-accent

.burger-menu
  position: fixed
  flex-direction: column
  justify-content: space-between
  left: 0
  top: 0
  bottom: 0
  width: 65%
  padding: 10%
  background-color: rgba(237, 171, 0, 1)
  background: linear-gradient(215deg, #FF5924 0%, #FFA229 100%)
  z-index: 999
  transform: translateX(-100%)
  transition: .5s 

.burger-menu.active-nav
  transform: translateX(0%)
  overflow: auto

.header__menu-mobile .header__nav-link.active--exact
  -webkit-text-fill-color: inherit
  color: $color-text-accent
  position: relative

.header__menu-mobile .header__nav-link.active--exact::after
  content: ''
  width: 100%
  height: 1px
  display: block
  position: absolute
  bottom: -1px
  left: 0
  background-color: $color-text-accent


.header__nav-mobile
  margin-bottom: 40px
  
.header__nav-mobile .header__logo
  font-size: 40px
  background: $color-background
  background-clip: text
  margin-bottom: 40px

.burger-menu.active-nav .header__nav-mobile
  position: relative
  text-align: center

.header__socials
  text-align: center

.header__social-link
  display: inline-block
  width: 30px
  height: 30px
  margin-right: 15px
  &:hover
    opacity: .7

.burger-button.active-nav

.burger-menu__bottom


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

.burger-button.active-nav
    transform: rotate(-180deg)

.burger-button.active-nav .burger-bar 
    // background-color: lighten(#1F0700, 10)

.burger-button.active-nav .burger-bar--1 
    transform: rotate(45deg)
    top: 50%

.burger-button.active-nav .burger-bar--2 
    opacity: 0

.burger-button.active-nav .burger-bar--3 
    transform: rotate(-45deg)
    top: 50%

.header__wrap  
  padding-top: 4.7%
  margin-bottom: 10%

.header__logo
  font-family: $font-family-extra-bold
  font-size: 34px
  line-height: 109.5%
  background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
  background-clip: text
  color: transparent

.header

.header__contacts
  margin-bottom: 20px
  justify-content: flex-end
  @include max-w(510)
    display: none

.burger-menu .header__contacts
  flex-direction: column

.header__phone
  color: rgba(237, 171, 0, 1)
  &:hover
    opacity: .5
  &:not(:last-child)
    margin-right: 15px

.burger-menu .header__phone
  color: #1F0700
  margin: 0 0 10px 0
  font-size: 20px

.header__content
  justify-content: space-between
  align-items: center

.header__nav,
.active--exact::before
  @include max-w(768)
    display: none

.header__menu 
  margin: 0 -40px

.header__menu-item
  padding: 0 40px
  @include max-w(1024)
    padding: 0 10px
    margin-bottom: 10px

.header__nav-link
  font-size: 18px
  line-height: 19.6px
  color: #A3A3A3
  position: relative
  &:hover
    background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
    background-clip: text
    color: transparent

// .active-link
//   background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
//   background-clip: text
//   color: transparent

// .active-link::before
//   position: absolute
//   display: block
//   content: ""
//   bottom: -7px
//   left: 50%
//   width: 6px
//   height: 6px
//   border-radius: 6px
//   background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)

.header__actions

.header__button
  width: 160px
  margin-right: 26px
  @include max-w(510)
    display: none

.header__cart
  position: relative
  z-index: 999

</style>