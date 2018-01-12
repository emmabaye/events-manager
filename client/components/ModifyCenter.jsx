import React, { Component } from 'react';
import { getCenter, modifyCenter, setStatus } from '../actions/centerAction';
import { connect } from 'react-redux';

export class ModifyCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {}
    };
  }

  componentDidMount() {
    let centerId = this.props.centerId;
    this.props.dispatch(getCenter(centerId));
  }

  componentDidUpdate() {
    if (Object.keys(this.state.center).length == 0) {
      this.setState({
        center: {
          ...this.props.center,
        }
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      center: {
        ...this.state.center,
        [e.target.name]: e.target.value,
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let centerDetails = this.state.center;
    const { dispatch } = this.props;
    let centerForm = new FormData();
     centerForm.append('id', centerDetails.id);
    centerForm.append('name', centerDetails.name);
    centerForm.append('description', centerDetails.description);
    centerForm.append('location', centerDetails.location);
    centerForm.append('capacity', centerDetails.capacity);
    centerForm.append('price', centerDetails.price);
    centerForm.append('facilities', centerDetails.facilities);
    centerForm.append('available', centerDetails.available);
    centerForm.append('image', this.refs.image.files[0]);
    return dispatch(modifyCenter(centerForm));
  }

  render() {
    {
      if (this.props.status === 'Success') {
        this.props.show('centers');
        this.props.dispatch(setStatus(""));
        return null;
      }
    }
    return (
      <div id="add-center" className="panel add-center">
        <div className="container " >
          <div className= "row">
            <div className="container">
              <form>
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-3 col-form-label" />
                  <div className="col-sm-9">
                    { (this.props.status == 'Error') &&
                      <div className="form-group row" style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                        <div className="alert alert-dismissible alert-danger fade show" role="alert">
                          <small>{this.props.message.toString().split(',').join(', ')}</small>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                <p className="text-center h5"><b>MODIFY CENTER</b></p>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control"
                      name="name"
                      value={this.state.center.name}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="Description" className="col-sm-3 col-form-label">Description</label>
                  <div className="col-sm-9">
                    <textarea type="text" className="form-control"
                      name="description"
                      value={this.state.center.description}
                      onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">Location</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control"
                      name="location"
                      value={this.state.center.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">Capacity</label>
                  <div className="col-sm-9">
                    <input type="number" min="1" step="1" className="form-control"
                      name="capacity"
                      value={this.state.center.capacity}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">Price</label>
                  <div className="col-sm-9">
                    <input type="number" min="1" step="any" className="form-control"
                      name="price"
                      value={this.state.center.price}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-3 col-form-label">Facilities</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control"
                      name="facilities"
                      value={this.state.center.facilities}
                      onChange={this.handleChange}
                    />
                    <small id="fileHelp" className="form-text text-muted">( Optional )</small>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="available" className="col-sm-3 col-form-label">
                      Availability
                  </label>
                  <div className="col-sm-9">
                    <select ref="available" className="form-control" name="available" onChange={this.handleChange}>
                      <option value={"true"}>{"Center is Available"}</option>
                      <option value={"false"}>{"Center is not Available"}</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="exampleInputFile" className="col-sm-3 col-form-label">Image</label>
                  <div className="col-sm-9">
                    <input ref="image" type="file" className="form-control" id="exampleInputFile" aria-describedby="fileHelp" />
                    <small id="fileHelp" className="form-text text-muted">( Optional )</small>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-3 col-sm-9">
                    <button type="submit" className="btn btn-sm btn-success" onClick={this.handleSubmit}><i className="fa fa-plus fa-lg" /> Update</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: (actionObject) => dispatch(actionObject)
});

const mapStateToProps = (state) => ({
  status: state.centerReducer.status,
  message: state.centerReducer.message,
  center: state.centerReducer.center
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyCenter);
