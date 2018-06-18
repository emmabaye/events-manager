import React, { Component } from 'react';
import { getAllCenters } from '../actions/centerAction';

/**
 * React component to display all pagination buttons.
 */
export default class Pagination extends Component {
  /**
   * React's componentDidMount life cycle method
   * runs after component has been mounted.
   * Makes style changes after component has been mounted
   *
   * @return {undefined}
   */
  componentDidMount() {

  }

  componentDidUpdate() {
    console.log("CURRENT PAGE AFTER UPDATE ", this.props.currentPage);
  }

  getCenters = (page) => {
    console.log("GETTING CENTERS");
    this.props.getPage(getAllCenters(page));
  }

  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() {
    console.log("CURRENT PAGE ", this.props.currentPage);
    console.log("FIRST PAGE ", this.props.firstPage);
    return (
      <nav aria-label="..."
        style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <ul className="pagination">
          <li className={`page-item  ${(this.props.currentPage === this.props.firstPage) ? "disabled" : ""}`}
            onClick={() => this.getCenters(this.props.previousPage)}>
            <a className="page-link" tabIndex="-1" href="#">Previous</a>
          </li>
          { this.props.previousPage - 1 > this.props.firstPage &&
           <li className="page-item" onClick={() => this.getCenters(this.props.previousPage - 1)}>
             <a className="page-link" href="#">{this.props.previousPage - 1}</a>
           </li>
          }
          { this.props.previousPage !== "" &&
          <li className="page-item" onClick={() => this.getCenters(this.props.previousPage)}>
            <a className="page-link" href="#">{this.props.previousPage}</a>
          </li>
          }
          <li className="page-item active" onClick={() => this.getCenters(this.props.currentPage)}>
            <a className="page-link" href="#">{this.props.currentPage} <span className="sr-only">(current)</span></a>
          </li>
          { this.props.currentPage !== this.props.lastPage &&
            <li className="page-item" onClick={() => this.getCenters(this.props.nextPage)}>
              <a className="page-link" href="#">{this.props.nextPage}</a>
            </li>
          }
          { this.props.currentPage + 1 < this.props.lastPage &&
            <li className="page-item" onClick={() => this.getCenters(this.props.nextPage + 1)}>
              <a className="page-link" href="#">{this.props.nextPage + 1}</a>
            </li>
          }
          <li className={`page-item  ${(this.props.currentPage === this.props.lastPage) ? "disabled" : ""}`}
            onClick={() => this.getCenters(this.props.nextPage)}>
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

