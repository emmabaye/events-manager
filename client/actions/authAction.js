import axios from 'axios';
import {
  SIGN_UP, SIGN_UP_FULFILLED, SIGN_UP_REJECTED,
  SIGN_IN, SIGN_IN_FULFILLED, SIGN_IN_REJECTED
} from '../types/user';

/**
 * POST request for sign up
 *
 * @param {object} signUpDetails body containing sign up details
 * @return {object} Promise
 */
export const signUp = (signUpDetails) => (dispatch) => {
  dispatch({ type: SIGN_UP });
  return axios({
    method: 'post',
    url: '/api/v1/users',
    data: signUpDetails,
    withCredentials: true,
  })
    .then((response) => {
      localStorage.setItem('x-access-token', response.data.data.token);
      dispatch({ type: SIGN_UP_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      console.log("ERR ", err);
      dispatch({ type: SIGN_UP_REJECTED, payload: err.response.data });
    });
};

/**
 * POST request for sign in
 *
 * @param {object} signInDetails body containing sign in details
 * @return {object} Promise
 */
export const signIn = (signInDetails) => (dispatch) => {
  dispatch({ type: SIGN_IN });
  return axios({
    method: 'post',
    url: '/api/v1/users/login',
    data: signInDetails,
    withCredentials: true,
  })
    .then((response) => {
      localStorage.setItem('x-access-token', response.data.data.token);
      dispatch({ type: SIGN_IN_FULFILLED, payload: response.data });
    })
    .catch((err) => {
      console.log("Error ", err);
      //console.log(err.response.data)
      dispatch({ type: SIGN_IN_REJECTED, payload: err.response.data });
    });
};

