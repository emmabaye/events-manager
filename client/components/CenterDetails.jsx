import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Center from './Center.jsx';
import Location from './Location.jsx';
import '../styles/centerdetails.scss'

export default class CenterDetails extends Component {
  componentDidMount () {
    document.body.style.backgroundColor = 'white !important';
    document.body.style.backgroundImage = 'none';
  }

  render () {
    return (
      <div>
        <NavBar />
        <div id="center-details" className=" panel center-details">	
			    <div className="container event-details">
				     <div className="row">
					     <div className=" event">
                 <Center />
                 <Location />
                 <div class="row venue-date" >
						       <div class="container">
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