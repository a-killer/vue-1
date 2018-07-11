<template>
  <div class="contents" ref="mousecontainer">
    <div id="follower">
      <div id="circle1"></div>
      <div id="circle2"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pulse',
  components: {
  },
  mounted() {
    var follower, init, mouseX, mouseY, positionElement, printout, timer;
    var $this = this;
    follower = document.getElementById('follower');

    printout = document.getElementById('printout');
    var clientRect = this.$refs.mousecontainer.getBoundingClientRect();
    window.setTimeout(function(){
      clientRect = $this.$refs.mousecontainer.getBoundingClientRect();
      console.log(clientRect);
    }, 1000);

    mouseX = (event) => {
      return event.clientX - clientRect.left;
    };

    mouseY = (event) => {
      return event.clientY - clientRect.top + window.scrollY;
    };

    positionElement = (event) => {
      var mouse;
      mouse = {
        x: mouseX(event),
        y: mouseY(event)
      };
      follower.style.top = mouse.y + 'px';
      return follower.style.left = mouse.x + 'px';
    };

    timer = false;

    this.$refs.mousecontainer.onmousemove = init = (event) => {
      var _event;
      _event = event;
      return timer = setTimeout(() => {
        return positionElement(_event);
      }, 1);
    };


  },
}
</script>
<style scoped lang="scss">
.contents {
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: none;
}
@keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
    }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
    }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}


#follower {
  position: absolute;
  top: 50%;
  left: 50%;
    #circle1 {
      position: absolute;
      animation: pulse 2s infinite;
      background: white;
      border-radius: 50%;
      height: 0em;
      width: 0em;
      margin-top: 0em;
      margin-left: 0em;
    }
    #circle2 {
      position: absolute;
      animation: pulse 4s infinite;
      background: rgba(200,0,0,0.8);
      border-radius: 50%;
      height: 0em;
      width: 0em;
      margin-top: 0em;
      margin-left: 0em;
    }
  }

</style>