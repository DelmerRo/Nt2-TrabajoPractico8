<template >

  <section class="src-components-agregar-persona">
  <div class="jumbotron">
      <h2>Agregar Persona</h2>
      <p><pre>{{saludar()}}</pre></p>
      <hr>
      <hr>
      <br>
       <vue-form :state="formState" @submit.prevent="agregarPersonaNueva()">
    <!-- --------------------- -->
      <!--     Campo nombre      -->
      <!-- --------------------- -->
      <validate tag="div">
        <!-- Elemento de entrada -->
        <div clase="item"><label for="nombre">Nombre: </label>
        <input 
         style="width : 450px
        heigth= 50px"
          type="text"
          id="nombre"
          name="nombre" 
          class="finp"
          autocomplete="off"
          v-model.trim="formData.nombre" 
          required
          :minlength="nombreMinLength"
          :maxlength="nombreMaxLength"
          no-espacios
          
        />
        
      </div>

        <!-- Mensajes de validación -->
        <field-messages name="nombre" show="$dirty">
          <!-- <div class="alert alert-success mt-1">Success!</div> -->
          <div slot="required" class="alert alert-danger mt-">Campo requerido</div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo requiere como mínimo {{nombreMinLength}} caracteres.
          </div >
           <div v-if="formData.nombre.length>15"  slot="maxlength" class="alert alert-danger mt-1">
           Este campo requiere como maximo  caracteres.
          </div>
          <div slot="no-espacios" class="alert alert-danger mt-1">
            No se permiten espacios intermedios en este campo.
          </div>
      
        </field-messages>
      </validate>
    

 <!-- --------------------- -->
      <!--      Campo edad       -->
      <!-- --------------------- -->
      <validate tag="div">
        <!-- Elemento de entrada -->
        <div clase="item"><label for="nombre">Edad: </label>
        <input 
         style="width : 50px
        heigth = 50px"
          type="number"
          id="edad"
          name="edad" 
          class="finp"
          autocomplete="off"
          v-model.number="formData.edad" 
          required 
          :min="edadMin"
          :max="edadMax"
        />
        </div>
         <!-- Mensajes de validación -->
        <field-messages name="edad" show="$dirty">
          <!-- <div class="alert alert-success mt-1">Success!</div> -->
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">
            La edad mínima permitida es de {{edadMin}} años.
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            La edad máxima permitida es de {{edadMax}} años.
          </div>
        </field-messages>
      </validate>
      
   <!-- --------------------- -->
      <!--    Campo email     -->
      <!-- --------------------- -->
      <validate tag="div">
        <!-- Elemento de entrada -->
        <div clase="item"><label for="nombre"> Email: </label>
        <input 
         style="width : 450px
          heigth = 50px"
          type="email"
          id="email"
          name="email" 
          class="finp"
          autocomplete="off"
          v-model.trim="formData.email" 
          required 
        />
      </div>
        <!-- Mensajes de validación -->
        <field-messages name="email" show="$dirty">
          <!-- <div class="alert alert-success mt-1">Success!</div> -->
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
        </field-messages>
      </validate>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Agregar</button>
      </vue-form>      
<hr>
</div>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-agregar-persona',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        nombreMaxLength:15,
        edadMin: 18,
         estado: false,
        edadMax: 120,
      }
    },
    methods: {
        
   getInicialData() {
        return {
          nombre: '',
          edad: '',
          email: ''
        }
      },

    agregarPersonaNueva() {
      let personaNueva = { ...this.formData };
        this.agregarPersona(personaNueva);
      this.formData = this.getInicialData();
      this.formState._reset();  
    },

    },
    computed: {
     calcularHistorialPorNombre() {
       
        let total = this.personas.length;
        return {

          totalEnGeneral: total,
          
        };
    },
    }
}


</script>

<style scoped lang="css">
  .src-components-agregar-persona {

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
input{
border-radius: 5px;
}
</style>
