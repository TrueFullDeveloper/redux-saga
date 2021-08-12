import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { addLoaderCall, subLoaderCall } from "../loader/loaderActions";
import { fetchTourManagerProfile, fetchTourManagerTourList } from "./tourManagerActions";

const useTourManagerActions = () => {
  const dispatch = useDispatch();

  const getTourManagerProfile = ({ tourManagerId }) => {
    dispatch(addLoaderCall());

    Api.fetchTourManagerProfile({ tourManagerId })
      .then(response => {
        dispatch(fetchTourManagerProfile(response));
      })
      .catch(error => console.log(error));

    Api.fetchTourManagerTourList({ tourManagerId })
      .then(response => {
        dispatch(fetchTourManagerTourList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  return { getTourManagerProfile };
};

export default useTourManagerActions;
