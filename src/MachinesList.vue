<template>  

    <h1>{{ message }}</h1>

</template>
  
<script>

export default {
    name: 'liste',
    data(){
        return {
            message : 'Liste des machines'
        };        
    },
    methods:{

    }
}
</script>

// style css propre au component
<style scoped>
#affichage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 50%;
}


h1, h2 {
  font-weight: bold;
  color: #42b983;
  text-align: center;
}

</style>