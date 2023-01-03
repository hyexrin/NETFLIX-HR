let initialState = {
  popularMoviesData: {},
  topRatedMoviesData: {},
  upcomingMoviesData: {},
  loading: true,
  genreListData: {},
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
        popularMoviesData: payload.popularMovies.data,
        topRatedMoviesData: payload.topRatedMovies.data,
        upcomingMoviesData: payload.upcomingMovies.data,
        genreListData: payload.movieGenres.data,
        loading: false,
      };

    case "GET_MOVIES_FAILURE":
      return alert(`"${payload.error.message}"`);

    default:
      return { ...state };
  }
}

export default movieReducer;
