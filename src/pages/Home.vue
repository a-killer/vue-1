<template>
  <div class="canvas page">
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