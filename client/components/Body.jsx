import React, { Component } from 'react';

/**
 * React component fo body of landing page.
 */
export default class Body extends Component {
  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() { //eslint-disable-line class-methods-use-this
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item">
              <img className="d-block img-fluid" src="./img/matthew-essman-385642.jpg" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Find the Best Centres</h3>
                <p>Make your event memorable</p>
              </div>
            </div>
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="./img/victor-hugo-180133.jpg" alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Create Your Events</h3>
                <p>Any kind of event</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="./img/christian-fregnan-339342.jpg" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h3>The Choice is yours</h3>
                <p>We've got you covered</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container-fluid features">
          <p className="h5 text-center"> FEATURES</p>
          <div className="row">
            <div className="col-md-4 text-center feature"><br />
              <p className="text-center"><i className="fa fa-user fa-5x" /></p>
              <p className="text-center">Have full control of your events</p>
            </div>
            <div className="col-md-4 text-center feature"><br />
              <p className="text-center"><i className="fa fa-calendar-o fa-5x" /></p>
              <p className="text-center">Flexible booking for centers</p>
            </div>
            <div className="col-md-4 text-center feature"><br />
              <p className="text-center"><i className="fa fa-search fa-5x" /></p>
              <p className="text-center">Look for centres within your community</p>
            </div>
          </div>
        </div>
        <div className="container-fluid capacity">
          <div className="row-fluid">
            <p className="h5 text-center"> NO MATTER THE CAPACITY, WE'VE GOT YOU COVERED</p>
          </div>
        </div>
      </div>
    );
  }
}
