export const FETCH_PHOTO_STUDIO_LIST = "FETCH_PHOTO_STUDIO_LIST";
export const FETCH_PHOTO_STUDIO_INFORMATION = "FETCH_PHOTO_STUDIO_INFORMATION";
export const FETCH_PHOTO_STUDIO_PHOTO_PACKAGE = "FETCH_PHOTO_STUDIO_PHOTO_PACKAGE";

export const fetchPhotoStudioList = payload => {
  return {
    type: FETCH_PHOTO_STUDIO_LIST,
    payload,
  };
};

export const fetchPhotoStudioInformation = payload => {
  return {
    type: FETCH_PHOTO_STUDIO_INFORMATION,
    payload,
  };
};

export const fetchStudioPhotoPackage = payload => {
  return {
    type: FETCH_PHOTO_STUDIO_PHOTO_PACKAGE,
    payload,
  };
};



