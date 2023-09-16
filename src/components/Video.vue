<template lang="pug">
.video-wrap(ref="cont")
  video.video(
      ref="video",
      :autoplay="autoplay"
      :poster="require(`../images/${poster}`)",
      :width="width"
      :height="height"
      :loop="loop"
      :controls="controls"
      :muted="muted",
      :preload="preload"
      @click="togglePlay"
      )
      source(:src="require(`../video/${video}`)", type="video/mp4")
  slot(
    name="controls"
    :play="play"
    :pause="pause"
    :toggle-play="togglePlay"
    :playing="playing"
    :percentage-played="percentagePlayed"
    :seek-to-percentage="seekToPercentage"
    :duration="duration"
    :convert-time-to-duration="convertTimeToDuration"
    :video-muted="videoMuted"
    :toggle-mute="toggleMute"
    :full-screen="fullScreen"
    :toggle-screen="toggleScreen"
  )
  //- g-image.video__play-btn(
  //-     v-show="!playing", 
  //-     @click="clickPlay", 
  //-     alt="воспроизвести", 
  //-     src="~/images/play-btn.svg", 
  //-     width="81" 
  //-     height="81"
  //-     )
</template>

<script>
const EVENTS = [
  "play",
  "pause",
  "ended",
  "loadeddata",
  "waiting",
  "playing",
  "timeupdate",
  "canplay",
  "canplaythrough",
  "statechanged",
];

export default {
name: "VideoPlayer",
props:{
    video: {type: String, required: true, default: 'video.mp4'},
    poster: {type: String, required: false, default: 'shourav.png'},
    width: { type: String, required: false, default: "100%" },
    height: { type: String, required: false, default: "100%" },
    muted: {type: Boolean, required: false, default: true},
    loop: { type: Boolean, required: false, default: false }, 
    autoplay: { type: Boolean, required: false, default: false },
    controls: { type: Boolean, required: false, default: false },
    preload: { type: String, required: false, default: "auto" },
},
data(){
  return{
      playing: false,
      duration: 0,
      percentagePlayed: 0,
      videoMuted: false,
      fullScreen: false,
  }
},
created() { 
  document.addEventListener("fullscreenchange", this.checkScreen);
},
mounted() {
    this.bindEvents();

    if (this.$refs.video.muted) {
      this.setMuted(true);
    }
},
destroyed() {
  document.removeEventListener('fullscreenchange', this.checkScreen);
},
methods:{
  checkScreen(){
    if (!document.fullscreenElement && this.fullScreen) {
      this.setScreen(false);
    }
  },
  bindEvents() {
    EVENTS.forEach((event) => {
      this.bindVideoEvent(event);
    });
  },
  bindVideoEvent(which) {
    const player = this.$refs.video;

    player.addEventListener(
      which,
      (event) => {
        if (which === "loadeddata") {
          this.duration = player.duration;
        }

        if (which === "timeupdate") {
          this.percentagePlayed =
            (player.currentTime / player.duration) * 100;
        }

        this.$emit(which, { event, player: this });
      },
      true
    );
  },
  play() {
    this.$refs.video.play();
    this.setPlaying(true);
  },

  pause() {
    this.$refs.video.pause();
    this.setPlaying(false);
  },

  togglePlay() {
    if (this.playing) {
      this.pause();
    } else {
      this.play();
    }
  },

  setPlaying(state) {
    this.playing = state;
  },

  seekToPercentage(percentage) {
    this.$refs.video.currentTime = (percentage / 100) * this.duration;
  },

  convertTimeToDuration(seconds) {
    return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
      .join(":")
      .replace(/\b(\d)\b/g, "0$1");
  },

  mute() {
    this.$refs.video.muted = true;
    this.setMuted(true);
  },

  unmute() {
    this.$refs.video.muted = false;
    this.setMuted(false);
  },

  toggleMute() {
    if (this.videoMuted) {
      this.unmute();
    } else {
      this.mute();
    }
  },

  setMuted(state) {
    this.videoMuted = state;
  },
  
  fullScreenOn(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } 
    else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } 
    else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
    this.setScreen(true);
  },

  fullScreenOff() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    this.setScreen(false);
  },

  toggleScreen(){
    if(this.fullScreen){
      this.fullScreenOff();
    } 
    else {
      this.fullScreenOn(this.$refs.cont);
    }
  },
  
  setScreen(state) {
    this.fullScreen = state;
  },

},
}
</script>

<style lang="sass">

.controls
    background: red

.video-wrap
  position: relative

.video
    object-fit: cover
    border-radius: 12px
    &:hover
        cursor: pointer
        + .video-controls
            opacity: 1

.video__play-btn
    cursor: pointer
    position: absolute
    margin-left: auto
    margin-right: auto
    left: 0
    right: 0
    top: 15%
    text-align: center

</style>