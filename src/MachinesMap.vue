<template>  

    <h1>{{ message }}</h1>

</template>  
<script>

export default {
    name: 'carte',
    data(){
        return {
            message : 'Carte des machines'
        };        
    },
    methods:{

    }
}
</script>

// css de la page

<style scoped>
#affichage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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