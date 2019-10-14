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


export default setCurrentUser = token => {
  let user;
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
    user = jwt_decode(token);
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
    user = null;
  }

  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: user
  };
};