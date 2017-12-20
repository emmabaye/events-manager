import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED } from '../types/center';
import { ADD_CENTER, ADD_CENTER_FULFILLED, ADD_CENTER_REJECTED } from '../types/center';
import { GET_CENTER, GET_CENTER_FULFILLED, GET_CENTER_REJECTED } from '../types/center';
import { MODIFY_CENTER, MODIFY_CENTER_FULFILLED, MODIFY_CENTER_REJECTED } from '../types/center';

const initState = {
  allCenters:{
    status: "",
    message: "",
    data: []
  },
  status: "",
  message: "",
  center:{}
};

export default ( state = initState, action ) => {
	switch( action.type ) {
    case GET_ALL_CENTERS: {
      return {
        ...state
      }
	}
    case GET_ALL_CENTERS_FULFILLED: {
      return {
        ...state,
        allCenters: action.payload
      }
    }
    case GET_ALL_CENTERS_REJECTED: {
      return {
         ...state
      }
    }
    case ADD_CENTER: {
      return {
        ...state
      }
  }
    case ADD_CENTER_FULFILLED: {
      return {
        ...state,
        status: 'Success',
        center: action.payload
      }
    }
    case ADD_CENTER_REJECTED: {
      return {
         ...state,
         status: 'Error',
         message: action.payload.message

      }
    }
    case 'SET_STATUS': {
      return {
         ...state,
         status: action.payload,
         message:""
      }
    }
    case GET_CENTER: {
      return {
        ...state
      }
  }
    case GET_CENTER_FULFILLED: {
      console.log("PAYLOAD ", action.payload)
      return {
        ...state,
        center: action.payload.data
      }
    }
    case GET_CENTER_REJECTED: {
      console.log("CENTER REJECTED");
      return {
         ...state,
         status: 'Error',
         message: action.payload.message

      }
    }
    case MODIFY_CENTER: {
      return {
        ...state
      }
  }
    case MODIFY_CENTER_FULFILLED: {
      console.log("PAYLOAD ", action.payload)
      return {
        ...state,
        status: action.payload.status,
        message: 'Success',
        center: action.payload.data
      }
    }
    case MODIFY_CENTER_REJECTED: {
      console.log("CENTER REJECTED");
      return {
         ...state,
         status: 'Error',
         message: action.payload.message

      }
    }
		default : return state;
	}
}