import React, { Component } from "react";
import { connect } from "react-redux";
import LandingPage from "../components/LandingPage.jsx";
import "../styles/styles.scss";

/**
 * React  component for App
 */
export class App extends Component {
  /**
   * React's method to render react component.
   * Return Landing page component
   *
   * @return {object}
   */
  render() {
    return <LandingPage />;
  }
}

export default connect(state => state)(App);
