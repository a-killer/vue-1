<template>
  <div id="fullpage">
    <div class="page-slide">
      <component v-bind:is="randomComponent" v-bind="page"></component>
    </div>
    <div class="page-slide">
      Second page
    </div>
  </div>
</template>

<script>
import fimage from '../components/fimage.vue'
import fvideo from '../components/fvideo.vue'

export default {
  name: 'Home',
  components: {
    fimage,
    fvideo,
  },
  data() {
    /*
    The first array is the pages, the inner array is the random elements in that page

    Image type template: {id:1, type:"image", src:"/static/img/3.jpg"},

    */
    return {
      pages: [
        {id:1, type:"image", src:"/static/img/3.jpg"},
        {id:2, type:"image", src:"/static/img/4.jpg"},
        {id:3, type:"image", src:"/static/img/5.jpg"},
        {id:4, type:"video", src:"/static/img/Swans - 1287.mp4", poster:"/static/img/swan-poster.png"},
        {id:5, type:"video", src:"/static/img/Countdown - 2637.mp4", poster:"/static/img/countdown-poster.png"},
      ],
      page: null,
    }
  },
  beforeCreate: function() {
  },
  computed: {
    randomComponent: function () {
      let item = this.pages[Math.floor(Math.random()*this.pages.length)];
      this.page = item;
      console.log("showing random with id", item.id);
      if(item.type == "image") {
        return fimage;
      }
      if(item.type == "video") {
        return fvideo;
      }
      throw "Cannot choose type";
    }
  },
  created() {

  }
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
  #fullpage {
    width: 100%;
    height: 100%;
  }
  .page-slide {
    width: 100%;
    height: 100vh;
  }
</style>