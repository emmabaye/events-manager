import React, { Component } from 'react';

export default class CenterCard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="col-md-4 event">
      <div className="card">
        <div className="card-block">
          <h5 className="card-title"><b>{this.props.centerDetails.name}</b></h5>
          <p className="card-text h6">{this.props.centerDetails.description}</p>
          <p className="card-text h6"><b>Location</b>:{this.props.centerDetails.location}</p>
          <p className="card-text h6"><b>Capacity</b>: {this.props.centerDetails.capacity} seats</p>
          <p className="card-text h6"><b>Price</b>: &#8358;{this.props.centerDetails.capacity}</p>
          <p className="text-center"><a href="./centerdetails3.htm" className="btn btn-sm btn-primary"><i className="fa fa-info-circle fa-lg"></i> View Center</a>
        </p>
      </div>
    </div>
  </div>
    );
  }
}
