import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { fetchUserProfile } from "./userProfileActions";

const useUserProfileActions = () => {
  const dispatch = useDispatch();

  const getUserProfile = ({ userId }) => {
    dispatch(showLoader());

    Api.fetchUserProfile({ userId })
      .then(response => {
        dispatch(fetchUserProfile(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getUserProfile };
};

export default useUserProfileActions;
