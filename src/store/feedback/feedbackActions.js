export const FETCH_FEEDBACK_LIST = "FETCH_FEEDBACK_LIST";
export const ADD_FEEDBACK = "ADD_FEEDBACK";
export const EDIT_FEEDBACK = "EDIT_FEEDBACK";
export const DELETE_FEEDBACK = "DELETE_FEEDBACK";

export const fetchFeedbackList = payload => {
  return {
    type: FETCH_FEEDBACK_LIST,
    payload,
  };
};

export const addFeedback = payload => {
  return {
    type: ADD_FEEDBACK,
    payload,
  };
};

export const editFeedback = payload => {
  return {
    type: EDIT_FEEDBACK,
    payload,
  };
};

export const deleteFeedback = payload => {
  return {
    type: DELETE_FEEDBACK,
    payload,
  };
};
