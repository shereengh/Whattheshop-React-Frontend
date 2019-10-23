import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// Components
import CartItem from "./CartItem";
import confpage from "./ConfPage";
import { connect } from "react-redux";
import { checkoutCart } from "../redux/actions/meals";
import { fetchOrders } from "../redux/actions/orders";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

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
    if (!this.props.user) {
      this.props.history.push("/login");
    } else {
      this.props.checkoutCart(this.props.cart, this.props.history);
      this.props.fetchOrders();
      this.handleIt();
    }
  };

  handleIt = () => {
    if (this.props.fetchOrders());
    {
      return <Redirect to="/conf" />;
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
      <div className="shopcart">
        {cartItems.length ? (
          <CardDeck className="card-deck">
            <Jumbotron className="y">
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
              />
              <h5 id="title">Shopping Cart</h5>
              <div className="row">{cartItems}</div>
              <br></br>
              <h3 className="body">Total Price: {this.Total()} KD</h3>
              <h3 className="body">
                Total Number of Items:{this.props.counter}
              </h3>
              <Button id="btna" onClick={this.handleCheckout}>
                CHECKOUT
              </Button>
              <Link to="/meals" className="checked btn-link my-2 my-sm-0">
                + ADD TO CART
              </Link>
            </Jumbotron>
          </CardDeck>
        ) : (
          <h1 className="thanks">THANK YOU FOR YOUR DONATION</h1>
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
