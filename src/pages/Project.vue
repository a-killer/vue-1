<template>
  <div class="project page">
    
    <div class="content">

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
  name: 'Project',
  beforeCreate: function() {
      document.body.className = 'project';
  }
}
</script>