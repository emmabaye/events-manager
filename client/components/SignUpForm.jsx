import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { history } from '../routes';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { signUp } from '../actions/authAction';
import { connect } from 'react-redux';

export class SignUpForm extends Component {
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      let signUpDetails = this.state;
      const { dispatch } = this.props;
      dispatch(signUp(signUpDetails));
    }

    render() {
      if (this.props.status == 'Success') {
        return <Redirect to="/myevents" push />;
      }
      return (
        <div>
          <NavBar page="SignUpForm" />
          <div className="container signup ">
            <div className= "row">
              <div className="container">

                <form action="true">

                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label" />
                    <div className="col-sm-9">
                      { (this.props.status == 'Error') &&
                                     <div className="form-group row" style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                                       <div className="alert alert-dismissible alert-danger fade show" role="alert">
                                         <small>{this.props.message.toString().split(',').join(', ')}</small>
                                       </div>
                                     </div>
                      }
                    </div>
                  </div>
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
  dispatch: (actionObject) => dispatch(actionObject)

});

const mapStateToProps = (state) => ({
  status: state.authReducer.status,
  message: state.authReducer.message
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
