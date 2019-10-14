import { combineReducers } from "redux";

import mealReducer from "./mealReducer";

import authReducer from "./authentication";

const rootReducer = combineReducers({
  mealReducer: mealReducer,
  user: authReducer
});

export default rootReducer;
