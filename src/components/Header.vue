<template lang="pug">
header.header
  strong.header__strong
    g-link(to="/").header__link
      span.header__pizza pizza
      span.header__shop shop
      //- <nav class="nav">
      //-   <g-link class="nav__link" to="/">Home</g-link>
      //-   <g-link class="nav__link" to="/about/">About</g-link>
      //- </nav>
</template>
  
<script>

export default {
  // metaInfo: {
  //   title: 'About us'
  // }
}
</script>

<style>
.header__link{
  font-size: 34.058px;
  font-family: Muller;
  font-weight: 800;
  line-height: 109.5%;
  color: (214deg, #FE9C1C 0%, #FF5E2A 100%);
}
.header__pizza{
  color: rgba(255, 100, 50, 1);
}
.header__shop{
  color: rgba(255, 162, 40, 1);
}

</style>