import React, { Component } from 'react';

export default class Center extends Component {
  render() {
    return (
        <div className="card mb-3">
          <img className="card-img-top img-fluid" src="./img/radek-grzybowski-76296.jpg" height="300px" alt="Card image cap" />
          <div className="card-block">
              <h5 className="card-title"><b>Central Auditorium</b></h5>
              <p className="card-text">Suitable center for all kinds of events where sound quality is a priority. We offer affordable prices.</p>
              <p>Lorem ipsum dolor sit amet, consectetur uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="card-text"><b>Capacity: 1000 seats</b></p>
              <p className="card-text"><b>Facility: Generator, Toilet, Car Park, Security</b></p>
              <p className="card-text"><b>Address: Lorem ipsum dolor sit amet, consectetur, Ojota, Lagos</b></p>
              <p className="card-text"><b>Price: &#8358;200 000</b></p>
          </div>
    </div>
    );
  }
}
