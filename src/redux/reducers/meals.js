import * as actionTypes from "../actions/actionTypes";

const initialState = {
  meals: [],
  filteredMeals: [],
  loading: true
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
    default:
      return state;
  }
};

export default reducer;
