 <template>

  <div class="home">
    
    <Pastelero/>
    <Pedidos/>

  </div>
</template>

<script>

import Pastelero from "../components/Pastelero.vue";

import Pedidos from "../components/Pedidos.vue";




export default {
  name: 'HomeView',
  components: {
    Pastelero,
    Pedidos
  
  }
 
}

</script>