import { combineReducers } from "redux";

import mealReducer from "./meals";

export default combineReducers({
  mealReducer: mealReducer
});
