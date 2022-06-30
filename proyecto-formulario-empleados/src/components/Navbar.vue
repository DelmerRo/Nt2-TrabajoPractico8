<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="{ name: 'Dashboard' }">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Ruta al componente Add People -->
          <li class="nav-item">
            <router-link to="/agregarpersona">
              <a class="nav-link" href="#">Agregar Persona</a>
            </router-link>
          </li>

          <!-- Ruta al componente Listar Persona -->
          <li class="nav-item">
            <router-link to="/listarpersona">
              <a class="nav-link" href="#">Listar Persona</a>
            </router-link>
          </li>

       
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>
