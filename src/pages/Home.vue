<template>
  <div class="home page">
    
    <div class="content">
      <Particle></Particle>
    </div>

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
      document.body.className = 'home';
  }
}
</script>