import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import Location from './Location.jsx';
import Footer from './Footer.jsx';
import { getEvent } from '../actions/eventAction';

/**
 * React  component for event details to be displayed
 * to regular user
 */
export class EventDetails extends Component {
  /**
   * React's componentDidMount life cycle method
   * runs after component has been mounted.
   * Makes style changes after component has been mounted
   * and dispatches action to get event details
   * by id
   *
   * @return {undefined}
   */
  componentDidMount() {
    document.body.style.backgroundColor = 'white';
    let eventId = this.props.match.params.id;
    this.props.dispatch(getEvent(eventId));
  }

  /**
   * React's method to render react component.
   * Renders event details
   *
   * @return {object}
   */
  render() {
    console.log("THIS.PROPS>EVENT ", this.props.event);
    return (
      <div>
        <NavBar page="MyEvents" />
        <div className="container event-details">
          <div className="row">
            <div className="col-md-8 event">
              <div className="card mb-3">
                <img className="card-img-top img-fluid"
                  src={this.props.event.image} height="300" alt="Card image cap" />
                <div className="card-block">
                  <h5 className="card-title"><b>{this.props.event.title}</b></h5>
                  <p className="card-text">{this.props.event.description}</p>
                </div>
              </div>
              {(this.props.event.Center !== undefined && this.props.event.Center !== null) ? <Location
                location={`${this.props.event.Center.name}, ${this.props.event.Center.location}`}
              /> : ""
              }
              {(this.props.event.Center === null) ? <Location
                location=""
              /> : ""
              }
            </div>
            <div className="col-md-4 venue-date" >
              <div className="container">
                <div className="row">
                  <div className="card">
                    <h6 className="card-header"><b>VENUE</b></h6>
                    <div className="card-block">
                      {(this.props.event.Center !== undefined && this.props.event.Center !== null) &&
                      <p className="card-text">
                        {`${this.props.event.Center.name}, ${this.props.event.Center.location}`}
                      </p>
                      }
                      {(this.props.event.Center === null) &&
                      <p className="card-text" style={{ color: "red" }}>
                        <b>
                          THIS EVENT HAS BEEN CANCELLED BECAUSE
                          THE CENTER IS NOT AVAILABLE.
                          PLEASE CHOOSE ANOTHER CENTER.
                        </b>
                      </p>
                      }
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="card">
                    <h6 className="card-header"><b>DATE & TIME</b></h6>
                    <div className="card-block">
                      <p className="card-text">{moment(this.props.event.date).format('DD MMMM YYYY')}</p>
                      <p className="card-text">{this.props.event.time}</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
        <Footer />
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
  status: state.eventReducer.status,
  message: state.eventReducer.message,
  event: state.eventReducer.event
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails);
