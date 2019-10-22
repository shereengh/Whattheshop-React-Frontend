import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "./assets/image/LO.png";
export default class Index extends Component {
  render() {
    return (
      <div className="homepage">
        <h5 className="rob">ROBIN</h5>
        <h5 className="food">FOOD</h5>
        <p className="qoute">A MISSION TO DIMOLISH HUNGER</p>
        <Link to="/login" className="login btn-link " type="button">
          + JOIN US
        </Link>
        <Link to="/about" className="about btn-link " type="button">
          WHAT WE DO
        </Link>
        <Link to="/story" className="story btn-link " type="button">
          OUR STORY
        </Link>
        <Link to="/meals" className="list btn-link " type="button">
          FEED A SOUL
        </Link>
        <img className="logo" src={logo} alt="Logo" />
      </div>
    );
  }
}
