export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
export const FETCH_USER_FEEDBACK_LIST = "FETCH_USER_FEEDBACK_LIST";

export const fetchUserProfile = payload => {
  return {
    type: FETCH_USER_PROFILE,
    payload,
  };
};

export const fetchUserFeedbackList = payload => {
  return {
    type: FETCH_USER_FEEDBACK_LIST,
    payload,
  };
};
