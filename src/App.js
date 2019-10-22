import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./assets/css/style.css";

// Components

import Signup from "./SignupForm";
import Login from "./LoginForm";
import About from "./About";
import Story from "./Story";
import MealsList from "./MealsList";
import MealDetail from "./MealDetail";
import Loading from "./Loading";
import HomePage from "./HomePage";

import { connect } from "react-redux";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

class App extends Component {
  getView = () => {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/story" component={Story} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* dont forget logout */}
          <Route path="/meals/:mealID" component={MealDetail} />
          <Route path="/meals" component={MealsList} />
          <Route path="/cart" component={ShoppingCart} />
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

export default withRouter(connect(mapStateToProps)(App));
