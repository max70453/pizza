<template lang="pug">
Layout
  section.main-screen
    .main__container.flex
      .main__content
        h1.hidden Быстрая Доставка Пиццы
        .title.main__title 
          span Молниеносная 
          br
          |Доставка
          .title__img-cont
            g-image.main__title-img(alt="lightning image" src="~/images/Lightning.png" width="48")
          |Пиццы
        p.text.main__suptitle {{ suptitle }}
          span.text--accent пицца бесплатно!
        .text Процесс приготовления:
        Video.main__video(
          :video="'video.mp4'",
          :poster="'shourav.png'"
          @play="onPlayerPlay"
          @pause="onPlayerPause"
          @ended="onPlayerEnded"
          @loadeddata="onPlayerLoadeddata"
          @waiting="onPlayerWaiting"
          @playing="onPlayerPlaying"
          @timeupdate="onPlayerTimeupdate"
          @canplay="onPlayerCanplay"
          @canplaythrough="onPlayerCanplaythrough"
          @statechanged="playerStateChanged"
          @full-screen="onPlayerFullscreen"
        )   
          template(
            v-slot:controls="{ playBtn, togglePlay, playing, percentagePlayed, seekToPercentage,duration,convertTimeToDuration,videoMuted,toggleMute,fullScreen,toggleScreen}")
            .video-controls(v-show="!playBtn")
              .video-controls__actions.flex
                button.video-controls__btn.flex.flex--center.video-controls__toggleplay(@click="togglePlay()" ref="playBtn") 
                  <font-awesome-icon fa-pull-left class="icon" :icon="`fa-solid ${playing ? iPause : iPlay}`" />
                .video-controls-time.
                  {{ convertTimeToDuration(time) }} / {{ convertTimeToDuration(duration) }}
                button.video-controls__btn.flex.flex--center.video-controls__togglescreen(@click="toggleScreen()")
                  <font-awesome-icon class="icon" :icon="`fa-solid ${fullScreen ? iSmallScreen : iFullScreen}`" />
                button.video-controls__btn.flex.flex--center.video-controls__togglemute(@click="toggleMute()")
                  <font-awesome-icon class="icon" :icon="`fa-solid ${videoMuted ? iVolumeOn : iVolumeOff}`" />
              .video-controls__track
                videoplayer-track.video-controls-track(:percentage="percentagePlayed", @seek="seekToPercentage")
            g-image.video__play-btn(
              v-show="playBtn"
              @click="togglePlay()"
              alt="воспроизвести", 
              src="~/images/play-btn.svg", 
              width="140" 
              )      
    
        .main__button
          BaseBtn(:text="'Заказать'", :classBtn="'btn--lg'")
      .swiper
        .main__pic-pizza
        .main__pic-fries
        slider-img
  popular
  modal.modal-product(
    name="pizzaModal"
    
  )     

</template>

<script>

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
    Video: () => import ('~/components/Video.vue'),
    BaseBtn: () => import ('~/components/BaseBtn.vue'),
    VideoplayerTrack: () => import ('~/components/Video-track.vue'),
    SliderImg: () => import ('~/components/SliderImg.vue'),
    Popular: () => import ('~/components/Popular.vue'),
    PizzaModal: () => import ('~/components/PizzaModal.vue'),
  },
  data(){
    return {
      iPlay: 'fa-play',
      iPause: 'fa-pause',
      iVolumeOn: 'fa-volume-xmark',
      iVolumeOff: 'fa-volume-high',
      iFullScreen: 'fa-expand',
      iSmallScreen: 'fa-compress',
      time: 0,
      suptitle: "Доставим сочную пиццу за 30 минут, если курьер опаздывает - ",
    }
  },
  methods: {
    onPlayerFullscreen(){
      // console.log("event.type");
      this.$refs.playBtn.focus();
      // player.setScreen(true);
    },
    onPlayerPlay({ event, player }) {
      // console.log(event.type);
      player.setPlaying(true);
    },
    onPlayerPause({ event, player }) {
      // console.log(event.type);
      player.setPlaying(false);
    },
    onPlayerEnded({ event, player }) {
      // console.log(event.type);
      player.setPlaying(false);
    },
    onPlayerLoadeddata({ event }) {
      // console.log(event.type);
    },
    onPlayerWaiting({ event }) {
      // console.log(event.type);
    },
    onPlayerPlaying({ event }) {
      // console.log(event.type);
    },
    onPlayerTimeupdate({ event }) {
      this.time = event.target.currentTime;
      if(this.time > 0){
        this.playBtn = false;
      }
      // console.log({ event: event.type, time: event.target.currentTime });
    },
    onPlayerCanplay({ event }) {
      // console.log(event.type);
      // console.log({ event: event.type, time: event.target.currentTime });
    },
    onPlayerCanplaythrough({ event }) {
      // console.log(event.type);
    },
    playerStateChanged({ event }) {
      // console.log(event.type);
    },
  },
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

.slick-dots
  bottom: -35px

.slick-dots:not(#_) 
  button:before 
    color: #98350cfa
    opacity: 1
    font-size: 10px

  .slick-active button:before 
    font-size: 15px
    color: #FF5924

.slick-dots li 
  width: 25px

.swiper
  position: relative
  box-shadow: 0px 4px 33px 0px rgba(255, 78, 21, 0.29)
  border-radius: 46px
  height: 675px
  @include max-w(640)
    order: -1
    margin-bottom: 20%
  @include max-w(800)
    max-width: 243px
    max-height: 365px
  
.slick-slider
  width: 100%
  max-width: 450px
  border-radius: 46px

.slick-img
  border-radius: 46px

.slick-slide
  // box-shadow: 0px 4px 33px 0px rgba(255, 78, 21, 0.29)


.myslide
  background: transparent

.icon
  width: 100%
  color: #ED7200

.video__play-btn
  cursor: pointer
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  border-radius: 50%
  transition: all ease-in-out 0.3s
  &:hover
    transition: all ease-in-out 0.3s
    transform: translate(-50%, -50%) scale(1.1)

.video-controls 
  transition: opacity 500ms ease-in-out
  opacity: 0
  position: absolute
  bottom: 0
  padding: 0 15px
  width: 100%
  background: linear-gradient(0deg, #000000 30%, rgba(255,255,255, 0))
  border-radius: 0 0 12px 12px
  &:hover
    opacity: 1

.video-controls__actions
  position: relative
  padding-left: 30px

.video-controls__btn
  width: 40px
  height: 40px
  position: absolute
  border: none
  cursor: pointer
  background: transparent
  background-size: contain
  background-repeat: no-repeat
  padding: 0
  border-radius: 50%
  &:hover
    background: rgba(0,0,0,0.5) 

.video-controls__track

.video-controls__toggleplay,
.video-controls__togglemute,
.video-controls__togglescreen
  bottom: -5px

.video-controls__toggleplay
  margin-right: 10px
  left: -10px

.video-controls__togglescreen
  right: 40px

.video-controls__togglemute 
  right: 5px

.video-controls-time 
  text-align: center
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

.video-controls-track 
  line-height: 2

.main-screen
  margin-bottom: 15%

.main__container
  width: 93%
  justify-content: space-between
  // align-items: center
  
  @include max-w(640)
    flex-wrap: wrap
    justify-content: center

.main__content
  width: 100%
  max-width: 600px
  @include max-w(768)

.main__title 
  position: relative
  margin-bottom: 2.5%

.title.main__title span
  display: inline-block
  position: relative
  &::after
    display: block
    content: ""
    width: 105px
    height: 37px
    position: absolute
    background: url("../images/Vector2.png") no-repeat center
    top: 50%
    left: 102%  
    @include max-w(768)
      display: none

.title__img-cont
  display: inline-block
  vertical-align: middle
  padding: 0 10px

.main__title-img
  @include max-w(430)
    max-width: 35px

.main__suptitle
  width: 100%
  max-width: 410px
  margin-bottom: 25px

.main__video
  width: 100%
  max-width: 272px
  margin-top: 15px
  margin-bottom: 4.8%
  @include max-w(800)
    width: 194px

.main__button
  width: 100%
  max-width: 230px
  position: relative
  @include max-w(430)
    max-width: 164px
  &::after
    content: ''
    display: block
    width: 165px
    height: 165px
    position: absolute
    left: 110%
    top: 0
    background: url("../images/Vector1.png") no-repeat center
    @include max-w(640)
      display: none

.main__pic
  position: relative
  
.main__img
  border-radius: 46px
  box-shadow: 0px 4px 33px 0px rgba(255, 78, 21, 0.29)

.main__pic
  position: relative


.main__pic-pizza
  background-image: url('../images/pizza.png') 
  background-repeat: no-repeat
  background-position: 0 150%
  width: 55%
  height: 36%
  position: absolute
  top: -7%
  right: -22%
  z-index: -1

.main__pic-fries
  background: url('../images/fries.png') no-repeat center
  width: 46%
  height: 32%
  position: absolute
  bottom: -10%
  left: -27%
  z-index: -1

.main__pic-fries,
.main__pic-pizza
  @include max-w(800)
    background-size: cover
    background-position: center
    z-index: 1
    

</style>
