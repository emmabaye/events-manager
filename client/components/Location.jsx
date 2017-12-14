import React, { Component } from 'react';

class Location extends Component {

	render() {
		return(
			<div class="card" style={{minHeight: "350px"}}>
				<h6 class="card-header"><b>LOCATION</b></h6>
				<div class="card-block">
					<div class="mapouter" style={{overflow: "hidden", height: "100%", width: "100%"}}><div class="gmap_canvas" style={{background: "none" ,height: "100%", width:"100%"}}>
					  <iframe style={{width: "100%", minHeight: "400px"}} id="gmap_canvas" src="https://maps.google.com/maps?q=Ojota, lagos&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
					</div>
				{/* <style>.mapouter{overflow:hidden;height:100%;width:100%;}.gmap_canvas {background:none!important;height:100%;width:100%;}</style> */}</div>
				</div>
			</div>
			)
	}
}

export default Location;