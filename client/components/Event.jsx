import React, { Component } from 'react';

export default class Event extends Component {
  render () {
    return (
       <div className="col-md-4 event">
    <div className="card">
      <div className="card-block">
        <h5 className="card-title"><b>Cool Off Party</b></h5>
        <p className="card-text h6">End of year cool off party. Performing live Lorem, Ipsum, Icebox and many more...</p>
        <p className="card-text h6"><b>Venue</b>: Ojota, Lagos</p>
        <p className="card-text h6"><b>Date</b>: Saturday, 23 December, 2017</p>
        <p className="card-text h6"><b>Time</b>: 4:30pm</p>
        <p className="text-center"><a href="./event.htm" className="btn btn-sm btn-primary"><i className="fa fa-info-circle fa-lg"></i> View Event</a>
        <a href="./modifyevent.htm" className="btn btn-sm btn-success"><i className="fa fa-edit fa-lg"></i> Modify</a>
        <a href="#" className="btn btn-sm btn-danger" data-toggle="modal" data-target="#deleteModal"><i className="fa fa-trash-o fa-lg"></i> Delete</a></p>
      </div>
    </div>
  </div>
    )
   
  }
}