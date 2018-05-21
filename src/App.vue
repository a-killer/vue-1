<template>
  <div class="app">
    <img src="./assets/images/1.jpg">
    <nav>
      <ul>
			<li><router-link :to="{ name: 'Home' }">Home</router-link></li>
			<li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" src="./styles/app.scss"></style>

<style scoped>
.app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  body {
    background: rgb(233, 233, 233);
    font-family:Arial, Helvetica, sans-serif;
  }
  html, body {
    height: calc(100% - 50px);
  }

  .app {
    background: #fff;
    width: 50%;
    padding: 30px;
    border-radius: 10px;
    margin: 50px auto 0 auto;
    height: calc(60% - 50px);
  }

  .page {
    position: fixed;
    width: inherit;
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }


</style>
