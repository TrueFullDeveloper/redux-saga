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

  const getTourList = () => {
    dispatch(showLoader());

    Api.fetchTourList()
      .then(response => {
        dispatch(fetchTourList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const getTour = ({ tourId }) => {
    dispatch(showLoader());

    Api.fetchTourInformation({ tourId })
      .then(response => {
        dispatch(fetchTourInformation(response));
      })
      .catch(error => console.log(error));

    Api.fetchPhotoPackage({ tourId })
      .then(response => {
        dispatch(fetchPhotoPackage(response));
      })
      .catch(error => console.log(error));

    Api.fetchTourManager({ tourId })
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
