import * as actionTypes from "../actions/actionTypes";

const initialState = {
  meals: [],
  filteredMeals: [],
  loading: true,
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MEALS:
      return {
        ...state,
        meals: action.payload,
        filteredMeals: state.filteredMeals.concat(action.payload),
        loading: false
      };

    case actionTypes.FILTER_MEALS:
      return {
        ...state,
        ffilteredMeals: state.filteredMeals.filter(meal => {
          return `${meal.name}`.toLowerCase().includes(action.payload);
        })
      };

    case actionTypes.ADD_ITEM:
      const newItem = action.payload;
      return {
        ...state,
        cart: [newItem].concat(state.cart)
      };

    case actionTypes.REMOVE_ITEM:
      const itemID = action.payload;
      return {
        ...state,
        cart: state.cart.filter(item => item !== itemID)
      };

    default:
      return state;
  }
};

export default reducer;
