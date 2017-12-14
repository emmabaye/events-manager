import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import AdminPanelBody from './AdminPanelBody.jsx';

class AdminPanel extends Component {

  //show = (elemId) => {
  //  let elementsObject = this.getElement();
   // document.getElementById("add-center").style.display = "none";
    //document.getElementById("modify-center").style.display = "none";
    //document.getElementById("centers").style.display = "none";
   // document.getElementById("center-details").style.display = "none";
    //document.getElementById(elemId).style.display = "flex";
 // }
 // 
 // 
  componentDidUpdate(){
    console.log("ADMIN PANEL UPDATED");
  }

  componentDidMount() {
    document.body.style.backgroundColor = 'white';
  }

  render() {
    return (
      <div>
        <NavBar page='LandingPage' />
          <AdminPanelBody />
        <Footer />
      </div>
      )
  }
}

export default AdminPanel;