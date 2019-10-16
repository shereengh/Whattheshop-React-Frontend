import * as actionTypes from "./actionTypes";

import instance from "./instance";

export const fetchMeals = () => {
  return async dispatch => {
    const res = await instance.get("meals/");
    const meals = res.data;
    dispatch({ type: actionTypes.FETCH_MEALS, payload: meals });
  };
};

export const filterMeals = query => {
  return {
    type: actionTypes.FILTER_MEALS,
    payload: query
  };
};

export const addItemToCart = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = itemID => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: itemID
  };
};
export const checkoutCart = () => ({
  type: actionTypes.CHECKOUT
});
