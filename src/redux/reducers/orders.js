import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
