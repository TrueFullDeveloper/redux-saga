import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { addLoaderCall, subLoaderCall } from "../loader/loaderActions";
import { fetchProfile } from "./profileActions";

const useProfileActions = () => {
  const dispatch = useDispatch();

  const getProfile = () => {
    dispatch(addLoaderCall());

    Api.fetchProfile()
      .then(response => {
        dispatch(fetchProfile(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(subLoaderCall());
      });
  };

  return { getProfile };
};

export default useProfileActions;
