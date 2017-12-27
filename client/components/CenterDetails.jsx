import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Center from './Center.jsx';
import Location from './Location.jsx';
import { connect } from 'react-redux';
import { getCenter } from '../actions/centerAction';

class CenterDetails extends Component {

  componentDidMount () {
    document.body.style.backgroundColor = 'white !important';
    document.body.style.backgroundImage = 'none';
    let centerId = this.props.match.params.id;
    this.props.dispatch(getCenter(centerId));
  }

  render () {
    return (
      <div>
        <NavBar page='AllCenters'/>
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