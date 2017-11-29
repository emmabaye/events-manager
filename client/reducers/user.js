import { SIGN_UP, SIGN_UP_FULFILLED, SIGN_UP_REJECTED } from '../types/user';
const initState = {
	userDetails: {
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	}
};

export default ( state = initState, action ) => {
	console.log("REDUCER");
	switch( action.type ) {
    case SIGN_UP: console.log("SIGNING UP ", action.payload)
    case SIGN_UP_FULFILLED: console.log("FINISHED SIGNING UP");
    case SIGN_UP_REJECTED: console.log("SIGN UP FAILED, DUE TO ERROR")
		default : return state;
	}
}