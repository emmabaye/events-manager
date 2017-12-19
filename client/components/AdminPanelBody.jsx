import React, { Component } from 'react';
import AdminCenters from './AdminCenters.jsx';
import AdminCenterDetails from './AdminCenterDetails.jsx';
import AddCenter from './AddCenter.jsx';
import ModifyCenter from './ModifyCenter.jsx';

class AdminPanelBody extends Component {

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

  show = (elem, centerId) => {
    let hiddenElems = {
      centers: { visible: false},
      addCenter: { visible: false},
      modifyCenter: { visible: false, centerId: ""},
      centerDetails: { visible: false, centerId: ""}
    }

    this.setState({
      ...hiddenElems,
      [elem]: { visible: true, centerId: centerId}
    });
  }


  render() {
    return(
      <div className="container-fluid admin">
        <div className='row'>
          <div className="col-sm-2 side">
            <div className="list-group sidebar">centerId
              <a href="#" className="list-group-item list-group-item-action " onClick={ () => this.show('centers') }>Centers</a>
              <a  href="#" className="list-group-item list-group-item-action" onClick={ () => this.show('addCenter') }>Add Center</a>
              <a href="#" className="list-group-item list-group-item-action" >Events</a>
              <a href="#" className="list-group-item list-group-item-action">Users</a>
            </div>
          </div>
          <div className="col-sm-10 panel-column">
            { (this.state.centers.visible) && <AdminCenters show={this.show} /> }
            { (this.state.addCenter.visible) && <AddCenter show={this.show} /> }
            { (this.state.modifyCenter.visible) && <ModifyCenter show={this.show} centerId={this.state.modifyCenter.centerId} /> }
            { (this.state.centerDetails.visible) && <AdminCenterDetails centerId={this.state.centerDetails.centerId} /> }
          </div>
        </div>
      </div>
      )
  }
}

export default AdminPanelBody;