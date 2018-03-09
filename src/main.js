// Imports des components
import Vue from 'vue'
import App from './App.vue'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import Machine from './Machine.vue'

// Import de la clé pour GoogleMap
import KeyMap from './key.js'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: KeyMap.key,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

// Import pour page exemple
import Affichage from './Affichage-test.vue'

// Import pour l'utilisation du routeur
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// Import pour utilisation des ToggleButton
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

// Déclaration des routes
const routes = [
  { path:'/machines', component: MachinesList},
  { path:'/map', component: MachinesMap},
  { path:'/machine', component: Machine},
]

// Création de l'instance du routeur et passez l'option `routes`.
const router = new VueRouter ({
  routes
});


// Exemple de component avec props
Vue.component('invitation', {
  props: ['message'],
  template:"<h3>{{message}}</h3>"
});

// Components utilisés de manière globale
Vue.component('liste', MachinesList);
Vue.component('carte', MachinesMap);
Vue.component('machine', Machine);


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});c

