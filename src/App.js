import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components

import Signup from "./SignupForm";
import Login from "./LoginForm";

import MealsList from "./MealsList";
import MealDetail from "./MealDetail";
import Loading from "./Loading";
import Profile from "./Profile";
import orderDetail from "./orderDetail";

import { connect } from "react-redux";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

class App extends Component {
  getView = () => {
    if (this.props.loading) return <Loading />;
    return (
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/meals/:mealID" component={MealDetail} />
        <Route path="/meals" component={MealsList} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/profile/:orderID" component={orderDetail} />
        <Redirect from="/" to="/meals/" />
      </Switch>
    );
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

export default withRouter(connect(mapStateToProps)(App));
