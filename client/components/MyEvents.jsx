import React, { Component } from 'react';
import NavBar from  './NavBar.jsx';
import Event from './Event.jsx'
import DeleteModal from './DeleteModal.jsx'
import '../styles/myevents.scss';

export default class extends Component {
    render () {
        return (
            <div>
            <NavBar />
            <div className="container events">
			        <div className="row event-row">
		            <Event />
			          <Event />
                <Event />
			        </div>
              <div className="row event-row">
		            <Event />
			          <Event />
                <Event />
			        </div>
		        </div>
             <DeleteModal />
           </div>
          
        )
    }
}