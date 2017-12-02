import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED } from '../types/center';

const initState = {
  allCenters:{
    status: "",
    message: "",
    data: []
  }
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
		default : return state;
	}
}