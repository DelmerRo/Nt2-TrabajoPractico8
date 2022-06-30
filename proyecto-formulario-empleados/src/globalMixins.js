import Vue from 'vue';

const miMixinGlobal = {
  methods: {
    saludar() {
      return 'Hola Bienvenido!';
    },

    // Pacientes de Veterinaria
    obtenerPersonas() {
      this.$store.dispatch('getPersonas');
    },
    agregarPersona(nuevoPersona) {
      this.$store.dispatch('agregarPersona', nuevoPersona);
    },
    eliminarPersona(id) {
      this.$store.dispatch('eliminarPersona', id);
    },
  },
  computed: {
 
    mostrarPersonas() {
      return this.$store.state.personas;
    },
  },
};

Vue.mixin(miMixinGlobal);
