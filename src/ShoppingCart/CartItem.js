import React, { Component } from "react";



class CartItem extends Component {
  render() {
    const { meal } = this.props;
    return (
      <div>
        
          <h3> {meal.name} </h3>
          <h3>
            {meal.price}
          </h3>
          <h3>
            {meal.quantity}
          </h3>
        <div>
          <img src={meal.img}></img>
        </div>
      
          {/* <button transparent>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </button> */}
        
      </div>
    );
  }
}

export default CartItem;