import { ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED } from '../types/user';

const initState = {
  authenticated: false,
  status: "",
	event: {
	  description: "",
    venue: "",
    date: "",
    time: "",
    userId: "",
    centerId:"",
	}
};

export default ( state = initState, action ) => {
	console.log("EVENT REDUCER");
	switch( action.type ) {
    case ADD_EVENT: {
      console.log("CREATING EVENT", action.payload);
      return {
        ...state
      }
	}
    case ADD_EVENT_FULFILLED: {
      console.log("FINISHED CREATING  EVENT");
      return {
        ...state, 
        status:action.payload.data.status ,
        ...action.payload.data,
        authenticated: true
      }
    }
    case ADD_EVENT_REJECTED: {
      console.log("CREATE EVENT FAILED, DUE TO ERROR");
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