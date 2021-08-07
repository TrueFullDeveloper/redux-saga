export const FETCH_TOUR_MANAGER_PROFILE = "FETCH_TOUR_MANAGER_PROFILE";
export const FETCH_TOUR_MANAGER_TOUR_LIST = "FETCH_TOUR_MANAGER_TOUR_LIST";

export const fetchTourManagerProfile = payload => {
  return {
    type: FETCH_TOUR_MANAGER_PROFILE,
    payload,
  };
};

export const fetchTourManagerTourList = payload => {
  return {
    type: FETCH_TOUR_MANAGER_TOUR_LIST,
    payload,
  };
};
