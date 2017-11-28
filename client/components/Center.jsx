import React, { Component } from 'react';

export default class Center extends Component {
  render() {
    return (
            <div className="col-md-4 event">
                <div className="card">
                    <div className="card-block">
                        <h5 className="card-title"><b>City Halls</b></h5>
                        <p className="card-text h6">Suitable center for all kinds of events. We offer  affordable prices.</p>
                        <p className="card-text h6"><b>Location</b>: Ojota, Lagos</p>
                        <p className="card-text h6"><b>Capacity</b>: 500 seats</p>
                        <p className="card-text h6"><b>Price</b>: &#8358;150 000</p>
                        <p className="text-center"><a href="./centerdetails3.htm" className="btn btn-sm btn-primary"><i className="fa fa-info-circle fa-lg"></i> View Center</a>
                    </p>
                </div>
           </div>
           </div>
    );
  }
}
