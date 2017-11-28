import React, { Component } from 'react';
import '../styles/styles.scss';
import '../styles/myevents.scss';
import LandingPage from '../components/LandingPage.jsx';
import SignUpForm from '../components/SignUpForm.jsx';
import SignInForm from '../components/SignInForm.jsx';
import MyEvents from '../components/MyEvents.jsx';
import AddEvent from '../components/AddEvent.jsx';
import ModifyEvent from '../components/ModifyEvent.jsx';
import AllCenters from '../components/AllCenters.jsx';

export default class App extends Component {
  render() {
    return (
            <AllCenters />
    );
  }
}
