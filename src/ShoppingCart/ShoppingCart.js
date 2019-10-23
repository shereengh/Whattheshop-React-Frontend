import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// Components
import CartItem from "./CartItem";

import { connect } from "react-redux";
import { checkoutCart } from "../redux/actions/meals";
import { fetchOrders } from "../redux/actions/orders";

class ShoppingCart extends Component {
  state = {
    redirect: false
  };

  Total = () => {
    const total = this.props.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    if (total) {
      return total;
    }
    return 0;
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleCheckout = () => {
    // alert("hey")
    if (!this.props.user) {
      this.props.history.push("/login");
    } else {
      this.props.checkoutCart(this.props.cart);
      this.props.fetchOrders();
    }
  };

  render() {
    let items = this.props.cart;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }
    return (
      <div>
        {cartItems.length ? (
          <>
            <h3>Shopping Cart</h3>
            <div className="row">{cartItems}</div>
            <h3>Total Price: {this.Total()}</h3>
            <h3>Total Number of Items:{this.props.counter}</h3>
            <button onClick={this.handleCheckout}>CHECKOUT</button>
          </>
        ) : (
          <h1>Thank you for donating :*</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.mealReducer.cart,
    counter: state.mealReducer.counter,
    user: state.user,
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => ({
  checkoutCart: item => dispatch(checkoutCart(item)),
  fetchOrders: () => dispatch(fetchOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
