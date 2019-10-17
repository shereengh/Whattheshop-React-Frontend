import React, { Component } from "react";
import {removeItemFromCart} from "../redux/actions/meals";
import { connect } from "react-redux";

class CartItem extends Component {
  render() {
    const { meal } = this.props;
    return (
      <div>
        
          <h3> {meal.name} </h3>
          <h3>
            {meal.price}
          </h3>
          <h3>
            {meal.quantity}
          </h3>
        <div>
          <img src={meal.img}></img>
        </div>
        <button onClick={() => this.props.removeItemFromCart(meal)}>
            Remove
          </button>
          
          {/* <button transparent>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </button> */}
        
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeItemFromCart: meal => dispatch(removeItemFromCart(meal))
});
export default connect(null,mapDispatchToProps)(CartItem);