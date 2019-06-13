import axios from "axios";
import { ITEMS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

import { getErrors, clearErrors } from "./errorActions";

const uri = "http://localhost:5000";

export const getTodos = () => async dispatch => {
  // Dispatch Loading
  dispatch({
    type: ITEMS_LOADING
  });

  try {
    // Get Todos
    const { data } = await axios.get(`${uri}/api/todos`);
    const { todos } = data;

    // Dispatch Get Items
    dispatch({
      type: GET_ITEMS,
      payload: todos
    });

    // Dispatch Clear Error
    // dispatch(clearErrors());
  } catch (error) {
    console.log(error.message);
    // Dispatch Get Errors
    dispatch(getErrors(error.response.data, error.response.status));
  }
};
