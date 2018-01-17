import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import AdminPanelBody from './AdminPanelBody.jsx';
import { history } from '../routes.js';

class AdminPanel extends Component {
  componentWillMount() {
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

  componentDidMount() {
    document.body.style.backgroundColor = 'white';
  }

  render() {
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
