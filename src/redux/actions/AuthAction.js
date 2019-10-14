import instance from "./instance";
import { SET_CURRENT_USER } from "./actionTypes";

import jwt_decode from "jwt-decode";

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("/login/", userData);
      const user = res.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      history.push("/meals");

      console.log(user);
      auth;
    } catch (err) {
      console.error(err);
    }
  };
};

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("/signup/", userData);
      const user = res.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      history.push("/meals");
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

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
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};
