import axios from 'axios';
import { history } from '../routes';
import { SIGN_UP, SIGN_UP_FULFILLED, SIGN_UP_REJECTED } from '../types/user';
import { SIGN_IN, SIGN_IN_FULFILLED, SIGN_IN_REJECTED } from '../types/user';

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
         history.push("/myevents");
       })
       .catch((err) => {
         console.log(err)
         console.log(err.response.data);
         dispatch({type: 'SIGN_UP_REJECTED', payload: err})
         history.push("/signup");
       });
   }
};

export const signIn = (signInDetails) => {
  console.log("LETS SIGNIN");
   return (dispatch) => {
     dispatch({type: 'SIGN_IN'});
    axios({
			method: 'post',
			url:'http://localhost:3000/api/v1/users/login',
			data: signInDetails,
			withCredentials: true,
			})
       .then((response) => {
         console.log(response.data)
         dispatch({type: SIGN_IN_FULFILLED, payload: response.data})
         history.push("/myevents");
       })
       .catch((err) => {
         console.log(err)
         console.log(err.response.data);
         dispatch({type: 'SIGN_IN_REJECTED', payload: err})
         history.push("/login");
       });
   }
};

