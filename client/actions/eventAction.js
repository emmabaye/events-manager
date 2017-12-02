import axios from 'axios';
import { ADD_EVENT, ADD_EVENT_FULFILLED, ADD_EVENT_REJECTED } from '../types/event';

export const addEvent = (eventDetails) => {
   return (dispatch) => {
     dispatch({type: 'ADD_EVENT'});
    axios({
			method: 'post',
			url:'/api/v1/events',
			data: eventDetails,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
			withCredentials: true,
			})
       .then((response) => {
         dispatch({type: ADD_EVENT_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err)
         dispatch({type: 'ADD_EVENT_REJECTED', payload: err.response.data});
       });
   }
};
