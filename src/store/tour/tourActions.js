export const FETCH_TOUR_LIST = "TOUR/FETCH_TOUR_LIST";
export const FETCH_TOUR_INFORMATION = "TOUR/FETCH_TOUR_INFORMATION";
export const FETCH_PHOTO_PACKAGE = "TOUR/FETCH_PHOTO_PACKAGE";
export const FETCH_TOUR_MANAGER = "TOUR/FETCH_TOUR_MANAGER";
export const FETCH_TOUR_FEEDBACK_LIST = "TOUR/FETCH_TOUR_FEEDBACK_LIST";
export const ADD_FEEDBACK = "TOUR/ADD_FEEDBACK";

export const fetchTourList = payload => {
  return {
    type: FETCH_TOUR_LIST,
    payload,
  };
};

export const fetchTourInformation = payload => {
  return {
    type: FETCH_TOUR_INFORMATION,
    payload,
  };
};

export const fetchPhotoPackage = payload => {
  return {
    type: FETCH_PHOTO_PACKAGE,
    payload,
  };
};

export const fetchTourManager = payload => {
  return {
    type: FETCH_TOUR_MANAGER,
    payload,
  };
};

export const fetchTourFeedbackList = payload => {
  return {
    type: FETCH_TOUR_FEEDBACK_LIST,
    payload,
  };
};

export const addFeedback = payload => {
  return {
    type: ADD_FEEDBACK,
    payload,
  };
};
