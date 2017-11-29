import  React, { Component } from 'react';
import NavBar from './NavBar.jsx';

export default class AddEvent extends Component {
  render () {
		return (
      <div>
		<NavBar />
        <div className="container add-event ">
		<div className= "row">
			<div className="container">
				<form>
					<p className="text-center h5"><b>ADD EVENT</b></p>
					<div className="form-group row">
						<label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
						<div className="col-sm-9">
							<input type="text" className="form-control" id="" placeholder="Title" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="Description" className="col-sm-3 col-form-label">Description</label>
						<div className="col-sm-9">
							<textarea type="text" className="form-control" id="" placeholder="Description">
							</textarea>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="venue" className="col-sm-3 col-form-label">Venue</label>
						<div className="col-sm-9">
							<select className="form-control" id="venue">
								<option>City Halls</option>
								<option>Ipsum Gardens</option>
								<option>Fred Smith Park</option>
								<option>Lorem Auditorium</option>
								<option>EM Event Center</option>
							</select>
							<small id="fileHelp" className="form-text text-muted"><a href="./centers.htm" target="_blank">View Centers</a></small>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="title" className="col-sm-3 col-form-label">Date</label>
						<div className="col-sm-9">
							<input type="date" className="form-control" id="" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="title" className="col-sm-3 col-form-label">Time</label>
						<div className="col-sm-9">
							<input type="time" className="form-control" id="" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="exampleInputFile"  className="col-sm-3 col-form-label">Image</label>
						<div className="col-sm-9">
							<input type="file" className="form-control" id="exampleInputFile" aria-describedby="fileHelp" />
							<small id="fileHelp" className="form-text text-muted">( Optional )</small>
						</div>
					</div>
					
					
					<div className="form-group row">
						<div className="offset-sm-3 col-sm-9">
							<button type="submit" className="btn btn-sm btn-success"><i className="fa fa-plus fa-lg"></i> Add Event</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
			</div>
		)
		
	}
}
