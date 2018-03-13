<template>

  <div>
    <h1>{{ message }}</h1>
    <div id="mapdiv">

      <gmap-map id="map" :center="{lat:48, lng:2}" :zoom="5.45">
        <gmap-marker v-for="marker in markers" v-bind:key="marker.id" v-bind:name="marker.name" v-bind:position="{lat:Number(marker.latitude),lng:Number(marker.longitude)}">
          <!-- v-bind:key est égal à :key -->
        </gmap-marker>
      </gmap-map>
    </div>
  </div>

</template>

<script>
  // Import de la librairie Axios
  import axios from 'axios'

  export default {
    name: 'carte',

    data() {
      return {
        message: 'Carte des machines',

        markers: [],
        loading: true,
        error: null,

        // markers: [{

        //     id:1,
        //     name:"machine 1",
        //     latitude: 45.0,
        //     longitude: 5.0,

        // }, {

        //     id:2,
        //     name:"machine 2",
        //     latitude: 47.0,
        //     longitude: 6.0,

        // },{

        //     id:3,
        //     name:"machine 3",
        //     latitude: 49.0,
        //     longitude: 4.0,


        // }]
      };
    },

    created() {
      axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.markers = response.data
        })
        .catch(e => {
          this.error.push(e)
        });
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

  #mapdiv {
    width: 100%;
    height: 70%;
    position: fixed;
    text-align: center;
    border-radius: 10px;
  }

  #map {
    width: 80%;
    height: 80%;
    margin: auto;
    display: inline-block;
    border: 4px solid orange;
    border-radius: 10px;

  }

</style>
