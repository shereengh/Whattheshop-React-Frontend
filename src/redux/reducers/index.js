import { combineReducers } from "redux";

import mealReducer from "./meals";
import authReducer from "./AuthReducer";
import profileReducer from "./profile";
const rootReducer = combineReducers({
  mealReducer: mealReducer,
  user: authReducer,
  profile: profileReducer
});

export default rootReducer;
