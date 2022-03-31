<template>
<h1 class="h1"> Nuestros Sabores</h1>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/s-Chocolate.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s1}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios.p1}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/s-Fresa.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s2}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios.p2}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/s-Limon.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s3}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios.p3}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/s-Vainilla.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s4}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios.p4}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/s-Coco.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s5}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios.p5}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/s-Oreo.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.sabores.s6}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios.p6}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

<h1 class="h1">Adornos</h1>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/a-BetunC.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a1}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios_adornos.pa1}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/a-BetunF.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a2}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios_adornos.pa23}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/a-Fondant1.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a3}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios_adornos.pa23}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>

<div class="container d-flex justify-content-center">
    <div class="row">
  <div class="col-sm">
    <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/a-BetunQ.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a4}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios_adornos.pa4}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/a-Salsa.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a5}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios_adornos.pa5}}</a>
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" style="height:226px;"  src="../assets/a-BetunM.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{$store.state.adornos.a6}}</h5>
        <a href="#" class="btn btn-primary disabled">{{$store.state.precios_adornos.pa67}}</a>
      </div>
    </div>
  </div>
    </div>

 
</div>
</template>