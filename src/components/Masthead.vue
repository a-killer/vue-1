<template>

  <div class="masthead">
    <div class="branding">
     
    </div>
    
    <nav class="navigation">
      <ul>
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'Masthead',
}
</script>
