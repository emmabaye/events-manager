import axios from 'axios';
import Nanobar from 'nanobar';
import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED,
  ADD_CENTER, ADD_CENTER_FULFILLED, ADD_CENTER_REJECTED,
  GET_CENTER, GET_CENTER_FULFILLED, GET_CENTER_REJECTED,
  DELETE_CENTER, DELETE_CENTER_FULFILLED, DELETE_CENTER_REJECTED,
  MODIFY_CENTER, MODIFY_CENTER_FULFILLED, MODIFY_CENTER_REJECTED,
  GET_CENTER_EVENTS, GET_CENTER_EVENTS_FULFILLED, GET_CENTER_EVENTS_REJECTED,
  CANCEL_CENTER_EVENT, CANCEL_CENTER_EVENT_FULFILLED, CANCEL_CENTER_EVENT_REJECTED
} from '../types/center';

/**
 * GET request to get all centers
 * @param {integer} page page from pagination
 * @return {object}   Promise
 */
export const getAllCenters = (page) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: GET_ALL_CENTERS });
  return axios({
    method: 'GET',
    url: `/api/v1/centers?page=${page}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
      nanobar.go(100);
      dispatch({ type: GET_ALL_CENTERS_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      nanobar.go(0);
      dispatch({ type: GET_ALL_CENTERS_REJECTED, payload: err });
    });
};

/**
 * POST request for an admin to create a center
 *
 * @param {object} centerForm Formdata for center details
 * @return {object} Promise
 */
export const addCenter = (centerForm) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: ADD_CENTER });

  return axios({
    method: 'post',
    url: '/api/v1/centers',
    data: centerForm,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
      nanobar.go(100);
      dispatch({ type: ADD_CENTER_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      nanobar.go(0);
      console.log("ERROR ", err);
      dispatch({ type: ADD_CENTER_REJECTED, payload: err.response.data });
    });
};

/**
 * Set status after center form returns success
 * @param {string} str status after submitting form, either 'Success' or 'Error'
 *
 * @return {object}   Promise
 */
export const setStatus = (str) => (dispatch) => {
  dispatch({ type: 'SET_STATUS', payload: str });
};

/**
 * GET request to retrieve center details by id
 *
 * @param {string} centerId Id of center
 * @return {object}   Promise
 */
export const getCenter = (centerId) => (dispatch) => {
  dispatch({ type: GET_CENTER });
  return axios({
    method: 'get',
    url: `/api/v1/centers/${centerId}`,
    withCredentials: true,
  })
    .then((response) => {
      dispatch({ type: GET_CENTER_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: GET_CENTER_REJECTED, payload: err.response.data });
    });
};

/**
 * PUT request or admin to modify a center
 *
 * @param {object} centerForm Formdata for center details
 * @return {object}   Promise
 */
export const modifyCenter = (centerForm) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: MODIFY_CENTER });

  return axios({
    method: 'put',
    url: `/api/v1/centers/${centerForm.get('id')}`,
    data: centerForm,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true
  })
    .then((response) => {
      nanobar.go(100);
      dispatch({ type: MODIFY_CENTER_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      nanobar.go(0);
      console.log("ERROR ", err);
      dispatch({ type: MODIFY_CENTER_REJECTED, payload: err.response.data });
    });
};

/**
 * DELETE request for authenticated user to delete an center
 *
 * @param {object} centerId Id of  for center
 * @return {object} Promise
 */
export const deleteCenter = (centerId) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: DELETE_CENTER });
  return axios({
    method: 'DELETE',
    url: `/api/v1/centers/${centerId}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
      nanobar.go(100);
      if(response.data.data == "1") { //eslint-disable-line
        dispatch({
          type: DELETE_CENTER_FULFILLED,
          payload: response.data,
          centerId: centerId
        });
      } else {
        nanobar.go(0);
        dispatch({ type: DELETE_CENTER_REJECTED, res: response.data });
      }
    })
    .catch((err) => {
      nanobar.go(0);
      dispatch({ type: DELETE_CENTER_REJECTED, payload: err.response.data });
    });
};

/**
 * GET request for admin to get events for a center center
 *
 * @param {object} centerId Id of  for center
 * @param {integer} page Id of  for center
 * @return {object} Promise
 */
export const getCenterEvents = (centerId, page) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: GET_CENTER_EVENTS });
  return axios({
    method: 'GET',
    url: `/api/v1/events/centers/${centerId}?page=${page}`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
      nanobar.go(100);
      return dispatch({
        type: GET_CENTER_EVENTS_FULFILLED,
        payload: response.data
      });
    })
    .catch((err) => {
      console.log("ERR ", err);
      nanobar.go(0);
      dispatch({ type: GET_CENTER_EVENTS_REJECTED, payload: err.response });
    });
};

/**
 * PUT request for admin to cancel an event
 *
 * @param {integer} eventId Formdata for event details
 * @return {object} Promise
 */
export const cancelCenterEvent = (eventId) => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: CANCEL_CENTER_EVENT });
  return axios({
    method: 'put',
    url: `/api/v1/events/${eventId}/cancel`,
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true
  })
    .then((response) => {
      nanobar.go(100);
    if(response.data.data == "1") { //eslint-disable-line
        dispatch({
          type: CANCEL_CENTER_EVENT_FULFILLED,
          payload: response.data,
          eventId: eventId
        });
      } else {
        nanobar.go(0);
        dispatch({ type: CANCEL_CENTER_EVENT_REJECTED, res: response.data });
      }
    })
    .catch((err) => {
      nanobar.go(0);
      console.log("ERRRR ", err);
      dispatch({ type: CANCEL_CENTER_EVENT_REJECTED, payload: err });
    });
};

