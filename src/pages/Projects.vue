<template>
  <div class="projects page">
    
    <div class="content">

           <div class="section">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-10">

                            <div class="columns is-centered">
                                <div class="column is-narrow is-4">
                                    <figure class="image is-3by2">
                                        <img src="https://bulma.io/images/placeholders/256x256.png">
                                    </figure>
                                </div>
                                <div class="column is-narrow is-4">
                                    <figure class="image is-3by2">
                                        <img src="https://bulma.io/images/placeholders/256x256.png">
                                    </figure>
                                </div>
                                <div class="column is-narrow is-4">
                                    <figure class="image is-3by2">
                                        <img src="https://bulma.io/images/placeholders/256x256.png">
                                    </figure>
                                </div>
                            </div> 


                        </div>
                    </div>
                </div>
            </div> 

        </div>

    </div>    
</template>

<script>
export default {
  name: 'Projects',
  beforeCreate: function() {
      document.body.className = 'projects';
  }
}
</script>