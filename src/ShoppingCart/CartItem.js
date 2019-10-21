import React, { Component } from "react";
import { removeItemFromCart } from "../redux/actions/meals";
import { connect } from "react-redux";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    let meal = this.props.meals.find(meal => meal.id === item.meal);
    return (
      <div>
        <h3> {item.name} </h3>
        <h3>{item.price}</h3>
        <h3>{item.quantity}</h3>
        <div>
          <img src={item.img}></img>
        </div>
        <button onClick={() => this.props.removeItemFromCart(item)}>
          Remove
        </button>

        {/* <button transparent>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </button> */}
      </div>
    );
  }
}
const mapStateToprops = state => {
  return {
    meals: state.mealReducer.meals
  };
};
const mapDispatchToProps = dispatch => ({
  removeItemFromCart: meal => dispatch(removeItemFromCart(meal))
});
export default connect(
  mapStateToprops,
  mapDispatchToProps
)(CartItem);
