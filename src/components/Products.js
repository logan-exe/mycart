import React, { Component } from "react";
import "./Products.css";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({ product: product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    console.log(this.props.Products);
    return (
      <div>
        <Fade bottom cascade>
          <ul>
            {this.props.Products.map((product) => (
              <div key={product._id} className="mainCard">
                <a
                  href={"#" + product._id}
                  onClick={() => this.openModal(product)}
                >
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
                  <button
                    className="button"
                    type=""
                    onClick={() => this.props.addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <div>
                <div className="modalHeader">
                  <h5>{this.state.product.title}</h5>
                  <button
                    className="closebutton"
                    type=""
                    onClick={this.closeModal}
                  >
                    x
                  </button>
                </div>

                <div className="productdetails">
                  <img
                    className="productImage"
                    src={product.image}
                    height="400px"
                    width="400px"
                    alt=""
                  />
                  <p>{product.description}</p>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
