import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  console.log("action.payload", action.payload);
  switch (action.type) {
    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
