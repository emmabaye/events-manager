import React, { Component } from 'react';
import moment from 'moment';
import NavBar from './NavBar.jsx';
import Location from './Location.jsx';
import Footer from './Footer.jsx';
import { connect } from 'react-redux';
import { getEvent, modifyEvent } from '../actions/eventAction';

class EventDetails extends Component {

  componentDidMount() {
    document.body.style.backgroundColor = 'white';
    let eventId = this.props.match.params.id;
    this.props.dispatch(getEvent(eventId));
  }

  componentDidUpdate() {
    console.log("EVENT PROPS ", this.props.event);
  }



  render() {
    return(
      <div>
      <NavBar page='MyEvents' />
        <div className="container event-details">
          <div className="row">
            <div className="col-md-8 event">
              <div className="card mb-3">
                <img className="card-img-top img-fluid" src="/img/matty-adame-200085.jpg" height="300" alt="Card image cap" />
                <div className="card-block">
                  <h5 className="card-title"><b>{this.props.event.title}</b></h5>
                  <p className="card-text">{this.props.event.description}</p>
                  </div>
              </div>
              { this.props.event.Center !== undefined && <Location location={`${this.props.event.Center.name}, ${this.props.event.Center.location}`} />}
            </div>
            <div className="col-md-4 venue-date" >
              <div className="container">
                <div className="row">
                  <div className="card">
                    <h6 className="card-header"><b>VENUE</b></h6>
                    <div className="card-block">
                      <p className="card-text">{this.props.event.venue}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="card">
                    <h6 className="card-header"><b>DATE & TIME</b></h6>
                    <div className="card-block">
                      <p className="card-text">{moment( this.props.event.date ).format('DD MMMM YYYY')}</p>
                      <p className="card-text">{this.props.event.time}</p>
                    </div>
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
    status: state.eventReducer.status,
    message: state.eventReducer.message,
    event: state.eventReducer.event
  }
};

export default connect(
     mapStateToProps,
    mapDispatchToProps
)(EventDetails);