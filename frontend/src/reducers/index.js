import { combineReducers } from "redux";

import auth from "./authReducer";
import todo from "./todoReducer";
import error from "./errorReducer";

export default combineReducers({
  auth,
  todo,
  error
});
