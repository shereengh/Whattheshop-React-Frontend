import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";

// Components

class MealDetail extends Component {
  render() {
    const mealID = this.props.match.params.mealID;
    console.log("I'M HERE");

    const meal = this.props.meals.find(meal => meal.id == mealID);
    console.log(meal);
    if (meal) {
      return (
        <div className="meal">
          <div>
            <h3>{meal.name}</h3>
            <img
              src={meal.img}
              className="img-thumbnail img-fluid"
              alt={meal.name}
            />
            <br></br>
            <br></br>
            <small className="card-text">Price: {meal.price} KD</small>
            <p>{meal.description}</p>
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = state => {
  return {
    meals: state.mealReducer.meals
  };
};

export default connect(mapStateToProps)(MealDetail);
