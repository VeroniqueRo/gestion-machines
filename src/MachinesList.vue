<template>

    <div>
        <h1>{{ message }}</h1>
        <machine v-for="machine in machines"
            v-bind:key="machine.id"
            v-bind:name="machine.name"
            v-bind:status="machine.status"
            v-bind:checkedAt="machine.checkedAt"
            >
        </machine>
    </div>
    
</template>

<script>

export default {
    name: 'liste',

    data () {
        return {
            message : 'Liste des machines',
        
            machines: [{
                id: 1,
                name: 'What else ?',
                position: {lat: 45.0, lng: 5.0},
                status: true,
                checkedAt: new Date().toLocaleString(),

            },{
                id: 2,
                name: 'Broken',
                position: {lat: 47.0, lng: 6.0},
                status: false,
                checkedAt: new Date().toLocaleString(),
            },{
                id: 3,
                name: 'Coffee Machine',
                position: {lat: 49.0, lng: 4.0},
                status: true,
                checkedAt: new Date().toLocaleString(),
            }]
         }  
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