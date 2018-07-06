import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal.jsx'; //eslint-disable-line

/**
 * React  component for event card to be displayed
 * as "myevents" for authenticated regular user
 */
export default class Event extends Component {
  /**
   * React's method to render react component.
   * Renders card for event details
   *
   * @return {object}
   */
  render() {
    return (
      <div className="col-md-4 event" style={{ height: "300px" }}>
        <div className="card">
          <div className="card-block" style={{ height: "300px" }}>
            <h5 className="card-title"><b>{this.props.eventDetails.title}</b></h5>
            <p className="card-text h6">{`${this.props.eventDetails.description.substr(0, 50)}...`}</p>
            <p className="card-text h6"><b>Venue</b> {`${this.props.eventDetails.venue.substr(0, 25)}...`}</p>
            <p className="card-text h6">
              <b>Date</b>: {moment(this.props.eventDetails.startDate).format('DD MMMM YYYY')}
            </p>
            <p className="card-text h6"><b>Time</b>: {this.props.eventDetails.time}</p>
            <p className="text-center">
              <Link to={`/events/${this.props.eventDetails.id}`} className="btn btn-sm btn-primary">
                <i className="fa fa-info-circle fa-lg" /> View Event
              </Link>
              <Link to={`./modifyevent/${this.props.eventDetails.id}`} className="btn btn-sm btn-success">
                <i className="fa fa-edit fa-lg" /> Modify
              </Link>
              <Link to="#" className="btn btn-sm btn-danger" data-toggle="modal"
                data-target={`#${this.props.eventDetails.id}`}>
                <i className="fa fa-trash-o fa-lg" /> Delete
              </Link>
            </p>
          </div>
        </div>
        <DeleteModal item="event" itemId={this.props.eventDetails.id} />
      </div>
    );
  }
}
