import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { signIn } from '../actions/authAction';
import { connect } from 'react-redux';

class SignInForm  extends Component{
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
	  e.preventDefault();
		console.log("HERE SIGN IN");
		let signInDetails =  this.state;
		const { dispatch } = this.props;
		return dispatch(signIn(signInDetails))
	}

  render() {
    return (
      <div>
      <NavBar />
      <div className="container signup ">
			<div className= "row">
				<div className="container">
					<form action="./authindex.htm">
						<div className="form-group row">
							<label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
							<div className="col-sm-9">
								<input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
							<div className="col-sm-9">
								<input type="password" className="form-control" name="password"  onChange={this.handleChange} placeholder="Password" />
							</div>
						</div>
						<div className="form-group row">
							<div className="offset-sm-3 col-sm-9">
								<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign In</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		  <Footer />
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch : (actionObject) => dispatch(actionObject)
  }
};

export default connect(
  null,
  mapDispatchToProps
)(SignInForm)