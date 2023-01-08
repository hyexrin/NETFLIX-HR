let initialState = {
	filteredMoviesDatas: {},
	keyword: "",
	releaseDateGte: "",
	releaseDateLte: "",
	genresDatas: {},
	sortBy: "",
	pageNum: "",
	loading: true,
};

function movieFilterReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case "GET_FILTERED_REQUEST":
			return { ...state };

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

		case "STORE_DATE_SUCCESS":
			return {
				...state,
				releaseDateGte: payload.releaseDateGte,
				releaseDateLte: payload.releaseDateLte,
			}

		case "STORE_SORTBY_SUCCESS":
			return { ...state, sortBy: payload };

		case "STORE_PAGENUM_SUCCESS":
			return { ...state, pageNum: payload };

		case "STORE_GENRES_SUCCESS":
			return {
				...state,
				genresDatas: payload.genresDatas
			}

		case "RESET_FILTER_SUCCESS":
			return {
				...state,
				keyword: "",
				releaseDateGte: "",
				releaseDateLte: "",
				genresDatas: {},
				sortBy: "",
				pageNum: "",
			}

		default:
			return { ...state };
	}
}

export default movieFilterReducer;