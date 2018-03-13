import React, { Component } from 'react';

class Location extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" style={{ minHeight: "350px" }}>
        <h6 className="card-header"><b>LOCATION</b></h6>
        <div className="card-block">
          <div className="mapouter" style={{ overflow: "hidden", height: "100%", width: "100%" }}><div className="gmap_canvas" style={{ background: "none", height: "100%", width: "100%" }}>
					  <iframe style={{ width: "100%", minHeight: "400px" }} id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.props.location}&t=&z=9&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
          </div>
          {/* <style>.mapouter{overflow:hidden;height:100%;width:100%;}.gmap_canvas {background:none!important;height:100%;width:100%;}</style> */}</div>
        </div>
      </div>
    );
  }
}

export default Location;
