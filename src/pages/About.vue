<template>
  <div class="about page">

    <div class="content">

      <div class="child-page box flex">
      
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 is-narrow">
              <h1>{{ msg }}</h1>
              <p>HIDDEN IS A NEXT GENERATION CREATIVE AGENCY, PRODUCING ENGAGING EXPERIENCES, SUPPORTING GRASS-ROOT TALENT, BUILDING BRIDGES ACROSS DISCIPLINES WITH AN EAR-TO-THE-GROUND MENTALITY AND ATTITUDE.</p>

              <p>WE ELEVATE BRANDS, ASSISTING THEM IN STAYING CULTURALLY RELEVANT AND CONNECTING THEM WITH THE CONSUMERS OF TOMORROW.</p>

              <p>CONNECTED, AGILE, IDEAS LEAD AND RESULTS DRIVEN, WE ARE RE-DEFINING VISUAL CULTURE AND CREATIVE STRATEGY FROM THE GROUND UP.</p>

              <p>FORMED FROM A COLLECTIVE OF THINKERS AND DOERS WITH OVER FIFTEEN YEARS OF CREATIVE KNOWLEDGE PROVIDING, STRATEGY, ART DIRECTION, DESIGN, DIGITAL, PRODUCTION AND CREATIVE SERVICES FOR CULTURE, FASHION AND LIFESTYLE INDUSTRIES.</p>

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
  name: 'About',
  beforeCreate: function() {
      document.body.className = 'light';
  },
  data () {
    return {
      msg: 'Creative Agency * Next Generation * Bandits'
    }
  }
}
</script>

