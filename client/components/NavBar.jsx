import React, { Component } from 'react';
/**
*
*
* @export
* @class NavBar Component
* @extends {Component}
*/
export default class NavBar extends Component {
render() {
return (
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="./authindex.htm">EVENTS MANAGER</a>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/myevents">Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Sign In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Sign Up</a>
      </li>
    </ul>
  </div>
</nav>
)
}
}