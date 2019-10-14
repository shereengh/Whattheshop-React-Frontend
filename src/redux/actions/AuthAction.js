import instance from "./instance";
import { SET_CURRENT_USER } from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("/login/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.token));
      history.push("/");

      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };
};

const setCurrentUser = token => {
  let user;
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
    user = jwt_decode(token);
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
    user = null;
  }

  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("/signup/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.token));
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  return dispatch => {
    // Check for token expiration
    const token = localStorage.getItem("token");

    if (token) {
      const currentTimeInSeconds = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTimeInSeconds) {
        // Set user
        dispatch(setCurrentUser(token));
      } else {
        dispatch(logout());
      }
    }
  };
};
