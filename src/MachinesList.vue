<template>

  <div>
    <h1>{{ message }}</h1>
    <div class="alert alert-success" v-show="loading">En cours de téléchargement</div>
    <div class="alert alert-warning" v-show="error && error.length">Erreur de téléchargement</div>
    <machine v-for="machine in machines" v-bind:key="machine.id" v-bind:name="machine.name" v-bind:status="machine.status" v-bind:checkedAt="machine.checkedAt">
    </machine>
  </div>

</template>

<script>
  // Import de la librairie Axios
  import axios from 'axios'

  export default {
    name: 'liste',

    data() {
      return {
        message: 'Liste des machines',

        machines: [], // au début la liste des machines est vide
        loading: true,
        error: [],

        // Data utilisées au début :
        //
        // machines: [{
        //     id: 1,
        //     name: 'What else ?',
        //     position: {lat: 45.0, lng: 5.0},
        //     status: true,
        //     checkedAt: new Date().toLocaleString(),

        // },{
        //     id: 2,
        //     name: 'Broken',
        //     position: {lat: 47.0, lng: 6.0},
        //     status: false,
        //     checkedAt: new Date().toLocaleString(),
        // },{
        //     id: 3,
        //     name: 'Coffee Machine',
        //     position: {lat: 49.0, lng: 4.0},
        //     status: true,
        //     checkedAt: new Date().toLocaleString(),
        // }]

      }
    },

    created() {

      console.log("Réponse 1");

      axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)

        .then(response => {
          // JSON responses are automatically parsed.

          console.log("Réponse 2");

          this.loading = false
          this.machines = response.data
        })

        .catch(e => {
          this.loading = false
          this.error.push(e)
        });

      console.log("Réponse 3");
    }
  }

</script>

<!-- style css propre au component-->
<style scoped>
  h1,
  h2 {
    font-weight: bold;
    color: #FE9A2E;
    text-align: center;
  }

</style>
