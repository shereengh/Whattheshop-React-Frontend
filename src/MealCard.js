import React, { Component } from "react";
import { Link } from "react-router-dom";

class MealCard extends Component {
  render() {
    const meal = this.props.meal;
    const mealName = `${meal.name}`;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={meal.img}
            alt={mealName}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{mealName}</span>
          </h5>
          <small className="card-text">{meal.price} KD</small>
          <p>{meal.description}</p>
        </div>
      </div>
    );
  }
}

export default MealCard;
