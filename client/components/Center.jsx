import React, { Component } from 'react';
import DeleteModal from './DeleteModal.jsx';

export default class Center extends Component {
  render() {
    return (
        <div className="col-md-4 event">
          <div className="card">
            <div className="card-block">
              <h5 className="card-title"><b>Central Auditorium</b></h5>
                <p className="card-text h6">With supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text h6"><b>Location</b>: Lagos</p>
                <p className="card-text h6"><b>Capacity</b>: 1 000 seats</p>
                <p className="card-text h6"><b>Price</b>: 300 000</p>
                <p className="text-center"><a href="#" className="btn btn-sm btn-primary" onClick={ () => this.props.show('centerDetails') } ><i className="fa fa-info-circle fa-lg"></i> View Center</a>
                <a href="#" className="btn btn-sm btn-success" onClick={ () => this.props.show('modifyCenter') } ><i className="fa fa-edit fa-lg"></i> Modify</a>
                <a href="#" className="btn btn-sm btn-danger" data-toggle="modal" data-target="#deleteModal"><i className="fa fa-trash-o fa-lg"></i> Delete</a></p>
              </div>
            </div>
            <DeleteModal objectId={1}  />
        </div>
    );
  }
}
