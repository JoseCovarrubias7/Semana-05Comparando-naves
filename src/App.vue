<template>
<center >
  <div class="container-xxl">
  <header class="head-menu mb-4 border-bottom ">
    <div class="logo-nav d-flex justify-content-end">
    <div><img src="./assets/Dino-Pasteleria.png" href="#" class="active" alt="Logo Estudio Aclif" height="960" width="640"></div>
      <div class="txt-nav">
            <nav align="center" class="container sticky-top  ">
                <ul>
                    <router-link to="/" class="navbar-brand " href="#">Inicio</router-link>
                    <router-link to="/sabores" class="navbar-brand" href="#">Sabores</router-link>
                    <router-link to="/adornos" class="navbar-brand" href="#">Adornos</router-link>
                    <router-link to="/pastelero" class="navbar-brand" href="#">Pastelero</router-link>

                </ul>
            </nav>
      </div>
    </div>
</header>

</div>

</center>

<router-view/>

<Pie/>
</template>

<script>



import Pie from "./components/Pie.vue";

export default {
  name: 'HomeView',
  components: {
    Pie,
  
  }
 
}

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.div-1{
  display: flex;
  justify-content: flex-start;

}
router-link{
  padding-right: 25px;
  margin: 25px;
}

.container-2{
  width: 96%;
  max-width: 960px; 
  margin: 0 auto;
}

img{
  width: 250px;
  height: auto;
}

nav {
  padding: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-end;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 25px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.head-menu{
    color: #fff;
    height: 150px;
    width:100%
 }
.logo{
    letter-spacing: 3px;
    font-size: 40px;
    color: #fff;
    align-items: center;
   
}
.logo-nav{
    display: flex;
    color: white;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: baseline;

  }  
.txt-nav{
    flex-grow: 1;
}

.txt-nav ul{
    display: flex;
    color: white;
    list-style: none;
    justify-content: space-around;
}
.txt-nav  a{
    color: rgb(226, 13, 13);
    text-decoration: none
    
}

</style>
