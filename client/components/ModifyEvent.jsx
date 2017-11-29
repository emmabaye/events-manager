import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import '../styles/modifyevents.scss';
import Footer from './Footer.jsx';

export default class ModifyEvent extends Component {
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
                <div className="container modify-event ">
                    <div className= "row">
                        <div className="container">
                            <form>
                                <p className="text-center h5"><b>MODIFY EVENT</b></p>
                                <div className="form-group row">
                                    <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="" placeholder="Title" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="Description" className="col-sm-3 col-form-label">Description</label>
                                    <div className="col-sm-9">
                                        <textarea type="text" className="form-control" id="" placeholder="Description" />
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
                                        <small id="fileHelp" className="form-text text-muted"><a href="./centers.htm">View Centers</a></small>
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
                                    <label htmlFor="exampleInputFile" className="col-sm-3 col-form-label">Image</label>
                                    <div className="col-sm-9">
                                        <input type="file" className="form-control" id="exampleInputFile" aria-describedby="fileHelp" />
                                        <small id="fileHelp" className="form-text text-muted">( Optional )</small>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-sm-3 col-sm-9">
                                        <div className="row text-center">
                                            <div className="col-sm-5">
                                                <button type="submit" className="btn btn-sm btn-success" ><i className="fa fa-edit fa-lg" /> Update</button>
                                            </div>

                                            <div className="col-sm-5" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
