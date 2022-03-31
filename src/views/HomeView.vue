<template>
  <div class="home">
    
    <h1 class=" container border-bottom">Bienvenidos</h1>
    <Index/>
    <Formulario/>

  </div>
</template>

<script>


import Index from "../components/Index.vue";

import Formulario from "../components/Formulario.vue";


export default {
  name: 'HomeView',
  components: {
    Index,
    Formulario,
  
  }

  
}


</script>


<style>


div{
  margin-bottom: 10px;
}


.botones button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}



</style>
