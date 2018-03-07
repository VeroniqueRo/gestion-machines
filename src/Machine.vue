<template>
  
  <div>
    
    <h1>Machine {{ name }}</h1>
    <h2 v-if="status">Status OK</h2>
    <h2 v-else>Maintenance à faire</h2>
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

</style>

