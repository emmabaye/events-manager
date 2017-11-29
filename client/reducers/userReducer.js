import { SIGN_UP, SIGN_UP_FULFILLED, SIGN_UP_REJECTED, 
  SIGN_IN, SIGN_IN_FULFILLED, SIGN_IN_REJECTED } from '../types/user';

const initState = {
  authenticated: false,
  status: "",
	user: {
	  firstName: "",
	  lastName: "",
	  email: "",
	  password: ""
	}
};

export default ( state = initState, action ) => {
	console.log("REDUCER");
	switch( action.type ) {
    case SIGN_UP: {
      console.log("SIGNING UP ", action.payload);
      return {
        ...state
      }
	}
    case SIGN_UP_FULFILLED: {
      console.log("FINISHED SIGNING UP");
      return {
        ...state, 
        status:action.payload.data.status ,
        ...action.payload.data,
        authenticated: true
      }
    }
    case SIGN_UP_REJECTED: {
      console.log("SIGN UP FAILED, DUE TO ERROR");
      return {
        ...state, 
        status:'Error' || undefined ,
        ...action.payload,
        authenticated: false
      }
    }
    case SIGN_IN: {
      console.log("SIGNING IN ", action.payload);
      return {
        ...state
      }
	}
    case SIGN_IN_FULFILLED: {
      console.log("FINISHED SIGNING IN");
      return {
        ...state, 
        status:action.payload.data.status ,
        ...action.payload.data,
        authenticated: true
      }
    }
    case SIGN_IN_REJECTED: {
      console.log("SIGN IN FAILED, DUE TO ERROR");
      return {
        ...state, 
        status:'Error' || undefined ,
        ...action.payload,
        authenticated: false
      }
    }
		default : return state;
	}
}