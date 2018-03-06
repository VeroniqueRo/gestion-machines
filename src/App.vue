<template>
  <div id="app">
    <img src="/src/assets/logo.png">
    <invitation message='Que voulez-vous faire ?'></invitation>

    <button class="btn btn-success" v-on:click="onMachinesListClick">Consulter la liste des machines</button>
    <button class="btn btn-success" v-on:click="onMapClick">Voir la carte</button>
    <div v-for="machine in machines" v-bind:key="machine.id">{{machine.name}}</div>
    <liste></liste>
    <carte></carte>
  </div>
</template>

<script>

export default {
  name: 'app',
  data : function () {
    return {
      msg: 'Que voulez-vous faire ?',
    }
  },

  methods:{
    onMachinesListClick : function() {
      window.alert("Vous avez appuyé sur la liste des machines")
    },
    onMapClick : function () {
      window.alert("Vous avez appuyé sur la carte")
    }
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 20%;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
