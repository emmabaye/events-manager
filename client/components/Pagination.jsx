import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  handleGetItems = (page) => {
    this.props.dispatch(this.props.getItems(page));
  }

  /**
   * React's method to render react component.
   *
   * @return {object}
   */
  render() {
    return (
      <nav aria-label="..."
        style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <ul className="pagination">
          <li className={`page-item gg ${(this.props.currentPage === this.props.firstPage) ? "disabled" : ""}`}
            onClick={() => this.handleGetItems(this.props.previousPage)}>
            <Link className="page-link" tabIndex="-1" to="#">Previous</Link>
          </li>
          { this.props.previousPage - 1 > this.props.firstPage &&
           <li className="page-item aa" onClick={() => this.handleGetItems(this.props.previousPage - 1)}>
             <Link className="page-link" to="#">{this.props.previousPage - 1}</Link>
           </li>
          }
          { this.props.previousPage !== "" &&
          <li className="page-item bb" onClick={() => this.handleGetItems(this.props.previousPage)}>
            <Link className="page-link" to="#">{this.props.previousPage}</Link>
          </li>
          }
          <li className="page-item cc active" onClick={() => this.handleGetItems(this.props.currentPage)}>
            <Link className="page-link" to="#">{this.props.currentPage} <span className="sr-only">(current)</span></Link>
          </li>
          { this.props.currentPage !== this.props.lastPage &&
            <li className="page-item dd" onClick={() => this.handleGetItems(this.props.nextPage)}>
              <Link className="page-link" to="#">{this.props.nextPage}</Link>
            </li>
          }
          { this.props.currentPage + 1 < this.props.lastPage &&
            <li className="page-item ee" onClick={() => this.handleGetItems(this.props.nextPage + 1)}>
              <Link className="page-link" to="#">{this.props.nextPage + 1}</Link>
            </li>
          }
          <li className={`page-item ff  ${(this.props.currentPage === this.props.lastPage) ? "disabled" : ""}`}
            onClick={() => this.handleGetItems(this.props.nextPage)}>
            <Link className="page-link" to="#">Next</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

