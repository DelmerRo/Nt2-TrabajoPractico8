<template lang="html">

  <section class="src-components-listar-persona">
     <div class="jumbotron">
      <h2>Listado de Personas</h2>
      <hr />
      <br />

      <div v-if="this.mostrarPersonas.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>NOMBRE</th>
            <th>EDAD</th>
            <th>EMAIL</th>
             <th>ELIMINAR</th>
          </tr>

          <tr
            v-for="(persona, index) in this.mostrarPersonas"
            :key="index"
          >
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.edad }}</td>
            <td>{{ persona.email }}</td>
              <td> <button
                class="btn btn-danger"
                @click="eliminar(persona.id)"
              >
                Eliminar</button
              ></td>
          </tr>
          
        </table>
         <!-- Botón de envío -->
        
      </div>
      <h3 v-else class="alert alert-info">No hay personas Registrados</h3>
    </div>
    
    <span alert alert-info >Total de registros: {{ calcularHistorialPorNombre.totalEnGeneral }}</span
    >
      <hr>
      <br>
     
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-listar-persona',
    props: [],
    mounted () {
      this.obtenerPersonas();
    },
    data () {
      return {
     estado: false,
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      cantPacientes: 0,
      }
    },
    methods: {
     getInicialData() {
      return {
        nombre: null,
      };
    },

  async eliminar(id){
      this.eliminarPersona(id)
      this.obtenerPersonas()
    },

    },
    computed: {
        calcularHistorialPorNombre() {
        let total = this.mostrarPersonas.length;
        return {
          totalEnGeneral: total,
        };
    },
    }
}


</script>

<style scoped lang="css">
  .src-components-listar-persona {

  }
      .jumbotron {
    background-color:cadetblue;
    color: white;
}

hr {
    background-color: #bbb;
}  

pre {
  color: white;
}

.item { text-align: right; }
.finp { width: 60%; }

label{
display: inline-block;
width: 80px;
}

td{
color:black;
background-color:gainsboro;
}
</style>
