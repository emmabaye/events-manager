import React, { Component } from 'react';

export default class Location extends Component {
  render () {
    return (
      <div className="card" style={{minHeight: "350px !important"}}>
      <h6 className="card-header"><b>LOCATION</b></h6>
      <div className="card-block">
        <div className="mapouter" style={{overflow:'hidden', height:'100%', width:'100%'}}>
        <div className="gmap_canvas" style={{background:'none !important', height:'100%', width:'100%'}}><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Ojota, lagos&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
      </div>
    </div>
    )
  }
}