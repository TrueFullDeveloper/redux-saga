import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { addLoaderCall, subLoaderCall } from "../loader/loaderActions";
import {
  fetchTourList,
  fetchTourInformation,
  fetchPhotoPackage,
  fetchTourManager,
} from "./tourActions";

const useTourActions = () => {
  const dispatch = useDispatch();

  const getTourList = () => {
    dispatch(addLoaderCall());

    Api.fetchTourList()
      .then(response => {
        dispatch(fetchTourList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  const getTour = ({ tourId }) => {
    dispatch(addLoaderCall());

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
        dispatch(subLoaderCall());
      });
  };

  return { getTourList, getTour };
};

export default useTourActions;
