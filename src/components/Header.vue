<template lang="pug">
header.header
  strong.header__strong
    g-link(to="/").header__link pizzashop
  nav.header__nav-menu
    g-link(to="/").nav__link Home
    g-link(to="/menu/").nav__link Menu
    g-link(to="/events/").nav__link Events
    g-link(to="/about/").nav__link About us
</template>

<script>

export default {
  // metaInfo: {
  //   title: 'About us'
  // }
}
</script>

<style>
.header{
  padding-top: 4.7%;
}
.header__nav-menu{
  width: 469px;
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



</style>