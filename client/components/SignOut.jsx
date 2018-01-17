import React, { Component } from 'react';
import { history } from '../routes';
import { Redirect } from 'react-router-dom';

class SignOut extends  Component {

	componentWillMount() {
		localStorage.setItem('x-access-token', "");
	}

	render() {
		return(
			<Redirect to="/" push={true} />
			)
	}
}

export default SignOut;