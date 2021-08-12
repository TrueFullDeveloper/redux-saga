import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import { feedbackReducer } from "./feedback/feedbackReducer";
import { loaderReducer } from "./loader/loaderReducer";
import { profileReducer } from "./profile/profileReducer";
import { studioReducer } from "./studio/studioReducer";
import { tourReducer } from "./tour/tourReducer";
import { tourManagerReducer } from "./tourManager/tourManagerReducer";
import { userProfileReducer } from "./userProfile/userProfileReducer";

export const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  tour: tourReducer,
  tourManager: tourManagerReducer,
  profile: profileReducer,
  studio: studioReducer,
  userProfile: userProfileReducer,
  feedback: feedbackReducer,
});
