import React, { Component } from "react";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    //var total = 0;
    return (
      <div>
        <h2 className="myheader">
          {this.props.cartItems.length > 0
            ? `You have ${this.props.cartItems.length} item(s) in cart`
            : `The cart is empty`}
        </h2>

        {this.props.cartItems.map((item) => (
          <div key={item._id}>
            <div className="eachItem">
              <img src={item.image} width="50px" height="50px" alt="" />
              <p>{item.title}</p>
            </div>
            <div className="removeItem">
              <p>{`${item.count} X $${item.price} `}</p>
              <button type="" onClick={() => this.props.removeItem(item)}>
                remove item
              </button>
            </div>
          </div>
        ))}
        {this.props.cartItems.length <= 0 ? (
          ""
        ) : (
          <div>
            <div className="total">
              <h2>Total</h2>
              <h2>{`$ ${this.props.total}`}</h2>
            </div>
            <div>
              <center>
                <button type="">Check out</button>
              </center>
            </div>
          </div>
        )}
      </div>
    );
  }
}
