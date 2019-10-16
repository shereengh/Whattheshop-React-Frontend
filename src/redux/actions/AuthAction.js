import instance from "./instance";
import { SET_CURRENT_USER } from "./actionTypes";
import jwt_decode from "jwt-decode";

/**
 * Remove dead/commented code
 */

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data.name;
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
    instance.defaults.headers.common.Authorization = `jwt ${token}`;
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

// const setAuthToken = token => {
//   if (token) {
//     localStorage.setItem("token", token);
//     instance.defaults.headers.common.Authorization = `jwt ${token}`;
//   } else {
//     localStorage.removeItem("token");
//     delete instance.defaults.headers.common.Authorization;
//   }
// };

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("register/", userData);
      /**
       * only one of these should be used
       */
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
  // setAuthToken();
  return setCurrentUser();
};

export const checkForExpiredToken = () => {
  // return dispatch => {
  // Check for token expiration
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    // Decode token and get user info
    user = jwt_decode(token);
    // Check token expiration
    if (user.exp >= currentTimeInSeconds) {
      // Set user
      // setAuthToken(token);
      // dispatch(setCurrentUser(user));
      return setCurrentUser(token);
    }
    // else {
    //   dispatch(logout());
    // }
    // }
  }
  return logout();
};
