<template lang="pug">
.video-player()
    video.video(
        ref="video",
        poster="../images/shourav.png",
        width="272",
        height="193",
        muted
        )
        source(src="../video/video.mp4", type="video/mp4")
    g-image.video__play-btn(v-if="!playing", @click="clickPlay", alt="play video", src="~/images/play-btn.png", width="152")
</template>

<script>
export default {
name: "VideoPlayer",
 computed: {
  videoElement () {
    return this.$refs.video;
  },
},
data(){
    return{
        playing: false
    }
},
methods:{
    clickPlay(){
        this.playing = true;
        this.$refs.video.play();
    }
}
}
</script>

<style>
.video-player{
    width: 100%;
    max-width: 272px;
    position: relative;
    object-fit: cover;
    border-radius: 10px;
}

.video{
    object-fit: cover;
    border-radius: 12px;
}

.video__play-btn{
    cursor: pointer;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 15%;
    text-align: center;
}

.hidden{
    display: none;
}

</style>