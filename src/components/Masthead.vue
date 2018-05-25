<template>

  <div class="masthead">
    <div class="branding">
      <img src="../assets/images/1.gif" height="200" class="hector size-60">
    </div>
    
    <nav class="navigation">
      <ul>
      <li><router-link :to="{ name: 'Home' }" exact>Home</router-link></li>
      <li><router-link :to="{ name: 'About' }" exact>About</router-link></li>
      <li><router-link :to="{ name: 'Project' }" exact>Project</router-link></li>
      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'Masthead',
}
</script>
