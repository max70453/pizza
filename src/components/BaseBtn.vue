<template lang="pug">
.Btn
    a(href='#' @click="onClick", :class="classBtn", v-show="visible").btn {{ text }}
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    text: {
        type: String,
        required: true,
        default: 'NoName',
    },
    classBtn: {
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
      console.log(this.visible);
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
  border: none
  cursor: pointer
  padding: 10px 
  border-radius: 700px 675px 700px 700px
  background: linear-gradient(215deg, #FF5924 0%, #FFA229 100%)
  transition: all 0.3s ease-out, color 0s
  &:hover
    outline: 1.5px solid #FF5924
    box-shadow: 0px 7.59366px 33.74961px 0px rgba(255, 107, 0, 0.06)
    color: transparent
    background-image: linear-gradient(262deg, #FF5924 12.12%, #FFA229 86.72%)
    background-clip: text
    -webkit-background-clip: text

.btn-outline
  outline: 1.5px solid #FF5924
  box-shadow: 0px 7.59366px 33.74961px 0px rgba(255, 107, 0, 0.06)
  color: transparent
  background-image: linear-gradient(262deg, #FF5924 12.12%, #FFA229 86.72%)
  background-clip: text
  -webkit-background-clip: text
  position: relative

.btn--sm
  font-size: 15px
  line-height: 16.5px

.btn--md
  font-size: 18px
  line-height: 19px
  @include max-w(430)
    font-size: 10px
    line-height: 10px

.btn--lg
  font-size: 20px
  line-height: 123.5%
  padding: 20px 10px
  @include max-w(430)
    padding: 12px
    font-size: 16px




</style>