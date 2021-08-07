import { combineReducers } from "redux";
//Reducers
import { authReducer } from "./auth/authReducer";
import { loaderReducer } from "./loader/loaderReducer";
import { profileReducer } from "./profile/profileReducer";
import { tourReducer } from "./tour/tourReducer";
import { tourManagerReducer } from "./tourManager/tourManagerReducer";

export const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  tour: tourReducer,
  tourManager: tourManagerReducer,
  profile: profileReducer,
});
