import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Nanobar from 'nanobar';
import NavBar from './NavBar.jsx';
import Event from './Event.jsx';
import { history } from '../routes';

/**
 * React  component for dispplay of authenticated
 * user's events
 */
export class MyEvents extends Component {
  /**
   * Constructor
   * @param {object} props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.state = {
      myEvents: []
    };
  }

  /**
   * Check if user is logged in.
   * If jwt has expired, user is not logged in.
   *
   * @return {undefined}
   */
  componentWillMount() {
    let token = localStorage.getItem('x-access-token');
    try {
      let decoded = jwtDecode(token);
      let timeLeft = decoded.exp - (Date.now() / 1000);
      if (timeLeft <= 0) {
        return history.push("/login");
      }
    } catch (e) {
      return history.push("/login");
    }
  }

  /**
   * Make style changes after component has mounted.
   * Gets user's event
   *
   * @return {undefined}
   */
  componentDidMount() {
    document.body.title = 'My Events | Events Manager';
    document.body.style.backgroundImage = "url('../img/ambitious-creative-co-rick-barrett-110145.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    let token = localStorage.getItem('x-access-token');

    try {
      //eslint-disable-next-line no-unused-vars
      let decoded = jwtDecode(token);
    } catch (e) {
      return history.push("/login");
    }

    let userId = jwtDecode(token).id;
    let nanobar = new Nanobar();
    nanobar.go(40);

    axios({
      method: 'GET',
      url: `/api/v1/users/${userId}`,
      withCredentials: true,
    })
      .then((response) => {
        nanobar.go(100);
        this.setState({ myEvents: response.data.data.Events });
      })
      .catch((err) => {
        nanobar.go(0);
        console.log(err.response);
      });
  }

  /**
   * Updates component state
   *
   * @return {undefined}
   */
  componentDidUpdate() {
    let token = localStorage.getItem('x-access-token');
    let decoded = jwtDecode(token);
    let userId = decoded.id;

    axios({
      method: 'GET',
      url: `/api/v1/users/${userId}`,
      withCredentials: true,
    })
      .then((response) => {
        if (this.state.myEvents.length > response.data.data.Events.length) {
          this.setState({ myEvents: response.data.data.Events });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  /**
   * React's method to render react component.
   * Renders all of user's event
   *
   * @return {object}
   */
  render() {
    return (
      <div>
        <NavBar page="MyEvents" auth/>
        <div className="container events">
          <div className="row event-row">
            {
              (this.state.myEvents.map((event) => <Event key={event.id} eventDetails={event} />))
            }
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Makes the necessary  redux state available in this
 * component's props
 *
 * @param  {object} state global state
 * @return {object} props object
 */
const mapStateToProps = (state) => ({
  allState: state.userReducer
});

export default connect(
  mapStateToProps,
  null
)(MyEvents);

