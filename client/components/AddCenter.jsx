import React, { Component } from 'react';

class AddCenter extends Component {

  render() {
    return(
        <div id="add-center" className="panel add-center">
          <div   className="container " >
            <div className= "row">
              <div className="container">
                <form>
                  <p className="text-center h5"><b>ADD CENTER</b></p>
                  <div className="form-group row">
                    <label htmlFor="title" className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="Description" className="col-sm-3 col-form-label">Description</label>
                    <div className="col-sm-9">
                      <textarea type="text" className="form-control" id="" placeholder="">
                      </textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="title" className="col-sm-3 col-form-label">Location</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="title" className="col-sm-3 col-form-label">Capacity</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="title" className="col-sm-3 col-form-label">Price</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="title" className="col-sm-3 col-form-label">Facilities</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="" placeholder="Separate with spaces" />
                      <small id="fileHelp" className="form-text text-muted">( Optional )</small>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="exampleInputFile"  className="col-sm-3 col-form-label">Image</label>
                    <div className="col-sm-9">
                      <input type="file" className="form-control" id="exampleInputFile" aria-describedby="fileHelp" />
                      <small id="fileHelp" className="form-text text-muted">( Optional )</small>
                    </div>
                  </div>
                  
                  
                  <div className="form-group row">
                    <div className="offset-sm-3 col-sm-9">
                      <button type="submit" className="btn btn-sm btn-success"><i className="fa fa-plus fa-lg"></i> Add Center</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      )
  }
}
export default AddCenter