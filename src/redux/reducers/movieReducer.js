let initialState = {
  popularMoviesData: {},
  topRatedMoviesData: {},
  upcomingMoviesData: {},
  loading: true,
  movieGenres: {},
  movieId: {},
  movieKey: {},
  movieKeyForBanner: {},
  NowPlayingMoviesData: {},
};

function movieReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMoviesData: payload.popularMoviesData.data,
        topRatedMoviesData: payload.topRatedMoviesData.data,
        upcomingMoviesData: payload.upcomingMoviesData.data,
        movieGenres: payload.movieGenres.data,
        loading: false,
      };

    case "GET_MOVIES_FAILURE":
      return alert(`"${payload.error.message}"`);

    default:
      return { ...state };
  }
}

export default movieReducer;
