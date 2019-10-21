import * as actionTypes from "./actionTypes";

import instance from "./instance";

export const fetchOrders = () => {
  return async dispatch => {
    const res = await instance.get("profile/");
    const profile = res.data;
    console.log("res:", profile);
    dispatch({ type: actionTypes.FETCH_ORDERS, payload: profile });
  };
};
