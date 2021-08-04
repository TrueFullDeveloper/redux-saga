import { combineReducers } from "redux";
import { mainPageReducer } from "./mainPageReducer";

export const rootReducer = combineReducers({
  mainPage: mainPageReducer,
});
