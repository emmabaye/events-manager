import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import CenterCard from './CenterCard.jsx';
import { getAllCenters } from '../actions/centerAction';

/**
 * React component to display all centers.
 */
export class AllCenters extends Component {
  /**
   * React's componentDidMount life cycle method
   * runs after component has been mounted.
   * Makes style changes after component has been mounted
   *
   * @return {undefined}
   */
  componentDidMount() {
    document.body.style.backgroundImage = "url('../img/ambitious-creative-co-rick-barrett-110145.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    let page = 1;
    console.log("COMPONENT DID MOUNT");
    this.props.dispatch(getAllCenters(page));
  }

  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() {
    console.log("PROPS ALLCENTERS ", this.props.allCenters.data);
    if (this.props.allCenters.data.rows === undefined) {
      return null;
    }
    return (
      <div>
        <NavBar page="AllCenters" />
        <div id="centers" className="panel centers">
          <div id="events" className="container events">
            <div className="row event-row">
              {
                (this.props.allCenters.data.rows.map((center) => <CenterCard key={center.id} centerDetails={center} />))
              }
            </div>
          </div>
        </div>

        <Pagination
          firstPage={this.props.allCenters.data.page.firstPage}
          currentPage={this.props.allCenters.data.page.currentPage}
          previousPage={this.props.allCenters.data.page.previousPage}
          nextPage={this.props.allCenters.data.page.nextPage}
          lastPage={this.props.allCenters.data.page.lastPage}
          getPage={this.props.dispatch}
        />
        <Footer />
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
  allCenters: state.centerReducer.allCenters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCenters);

