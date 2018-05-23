<template>
  <div class="home page">
    
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
                        <img src="../assets/images/1.jpg" height="100" class="hector size-100">
                    </div>
                    <div class="column is-narrow">
                        <img src="../assets/images/2.jpg" height="100" class="hector size-100">
                    </div>
                    <div class="column is-narrow">
                        <img src="../assets/images/3.jpg" height="100" class="hector size-100">
                    </div>
                    <div class="column is-narrow">
                        <img src="../assets/images/4.jpg" height="100" class="hector size-100">
                    </div>
                </div>
             </div>
        </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeCreate: function() {
      document.body.className = 'home';
  },
  data () {
    return {
      msg: 'Besides One'
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
  color: $c-primary;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
