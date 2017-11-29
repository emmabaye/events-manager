import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Event from './Event.jsx';
import DeleteModal from './DeleteModal.jsx';
import { connect } from 'react-redux';

class MyEvents extends Component {
    componentWillMount () {
      console.log("BANANA")
      console.log("ALL STATE ", this.props.allState);
    }
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
        );
    }
}

const mapStateToProps = (state) => {
  return {
    allState: state.userReducer
  }
}

export default connect(
  mapStateToProps,
  null
)(MyEvents)

