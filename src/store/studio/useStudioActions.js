import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import {
  fetchPhotoStudioList,
  fetchPhotoStudioInformation,
  fetchStudioPhotoPackage,
} from "./studioActions";

const useStudioActions = () => {
  const dispatch = useDispatch();

  const getPhotoStudioList = () => {
    dispatch(showLoader());

    Api.fetchPhotoStudioList()
      .then(response => {
        dispatch(fetchPhotoStudioList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const getPhotoStudio = ({ studioId }) => {
    dispatch(showLoader());

    Api.fetchPhotoStudioInformation({ studioId })
      .then(response => {
        dispatch(fetchPhotoStudioInformation(response));
      })
      .catch(error => console.log(error));

    Api.fetchStudioPhotoPackage({ studioId })
      .then(response => {
        dispatch(fetchStudioPhotoPackage(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getPhotoStudioList, getPhotoStudio };
};

export default useStudioActions;
