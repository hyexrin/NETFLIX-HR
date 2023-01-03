import api from "../api";

function getMovieDetail(movie_id, pageNum) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" });

      const getMovieDetailApi = api.get(
        `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );

      const getMovieVideos = api.get(
        `/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
      );

      const getMovieReviews = api.get(
        `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=${pageNum}`
      );


      const [
        MovieDetailDatas,
        MovieVideosDatas,
        MovieReviewsDatas,
      ] = await Promise.all([
        getMovieDetailApi,
        getMovieVideos,
        getMovieReviews,
      ]);

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          MovieDetailDatas: MovieDetailDatas,
          MovieVideosDatas: MovieVideosDatas,
          MovieReviewsDatas: MovieReviewsDatas,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_DETAIL_FAILURE", payload: { error } });
    }
  };
}

export const movieDetailActions = {
  getMovieDetail,
};
