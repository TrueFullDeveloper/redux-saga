import { FETCH_USER_PROFILE, FETCH_USER_FEEDBACK_LIST } from "./userProfileActions";

const initialState = {
  userFeedbackList: [],
  userProfile: {
    photo: null,
    firstName: null,
    lastName: null,
    role: null,
    profileDescription: null,
    userLanguages: null,
  },
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    case FETCH_USER_FEEDBACK_LIST:
      return { ...state, userFeedbackList: action.payload };
    default:
      return state;
  }
};
