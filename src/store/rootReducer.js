import { combineReducers } from "redux";
//Reducers
import { authReducer } from "./auth/authReducer";
import { loaderReducer } from "./loader/loaderReducer";
import { tourReducer } from "./tour/tourReducer";

export const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  tour: tourReducer,
});
