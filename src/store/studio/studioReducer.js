import {
  FETCH_PHOTO_STUDIO_LIST,
  FETCH_PHOTO_STUDIO_INFORMATION,
  FETCH_PHOTO_STUDIO_PHOTO_PACKAGE,
} from "./studioActions";

const initialState = {
  photoStudioList: [],
  photoStudio: {
    hallsPhotos: [],
    studioName: null,
    studioLocation: null,
    studioArea: null,
    stidioRating: null,
    studioCost: null,
    studioWorkHours: null,
    studioContactPhone: null,
    studionSocialMedia: {
      instagram: null,
      facebook: null,
      vkontakte: null,
    },
  },
  studioPhotoPackage: [],
};

export const studioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO_STUDIO_LIST:
      return { ...state, photoStudioList: action.payload };
    case FETCH_PHOTO_STUDIO_INFORMATION:
      return { ...state, photoStudio: action.payload };
    case FETCH_PHOTO_STUDIO_PHOTO_PACKAGE:
      return { ...state, studioPhotoPackage: action.payload };
    default:
      return state;
  }
};
