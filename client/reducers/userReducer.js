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
	switch( action.type ) {
    case SIGN_UP: {
      return {
        ...state
      }
	}
    case SIGN_UP_FULFILLED: {
      return {
        ...state, 
        status:action.payload.data.status ,
        ...action.payload.data,
        authenticated: true
      }
    }
    case SIGN_UP_REJECTED: {
      return {
        ...state, 
        status:'Error' || undefined ,
        ...action.payload,
        authenticated: false
      }
    }
    case SIGN_IN: {
      return {
        ...state
      }
	}
    case SIGN_IN_FULFILLED: {
      return {
        ...state, 
        status:action.payload.data.status ,
        ...action.payload.data,
        authenticated: true
      }
    }
    case SIGN_IN_REJECTED: {
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