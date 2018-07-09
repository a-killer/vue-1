<template>
<video class="fullscreen-video" :src="src" :poster="poster" muted autoplay loop></video>
</template>

<script>
export default {
  name: 'fvideo',
  data: function () {
    return {
    }
  },
  props: ['src', 'poster'],
}
</script>

<style scoped>
  .fullscreen-video {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }
</style>