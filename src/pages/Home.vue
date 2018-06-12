<template>
  <div class="canvas page" v-cloak>
      <Particle></Particle>
  </div>
</template>

<script>
import Particle from '../components/Particle.vue';

export default {
  name: 'home',
  components: {
    Particle,
  },
  beforeCreate: function() {
      document.body.className = 'canvas';
  }
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>