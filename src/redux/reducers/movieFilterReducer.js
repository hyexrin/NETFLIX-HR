let initialState = {
	genresDatas: {},
  loading: true,
};

function movieFilterReducer(state = initialState, action) {
	const {type, payload} = action;

	switch(type) {
		case "GET_FILTERED_REQUEST":
			return {...state, loading: true};
		case "GET_FILTERED_SUCCESS":
			return {
				...state, 
				genresDatas: payload.genresDatas,
				loading: false,
			}
		default:
			return {...state}
	}
}

export default movieFilterReducer;