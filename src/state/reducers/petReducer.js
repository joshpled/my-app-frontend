export default function petReducer(state = { pet: {}, loading: false }, action) {
	// debugger
	switch (action.type) {
		case 'CREATING_PET':
			return {
				...state,
				pet: state.pet,
				loading: true,
			};
		case 'CREATE_PET':
			return {
				...state,
				pet: action.payload,
				loading: false,
			};

		case 'CHANGING_ATTRIBUTE':
			return {
				...state,
				pet: state.pet,
				loading: true,
			};

		case 'CHANGE_ATTRIBUTE':
			return {
				pet: action.payload,
				loading: false,
			};
			
		case 'LOADING':
			return {
				...state,
				loading: true,
			};

		case 'GET_PET':
			return {
				pet: action.payload,
				loading: false,
			};

		case 'CLEAR_PET':
			return {
				pet: {},
				loading: false,
			};

		default:
			return state;
	}
}
