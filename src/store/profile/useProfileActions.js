import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { fetchProfile } from "./profileActions";

const useProfileActions = () => {
  const dispatch = useDispatch();

  const getProfile = () => {
    dispatch(showLoader());

    Api.fetchProfile()
      .then(response => {
        dispatch(fetchProfile(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getProfile };
};

export default useProfileActions;
