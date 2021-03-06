import {
	RECEIVE_CURRENT_USER,
	RECEIVE_USER_LOGOUT,
	RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

// Initial state
const _initialState = Object.freeze({
	isAuthenticated: false,
	user: {}
});

// Session reducer
export default function(state=_initialState, action) {
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !!action.currentUser,
				user: action.currentUser
			};
		case RECEIVE_USER_LOGOUT:
			return {
				isAuthenticated: false,
				user: undefined
			};
		case RECEIVE_USER_SIGN_IN:
			return {
				...state,
				isSignedIn: true
			};
		default:
			return state;
	}
}