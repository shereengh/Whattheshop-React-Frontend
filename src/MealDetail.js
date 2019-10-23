import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import { Link, Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Icon, InlineIcon } from "@iconify/react";
import shoppingCartOutline from "@iconify/icons-ant-design/shopping-cart-outline";
// Components
//Actions
import { addItemToCart } from "./redux/actions/meals";
class MealDetail extends Component {
  state = {
    meal: this.props.match.params.mealID,
    quantity: 1,
    redirect: false
  };
  handleAddItem = () => {
    const Newmeal = {
      ...this.state
    };
    this.props.addItemToCart(Newmeal);
  };

  componentDidMount() {
    const mealID = this.props.match.params.mealID;

    const meal = this.props.meals.find(meal => meal.id == mealID);

    if (meal) {
      this.setState({ name: meal.name, price: meal.price, img: meal.img });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.meals !== this.props.meals) {
      const mealID = this.props.match.params.mealID;
      const meal = this.props.meals.find(meal => meal.id == mealID);
      if (meal) {
        this.setState({ name: meal.name, price: meal.price, img: meal.img });
      }
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect);
    {
      return <Redirect to="/cart" />;
    }
  };
  render() {
    const mealID = this.props.match.params.mealID;
    const meal = this.props.meals.find(meal => meal.id == mealID);
    if (meal) {
      return (
        <div className="detailpage">
          <h5 className="titled">{meal.name}</h5>
          <CardDeck className="detail">
            <Jumbotron className="jumbo">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="img"
                  variant="top"
                  src={meal.img}
                  alt={meal.name}
                />
                <Card.Body>
                  <Card.Text className="body">{meal.description}</Card.Text>
                  <Card.Text className="bod">Price: {meal.price} KD</Card.Text>

                  <Button
                    id="btna"
                    variant="primary"
                    onClick={this.handleAddItem}
                  >
                    Add to Cart
                  </Button>
                  <Link to="/cart" className="btn btn-link my-2 my-sm-0">
                    cart
                  </Link>
                  <Icon
                    className="car"
                    icon={shoppingCartOutline}
                    onTouchTap={this.setRedirect}
                  />
                </Card.Body>
              </Card>
            </Jumbotron>
          </CardDeck>
        </div>
      );
    } else {
      return <Loading />;
    }
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
)(MealDetail);
