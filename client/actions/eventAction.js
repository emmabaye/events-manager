import axios from 'axios';
import {
  ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED,
  GET_EVENT, GET_EVENT_FULFILLED, GET_EVENT_REJECTED,
  MODIFY_EVENT, MODIFY_EVENT_FULFILLED, MODIFY_EVENT_REJECTED
} from '../types/event';

/**
 * POST request for authenticated user to create an event
 *
 * @param {object} eventDetails Formdata for event details
 * @return {object} Promise
 */
export const addEvent = (eventDetails) => (dispatch) => {
  dispatch({ type: ADD_EVENT });
  return axios({
    method: 'post',
    url: '/api/v1/events',
    data: eventDetails,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true
  })
    .then((response) => {
      dispatch({ type: ADD_EVENT_FULFILLED, payload: response.data });
    })
    .catch((err) => {
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
  dispatch({ type: MODIFY_EVENT });
  return axios({
    method: 'put',
    url: `/api/v1/events/${eventForm.get('id')}`,
    data: eventForm,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true
  })
    .then((response) => {
      dispatch({ type: MODIFY_EVENT_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: MODIFY_EVENT_REJECTED, payload: err.response.data });
    });
};
