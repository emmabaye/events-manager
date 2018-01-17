import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';


/**
*
*
* @export
* @class NavBar Component
* @extends {Component}
*/
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  componentWillMount() {
    let token = localStorage.getItem('x-access-token');
    try {
      let decoded = jwtDecode(token);
      let isAdmin = (decoded.role === "admin");
      let timeLeft = decoded.exp - (Date.now() / 1000);
      let isLoggedIn = !((timeLeft <= 0));
      if (!isLoggedIn) {
        return this.isLoggedIn = false;
      }
      if (isAdmin) {
        this.isAdmin = true;
      }
      return this.isLoggedIn = true;
    } catch (e) {
      return this.isLoggedIn = false;
    }
  }

  render() {
    if (this.props.page) {
      return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">EVENTS MANAGER</a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/centers">Centers</a>
              </li>
              { this.isAdmin &&
                <li className="nav-item">
                  <a className="nav-link" href="/admin">Admin</a>
                </li>
              }
              { !this.isLoggedIn &&
                <li className="nav-item">
                  <a className="nav-link" href="/login">Sign In</a>
                </li>
              }
              { !this.isLoggedIn &&
                <li className="nav-item">
                  <a className="nav-link" href="/signup">Sign Up</a>
                </li>
              }
              {(this.isLoggedIn && (this.props.page === 'MyEvents' || 'AllCenters')) &&
                <li className="nav-item">
                  <a className="nav-link" href="/addevent">Add Event</a>
                </li>
              }
              { (this.isLoggedIn && (this.props.page === 'AddEvent' || 'ModifyEvent' || 'AllCenters')) &&
                <li className="nav-item">
                  <a className="nav-link" href="/myevents">My Events</a>
                </li>
              }
              { this.isLoggedIn &&
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Sign Out</a>
                </li>
              }

            </ul>
          </div>
        </nav>
      );
    }
  }
}
