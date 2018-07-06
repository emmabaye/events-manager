import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * React component for center card
 * displayed for regular user.
 */
export default class CenterCard extends Component {
  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <div className="col-md-4 event" style={{ height: "300px" }}>
        <div className="card">
          <div className="card-block" style={{ height: "300px" }}>
            <h5 className="card-title"><b>{this.props.centerDetails.name}</b></h5>
            <p className="card-text h6">{`${this.props.centerDetails.description.substr(0, 50)}...`}</p>
            <p className="card-text h6"><b>Location</b>:{`${this.props.centerDetails.location.substr(0, 25)}...`}</p>
            <p className="card-text h6"><b>Capacity</b>: {this.props.centerDetails.capacity} seats</p>
            <p className="card-text h6"><b>Price</b>: &#8358;{this.props.centerDetails.price}</p>
            <p className="card-text">
              <b>Availability</b>: {
                (this.props.centerDetails.available === 'true') ? "Center is Available" : "Not Available"
              }
            </p>

            <p className="text-center">
              <Link to={`/centers/${this.props.centerDetails.id}`} className="btn btn-sm btn-primary">
                <i className="fa fa-info-circle fa-lg" /> View Center
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
