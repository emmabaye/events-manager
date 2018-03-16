import React, { Component } from "react";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from "./NavBar.jsx";
import { getEvent, modifyEvent } from '../actions/eventAction';
import { history } from '../routes';

/**
 * React  component for modify event form
 */
export class ModifyEvent extends Component {
  /**
   * Constructor
   * @param {object} props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      centers: []
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
   * Dispatches action to get event details
   * by id
   *
   * @return {undefined}
   */
  componentDidMount() {
    let eventId = this.props.match.params.id;
    this.props.dispatch(getEvent(eventId));
  }

  /**
   * Updates component state
   *
   * @return {undefined}
   */
  componentDidUpdate() {
    if (Object.keys(this.state.event).length === 0 && this.state.centers.length === 0) {
      axios({
        method: 'GET',
        url: '/api/v1/centers',
        withCredentials: true,
      })
        .then((response) => {
          this.setState({
            event: {
              ...this.props.event,
              date: this.props.event.date.substring(0, 10)
            },
            centers: response.data.data
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }

  /**
   * Event handler for changes in input.
   * Sets the state on changes.
   *
   * @param  {object} e event object
   * @return {undefined}
   */
  handleChange = (e) => {
    this.setState({
      event: {
        ...this.state.event,
        [e.target.name]: e.target.value,
        venue: this.refs.venue.options[this.refs.venue.selectedIndex].text
      }
    });
  }

  /**
   * Event handler for submitting form
   *
   * @param  {object} e event object
   * @return {object}
   */
  handleSubmit = (e) => {
    e.preventDefault();
    let eventDetails = this.state.event;
    const { dispatch } = this.props;
    let eventForm = new FormData();
    eventForm.append('id', eventDetails.id);
    eventForm.append('title', eventDetails.title);
    eventForm.append('venue', eventDetails.venue);
    eventForm.append('description', eventDetails.description);
    eventForm.append('centerId', eventDetails.centerId);
    eventForm.append('time', eventDetails.time);
    eventForm.append('date', eventDetails.date);
    eventForm.append('image', this.refs.image.files[0]);
    return dispatch(modifyEvent(eventForm));
  }

  /**
   * React's method to render react component.
   * Renders form for modifying event
   *
   * @return {object}
   */
  render() {
    if (this.props.status === 'Success') {
      return <Redirect to="/myevents" push />;
    }
    return (
      <div>
        <NavBar page="ModifyEvent" />
        <div className="container add-event ">
          <div className="row">
            <div className="container">
              <form>
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-3 col-form-label" />
                  <div className="col-sm-9">
                    { (this.props.status === 'Error') &&
                  <div className="form-group row" style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                    <div className="alert alert-dismissible alert-danger fade show" role="alert">
                      <small>{this.props.message.toString().split(',').join(', ')}</small>
                    </div>
                  </div>
                    }
                  </div>
                </div>
                <p className="text-center h5">
                  <b>MODIFY EVENT</b>
                </p>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Title
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control"
                      name="title"
                      value={this.state.event.title}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="Description" className="col-sm-3 col-form-label">
                    Description
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={this.state.event.description}
                      placeholder="Description"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="venue" className="col-sm-3 col-form-label">
                    Venue
                  </label>
                  <div className="col-sm-9">
                    <select className="form-control" ref="venue" name="centerId" onChange={this.handleChange}>
                      <option key={this.state.event.centerId} value={this.state.event.centerId}>
                        {this.state.event.venue}
                      </option>
                      {
                        (this.state.centers.map((center) =>
                          (<option key={center.id} value={center.id}>
                            {center.name}
                          </option>))
                        )
                      }
                    </select>
                    <small id="fileHelp" className="form-text text-muted">
                      <a href="/centers" target="_blank">
                        View Centers
                      </a>
                    </small>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Date
                  </label>
                  <div className="col-sm-9">
                    <input type="date" className="form-control"
                      name="date"
                      value={this.state.event.date}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Time
                  </label>
                  <div className="col-sm-9">
                    <input type="time" className="form-control"
                      name="time"
                      value={this.state.event.time}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="exampleInputFile" className="col-sm-3 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-9">
                    <input
                      ref="image"
                      type="file"
                      className="form-control"
                      name="image"
                      aria-describedby="fileHelp"
                      onChange={this.handleChange}
                    />
                    <small id="fileHelp" className="form-text text-muted">
                      ( Optional )
                    </small>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="offset-sm-3 col-sm-9">
                    <button type="submit" className="btn btn-sm btn-success" onClick={this.handleSubmit} >
                      <i className="fa fa-plus fa-lg" /> Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Makes redux dispatch method available in this
 * component's props
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
)(ModifyEvent);

