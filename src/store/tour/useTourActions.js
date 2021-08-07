import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import {
  fetchTourList,
  fetchTourInformation,
  fetchPhotoPackage,
  fetchTourManager,
} from "./tourActions";

const useTourActions = () => {
  const dispatch = useDispatch();

  const getTourList = async () => {
    dispatch(showLoader());

    await Api.fetchTourList()
      .then(response => {
        dispatch(fetchTourList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const getTour = async ({ tourId }) => {
    dispatch(showLoader());

    await Api.fetchTourInformation(tourId)
      .then(response => {
        dispatch(fetchTourInformation(response));
      })
      .catch(error => console.log(error));

    await Api.fetchPhotoPackage(tourId)
      .then(response => {
        dispatch(fetchPhotoPackage(response));
      })
      .catch(error => console.log(error));

    await Api.fetchTourManager(tourId)
      .then(response => {
        dispatch(fetchTourManager(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getTourList, getTour };
};

export default useTourActions;
