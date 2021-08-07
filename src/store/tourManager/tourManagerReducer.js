import { FETCH_TOUR_MANAGER_PROFILE, FETCH_TOUR_MANAGER_TOUR_LIST } from "./tourManagerActions";

const initialState = {
  managerTourList: [],
  tourManager: {
    tourManagerId: null,
    photo: null,
    firstName: null,
    lastName: null,
    speciality: null,
    managerDescription: null,
    averageTourRating: null,
    managerLanguages: null,
  },
};

export const tourManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOUR_MANAGER_PROFILE:
      return { ...state, tourManager: action.payload };
    case FETCH_TOUR_MANAGER_TOUR_LIST:
      return { ...state, managerTourList: action.payload };
    default:
      return state;
  }
};
