import React, { Component } from 'react';
import Center from './Center.jsx';

class AdminCenters extends Component {

	render() {
		return (
			<div id="centers" className="panel centers">
				<div  id="events" className="container events">
					<div className="row event-row">
						<Center show={this.props.show} />
						<Center show={this.props.show} />
						<Center show={this.props.show} />
						<Center show={this.props.show} />
					</div>
				</div>
			</div>
			)
	}
}

export default AdminCenters