import Vue from 'vue'
import VueRouter from 'vue-router'

import AgregarPersona from './components/AgregarPersona.vue'
import ListarPersona from './components/ListarPersona.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
     
        { path: '/agregarpersona', component: AgregarPersona },
        { path: '/listarPersona', component: ListarPersona },
    ]
})