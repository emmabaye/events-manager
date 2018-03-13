import React, { Component } from 'react';
import { connect } from 'react-redux';
import Center from './Center.jsx';
import { getAllCenters } from '../actions/centerAction';

/**
 * React component for admin center
 * displayed in the admin panel
 */
export class AdminCenters extends Component {
  /**
   * React's componentDidMount life cycle method
   * runs after component has been mounted.
   * Dispatches action creator to get all centers.
   *
   * @return {undefined}
   */
  componentDidMount() {
    this.props.dispatch(getAllCenters());
  }

  /**
   * React's method to render react component
   * @return {object}
   */
  render() {
    return (
      <div id="centers" className="panel centers">
        <div id="events" className="container events">
          <div className="row event-row">
            {
              (this.props.allCenters.data.reverse().map((center) =>
                <Center key={center.id} centerDetails={center} show={this.props.show} />)
              )
            }
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
 * Makes redux state available in this
 * component's props
 *
 * @param  {object} state global state
 * @return {object} props object
 */
const mapStateToProps = (state) => ({
  allCenters: state.centerReducer.allCenters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminCenters);
