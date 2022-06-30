import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { PERSONAS } from './endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personas: [],
  },
  actions: {
  
    // personas
    async getPersonas({ commit }) {
      try {
        let { data: personas } = await axios(PERSONAS);
        commit('guardarPersonas', personas);
      } catch (error) {
        console.error(error);
      }
    },
    async agregarPersona({ commit }, personaNueva) {
      try {
        let { data: persona } = await axios.post(PERSONAS, personaNueva, {
          'content-type': 'application/json',
        });
        console.log('AXIOS POST persona', persona);

        commit('guardarPersona', persona);
      } catch (error) {
        console.error('Error en pospersona()', error.message);
      }
    },

    async eliminarPersona({ commit }, id) {
      try {
        let { data: persona } = await axios.delete(PERSONAS + id);
        console.log('AXIOS DELETE persona', persona);
        commit('eliminarPersona', persona);
      } catch (error) {
        console.error('Error en deletePersona()', error.message);
      }
    },
  },
  mutations: {

    // personas
    guardarPersonas(state, personas) {
      state.personas = personas;
    },
    guardarPersona(state, personaNueva) {
      state.personas.push(personaNueva);
    },
    eliminarPersona(state, persona) {
      let index = state.personas.findIndex((p) => p.id == persona.id);
      if (index == -1) throw new Error('persona no encontrado');
      state.personas.splice(index, 1);
    },
  },
});
