<template>

  <div class="masthead">
    <div class="branding">
      <router-link :to="{ name: 'Home' }" exact><img src="../assets/images/1.gif" height="200" class="hector size-60"></router-link>
    </div>
    
    <nav class="navigation">
      <ul>
      <li><router-link :to="{ name: 'About' }" exact>About</router-link></li>
      <li><router-link :to="{ name: 'Project' }" exact>Project</router-link></li>
      <li><router-link :to="{ name: 'Example1' }" exact>Example 1</router-link></li>
      <li><router-link :to="{ name: 'Example2' }" exact>Example 2</router-link></li>
      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'Masthead',
}
</script>
