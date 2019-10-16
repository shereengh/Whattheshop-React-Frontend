import { SET_CURRENT_USER } from "../actions/actionTypes";

/**
 * Simplify reducer state?
 */
const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
export default reducer;

// export default setCurrentUser = token => {
//   let user;
//   if (token) {
//     localStorage.setItem("token", token);
//     axios.defaults.headers.common.Authorization = `jwt ${token}`;
//     user = jwt_decode(token);
//   } else {
//     localStorage.removeItem("token");
//     delete axios.defaults.headers.common.Authorization;
//     user = null;
//   }

//   return {
//     type: SET_CURRENT_USER,
//     payload: user
//   };
// };
