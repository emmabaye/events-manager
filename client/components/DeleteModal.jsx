import React, { Component } from 'react';
import axios from 'axios';
import { history } from '../routes'

export default class DeleteModal extends Component {

  deleteObject = () => {
    console.log("DELETING OBJECT");
    let eventId = this.props.objectId;
    axios({
      method: 'DELETE',
      url:'/api/v1/events/' + eventId,
      headers: {'x-access-token': localStorage.getItem('x-access-token')},
      withCredentials: true,
      })
      .then((response) => {
         history.push("/myevents");
      })
      .catch((err) => {
        console.log("ERROR ",err);
        console.log("error in delelting obj")
    });
  }

  render () {
      return (
        <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title" id="eventModalLabel">Delete event</h6>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p className="text-center">Are you sure you want to delete this event?</p>
                    <form>
                        
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal" onClick={this.deleteObject}>Delete Event</button>
                </div>
            </div>
        </div>
    </div>
    
      )
  }
}