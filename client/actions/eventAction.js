import axios from 'axios';
import Nanobar from 'nanobar';
import {
  ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED,
  GET_EVENT, GET_EVENT_FULFILLED, GET_EVENT_REJECTED,
  MODIFY_EVENT, MODIFY_EVENT_FULFILLED, MODIFY_EVENT_REJECTED,
  DELETE_EVENT, DELETE_EVENT_FULFILLED, DELETE_EVENT_REJECTED,
  GET_USER_EVENTS, GET_USER_EVENTS_FULFILLED, GET_USER_EVENTS_REJECTED
} from '../types/event';

/**
 * GET request to get user events
 * @param {integer} page page from pagination
 * @return {object}   Promise
 */
export const getUserEvents = (page) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: GET_USER_EVENTS });
  return axios({
    method: 'GET',
    url: `/api/v1/events/user?page=${page}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
      nanobar.go(100);
      dispatch({ type: GET_USER_EVENTS_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      nanobar.go(0);
      dispatch({ type: GET_USER_EVENTS_REJECTED, payload: err });
    });
};

/**
 * POST request for authenticated user to create an event
 *
 * @param {object} eventDetails Formdata for event details
 * @return {object} Promise
 */
export const addEvent = (eventDetails) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: ADD_EVENT });
  return axios({
    method: 'post',
    url: '/api/v1/events',
    data: eventDetails,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true
  })
    .then((response) => {
      nanobar.go(100);
      dispatch({ type: ADD_EVENT_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      nanobar.go(0);
      console.log(err);
      dispatch({ type: ADD_EVENT_REJECTED, payload: err.response.data });
    });
};

/**
 * GET request for to get an event by id
 *
 * @param {string} eventId Id of event to be retrieved
 * @return {object} Promise
 */
export const getEvent = (eventId) => (dispatch) => {
  dispatch({ type: GET_EVENT });
  return axios({
    method: 'get',
    url: `/api/v1/events/${eventId}`,
    withCredentials: true
  })
    .then((response) => {
      dispatch({ type: GET_EVENT_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_EVENT_REJECTED, payload: err.response.data });
    });
};

/**
 * PUT request for authenticated user to modify an event
 *
 * @param {object} eventForm Formdata for event details
 * @return {object} Promise
 */
export const modifyEvent = (eventForm) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: MODIFY_EVENT });
  return axios({
    method: 'put',
    url: `/api/v1/events/${eventForm.get('id')}`,
    data: eventForm,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true
  })
    .then((response) => {
      nanobar.go(100);
      dispatch({ type: MODIFY_EVENT_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      nanobar.go(0);
      dispatch({ type: MODIFY_EVENT_REJECTED, payload: err.response.data });
    });
};

/**
 * DELETE request for authenticated user to delete an event
 *
 * @param {object} eventId Id of  for event
 * @return {object} Promise
 */
export const deleteEvent = (eventId) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: DELETE_EVENT });
  return axios({
    method: 'DELETE',
    url: `/api/v1/events/${eventId}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
      nanobar.go(100);
      if(response.data.data == "1") { //eslint-disable-line
        dispatch({
          type: DELETE_EVENT_FULFILLED,
          payload: response.data,
          eventId: eventId
        });
      } else {
        nanobar.go(0);
        dispatch({ type: DELETE_EVENT_REJECTED });
      }
    })
    .catch((err) => {
      nanobar.go(0);
      console.log(err);
      dispatch({ type: DELETE_EVENT_REJECTED, payload: err.response.data });
    });
};

/**
 * PUT request for admin to cancel an event
 *
 * @param {integer} eventId Formdata for event details
 * @return {object} Promise
 */

