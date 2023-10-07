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
            :class="{active: isActive}"
          ) {{ item.title }}
    .header__actions
      BaseBtn(:text="'Bход'", :classBtn="'btn--md'").header__button
      g-image(alt="cart image", src="~/images/cart.png", width="40").header__cart
</template>

<script>
import BaseBtn from '~/components/BaseBtn.vue'

export default {
  components: {
    BaseBtn
  },
  data () {
    return {
      navItems: [
        {title: 'Главная', link: '/'},
        {title: 'Меню', link: '/'},
        {title: 'Акции', link: '/'},
        {title: 'Контакты', link: '/'}
      ],
      isActive: false
    }
  },
  methods: {
    activeClass () {
    }
  }
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

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

.header__nav

.header__menu 
  display: flex
  align-items: center
  margin: 0 -40px

.header__menu-item
  padding: 0 40px

.header__nav-link
  font-size: 18px
  line-height: 19.6px
  color: #A3A3A3
  position: relative
  &:hover
    background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
    background-clip: text
    color: transparent

.active
  background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%)
  background-clip: text
  color: transparent

.active::before
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

.header__button
  margin-right: 26px

</style>