import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavBar page="landingpage"/>
        <Body />
        <Footer />
      </div>
    );
  }
}
