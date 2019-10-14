import * as actionTypes from "./actionTypes";

import instance from "./instance";

export const fetchMeals = () => {
  return async dispatch => {
    try {
      const res = await instance.get("meals/list/");
      const meals = res.data;
      dispatch({ type: actionTypes.FETCH_MEALS, payload: meals });
    } catch (err) {
      console.error(err);
    }
  };
};

export const filterMeals = query => {
  return {
    type: actionTypes.FILTER_MEALS,
    payload: query
  };
};
