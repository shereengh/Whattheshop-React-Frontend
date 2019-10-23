import * as actionTypes from "./actionTypes";

import instance from "./instance";

export const fetchMeals = () => {
  return async dispatch => {
    const res = await instance.get("meals/");
    const meals = res.data;
    dispatch({ type: actionTypes.FETCH_MEALS, payload: meals });
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
export const checkoutCart = (items, history) => {
  return async dispatch => {
    try {
      let response = await instance.post("checkout/", items);
      dispatch({
        type: actionTypes.CHECKOUT
      });
      history.replace("/conf");
    } catch (error) {
      console.error(error);
    }
  };
};
