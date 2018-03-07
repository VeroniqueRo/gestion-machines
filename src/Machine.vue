<template>
  
  <div>
    
    <h1>Machine {{ name }}</h1>
    <h2 v-if="status" class="statusOK">Machine OK</h2>
    <h2 v-else class="statusKO">Maintenance à prévoir</h2>
    <h4>Dernière mise à jour : le {{ checkedAt }}</h4>
  </div>

</template>

<script>
export default {
  name: 'machine',
  data : function () {
    return {
      id: 1,
      name: 'What else ?',
      status: false,
      checkedAt: new Date().toLocaleString(),
      }
  }
    
}    
</script>

<style>

h1, h2 {
  font-weight: bold;
  text-align: center;
}

.statusOK{
  color: #04B404;
}

.statusKO{
  color: #FE2E2E;
}

</style>

