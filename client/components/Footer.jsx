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
      <footer className="container-fluid"
        style={{
          backgroundColor: "#262626",
          maxWidth: "100%",
          height: "100px"
        }}
      >
        <label
          className="h6 text-center"
          style={{ backgroundColor: "#262626", width: "100%" }}>
          <i className="fa fa-copyright" /> 2017 EVENTS MANAGER
        </label>
      </footer>
    );
  }
}
