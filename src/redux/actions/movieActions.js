import api from "../api";

function getMovies() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const getPopularMoviesApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const getTopRatedMoviesApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const getUpcomingMoviesApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const getGenresApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMoviesData, topRatedMoviesData, upcomingMoviesData, genreDatas] = await Promise.all([
        getPopularMoviesApi,
        getTopRatedMoviesApi,
        getUpcomingMoviesApi,
        getGenresApi,
      ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMoviesData: popularMoviesData,
          topRatedMoviesData: topRatedMoviesData,
          upcomingMoviesData: upcomingMoviesData,
          movieGenres: genreDatas,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE", payload: { error } });
    }
  };
}

export const movieActions = {
  getMovies,
};
