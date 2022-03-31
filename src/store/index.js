import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: {
      s1: 'Chocolate',
      s2: 'Fresa',
      s3: 'Limon',
      s4: 'Vainilla',
      s5: 'Coco',
      s6: 'Oreo',
      s7: 'Tres Leches',
      s8: 'Zanahoria',
      s9: 'Platano',
      },

      precios: {
        p1: '$250 MXN',
        p2: '$350 MXN',
        p3: '$150 MXN',
        p4: '$200 MXN',
        p5: '$175 MXN',
        p6: '$300 MXN',
        p7: '$275 MXN',
        p8: '$225 MXN',
        p9: '$325 MXN',
        },

      adornos: {
        a1: 'Betún de Chocolate',
        a2: 'Betún de Fresa',
        a3: 'Fondant de Chocolate',
        a4: 'Betún de Queso',
        a5: 'Salsa de Caramelo',
        a6: 'Betún de Mantequilla',
        a7: 'Fondant de base de Malvadisco',
        a8: 'Fondant de Chocolate Blanco',
        a9: 'Betún de Vainilla',
        },

      precios_adornos: {
        pa1: '$100 MXN',
        pa23: '$75 MXN',
        pa4: '$70 MXN',
        pa5: '$60 MXN',
        pa67: '$80 MXN',
        pa8: '$20 MXN',
        pa9: '$85 MXN',
        },

      cantidadS: {
        c1: '100',
        c2: '50',
        c3: '60',
        c4: '75',
        c5: '15',
        c6: '9',
        c7: '58',
        c8: '23',
        c9: '12',
      },

      cantidadA: {
        ca1: '30',
        ca2: '34',
        ca3: '67',
        ca4: '98',
        ca5: '32',
        ca6: '41',
        ca7: '54',
        ca8: '48',
        ca9: '21',
        },

      data: {
        tareas: [],
        nombre: '',
      }

        
  },
  getters: {
    cuadrado(state){
      return state.contador * state.contador;
    },

    agregarTarea: function(){
      this.tareas.push({
        nombre: this.nombre,
        
      });
      console.log(this.tareas);
      this.nombre = '';
    }
  },
  mutations: {
    subirContador(state){
      state.contador++;
    },
    bajarContador(state, random){
      state.contador -= random;
    },

    randomContador(state, random){
      state.contador += random;
    },

     colorChange(state, color) {
      state.color = color;
    },
  },

  actions: {
    async subirContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("subirContador", results);
    },
    async bajarContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("bajarContador", results);
    },
    colorChange({commit}, color) {
      commit("colorChange", color);
    }
  },
  modules: {
  }
})
