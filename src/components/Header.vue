<template lang="pug">
header.header
  g-link(to="/home").header__link pizzashop
  nav.header__nav-menu
    g-link.header__nav-link(
      v-for="item in navItems",
      :to="item.link",
      @click="isActive=!isActive",
      :class="{active: isActive}"
    ) {{ item.title }}
  .header__buttons
    BaseBtn(:text="'login'", :classBtn="'paddingBtnLogin'").header__button
    //- a(href='#').header__login Логин
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
        {title: 'Меню', link: '/menu/'},
        {title: 'События', link: '/events/'},
        {title: 'О нас', link: '/about/'}
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

<style>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4.7%;
  margin-bottom: 5%;
}

.header__nav-menu{
  display: flex;
  justify-content: space-between;
  width: 469px;
}

.header__nav-link{
  font-size: 17.88px;
  font-family: Muller;
  color: #A3A3A3;
  position: relative;
}

.header__nav-link:hover{
  background: linear-gradient(45deg, #FF6432 33%, #FFA228 66%);
  background-clip: text;
  color: transparent;
}

.active{
  background: linear-gradient(45deg, #FF6432 33%, #FFA228 66%);
  background-clip: text;
  color: transparent;
}

.active:before{
  position: absolute;
  display: block;
  content: "";
  top: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: linear-gradient(215deg, #FF6432 0%, #FFA228 100%);
}

.header__link{
  font-size: 34.058px;
  font-family: Muller;
  font-weight: 800;
  line-height: 109.5%;
  background: linear-gradient(45deg, #FF6432 33%, #FFA228 66%);
  background-clip: text;
  color: transparent;
}

.header__buttons{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__button{
  margin-right: 26px;
}

</style>