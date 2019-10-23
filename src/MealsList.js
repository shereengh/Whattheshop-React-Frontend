import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { Icon, InlineIcon } from "@iconify/react";
import shoppingCartOutline from "@iconify/icons-ant-design/shopping-cart-outline";

// Components
import MealCard from "./MealCard";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import * as actionCreators from "./redux/actions/index";

class MealsList extends Component {
  state = {
    filteredMeals: [],
    redirect: false
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
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect);
    {
      return <Redirect to="/cart" />;
    }
  };
  handlefilterh = () => {
    this.filterMeals("healthy");
  };
  handlefilterp = () => {
    this.filterMeals("packages");
  };
  handlefiltert = () => {
    this.filterMeals("traditional");
  };
  render() {
    const mealCards = this.state.filteredMeals.map(meal => (
      <MealCard key={meal.id} meal={meal} />
    ));

    return (
      <div className="meals">
        <h5 className="title">CHOOSE A PACK</h5>

        <div className="search">
          <SearchBar filter={this.filterMeals} />
        </div>

        <Link to="/cart" className="btn btn-link my-2 my-sm-0">
          <Icon
            className="shop"
            icon={shoppingCartOutline}
            onClick={this.setRedirect}
          />

        <Link to="/cart" className="checklist btn-link my-2 my-sm-0">
          CHECKOUT
        </Link>
        <Link to="/profile" className="profilelist btn-link my-2 my-sm-0">
          PROFILE

        </Link>
        <div className="row">{mealCards}</div>
        <p>Filters:</p>
        <button onClick={this.handlefilterh}>Healthy</button>
        <button onClick={this.handlefilterp}>Packages</button>
        <button onClick={this.handlefiltert}>Traditional</button>
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
