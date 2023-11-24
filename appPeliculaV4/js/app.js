const app = new Vue({
  el: "#app",
  data: {
    movie: {
      id: "",
      title: "",
      overview: "",
      poster_path: "",
      averageRating: "",
      genres: "",
    },
    inputBusqueda: '',
    resultadosBusqueda: [],
    peliculas: [],
    peliculasFavoritas: [],
  },

  mounted() {
    this.getPeliculas();
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
    getDetalle(id) {
      console.log(id);
      window.location = `pelicula.html?id=${id}`;
    },
    AgregarFavoritos(pelicula) {
      this.peliculasFavoritas.push(pelicula);
      console.log(this.peliculasFavoritas);
    },
    buscar() {
      // // Filtra las películas que contienen la consulta en el título
      // const peliculasFiltradas = this.peliculas.filter((pelicula) =>
      //   pelicula.title.toLowerCase().includes(this.inputBusqueda.toLowerCase())
      // );

      // // Muestra los resultados en el contenedor 'resultados'
      // console.log("Resultados para: " + this.inputBusqueda);
      // console.table(peliculasFiltradas);

      //-------------------------------------------------------------

      // Filtra las películas que contienen la consulta en el título
      this.resultadosBusqueda = this.peliculas.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(this.inputBusqueda.toLowerCase())
      );
      

    },
    
    volver() {
      window.history.back(); // Esta línea regresará a la página anterior
    },

  },
  
});
