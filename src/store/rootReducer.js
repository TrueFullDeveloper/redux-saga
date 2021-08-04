import { combineReducers } from "redux";
//Reducers
import { authReducer } from "./auth/authReducer";
import { loaderReducer } from "./loader/loaderReducer";

export const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
});
