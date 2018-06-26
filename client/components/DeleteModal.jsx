import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserEvents } from '../actions/eventAction';
import { getAllCenters } from '../actions/centerAction';

/**
 * React component for delete modal
 */
export class DeleteModal extends Component {
  /**
   * React's method to render react component.
   * Renders modal
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
          let { currentPage } = this.props.myEvents.data.page;
          this.props.dispatch(getUserEvents(currentPage));
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
          let { currentPage } = this.props.allCenters.data.page;
          this.props.dispatch(getAllCenters(currentPage));
          //this.props.show('addCenter'); // to trigger rerendering of AdminCenters
          //return this.props.show('centers');
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

/**
 * Makes redux dispatch method available in this
 * components props
 *
 * @param  {object} dispatch dispatch method
 * @return {object} props object
 */
const mapDispatchToProps = (dispatch) => ({
  dispatch: (actionObject) => dispatch(actionObject)
});

/**
 * Makes the necessary  redux state available in this
 * component's props
 *
 * @param  {object} state global state
 * @return {object} props object
 */
const mapStateToProps = (state) => ({
  myEvents: state.eventReducer.userEvents,
  allCenters: state.centerReducer.allCenters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
