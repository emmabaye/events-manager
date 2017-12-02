import { ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED } from '../types/event';

const initState = {
  status: "",
	event: {
	  description: "",
    venue: "",
    date: "",
    time: "",
    userId: "",
    centerId:"",
	},
  message:""
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
        ...action.payload.data,
        status:'Success'
      }
    }
    case ADD_EVENT_REJECTED: {
      console.log("CREATE EVENT FAILED, DUE TO ERROR");
      return {
        ...state, 
        ...action.payload,
        status:'Error'
      }
    }
		default : return state;
	}
}