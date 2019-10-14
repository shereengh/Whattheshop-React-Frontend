import { combineReducers } from "redux";

import mealReducer from "./meals";

import authReducer from "./authentication";

const rootReducer = combineReducers({
  mealReducer: mealReducer,
  user: authReducer
});

export default rootReducer;
