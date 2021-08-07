import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { fetchTourManagerProfile, fetchTourManagerTourList } from "./tourManagerActions";

const useTourManagerActions = () => {
  const dispatch = useDispatch();

  const getTourManagerProfile = async ({ tourManagerId }) => {
    dispatch(showLoader());

    await Api.fetchTourManagerProfile({ tourManagerId })
      .then(response => {
        dispatch(fetchTourManagerProfile(response));
      })
      .catch(error => console.log(error));

    await Api.fetchTourManagerTourList({ tourManagerId })
      .then(response => {
        dispatch(fetchTourManagerTourList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getTourManagerProfile };
};

export default useTourManagerActions;
