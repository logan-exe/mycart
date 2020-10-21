import React, { Component } from "react";
import "./Cart.css";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();

    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.state.cartItems,
    };
    this.props.createOrder(order);
  };

  render() {
    //var total = 0;

    return (
      <div>
        <Fade left cascade>
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
                  <button
                    type=""
                    onClick={() => this.setState({ showCheckout: true })}
                  >
                    Proceed
                  </button>
                </center>
              </div>
            </div>
          )}
        </Fade>
        {this.state.showCheckout ? (
          <Fade top cascade>
            <div>
              <form className="myform" onSubmit={this.createOrder}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@mail.com"
                  onChange={this.handleInput}
                />
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Fullname"
                  required
                  onChange={this.handleInput}
                />
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Please provide full address"
                  required
                  onChange={this.handleInput}
                />
                <button type="submit" className="myButton">
                  Check Out
                </button>
              </form>
            </div>
          </Fade>
        ) : (
          ""
        )}
      </div>
    );
  }
}
