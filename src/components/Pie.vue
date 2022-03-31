<template>
  
<div class="container">
  <footer class="row row-cols-5 py-5  border-top">
    <div class="col">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <img src="../assets/Dino-Pasteleria.png" alt="" class="bi me-2" width="40" height="32">
      </a>
    </div>

    <div class="col">

    </div>

    <div class="col">
      <h5>Menu</h5>
      <ul class="nav flex-column">
        <router-link to="/" class="nav-item mb-2"  href="#">INICIO</router-link>
        <router-link to="/sabores" class="nav-item mb-2" href="#">SABORES</router-link>
        <router-link to="/adornos" class="nav-item mb-2" href="#">ACCESORIOS</router-link>
      </ul>
    </div>

    <div class="col">
      <h5>Siguenos</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FACEBOOK</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">TWITTER</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">INSTAGRAM</a></li>
      </ul>
    </div>

    <div class="col">
      <h5>Informacion</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a  class="nav-link p-0 text-muted">Telefono: (555)555-00</a></li>
        <li class="nav-item mb-2"><a  class="nav-link p-0 text-muted">Direccion: 5 de Febrero 25 Cuauhtemoc, Centro 06000 Ciudad de Mexico</a></li>
        <li class="nav-item mb-2"><a  class="nav-link p-0 text-muted">Horario de atencion:</a></li>
        <li class="nav-item mb-2"><a  class="nav-link p-0 text-muted">Lunes a viernes 8am-9pm</a></li>
      </ul>
    </div>
  </footer>
</div>


</template>