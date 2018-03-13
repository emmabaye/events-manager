import React, { Component } from 'react';
import moment from 'moment';
import DeleteModal from './DeleteModal.jsx';

export default class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4 event">
        <div className="card">
          <div className="card-block">
            <h5 className="card-title"><b>{this.props.eventDetails.title}</b></h5>
            <p className="card-text h6"> {this.props.eventDetails.description}</p>
            <p className="card-text h6"><b>Venue</b> {this.props.eventDetails.venue}</p>
            <p className="card-text h6"><b>Date</b>: {moment(this.props.eventDetails.date).format('DD MMMM YYYY')}</p>
            <p className="card-text h6"><b>Time</b>: {this.props.eventDetails.time}</p>
            <p className="text-center"><a href={`/events/${this.props.eventDetails.id}`} className="btn btn-sm btn-primary"><i className="fa fa-info-circle fa-lg" /> View Event</a>
              <a href={`./modifyevent/${this.props.eventDetails.id}`} className="btn btn-sm btn-success"><i className="fa fa-edit fa-lg" /> Modify</a>
              <a href="#" className="btn btn-sm btn-danger" data-toggle="modal" data-target={`#${this.props.eventDetails.id}`}><i className="fa fa-trash-o fa-lg" /> Delete</a></p>
          </div>
        </div>
        <DeleteModal item="event" objectId={this.props.eventDetails.id} />
      </div>
    );
  }
}
