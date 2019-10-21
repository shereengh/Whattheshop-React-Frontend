import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./Loading";
// Components
//Actions
class OrderDetail extends Component {
  componentDidMount() {}
  componentDidUpdate(prevState) {
    if (prevState.meals !== this.props.meals) {
      const mealID = this.props.match.params.mealID;
      const meal = this.props.meals.find(meal => meal.id == mealID);
      if (meal) {
        this.setState({ name: meal.name, price: meal.price, img: meal.img });
      }
    }
  }
  render() {
    if (!this.props.profile) return <Redirect to="/profile" />;
    const orderID = this.props.match.params.orderID;
    const order = this.props.profile.orders_list.find(
      orderItem => orderItem.id == orderID
    );
    const meals = order.mealorders.map(meal => (
      <div>
        <h3>{meal.meal.name}</h3>
        <img
          src={meal.meal.img}
          className="img-thumbnail img-fluid"
          alt={meal.meal.name}
        />
        <br></br>
        <br></br>
        <small className="card-text">Price: {meal.meal.price} KD</small>
        <p>{meal.meal.description}</p>
      </div>
    ));

    if (order) {
      return <div className="meal">{meals}</div>;
    } else {
      return <Loading />;
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile.profile,
    loading: state.profile.loading
  };
};
export default connect(mapStateToProps)(OrderDetail);
