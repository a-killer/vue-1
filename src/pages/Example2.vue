<template>
  <div class="example2 page">
    
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
  name: 'Example2',
  components: {
    Particle,
  },
  beforeCreate: function() {
      document.body.className = 'example2';
  }
}
</script>