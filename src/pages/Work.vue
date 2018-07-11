<template>
    <div class="work page">
        <div class="content">
            <div class="section">
                <ul id="work-container">
                    <li v-for="project in projects" v-bind:key="project.id" v-bind:style="getPadding(project.id, project.minPadding, project.maxPadding)">
                        <div class="cursor-container" v-bind:style="getSize(project.id, project.minWidth, project.maxWidth, project.minHeight, project.maxHeight)">
                            <component v-if="project.cursorType == 'component'" v-bind:is="project.component"></component>
                            <img v-if="project.type == 'image'" :src="project.src"  v-bind:style="getImageCursor(project.cursorType, project.cursorImage)">
                            <video muted loop v-if="project.type == 'video'" :src="project.src" onmouseover="this.play()" onmouseout="this.pause()"></video>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import pulse from '../components/pulse.vue'

export default {
  name: 'Work',
  components: {
      pulse
  },
  beforeCreate: function() {
      document.body.className = 'light killer';
  },
  data() {
    return {
      projects: [
        {id:1, type:"image", src:"/static/img/3.jpg", minPadding:84, maxPadding:94, minWidth: 350, minHeight: 280, maxWidth:450, maxHeight: 480, cursorType: 'image', cursorImage: '/static/img/heart.png'},
        {id:2, type:"image", src:"/static/img/4.jpg", minPadding:120, maxPadding:130, minWidth: 250, minHeight: 180, maxWidth:500, maxHeight: 300, cursorType: 'component', component: pulse},
        {id:3, type:"image", src:"/static/img/5.jpg", minPadding:40, maxPadding:60, minWidth: 500, minHeight: 300, maxWidth:800, maxHeight: 900},
        {id:4, type:"video", src:"/static/img/Swans - 1287.mp4", poster:"/static/img/swan-poster.png", minPadding:104, maxPadding:124, minWidth: 500, minHeight: 300, maxWidth:500, maxHeight: 300},
        {id:5, type:"video", src:"/static/img/Countdown - 2637.mp4", poster:"/static/img/countdown-poster.png", minPadding:184, maxPadding:284, minWidth: 500, minHeight: 300, maxWidth:500, maxHeight: 300},
      ],
      knownPadding:[],
    }
  },
  methods: {
    getPadding(id, min, max) {
        this.knownPadding[id] = (Math.floor(Math.random() * (max - min + 1)) + min);
        return { padding: this.knownPadding[id] + "px"}
    },
    getSize(id, minWidth, maxWidth, minHeight, maxHeight) {
        let randPositionX = (Math.floor(Math.random() * (this.knownPadding[id] - (- this.knownPadding[id]) + 1)) + (-this.knownPadding[id]));
        let randPositionY = (Math.floor(Math.random() * (this.knownPadding[id] - (- this.knownPadding[id]) + 1)) + (-this.knownPadding[id]));
        return {transform:'translate3d(' + randPositionX + 'px, ' + randPositionY + 'px, 0px)', maxWidth: (Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth) + 'px' }
    },
    getImageCursor(cursorType, cursorImage) {
        if(cursorType == "image") {
            return {cursor: 'url(' + cursorImage + '), auto'}
        } else {
            return;
        }
    }
  },
}
</script>
<style scoped lang="scss">
  #work-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    li {
        margin: 0;
        position: static !important;
        box-sizing: content-box;
        overflow: hidden;
    }
    .cursor-container {
        vertical-align: middle;
        position: relative;
        .contents {
            opacity: 0;
        }
    }
    .cursor-container:hover {
        .contents {
            opacity: 1;
        }
    }
  }

</style>