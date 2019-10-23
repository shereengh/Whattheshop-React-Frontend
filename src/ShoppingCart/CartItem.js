import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { removeItemFromCart } from "../redux/actions/meals";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";

class CartItem extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect);
    {
      return <Redirect to="/meals" />;
    }
  };
  render() {
    const { item } = this.props;
    let meal = this.props.meals.find(meal => meal.id === item.meal);
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />

        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="img"
            variant="top"
            src={item.img}
            alt={item.name}
          />
          <Card.Body>
            <Card.Text className="body">{item.name}</Card.Text>
            <Card.Text className="body">Price: {item.price} KD</Card.Text>
            <Card.Text className="body">Quantity: {item.quantity}</Card.Text>
            <Button
              id="btna"
              variant="primary"
              onClick={() => this.props.removeItemFromCart(item)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

const mapStateToprops = state => {
  return {
    meals: state.mealReducer.meals
  };
};
const mapDispatchToProps = dispatch => ({
  removeItemFromCart: meal => dispatch(removeItemFromCart(meal))
});
export default connect(
  mapStateToprops,
  mapDispatchToProps
)(CartItem);
