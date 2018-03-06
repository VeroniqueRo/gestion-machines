<template>
  
  <div>
    <h1>{{ name }}</h1>
  </div>

</template>

<script>
export default {
  name: 'machine',
  data : function () {
    return {
      name: 'Machine what else ?',
      status: false,
      checkedAt: new Date(),
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

