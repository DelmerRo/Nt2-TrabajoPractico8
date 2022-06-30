<template>
  <div id="app">
   <div class="jumbotron">
      <h1><center>FORMULARIO</center></h1>
      <Navbar/>
      <router-view></router-view>
</div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'



export default {
  name: 'App',
  components: {
    Navbar
}
}
</script>

<style>

.jumbotron {
    background-color: steelblue;

  }
  h1{
   color: aliceblue;
  background-color: steelblue;
  }

</style>
