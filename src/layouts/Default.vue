<template>
  <div class="container" ref="main">
    <transition name="fade" appear>
        <main>
          <Header :width="width"></Header>
          <div class="overlay" ref='overlay'></div>
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

<script>
import Header from "~/components/Header.vue";

export default{
  components: {
    Header,
  },
  data() {
    return {
      debouncedHeight: 0,
      debouncedWidth: 0,
      heightTimeout: null,
      widthTimeout: null
    };
  },
  computed:  {
	  height:  {
		  get()  {
			  return  this.debouncedHeight;
		  },
		  set(val)  {
			  if  (this.timeout)  clearTimeout(this.timeout);
			  this.heightTimeout =  setTimeout(()  =>  {
				  this.debouncedHeight = val;
				},  500);
			}
		},
		width:  {
		  get()  {
			  return  this.debouncedWidth;
		  },
		  set(val)  {
			  if  (this.timeout)  clearTimeout(this.timeout);
			  this.widthTimeout =  setTimeout(()  =>  {
				  this.debouncedWidth = val;
				},  500);
			}
		},
	},
  methods: {
    resizeHandler(e) {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
  },
  mounted() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

.overlay
  display: none
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  backdrop-filter: blur(5px)
  z-index: 10
  background-color: rgba(255, 255, 255, 0.5)

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
