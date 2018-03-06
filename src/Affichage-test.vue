<template>
  <div id="affichage">
    
    <input type="text" v-model.lazy="msg" />
    <h1>{{msg}}</h1>

  </div>
</template>

<script>
export default {
  name: 'affichage',
  data : function () {
    return {
      msg: '',
    }
  }
}
</script>

<style scoped>

#affichage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: bold;
  color: #42b983;
}

</style>
