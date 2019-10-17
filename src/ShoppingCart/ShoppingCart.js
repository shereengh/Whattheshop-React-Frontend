import React, { Component } from "react";

// Components
import CartItem from "./CartItem";
//import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import {checkoutCart} from "../redux/actions/meals";


class ShoppingCart extends Component {

// totalprice(){
//   const total = this.props.cart.map(meal => {
    
//   })
// }

Total = () => {
  
      const total=this.props.cart.reduce((acc, item) => (
        acc + item.price * item.quantity
      ), 0)
      if (total) {return total}
      return 0;

      };
  render() {
    const cartItem = this.props.cart.map(meal => (
      <CartItem key={meal.id} meal={meal} />
    ));

    return (
      <div>
        <h3>Shopping Cart</h3>
        <div className="row">{cartItem}</div>
        <h3>Total Price: {this.Total()}</h3>
        <h3>Total Number of Items:{this.props.counter}</h3>
        <button onClick={() => this.props.checkoutCart()}>
           CHECKOUT!!!!
         </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.mealReducer.cart,
    counter: state.mealReducer.counter
  };
};

const mapDispatchToProps = dispatch => ({
  checkoutCart: () => dispatch(checkoutCart())
 });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
