import React, { Component } from "react";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from "./NavBar.jsx";
import { addEvent } from '../actions/eventAction';
import { history } from '../routes';


class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      centers: []
    };
  }

  componentWillMount() {
    let token = localStorage.getItem('x-access-token');
    try {
      let decoded = jwtDecode(token);
    } catch (e) {
      return history.push("/login");
    }
  }

  handleChange = (e) => {
    this.setState({
      event: {
        ...this.state.event,
        [e.target.name]: e.target.value,
        venue: this.refs.venue.options[this.refs.venue.selectedIndex].text
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let eventDetails = this.state.event;
    const { dispatch } = this.props;
    let eventForm = new FormData();
    eventForm.append('title', eventDetails.title);
    eventForm.append('venue', eventDetails.venue);
    eventForm.append('description', eventDetails.description);
    eventForm.append('centerId', eventDetails.centerId);
    eventForm.append('time', eventDetails.time);
    eventForm.append('date', eventDetails.date);
    eventForm.append('image', this.refs.image.files[0]);
    return dispatch(addEvent(eventForm));
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/v1/centers',
      withCredentials: true,
    })
      .then((response) => {
        this.setState({ centers: response.data.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    if (this.props.status == 'Success') {
      return <Redirect to="/myevents" push />;
    }
    return (
      <div>
        <NavBar page="AddEvent" />
        <div className="container add-event ">
          <div className="row">
            <div className="container">
              <form ref="form">
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-3 col-form-label" />
                  <div className="col-sm-9">
                    { (this.props.status == 'Error') &&
                      <div className="form-group row" style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                        <div className="alert alert-dismissible alert-danger fade show" role="alert">
                          <small>{this.props.message.toString().split(',').join(', ')}</small>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                <p className="text-center h5">
                  <b>ADD EVENT</b>
                </p>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Title
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="title" placeholder="Title" onChange={this.handleChange} />
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
                    <select className="form-control" ref="venue" name="centerId" onChange={this.handleChange}>
                      <option />
                      {
                        (this.state.centers.map((center) => <option key={center.id} value={center.id}>{center.name}</option>))
                      }
                    </select>
                    <small id="fileHelp" className="form-text text-muted">
                      <a href="./centers" target="_blank">
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
                    <input type="date" className="form-control" name="date" onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">
                    Time
                  </label>
                  <div className="col-sm-9">
                    <input type="time" className="form-control" name="time" onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="exampleInputFile" className="col-sm-3 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-9">
                    <input
                      ref="image"
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
                      <i className="fa fa-plus fa-lg" /> Add Event
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

const mapStateToProps = (state) => ({
  status: state.eventReducer.status,
  message: state.eventReducer.message
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);

