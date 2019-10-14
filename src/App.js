import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components

import MealsList from "./MealsList";
import MealDetail from "./MealDetail";
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
          <Route path="/meals/:mealID" component={MealDetail} />
          <Route path="/meals" component={MealsList} />
          <Redirect from="/" to="/meals/" />
        </Switch>
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2"></div>

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

export default withRouter(connect(mapStateToProps)(App));
