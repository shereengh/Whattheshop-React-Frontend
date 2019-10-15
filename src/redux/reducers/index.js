import { combineReducers } from "redux";

import mealReducer from "./meals";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  mealReducer: mealReducer,
  user: authReducer
});

export default rootReducer;
