import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Center from './Center.jsx'
import '../styles/allcenters.scss';

export default class AllCenters extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = "url('../img/ambitious-creative-co-rick-barrett-110145.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
  }
  
  render() {
    return (
            <div>
              <NavBar />
              <div id="centers" className="panel centers">
			          <div  id="events" className="container events">
                 <div className="row event-row">
                   <Center />
                   <Center />
                   <Center />
                 </div>
                </div>
              </div>
              <Footer />
            </div>
    );
  }
}
