import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import AdminPanelBody from './AdminPanelBody.jsx';
import { history } from '../routes';

/**
 * React component for admin panel
 */
class AdminPanel extends Component {
  /**
   * React's componentWillMount life cycle method
   * runs before the component is mounted.
   * Checks if user is logged in via jwt
   *
   * @return {object}
   */
  componentWillMount() { //eslint-disable-line class-methods-use-this
    let token = localStorage.getItem('x-access-token');
    try {
      let decoded = jwtDecode(token);
      let timeLeft = decoded.exp - (Date.now() / 1000);
      if (timeLeft <= 0) {
        return history.push("/login");
      }
      if (decoded.role !== 'admin') {
        return history.push("/login");
      }
    } catch (e) {
      return history.push("/login");
    }
  }

  /**
   * React's componentDidMount life cycle method
   * runs after component has been mounted.
   * Changes background color after componented
   * has been mounted
   *
   * @return {undefined}
   */
  componentDidMount() { //eslint-disable-line class-methods-use-this
    document.body.style.backgroundColor = 'white';
  }

  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() { //eslint-disable-line class-methods-use-this
    return (
      <div>
        <NavBar page="LandingPage" />
        <AdminPanelBody />
        <Footer />
      </div>
    );
  }
}

export default AdminPanel;
