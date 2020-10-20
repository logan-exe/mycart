///feature-1

import React from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
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
