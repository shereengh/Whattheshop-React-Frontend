import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import { Link, Redirect } from "react-router-dom";
// Components
//Actions
import { addItemToCart } from "./redux/actions/meals";
class MealDetail extends Component {
 state = {
   name: "",
   price: 0,
   img: null,
   quantity: 1
 };
 handleAddItem = () => {
   const Newmeal = {
     ...this.state
     //quantity: 1
   };
   this.props.addItemToCart(Newmeal);
 };
 componentDidMount() {
   const mealID = this.props.match.params.mealID;
   //console.log("I'M HERE");
   const meal = this.props.meals.find(meal => meal.id == mealID);
   if (meal) {
     this.setState({ name: meal.name, price: meal.price, img: meal.img });
   }
 }
 componentDidUpdate(prevState) {
   if (prevState.meals !== this.props.meals) {
     const mealID = this.props.match.params.mealID;
     //console.log("I'M HERE");
     const meal = this.props.meals.find(meal => meal.id == mealID);
     if (meal) {
       this.setState({ name: meal.name, price: meal.price, img: meal.img });
     }
   }
 }
 render() {
   const mealID = this.props.match.params.mealID;
   console.log("I'M HERE");
   const meal = this.props.meals.find(meal => meal.id == mealID);
   console.log(meal);
   if (meal) {
     return (
       <div className="meal">
         <div>
           <h3>{meal.name}</h3>
           <img
             src={meal.img}
             className="img-thumbnail img-fluid"
             alt={meal.name}
           />
           <br></br>
           <br></br>
           <small className="card-text">Price: {meal.price} KD</small>
           <p>{meal.description}</p>
         </div>
         <button onClick={() => this.props.addItemToCart(this.state)}>
           Add to Cart
         </button>
         <Link to="/cart" className="btn btn-link my-2 my-sm-0">
               cart
             </Link>
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