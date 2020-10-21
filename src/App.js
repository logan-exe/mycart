///feature-1

import React from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
import Filtercomp from "./components/Filtercomp";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
      total: 0,
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

  addToCart = (product) => {
    const preCartItems = this.state.cartItems.slice();
    let isAdded = false;
    let mytot = 0;
    preCartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        isAdded = true;
      }
    });
    if (!isAdded) {
      preCartItems.push({ ...product, count: 1 });
    }

    preCartItems.forEach((item) => (mytot += item.price * item.count));
    mytot = parseFloat(mytot.toFixed(2));
    this.setState({
      cartItems: preCartItems,
      total: mytot,
    });
  };

  // myTotal = () => {

  // };
  removeItem = (product) => {
    const myCur = this.state.cartItems.slice();

    console.log(myCur);
    this.setState({
      cartItems: myCur.filter((x) => x._id !== product._id),
    });
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
            <Products
              Products={this.state.products}
              addToCart={this.addToCart}
            />
          </div>
          <div className="sideBar">
            <Cart
              cartItems={this.state.cartItems}
              total={this.state.total}
              removeItem={this.removeItem}
            />
          </div>
        </div>
        <div className="footer">All rights reserved</div>
      </div>
    );
  }
}

export default App;
