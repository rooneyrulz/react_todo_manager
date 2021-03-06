import axios from "axios";
import {
  ITEMS_LOADING,
  GET_ITEMS,
  ADD_ITEM,
  GET_USER_ITEMS,
  DELETE_ITEM
} from "./types";

import { getErrors } from "./errorActions";

const uri = "http://localhost:5000";

export const getTodos = () => async dispatch => {
  // Dispatch Loading
  dispatch({
    type: ITEMS_LOADING
  });

  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  try {
    // Get Todos
    const { data } = await axios.get(`/api/todos`, config);
    const { todos } = data;

    // Dispatch Get Items
    dispatch({
      type: GET_ITEMS,
      payload: todos
    });
  } catch (error) {
    console.log(error.message);
    // Dispatch Get Errors
    dispatch(
      getErrors(error.response.data, error.response.status, "GET_TODOS_FAIL")
    );
  }
};

export const addTodo = ({ name }) => async dispatch => {
  // Set header value
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  try {
    const { data } = await axios.post(`/api/todo`, { name }, config);
    const { todo } = data;

    // Dispatch Add Item
    dispatch({
      type: ADD_ITEM,
      payload: todo
    });
  } catch (error) {
    console.log(error.message);
    // Dispatch Get Errors
    dispatch(
      getErrors(error.response.data, error.response.status, "ADD_ITEM_FAIL")
    );
  }
};

// Get User Items
export const getUserTodos = () => async dispatch => {
  // Dispatch Loading
  dispatch({
    type: ITEMS_LOADING
  });

  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  try {
    // Get Todos
    const { data } = await axios.get(`/api/todo/auth/todos`, config);
    const { todos } = data;

    // Dispatch Get Items
    dispatch({
      type: GET_USER_ITEMS,
      payload: todos
    });
  } catch (error) {
    console.log(error.message);
    // Dispatch Get Errors
    dispatch(
      getErrors(
        error.response.data,
        error.response.status,
        "GET_USER_ITEMS_FAIL"
      )
    );
  }
};

// Delete Items
export const deleteTodo = id => async dispatch => {
  // Set header value
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  try {
    await axios.delete(`/api/todo/${id}`, config);

    // Dispatch Delete Item
    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  } catch (error) {
    console.log(error.message);
    // Dispatch Get Errors
    dispatch(
      getErrors(error.response.data, error.response.status, "DELETE_ITEM_FAIL")
    );
  }
};
