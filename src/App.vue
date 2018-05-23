<template>
  <div class="app">
    
    <div class="branding">
        <img src="./assets/images/1.gif" height="200" class="hector size-60">
    </div>
    
    <nav class="navigation">
      <ul>
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>

    <!--<transition name="fade">-->
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/_all.sass";
  @import "../node_modules/bulma/sass/base/_all.sass";
  @import "../node_modules/bulma/sass/grid/_all.sass";
  @import "../node_modules/bulma/sass/layout/_all.sass";
  @import "../node_modules/bulma/sass/elements/container.sass";
  @import "../node_modules/bulma/sass/elements/image.sass";
  @import "../node_modules/bulma/sass/components/media.sass";
  @import "../node_modules/bulma/sass/components/menu.sass";
  @import "../node_modules/bulma/sass/components/navbar.sass";
</style>

<style lang="scss" src="./styles/app.scss"></style>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
