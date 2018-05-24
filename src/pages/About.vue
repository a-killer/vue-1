<template>
  <div class="about page">

    <div class="content">
      
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
                <div class="column is-narrow text-center">
                  <h1>{{ msg }}</h1>  
                  <p>Sapiente consequatur facilis consequuntur, voluptatibus, voluptas aut mollitia aspernatur.</p>
                </div>
              </div>    
        </div>
        </div>

       <div class="section">
          <div class="container">
              <div class="columns is-centered">
                  <div class="column is-narrow">
                      <img src="../assets/images/6.jpg" height="100" class="hector size-100">
                  </div>
                  <div class="column is-narrow">
                      <img src="../assets/images/7.jpg" height="100" class="hector size-100">
                  </div>
                  <div class="column is-narrow">
                      <img src="../assets/images/8.png" height="100" class="hector size-100">
                  </div>
                  <div class="column is-narrow">
                      <img src="../assets/images/9.png" height="100" class="hector size-100">
                  </div>
              </div>
           </div>
      </div>

      <div class="section">
         <div class="container">
            <button @click="go">Click Here to Animate</button>
            <div class="block" ref="square"></div>
         </div>
      </div>    

    </div>  

  </div>
</template>

<script>
import { translate } from "../animate";
export default {
  name: 'About',
  beforeCreate: function() {
      document.body.className = 'about';
  },
  data () {
    return {
      msg: 'Besides One'
    }
  },
  methods: {
    go() {
      translate(this.$refs.square);
    }
  }
}
</script>


<style scoped>
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
