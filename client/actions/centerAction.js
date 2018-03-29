import axios from 'axios';
import Nanobar from 'nanobar';
import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED,
  ADD_CENTER, ADD_CENTER_FULFILLED, ADD_CENTER_REJECTED,
  GET_CENTER, GET_CENTER_FULFILLED, GET_CENTER_REJECTED,
  MODIFY_CENTER, MODIFY_CENTER_FULFILLED, MODIFY_CENTER_REJECTED } from '../types/center';

/**
 * GET request to get all centers
 *
 * @return {object}   Promise
 */
export const getAllCenters = () => (dispatch) => {
  let nanobar = new Nanobar();
  nanobar.go(40);
  dispatch({ type: GET_ALL_CENTERS });

  return axios({
    method: 'GET',
    url: '/api/v1/centers',
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
