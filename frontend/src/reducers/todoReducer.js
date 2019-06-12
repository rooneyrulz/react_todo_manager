import {
  ITEMS_LOADING,
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM
} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload._id),
        loading: false
      };

    default:
      return state;
  }
};

export default todoReducer;
