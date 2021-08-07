import { FETCH_PROFILE } from "./profileActions";

const initialState = {
  photo: null,
  firstName: null,
  lastName: null,
  role: null,
  profileDescription: null,
  userLanguages: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        photo: action.payload.photo,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        role: action.payload.role,
        profileDescription: action.payload.profileDescription,
        userLanguages: action.payload.userLanguages,
      };
    default:
      return state;
  }
};
