import React, { Component } from 'react';
import moment from 'moment';

/**
 * React component for admin event
 * card displayed in the admin panel
 */
class AdminEvent extends Component {
  /**
   * React's method to render react component
   * @return {object}
   */
  render() {
    return (
      <div className="card-block">
        <div className="container events">
          <div className="row event-row">
            <div className="col-md-4 event">
              <div className="card">
                <div className="card-block">
                  <h5 className="card-title"><b>{this.props.event.title}</b></h5>
                  <p className="card-text h6">{this.props.event.description}</p>
                  <p className="card-text h6"><b>Venue</b>: {this.props.event.location}</p>
                  <p className="card-text h6"><b>Date</b>: {moment(this.props.event.date).format('DD MMMM YYYY')}</p>
                  <p className="card-text h6"><b>Time</b>: { this.props.event.time }</p>
                  <p className="card-text h6"><b>Status</b>: Holding</p>
                  <p className="text-center">
                    <a href={`/events/${this.props.event.id}`} className="btn btn-sm btn-primary">
                      <i className="fa fa-info-circle fa-lg" /> View Event
                    </a>
                    <a href="#" className="btn btn-sm btn-danger" ><i className="fa fa-times fa-lg" /> Cancel</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminEvent;
