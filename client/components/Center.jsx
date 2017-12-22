import React, { Component } from 'react';
import DeleteModal from './DeleteModal.jsx';

export default class Center extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="col-md-4 event">
          <div className="card">
            <div className="card-block">
              <h5 className="card-title"><b>{this.props.centerDetails.name}</b></h5>
              <p className="card-text h6" >{this.props.centerDetails.description.substr(0, 50) + '...'}</p>
              <p className="card-text h6"><b>Location</b>:{this.props.centerDetails.location.substr(0, 25) + '...'}</p>
              <p className="card-text h6"><b>Capacity</b>: {this.props.centerDetails.capacity} seats</p>
              <p className="card-text h6"><b>Price</b>: &#8358;{this.props.centerDetails.price}</p>
              <p className="text-center"><a href="#" className="btn btn-sm btn-primary" onClick={ () => this.props.show('centerDetails', this.props.centerDetails.id) } >
              <i className="fa fa-info-circle fa-lg"></i> View Center</a>
              <a href="#" className="btn btn-sm btn-success" onClick={ () => this.props.show('modifyCenter', this.props.centerDetails.id) } >
              <i className="fa fa-edit fa-lg"></i> Modify</a></p>
            </div>
          </div>
          <DeleteModal objectId={1}  />
        </div>
    );
  }
}
