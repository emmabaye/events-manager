import {
  ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED,
  GET_EVENT, GET_EVENT_FULFILLED, GET_EVENT_REJECTED,
  MODIFY_EVENT, MODIFY_EVENT_FULFILLED, MODIFY_EVENT_REJECTED,
  GET_USER_EVENTS, GET_USER_EVENTS_FULFILLED, GET_USER_EVENTS_REJECTED
} from '../types/event';

const initState = {
  status: "",
  event: {
    description: "",
    venue: "",
    date: "",
    time: "",
    userId: "",
    centerId: "",
  },
  message: ""
};

export default (state = initState, action) => {
  switch (action.type) {
  case ADD_EVENT:
  {
    return {
      ...state
    };
  }
  case ADD_EVENT_FULFILLED:
  {
    return {
      ...state,
      ...action.payload.data,
      status: 'Success'
    };
  }
  case ADD_EVENT_REJECTED:
  {
    return {
      ...state,
      ...action.payload,
      status: 'Error'
    };
  }
  case GET_EVENT:
  {
    return {
      ...state
    };
  }
  case GET_EVENT_FULFILLED:
  {
    return {
      ...state,
      event: action.payload.data,
      status: 'success' // not Success to prevent redirect
    };
  }
  case GET_EVENT_REJECTED:
  {
    return {
      ...state,
      ...action.payload,
      status: 'Error'
    };
  }
  case MODIFY_EVENT:
  {
    return {
      ...state
    };
  }
  case MODIFY_EVENT_FULFILLED:
  {
    return {
      ...state,
      event: action.payload.data,
      status: 'Success'
    };
  }
  case MODIFY_EVENT_REJECTED:
  {
    return {
      ...state,
      ...action.payload,
      status: 'Error'
    };
  }
  case GET_USER_EVENTS: {
    return {
      ...state
    };
  }
  case GET_USER_EVENTS_FULFILLED: {
    console.log("SUCCESS ", action.payload);
    return {
      ...state,
      userEvents: action.payload
    };
  }
  case GET_USER_EVENTS_REJECTED: {
    return {
      ...state
    };
  }
  default:
    return state;
  }
};
