<template>

  <div class="masthead">
    <div class="branding">
      <img src="../assets/images/1.gif" height="200" class="hector size-60">
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
