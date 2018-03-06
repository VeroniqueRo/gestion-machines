import Vue from 'vue'
import App from './App.vue'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import PageTest from './Test.vue'

import Affichage from './Affichage-test.vue'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)


Vue.component('invitation', {
  props: ['message'],
  template:"<h1>{{message}}</h1>"
})

Vue.component('liste', MachinesList);
Vue.component('carte', MachinesMap);

new Vue({
  el: '#app',
  render: h => h(App)
})

