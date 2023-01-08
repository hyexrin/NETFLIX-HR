import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getFilterMovies(
  keyword,
  releaseDateGte,
  releaseDateLte,
  withGenres,
  sortBy,
  pageNum,
) {

  return async (dispatch) => {
    try {
      dispatch({ type: "GET_FILTERED_REQUEST" });

      console.log("releaseDateLte", releaseDateLte)

      const getFilterMoviesApi = api.get(
        `/discover/movie?api_key=${API_KEY}&language=en-US&region=US${keyword ? `&with_text_query=${keyword}` : ""
        }${withGenres ? `&with_genres=${withGenres}` : ""
        }${releaseDateLte ? `&release_date.lte=${releaseDateLte}` : ""
        }${releaseDateGte ? `&release_date.gte=${releaseDateGte}` : ""
        }${sortBy ? `&sort_by=${sortBy}` : "&sort_by=popularity.desc"
        }${pageNum ? `&page=${pageNum}` : "&page=1"
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
      dispatch({ type: "GET_FILTERED_FAILURE", payload: { error } })
    }
  }
};

export const movieFilterActions = {
  getFilterMovies,
}