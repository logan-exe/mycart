///feature-1

import React from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
import Filtercomp from "./components/Filtercomp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "" || event.target.value === "latest") {
      console.log("hello world");
      this.setState({
        sort: event.target.value,
        products: this.state.products.sort((a, b) => (a._id > b._id ? 1 : -1)),
      });
    } else if (event.target.value === "lowest") {
      this.setState({
        sort: event.target.value,
        products: this.state.products.sort((a, b) =>
          a.price > b.price ? 1 : -1
        ),
      });
    } else if (event.target.value) {
      this.setState({
        sort: event.target.value,
        products: this.state.products.sort((a, b) =>
          a.price < b.price ? 1 : -1
        ),
      });
    }
  };
  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "" || event.target.value === "All") {
      this.setState({
        size: event.target.value,
        products: data.products,
      });
      //
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <a className="logo" href="">
            Mycart
          </a>
        </div>
        <div className="body">
          <div className="mainComponent">
            <div className="filter">
              <Filtercomp
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
            </div>
            <Products Products={this.state.products} />
          </div>
          <div className="sideBar">sidebar</div>
        </div>
        <div className="footer">All rights reserved</div>
      </div>
    );
  }
}

export default App;
