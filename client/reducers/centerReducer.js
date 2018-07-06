import {
  GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED,
  ADD_CENTER, ADD_CENTER_FULFILLED, ADD_CENTER_REJECTED,
  GET_CENTER, GET_CENTER_FULFILLED, GET_CENTER_REJECTED,
  MODIFY_CENTER, MODIFY_CENTER_FULFILLED, MODIFY_CENTER_REJECTED,
  DELETE_CENTER, DELETE_CENTER_FULFILLED, DELETE_CENTER_REJECTED,
  GET_CENTER_EVENTS, GET_CENTER_EVENTS_FULFILLED, GET_CENTER_EVENTS_REJECTED,
  CANCEL_CENTER_EVENT, CANCEL_CENTER_EVENT_FULFILLED, CANCEL_CENTER_EVENT_REJECTED
} from '../types/center';

const initState = {
  allCenters: {
    status: "",
    message: "",
    data: []
  },
  status: "",
  message: "",
  center: {},
  centerEvents: {}
};

export default (state = initState, action) => {
  switch (action.type) {
  case GET_ALL_CENTERS: {
    return {
      ...state
    };
  }
  case GET_ALL_CENTERS_FULFILLED: {
    return {
      ...state,
      allCenters: action.payload
    };
  }
  case GET_ALL_CENTERS_REJECTED: {
    return {
      ...state
    };
  }
  case ADD_CENTER: {
    return {
      ...state
    };
  }
  case ADD_CENTER_FULFILLED: {
    return {
      ...state,
      status: 'Success',
      center: action.payload
    };
  }
  case ADD_CENTER_REJECTED: {
    return {
      ...state,
      status: 'Error',
      message: action.payload.message

    };
  }
  case 'SET_STATUS': {
    return {
      ...state,
      status: action.payload,
      message: ""
    };
  }
  case GET_CENTER: {
    return {
      ...state
    };
  }
  case GET_CENTER_FULFILLED: {
    return {
      ...state,
      center: action.payload.data,
    };
  }
  case GET_CENTER_REJECTED: {
    return {
      ...state,
      status: 'Error',
      message: action.payload.message

    };
  }
  case MODIFY_CENTER: {
    return {
      ...state
    };
  }
  case MODIFY_CENTER_FULFILLED: {
    return {
      ...state,
      status: action.payload.status,
      message: 'Success',
      center: action.payload.data
    };
  }
  case MODIFY_CENTER_REJECTED: {
    return {
      ...state,
      status: 'Error',
      message: action.payload.message
    };
  }
  case DELETE_CENTER: {
    return {
      ...state
    };
  }
  case DELETE_CENTER_FULFILLED: {
    let centerRows = state.allCenters.data.rows.filter((center) =>
      center.id != action.centerId); //eslint-disable-line
    return {
      ...state,
      allCenters: {
        ...state.allCenters,
        data: {
          ...state.allCenters.data,
          rows: centerRows,
          count: state.allCenters.data.count - 1
        }
      }
    };
  }
  case DELETE_CENTER_REJECTED: {
    return {
      ...state
    };
  }
  case GET_CENTER_EVENTS: {
    return {
      ...state
    };
  }
  case GET_CENTER_EVENTS_FULFILLED: {
    return {
      ...state,
      centerEvents: action.payload.data
    };
  }
  case GET_CENTER_EVENTS_REJECTED: {
    return {
      ...state,
      status: 'Error',
      message: action.payload.message

    };
  }
  case CANCEL_CENTER_EVENT: {
    return {
      ...state
    };
  }
  case CANCEL_CENTER_EVENT_FULFILLED: {
    let centerEventsRows = state.centerEvents.rows.map((event) => {
      if (event.id === action.eventId) {
        return {
          ...event,
          status: "cancelled"
        };
      }
      return event;
    });
    return {
      ...state,
      centerEvents: {
        ...state.centerEvents,
        rows: centerEventsRows
      }
    };
  }
  case CANCEL_CENTER_EVENT_REJECTED: {
    return {
      ...state
    };
  }
  default: return state;
  }
};
