import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//Actions
import { addItemToCart } from "./redux/actions/meals";
class MealCard extends Component {
  state = {
    meal: this.props.meal.id,
    quantity: 1
  };
  handleAddItem = () => {
    const Newmeal = {
      ...this.state
    };
    this.props.addItemToCart(Newmeal);
  };
  componentDidMount() {
    const meal = this.props.meal;
    if (meal) {
      this.setState({ name: meal.name, price: meal.price, img: meal.img });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.meals !== this.props.meals) {
      const meal = this.props.meal;
      if (meal) {
        this.setState({ name: meal.name, price: meal.price, img: meal.img });
      }
    }
  }
  render() {
    const meal = this.props.meal;
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
        <button onClick={this.handleAddItem}>Add to Cart</button>
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