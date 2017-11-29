import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import CenterCard from './CenterCard.jsx'

export default class AllCenters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      centers: []
    }
  }

  componentDidMount() {
    document.body.style.backgroundImage = "url('../img/ambitious-creative-co-rick-barrett-110145.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    axios({
			method: 'GET',
			url:'http://localhost:3000/api/v1/centers',
			withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ centers: response.data.data});
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  
  render() {
    return (
            <div>
              <NavBar />
              <div id="centers" className="panel centers">
			          <div  id="events" className="container events">
                <div className="row event-row">
                {
                  (this.state.centers.map((center) =>  <CenterCard key={center.id} centerDetails={center} />))
                }
                 </div>
                </div>
              </div>
              <Footer />
            </div>
    );
  }
}
