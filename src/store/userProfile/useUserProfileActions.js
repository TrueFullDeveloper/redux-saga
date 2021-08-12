import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { addLoaderCall, subLoaderCall } from "../loader/loaderActions";
import { fetchUserProfile } from "./userProfileActions";

const useUserProfileActions = () => {
  const dispatch = useDispatch();

  const getUserProfile = ({ userId }) => {
    dispatch(addLoaderCall());

    Api.fetchUserProfile({ userId })
      .then(response => {
        dispatch(fetchUserProfile(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  return { getUserProfile };
};

export default useUserProfileActions;
