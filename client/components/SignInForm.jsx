import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default class SignInForm  extends Component{
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
								<input type="email" className="form-control" id="" placeholder="Email" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
							<div className="col-sm-9">
								<input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
							</div>
						</div>
						<div className="form-group row">
							<div className="offset-sm-3 col-sm-9">
								<button type="submit" className="btn btn-primary">Sign In</button>
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