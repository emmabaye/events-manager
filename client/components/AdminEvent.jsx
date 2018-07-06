import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { cancelCenterEvent } from '../actions/centerAction';

/**
 * React component for admin event
 * card displayed in the admin panel
 *
 * @return {undefined}
 */
class AdminEvent extends Component {
  cancelCenterEvent = () => {
    console.log("HELLOP");
    let { id } = this.props.event;
    this.props.dispatch(cancelCenterEvent(id));
  }

  /**
   * React's method to render react component
   * @return {object}
   */
  render() {
    return (
      <div className="col-md-4 event">
        <div className="card">
          <div className="card-block">
            <h5 className="card-title"><b>{this.props.event.title}</b></h5>
            <p className="card-text h6">{this.props.event.description}</p>
            <p className="card-text h6"><b>Venue</b>: {this.props.event.venue}</p>
            <p className="card-text h6"><b>Date</b>: {moment(this.props.event.date).format('DD MMMM YYYY')}</p>
            <p className="card-text h6"><b>Time</b>: { this.props.event.time }</p>
            <p className="card-text h6"><b>Status</b>: {this.props.event.status}</p>
            <p className="text-center">
              <Link to={`/events/${this.props.event.id}`} className="btn btn-sm btn-primary">
                <i className="fa fa-info-circle fa-lg" /> View Event
              </Link>
              {this.props.event.status !== 'cancelled' &&
                <a href="#dcdf" onClick={this.cancelCenterEvent} className="btn btn-sm btn-danger" >
                  <i className="fa fa-times fa-lg" /> Cancel
                </a>
              }
            </p>

          </div>
        </div>
      </div>

    );
  }
}

export default AdminEvent;
