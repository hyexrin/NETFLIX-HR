import api from "../api";

function getMovieDetail(movie_id, pageNum) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" });

      const getMovieDetailApi = api.get(
        `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );

      const getMovieVideosApi = api.get(
        `/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
      );

      const getMovieReviewsApi = api.get(
        `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=${pageNum}`
      );

      const getCreditsApi = api.get(
        `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
      );

      const [ movieDetailDatas, movieVideosDatas, movieReviewsDatas, creditDatas] = await Promise.all([
        getMovieDetailApi,
        getMovieVideosApi,
        getMovieReviewsApi,
        getCreditsApi,
      ]);

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          movieDetailDatas: movieDetailDatas,
          movieVideosDatas: movieVideosDatas,
          movieReviewsDatas: movieReviewsDatas,
          creditDatas: creditDatas,
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
