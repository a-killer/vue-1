<template>
  <div class="example1 page">
    
    <div class="content">
      <Particle></Particle>
    </div>

  </div>
</template>

<script>
import Particle from '../components/Particle.vue';

export default {
  name: 'Example1',
  components: {
    Particle,
  },
  beforeCreate: function() {
      document.body.className = 'example1';
  }
}
</script>