import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal.jsx'; // eslint-disable-line


/**
 * React component for center card
 * displayed in admin panel
 */
export default class Center extends Component {
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
            <p className="card-text h6" >{`${this.props.centerDetails.description.substr(0, 50)}...`}</p>
            <p className="card-text h6"><b>Location</b>:{`${this.props.centerDetails.location.substr(0, 25)}...`}</p>
            <p className="card-text h6"><b>Capacity</b>: {this.props.centerDetails.capacity} seats</p>
            <p className="card-text h6"><b>Price</b>: &#8358;{this.props.centerDetails.price}</p>
            <p className="card-text">
              <b>Availability</b>: {
                (this.props.centerDetails.available === 'true') ? "Center is Available" : "Not Available"
              }
            </p>
            <p className="text-center">
              <Link to="#" className="btn btn-sm btn-primary"
                onClick={() => this.props.show('centerDetails', this.props.centerDetails.id)} >
                <i className="fa fa-info-circle fa-lg" /> View Center
              </Link>
              <Link to="#" className="btn btn-sm btn-success"
                onClick={() => this.props.show('modifyCenter', this.props.centerDetails.id)} >
                <i className="fa fa-edit fa-lg" /> Modify
              </Link>
              <Link to="#" className="btn btn-sm btn-danger" data-toggle="modal"
                data-target={`#${this.props.centerDetails.id}`}><i className="fa fa-trash-o fa-lg" /> Delete
              </Link>
            </p>
          </div>
        </div>
        <DeleteModal item="center" itemId={this.props.centerDetails.id} show={this.props.show} />
      </div>
    );
  }
}
