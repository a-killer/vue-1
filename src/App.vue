<template>
  <div class="app">

    <Masthead/>

    <div class="animation-one">
      <AnimateOne/>
    </div>

    <!--<transition name="fade">-->
    <transition name="router-anim" enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <router-view/>
    </transition>

  </div>
</template>

<script>
import AnimateOne from './components/AnimateOne.vue'
import Masthead from './components/Masthead.vue'
export default {
  name: 'App',
  components: {
    AnimateOne,
    Masthead
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/_all.sass";
  @import "../node_modules/bulma/sass/base/_all.sass";
  @import "../node_modules/bulma/sass/grid/_all.sass";
  @import "../node_modules/bulma/sass/layout/_all.sass";
  @import "../node_modules/bulma/sass/elements/container.sass";
  @import "../node_modules/bulma/sass/elements/image.sass";
  @import "../node_modules/bulma/sass/components/level.sass";
  @import "../node_modules/bulma/sass/components/media.sass";
  @import "../node_modules/bulma/sass/components/menu.sass";
  @import "../node_modules/bulma/sass/components/navbar.sass";
</style>

<style lang="scss" src="./styles/app.scss"></style>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  .block {
    pointer-events: none;
    position: relative;
    width: 128px;
    height: 128px;
    margin: 1px;
    background-color: currentColor;
    font-size: 12px;
    color: #2c3e50;
  }
</style>
