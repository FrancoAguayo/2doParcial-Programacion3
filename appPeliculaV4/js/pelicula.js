const app = new Vue({
  el: "#appPelicula",
  data: {
    id: "",
    movie: {},
    title: "",
    overview: "",
    poster_path: "",
    genres: "",

    peliculasFavoritas: [],
  },

  methods: {
    getPelicula() {
      const peliculaId = this.id;
      console.log("este es el id" + this.id);
      const endPoint = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=4987f69fc53eddb225d45539c2b5c2ed&language=es-es`;
      console.log(endPoint);

      fetch(endPoint)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.movie = json;
          this.title = json.title;
          this.overview = json.overview;
          this.poster_path = json.poster_path;
        })
        .catch((error) => console.log(error));
    },
    // AgregarFavoritos(movie) {
    //   this.peliculasFavoritas.push(movie);
    //   console.log(this.peliculasFavoritas);
    // },
    addMovieToFavorites() {
      // Obtener las películas favoritas existentes del almacenamiento local
      const storedMovies =
        JSON.parse(localStorage.getItem("peliculasFavoritas")) || [];

      // Verificar si la película ya está en favoritos antes de agregarla
      const exists = storedMovies.some(
        (favoriteMovie) => favoriteMovie.id === this.movie.id
      );

      if (!exists) {
        // Si no existe, agregar la película actual a las favoritas
        storedMovies.push(this.movie);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem(
          "peliculasFavoritas",
          JSON.stringify(storedMovies)
        );

        // También actualiza el array en el componente para reflejar el cambio en la interfaz
        this.peliculasFavoritas = storedMovies;
      }
    },
    volver() {
      window.history.back(); // Esta línea regresará a la página anterior
    },
  },
  mounted() {
    // Obtener el ID de la película de la cadena de consulta de la URL
    const urlParams = new URLSearchParams(window.location.search);
    this.id = parseInt(urlParams.get("id"), 10);

    // Obtener datos de la película
    this.getPelicula();
  },
});
