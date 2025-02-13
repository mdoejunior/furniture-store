import React, { Component } from "react";
import { Link } from "react-router-dom";
import cart from "./../assest/cart.png";
import "./car.css";
class CART extends Component {
  cartReduce() {
    return this.props.products
      .reduce((acc, product) => acc + product.count * product.price, 0)
      .toFixed(2);
  }
  ifCartEmpty() {
    if (this.props.products.length === 0) {
      return (
        <div className="empty_cart">
          <img src={cart} alt="empty" />
        </div>
      );
    } else {
      return (
        <div className="fill_cart">
          <h3>SHOPPING CART</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Count</th>
                <th scope="col">SubTotal</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    <img src={product.url} alt={`img${product.id}`} />
                  </th>
                  <td className="name">{product.name}</td>
                  <td>${product.price}</td>
                  <td className="count_contaner">
                    <div className="count">
                      <button
                        onClick={() => {
                          this.props.onDecrement(product);
                        }}
                      >
                      <i className="fa-solid fa-minus"></i>
                      </button>
                      <span> {product.count}</span>
                      <button
                        onClick={() => {
                          this.props.onIncrement(product);
                        }}
                      >
                      <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td>${(product.price * product.count).toFixed(2)}</td>
                  <td>
                    <i
                      onClick={() => {
                        this.props.onDelete(product);
                      }}
                      className="fa-solid fa-trash"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout">
            <div className="total_sub">
              <h6>CART TOTAL:</h6>
              <span>${this.cartReduce()}</span>
            </div>
            <Link to="/checkout">PROCEED TO CHECKOUT</Link>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="go_back">
          <Link to="/home">Home</Link> / Shopping Cart
        </div>
        <section className="shopping_cart">{this.ifCartEmpty()}</section>
      </React.Fragment>
    );
  }
}

export default CART;
