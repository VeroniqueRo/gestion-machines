<template>  

    <div>
        <h1>{{ message }}</h1>
        <div id="mapdiv">
            <gmap-map id="map"
            :center="{lat:48, lng:2}"
            :zoom="5.45"
            >
            </gmap-map>
        </div>
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
  color: #FE9A2E;
  text-align: center;
}

#mapdiv {
    width: 100%; 
    height: 70%;
    position:fixed;
    text-align:center;
    border-radius: 10px;
}

#map {
    width: 80%;
    height: 80%;
    margin: auto;
    display:inline-block;
    border: 4px solid orange;
    border-radius: 10px;

}

</style>