let initialState = {
  MovieDetailDatas: {},
  MovieVideosDatas: {},
  BannerMovieVideos: {},
  MovieReviewsDatas: {},
  loading: true,
};

function movieDetailReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIE_DETAIL_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        MovieDetailDatas: payload.MovieDetailJson.data,
        MovieVideosDatas: payload.MovieVideos,
        BannerMovieVideos: payload.MovieVideosForBanner,
        MovieReviewsDatas: payload.MovieReviews,
        loading: false,
      };

    case "RESET_MOVIE_DETAIL_STORE_SUCCESS":
      return {
        ...state,
        MovieDetailDatas: {},
        MovieVideosDatas: {},
        BannerMovieVideos: {},
        loading: true,
      };

    case "RESET_MOVIE_VIDEOS_SUCCESS":
      return {
        ...state,
        MovieVideosDatas: {},
      };

    case "GET_MOVIE_DETAIL_FAILURE":
      return alert(`"${payload.error.message}"`);

    default:
      return { ...state };
  }
}

export default movieDetailReducer;
