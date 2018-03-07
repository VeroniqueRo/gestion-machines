<template>
  <div id="app">

    <img src="/src/assets/logo.png">

    <invitation message='Que voulez-vous faire ?'></invitation>



    <!--  Première utilisation
    <button class="btn btn-success" v-on:click="onMachinesListClick">Consulter la liste des machines</button>
    <button class="btn btn-success" v-on:click="onMapClick">Voir la carte</button>
    <liste></liste>
    <carte></carte> -->

    <!-- utilise le composant router-link pour la navigation. -->
    <!-- spécifie le lien en le passant à la prop `to` -->
    <!-- `<router-link>` sera rendu en tag `<a>` par défaut -->
    <router-link to="/machines"><button class="btn btn-info" v-on:click="onMachinesListClick">Consulter la liste des machines</button></router-link>
    <router-link to="/map"><button class="btn btn-info" v-on:click="onMapClick">Voir la carte</button></router-link>
    <router-link to="/machine"><button class="btn btn-info" v-on:click="onMachinesListClick">Voir la machine</button></router-link>
    <router-view></router-view>
    
    
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

<!-- style css propre au component-->
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

.router-link-active {
  color: #42b983;
}

</style>
