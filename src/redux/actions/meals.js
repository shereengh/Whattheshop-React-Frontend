import * as actionTypes from "./actionTypes";

import instance from "./instance";

export const fetchMeals = () => {
  return async dispatch => {
    const res = await instance.get("meals/");
    const meals = res.data;
    dispatch({ type: actionTypes.FETCH_MEALS, payload: meals });
  };
};

/**
 * Being used?
 */
export const filterMeals = query => {
  return {
    type: actionTypes.FILTER_MEALS,
    payload: query
  };
};
