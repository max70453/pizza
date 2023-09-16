<template lang="pug">
Layout
  Header
  section.main-screen
    .main__container
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
        )   
          template(
            v-slot:controls="{ togglePlay, playing, percentagePlayed, seekToPercentage,duration,convertTimeToDuration,videoMuted,toggleMute,fullScreen,toggleScreen}")
            .video-controls
              .video-controls__actions
                button.video-controls__btn.video-controls__toggleplay(@click="togglePlay()") 
                  <font-awesome-icon fa-pull-left class="icon" :icon="`fa-solid ${playing ? iPause : iPlay}`" />
                .video-controls-time.
                  {{ convertTimeToDuration(time) }} / {{ convertTimeToDuration(duration) }}
                button.video-controls__btn.video-controls__togglescreen(@click="toggleScreen()")
                  <font-awesome-icon class="icon" :icon="`fa-solid ${fullScreen ? iSmallScreen : iFullScreen}`" />
                button.video-controls__btn.video-controls__togglemute(@click="toggleMute()")
                  <font-awesome-icon class="icon" :icon="`fa-solid ${videoMuted ? iVolumeOn : iVolumeOff}`" />
              .video-controls__track
                videoplayer-track.video-controls-track(:percentage="percentagePlayed", @seek="seekToPercentage")
              
    
        .main__button
          BaseBtn(:text="'заказать'", :classBtn="'paddingBtnMain'")
      .main__pic
        g-image.main__img(alt="Изображение пиццы", src="~/images/main-img.png")
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    //- g-image(alt="Example image", src="~/favicon.png", width="135")

</template>

<script>
import Header from "~/components/Header.vue";
import Video from "~/components/Video.vue";
import VideoplayerTrack from "~/components/Video-track.vue";
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
    BaseBtn,
    VideoplayerTrack,
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
      suptitle: "Доставим сочную пиццу за 30 минут, если курьер опаздывает - "
    }
  },
  methods: {
    onPlayerPlay({ event, player }) {
      console.log(event.type);
      player.setPlaying(true);
    },
    onPlayerPause({ event, player }) {
      console.log(event.type);
      player.setPlaying(false);
    },
    onPlayerEnded({ event, player }) {
      console.log(event.type);
      player.setPlaying(false);
    },
    onPlayerLoadeddata({ event }) {
      console.log(event.type);
    },
    onPlayerWaiting({ event }) {
      console.log(event.type);
    },
    onPlayerPlaying({ event }) {
      console.log(event.type);
    },
    onPlayerTimeupdate({ event }) {
      this.time = event.target.currentTime;
      console.log({ event: event.type, time: event.target.currentTime });
    },
    onPlayerCanplay({ event }) {
      console.log(event.type);
    },
    onPlayerCanplaythrough({ event }) {
      console.log(event.type);
    },
    playerStateChanged({ event }) {
      console.log(event.type);
    },
  },
}
</script>

<style lang="sass">
@import "~/assets/index.scss"

.icon
  width: 100%
  color: #ED7200

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
  display: flex
  padding-left: 30px

.video-controls__btn
  width: 40px
  height: 40px
  display: flex
  align-items: center
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
  margin-bottom: 8%

.main__container
  display: flex
  justify-content: space-between
  align-items: center

.main__content
  width: 100%
  max-width: 600px

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

.title__img-cont
  display: inline-block
  vertical-align: middle
  padding: 0 10px

.main__title-img

.main__suptitle
  width: 100%
  max-width: 410px
  margin-bottom: 25px

.main__video
  width: 100%
  max-width: 272px
  margin-top: 15px
  margin-bottom: 4.8%

.main__button
  width: 100%
  max-width: 230px
  color: #FFF
  font-size: 22.439px
  // font-family: Muller
  font-style: normal
  font-weight: 500
  line-height: 123.5%

.main__pic
  position: relative

.main__img
  border-radius: 46px
  box-shadow: 0px 4px 33px 0px rgba(255, 78, 21, 0.29)

.main__pic::before
  position: absolute
  top: -19%
  right: -29%
  content: url('../images/pizza.png')
  width: 287px
  height: 287px
  z-index: -1

.main__pic::after
  position: absolute
  bottom: -12%
  left: -41%
  content: url('../images/fries.png')
  width: 287px
  height: 287px
  z-index: -1

</style>
