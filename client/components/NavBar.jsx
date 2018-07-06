import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';


/**
 * React  component for Navigation Bar
 */
export default class NavBar extends Component {
  /**
   * Constructor
   * @param {object} props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  /**
   * Check if user is logged in.
   * If jwt has expired, user is not logged in.
   *
   * @return {undefined}
   */
  componentWillMount() {
    if (process.env.NODE_ENV !== 'test') {
      let token = localStorage.getItem('x-access-token');
      try {
        let decoded = jwtDecode(token);
        let isAdmin = (decoded.role === "admin");
        let timeLeft = decoded.exp - (Date.now() / 1000);
        let isLoggedIn = !((timeLeft <= 0));
        if (!isLoggedIn) {
          this.isLoggedIn = false;
          return this.isLoggedIn;
        }
        if (isAdmin) {
          this.isAdmin = true;
        }
        this.isLoggedIn = true;
        return this.isLoggedIn;
      } catch (e) {
        this.isLoggedIn = false;
        return this.isLoggedIn;
      }
    }
  }

  /**
   * React's method to render react component.
   * Renders navbar
   *
   * @return {object}
   */
  render() {
    if (this.props.page) {
      return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"
            />
          </button>
          <Link className="navbar-brand" to="/">EVENTS MANAGER</Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/centers">Centers</Link>
              </li>
              { this.isAdmin &&
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
                </li>
              }
              { !this.isLoggedIn &&
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Sign In</Link>
                </li>
              }
              { !this.isLoggedIn &&
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              }
              {(this.isLoggedIn && (this.props.page === 'MyEvents' || 'AllCenters')) &&
                <li className="nav-item">
                  <Link className="nav-link" to="/addevent">Add Event</Link>
                </li>
              }
              { (this.isLoggedIn && (this.props.page === 'AddEvent' || 'ModifyEvent' || 'AllCenters')) &&
                <li className="nav-item">
                  <Link className="nav-link" to="/myevents">My Events</Link>
                </li>
              }
              { this.isLoggedIn &&
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">Sign Out</Link>
                </li>
              }

            </ul>
          </div>
        </nav>
      );
    }
  }
}
