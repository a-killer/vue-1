<template>
  <div class="about page">

    <div class="content">
      
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
                <div class="column is-narrow text-center">
                  <h1>Hidden {{ msg }}</h1>  
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

    </div>  

  </div>
</template>

<script>
export default {
  name: 'About',
  beforeCreate: function() {
      document.body.className = 'about';
  },
  data () {
    return {
      msg: 'Hidden Agency'
    }
  }
}
</script>
