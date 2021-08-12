import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { addLoaderCall, subLoaderCall } from "../loader/loaderActions";
import {
  fetchPhotoStudioList,
  fetchPhotoStudioInformation,
  fetchStudioPhotoPackage,
} from "./studioActions";

const useStudioActions = () => {
  const dispatch = useDispatch();

  const getPhotoStudioList = () => {
    dispatch(addLoaderCall());

    Api.fetchPhotoStudioList()
      .then(response => {
        dispatch(fetchPhotoStudioList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  const getPhotoStudio = ({ studioId }) => {
    dispatch(addLoaderCall());

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
        dispatch(subLoaderCall());
      });
  };

  return { getPhotoStudioList, getPhotoStudio };
};

export default useStudioActions;
