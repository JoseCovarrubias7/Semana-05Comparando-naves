<template>
<h1 class="h1"> Inventario Sabores</h1>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Chocolate.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s1}}</h5>
        <a href="#" class="btn btn-primary disabled" >{{$store.state.cantidadS.c1}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Fresa.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s2}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c2}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Limon.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s3}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c3}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Vainilla.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s4}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c4}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Coco.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s5}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c5}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Oreo.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s6}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c6}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Tres.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s7}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c7}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Zanahoria.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s8}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c8}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/i-Platano.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s9}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadS.c9}}</a>
      </div>
    </div>
  </div>
    </div>
    
</div>

<div class="container">
    <div class="row row-cols-5 border-top"></div>
</div>

<h1 class="h1">Inventario Adornos</h1>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-BetunC.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a1}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca1}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-BetunF.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a2}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca2}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-Fondant1.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a3}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca3}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-BetunQ.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a4}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca4}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-Salsa.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a5}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca5}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-BetunM.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a6}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca6}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-Fondant2.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a7}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca7}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-Fondant3.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a8}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca8}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;" src="../assets/a-BetunV.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a9}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.cantidadA.ca9}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

</template>
