import api from "../api";

function getFilterMovies(
  keyword,
  sortBy,
  withGenres,
  includeVideo,
  releaseDateGte,
  releaseDateLte,
  voteAverageGte,
  voteAverageLte,
  pageNum
) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILTERED_REQUEST" });

      const getFilterMoviesApi = api.get(
        `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&region=US${
          keyword ? `&with_text_query=${keyword}` : ""
        }${includeVideo ? `&include_video=${includeVideo}` : ""}${
          releaseDateGte ? `&release_date.gte=${releaseDateGte}` : ""
        }${releaseDateLte ? `&release_date.lte=${releaseDateLte}` : ""}${
          voteAverageGte ? `&vote_average.gte=${voteAverageGte}` : ""
        }${voteAverageLte ? `&vote_average.lte=${voteAverageLte}` : ""}${
          withGenres ? `&with_genres=${withGenres}` : ""
        }${sortBy ? `&sort_by=${sortBy}` : "&sort_by=popularity.desc"}${
          pageNum ? `&page=${pageNum}` : "&page=1"
        }`
      );

      const getGenresApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US&region=US`
      );

      const [filteredMoviesDatas, genresDatas] = await Promise.all([
        getFilterMoviesApi,
        getGenresApi,
      ]);

      dispatch({
        type: "GET_FILTERED_SUCCESS",
        payload: {
          filteredMoviesDatas: filteredMoviesDatas,
          genresDatas: genresDatas,
        }
      });
    } catch (error) {
      dispatch({type: "GET_FILTERED_FAILURE", payload: {error}})
    }
  }
};

export const movieFilterActions = {
  getFilterMovies,
}