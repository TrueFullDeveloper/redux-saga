import { useDispatch } from "react-redux";
import { USER_TOKEN } from "../../config/constans";
import { Api } from "../api/api";
import { hideLoader, showLoader } from "../loader/loaderActions";
import { login, signup, tokenUpdate } from "./authActions";

const useAuthActions = () => {
  const dispatch = useDispatch();

  const doLogin = ({ email, password }) => {
    dispatch(showLoader());

    Api.login({ email, password })
      .then(response => {
        dispatch(login(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const doSignup = ({ email, password, userName }) => {
    dispatch(showLoader());

    Api.signup({ email, password, userName })
      .then(response => {
        dispatch(signup(response));
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const doTokenUpdate = () => {
    const userToken = localStorage.getItem(USER_TOKEN);

    if (userToken) {
      dispatch(showLoader());

      Api.tokenUpdate({ userToken })
        .then(response => {
          dispatch(tokenUpdate(response));
        })
        .catch(error => console.log(error))
        .finally(() => {
          dispatch(hideLoader());
        });
    }
  };

  return { doLogin, doSignup, doTokenUpdate };
};

export default useAuthActions;
