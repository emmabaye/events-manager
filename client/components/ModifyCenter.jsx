import React, { Component } from 'react';

class ModifyCenter extends Component {

  render() {
    return(
        <div id="add-center" class="panel add-center">
          <div   class="container " >
            <div class= "row">
              <div class="container">
                <form>
                  <p class="text-center h5"><b>MODIFY CENTER</b></p>
                  <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Description" class="col-sm-3 col-form-label">Description</label>
                    <div class="col-sm-9">
                      <textarea type="text" class="form-control" id="" placeholder="">
                      </textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label">Location</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label">Capacity</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label">Price</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="" placeholder="" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label">Facilities</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" id="" placeholder="Separate with spaces" />
                      <small id="fileHelp" class="form-text text-muted">( Optional )</small>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="exampleInputFile"  class="col-sm-3 col-form-label">Image</label>
                    <div class="col-sm-9">
                      <input type="file" class="form-control" id="exampleInputFile" aria-describedby="fileHelp" />
                      <small id="fileHelp" class="form-text text-muted">( Optional )</small>
                    </div>
                  </div>
                  
                  
                  <div class="form-group row">
                    <div class="offset-sm-3 col-sm-9">
                      <button type="submit" class="btn btn-sm btn-success"><i class="fa fa-plus fa-lg"></i> Update</button>
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
export default ModifyCenter