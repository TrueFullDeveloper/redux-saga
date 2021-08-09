import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import {
  fetchPhotoStudioList,
  fetchPhotoStudioInformation,
  fetchStudioPhotoPackage,
  fetchStudioFeedbackList,
} from "./studioActions";

const useStudioActions = () => {
  const dispatch = useDispatch();

  const getPhotoStudioList = async () => {
    dispatch(showLoader());

    await Api.fetchPhotoStudioList()
      .then(response => {
        dispatch(fetchPhotoStudioList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const getPhotoStudio = async ({ studioId }) => {
    dispatch(showLoader());

    await Api.fetchPhotoStudioInformation({ studioId })
      .then(response => {
        dispatch(fetchPhotoStudioInformation(response));
      })
      .catch(error => console.log(error));

    await Api.fetchStudioPhotoPackage({ studioId })
      .then(response => {
        dispatch(fetchStudioPhotoPackage(response));
      })
      .catch(error => console.log(error));

    await Api.fetchStudioFeedbackList({ studioId })
      .then(response => {
        dispatch(fetchStudioFeedbackList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getPhotoStudioList, getPhotoStudio };
};

export default useStudioActions;
