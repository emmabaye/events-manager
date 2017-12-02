import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import CenterCard from './CenterCard.jsx';
import { getAllCenters } from '../actions/centerAction';
import { history } from '../routes';

class AllCenters extends Component {

  constructor(props) {
    super(props);
  }

  

  componentDidMount() {
    document.body.style.backgroundImage = "url('../img/ambitious-creative-co-rick-barrett-110145.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    this.props.dispatch(getAllCenters());
  }
  
  render() {
    return (
            <div>
              <NavBar page='AllCenters' />
              <div id="centers" className="panel centers">
			          <div  id="events" className="container events">
                <div className="row event-row">
                {
                  (this.props.allCenters.data.map((center) =>  <CenterCard key={center.id} centerDetails={center} />))
                }
                 </div>
                </div>
              </div>
              <Footer />
            </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: (actionObject) => dispatch(actionObject)
});

const mapStateToProps = (state) => ({
    allCenters: state.centerReducer.allCenters
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllCenters);

