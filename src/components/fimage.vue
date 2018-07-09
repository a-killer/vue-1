<template>
<div class="fullscreen-image" v-bind:style="{ backgroundImage: 'url(' + src + ')' }"></div>
</template>

<script>
export default {
  name: 'fimage',
  data: function () {
    return {
    }
  },
  props: ['src'],
}
</script>

<style scoped>
  .fullscreen-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
</style>