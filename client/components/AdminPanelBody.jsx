/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import AdminCenters from './AdminCenters.jsx';
import AdminCenterDetails from './AdminCenterDetails.jsx';
import AddCenter from './AddCenter.jsx';
import ModifyCenter from './ModifyCenter.jsx';

/**
 * React component for admin panel body
 */
class AdminPanelBody extends Component {
  /**
   * Constructor for AdminPanelBody Component
   * @param  {objects} props React component props
   * @return {undefined}
   */
  constructor(props) {
    super(props);
    this.state = {
      centers: {
        visible: true
      },
      addCenter: {
        visible: false
      },
      modifyCenter: {
        centerId: "",
        visible: false
      },
      centerDetails: {
        centerId: "",
        visible: false
      }
    };
  }

  /**
   * Show and hides components
   * @param  {object} elem     component to show or hide
   * @param  {string} centerId center id to get details of a specific center
   * @return {undefined}
   */
  show = (elem, centerId) => {
    let hiddenElems = {
      centers: { visible: false },
      addCenter: { visible: false },
      modifyCenter: { visible: false, centerId: "" },
      centerDetails: { visible: false, centerId: "" }
    };

    this.setState({
      ...hiddenElems,
      [elem]: { visible: true, centerId: centerId }
    });
  }

  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <div className="container-fluid admin">
        <div className="row">
          <div className="col-sm-2 side">
            <div className="list-group sidebar">centerId
              <a href="#centers" className="list-group-item list-group-item-action centers-button"
                onClick={() => this.show('centers')}>Centers</a>
              <a href="#add-center" className="list-group-item list-group-item-action add-center-button"
                onClick={() => this.show('addCenter')}>Add Center</a>
              <a href="#events" className="list-group-item list-group-item-action" >Events</a>
              <a href="#users" className="list-group-item list-group-item-action">Users</a>
            </div>
          </div>
          <div className="col-sm-10 panel-column">
            { (this.state.centers.visible) && <AdminCenters show={this.show} /> }
            { (this.state.addCenter.visible) && <AddCenter show={this.show} /> }
            { (this.state.modifyCenter.visible) &&
              <ModifyCenter show={this.show} centerId={this.state.modifyCenter.centerId} />
            }
            { (this.state.centerDetails.visible) &&
              <AdminCenterDetails centerId={this.state.centerDetails.centerId} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanelBody;
