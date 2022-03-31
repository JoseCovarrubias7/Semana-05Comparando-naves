<template>
<body>
  

<main>
  <h1>Formulario Pedido</h1>
    <form id="survey-form" action="">
    <div class="items">
        <label id="name-label" for="name" >Nombre</label>
        <input id="name" type="text" placeholder="Escribe tu nombre" required v-model=$store.state.data.nombre>
    </div>

    <div class="items">
        <label id="name-label" for="name">Apellidos</label>
        <input id="name" type="text" placeholder="Escribe tus apellidos" required>
    </div>
    
    <div class="items">       
        <label id="email-label" for="email">Email</label>
        <input id="email" type="email" placeholder="Escribe tu email" required>
    </div>

    <div class="items"> 
        <label id="number-label" for="number">Telefono</label>
        <input id="number" type="number" placeholder="Telefono" required min="10" max="10">
    </div>

    <div class="items flex">
            <p>Selecciona uno o varios Sabores</p>
            <label>
                <input type="checkbox" name="enfermedad-2" value="Diabetes">{{$store.state.sabores.s1}}<br>
            </label>
            <label>
                <input type="checkbox" name="enfermedad-2" value="Hipertension">{{$store.state.sabores.s2}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Asma">{{$store.state.sabores.s3}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.sabores.s4}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.sabores.s5}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.sabores.s6}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.sabores.s7}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.sabores.s8}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.sabores.s9}}<br>
            </label>

            <p>Selecciona uno o varios Adornos</p>
            <label>
                <input type="checkbox" name="enfermedad-2" value="Diabetes">{{$store.state.adornos.a1}}<br>
            </label>
            <label>
                <input type="checkbox" name="enfermedad-2" value="Hipertension">{{$store.state.adornos.a2}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Asma">{{$store.state.adornos.a3}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.adornos.a4}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.adornos.a5}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.adornos.a6}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.adornos.a7}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.adornos.a8}}<br>
            </label>
            <label>
                <input type="checkbox" name="endermedad-2" value="Cancer">{{$store.state.adornos.a9}}<br>
            </label>

            
        </div>

        <div class="items">
                <p>Describe el pastel para tu pedido</p>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Escribe algo aquí."></textarea>
            </div>  

        <div class="items">
        <button class="btn-flotante-2" id="submit" type="submit" @click=$store.getters.agregarTarea>Enviar</button>
        </div> 
</form>
</main>
</body>
</template>

<script>
export default {
  name: 'ColorCode',
  computed: {
    colorChange: {
      get(){
        return this.$store.state.color;
      },
      set(color){
        this.$store.dispatch("colorChange",color);
      }
    }
  },
}
</script>

<style scoped>
/* <-----Formulario-------> */


:root {
    --texto-uno: #3352c8 ;
    --texto-dos: #fff;
    --fondo-tres: #f5f6fb;
    --fondo-cuatro: #2c4bc1;
}

body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: var(--texto-uno);
    background-color: #f5f6fb;
}

body::before {
   background-color: #f5f6fb;
}

main, header {
    width: 750px;
    height: auto;
    margin: auto;

}

h1 {
    font-size: 32px;
    text-align: center;
}

p {
    font-size: 20px;
    text-align: center;
}

form {
    width: 100%;
    height: auto;
    background-color: var(--fondo-tres);
    padding: 20px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
}

form p {
    display: flex;
}

label {
    display: block;
    font-size: 20px;
}

.items {
    width: 92%;
    margin: auto;
    padding-top: 20px;
}



#name, #email, #number {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    font-size: 14px;
    padding: 5px;
}

::placeholder{
    padding: 10px;
    font-family: 'Poppins', sans-serif;
}

#dropdown {
    width: 102%;
    height: 50px;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: 14px;
}

[type="checkbox"], [type="radio"] {
  height: 25px;
  width: 25px;
  margin: 0px 10px 20px 0px;
  font-size: 20px;
  position: relative;
  top: 5px;

}

textarea {
    width: 100%;
}

.btn-flotante-2 {
    background-color: var(--fondo-cuatro);
    width: 100%;
    height: 50px;
    color: var(--texto-dos);
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.btn-flotante-2:hover {
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
	transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
 	 .btn-flotante-2 {
		font-size: 14px;
		padding: 12px 20px;
		bottom: 20px;
		right: 20px;
	}
} 


input[type=date] {
    height: 35px;
    margin: 0 auto;
    width: 100%;
    font-family: arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #959595;
    outline: none;
    border: 0;
    border-radius: 3px;
    padding: 0 3px;
    color: #3352c8;
  }
  

  * {
    box-sizing: border-box;
    
}

body {
    font-family: Shippori Antique B1 ,Rubik;
}

.header-1 {
    color: #3950c0;
    background-color: #e9f1fc;
    display: flex;
    justify-content:flex-end;
    width: 100%;
    position: fixed;
    padding-bottom: -100px;
    z-index: 99;
}





.div-13{
    display: flex;
    justify-content: flex-end;
    height: 150px;
    width: 150px;
    padding-left: 15%;

}

.div-14{
    display: flex;
    justify-content: flex-end;
    height: 150px;
    width: 150px;
    padding-left: 15%;

}

.h4-1{
    padding-left: 15%;
    padding-top:35px;
    
}


.div-1{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 85px;
    
}

.div-2 {
    display: flex;
    justify-content: flex-start;
    background-color: #fff;
    width: 100.5%;
    padding-left: 50px;
    
}


a{
    font-size: 25px;
    padding: 10px;
    color: #838e9f;
    text-decoration: none;
    
}

.a-4{
    font-size: 20px;
    padding: 10px;
    color: #757c8c;
}

li{
    font-size: 25px;
    padding: 10px;
    color: #838e9f;
}

.li-4{
    font-size: 15px;
    padding-left:25px;
    color: #838e9f;
    width: 300px;

}



.div-3{
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
} 

.div-16{
    background-color: #eff3ff;
    width: 100%;
    display: flex;
    justify-content: center;
} 

.div-17{
    background-color: #eff3ff;
    width: 25%;
    display: flex;
    justify-content: center;
} 

.div-5{
    white-space: nowrap;
    display: flex;
    justify-content:center;
    align-items:center

}

.container{
      width: 100%;
      height: 100%;
      align-content: center;
      display: flex;
      justify-content: space-around;  
}

.container-2{
    width: 100%;
    height: 50%;
    align-content: center;
    display: flex;
    justify-content: space-around; 
    padding-top: 35px;
}

.container-3{
    width: 100%;
    height: 50%;
    align-content: center;
    display: flex;
    justify-content: space-around; 
    padding-top: 50px;
}

.ul-1{
    display: flex;
    justify-content:space-around;
    align-items: center;
    padding-left: 100px;
}

.ul-2{
    display: flex;
    justify-content:center;
    align-items: center;
    padding-right: 50px;
    padding: 15px;
}

.div-4{
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}

.div-15{
    background-color: #eff3ff;
    width: 100%;
    padding-left: 15%;
    padding-top: 1%;
    display: flex;
    flex-direction: column;
}

.div-6{
    background-color: rgb(247, 8, 8);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    max-width: 100%;
    max-height: 100%;
}

.feature-section-image {
    width: 952px;
    height: 750px;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    

}

.feature-section-image-2 {
    width: 952px;
    height: 750px;
    max-width: 100%;
    max-height: 100%;

}

.div-7{
    height: 250px;
    width: 100%;
    display: flex;
    justify-content: space-around;

}

.div-8{
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: start;
    padding-left: 150px;
    padding-top: 50px;

}

.div-9{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: start;
    padding-left: 130px;

}

.div-10{
    height: 350px;
    width: 100%;
    display: flex;
    justify-content:space-around;
    padding-left: 130px;
    word-wrap: break-word;


}

.div-11{
    display:flex;
    justify-content: flex-end;
    height: 5%;
    width: 85%;
}

.div-12{
    display:flex;
    justify-content: flex-start;
    width: 55%;
    height: 40%;
    padding-left: 15%;
}

.h1-5{
    font: size 25px;;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #1c3f71;
    
}

.h1-2{
    font-size: 35px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #1c3f71;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.img-1{
    opacity: 0.3;
    width: 250px;
    height: 250px;
}

.cuadrado{
    width: 250px;
    height: 300px;
    border-style: hidden;
    border: #777e8f;
    border: 4px solid rgba(241, 234, 234, 0.301);
    padding: 1%;
    overflow: visible;
    word-wrap: break-word;
    -webkit-animation: bounce-down 1.6s linear infinite;
    animation: bounce-down 5s linear infinite;
    transition: background-color 1s;


   
}

.cuadrado:hover{
    border: 4px solid transparent;
}


@-webkit-keyframes bounce-down {
    25% {
         -webkit-transform: translateY(-4px);
    }
    50%, 100% {
         -webkit-transform: translateY(0);
    }
    75% {
         -webkit-transform: translateY(4px);
    }
}

@keyframes bounce-down {
     25% {
          transform: translateY(-4px);
     }
     50%, 100% {
          transform: translateY(0);
     }
     75% {
          transform: translateY(4px);
     }
}

.iconos{
    height: 35px;
    width: 35px;
}

.h1-3{
    font-size: 35px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #1c3f71;
    display: flex;
    flex-direction: row;
    justify-content: start;
}


p{
    font-size: 25px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #777e8f;
    display: flex;
    justify-content: center;
    padding-left: 25px;
    padding-top: 25px;
    padding-right: 25px;
}

.p-1{
    font-size: 25px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #777e8f;
    display: flex;
    justify-content: flex-start;
    padding-left: 25px;
    padding-top: 25px;
    padding-right: 25px
}

.p-2{
    font-size: 9px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #777e8f;
    display: flex;
    justify-content: center;
    padding-left: 25px;
    padding-top: 0px;
    padding-right: 25px;
    word-wrap: break-word;
    word-wrap: normal;

}

.p-3{
    font-size: 15px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #777e8f;
    display: flex;
    justify-content: flex-start;
    padding-left: 15%;
    padding-top: 0px;

}

.h1-1{
    font-size: 35px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #1c3f71;
    display: flex;
    justify-content: center;
}

.a-1{
    font-size: 35px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #1c3f71;
    display: flex;
    justify-content: flex-start;
}

.a-5{
    font-size: 25px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #364dc3;
    display: flex;
    justify-content: flex-start;
}

.a-2{
    font-size: 15px;
    display: flex;
    justify-content: center;
}

.a-3{
    font-size: 20px;
    height: 15px;
    width: 15px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #1c3f71;
    display: flex;
    justify-content: flex-start;
}

.h1-2{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ul-3 {
    list-style: none;
    padding-left: 50%;
    padding-right: 50px;
  }

  footer a {
    text-decoration: none;
    color: #7c879a;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .ft-title {
    color: #2d4666;
    font-size: 25px;
    padding-left: 59%;
  }

body {
    display: flex;
    flex-direction: column;
}
.container {
    flex: 1;
}

.ft-main {
    padding: 1.25rem 1.875rem;
    display: flex;
    justify-content: center;
    height: 60%;
    width: 60%;

}

footer{
    background-color: #eff3ff;
}  
.ft-legal {
    padding: 0.9375rem 1.875rem;
    background-color: #eff3ff;
}
.ft-legal-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
    list-style: none;
}
.ft-legal-list li {
    margin: 0.125rem 0.625rem;
    white-space: nowrap;
}

.ft-legal-list li:nth-last-child(3) {
      flex: 3;
}

.btn-flotante {
	font-size: 16px; 
	text-transform: uppercase; 
	font-weight: bold; 
	color: #ffffff; 
	border-radius: 5px; 
	letter-spacing: 2px; 
	background-color: #2c4bc1; 
	padding: 18px 30px; 
	bottom: 40px;
	right: 40px;
	transition: all 300ms ease 0ms;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	z-index: 1;
}
.btn-flotante:hover {
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
	transform: translateY(-7px);
}
@media only screen and (max-width: 600px) {
 	.btn-flotante {
		font-size: 14px;
		padding: 12px 20px;
		bottom: 20px;
		right: 20px;
	}
} 

.div-18{
    display: flex;
    justify-content: center;
}


</style>