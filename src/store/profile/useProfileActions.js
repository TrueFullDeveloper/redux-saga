import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { fetchProfile } from "./profileActions";

const useProfileActions = () => {
  const dispatch = useDispatch();

  const getProfile = async ({ userId }) => {
    dispatch(showLoader());

    await Api.fetchProfile({ userId })
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
