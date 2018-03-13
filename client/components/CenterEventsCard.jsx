import React, { Component } from 'react';
import AdminEvent from './AdminEvent.jsx';

class CenterEventsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h6 className="card-header"><b>EVENTS</b></h6>
        {
          (this.props.events.map((event) => <AdminEvent key={event.id} event={event} />))
        }
      </div>
    );
  }
}

export default CenterEventsCard;
