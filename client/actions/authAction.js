import axios from 'axios';
import { SIGN_UP, SIGN_UP_FULFILLED, SIGN_UP_REJECTED } from '../types/user';

export const signUp = (signUpDetails) => {
  console.log("LETS SIGNUP");
   return (dispatch) => {
     dispatch({type: 'SIGN_UP'});
    axios({
			method: 'post',
			url:'http://localhost:3000/api/v1/users',
			data: signUpDetails,
			withCredentials: true,
			})
       .then((response) => {
         console.log(response.data)
         dispatch({type: SIGN_UP_FULFILLED, payload: response.data})
       })
       .catch((err) => {
         console.log(err.response.data);
         dispatch({type: 'SIGN_UP_REJECTED', payload: err})
       });
   }
  };


  export const signUppp = (signUpDetails) => {

      return {
        type: SIGN_UP,
        payload: {
          signUpDetails
        }
      };
    };