import React, { Component } from 'react';
import '../styles/styles.scss';
import LandingPage from '../components/LandingPage.jsx';
import SignUpForm from '../components/SignUpForm.jsx';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    const {firstName, lastName} = this.props.userReducer;
    return (
            <SignUpForm firstName={firstName} lastName={lastName} />
    );
  }
}

export default connect(state => state)(App);
