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
import Profile from "./Profile";
import ProfileForm from "./ProfileForm";
import orderDetail from "./orderDetail";
import { connect } from "react-redux";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

class App extends Component {
  getView = () => {
    if (this.props.loading) return <Loading />;
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/story" component={Story} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/meals/:mealID" component={MealDetail} />
        <Route path="/meals" component={MealsList} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/profile/:orderID" component={orderDetail} />
        <Route path="/profileform" component={ProfileForm} />
        <Redirect from="/" to="/home/" />
      </Switch>
    );
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2"></div>

          <div className="content col-12">{this.getView()}</div>
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
