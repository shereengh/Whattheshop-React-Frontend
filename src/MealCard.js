import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";

// import "bootstrap/dist/css/bootstrap.min.css";
//Actions
import { addItemToCart } from "./redux/actions/meals";
class MealCard extends Component {
  state = {
    meal: this.props.meal.id,
    quantity: 1
  };
  handleAddItem = () => {
    const Newmeal = {
      ...this.state
    };
    this.props.addItemToCart(Newmeal);
  };
  componentDidMount() {
    const meal = this.props.meal;
    if (meal) {
      this.setState({ name: meal.name, price: meal.price, img: meal.img });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.meals !== this.props.meals) {
      const meal = this.props.meal;
      if (meal) {
        this.setState({ name: meal.name, price: meal.price, img: meal.img });
      }
    }
  }
  render() {
    const meal = this.props.meal;
    return (
      <Link className="lin" to={`/meals/${meal.id}`}>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />

        <CardDeck className="card-deck">
          <Jumbotron className="jumbo">
            <div className="col-lg-4 col-md-6 col-12">
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img
                  className="img"
                  variant="top"
                  src={meal.img}
                  alt={meal.name}
                />
                <Card.Body>
                  <Card.Title id="name">{meal.name}</Card.Title>

                  <Button
                    id="btn"
                    variant="primary"
                    onClick={this.handleAddItem}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Jumbotron>
        </CardDeck>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.mealReducer.meals
  };
};
const mapDispatchToProps = dispatch => ({
  addItemToCart: Newmeal => dispatch(addItemToCart(Newmeal))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealCard);
