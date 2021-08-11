import {
  FETCH_TOUR_FEEDBACK_LIST,
  FETCH_PHOTO_STUDIO_FEEDBACK_LIST,
  FETCH_USER_FEEDBACK_LIST,
  ADD_TOUR_FEEDBACK,
  ADD_PHOTO_STUDIO_FEEDBACK,
  EDIT_TOUR_FEEDBACK,
  EDIT_PHOTO_STUDIO_FEEDBACK,
  DELETE_TOUR_FEEDBACK,
  DELETE_PHOTO_STUDIO_FEEDBACK,
} from "./profileActions";

const initialState = {
  tourFeedbackList: [],
  photoStudioFeedbackList: [],
  userFeedbackList: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOUR_FEEDBACK_LIST:
    case ADD_TOUR_FEEDBACK:
    case EDIT_TOUR_FEEDBACK:
    case DELETE_TOUR_FEEDBACK:
      return {
        ...state,
        userFeedbackList: action.payload,
      };

    case FETCH_PHOTO_STUDIO_FEEDBACK_LIST:
    case ADD_PHOTO_STUDIO_FEEDBACK:
    case EDIT_PHOTO_STUDIO_FEEDBACK:
    case DELETE_PHOTO_STUDIO_FEEDBACK:
      return {
        ...state,
        photoStudioFeedbackList: action.payload,
      };

    case FETCH_USER_FEEDBACK_LIST:
      return {
        ...state,
        userFeedbackList: action.payload,
      };

    default:
      return state;
  }
};
