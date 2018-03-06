// Imports
import Vue from 'vue'
import App from './App.vue'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import PageTest from './Test.vue'

// Import pour page exemple
import Affichage from './Affichage-test.vue'

// Import pour utilisation des ToggleButton
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

// Exemple de component avec props
Vue.component('invitation', {
  props: ['message'],
  template:"<h1>{{message}}</h1>"
})

// Liste des components 
Vue.component('liste', MachinesList);
Vue.component('carte', MachinesMap);


new Vue({
  el: '#app',
  render: h => h(App)
})

