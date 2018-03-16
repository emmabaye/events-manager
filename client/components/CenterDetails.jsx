import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Location from './Location.jsx';
import { getCenter } from '../actions/centerAction';

/**
 * React  component for center details to be displayed
 * to regular user
 */
export class CenterDetails extends Component {
  /**
   * React's componentDidMount life cycle method
   * runs after component has been mounted.
   * Makes style changes after component has been mounted
   * and dispatches action to get center details
   * by id
   *
   * @return {undefined}
   */
  componentDidMount() {
    document.body.style.backgroundColor = 'white !important';
    document.body.style.backgroundImage = 'none';
    let centerId = this.props.match.params.id;
    this.props.dispatch(getCenter(centerId));
  }

  /**
   * React's method to render react component.
   * Renders center details
   *
   * @return {object}
   */
  render() {
    return (
      <div>
        <NavBar page="AllCenters"/>
        <div id="center-details" className=" panel center-details">
          <div className="container event-details">
            <div className="row">
              <div className=" event">
                <div className="card mb-3">
                  <img className="card-img-top img-fluid"
                    src={this.props.center.image}
                    height="300px"
                    alt="Card image cap"
                  />
                  <div className="card-block">
                    <h5 className="card-title"><b>{this.props.center.name}</b></h5>
                    <p className="card-text">{this.props.center.description}</p>
                    <p className="card-text"><b>Capacity: {this.props.center.capacity} seats</b></p>
                    <p className="card-text"><b>Facility: {this.props.center.facilities}</b></p>
                    <p className="card-text"><b>Address: {this.props.center.location}</b></p>
                    <p className="card-text"><b>Price: &#8358;{this.props.center.price}</b></p>
                  </div>
                </div>
                <div className="row venue-date" >
                  <div className="container">
                    <Location location={`${this.props.center.name}, ${this.props.center.location}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  status: state.centerReducer.status,
  message: state.centerReducer.message,
  center: state.centerReducer.center
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterDetails);
