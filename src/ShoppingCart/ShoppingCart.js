import React, { Component } from "react";

// Components
import CartItem from "./CartItem";
//import SearchBar from "./SearchBar";

import { connect } from "react-redux";
// import * as actionCreators from "./redux/actions/index";


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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.mealReducer.cart
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchMeals: () => dispatch(fetchMeals())
//   };
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(ShoppingCart);
