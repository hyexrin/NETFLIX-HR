let initialState = {
	filteredMoviesDatas: {},
	genresDatas: {},
	keyword: "",
	sortBy: "",
	pageNum: "",
	moreMoviesData: {},
  loading: true,
};

function movieFilterReducer(state = initialState, action) {
	const {type, payload} = action;

	switch(type) {
		case "GET_FILTERED_REQUEST":
			return {...state};

		case "GET_FILTERED_SUCCESS":
			return {
				...state, 
				filteredMoviesDatas: payload.filteredMoviesDatas,
				genresDatas: payload.genresDatas,
				loading: false,
			};

		case "GET_FILTERD_FALIURE":
			return alert(`"${payload.error.message}"`);

		case "STORE_SEARCH_KEYWORD_SUCCESS":
			return {
				...state,
				keyword: payload,
				sortBy: "",
			}
		
		case "STORE_SORTBY_SUCCESS":
			return {...state, sortBy: payload};

		case "GET_MORE_MOVIES_REQUEST":
			return {...state};

		case "GET_MORE_MOVIES_SUCCESS":
			return {
				...state,
				pageNum: payload.pageNum,
				moreMoviesData: payload.moreMoviesData,
				loading: false,
			};

		case "GET_MORE_MOVIES_FAILURE":
			return alert(`"${payload.error.message}"`);
		
		default:
			return {...state};
	}
}

export default movieFilterReducer;