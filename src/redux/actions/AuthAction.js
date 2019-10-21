import instance from "./instance";
import { SET_CURRENT_USER } from "./actionTypes";
import jwt_decode from "jwt-decode";

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.access));
      history.push("/meals");
    } catch (err) {
      console.error(err);
    }
  };
};

const setCurrentUser = token => {
  let user;
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    user = jwt_decode(token);
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
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
      const res = await instance.post("register/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.token));
      dispatch(login(userData));
      history.push("/meals");
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = () => {
  return setCurrentUser();
};

export const checkForExpiredToken = () => {
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    user = jwt_decode(token);
    if (user.exp >= currentTimeInSeconds) {
      return setCurrentUser(token);
    }
  }
  return logout();
};
