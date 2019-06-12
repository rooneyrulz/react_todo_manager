import axios from "axios";
import { ITEMS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

import { getErrors } from "./errorActions";

export const getTodos = () => async dispatch => {
  // Dispatch Loading
  dispatch({
    type: ITEMS_LOADING
  });

  try {
    // Get Todos
    const { data } = await axios.get("/api/todos");
    const {todos} = data;

    // Dispatch Get Items
    dispatch({
      type: GET_ITEMS,
      payload: todos
    });
  } catch (error) {
    console.log(error.message);
    // Dispatch Get Errors 
    dispatch(getErrors(error.response.data, error.response.status));
  }
};
