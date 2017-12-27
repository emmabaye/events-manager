import axios from 'axios'
import { ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED } from '../types/event'
import { GET_EVENT, GET_EVENT_FULFILLED, GET_EVENT_REJECTED } from '../types/event'
import { MODIFY_EVENT, MODIFY_EVENT_FULFILLED, MODIFY_EVENT_REJECTED } from '../types/event'

export const addEvent = (eventDetails) => {
  return (dispatch) => {
    dispatch({type: ADD_EVENT})
    axios({
      method: 'post',
      url: '/api/v1/events',
      data: eventDetails,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
      withCredentials: true
    })
       .then((response) => {
         dispatch({type: ADD_EVENT_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
         dispatch({type: ADD_EVENT_REJECTED, payload: err.response.data})
       })
  }
}

export const getEvent = (eventId) => {
  return (dispatch) => {
    dispatch({type: GET_EVENT})
    axios({
      method: 'get',
      url: `/api/v1/events/${eventId}`,
      withCredentials: true
    })
       .then((response) => {
         dispatch({type: GET_EVENT_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
         dispatch({type: GET_EVENT_REJECTED, payload: err.response.data})
       })
  }
}

export const modifyEvent = (eventForm) => {
  return (dispatch) => {
    dispatch({type: MODIFY_EVENT})
    axios({
      method: 'put',
      url: `/api/v1/events/${eventForm.get('id')}`,
      data: eventForm,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
      withCredentials: true
    })
       .then((response) => {
         dispatch({type: MODIFY_EVENT_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
         dispatch({type: MODIFY_EVENT_REJECTED, payload: err.response.data})
       })
  }
}
