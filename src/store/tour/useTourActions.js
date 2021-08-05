import { useDispatch } from "react-redux";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { login, signup } from "./tourActions";

const useAuthActions = () => {
  const dispatch = useDispatch();

  const doLogin = async ({ email, password }) => {
    dispatch(showLoader());

    await Api.login({ email, password })
      .then(response => {
        dispatch(login(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const doSignup = async ({ email, password, userName }) => {
    dispatch(showLoader());

    await Api.signup({ email, password, userName })
      .then(response => {
        dispatch(signup(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  return { doLogin, doSignup };
};

export default useAuthActions;
