import React, { Component } from 'react';

export default class DeleteModal extends Component {
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
                    <button type="button" className="btn btn-sm btn-danger">Delete Event</button>
                </div>
            </div>
        </div>
    </div>
    
      )
  }
}