<template>
<div class="video-container">
  <video ref="video" class="fullscreen-video" :src="src" :poster="poster" muted loop autoplay></video>
  <div class="toggle-audio" v-on:click="toggleAudio()"></div>
</div>
</template>

<script>
export default {
  name: 'fvideo',
  data: function () {
    return {
    }
  },
  props: ['src', 'poster'],

  methods: {
    toggleAudio() {
      var vid = this.$refs.video;
      var $this = this;
      if(vid.muted) {
        console.log("Sound on");
        vid.muted = false;

      } else {
        console.log("Sound off");
        vid.muted = true;
      }
    },
  },
}
</script>

<style scoped>
  .video-container {
    height: 100%;
  }
  .fullscreen-video {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
  .toggle-audio {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #000;
    background: grey;
    bottom: 100px;
    right: 100px;
    cursor: pointer;
  }
  .toggle-audio.active {
    background: blue;
  }
</style>