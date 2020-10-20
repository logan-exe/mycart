import React, { Component } from "react";
import "./Products.css";

export default class Products extends Component {
  render() {
    console.log(this.props.Products);
    return (
      <div>
        <ul>
          {this.props.Products.map((product) => (
            <div key={product._id} className="mainCard">
              <a href="">
                <img
                  src={product.image}
                  alt="nothing to display"
                  height="300px"
                  width="300px"
                />
                <p className="description">{product.title}</p>
              </a>

              <div className="cartButton">
                <h3>{"$" + product.price}</h3>
                <button type="">Add to cart</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
