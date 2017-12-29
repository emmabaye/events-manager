import React, { Component } from 'react';
import { connect } from 'react-redux';
import Location from './Location.jsx';
import CenterEventsCard from './CenterEventsCard.jsx';
import { getCenter } from '../actions/centerAction';


class CenterDetails extends Component {

  componentDidMount() {
    let centerId = this.props.centerId;
    this.props.dispatch(getCenter(centerId));
  }

  componentDidUpdate() {
    console.log('EVENTs ', this.props.center.Events)
  }

  render() {
    return(
      <div id="center-details" className=" panel center-details">
        <div className="container event-details">
          <div className="row">
            <div className=" event">
              <div className="card mb-3">
                <img className="card-img-top img-fluid" src={this.props.center.image} height="300px" alt="Card image cap" />
                <div className="card-block">
                  <h5 className="card-title"><b>{this.props.center.name}</b></h5>
                  <p className="card-text">{this.props.center.description}</p>
                  <p className="card-text"><b>Capacity: {this.props.center.capacity} seats</b></p>
                  <p className="card-text"><b>Facilities: {this.props.center.facilities}</b></p>
                  <p className="card-text"><b>Address: {this.props.center.location}</b></p>
                  <p className="card-text"><b>Price: &#8358;{this.props.center.price}</b></p>
                  <p className="card-text"><b>Availability: {(this.props.center.available === 'true')? "Center is Available" : "Not Available" }</b></p>
                </div>
              </div>
              <div className="row venue-date" >
                <div className="container">
                  <Location location={`${this.props.center.name}, ${this.props.center.location}`} />
                  {this.props.center.Events !== undefined && <CenterEventsCard events={this.props.center.Events} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
    dispatch: (actionObject) => dispatch(actionObject)
});

const mapStateToProps = (state) => {
  return {
    status: state.centerReducer.status,
    message: state.centerReducer.message,
    center: state.centerReducer.center
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CenterDetails);