import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';

/**
 * React  component for landing page
 */
export default class LandingPage extends Component {
  /**
   * React's method to render react component.
   * Renders landing page
   *
   * @return {object}
   */
  render() { //eslint-disable-line class-methods-use-this
    return (
      <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
        <NavBar page="landingpage"/>
        <Body />
        <Footer />
      </div>
    );
  }
}
