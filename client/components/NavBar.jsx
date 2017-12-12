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

  if(this.props.page === 'landingpage'){
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
  }else if(this.props.page === 'SignInForm'){
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
                    <a className="nav-link" href="/signup">Sign Up</a>
                  </li>
                </ul>
              </div>
        </nav>
        )
  } else if(this.props.page === 'SignUpForm') {
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
                        <a className="nav-link" href="/login">Sign In</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            )
  }else if(this.props.page === 'MyEvents') {
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
                        <a className="nav-link" href="/addevent">Add Event</a>
                      </li>
                       <li className="nav-item">
                        <a className="nav-link" href="#">Centers</a>
                      </li>
                       <li className="nav-item">
                        <a className="nav-link" href="/SignOut">Sign Out </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              )
           } else if(this.props.page === 'AddEvent' || 'ModifyEvent') {
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
                                <a className="nav-link" href="/myevents">My Events</a>
                              </li>
                               <li className="nav-item">
                                <a className="nav-link" href="/centers">Centers</a>
                              </li>
                               <li className="nav-item">
                                <a className="nav-link" href="/SignOut">Sign Out </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      )
                  } else if(this.props.page === 'AllCenters') {
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
                                      <a className="nav-link" href="/myevents">My Events</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="/addevent">Add Events</a>
                                    </li>
                                     <li className="nav-item">
                                      <a className="nav-link" href="/centers">Center</a>
                                    </li>
                                     <li className="nav-item">
                                      <a className="nav-link" href="/SignOut">Sign Out </a>
                                    </li>
                                  </ul>
                                </div>
                              </nav>
                            )
                        }
 }
}