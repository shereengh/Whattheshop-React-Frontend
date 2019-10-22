import React, { Component } from "react";

// Components
import MealCard from "./MealCard";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import * as actionCreators from "./redux/actions/index";

class MealsList extends Component {
  state = {
    filteredMeals: []
  };

  componentDidMount = async () => {
    await this.props.fetchMeals();
    this.setState({
      filteredMeals: this.props.meals
    });
  };

  filterMeals = query => {
    query = query.toLowerCase();
    let filteredMeals = this.props.meals.filter(meal => {
      return `${meal.name}`.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredMeals: filteredMeals });
  };
  render() {
    const mealCards = this.state.filteredMeals.map(meal => (
      <MealCard key={meal.id} meal={meal} />
    ));

    return (
      <div className="meals">
        <h5 className="title">Available Meals</h5>
        <SearchBar filter={this.filterMeals} />

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
