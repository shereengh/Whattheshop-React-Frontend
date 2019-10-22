import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//Actions
import { addItemToCart } from "./redux/actions/meals";
class MealCard extends Component {
  render() {
    const meal = this.props.meal;
    console.log("HERE", meal);
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/meals/${meal.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={meal.img}
              alt={meal.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{meal.name}</span>
            </h5>
          </div>
        </Link>
        <button onClick={() => this.props.addItemToCart(meal)}>
          Add to Cart
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    meals: state.mealReducer.meals
  };
};
const mapDispatchToProps = dispatch => ({
  addItemToCart: Newmeal => dispatch(addItemToCart(Newmeal))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealCard);
