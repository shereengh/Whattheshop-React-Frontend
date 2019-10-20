import * as actionTypes from "../actions/actionTypes";

const initialState = {
  meals: [],
  loading: true,
  cart: [],
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEALS:
      return {
        ...state,
        meals: action.payload,
        loading: false
      };

    case actionTypes.ADD_ITEM:
      let newMeal = action.payload;
      let foundMeal = state.cart.find(meal => meal.name === newMeal.name);
      let counter1 = state.counter + 1;
      if (foundMeal) {
        foundMeal.quantity++;
        return {
          ...state,
          cart: [...state.cart],
          counter: counter1
        };
      }
      return {
        ...state,
        cart: [newMeal].concat(state.cart),
        counter: counter1
      };

    case actionTypes.REMOVE_ITEM:
      const itemID = action.payload;
      let counter2 = state.counter - action.payload.quantity;
      return {
        ...state,
        cart: state.cart.filter(item => item !== itemID),
        counter: counter2
      };

    case actionTypes.CHECKOUT:
      return {
        ...state,
        cart: [],
        counter: 0
      };

    default:
      return state;
  }
};

export default reducer;
