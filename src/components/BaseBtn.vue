<template lang="pug">
.Btn
    a(href='#' @click="onClick", :class="classBtn").btn {{ text }}
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    text: {
        type: String,
        default: 'NoName',
    },
    classBtn: {
      type: String,
      default: 'paddingBtnLogin'
    }
  },
  data () {
    return {
     
    }
  },
  methods: {
    onClick () {
      console.log('btn click');
    }
  }
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

.btn
  display: block
  color: $color-text-accent
  font-family: "MullerMedium"
  text-align: center
  border-radius: 700px 675px 700px 700px
  background: linear-gradient(215deg, #FF5924 0%, #FFA229 100%)

.btn--sm
  font-size: 15px
  padding: 10px 83px
  line-height: 16.5px

.btn--md
  font-size: 18px
  padding: 10px 55px
  line-height: 19px

.btn--lg
  font-size: 22px
  line-height: 28px
  padding: 20px 74px


</style>