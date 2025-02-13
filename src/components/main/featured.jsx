import React, { Component } from "react";
import "./featured.css";
import { Link } from "react-router-dom";
class FeaturedComponent extends Component {
  ifInCart() {
    if (!this.props.product.inCart) {
      return (
        <b>
          <ion-icon name="bag-outline"></ion-icon>ADD TO CART
        </b>
      );
    } else {
      return (
        <b>
          <Link to="/cart">VIEW CART</Link>
        </b>
      );
    }
  }
  heartCase() {
    if (!this.props.product.wished) {
      return "far fa-heart";
    } else {
      return "fa-solid fa-heart";
    }
  }
  render() {
    const { product, onCartChange, onWishAdd } = this.props;
    const { id, url, name, price, category } = this.props.product;
    return (
      <React.Fragment>
        <div className="col-4 p-0 pro_card">
          <div className="inner_card">
            <div className="img_wraper">
              <img src={url} alt="" />
              <div className="menu">
                <span>
                  <Link to={`/products-details/${category}-${id}`}>
                    <i className="fas fa-eye"></i>
                  </Link>
                </span>
                <span>
                  <i
                    onClick={() => onWishAdd(product)}
                    className={this.heartCase()}
                  ></i>
                </span>
              </div>
            </div>
            <div className="img_caption">
              <p>{name}</p>
            </div>
            <div className="add_cart">
              <span>${price}</span>
              <div className="link" onClick={() => onCartChange(product)}>
                {this.ifInCart()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeaturedComponent;
