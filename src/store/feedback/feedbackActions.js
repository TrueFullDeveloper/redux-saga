export const FETCH_TOUR_FEEDBACK_LIST = "FETCH_TOUR_FEEDBACK_LIST";
export const FETCH_PHOTO_STUDIO_FEEDBACK_LIST = "FETCH_TOUR_FEEDBACK_LIST";
export const FETCH_USER_FEEDBACK_LIST = "FETCH_TOUR_FEEDBACK_LIST";

export const ADD_TOUR_FEEDBACK = "ADD_TOUR_FEEDBACK";
export const ADD_PHOTO_STUDIO_FEEDBACK = "ADD_PHOTO_STUDIO_FEEDBACK";

export const EDIT_TOUR_FEEDBACK = "EDIT_TOUR_FEEDBACK";
export const EDIT_PHOTO_STUDIO_FEEDBACK = "EDIT_PHOTO_STUDIO_FEEDBACK";

export const DELETE_TOUR_FEEDBACK = "DELETE_TOUR_FEEDBACK";
export const DELETE_PHOTO_STUDIO_FEEDBACK = "DELETE_PHOTO_STUDIO_FEEDBACK";

export const fetchTourFeedbackList = payload => {
  return {
    type: FETCH_TOUR_FEEDBACK_LIST,
    payload,
  };
};

export const fetchPhotoStudioFeedbackList = payload => {
  return {
    type: FETCH_PHOTO_STUDIO_FEEDBACK_LIST,
    payload,
  };
};

export const fetchUserFeedbackList = payload => {
  return {
    type: FETCH_USER_FEEDBACK_LIST,
    payload,
  };
};

export const addTourFeedback = payload => {
  return {
    type: ADD_TOUR_FEEDBACK,
    payload,
  };
};

export const addPhotoStudioFeedback = payload => {
  return {
    type: ADD_PHOTO_STUDIO_FEEDBACK,
    payload,
  };
};

export const editTourFeedback = payload => {
  return {
    type: EDIT_TOUR_FEEDBACK,
    payload,
  };
};

export const editPhotoStudioFeedback = payload => {
  return {
    type: EDIT_PHOTO_STUDIO_FEEDBACK,
    payload,
  };
};

export const deleteTourFeedback = payload => {
  return {
    type: DELETE_TOUR_FEEDBACK,
    payload,
  };
};

export const deletePhotoStudioFeedback = payload => {
  return {
    type: DELETE_PHOTO_STUDIO_FEEDBACK,
    payload,
  };
};
