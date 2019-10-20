import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { checkForExpiredToken } from "./actions/AuthAction";
import { fetchProfile } from "./actions/profile";
import { fetchMeals } from "./actions/meals";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForExpiredToken());
store.dispatch(fetchProfile());
store.dispatch(fetchMeals());
export default store;
