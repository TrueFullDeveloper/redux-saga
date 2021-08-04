import { combineReducers } from "redux";
import { loaderReducer } from "./loader/loaderReducer";

export const rootReducer = combineReducers({
  loader: loaderReducer,
});
