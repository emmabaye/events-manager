import React, { Component } from 'react';
import AdminEvent from './AdminEvent.jsx';

/**
 * React component to display
 * events for a given center in
 * admin panel
 */
class CenterEventsCard extends Component {
  /**
   * React's method to render react component.
   * Iterates array of events to render
   *
   * @return {object}
   */
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
