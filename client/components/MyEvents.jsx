import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import NavBar from './NavBar.jsx';
import Event from './Event.jsx';
import DeleteModal from './DeleteModal.jsx';
import { connect } from 'react-redux';

class MyEvents extends Component {

    constructor(props){
      super(props);
      this.state = {
        myEvents: []
      };
    }

    componentDidUpdate() {
      console.log("COMPONENT DID UPDATE");
      let token = localStorage.getItem('x-access-token');
      let decoded = jwtDecode(token);
      let userId = decoded.id;

      axios({
      method: 'GET',
      url:'http://localhost:3000/api/v1/users/' + userId,
      withCredentials: true,
      })
      .then((response) => {
        console.log("LETS GET MY EVENTS: ",response.data.data.Events);

        if(this.state.myEvents.length > response.data.data.Events.length){
           this.setState({ myEvents: response.data.data.Events});
        }
       
      })
      .catch((err) => {
        console.log(err.response);
      });
    }


    componentDidMount() {
      console.log("MOUNTING");
      document.body.style.backgroundImage = "url('../img/ambitious-creative-co-rick-barrett-110145.jpg')";
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundAttachment = 'fixed';

      let token = localStorage.getItem('x-access-token');
      let decoded = jwtDecode(token);
      let userId = decoded.id;
      console.log("USER ID: ", decoded.id);

      axios({
      method: 'GET',
      url:'http://localhost:3000/api/v1/users/' + userId,
      withCredentials: true,
      })
      .then((response) => {
        console.log("LETS GET MY EVENTS: ",response.data.data.Events);
        this.setState({ myEvents: response.data.data.Events});
      })
      .catch((err) => {
        console.log(err.response);
      });

    }



    render() {
        return (
            <div>
                <NavBar />
                <div className="container events">
			            <div className="row event-row">
                    {
                      (this.state.myEvents.map((event) =>  <Event key={event.id} eventDetails={event} />))
                    }
			            </div>
		            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    allState: state.userReducer
  }
}

export default connect(
  mapStateToProps,
  null
)(MyEvents)

