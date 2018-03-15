import React, { Component } from 'react';
import axios from 'axios';
import { history } from '../routes';

/**
 * React component for delete modal
 */
export default class DeleteModal extends Component {
  /**
   * React's method to render react component.
   * Iterates array of events to render
   *
   * @return {object}
   */
  deleteObject = () => {
    if (this.props.item === 'event') {
      let eventId = this.props.objectId;
      axios({
        method: 'DELETE',
        url: `/api/v1/events/${eventId}`,
        headers: { 'x-access-token': localStorage.getItem('x-access-token') },
        withCredentials: true,
      })
        .then((response) => {
          history.push("/myevents");
        })
        .catch((err) => {

        });
    } else if (this.props.item === 'center') {
      let centerId = this.props.objectId;
      axios({
        method: 'DELETE',
        url: `/api/v1/centers/${centerId}`,
        headers: { 'x-access-token': localStorage.getItem('x-access-token') },
        withCredentials: true,
      })
        .then((response) => {
          this.props.show('addCenter'); // to trigger rerendering of AdminCenters
          return this.props.show('centers');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  /**
   * React's method to render react component.
   * Renders delete modal
   *
   * @return {object}
   */
  render() {
    return (
      <div className="modal fade"
        id={`${this.props.objectId}`} tabIndex="-1" role="dialog" aria-labelledby="11Label" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="eventModalLabel">Delete {this.props.item}</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="text-center">Are you sure you want to delete this {this.props.item}?</p>
              <form />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal" onClick={this.deleteObject}>
                Delete {this.props.item}
              </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
