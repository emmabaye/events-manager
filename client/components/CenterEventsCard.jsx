import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminEvent from './AdminEvent.jsx';
import Pagination from './Pagination.jsx';
import { getCenterEvents } from '../actions/centerAction';

/**
 * React component to display
 * events for a given center in
 * admin panel
 */
export class CenterEventsCard extends Component {
  componentWillMount() { //eslint-disable-line
    const { centerId } = this.props;
    this.props.dispatch(getCenterEvents(centerId, "1"));
  }

  /**
   * React's method to render react component.
   * Iterates array of events to render
   *
   * @return {object}
   */
  render() {
    if (this.props.centerEvents === undefined) {
      return null;
    }
    if (this.props.centerEvents.rows === undefined) {
      return null;
    }
    return (
      <div className="card">
        <h6 className="card-header"><b>EVENTS</b></h6>
        <div className="row">
          { this.props.centerEvents.rows !== undefined &&
            (this.props.centerEvents.rows.map( //eslint-disable-line
              (event) => <AdminEvent key={event.id} event={event} dispatch={this.props.dispatch} />))
          }
        </div>
        { this.props.centerEvents.rows.length > 0 &&
          <Pagination
            firstPage={this.props.centerEvents.page.firstPage}
            currentPage={this.props.centerEvents.page.currentPage}
            previousPage={this.props.centerEvents.page.previousPage}
            nextPage={this.props.centerEvents.page.nextPage}
            lastPage={this.props.centerEvents.page.lastPage}
            dispatch={this.props.dispatch}
            getItems={getCenterEvents}
          />
        }
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
 * Makes redux state available in this
 * component's props
 *
 * @param  {object} state global state
 * @return {object} props object
 */
const mapStateToProps = (state) => ({
  centerEvents: state.centerReducer.centerEvents
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterEventsCard);
