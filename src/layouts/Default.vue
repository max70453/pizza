<template>
  <div class="container" ref="main">
    <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="sass">
@import "~/assets/index.scss"

@font-face 
  font-family: "Montserrat"
  font-display: auto
  src: local("Montserrat-Regular"), url("../assets/fonts/montserrat/Montserrat-Regular.woff2") format("woff2"), url("../assets/fonts/montserrat/Montserrat-Regular.woff") format("woff"), url("../assets/fonts/montserrat/Montserrat-Regular.ttf") format("ttf"), url("../assets/fonts/montserrat/Montserrat-Regular.eot") format("eot")

@font-face 
  font-family: "MullerBold"
  font-display: auto
  src: local("MullerBold"), url("../assets/fonts/muller/MullerBold.woff2") format("woff2")

@font-face 
  font-family: "MullerExtraBold"
  font-display: auto
  src: local("MullerExtraBold"), url("../assets/fonts/muller/MullerExtraBold.woff2") format("woff2")

@font-face 
  font-family: "MullerMedium"
  font-display: auto
  src: local("MullerMedium"), url("../assets/fonts/muller/MullerMedium.woff2") format("woff2")

@font-face 
  font-family: "Muller"
  font-display: auto
  src: local("MullerRegular"), url("../assets/fonts/muller/MullerRegular.woff2") format("woff2")
  
.fade-enter-active 
   transition: opacity .5s

.fade-enter 
   opacity: 0

</style>
