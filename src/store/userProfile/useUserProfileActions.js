import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { fetchUserProfile, fetchUserFeedbackList } from "./userProfileActions";

const useUserProfileActions = () => {
  const dispatch = useDispatch();

  const getUserProfile = async ({ userId }) => {
    dispatch(showLoader());

    await Api.fetchUserProfile({ userId })
      .then(response => {
        dispatch(fetchUserProfile(response));
      })
      .catch(error => console.log(error));

    await Api.fetchUserFeedbackList({ userId })
      .then(response => {
        dispatch(fetchUserFeedbackList(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { getUserProfile };
};

export default useUserProfileActions;
