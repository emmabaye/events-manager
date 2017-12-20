import axios from 'axios';
import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED } from '../types/center';
import { ADD_CENTER, ADD_CENTER_FULFILLED, ADD_CENTER_REJECTED } from '../types/center';
import { GET_CENTER, GET_CENTER_FULFILLED, GET_CENTER_REJECTED } from '../types/center';
import { MODIFY_CENTER, MODIFY_CENTER_FULFILLED, MODIFY_CENTER_REJECTED } from '../types/center';

export const getAllCenters = () => (dispatch) => {
  dispatch({ type: 'GET_ALL_CENTERS' });
  axios({
    method: 'GET',
    url: '/api/v1/centers',
    headers: { 'x-access-token': localStorage.getItem('x-access-token') },
    withCredentials: true,
  })
    .then((response) => {
       dispatch({ type: GET_ALL_CENTERS_FULFILLED, payload: response.data });
     })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'GET_ALL_CENTERS_REJECTED', payload: err });
      });
};

export const addCenter = (centerDetails) => {
   return (dispatch) => {
    dispatch({type: ADD_CENTER});
    axios({
      method: 'post',
      url:'/api/v1/centers',
      data: centerDetails,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
      withCredentials: true,
      })
       .then((response) => {
         dispatch({type: ADD_CENTER_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
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
    axios({
      method: 'get',
      url:`/api/v1/centers/${centerId}`,
      withCredentials: true,
      })
       .then((response) => {
         dispatch({type: GET_CENTER_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
         dispatch({type: GET_CENTER_REJECTED, payload: err.response.data});
        });
   }
};

export const modifyCenter = (centerDetails) => {
  return (dispatch) => {
    dispatch({type: MODIFY_CENTER})
    axios({
      method: 'put',
      url: `/api/v1/centers/${centerDetails.id}`,
      data: centerDetails,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
      withCredentials: true
    })
       .then((response) => {
         dispatch({type: MODIFY_CENTER_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
         dispatch({type: MODIFY_CENTER_REJECTED, payload: err.response.data})
       })
  }
}
