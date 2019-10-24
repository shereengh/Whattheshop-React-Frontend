import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { Icon, InlineIcon } from "@iconify/react";
import shoppingCartOutline from "@iconify/icons-ant-design/shopping-cart-outline";

// Components
import MealCard from "./MealCard";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import * as actionCreators from "./redux/actions/index";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

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
      return (
        `${meal.name}`.toLowerCase().includes(query.toLowerCase()) ||
        `${meal.description}`.toLowerCase().includes(query.toLowerCase())
      );
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
  handlefiltera = () => {
    this.filterMeals("");
  };
  handlefilterh = () => {
    this.filterMeals("healthy");
  };
  handlefilterp = () => {
    this.filterMeals("package");
  };
  handlefiltert = () => {
    this.filterMeals("traditional");
  };
  handlefilterj = () => {
    this.filterMeals("junk");
  };
  render() {
    const mealCards = this.state.filteredMeals.map(meal => (
      <MealCard key={meal.id} meal={meal} />
    ));

    return (
      <div className="meals">
        <div>
          <span style={{ padding: "10%" }}>
            <Link to="/home" className="homeLink btn-link my-2 my-sm-0">
              HOME
            </Link>
          </span>
          <span style={{ padding: "10%" }}>
            <Link to="/profile" className="profilelist btn-link my-2 my-sm-0">
              PROFILE
            </Link>
          </span>
        </div>
        <h5 id="soso" className="title">
          CHOOSE A PACK
        </h5>

        <div className="search">
          <SearchBar filter={this.filterMeals} />
          <div className="filter">
            <ButtonGroup>
              <Button variant="light" onClick={this.handlefiltera}>
                All
              </Button>
              <Button variant="light" onClick={this.handlefilterh}>
                Healthy
              </Button>
              <Button variant="light" onClick={this.handlefilterp}>
                Package
              </Button>
              <Button variant="light" onClick={this.handlefiltert}>
                Traditional
              </Button>
              <Button variant="light" onClick={this.handlefilterj}>
                Junk
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div>
          <Link to="/cart" className="btn btn-link my-2 my-sm-0">
            <div className="counter">{this.props.counter}</div>
            <Icon
              className="shop"
              icon={shoppingCartOutline}
              onClick={this.setRedirect}
            />
          </Link>
        </div>
        <div className="row">{mealCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.mealReducer.meals,
    counter: state.mealReducer.counter
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
