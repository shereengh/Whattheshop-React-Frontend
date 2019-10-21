import { combineReducers } from "redux";

import mealReducer from "./meals";
import authReducer from "./AuthReducer";
import profileReducer from "./profile";
import ordersReducer from "./orders";
const rootReducer = combineReducers({
  mealReducer: mealReducer,
  user: authReducer,
  profile: profileReducer,
  orders: ordersReducer
});

export default rootReducer;
