<template>
  <div class="example1 page">
    
    <div class="content">

         <div class="section">
            <div class="container">
                <Particle></Particle>
             </div>
        </div>
      
    </div>

  </div>
</template>

<script>
import Particle from '../components/Particle.vue';

export default {
  name: 'Project',
  components: {
    Particle,
  },
  beforeCreate: function() {
      document.body.className = 'example1';
  }
}
</script>