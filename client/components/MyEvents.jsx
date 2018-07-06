import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Nanobar from 'nanobar';
import NavBar from './NavBar.jsx';
import Pagination from './Pagination.jsx';
import Event from './Event.jsx';
import { getUserEvents } from '../actions/eventAction';
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
    let nanobar = new Nanobar();
    nanobar.go(40);
    this.props.dispatch(getUserEvents(1));
  }

  /**
   * React's method to render react component.
   * Renders all of user's event
   *
   * @return {object}
   */
  render() {
    if (this.props.myEvents === undefined) {
      return null;
    }
    return (
      <div>
        <NavBar page="MyEvents" auth/>
        <div className="container events">
          <div className="row event-row">
            { this.props.myEvents.data.rows.length < 1 &&
              <a href="#" 
                style={
                  { 
                    textDecoration: "none", 
                    color: "white", 
                    textShadow: "1px 1px 1px black, -1px -1px 1px black" 
                  }
                } >
                ADD EVENT
                <div
                  style={
                    {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "290px",
                      width: "300px",
                      color: "white",
                      borderStyle: "solid",
                      borderColor: "white",
                      borderWidth: "2px",
                      borderRadius: "3px"
                    }
                  }>
                  <div
                    style={
                      {
                        position: "absolute",
                        backgroundColor: "white",
                        height: "inherit",
                        width: "inherit",
                        zIndex: "-1",
                        opacity: "0.8"
                      }
                    } />

                  <i style={{ textShadow: "1px 1px 1px black, -1px -1px 1px black" }} className="fa fa-plus fa-5x" />
                </div></a>
            }
            {
              (this.props.myEvents.data.rows.map((event) => <Event key={event.id} eventDetails={event} />))
            }
          </div>
          { this.props.myEvents.data.rows.length > 0 &&
          <Pagination
            firstPage={this.props.myEvents.data.page.firstPage}
            currentPage={this.props.myEvents.data.page.currentPage}
            previousPage={this.props.myEvents.data.page.previousPage}
            nextPage={this.props.myEvents.data.page.nextPage}
            lastPage={this.props.myEvents.data.page.lastPage}
            dispatch={this.props.dispatch}
            getItems={getUserEvents}
          />
          }
        </div>
      </div>
    );
  }
}

/**
 * Makes redux dispatch method available in this
 * components props
 *
 * @param  {object} dispatch dispatch method
 * @return {object} props object
 */
const mapDispatchToProps = (dispatch) => ({
  dispatch: (actionObject) => dispatch(actionObject)
});

/**
 * Makes the necessary  redux state available in this
 * component's props
 *
 * @param  {object} state global state
 * @return {object} props object
 */
const mapStateToProps = (state) => ({
  myEvents: state.eventReducer.userEvents
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyEvents);

