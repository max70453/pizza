<template lang="pug">
Layout
  Header
  section.main
    .main__container
      .main__content
        h1 Самая Быстрая Доставка Пиццы
        .main__title
          .main__title-fast Самая Быстрая
          .main__title-wrap
            .main__title-delivery Доставка
            g-image.main__title-img(alt="lightning image", src="~/images/Lightning.png", width="54")
            .main__title-pizza Пиццы
        p.main__suptitle {{ suptitle }}
          span.main__suptitle-span пицца бесплатно!
        .main__process Процесс приготовления:
        Video.main__video
        .main__button
          BaseBtn(:text="'заказать'", :classBtn="'paddingBtnMain'")
      .main__pic
        g-image.main__img(alt="Изображение пиццы", src="~/images/main-img.png", width="456")
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    //- g-image(alt="Example image", src="~/favicon.png", width="135")

</template>

<script>
import Header from "~/components/Header.vue";
import Video from "~/components/Video.vue";
import BaseBtn from "~/components/BaseBtn.vue";
export default {
  metaInfo () {
    return this.$seo({
      title: 'Пицца', // Uses the titleTemplate in Gridsome config
      description: 'My description',
      keywords: 'one,two',
      openGraph: {
        title: 'My site',
        type: 'website'
      },
      twitter: {
        title: 'My site',
        type: 'summary'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  },
  components: {
    Header,
    Video,
    BaseBtn
  },
  data(){
    return {
      suptitle: "Доставим сочную пиццу для вашей семьи за 30 минут, если курьер опаздывает - "
    }
  }
}
</script>

<style scoped>
.main__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 7%;
}

h1{
  display: none;
}
.main__title {
  color: #FFF;
  font-size: 69.17px;
  font-family: Muller;
  font-style: normal;
  font-weight: 800;
  line-height: 109.5%;
  width: 560px;
  position: relative;
  margin-bottom: 2.5%;
}

.main__title-fast{
  margin-bottom: 20px;
}

.main__title-fast:after{
  content: "";
  width: 105px;
  height: 37px;
  background: url("../images/Vector2.png") no-repeat;
  top: 23%;
  right: -10%;
  position: absolute;
  display: inline-block;
}

.main__title-wrap{
  display: flex;
  align-items: center;
}

.main__title-delivery{
  margin-right: 20px;
}

.main__title-img{
  margin-right: 20px;
}

/* .main__title-pizza{

} */

.main__suptitle{
  width: 100%;
  max-width: 480px;
  color: #A3A3A3;
  font-size: 19.562px;
  font-family: Muller;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 23px;
}

.main__suptitle-span{
  font-size: 19.562px;
  font-family: Muller;
  color: #fff;
}

.main__process{
  color: #A3A3A3;
  font-size: 19.562px;
  font-family: Muller;
  margin-bottom: 12px;
  line-height: 136%;
}

.main__video{
  margin-bottom: 4.8%;
}

/* .main__play-btn{

} */
.main__button{
  width: 100%;
  max-width: 230px;
  color: #FFF;
font-size: 22.439px;
font-family: Muller;
font-style: normal;
font-weight: 500;
line-height: 123.5%;
}

.main__pic{
  position: relative;
  
}

.main__img{
 
  border-radius: 46px;
  box-shadow: 0px 4px 33px 0px rgba(255, 78, 21, 0.29);
}

.main__pic::before{
  position: absolute;
  top: -19%;
  right: -29%;
  content: url('../images/pizza.png');
  width: 287px;
  height: 287px;
  z-index: -1;
}

.main__pic::after{
  position: absolute;
  bottom: -12%;
  left: -41%;
  content: url('../images/fries.png');
  width: 287px;
  height: 287px;
  z-index: -1;
}
</style>
