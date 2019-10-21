import React, { Component } from "react";

// Components
import MealCard from "./MealCard";
//import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import * as actionCreators from "./redux/actions/index";

class MealsList extends Component {
  //componentDidMount() {}

  render() {
    const mealCards = this.props.meals.map(meal => (
      <MealCard key={meal.id} meal={meal} />
    ));

    return (
      <div>
        <h3>Available Meals</h3>
        <div className="row">{mealCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.mealReducer.meals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMeals: () => dispatch(actionCreators.fetchMeals())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealsList);
