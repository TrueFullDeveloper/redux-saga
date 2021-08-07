export const FETCH_PROFILE = "FETCH_PROFILE";

export const fetchProfile = payload => {
  return {
    type: FETCH_PROFILE,
    payload,
  };
};
