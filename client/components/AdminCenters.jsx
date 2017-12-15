import React, { Component } from 'react';
import { connect } from 'react-redux';
import Center from './Center.jsx';
import { getAllCenters } from '../actions/centerAction';

class AdminCenters extends Component {

  componentDidMount() {
    this.props.dispatch(getAllCenters());
  }

  render() {
    return (
      <div id="centers" className="panel centers">
        <div  id="events" className="container events">
          <div className="row event-row">
            {
                  (this.props.allCenters.data.reverse().map((center) =>  <Center key={center.id} centerDetails={center} show={this.props.show} />))
            }
          </div>
        </div>
      </div>
      )
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
)(AdminCenters);