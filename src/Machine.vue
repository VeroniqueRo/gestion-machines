<template>

  <div>

    <h1>Machine {{ name }}</h1>
    <h2 v-if="status" class="statusOK">Machine OK</h2>
    <h2 v-else class="statusKO">Maintenance à prévoir</h2>
    <h4>Dernière mise à jour le {{ checkedAt }}</h4>
    <h4>Position : {{ position }}</h4>

  </div>

</template>

<script>
  export default {
    name: 'machine',
    props: ['name', 'status', 'checkedAt', 'position'],

  }

</script>

<style scoped>
  h1,
  h2 {
    font-weight: bold;
    text-align: center;
  }

  .statusOK {
    color: #04B404;
  }

  .statusKO {
    color: #FE2E2E;
  }

  div {
    width: 90%;
    margin: auto;
    border: 2px solid black;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  div.hover {
    background-color: #eeeeea;
  }

</style>
