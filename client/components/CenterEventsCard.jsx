import React, { Component } from 'react';

class CenterEventsCard extends Component {

  render() {
    return(
      <div class="card">
        <h6 class="card-header"><b>EVENTS</b></h6>
        <div class="card-block">
          <div class="container events">
            <div class="row event-row">
              <div class="col-md-4 event">
                <div class="card">
                  <div class="card-block">
                    <h5 class="card-title"><b>Empowerment Seminar</b></h5>
                    <p class="card-text h6">Lorem ipsum dolor sit amet, consectetur uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatadipiscing</p>
                    <p class="card-text h6"><b>Venue</b>: City Halls, Lagos</p>
                    <p class="card-text h6"><b>Date</b>: Saturday, 23 December, 2017</p>
                    <p class="card-text h6"><b>Time</b>: 4:30pm</p>
                    <p class="card-text h6"><b>Status</b>: Canceled</p>
                    <p class="text-center"><a href="./event.htm" class="btn btn-sm btn-primary"><i class="fa fa-info-circle fa-lg"></i> View Event</a>
                    <a href="#" class="btn btn-sm btn-danger" ><i class="fa fa-times fa-lg"></i> Cancel</a></p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-4 event">
                <div class="card">
                  <div class="card-block">
                    <h5 class="card-title"><b>Wedding Party</b></h5>
                    <p class="card-text h6">With supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text h6"><b>Venue</b>: City , Lagos</p>
                    <p class="card-text h6"><b>Date</b>: Saturday, 23 December, 2017</p>
                    <p class="card-text h6"><b>Time</b>: 4:30pm</p>
                    <p class="card-text h6"><b>Status</b>: Holding</p>
                    <p class="text-center"><a href="./event.htm" class="btn btn-sm btn-primary"><i class="fa fa-info-circle fa-lg"></i> View Event</a>
                    <a href="#" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#deleteModal"><i class="fa fa-times fa-lg"></i> Cancel</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 event">
                <div class="card">
                  <div class="card-block">
                    <h5 class="card-title"><b>Wedding Party</b></h5>
                    <p class="card-text h6">With supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text h6"><b>Venue</b>: City , Lagos</p>
                    <p class="card-text h6"><b>Date</b>: Saturday, 30 December, 2017</p>
                    <p class="card-text h6"><b>Time</b>: 4:30pm</p>
                    <p class="card-text h6"><b>Status</b>: Holding</p>
                    <p class="text-center"><a href="./event.htm" class="btn btn-sm btn-primary"><i class="fa fa-info-circle fa-lg"></i> View Event</a>
                    <a href="#" class="btn btn-sm btn-danger" ><i class="fa fa-times fa-lg"></i> Cancel</a></p>
                  </div>
                </div>
              </div>
              
              
            </div> <nav aria-label="Page navigation example" >
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav> 
        </div>
      </div>
      </div>
      )
  }
}

export default CenterEventsCard;