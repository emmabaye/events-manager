import React, { Component } from 'react';

/**
 * React  component for footer
 */
export default class Footer extends Component {
  /**
   * React's method to render react component.
   * Renders footer
   *
   * @return {object}
   */
  render() { //eslint-disable-line class-methods-use-this
    return (
      <footer className="container-fluid">
        <p className="h6 text-center"><i className="fa fa-copyright" /> 2017 EVENTS MANAGER</p>
      </footer>
    );
  }
}
