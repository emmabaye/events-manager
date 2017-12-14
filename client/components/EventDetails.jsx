import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Location from './Location.jsx';
import Footer from './Footer.jsx';

class EventDetails extends Component {

  componentDidMount() {
    document.body.style.backgroundColor = 'white';
  }

  render() {
    return(
      <div>
      <NavBar page='MyEvents' />
        <div class="container event-details">
          <div class="row">
            <div class="col-md-8 event">
              <div class="card mb-3">
                <img class="card-img-top img-fluid" src="/img/matty-adame-200085.jpg" height="300" alt="Card image cap" />
                <div class="card-block">
                  <h5 class="card-title"><b>Cool Off Party</b></h5>
                  <p class="card-text">End of year cool off party. Performing live Lorem, Ipsum, Icebox and many more</p>
                  <p>Lorem ipsum dolor sit amet, consectetur uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              <Location />
            </div>
            <div class="col-md-4 venue-date" >
              <div class="container">
                <div class="row">
                  <div class="card">
                    <h6 class="card-header"><b>VENUE</b></h6>
                    <div class="card-block">
                      <p class="card-text"><p>City Halls,dolor in reprehenderit in voluptate velit esse cillum dolore eu, Lagos, Nigeria </p></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="card">
                    <h6 class="card-header"><b>DATE & TIME</b></h6>
                    <div class="card-block">
                      <p class="card-text">Saturday, 23 December, 2017</p>
                      <p class="card-text">4:30pm</p>
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

export default EventDetails;