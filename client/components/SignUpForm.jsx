import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { signUp } from '../actions/authAction';
import { connect } from 'react-redux';

class SignUpForm extends Component {
		handleChange = (e) => {
		    this.setState({ [e.target.name]: e.target.value });
		}

		handleSubmit = (e) => {
		  e.preventDefault();
		  console.log("HERE");
		  let signUpDetails = this.state;
		  const { dispatch } = this.props;
		  dispatch(signUp(signUpDetails));
		}

		render() {
		    return (
		        <div>
		            <NavBar />
		            <div className="container signup ">
		                <div className= "row">
		                    <div className="container">
		                        <form action="true">
		                            <div className="form-group row">
		                                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">First Name</label>
		                                <div className="col-sm-9">
		                                    <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={this.handleChange} />
		                                </div>
		                            </div>
		                            <div className="form-group row">
		                                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Last Name</label>
		                                <div className="col-sm-9">
		                                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
		                                </div>
		                            </div>
		                            <div className="form-group row">
		                                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
		                                <div className="col-sm-9">
		                                    <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} />
		                                </div>
		                            </div>
		                            <div className="form-group row">
		                                <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
		                                <div className="col-sm-9">
		                                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} />
		                                </div>
		                            </div>

		                            <div className="form-group row">
		                                <div className="offset-sm-3 col-sm-9">
		                                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
		                                </div>
		                            </div>
		                        </form>
		                    </div>
		                </div>
		            </div>
		            <Footer />
		        </div>
		    );
		}
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: (actionObject) => {
      console.log("DISPACH FUNC ",dispatch(actionObject));
  }
});

export default connect(
    null,
    mapDispatchToProps
)(SignUpForm);
