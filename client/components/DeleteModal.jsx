import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserEvents, deleteEvent } from '../actions/eventAction';
import { getAllCenters, deleteCenter } from '../actions/centerAction';

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
  deleteItem = () => {
    if (this.props.item === 'event') {
      const eventId = this.props.itemId;
      this.props.dispatch(deleteEvent(eventId));
      setTimeout(() => {
        let { currentPage } = this.props.myEvents.data.page;
        this.props.dispatch(getUserEvents(currentPage));
      }, 1000);
    } else if (this.props.item === 'center') {
      let centerId = this.props.itemId;
      this.props.dispatch(deleteCenter(centerId));
      setTimeout(() => {
        let { currentPage } = this.props.allCenters.data.page;
        this.props.dispatch(getAllCenters(currentPage));
      }, 1000);
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
        id={`${this.props.itemId}`} tabIndex="-1" role="dialog" aria-labelledby="11Label" aria-hidden="true">
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
              <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal" onClick={this.deleteItem}>
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
