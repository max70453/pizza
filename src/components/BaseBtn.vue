<template lang="pug">
.Btn
    a(href='#' @click="onClick", :class="classBtn").button {{ text }}
</template>

<script>
export default {
  name: 'LoginBtn',
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
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      console.log('login');
    }
  }
}
</script>

<style>
  .button{
    color: #FFF;
    font-family: Muller;
    font-weight: 500;
    text-align: center;
    border-radius: 700px 675px 700px 700px;
    background: linear-gradient(215deg, #FF5D29 0%, #FE9C1C 100%);
  }

.paddingBtnLogin{
  font-size: 17.74px;
  padding: 11px 56px;
  line-height: 109.5%;
}

.paddingBtnMain{
  font-size: 22.439px;
  line-height: 123.5%;
  padding: 17px 72px;
}
</style>