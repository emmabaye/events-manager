import axios from 'axios';
import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED } from '../types/center';
import { ADD_CENTER, ADD_CENTER_FULFILLED, ADD_CENTER_REJECTED } from '../types/center';
import { GET_CENTER, GET_CENTER_FULFILLED, GET_CENTER_REJECTED } from '../types/center';
import { MODIFY_CENTER, MODIFY_CENTER_FULFILLED, MODIFY_CENTER_REJECTED } from '../types/center';

export const getAllCenters = () => (dispatch) => {
  dispatch({ type: 'GET_ALL_CENTERS' });
  return axios({
    method: 'GET',
    url: '/api/v1/centers',
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
       dispatch({ type: GET_ALL_CENTERS_FULFILLED, payload: response.data });
     })
      .catch((err) => {
        dispatch({ type: 'GET_ALL_CENTERS_REJECTED', payload: err });
      });
};

export const addCenter = (centerForm) => {
   return (dispatch) => {
    dispatch({type: ADD_CENTER});
    return axios({
      method: 'post',
      url:'/api/v1/centers',
      data: centerForm,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
      withCredentials: true,
      })
       .then((response) => {
         dispatch({type: ADD_CENTER_FULFILLED, payload: response.data})
       })
       .catch((err) => {
        console.log("ERROR ", err);
         dispatch({type: ADD_CENTER_REJECTED, payload: err.response.data});
        });
   }
};

export const setStatus = (str) => {
  return (dispatch) => {
    dispatch({type: 'SET_STATUS', payload: str});
  }
};

export const getCenter = (centerId) => {
   return (dispatch) => {
    dispatch({type: GET_CENTER});
    return axios({
      method: 'get',
      url:`/api/v1/centers/${centerId}`,
      withCredentials: true,
      })
       .then((response) => {
         dispatch({type: GET_CENTER_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         dispatch({type: GET_CENTER_REJECTED, payload: err.response.data});
        });
   }
};

export const modifyCenter = (centerForm) => {
  return (dispatch) => {
    dispatch({type: MODIFY_CENTER})
    return axios({
      method: 'put',
      url: `/api/v1/centers/${centerForm.get('id')}`,
      data: centerForm,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
      withCredentials: true
    })
       .then((response) => {
         dispatch({type: MODIFY_CENTER_FULFILLED, payload: response.data})
       })
       .catch((err) => {
        console.log("ERROR ", err);
         dispatch({type: MODIFY_CENTER_REJECTED, payload: err.response.data})
       })
  }
}
