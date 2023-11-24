const app = new Vue({
  el: "#app",
  data: {
    // pelicula:{
    //     adult: boolean,
    //     genres:[],
    //     id: 500,
    //     original_language:"en",
    //     original_title:"Reservoir Dogs",
    //     overview:"Una banda organizada formada por seis individuos es contratada para dar un golpe. Anteriormente varios de los miembros no se conocían entre sí, por lo que entre ellos usan nombres en clave. El objetivo: atracar una empresa para llevarse unos diamantes. Pero, antes de que suene la alarma, la policía ya está allí. Algunos mueren en el atraco, y el resto se reúne en el lugar convenido.",
    //     poster_path:"/hxmJqXFFnXLlvPIdCW2k3UGLCgZ.jpg",

    //     release_date:"1992-09-02",
    //     title:"Reservoir Dogs",
    //     },
    peliculas: [],
  },
  methods: {
    getPeliculas() {
      const endPoint =
        "https://api.themoviedb.org/3/movie/popular?api_key=4987f69fc53eddb225d45539c2b5c2ed&language=es-es";

      fetch(endPoint)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.peliculas = json.results;
          console.table(this.peliculas);
          //this.peliculas = results;
        })
        .catch((error) => console.log(error));
    },

    volver() {
      window.history.back(); // Esta línea regresará a la página anterior
    }
  },
});
