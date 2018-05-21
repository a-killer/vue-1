<template>
  <div class="about page">
    <h1>This is an about page {{ msg }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequatur facilis consequuntur, voluptatibus, voluptas aut mollitia aspernatur illo alias neque architecto et dicta necessitatibus nobis nisi ipsum consectetur eius quam!</p>
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
