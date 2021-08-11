import {
  FETCH_TOUR_LIST,
  FETCH_TOUR_INFORMATION,
  FETCH_PHOTO_PACKAGE,
  FETCH_TOUR_MANAGER,
} from "./tourActions";

const initialState = {
  tourList: [],
  tourInformation: {
    tourTitle: null,
    tourDescription: null,
    tourPhotoTitle: null,
    shootingTime: null,
    tourLanguages: [],
    tourCost: null,
    tourLocation: null,
    numberOfPhotos: null,
    tourRating: null,
  },
  photoPackage: [],
  tourManager: {
    tourManagerId: null,
    photo: null,
    firstName: null,
    lastName: null,
    speciality: null,
    managerDescription: null,
  },
};

export const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOUR_LIST:
      return { ...state, tourList: action.payload };
    case FETCH_TOUR_INFORMATION:
      return { ...state, tourInformation: action.payload };
    case FETCH_PHOTO_PACKAGE:
      return { ...state, photoPackage: action.payload };
    case FETCH_TOUR_MANAGER:
      return { ...state, tourManager: action.payload };

    default:
      return state;
  }
};
