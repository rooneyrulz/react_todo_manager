import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT_SUCCESS
} from "./types";

import setAuthToken from "../utils/setAuthToken";
import { getErrors, clearErrors } from "./errorActions";

const uri = "http://localhost:5000";

// Load User
export const loadUser = () => async dispatch => {
  // Check for token on local storage & Set token in header
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  // Define Header Value
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  // Dispatch User Loading
  dispatch({
    type: USER_LOADING
  });

  try {
    const { data } = await axios.get(`${uri}/api/auth/user`, config);
    const { user } = data;

    // Dispatch User Loaded
    dispatch({
      type: USER_LOADED,
      payload: user
    });

    // Dispatch Clear Error
    // dispatch(clearErrors());
  } catch (error) {
    console.log(error.message);

    // Dispatch Auth Error
    dispatch({
      type: AUTH_ERROR
    });

    // Dispatch Get Errors
    dispatch(getErrors(error.response.data, error.response.status));
  }
};

// Register User
export const registerUser = ({
  name,
  username,
  email,
  password,
  cPassword
}) => async dispatch => {
  // Define Header Value
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  const body = { name, username, email, password, cPassword };

  try {
    const { data } = await axios.post(`${uri}/api/user`, body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });

    // Dispatch Load User
    dispatch(loadUser());
  } catch (error) {
    console.log(error.message);

    // Dispatch Register Fail
    dispatch({
      type: REGISTER_FAIL
    });

    // Dispatch Get Errors
    dispatch(
      getErrors(error.response.data, error.response.status, "REGISTER_FAIL")
    );
  }
};

// Login User
export const loginUser = ({ username, password }) => async dispatch => {
  // Define Header Value
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  const body = { username, password };

  try {
    const { data } = await axios.post(`${uri}/api/auth`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });

    // Dispatch Load User
    dispatch(loadUser());
  } catch (error) {
    console.log(error.message);

    // Dispatch Login Fail
    dispatch({
      type: LOGIN_FAIL
    });

    // Dispatch Get Errors
    dispatch(
      getErrors(error.response.data, error.response.status, "LOGIN_FAIL")
    );
  }
};

// LogOut User
export const logOutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};
