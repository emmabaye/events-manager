import axios from 'axios';
import { GET_ALL_CENTERS, GET_ALL_CENTERS_FULFILLED, GET_ALL_CENTERS_REJECTED } from '../types/center';

export const getAllCenters = () => {
   return (dispatch) => {
    dispatch({type: 'GET_ALL_CENTERS'});
    axios({
			method: 'GET',
			url:'http://localhost:3000/api/v1/centers',
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
			withCredentials: true,
			})
       .then((response) => {
         dispatch({type: GET_ALL_CENTERS_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
         dispatch({type: 'GET_ALL_CENTERS_REJECTED', payload: err})
       });
   }
};
