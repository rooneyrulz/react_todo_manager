import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  msg: null,
  status: null,
  id: null
};

const errorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: payload.msg,
        status: payload.status,
        id: payload.id
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        msg: null,
        status: null,
        id: null
      };

    default:
      return state;
  }
};

export default errorReducer;
