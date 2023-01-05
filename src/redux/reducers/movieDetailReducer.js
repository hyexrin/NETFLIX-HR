let initialState = {
  movieDetailDatas: {},
  movieVideosDatas: {},
  movieReviewsDatas: {},
  creditDatas: {},
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
        movieDetailDatas: payload.movieDetailDatas.data,
        movieVideosDatas: payload.movieVideosDatas,
        movieReviewsDatas: payload.movieReviewsDatas.data,
        creditDatas: payload.creditDatas.data.cast,
        loading: false,
      };

    case "RESET_MOVIE_DETAIL_STORE_SUCCESS":
      return {
        ...state,
        movieDetailDatas: {},
        movieVideosDatas: {},
        movieReviewsDatas: {},
        loading: true,
      };

    case "RESET_MOVIE_VIDEOS_SUCCESS":
      return {
        ...state,
        movieVideosDatas: {},
      };

    case "GET_MOVIE_DETAIL_FAILURE":
      return alert(`"${payload.error.message}"`);

    default:
      return { ...state };
  }
}

export default movieDetailReducer;
