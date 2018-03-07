<template>

    <div>
        <h1>{{ message }}</h1>
        <machine></machine>
    </div>
    
</template>

<script>

export default {
    name: 'liste',
    props:['name','status','checkedAt'],

    data () {
        return {
            message : 'Liste des machines',
            id: 1,
            name: 'What else ?',
            status: false,
            checkedAt: new Date().toLocaleString(),
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
  color: #FE9A2E;
  text-align: center;
}

</style>