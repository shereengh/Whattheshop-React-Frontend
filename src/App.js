import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components

import MealsList from "./MealsList";
import Loading from "./Loading";

import { connect } from "react-redux";
import * as actionCreators from "./redux/actions/index";

class App extends Component {
  getView = () => {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          {/* <Redirect exact from="/" to="/meals/list" /> */}
          {/* <Route path="/authors/:authorID" component={AuthorDetail} /> */}
          {/* <Route path="meals/list" component={MealsList} /> */}
        </Switch>
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <MealsList />
          <div className="content col-10">{this.getView()}</div>
        </div>
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
)(App);
