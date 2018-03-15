import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

/**
 * React  component for Signing out
 */
class SignOut extends Component {
  /**
   * Logs out user by replacing jwt with empty
   * string in localStorage.
   *
   * @return {undefined}
   */
  componentWillMount() {
    localStorage.setItem('x-access-token', "");
  }

  /**
   * React's method to render react component.
   * Redirects to index page
   *
   * @return {object}
   */
  render() {
    return (
      <Redirect to="/" push />
    );
  }
}

export default SignOut;
