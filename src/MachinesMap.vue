<template>  

    <div>
        <h1>{{ message }}</h1>
    </div>

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

<!-- style css propre au component-->
<style scoped>

h1, h2 {
  font-weight: bold;
  color: #42b983;
  text-align: center;
}

</style>