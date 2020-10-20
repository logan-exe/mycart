import React, { Component } from "react";
import "./Filtercomp.css";

export default class Filtercomp extends Component {
  render() {
    return (
      <div className="filterbody">
        <p>{this.props.count + " Products"}</p>
        <div>
          <p>Sort</p>
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value="latest">latest</option>
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        </div>
        <div>
          <p>size</p>
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="All">All</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
