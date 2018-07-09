<template>
  <div class="animateOne">
    <a @click="go"></a>
    <div ref="square" class="block"></div>
  </div>
</template>

<script>
import { translate } from '../animate'
export default {
  name: 'AnimateOne',
  methods: {
    go( ) {
      translate(this.$refs.square)
    }
  }
}
</script>

<style scoped>
  .block {
    pointer-events: none;
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 1px;
    background-color: currentColor;
    background: url(../assets/images/1.gif) 0 0 no-repeat;
    background-size: cover;
    font-size: 12px;
    color: #FF00FF;
  }
</style>
