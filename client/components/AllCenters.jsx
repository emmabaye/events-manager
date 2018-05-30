import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    this.props.dispatch(getAllCenters());
  }

  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() {
    console.log("PROPS ALLCENTERS ", this.props.allCenters.data);
    return (
      <div>
        <NavBar page="AllCenters" />
        <div id="centers" className="panel centers">
          <div id="events" className="container events">
            <div className="row event-row">

              {/*
                (this.props.allCenters.data.map((center) => <CenterCard key={center.id} centerDetails={center} />))
              */
              }
            </div>
          </div>
        </div>
        {
          
          
        }
        
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active">
              <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>


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

