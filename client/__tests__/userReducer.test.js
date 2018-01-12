import reducer from '../reducers/userReducer';
import { SIGN_UP, SIGN_UP_FULFILLED, SIGN_UP_REJECTED, 
  SIGN_IN, SIGN_IN_FULFILLED, SIGN_IN_REJECTED } from '../types/user';

const initState = {};

describe('user reducer', () => {
	describe('sign up',() => {
		it('should return inital state', () => {
			expect(reducer(initState,{type:SIGN_UP})).toEqual(initState);
		})

		it('should handle SIGN_UP_FULFILLED', () => {
			expect(reducer(initState,{
				type:SIGN_UP_FULFILLED,
				payload:{data:'user data'}
			}).status).toEqual("Success");
		})

		it('should handle SIGN_UP_REJECTED', () => {
			expect(reducer(initState,{
				type:SIGN_UP_REJECTED,
				payload:{data:'user data'}
			}).status).toEqual("Error");
		})

		it('should return default state', () => {
			expect(reducer(initState,{type:'SIGN'})).toEqual(initState);
		})
	});

	describe('sign in',() => {
		it('should return inital state', () => {
			expect(reducer(initState,{type:SIGN_IN})).toEqual(initState);
		})

		it('should handle SIGN_IN_FULFILLED', () => {
			expect(reducer(initState,{
				type:SIGN_IN_FULFILLED,
				payload:{data:'user data'}
			}).status).toEqual("Success");
		})

		it('should handle SIGN_IN_REJECTED', () => {
			expect(reducer(initState,{
				type:SIGN_IN_REJECTED,
				payload:{data:'user data', status:'Error'}
			}).status).toEqual("Error");
		})
	});
});
