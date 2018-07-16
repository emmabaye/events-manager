import React, { Component } from 'react';
import { connect } from 'react-redux';
import Center from './Center.jsx';
import Pagination from './Pagination.jsx';
import { getAllCenters } from '../actions/centerAction';

/**
 * React component for admin center
 * displayed in the admin panel
 */
export class AdminCenters extends Component {
  /**
   * [constructor description]
   * @param  {objects} props React component props
   * @return {undefined}
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * React's componentDidMount life cycle method
   * runs after component has been mounted.
   * Dispatches action creator to get all centers.
   *
   * @return {undefined}
   */
  componentDidMount() {
    this.props.dispatch(getAllCenters(1));
  }

  /**
   * React's method to render react component
   * @return {object}
   */
  render() {
    if (this.props.allCenters.data.rows === undefined) {
      return null;
    }
    return (
      <div id="centers" className="panel centers">
        <div id="events" className="container events">
          <div className="row event-row">
            { this.props.allCenters.data.rows.length < 1 &&
              <span style={{ textAlign: "center" }}>YOU HAVE NO CENTER, ADD A CENTER.</span>
            }
            {
              (this.props.allCenters.data.rows.map((center) =>
                <Center key={center.id} centerDetails={center} show={this.props.show} />)
              )
            }
          </div>
          { this.props.allCenters.data.rows.length > 0 &&
          <Pagination
            firstPage={this.props.allCenters.data.page.firstPage}
            currentPage={this.props.allCenters.data.page.currentPage}
            previousPage={this.props.allCenters.data.page.previousPage}
            nextPage={this.props.allCenters.data.page.nextPage}
            lastPage={this.props.allCenters.data.page.lastPage}
            dispatch={this.props.dispatch}
            getItems={getAllCenters}
          />
          }
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
