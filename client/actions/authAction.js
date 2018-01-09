import axios from 'axios';
import { SIGN_UP, SIGN_UP_FULFILLED, SIGN_UP_REJECTED } from '../types/user';
import { SIGN_IN, SIGN_IN_FULFILLED, SIGN_IN_REJECTED } from '../types/user';

export const signUp = (signUpDetails) => (dispatch) => {
  dispatch({ type: 'SIGN_UP' });
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
      dispatch({ type: 'SIGN_UP_REJECTED', payload: err.response.data });
    });
};

export const signIn = (signInDetails) => (dispatch) => {
  dispatch({ type: 'SIGN_IN' });
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
      dispatch({ type: 'SIGN_IN_REJECTED', payload: err.response.data });
    });
};

