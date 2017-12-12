import React, { Component } from "react";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from "./NavBar.jsx";
import { getEvent, modifyEvent } from '../actions/eventAction';
import { history } from '../routes';


class ModifyEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event:{},
      centers: []
    }
  }

  componentWillMount () {
    let token = localStorage.getItem('x-access-token');
      try{
         let decoded = jwtDecode(token);
         
       } catch (e) {
       return history.push("/login")
    }
  }

  handleChange = (e) => {
    this.setState({ event: {
      ...this.state.event, 
      [e.target.name]: e.target.value,
      venue: this.refs.venue.options[this.refs.venue.selectedIndex].text }
    });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      let eventDetails = this.state.event;
      const { dispatch } = this.props;
      return dispatch(modifyEvent(eventDetails));
  }

  componentDidMount() {
    let eventId = this.props.match.params.id;
    this.props.dispatch(getEvent(eventId));
  }

  componentDidUpdate() {
    if (Object.keys(this.state.event).length == 0 && this.state.centers.length == 0) {
      axios({
          method: 'GET',
          url: '/api/v1/centers',
          withCredentials: true,
        })
        .then((response) => {
          this.setState({
            event:  {
          ...this.props.event,
          date: this.props.event.date.substring(0, 10)
        },
            centers: response.data.data
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }

  render() {
    if( this.props.status == 'Success') {
      return <Redirect to="/myevents" push={true} />
    }
    return (
      <div>
        <NavBar page='ModifyEvent' />
        <div className="container add-event ">
          <div className="row">
            <div className="container">
              <form>
               <div className="form-group row">
              <label htmlFor="" className="col-sm-3 col-form-label"></label>
              <div className="col-sm-9">
               { (this.props.status == 'Error') &&
                  <div className="form-group row" style={{width:'100%', marginRight: 'auto', marginLeft:'auto'}}>
                    <div className="alert alert-dismissible alert-danger fade show" role="alert">
                        <small>{this.props.message.toString().split(',').join(', ')}</small>
                      </div>
                    </div>
                }
                </div>
            </div>
                <p className="text-center h5">
                  <b>MODIFY EVENT</b>
                </p>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Title
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="title" value={this.state.event.title}  onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="Description" className="col-sm-3 col-form-label">
                    Description
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={this.state.event.description}
                      placeholder="Description"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="venue" className="col-sm-3 col-form-label">
                    Venue
                  </label>
                  <div className="col-sm-9">
                    <select className="form-control" ref="venue"  name="centerId" onChange={this.handleChange}>
                      <option key={this.state.event.centerId}  value={this.state.event.centerId}>{this.state.event.venue}</option>
                      {
                        (this.state.centers.map((center) =>  <option key={center.id}  value={center.id}>{center.name}</option>))
                      }
                    </select>
                    <small id="fileHelp" className="form-text text-muted">
                      <a href="/centers" target="_blank">
                        View Centers
                      </a>
                    </small>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Date
                  </label>
                  <div className="col-sm-9">
                    <input type="date" className="form-control" name="date" value={this.state.event.date} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Time
                  </label>
                  <div className="col-sm-9">
                    <input type="time" className="form-control" name="time" value={this.state.event.time} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="exampleInputFile" className="col-sm-3 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      aria-describedby="fileHelp"
                      onChange={this.handleChange}
                    />
                    <small id="fileHelp" className="form-text text-muted">
                      ( Optional )
                    </small>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="offset-sm-3 col-sm-9">
                    <button type="submit" className="btn btn-sm btn-success" onClick={this.handleSubmit} >
                      <i className="fa fa-plus fa-lg" /> Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
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
)(ModifyEvent);

